
"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Candidates", value: 10000, suffix: "+" },
  { label: "Employers", value: 500, suffix: "+" },
  { label: "Job Matches", value: 1000, suffix: "+" },
];

function StatCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    }
    requestAnimationFrame(animate);
  }, [value]);
  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-indigo-700">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <div className="text-gray-500 text-base mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
