"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../components/Button";
import talorixLogo from "../assets/talorix_logo.png";

const floatingCards = [
  {
    id: 1,
    title: "Candidate Score",
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">AI Match Score</span>
          <span className="text-lg font-bold text-[#FF8C00]">94%</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Communication</span>
            <span className="text-white">9.2/10</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div className="bg-[#FF8C00] h-1.5 rounded-full" style={{ width: "92%" }}></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">Technical Skills</span>
            <span className="text-white">8.8/10</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div className="bg-[#FF8C00] h-1.5 rounded-full" style={{ width: "88%" }}></div>
          </div>
        </div>
      </div>
    ),
    style: "left-[5%] top-[20%]",
    delay: 0.5,
  },
  {
    id: 2,
    title: "AI Interview",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs text-gray-400">Recording...</span>
        </div>
        <div className="text-xs text-white font-medium mb-2">
          "Tell me about your recent project experience"
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Question 3/5</span>
          <span>2:45 remaining</span>
        </div>
      </div>
    ),
    style: "right-[8%] top-[15%]",
    delay: 0.7,
  },
  {
    id: 3,
    title: "Top Candidates",
    content: (
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF8C00] to-[#FF6B00] flex items-center justify-center text-white text-xs font-bold">
              {i}
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-white">Candidate {i}</div>
              <div className="text-[10px] text-gray-400">Score: {96 - i}%</div>
            </div>
          </div>
        ))}
      </div>
    ),
    style: "left-[10%] bottom-[15%]",
    delay: 0.9,
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[350px] px-4 py-12 bg-[#0F0F0F] overflow-hidden">
      {/* Background gradient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF8C00] opacity-[0.08] blur-[120px] rounded-full"></div>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Image
            src={talorixLogo}
            alt="Talorix Logo"
            width={240}
            height={240}
            className="rounded-lg mx-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-gray-800 rounded-full mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF8C00] animate-pulse"></div>
          <span className="text-xs font-medium text-gray-300">AI-Powered Hiring Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-[40px] font-bold text-white mb-4 leading-tight"
        >
          Hire AI-Screened Talent{" "}
          <span className="text-[#FF8C00]">Faster</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15px] md:text-[16px] text-gray-400 mb-8 max-w-2xl leading-relaxed"
        >
          Talorix transforms hiring for startups and SMEs with AI-powered interviews, automated candidate screening, and intelligent matching. Find the right talent in days, not weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="px-6 py-3 bg-[#FF8C00] hover:bg-[#FFA500] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#FF8C00]/20 hover:scale-105">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent hover:bg-white/5 text-white font-medium rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200">
            Try AI Interview
          </button>
        </motion.div>
      </div>

      {/* Floating UI cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute hidden lg:block w-64 ${card.style}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { delay: card.delay, duration: 0.8 },
            y: {
              delay: card.delay + 0.5,
              duration: 4 + card.id * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
            <div className="text-xs font-semibold text-gray-300 mb-3">{card.title}</div>
            {card.content}
          </div>
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
