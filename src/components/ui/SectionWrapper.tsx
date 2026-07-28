import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "white" | "surface";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bg = "white",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`${bg === "surface" ? "bg-surface" : "bg-white"} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
