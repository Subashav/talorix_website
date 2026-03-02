"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const certifications = [
    { name: "GDPR Compliant", label: "Global" },
    { name: "SOC 2 Certified", label: "Secure" },
    { name: "ISO 27001", label: "Standard" },
    { name: "SSL Encrypted", label: "Private" },
  ];

  return (
    <section ref={ref} className="py-16 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-2">
            Security & Compliance
          </h2>
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade security standards you can rely on
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-8 text-center hover:border-gray-700 transition-all duration-300"
            >
              <div className="text-[32px] font-bold text-[#FF8C00] mb-3">
                {cert.label}
              </div>
              <div className="text-[14px] text-gray-300 font-medium">
                {cert.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
