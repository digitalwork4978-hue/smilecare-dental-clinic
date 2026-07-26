import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400">
            SmileCare Dental Clinic
          </h2>

          <p className="mt-4 text-gray-300">
            Healthy Smiles. Happy Lives.
          </p>

          <p className="mt-2 text-gray-400">
            Providing quality dental care with modern technology and experienced dentists.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-sky-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400">About</Link></li>
            <li><Link href="/services" className="hover:text-sky-400">Services</Link></li>
            <li><Link href="/faq" className="hover:text-sky-400">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>📍 Tirupati, Andhra Pradesh</li>
            <li>📞 +91 7995026604</li>
            <li>📧 info@smilecare.com</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Working Hours
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Mon - Sat</li>
            <li>9:00 AM – 8:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} SmileCare Dental Clinic. All Rights Reserved.
      </div>
    </footer>
  );
}