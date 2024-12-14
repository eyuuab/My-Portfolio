'use client'
import { motion } from "framer-motion"; // Importing motion for animations


export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }} // Hover scale effect
            whileInView={{ opacity: 1 }} // Fade-in effect when in view
            initial={{ opacity: 0 }} // Initial opacity before in view
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src="https://via.placeholder.com/400x300" // Replace with your project image
              alt="Project 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 1</h3>
              <p className="text-gray-300 mt-2">
                A brief description of what this project is about. It could be a web app, a mobile app, or anything you've built.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project1-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 2</h3>
              <p className="text-gray-300 mt-2">
                A brief description of what this project is about. You can describe the technologies used or the challenges faced.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project2-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 3</h3>
              <p className="text-gray-300 mt-2">
                A brief description of this project. You can mention the technologies used, features, and any key takeaways.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project3-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 4"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 4</h3>
              <p className="text-gray-300 mt-2">
                Description of Project 4 with key technologies and features.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project4-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 5"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 5</h3>
              <p className="text-gray-300 mt-2">
                Brief description for Project 5 with features and technologies used.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project5-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 6 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 6"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-indigo-500">Project 6</h3>
              <p className="text-gray-300 mt-2">
                Description of Project 6 with its unique features and technologies.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://github.com/eyobedebreham/project6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  GitHub
                </a>
                <a
                  href="https://project6-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
