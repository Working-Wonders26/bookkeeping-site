export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="font-bold text-lg">
          Working Wonders Bookkeeping
        </div>

        <nav className="space-x-6 hidden md:block">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

      </div>
    </header>
  );
}