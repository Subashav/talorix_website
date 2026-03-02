"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AIInterviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  const questions = [
    "Tell me about your experience with React and Next.js",
    "Describe a challenging project you've worked on",
    "How do you approach problem-solving?",
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentQuestion((prev) => (prev + 1) % questions.length);
        setIsRecording(true);
        setTimeout(() => setIsRecording(false), 3000);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [inView, questions.length]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <span className="text-xs font-medium text-purple-400">AI Technology</span>
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-white mb-4">
            Experience the AI Interview
          </h2>
          <p className="text-[15px] text-gray-400 max-w-2xl mx-auto">
            Our AI conducts natural conversations, evaluates responses in real-time, and provides detailed candidate insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Live Interview Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0F0F0F] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#1A1A1A] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm font-medium text-white">AI Interview Session</span>
                </div>
                <div className="flex items-center gap-2">
                  {isRecording && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs text-red-400">Recording</span>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Video preview */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF8C00] to-[#FF6B00] flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Camera controls */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Question section */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Question {currentQuestion + 1}/3</span>
                  <span className="text-[#FF8C00] font-medium">2:45 remaining</span>
                </div>

                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4"
                >
                  <p className="text-white text-[15px] leading-relaxed">
                    {questions[currentQuestion]}
                  </p>
                </motion.div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Response Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500]"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating analysis indicators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -right-4 top-1/4 bg-[#1A1A1A] border border-green-500/30 rounded-lg px-4 py-2 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-green-400">AI Analyzing...</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            {[
              {
                icon: <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.5 14.56 16 12 16s-4.52-1.5-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3.41 3.85 6.01 7.91 6.01s7.42-2.6 7.91-6.01c.1-.6-.39-1.14-1-1.14z"/></svg>,
                title: "Natural Conversations",
                description: "AI asks relevant follow-up questions based on candidate responses",
              },
              {
                icon: <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.3 4 13c0 4.08 3.05 7.44 7.12 7.44s7.12-3.36 7.12-7.44c0-2.7-1.21-5.49-2.73-7.73-.03.13-.3.36-.33.36h-.34c-.04 0-.09.11-.13.11-.08 0-.13-.08-.13-.13 0-1.13 1.05-2.07 1.05-3.39 0-1.59-.67-2.3-.67-2.3zm-4.6 19.32c-1.3 0-2.36 1.06-2.36 2.36s1.06 2.36 2.36 2.36 2.36-1.06 2.36-2.36-1.06-2.36-2.36-2.36zm9.6-10.54c.34 0 .61-.27.61-.61v-1.52c0-.34-.27-.61-.61-.61-.34 0-.61.27-.61.61v1.52c0 .34.27.61.61.61zm0-4.03c.34 0 .61-.27.61-.61V5.09c0-.34-.27-.61-.61-.61-.34 0-.61.27-.61.61v1.52c0 .34.27.61.61.61zm0 7.78c-.34 0-.61.27-.61.61v1.52c0 .34.27.61.61.61.34 0 .61-.27.61-.61v-1.52c0-.34-.27-.61-.61-.61z"/></svg>,
                title: "Real-time Evaluation",
                description: "Instant scoring on communication skills, technical knowledge, and cultural fit",
              },
              {
                icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2V17zm4 0h-2V7h2V17zm4 0h-2v-4h2V17z"/></svg>,
                title: "Detailed Analytics",
                description: "Get comprehensive reports with strengths, weaknesses, and hiring recommendations",
              },
              {
                icon: <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.72-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>,
                title: "Secure & Private",
                description: "All interviews are encrypted and GDPR compliant",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-gray-800 flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-[14px] text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
