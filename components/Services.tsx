export default function TeethCleaningPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Teeth Cleaning
      </h1>

      <p className="text-lg mb-6">
        Professional teeth cleaning removes plaque, tartar, and stains to
        keep your teeth healthy and your smile bright.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Removes plaque and tartar</li>
        <li>Prevents cavities</li>
        <li>Freshens breath</li>
        <li>Healthy gums</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Procedure
      </h2>

      <p>
        Our dentist gently removes plaque and tartar, polishes your teeth,
        and checks your overall oral health.
      </p>

      <a
        href="/contact"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Book Appointment
      </a>
    </div>
  );
}