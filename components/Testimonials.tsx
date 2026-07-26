export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Kumar",
      review:
        "Excellent service! The doctors were very friendly and my treatment was completely painless.",
      rating: "★★★★★",
    },
    {
      name: "Priya Sharma",
      review:
        "Very clean clinic with modern equipment. I highly recommend SmileCare.",
      rating: "★★★★★",
    },
    {
      name: "Arjun Reddy",
      review:
        "Professional staff and affordable prices. Booking an appointment was very easy.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h2>

          <p className="mt-4 text-gray-500">
            Trusted by thousands of happy patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-xl mb-4">
                {item.rating}
              </div>

              <p className="text-gray-600 italic mb-6">
                "{item.review}"
              </p>

              <div className="border-t pt-4">
                <h3 className="font-bold text-sky-600">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Verified Patient
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}