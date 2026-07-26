export default function TeethWhiteningPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Teeth Whitening
      </h1>

      <p className="text-lg mb-6">
        Professional teeth whitening safely removes stains and brightens
        your smile using modern dental technology.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Whiter smile</li>
        <li>Boosts confidence</li>
        <li>Safe treatment</li>
        <li>Quick results</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Procedure
      </h2>

      <p>
        A professional whitening gel is applied and activated to remove
        stains while protecting your enamel.
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
