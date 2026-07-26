import Link from "next/link";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Professional cleaning to keep your teeth healthy.",
    link: "/services/teeth-cleaning",
  },
  {
    title: "Root Canal",
    description: "Safe and painless root canal treatment.",
    link: "/services/root-canal",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with permanent implants.",
    link: "/services/dental-implants",
  },
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with whitening treatment.",
    link: "/services/teeth-whitening",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl">
          Complete Dental Care for the Whole Family
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}