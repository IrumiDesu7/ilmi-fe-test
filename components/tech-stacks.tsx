"use client";

import { techStacks } from "@/contents/tech-stacks";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";

export function TechStacks() {
  const [active, setActive] = useState<
    (typeof techStacks)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`tech-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="p-5"
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className={cn(
                    "h-80 w-full sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80",
                    (active.title === "Next.js" ||
                      active.title === "shadcn/ui & Radix") &&
                      "dark:invert",
                  )}
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit md:text-sm lg:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="my-10 flex flex-col gap-5 md:my-20">
        <div className="flex justify-center">
          <h2 className="text-balance text-center text-xl font-semibold">
            What we use to build this site:
          </h2>
        </div>
        <ul className="mx-auto w-full max-w-2xl gap-4">
          {techStacks.map((tech) => (
            <motion.div
              layoutId={`tech-${tech.title}-${id}`}
              key={`tech-${tech.title}-${id}`}
              onClick={() => setActive(tech)}
              className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:flex-row"
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <motion.div
                  layoutId={`image-${tech.title}-${id}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    width={100}
                    height={100}
                    src={tech.src}
                    alt={tech.title}
                    className={cn(
                      "h-20 w-20 rounded-lg object-top md:h-14 md:w-14",
                      (tech.title === "Next.js" ||
                        tech.title === "shadcn/ui & Radix") &&
                        "dark:invert",
                    )}
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${tech.title}-${id}`}
                    className="text-center font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
                  >
                    {tech.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${tech.description}-${id}`}
                    className="text-center text-neutral-600 dark:text-neutral-400 md:text-left"
                  >
                    {tech.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${tech.title}-${id}`}
                className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-green-500 hover:text-white md:mt-0"
              >
                {tech.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
