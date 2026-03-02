"use client";
import { motion } from "framer-motion";

const points = [
  "Modern hiring platform",
  "Fast applications",
  "Verified employers",
  "Smart hiring tools",
  "Clean professional UI",
];

export default function WhyTalorixSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0F172A]">Why Talorix?</h2>
          <ul className="space-y-4">
            {points.map((point, i) => (
              <motion.li
                key={point}
                className="flex items-center text-lg text-gray-700"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 text-white mr-3">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8.5l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 shadow-sm border border-indigo-100"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-indigo-700 text-lg font-medium mb-2">Talorix is built for modern hiring teams and ambitious candidates.</div>
          <div className="text-gray-500 text-sm">Experience a platform that puts speed, trust, and user experience first.</div>
        </motion.div>
      </div>
    </section>
  );
}
