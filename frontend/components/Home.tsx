'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaXTwitter, FaTelegram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import Head from 'next/head';

export default function Home() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/eyuuab", color: "hover:text-gray-300" },
    { icon: FaXTwitter, href: "https://x.com/eyobedabreham9", color: "hover:text-gray-300" },
    { icon: FaTelegram, href: "https://t.me/eab01", color: "hover:text-blue-400" },
    { icon: FaEnvelope, href: "mailto:eyobedabreham9@gmail.com", color: "hover:text-blue-400" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/eyobedebreham", color: "hover:text-blue-400" }
  ];

  return (
    <section id="home" className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <Head>
        {/* Open Graph Meta Tags (for Telegram) */}
        <meta property="og:title" content="Eyuab's Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio showcasing my projects and skills." />
        <meta property="og:image" content="https://eyuab.vercel.app/og1.webp" />
        <meta property="og:url" content="https://eyuab.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Eyuab's Portfolio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eyuab's Portfolio" />
        <meta name="twitter:description" content="Explore my projects and skills on my personal portfolio site." />
        <meta name="twitter:image" content="https://eyuab.vercel.app/og1.webp" />
        <meta name="twitter:site" content="@eyobedabreham9" /> 
      </Head>
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative h-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6">
          
  
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
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 text-transparent bg-clip-text">
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
                <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-sky-400 text-transparent bg-clip-text">
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
                className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
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