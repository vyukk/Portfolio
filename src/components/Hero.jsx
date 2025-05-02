import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white text-black px-6 sm:px-16 py-20 relative overflow-hidden"
    >
      <div className="max-w-4xl text-center space-y-6 z-10">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Crafting <span className="text-red-600">Bold</span> Experiences <br />
          with a Touch of <span className="text-black underline decoration-red-500">Elegance</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I’m Aditya Raj — a web developer, designer & dreamer building smooth, beautiful, and performance-first websites.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="border border-black px-8 py-3 rounded-md font-medium text-black hover:bg-black hover:text-white transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Background Effect */}
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-red-500 blur-3xl opacity-30 rounded-full z-0"></div>
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-black blur-3xl opacity-15 rounded-full z-0"></div>
    </section>
  );
};

export default Hero;
