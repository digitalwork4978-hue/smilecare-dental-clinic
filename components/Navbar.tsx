import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-600">
          SmileCare
        </h1>

        <div className="flex gap-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-sky-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-sky-600 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-sky-600 transition">
            Services
          </Link>

          <Link href="/faq" className="hover:text-sky-600 transition">
            FAQ
          </Link>

          <Link href="/contact" className="hover:text-sky-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}