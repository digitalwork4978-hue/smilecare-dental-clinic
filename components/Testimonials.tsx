export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      review: "Excellent dental care. Friendly doctors and painless treatment.",
    },
    {
      name: "Priya",
      review: "Very clean clinic and professional staff. Highly recommended.",
    },
    {
      name: "Arjun",
      review: "Affordable prices with excellent service. Five stars!",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white shadow-lg rounded-xl p-6"
            >
              <p>"{review.review}"</p>

              <h3 className="mt-6 font-bold text-blue-600">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
