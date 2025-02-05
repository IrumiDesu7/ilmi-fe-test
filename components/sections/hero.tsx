"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-8 text-balance bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Your Canvas for Creative & Financial Innovation
      </motion.h1>
      <motion.p
        className="text-slate-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        Complete <span className="font-semibold">ownership</span> and{" "}
        <span className="font-semibold">control</span> of your digital assets
        through blockchain technology
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <Button>Get Started</Button>
      </motion.div>
    </div>
  );
};

export default Hero;
