"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Contract templates fit our practice amazingly well. We've tested several AI legal tools, but Specter is the best we've found for German law.",
    author: "Lukas Schmidt",
    role: "Legal Operations Manager",
    company: "European Technology Company",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Results immediately usable--even without deep specialization in the subject area. The source citations let us verify everything.",
    author: "Priya Nair",
    role: "In-House Counsel",
    company: "Manufacturing Enterprise",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Quality of answers rivals that of expert articles--detailed and well-structured. We use it daily for compliance questions.",
    author: "Ava Martinez",
    role: "Compliance Director",
    company: "Financial Services Firm",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  usePreloadImages(testimonials.map((t) => t.avatar));

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto py-20 px-8"
      onClick={handleNext}
    >
      {/* Floating index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews for other testimonials */}
      <motion.div
        className="absolute top-8 left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-background overflow-hidden transition-all duration-300 ${
              i === activeIndex ? "ring-1 ring-accent ring-offset-1 ring-offset-background" : "grayscale opacity-50"
            }`}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            <img
              src={t.avatar || "/placeholder.svg"}
              alt={t.author}
              className="w-full h-full object-cover"
              width={24}
              height={24}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-foreground"
          >
            <SplitText text={currentTestimonial.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author with reveal line */}
        <motion.div className="mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar container with all images stacked */}
            <div className="relative w-12 h-12">
              <motion.div
                className="absolute -inset-1.5 rounded-full border border-accent/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.avatar}
                  src={t.avatar}
                  alt={t.author}
                  className="absolute inset-0 w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info with accent line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-px bg-accent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-medium text-foreground tracking-wide">
                  {currentTestimonial.author}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">
                  {currentTestimonial.role} - {currentTestimonial.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-16 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">Click anywhere</span>
      </motion.div>
    </div>
  );
}
