'use client'
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Comake",
      description: "Collaborative platform for developers to code and share projects.",
      image: "/comake.png",
      github: "https://github.com/eyobedebreham/comake",
      demo: "https://comake-demo.com",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "TaskFlow",
      description: "A task management application for teams and individuals.",
      image: "/taskflow.png",
      github: "https://github.com/eyobedebreham/taskflow",
      demo: "https://taskflow-demo.com",
      tags: ["Next.js", "TypeScript", "Prisma"]
    },
    {
      title: "Moviefast",
      description: "A movie database app to discover and watch your favorite movies.",
      image: "moviefast.jpg",
      github: "https://github.com/eyobedebreham/edulearn",
      demo: "https://edulearn-demo.com",
      tags: ["React", "Firebase", "Tailwind"]
    },
    {
      title: "Habean",
      description: "Company portfolio website with animations and modern design.",
      image: "habean.png",
      github: "https://github.com/eyobedebreham/portfolio",
      demo: "https://eyobedebreham.com",
      tags: ["Next.js", "Framer Motion", "Tailwind"]
    },
    {
      title: "To Do List",
      description: "A simple to-do list app to manage your daily tasks. with FastAPI",
      image: "/todo.webp",
      github: "https://github.com/eyobedebreham/fittrack",
      demo: "https://fittrack-demo.com",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "News Entry Extractor",
      description: "A web scraper to extract news articles from websites.",
      image: "/newsentry.png",
      github: "https://github.com/eyobedebreham/shopease",
      demo: "https://shopease-demo.com",
      tags: ["React", "Redux", "Node.js"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A collection of my work that showcases my passion for creating innovative solutions
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-90 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-rose-500/20 text-rose-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/20 text-rose-300 rounded-lg hover:bg-rose-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/20 text-rose-300 rounded-lg hover:bg-rose-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}