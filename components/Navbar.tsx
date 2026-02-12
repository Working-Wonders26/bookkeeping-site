import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-sm bg-white">
      <h1 className="text-xl font-bold">Working Wonders Bookkeeping LLC</h1>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className="text-blue-600 font-medium">
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
