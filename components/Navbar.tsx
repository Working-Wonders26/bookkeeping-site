import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Working Wonders Bookkeeping LLC" width="90" />
        <span className="font-bold">Working Wonders Bookkeeping LLC</span>
      </Link>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}