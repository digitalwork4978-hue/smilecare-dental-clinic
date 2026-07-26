import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Teeth Cleaning",
    image: "/image/cleaning.jpg",
    description:
      "Professional cleaning to remove plaque and maintain healthy teeth.",
    link: "/services/teeth-cleaning",
  },
  {
    title: "Root Canal",
    image: "/image/rootcanal.jpg",
    description:
      "Pain-free root canal treatment using modern technology.",
    link: "/services/root-canal",
  },
  {
    title: "Dental Implants",
    image: "/image/implant.jpg",
    description:
      "Permanent replacement for missing teeth with natural results.",
    link: "/services/dental-implants",
  },
  {
    title: "Teeth Whitening",
    image: "/image/whitening.jpg",
    description:
      "Professional whitening treatment for a brighter smile.",
    link: "/services/teeth-whitening",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-700">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600">
            Complete dental care for the entire family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-sky-700">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-block mt-6 bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}