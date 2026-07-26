export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          SmileCare Dental Clinic
        </h1>

        <p className="mt-6 text-2xl font-medium">
          Healthy Smiles. Happy Lives.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
          Experience world-class dental care with advanced technology,
          experienced dentists, and personalized treatments for you and
          your family.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-100 transition">
            Book Appointment
          </button>

          <button className="border-2 border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
}
