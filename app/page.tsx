"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="px-10 py-24 text-center bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Professional Bookkeeping for Small Businesses
          </h2>
          <p className="max-w-xl mx-auto text-gray-600">
            Accurate records, timely reporting, and complete peace of mind.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </section>
    </main>
  );
}
