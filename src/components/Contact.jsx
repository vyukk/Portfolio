import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hi? Fill out the form below and I’ll get back to you.
        </motion.p>

        <motion.form
          className="space-y-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xvgakayn"  // Your Formspree endpoint
          method="POST"
        >
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-medium transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
