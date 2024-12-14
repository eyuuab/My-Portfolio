'use client';
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiVite,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiDocker,
} from "react-icons/si";

export default function About() {
  const skills = [
    { Icon: SiNextdotjs, color: "text-gray-100", borderColor: "hover:border-gray-300" },
    { Icon: SiVite, color: "text-purple-400", borderColor: "hover:border-purple-400" },
    { Icon: SiReact, color: "text-cyan-400", borderColor: "hover:border-cyan-400" },
    { Icon: SiJavascript, color: "text-yellow-500", borderColor: "hover:border-yellow-500" },
    { Icon: SiMongodb, color: "text-green-500", borderColor: "hover:border-green-500" },
    { Icon: SiTailwindcss, color: "text-teal-400", borderColor: "hover:border-teal-400" },
    { Icon: SiTypescript, color: "text-blue-600", borderColor: "hover:border-blue-600" },
    { Icon: SiTensorflow, color: "text-yellow-400", borderColor: "hover:border-yellow-400" },
    { Icon: SiPytorch, color: "text-orange-400", borderColor: "hover:border-orange-400" },
    { Icon: SiDocker, color: "text-blue-400", borderColor: "hover:border-blue-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white font-inter"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
          About Me
        </h2>

        {/* Description */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
              Hey there! I&apos;m Eyobed Abreham, a passionate web developer with a keen interest in crafting innovative digital experiences. My journey in tech is driven by an insatiable curiosity and a love for solving complex problems through elegant code.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              From frontend magic with React to backend wizardry with databases, I thrive on turning ideas into functional, beautiful applications. When I&apos;m not coding, you&apos;ll find me exploring new technologies, reading tech blogs, or sketching out my next project concept.
            </p>
          </div>

          {/* Skills Showcase */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 text-center">
              Technologies I Work With
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6 overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`
                    group w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-700 
                    flex items-center justify-center transition-all duration-300
                    hover:border-4 ${skill.borderColor}
                    hover:shadow-2xl hover:scale-110 cursor-pointer
                    bg-gray-800/50 backdrop-blur-sm
                  `}
                >
                  <skill.Icon
                    className={`
                      ${skill.color} transition-transform duration-300 
                      group-hover:scale-125 group-hover:rotate-12
                    `}
                    size={24}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
