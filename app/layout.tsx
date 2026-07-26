export default function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We recommend booking an appointment before visiting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide Root Canal treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide painless Root Canal treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Teeth Whitening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Professional teeth whitening services are available.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}