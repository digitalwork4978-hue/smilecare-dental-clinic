export default function About() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          About SmileCare Dental Clinic
        </h1>

        <p className="mt-4 text-xl">
          Healthy Smiles. Happy Lives.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-lg leading-8">
          SmileCare Dental Clinic is committed to providing
          high-quality dental care using modern technology and
          experienced dentists. We offer preventive, cosmetic,
          restorative, and emergency dental treatments in a
          comfortable and friendly environment.
        </p>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Patients Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold">
                Experienced Dentists
              </h3>

              <p className="mt-4">
                Highly qualified professionals providing expert care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold">
                Modern Technology
              </h3>

              <p className="mt-4">
                Latest equipment for accurate diagnosis and treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold">
                Affordable Care
              </h3>

              <p className="mt-4">
                Quality dental services at reasonable prices.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}