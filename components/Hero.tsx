export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          SmileCare Dental Clinic
        </h1>

        <p className="mt-6 text-xl">
          Healthy Smiles. Happy Lives.
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Professional dental care with experienced dentists,
          advanced technology, and affordable treatments for
          the whole family.
        </p>

        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Book Appointment
        </button>

      </div>
    </section>
  );
}