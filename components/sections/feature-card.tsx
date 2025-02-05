"use client";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="group/card w-full max-w-xs">
      <div
        className={cn(
          "card relative mx-auto flex h-96 max-w-sm cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl",
          "bg-gradient-to-br from-gray-900 to-gray-800",
        )}
      >
        <div className="absolute left-0 top-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
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
    </div>
  );
};

export default FeatureCard;
