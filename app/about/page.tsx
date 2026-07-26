export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-center text-sky-700">
        About SmileCare Dental Clinic
      </h1>

      <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

        <img
          src="/image/clinic.jpg"
          alt="SmileCare Clinic"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h2 className="text-3xl font-bold">
            Your Trusted Dental Care Partner
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            SmileCare Dental Clinic provides world-class dental treatments
            using modern equipment and painless procedures.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            Our experienced dentists specialize in Root Canal Treatment,
            Dental Implants, Teeth Whitening, Braces, Cosmetic Dentistry,
            and complete family dental care.
          </p>

          <div className="mt-8 flex gap-6">

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                10+
              </h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-sky-600">
                5000+
              </h3>
              <p>Happy Patients</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}