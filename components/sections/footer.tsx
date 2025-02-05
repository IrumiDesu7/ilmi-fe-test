import Link from "next/link";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200/30 bg-white/50 backdrop-blur-xl dark:border-gray-800/50 dark:bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold tracking-tight">Ethereal</h3>
            <div className="flex items-center space-x-3 text-sm text-gray-600 transition-colors dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hello@ethereal.com"
                className="transition-all duration-200 ease-in-out hover:text-gray-900 dark:hover:text-gray-200"
              >
                hello@ethereal.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-gray-200">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "#hero" },
                { label: "Features", href: "#features" },
                { label: "Get Started", href: "#cta" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-gray-600 transition-all duration-200 ease-in-out hover:translate-x-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-gray-200">
              Connect
            </h3>
            <div className="flex space-x-5">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-600 transition-all duration-200 ease-in-out hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Github className="h-5 w-5 transform transition-transform group-hover:scale-110" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-200/30 pt-8 dark:border-gray-800/50">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Ethereal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
