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
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Book an Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Service</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Dental Implants</option>
            <option>Teeth Whitening</option>
          </select>

          <input
            type="date"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            rows={4}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:bg-gray-500"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}