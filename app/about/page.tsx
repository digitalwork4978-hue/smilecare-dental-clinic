import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="bg-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">About SmileCare</h1>
          <p className="mt-4 text-xl">
            Caring for your smile with modern dentistry.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <Image
            src="/image/clinic.jpg"
            alt="SmileCare Dental Clinic"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-sky-700 mb-6">
              Welcome to SmileCare Dental Clinic
            </h2>

            <p className="text-gray-600 leading-8">
              At SmileCare Dental Clinic, we provide comprehensive dental
              treatments using modern technology and experienced professionals.
              Our goal is to deliver painless, affordable, and high-quality
              dental care for patients of all ages.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-sky-50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-sky-700">10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="bg-sky-50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-sky-700">5000+</h3>
                <p>Happy Patients</p>
              </div>

              <div className="bg-sky-50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-sky-700">15+</h3>
                <p>Dental Services</p>
              </div>

              <div className="bg-sky-50 rounded-xl p-6 text-center">
                <h3 className="text-3xl font-bold text-sky-700">100%</h3>
                <p>Patient Satisfaction</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}