"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RecruiterAdvantageSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI-Screened Candidates",
      description: "Every applicant goes through an AI interview before reaching your desk. No more wasted time on unqualified candidates.",
      metric: "95% pre-qualified",
      color: "#FF8C00",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Smart Candidate Ranking",
      description: "Candidates are automatically ranked by AI match score, skills alignment, and experience relevance.",
      metric: "Top 10% highlighted",
      color: "#FFA500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location Filtering",
      description: "Filter by city, region, or remote preference. Find local talent or build distributed teams effortlessly.",
      metric: "Global coverage",
      color: "#FF6B00",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Faster Hiring Process",
      description: "From job posting to shortlist in 48 hours. AI handles screening while you focus on final interviews.",
      metric: "10x faster",
      color: "#FFB520",
    },
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
          <div className="inline-block px-4 py-1.5 bg-[#FF8C00]/10 border border-[#FF8C00]/20 rounded-full mb-4">
            <span className="text-xs font-medium text-[#FF8C00]">For Recruiters</span>
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-4">
            Why Recruiters Love Talorix
          </h2>
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
            Save time, improve quality, and hire faster with AI-powered recruitment tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 rounded-2xl p-6 h-full hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${advantage.color}20`, color: advantage.color }}
                >
                  {advantage.icon}
                </div>

                {/* Content */}
                <h3 className="text-[18px] font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                  {advantage.description}
                </p>

                {/* Metric badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 rounded-full">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: advantage.color }}
                  ></div>
                  <span className="text-xs font-medium text-gray-300">{advantage.metric}</span>
                </div>

                {/* Decorative gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${advantage.color}, transparent)`,
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: "3-5 days", label: "Average Hiring Timeline", icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5.04-6.71l-2.75 3.54-2.96-3.83c-.3-.4-.93-.5-1.46-.1-.53.4-.64 1.24-.23 1.63L8.3 17c.39.5 1.02.77 1.7.77.68 0 1.31-.27 1.7-.77l3.58-4.59c.41-.39.3-1.23-.23-1.63-.53-.4-1.16-.3-1.46.1z"/></svg> },
            { value: "60%", label: "Time Saved Per Hire", icon: <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 5C6.47 5 2 8.82 2 13s4.47 8 9.99 8C17.52 21 22 17.18 22 13s-4.48-8-10.01-8zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg> },
            { value: "Better Quality", label: "Candidate Matches", icon: <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6 text-center hover:border-[#FF8C00]/30 transition-all duration-300"
            >
              <div className="mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-[28px] font-bold text-[#FF8C00] mb-1">{stat.value}</div>
              <div className="text-[13px] text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
