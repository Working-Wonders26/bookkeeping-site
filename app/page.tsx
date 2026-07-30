export default function Home() {
  return (
    <main className="bg-[#F8F5F1] text-[#2B2B2B]">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="uppercase tracking-[0.2em] text-sm text-[#7A6A58] mb-4">
            Working Wonders Bookkeeping
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Helping Small Businesses Feel Confident in Their Finances
          </h1>

          <p className="text-lg text-[#5F5F5F] mb-8 max-w-xl leading-relaxed">
            Working Wonders Bookkeeping provides personalized bookkeeping
            services designed to help businesses stay organized,
            reduce stress, and gain clarity in their finances. We currently are serving
            in Middleton, Idaho and remotely across the United States
          </p>

          <a
            href="https://calendly.com/workingwondersbk/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#7A6A58] text-white px-8 py-4 rounded-full hover:bg-[#5E5144] transition"
          >
            Schedule Consultation
          </a>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <img
            src="/owners.jpg"
            alt="Sean and Hailey Wheaton"
            className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
          />

        </div>

      </section>


      {/* TRUST STRIP */}

      <section className="border-t border-b border-[#E7E1DA] bg-white">

        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <p className="font-medium">QuickBooks Certified</p>
          </div>

          <div>
            <p className="font-medium">5+ Years Experience</p>
          </div>

          <div>
            <p className="font-medium">Small Business Focused</p>
          </div>

          <div>
            <p className="font-medium">Personalized Support</p>
          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section
        id="services"
        className="max-w-6xl mx-auto px-6 py-16 sm:py-20 lg:py-24"
      >

        <div className="max-w-2xl mb-16">

          <p className="uppercase tracking-[0.2em] text-sm text-[#7A6A58] mb-4">
            Services
          </p>

          <h2 className="text-4xl font-semibold mb-6">
            Bookkeeping Support Designed for Growing Businesses
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">
              Monthly Bookkeeping
            </h3>

            <p className="text-[#5F5F5F] leading-relaxed">
              Accurate monthly bookkeeping to keep your business
              organized and financially prepared.
            </p>
          </div>


          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">
              Payroll Support
            </h3>

            <p className="text-[#5F5F5F] leading-relaxed">
              Reliable payroll support designed to simplify operations
              and reduce stress.
            </p>
          </div>


          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">
              Financial Reporting
            </h3>

            <p className="text-[#5F5F5F] leading-relaxed">
              Clear financial reports that help business owners make
              informed decisions with confidence.
            </p>
          </div>


          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">
              Tax Preparation Support
            </h3>

            <p className="text-[#5F5F5F] leading-relaxed">
              Organized financial records prepared for tax season and
              collaboration with your CPA.
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section
        id="about"
        className="bg-white py-16 sm:py-20 lg:py-16 sm:py-20 lg:py-24"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.2em] text-sm text-[#7A6A58] mb-4">
            Meet the Owners
          </p>

          <h2 className="text-4xl font-semibold mb-8">
            A Husband-and-Wife Team Passionate About Helping Businesses Grow
          </h2>

          <p className="text-lg text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto">
            My name is Sean Wheaton. My wife and I founded 
            Working Wonders Bookkeeping with a mission to 
            provide dependable financial support for businesses.
            With over five years of bookkeeping experience and 
            a background working directly under a CPA,
            Hailey and I combine personalized service with modern bookkeeping
            solutions. We want to help get you back to
            focusing on; building and running your business and, creating a
            unique work-life balance, personally fit to your goals. Don't 
            hesitate to call or email us today for a free consultation! 
            Phone: 208-506-8663 
            Email: workingwondersbk@gmail.com
          </p>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20 lg:py-24 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Ready to simplify your bookkeeping?
        </h2>

        <p className="text-lg text-[#5F5F5F] mb-10">
          Schedule a free consultation and discover how Working Wonders
          Bookkeeping can support your business.
          Check us out at Facebook too! 
        
        </p>

        <a
          href="https://calendly.com/workingwondersbk/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#7A6A58] text-white px-8 py-4 rounded-full hover:bg-[#5E5144] transition"
        >
          Schedule Consultation
        </a>

      </section>

    </main>
  );
}