export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose SmileCare?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Experienced Dentists</h3>
            <p className="mt-4">
              Our dentists have years of experience in advanced dental care.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Modern Equipment</h3>
            <p className="mt-4">
              We use the latest dental technology for accurate treatment.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold">Affordable Pricing</h3>
            <p className="mt-4">
              High-quality treatment at affordable prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}