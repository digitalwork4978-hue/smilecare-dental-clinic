export default function WhyChooseUs() {
  const features = [
    {
      icon: "🦷",
      title: "Experienced Dentists",
      description:
        "Our qualified dental professionals provide safe and effective treatments.",
    },
    {
      icon: "💙",
      title: "Advanced Technology",
      description:
        "Modern equipment ensures accurate diagnosis and comfortable procedures.",
    },
    {
      icon: "😊",
      title: "Patient-Centred Care",
      description:
        "We focus on making every visit comfortable and stress-free.",
    },
    {
      icon: "💰",
      title: "Affordable Treatment",
      description:
        "Quality dental care with transparent and affordable pricing.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose SmileCare?
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We combine expert dental care, modern technology, and a friendly
            environment to give every patient the best experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-xl font-bold text-sky-600 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}