import Image from "next/image";

const services = [
  {
    title: "Teeth Cleaning",
    image: "/image/cleaning.jpg",
    description:
      "Professional dental cleaning removes plaque and tartar to keep your teeth healthy and your smile bright.",
  },
  {
    title: "Root Canal Treatment",
    image: "/image/rootcanal.jpg",
    description:
      "Pain-free root canal treatment using advanced technology to save infected teeth.",
  },
  {
    title: "Dental Implants",
    image: "/image/implant.jpg",
    description:
      "Permanent tooth replacement with natural appearance and long-lasting durability.",
  },
  {
    title: "Teeth Whitening",
    image: "/image/whitening.jpg",
    description:
      "Safe and effective teeth whitening treatments for a brighter smile.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-sky-700">
            Our Dental Services
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive dental care with modern technology,
            experienced dentists and personalised treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold text-sky-700">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}