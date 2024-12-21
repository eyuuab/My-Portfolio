'use client'
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram,
  FaHeart,
  FaArrowUp
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com/yourusername", label: "Instagram" }
  ];

  const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-gray-500 via-rose-200 to-orange-500" />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Eyobed A.
            </h3>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with passion and precision
            </p>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="flex flex-col md:items-end space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-64 py-2 bg-gradient-to-r from-gray-600 to-gray-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center justify-center mb-4 md:mb-0">
              Made with <FaHeart className="text-pink-500 mx-2" /> by Your eyobed &copy; {new Date().getFullYear()}
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>Back to top</span>
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}