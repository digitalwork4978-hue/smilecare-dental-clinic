export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-xl">
          We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Clinic Information
            </h2>

            <p><strong>📍 Address:</strong> Tirupati, Andhra Pradesh</p>
            <p className="mt-3"><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p className="mt-3"><strong>✉️ Email:</strong> info@smilecare.com</p>
            <p className="mt-3"><strong>🕒 Hours:</strong> Mon–Sat, 9 AM – 8 PM</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}