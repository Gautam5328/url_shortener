import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-8 text-center mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Logo */}
          <div className="flex flex-col md:justify-center xs:justify-left md:items-center xs:items-start">
          <Link to="/">
            <img
              src="/squeezeurl_logo.png"
              width="130px"
              height="130px"
              alt="Trimrr Logo"
            />
          </Link>
          <p className="text-xs text-gray-400 mt-[-10px]">Shorten your URLs with ease!</p>
        </div>

          {/* Middle Section - Navigation Links */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-md space-x-5">
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
              <FaFacebook className="text-gray-400 hover:text-white text-[22px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-400 hover:text-white text-[22px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-400 hover:text-white text-[22px]" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-400 hover:text-white text-[22px]" />
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
