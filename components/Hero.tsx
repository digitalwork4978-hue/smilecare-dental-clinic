import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[650px]">

      <Image
        src="/image/hero.jpg"
        alt="SmileCare Dental Clinic"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">

          <h1 className="text-5xl md:text-7xl font-extrabold">
            SmileCare Dental Clinic
          </h1>

          <p className="mt-6 text-2xl">
            Healthy Smiles. Happy Lives.
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200">
            Advanced dental treatments, experienced dentists,
            painless procedures and affordable care for the whole family.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="#appointment"
              className="bg-sky-600 hover:bg-sky-700 px-8 py-4 rounded-xl font-bold"
            >
              Book Appointment
            </a>

            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold"
            >
              Our Services
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}