import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 sm:flex-row">
        <motion.p
          className="text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Aditya Raj. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-5 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/vyukk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/aditya-raj-9b2608296"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
