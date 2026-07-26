import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implants | SmileCare Dental Clinic",
  description:
    "Permanent dental implant solutions in Tirupati for missing teeth.",
};

export default function DentalImplantsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-700">
        Dental Implants
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Replace missing teeth with natural-looking dental implants for a
        confident smile.
      </p>

      <h2 className="text-3xl font-bold mt-10">
        Benefits
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Natural appearance</li>
        <li>Permanent solution</li>
        <li>Improved chewing</li>
        <li>Long-lasting results</li>
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