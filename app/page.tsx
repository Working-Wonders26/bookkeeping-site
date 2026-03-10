import Header from "../components/Header";
export default function Home() {
return (
  <>
    <Header />

    <main className="max-w-6xl mx-auto px-6 py-12">

      <section className="text-center py-16">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">
          Stress-Free Bookkeeping for Small Businesses
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8">
          Working Wonders Bookkeeping helps business owners stay organized,
          confident, and prepared with accurate bookkeeping and financial reporting.
        </p>

 <a
  href="https://calendly.com/workingwondersbk/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
>
          Schedule Free Consultation
        </a>
      </section>

      <section className="py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>✔ Small Business Focused</div>
        <div>✔ Accurate Financials</div>
        <div>✔ Reliable Communication</div>
        <div>✔ Stress-Free Bookkeeping</div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Monthly Bookkeeping
            </h3>
            <p>
              Keep your financial records organized and accurate every month.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Payroll Support
            </h3>
            <p>
              Reliable payroll assistance for your growing business.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Financial Reporting
            </h3>
            <p>
              Clear financial reports to help guide business decisions.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-xl mb-2">
              Tax Preparation Support
            </h3>
            <p>
              Clean and organized records ready for your tax professional.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. Schedule Consultation
            </h3>
            <p>We discuss your bookkeeping needs.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. We Organize Your Books
            </h3>
            <p>We maintain accurate financial records.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Receive Clear Reports
            </h3>
            <p>Understand your finances with monthly reports.</p>
          </div>

        </div>
      </section>
{/* OWNERS SECTION */}

<section id="about" className="py-20 bg-gray-50">

  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* Photo */}

 <div className="flex justify-center">
  <img
    src="/owners.jpg"
    alt="Sean and Hailey Wheaton"
    className="rounded-xl w-80 shadow-lg"
  />
</div>

    {/* Text */}

    <div>
      <h2 className="text-3xl font-bold mb-6">
        Meet the Owners
      </h2>

      <p className="mb-4">
        Sean and Hailey Wheaton are the husband-and-wife team behind
        Working Wonders Bookkeeping. They are passionate about helping
        small business owners succeed by providing reliable bookkeeping
        and clear financial insights that support long-term growth.
      </p>

      <p className="mb-4">
        Hailey brings over five years of bookkeeping experience,
        including three years working directly under a CPA where she
        developed strong skills in financial organization, reporting,
        and accuracy.
      </p>

      <p>
        As QuickBooks Certified professionals, Sean and Hailey stay
        committed to continuous learning and embrace modern tools —
        including AI-driven solutions — to provide efficient,
        forward-thinking financial support for their clients.
      </p>

    </div>

  </div>

</section>
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Ready to simplify your bookkeeping?
        </h2>

<a
  href="https://calendly.com/workingwondersbk/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
>
          Schedule Your Free Consultation
        </a>
      </section>

</main>
</>
  );
}