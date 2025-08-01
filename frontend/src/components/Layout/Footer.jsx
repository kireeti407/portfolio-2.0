import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold mb-4"
              >
                S. Kireeti
              </motion.div>
              <p className="text-gray-400 mb-4 max-w-md">
                Full Stack Developer and B.Tech CSE graduate passionate about
                building scalable web applications using the MERN stack and
                modern development practices.
              </p>
              <div className="flex items-center text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-2 text-red-500" />
                <span>using React, Tailwind CSS & Vite</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About", "Projects", "Skills", "Contact"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-gray-400">
                <li>kireetis407@gmail.com</li>
                <li>6366908439</li>
                <li>Andhra Pradesh, India</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 S. Kireeti. All rights reserved.
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowUp size={16} />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
