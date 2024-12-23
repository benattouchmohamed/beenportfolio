import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-6">
      <p className="text-lg mb-4">© 2024 <strong>Simo</strong>. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <motion.a
          href="https://github.com/benattouchmohamed"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-github fa-3x"></i>
        </motion.a>
        <motion.a
          href="https://www.facebook.com/profile.php?id=61570300422602"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-facebook fa-3x"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mohamed-ben-attouch-a47957300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-linkedin fa-3x"></i>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/simobeen_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-instagram fa-3x"></i>
        </motion.a>
        <motion.a
          href="https://wa.me/212623292642"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fab fa-whatsapp fa-3x"></i>
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
