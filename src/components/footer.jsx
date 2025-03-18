import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 p-10 text-center mt-10 w-[100%]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo */}
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src="/squeezeurl_logo.png"
                className="h-40 w-40"
                alt="SqueezeURL"
              />
            </Link>

            <p className="text-sm text-gray-400">
              Shorten your URLs with ease!
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm space-x-5">
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section - Social Links */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-400 hover:text-white text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-400 hover:text-white text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 hover:text-white text-lg" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-400 hover:text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} SqueezeURL. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
