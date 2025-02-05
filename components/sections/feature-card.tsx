"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="group/card w-full"
    >
      <div
        className={cn(
          "card relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-xl p-6",
          "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
          "border border-gray-800/40",
          "transition-all duration-300",
          "shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)]",
          "group-hover/card:shadow-[0_0_40px_-5px_rgba(0,0,0,0.4)]",
        )}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover/card:opacity-100" />

        <div className="z-10 flex flex-row items-center space-x-4">
          <motion.div
            whileHover={{ rotate: 5 }}
            className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-2.5 text-white shadow-lg"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </div>

        <div className="text content relative z-10 space-y-4">
          <motion.h2
            className="text-xl font-bold text-gray-50 md:text-2xl"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h2>
          <p className="text-sm font-normal text-gray-300/90 transition-colors duration-300 group-hover/card:text-gray-200">
            {description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
