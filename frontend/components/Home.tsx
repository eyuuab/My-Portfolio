'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaXTwitter, FaTelegram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

export default function Home() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/eyobedebreham", color: "hover:text-gray-300" },
    { icon: FaXTwitter, href: "https://x.com/eyobedebreham", color: "hover:text-gray-300" },
    { icon: FaTelegram, href: "https://t.me/eyobedebreham", color: "hover:text-rose-400" },
    { icon: FaEnvelope, href: "mailto:eyobed.abreham@gmail.com", color: "hover:text-rose-400" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/eyobedebreham", color: "hover:text-rose-400" }
  ];

  return (
    <section id="home" className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative h-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6">
          
          {/* Left Section - Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex flex-col justify-center space-y-8 mr-20"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl text-white ${social.color} transition-all duration-300 hover:scale-125`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Middle Section - Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center md:text-left max-w-3xl px-4 md:px-0"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text">
                  Hi,
                </span>{' '}
                <span className="text-white">I&apos;m Eyobed Abreham</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-rose-400 to-pink-400 text-transparent bg-clip-text">
                  Web Developer | Aspiring ML Engineer
                </p>
                <p className="text-base md:text-lg text-gray-300 max-w-2xl">
                  I&apos;m passionate about crafting scalable, responsive web applications and I&apos;m eager to apply machine learning techniques in real-world projects to solve challenging problems.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
              >
                Learn More About Me
              </motion.a>
              
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold text-white bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-gray-500/25 transition-all duration-300"
              >
                View My Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:hidden flex justify-center space-x-6 mt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-white ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}