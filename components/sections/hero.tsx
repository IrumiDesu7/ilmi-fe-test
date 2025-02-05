"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useLenis } from "lenis/react";

const Hero = () => {
  const lenis = useLenis();

  return (
    <div
      id="hero"
      className="md:pt-30 mb-10 flex flex-col items-center justify-center gap-4 md:mb-32"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-8 text-balance bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Your Canvas for Creative & Financial Innovation
      </motion.h1>
      <motion.p
        className="text-center text-slate-700 dark:text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
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
        viewport={{ margin: "-100px", once: true }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <Button onClick={() => lenis?.scrollTo("#features")}>
          Explore More
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
