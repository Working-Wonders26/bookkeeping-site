export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Reliable Bookkeeping for Small Businesses
      </h1>

      <p className="text-lg mb-8">
        Working Wonders Bookkeeping LLC helps business owners stay organized,
        confident, and stress-free with accurate bookkeeping and financial
        reporting.
      </p>

      <a
        href="https://calendly.com/workingwondersbk/30min"
        target="_blank"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
      >
        Schedule a Free Consultation
      </a>

      <div className="mt-12 text-left">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="space-y-2">
          <li>✔ Monthly Bookkeeping</li>
          <li>✔ Payroll Support</li>
          <li>✔ Financial Reports</li>
          <li>✔ Tax Preparation Support</li>
        </ul>
      </div>
    </div>
  );
}
