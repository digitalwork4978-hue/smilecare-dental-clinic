export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "SmileCare Dental Clinic",
    image: "https://your-domain.vercel.app/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Tirupati",
      addressRegion: "Andhra Pradesh",
      postalCode: "517501",
      addressCountry: "IN",
    },
    telephone: "+91 9876543210",
    openingHours: "Mo-Sa 09:00-20:00",
    url: "https://your-domain.vercel.app",
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
