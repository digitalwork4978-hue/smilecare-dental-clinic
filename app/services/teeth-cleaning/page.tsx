export default function TeethCleaningPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-sky-700">
        Teeth Cleaning
      </h1>

      <p className="mt-6 text-gray-600 text-lg">
        Professional teeth cleaning removes plaque, tartar, and stains,
        helping keep your teeth and gums healthy.
      </p>

      <h2 className="text-3xl font-bold mt-10">
        Benefits
      </h2>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Removes plaque and tartar</li>
        <li>Freshens breath</li>
        <li>Helps prevent gum disease</li>
        <li>Maintains a bright smile</li>
      </ul>

      <a
        href="/#appointment"
        className="inline-block mt-10 bg-sky-600 text-white px-6 py-3 rounded-xl"
      >
        Book Appointment
      </a>
    </main>
  );
}