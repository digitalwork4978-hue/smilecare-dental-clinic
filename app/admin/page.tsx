"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import * as XLSX from "xlsx";

type Appointment = {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  appointment_date: string;
  message: string;
  status: string;
};

export default function AdminPage() {
    const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const total = appointments.length;

const pending = appointments.filter(
  (a) => a.status === "Pending"
).length;

const confirmed = appointments.filter(
  (a) => a.status === "Confirmed"
).length;

const completed = appointments.filter(
  (a) => a.status === "Completed"
).length;

const cancelled = appointments.filter(
  (a) => a.status === "Cancelled"
).length;

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    router.push("/login");
    return;
  }

  getAppointments();
}
  async function getAppointments() {
    setLoading(true);

    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    setAppointments(data || []);
    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
  const appointment = appointments.find((a) => a.id === id);

  if (!appointment) return;

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);
    console.log("Updating:", id, status);
console.log("Error:", error);

  if (error) {
    alert(error.message);
    return;
  }

 const response = await fetch("/api/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: appointment.email,
    name: appointment.name,
    service: appointment.service,
    date: appointment.appointment_date,
    status,
  }),
});

console.log("API Status:", response.status);
console.log("API Response:", await response.text());


  getAppointments();
}

 async function deleteAppointment(id: number) {
  const confirmed = confirm(
    "Are you sure you want to delete this appointment?"
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("appointments")
    .delete()
    .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Appointment deleted successfully!");
  getAppointments();
}
  function exportToExcel() {
  const worksheet = XLSX.utils.json_to_sheet(appointments);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Appointments"
  );

  XLSX.writeFile(workbook, "appointments.xlsx");
}

  if (loading) {
    return (
      <div className="p-10 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>
      <button
  onClick={exportToExcel}
  className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded mb-6"
>
  Download Excel
</button>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">

  <div className="bg-blue-600 p-5 rounded-lg text-center">
    <h2 className="text-lg font-semibold">Total</h2>
    <p className="text-3xl font-bold">{total}</p>
  </div>

  <div className="bg-yellow-500 p-5 rounded-lg text-center">
    <h2 className="text-lg font-semibold">Pending</h2>
    <p className="text-3xl font-bold">{pending}</p>
  </div>

  <div className="bg-green-600 p-5 rounded-lg text-center">
    <h2 className="text-lg font-semibold">Confirmed</h2>
    <p className="text-3xl font-bold">{confirmed}</p>
  </div>

  <div className="bg-purple-600 p-5 rounded-lg text-center">
    <h2 className="text-lg font-semibold">Completed</h2>
    <p className="text-3xl font-bold">{completed}</p>
  </div>

  <div className="bg-red-600 p-5 rounded-lg text-center">
    <h2 className="text-lg font-semibold">Cancelled</h2>
    <p className="text-3xl font-bold">{cancelled}</p>
  </div>

</div>
      <input
  type="text"
  placeholder="Search by Name, Phone or Service..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-3 mb-4 rounded border border-gray-500 bg-gray-900 text-white"
/>

<input
  type="date"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
  className="w-full p-3 mb-6 rounded border border-gray-500 bg-gray-900 text-white"
/>

      <table className="w-full border border-gray-500 border-collapse">
        <thead>
          <tr className="bg-slate-800">
            <th className="border p-3">ID</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Phone</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Service</th>
            <th className="border p-3">Date</th>
            <th className="border p-3">Message</th>
            <th className="border p-3">Status</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 ? (
            <tr>
              <td
                colSpan={9}
                className="border p-6 text-center"
              >
                No appointments found.
              </td>
            </tr>
          ) : (
           appointments
  .filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase()) ||
      item.service.toLowerCase().includes(search.toLowerCase());

    const matchesDate =
      selectedDate === "" ||
      item.appointment_date === selectedDate;

    return matchesSearch && matchesDate;
  })
  .map((item) => (
              <tr key={item.id}>
                <td className="border p-3">{item.id}</td>
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.phone}</td>
                <td className="border p-3">{item.email}</td>
                <td className="border p-3">{item.service}</td>
                <td className="border p-3">
                  {item.appointment_date}
                </td>
                <td className="border p-3">
                  {item.message}
                </td>

                <td className="border p-3">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(item.id, e.target.value)
                    }
                    className="bg-gray-900 border border-gray-500 rounded px-3 py-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>

                <td className="border p-3">
                  <button
                    onClick={() => deleteAppointment(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}