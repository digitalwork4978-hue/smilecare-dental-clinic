import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teeth Whitening | SmileCare Dental Clinic",
  description:
    "Professional teeth whitening treatments in Tirupati for a brighter smile.",
};

export default function TeethWhiteningPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-700">
        Teeth Whitening
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Brighten your smile with safe and effective professional teeth
        whitening treatments.
      </p>

      <h2 className="text-3xl font-bold mt-10">
        Benefits
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Brighter smile</li>
        <li>Quick treatment</li>
        <li>Safe procedure</li>
        <li>Boosts confidence</li>
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