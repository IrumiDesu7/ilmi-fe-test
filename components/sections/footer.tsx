import Link from "next/link";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-lg dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ethereal</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:hello@ethereal.com"
                className="hover:text-gray-900 dark:hover:text-gray-200"
              >
                hello@ethereal.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "Features", "Get Started"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ethereal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
