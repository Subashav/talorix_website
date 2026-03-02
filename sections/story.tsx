"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const problemInView = useInView(problemRef, { once: true, amount: 0.3 });
  const solutionInView = useInView(solutionRef, { once: true, amount: 0.3 });

  const problemItems = [
    { 
      label: "Resumes", 
      text: "Reading hundreds of resumes manually",
      color: "from-orange-600/15 to-orange-700/5",
      icon: (
        <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      label: "Scheduling", 
      text: "Organizing countless interview slots",
      color: "from-orange-600/15 to-orange-700/5",
      icon: (
        <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: "Time", 
      text: "Weeks spent screening candidates",
      color: "from-orange-600/15 to-orange-700/5",
      icon: (
        <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: "Quality", 
      text: "Uncertainty about candidate fit",
      color: "from-orange-600/15 to-orange-700/5",
      icon: (
        <svg className="w-12 h-12 text-[#FF8C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  const solutionSteps = [
    {
      title: "Resume Analysis",
      description: "AI instantly extracts skills and experience",
      label: "01",
    },
    {
      title: "AI Interview",
      description: "Automated screening interviews 24/7",
      label: "02",
    },
    {
      title: "Smart Scoring",
      description: "Get ranked candidates in real-time",
      label: "03",
    },
  ];

  return (
    <section className="py-16 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Problem Section */}
        <div ref={problemRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <span className="text-xs font-medium text-red-400">The Problem</span>
            </div>
            <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-4">
              Traditional Hiring is Broken
            </h2>
            <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
              Recruiters waste countless hours on repetitive tasks that slow down the hiring process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={problemInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.7 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${item.color} border border-gray-800/50 rounded-xl p-6 h-full hover:border-gray-700 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.label}</h3>
                  <p className="text-[14px] text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div ref={solutionRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1.5 bg-[#FF8C00]/10 border border-[#FF8C00]/20 rounded-full mb-4">
              <span className="text-xs font-medium text-[#FF8C00]">The Solution</span>
            </div>
            <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-4">
              AI-Powered Hiring Workflow
            </h2>
            <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
              Talorix automates the entire screening process, saving you time and improving candidate quality
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C00]/30 to-transparent -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {solutionSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={solutionInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    delay: i * 0.15 + 0.3,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 rounded-xl p-8 shadow-xl hover:border-[#FF8C00]/30 transition-all duration-300 hover:shadow-[#FF8C00]/10 group h-full">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-[#FF8C00] rounded-lg text-white font-bold text-sm mb-4 shadow-lg">
                      {step.label}
                    </div>
                    <h3 className="text-[18px] font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-[14px] text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Result callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF8C00]/10 to-transparent border border-[#FF8C00]/20 rounded-full px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-[24px] font-bold text-[#FF8C00]">3-5x</span>
                <span className="text-[14px] text-gray-300">Faster Screening</span>
              </div>
              <div className="w-px h-6 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-[24px] font-bold text-[#FF8C00]">60%</span>
                <span className="text-[14px] text-gray-300">Time Saved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
