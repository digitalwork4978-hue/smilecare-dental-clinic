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
  <section className="py-20 bg-white">
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

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          />

          <input
            type="date"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          />

          <select
            className="md:col-span-2 w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          >
            <option>Select Service</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Dental Implants</option>
            <option>Teeth Whitening</option>
          </select>

          <textarea
            rows={5}
            placeholder="Additional Message"
            className="md:col-span-2 w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 outline-none"
          />

        </div>

        <button
          className="mt-8 w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-xl font-bold text-lg transition"
        >
          Book Appointment
        </button>

      </div>

    </div>
  </section>
);
}