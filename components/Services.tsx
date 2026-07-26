import Link from "next/link";

const services = [
  {
    title: "🦷 Teeth Cleaning",
    description:
      "Professional cleaning to keep your teeth healthy and bright.",
    link: "/services/teeth-cleaning",
  },
  {
    title: "🩺 Root Canal",
    description:
      "Pain-free root canal treatment with advanced technology.",
    link: "/services/root-canal",
  },
  {
    title: "😁 Teeth Whitening",
    description:
      "Restore a brighter, whiter smile with safe treatments.",
    link: "/services/teeth-whitening",
  },
  {
    title: "🦷 Dental Implants",
    description:
      "Permanent replacement for missing teeth with natural results.",
    link: "/services/dental-implants",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          We provide comprehensive dental care using modern technology and
          personalised treatment plans for every patient.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-sky-600 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-block bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}