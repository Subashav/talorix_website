"use client";
import { motion } from "framer-motion";

const showcaseImages = [
  { src: "/showcase/candidate-dashboard.png", alt: "Candidate Dashboard" },
  { src: "/showcase/employer-dashboard.png", alt: "Employer Dashboard" },
  { src: "/showcase/job-listings.png", alt: "Job Listings" },
];

export default function ShowcaseSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#0F172A]">Platform Showcase</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {showcaseImages.map((img, i) => (
            <motion.div
              key={img.alt}
              className="relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 w-full md:w-1/3"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
