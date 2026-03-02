"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-[#0F0F0F] relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF8C00] opacity-[0.12] blur-[150px] rounded-full"></div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FF8C00] rounded-full opacity-20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 rounded-3xl p-12 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-1.5 bg-[#FF8C00]/10 border border-[#FF8C00]/20 rounded-full mb-6">
              <span className="text-xs font-medium text-[#FF8C00]">Get Started Today</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-4 leading-tight">
              Start Hiring Smarter with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#FFA500]">
                Talorix
              </span>
            </h2>
            <p className="text-[15px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies already using AI to hire faster and better. Get started in minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#FF8C00] hover:bg-[#FFA500] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-2xl hover:shadow-[#FF8C00]/30 hover:scale-105">
              Create Employer Account
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-lg border-2 border-gray-700 hover:border-[#FF8C00] transition-all duration-200">
              Take AI Interview
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free trial available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Setup in 5 minutes</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
