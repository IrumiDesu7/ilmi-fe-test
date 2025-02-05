"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useLenis } from "lenis/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const lenis = useLenis();

  const handleClick = (target: string) => {
    lenis?.scrollTo(target);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Menu panel */}
          <motion.div
            className="fixed inset-y-0 right-0 w-[75%] max-w-sm bg-white px-6 py-6 dark:bg-gray-900"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <ModeToggle />
              <button onClick={onClose} className="p-2" aria-label="Close menu">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <nav className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-4"
              >
                <Button
                  variant="ghost"
                  className="justify-start text-lg font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => handleClick("#hero")}
                >
                  Home
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-lg font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => handleClick("#features")}
                >
                  Features
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start text-lg font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => handleClick("#cta")}
                >
                  Get Started
                </Button>

                <div className="pt-4">
                  <ConnectButton />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
