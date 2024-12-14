'use client'
import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedinIn, FaEnvelope, FaTelegram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Me</h2>
          <p className="text-lg text-gray-400">
            Reach out via the form below or connect through my social accounts.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-1 p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full mt-1 p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:bg-indigo-700"
            >
              Send Message
            </button>
          </motion.form>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-6">Or Connect with Me:</h3>
            <div className="flex space-x-6">
              <a
                href="https://x.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-gray-300 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-4xl text-white hover:text-gray-300 transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-gray-300 transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-gray-300 transition-colors"
              >
                <FaTelegram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
