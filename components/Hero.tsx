export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold">
          SmileCare Dental Clinic
        </h1>

        <p className="mt-6 text-xl md:text-2xl">
          Healthy Smiles. Happy Lives.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-sky-100">
          Professional dental care with experienced dentists,
          painless treatments, advanced technology and affordable prices.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#appointment"
            className="bg-white text-sky-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100"
          >
            Book Appointment
          </a>

          <a
            href="/services"
            className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-sky-700"
          >
            Our Services
          </a>
        </div>

      </div>
    </section>
  );
}