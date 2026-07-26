const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "Appointments are recommended, but walk-ins are welcome based on availability.",
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening is safe when performed by our dentists.",
  },
  {
    question: "How long does a root canal take?",
    answer: "Most root canal treatments are completed in one or two visits.",
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a dental check-up every six months.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we provide dental care for children and adults.",
  },
];

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Frequently Asked Questions
        </h1>

        <p className="mt-4 text-xl">
          Find answers to common dental questions.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h2 className="text-2xl font-bold">
                {faq.question}
              </h2>

              <p className="mt-3 text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}