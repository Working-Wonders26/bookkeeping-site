import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-black text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Logo + Business Name */}

        <Link
          href="/"
          className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
        >
          <img
            src="/logo.png"
            alt="Working Wonders Bookkeeping LLC"
            className="w-24 sm:w-28"
          />

          <span className="font-bold text-xl leading-tight max-w-xs">
            Working Wonders Bookkeeping LLC
          </span>
        </Link>

        {/* Navigation Links */}

        <div className="flex flex-wrap justify-center gap-6 text-lg">

          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-gray-300 transition">
            Services
          </Link>

          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}