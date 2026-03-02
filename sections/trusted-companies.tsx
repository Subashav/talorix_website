"use client";
import { motion } from "framer-motion";

const companies = [
  { name: "Linear", logo: "/logos/linear.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Raycast", logo: "/logos/raycast.svg" },
];

export default function TrustedCompaniesSection() {
  return (
    <section className="py-12 bg-black border-b border-orange-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-white text-base font-medium mb-8">Trusted by modern hiring teams.</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map((company, i) => (
            <motion.img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-8 w-auto grayscale opacity-80 hover:opacity-100 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
