"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  zap: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#6366F1"/><path d="M14 6v8m0 0l-3-3m3 3l3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  upload: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#4F46E5"/><path d="M14 8v8m0 0l-3-3m3 3l3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="20" width="16" height="2" rx="1" fill="#fff"/></svg>
  ),
  dashboard: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#6366F1"/><rect x="8" y="8" width="12" height="2" rx="1" fill="#fff"/><rect x="8" y="13" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="18" width="6" height="2" rx="1" fill="#fff"/></svg>
  ),
  user: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#6366F1"/><circle cx="14" cy="12" r="4" fill="#fff"/><rect x="8" y="18" width="12" height="2" rx="1" fill="#fff"/></svg>
  ),
  list: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#4F46E5"/><rect x="6" y="8" width="16" height="2" rx="1" fill="#fff"/><rect x="6" y="13" width="10" height="2" rx="1" fill="#fff"/><rect x="6" y="18" width="8" height="2" rx="1" fill="#fff"/></svg>
  ),
  bell: (
    <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#6366F1"/><path d="M14 8v4m0 0v4m0-4h4m-4 0H10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

export function FeatureIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      className={className}
    >
      {icons[name] ?? null}
    </motion.div>
  );
}
