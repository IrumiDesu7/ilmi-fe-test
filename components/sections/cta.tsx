"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ShinyButton } from "../ui/shiny-button";

const CTA = () => {
  return (
    <div
      id="cta"
      className="bg-grid-white/[0.02] relative mt-10 flex min-h-[10rem] w-full overflow-hidden rounded-md bg-black/[0.9] antialiased dark:bg-black/[0.96] md:mt-32 md:h-[25rem] md:items-center md:justify-center"
    >
      <Spotlight />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 py-10 sm:pt-20">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-300 to-neutral-800 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-5xl">
          Start Your Digital <br /> Asset Journey Today
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300 dark:text-neutral-300">
          Join the future of decentralized art and finance. Experience complete
          ownership and control of your digital assets through our secure
          platform.
        </p>
        <div className="mt-8 flex justify-center">
          <ShinyButton>Get Started</ShinyButton>
        </div>
      </div>
    </div>
  );
};

export default CTA;
