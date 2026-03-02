"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import talorixLogo from "../assets/talorix_logo.png";

export default function HeaderSection() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/80 backdrop-blur-md border-b border-gray-900">
      <div className="w-full px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
        >
          <Image
            src={talorixLogo}
            alt="Talorix"
            width={120}
            height={120}
            className="rounded-lg"
            priority
          />
        </motion.a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            Home
          </a>
          <a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
            About
          </a>
          <a href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
            Features
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <button className="px-4 py-2 bg-[#FF8C00] hover:bg-[#FFA500] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#FF8C00]/30">
            <a href="/contact" className="text-white no-underline">
              Contact
            </a>
          </button>
        </motion.div>
      </div>
    </header>
  );
}
