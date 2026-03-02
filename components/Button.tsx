"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  [x: string]: any;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400",
        size === "lg" ? "px-6 py-3 text-base" : "px-5 py-2.5 text-sm",
        variant === "primary"
          ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-sm hover:from-orange-600 hover:to-orange-500"
          : "bg-black border border-orange-400 text-orange-400 hover:bg-orange-900 hover:text-orange-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
