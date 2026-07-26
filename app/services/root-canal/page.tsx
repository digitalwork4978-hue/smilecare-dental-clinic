export default function RootCanalPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Root Canal Treatment
      </h1>

      <p className="text-lg mb-6">
        Root Canal Treatment removes infected pulp while preserving your
        natural tooth using advanced painless techniques.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Relieves severe tooth pain</li>
        <li>Saves natural tooth</li>
        <li>Stops infection</li>
        <li>Long-lasting solution</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Procedure
      </h2>

      <p>
        The infected pulp is removed, the canal is cleaned, disinfected,
        filled, and sealed to restore tooth function.
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