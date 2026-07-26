import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root Canal Treatment | SmileCare Dental Clinic",
  description:
    "Pain-free root canal treatment in Tirupati using advanced technology.",
};

export default function RootCanalPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-700">
        Root Canal Treatment
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Save infected teeth with painless root canal treatment performed by
        experienced dentists.
      </p>

      <h2 className="text-3xl font-bold mt-10">
        Benefits
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Relieves tooth pain</li>
        <li>Saves natural teeth</li>
        <li>Prevents infection spread</li>
        <li>Long-lasting treatment</li>
      </ul>

      <a
        href="/#appointment"
        className="inline-block mt-10 bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-700"
      >
        Book Appointment
      </a>
    </main>
  );
}