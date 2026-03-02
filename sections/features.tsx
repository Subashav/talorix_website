"use client";
import { motion } from "framer-motion";
import { FeatureIcon } from "../components/FeatureIcon";

const features = [
  {
    icon: "zap",
    title: "Smart Job Matching",
    description: "AI-powered matching connects candidates and employers instantly.",
  },
  {
    icon: "upload",
    title: "Resume Upload System",
    description: "Easily upload and manage resumes and documents.",
  },
  {
    icon: "dashboard",
    title: "Employer Dashboard",
    description: "Manage job posts, applicants, and hiring in one place.",
  },
  {
    icon: "user",
    title: "Candidate Profile Management",
    description: "Showcase skills and experience with a modern profile.",
  },
  {
    icon: "list",
    title: "Applicant Tracking System",
    description: "Track applications and hiring progress with ease.",
  },
  {
    icon: "bell",
    title: "Real-time Notifications",
    description: "Stay updated with instant alerts and status changes.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-black border-b border-orange-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-white">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-black rounded-xl p-6 shadow-sm border border-orange-900 flex flex-col items-start hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <FeatureIcon name={feature.icon} className="mb-4 text-orange-400 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-lg mb-1 text-white">{feature.title}</div>
              <div className="text-sm text-orange-200">{feature.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
