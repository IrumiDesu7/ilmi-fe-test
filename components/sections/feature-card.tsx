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
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="group/card w-full max-w-xs"
    >
      <div
        className={cn(
          "card relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl",
          "bg-gradient-to-br from-gray-900 to-gray-800",
        )}
      >
        <div className="absolute left-0 top-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black dark:group-hover/card:bg-slate-600"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <div
            className="h-10 w-10 text-white"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-bold text-gray-50 md:text-2xl">
            {title}
          </h1>
          <p className="relative z-10 my-4 text-sm font-normal text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
