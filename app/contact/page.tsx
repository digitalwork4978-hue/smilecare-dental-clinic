import GoogleMap from "@/components/GoogleMap";

export default function ContactPage() {
  return (
    <>
      <section className="bg-sky-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-slate-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">
              Clinic Information
            </h2>

            <div className="space-y-4 text-gray-700">
              <p><strong>📍 Address:</strong><br />Tirupati, Andhra Pradesh</p>

              <p><strong>📞 Phone:</strong><br />+91 98765 43210</p>

              <p><strong>✉️ Email:</strong><br />info@smilecare.com</p>

              <p><strong>🕒 Working Hours:</strong><br />
                Monday - Saturday<br />
                9:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-sky-700 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border rounded-lg p-4"
              />

              <button className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <GoogleMap />
    </>
  );
}