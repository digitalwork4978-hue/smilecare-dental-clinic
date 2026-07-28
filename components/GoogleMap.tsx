export default function GoogleMap() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-sky-700">
            Visit Our Clinic
          </h2>

          <p className="mt-3 text-gray-600">
            Find us easily on Google Maps.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31021.652197439806!2d79.3673291032918!3d13.614727652344305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b6a5f9c4b8f%3A0xa863a2072f547f2!2sSV%20DENTAL%20CARE_Dr%20PAVAN%E2%80%99s(BDS%2CMDS)!5e0!3m2!1sen!2sin!4v1785128773704!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Clinic Location"
          />
        </div>

      </div>
    </section>
  );
}