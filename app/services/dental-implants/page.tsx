export default function DentalImplantsPage() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Dental Implants
      </h1>

      <p className="text-lg mb-6">
        Dental implants are permanent replacements for missing teeth that
        look, feel, and function like natural teeth.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Natural appearance</li>
        <li>Permanent solution</li>
        <li>Improves chewing</li>
        <li>Preserves jawbone</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Procedure
      </h2>

      <p>
        A titanium implant is placed into the jawbone, allowed to heal,
        and topped with a custom-made crown.
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