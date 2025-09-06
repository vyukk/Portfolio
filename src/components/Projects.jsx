import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "TEDxIIMT Website",
    description:
      "An animation-rich, responsive site for TEDxIIMT to showcase event details, speaker profiles, and dynamic user interactions.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    link: "https://lemon-rock-072ccdf10.1.azurestaticapps.net/",
  },
  {
    title: "StudyMate",
    description:
      " A modern React application to help students organize their notes and track assignment deadlines.",
    tech: ["React", "Node.js", "Firebase"],
    link: "https://github.com/vyukk/studymate",
  },
  {
    title: "Campus problem reporter",
    description:
      "A platform for students to report and discuss campus issues, featuring user authentication and real-time chat.",
    tech: ["React", "Socket.io", "Node.js"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-red-500 shadow-lg hover:shadow-red-500/40 transition-transform hover:-translate-y-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-red-400 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm mb-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-red-600/20 text-red-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
               
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
