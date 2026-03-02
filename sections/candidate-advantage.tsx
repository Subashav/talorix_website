"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CandidateAdvantageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      displayLabel: "Learn",
      title: "Practice AI Interviews",
      description: "Get unlimited practice sessions to improve your interview skills. Build confidence before real opportunities.",
      features: ["Unlimited practice", "Instant feedback", "Performance tracking"],
    },
    {
      displayLabel: "Communicate",
      title: "Improve Communication",
      description: "Receive detailed feedback on your communication style, clarity, and confidence. Learn what works and what doesn't.",
      features: ["Speech analysis", "Body language tips", "Confidence scoring"],
    },
    {
      displayLabel: "Discover",
      title: "Get Discovered by Employers",
      description: "Your AI interview score makes you visible to top hiring companies. No more sending hundreds of applications.",
      features: ["Direct employer access", "Smart matching", "Verified employers"],
    },
    {
      displayLabel: "Profile",
      title: "Build Your Interview Profile",
      description: "Create a comprehensive profile showcasing your skills, interview performance, and personality traits.",
      features: ["Skill showcase", "Video portfolio", "Performance insights"],
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-xs font-medium text-blue-400">For Candidates</span>
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-4">
            Stand Out from the Crowd
          </h2>
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
            Build your skills, showcase your talent, and get discovered by top employers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              className="group"
            >
              <div className="bg-[#0F0F0F] border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300 hover:shadow-2xl">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#FF8C00]/10 text-[#FF8C00] font-bold text-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.displayLabel}
                </div>

                {/* Title & Description */}
                <h3 className="text-[18px] font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Features list */}
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#FF8C00] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[13px] text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for candidates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#FF8C00]/10 via-[#FF8C00]/5 to-transparent border border-[#FF8C00]/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-4">
              Ready to Level Up Your Career?
            </h3>
            <p className="text-[15px] text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of candidates who have improved their interview skills and landed their dream jobs
            </p>
            <button className="px-8 py-3.5 bg-[#FF8C00] hover:bg-[#FFA500] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#FF8C00]/30 hover:scale-105">
              Start Your Free AI Interview
            </button>
          </div>
        </motion.div>

        {/* Testimonial-style stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: "Learn", label: "At Your Own Pace" },
            { number: "Improve", label: "Your Skills" },
            { number: "Get", label: "Better Opportunities" },
            { number: "Succeed", label: "In Your Career" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-[28px] font-bold text-[#FF8C00] mb-1">{stat.number}</div>
              <div className="text-[13px] text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
