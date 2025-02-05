"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import MobileMenu from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleClick = (target: string) => {
    lenis?.scrollTo(target);
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      className="w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-4">
        {/* Logo/Brand Section */}
        <div>
          <Link href="/" className="text-xl font-bold">
            Ethereal
          </Link>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* Main Navigation Links */}
          <div className="hidden md:block">
            {/* Using proper semantic list with proper spacing */}
            <ul className="flex space-x-4" role="list">
              <li>
                <Button
                  variant="ghost"
                  className="hover:opacity-80"
                  onClick={() => handleClick("#hero")}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="hover:opacity-80"
                  onClick={() => handleClick("#features")}
                >
                  Features
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="hover:opacity-80"
                  onClick={() => handleClick("#cta")}
                >
                  Get Started
                </Button>
              </li>
            </ul>
          </div>

          <ConnectButton />
        </div>

        {/* Mobile Menu Button - Added animation */}
        <motion.button
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="mb-1 block h-0.5 w-6 bg-current"
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.2 }}
          ></motion.span>
          <motion.span
            className="mb-1 block h-0.5 w-6 bg-current"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          ></motion.span>
          <motion.span
            className="block h-0.5 w-6 bg-current"
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.2 }}
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
