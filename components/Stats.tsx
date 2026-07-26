export default function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "5000+",
      title: "Happy Patients",
    },
    {
      number: "15+",
      title: "Dental Services",
    },
    {
      number: "4.9★",
      title: "Google Rating",
    },
  ];

  return (
    <section className="bg-sky-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="mt-3 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}