"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    appointment_date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("appointments")
      .insert([formData]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      appointment_date: "",
      message: "",
    });
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Book an Appointment
          </h2>

          <p className="mt-4 text-gray-500">
            Schedule your visit with our experienced dental specialists.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl shadow-xl p-10 border border-slate-200">

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
              />

              <input
                type="date"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                required
className="w-full p-4 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500 outline-none"              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="md:col-span-2 w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
              >
                <option value="">Select Service</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Additional Message"
                className="md:col-span-2 w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-bold text-lg transition disabled:opacity-50"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}