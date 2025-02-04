"use client";

// import { ConnectButton } from '@rainbow-kit/react'

import Link from "next/link";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Wrap the nav in motion.nav
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

        {/* Main Navigation Links */}
        <div className="hidden md:block">
          {/* Using proper semantic list with proper spacing */}
          <ul className="flex space-x-8" role="list">
            <li>
              <Link href="#hero" className="hover:opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:opacity-80">
                Features
              </Link>
            </li>
            <li>
              <Link href="#cta" className="hover:opacity-80">
                Get Started
              </Link>
            </li>
          </ul>
        </div>

        {/* Wallet Connection Button */}
        <div className="hidden sm:block">
          <Button className="rounded-lg px-4 py-2" aria-label="Connect wallet">
            Connect Wallet
          </Button>
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
