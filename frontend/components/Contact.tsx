'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaXTwitter, FaLinkedinIn, FaEnvelope, FaTelegram } from 'react-icons/fa6';

interface FormStatus {
  message: string;
  type: string;
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>({ message: '', type: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormStatus({ message: 'Message sent successfully!', type: 'success' });
    e.currentTarget.reset();
  };

  const socialLinks = [
    { icon: FaXTwitter, href: 'https://x.com/your-handle', label: 'Twitter' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/in/your-linkedin', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:your-email@example.com', label: 'Email' },
    { icon: FaTelegram, href: 'https://t.me/your-telegram', label: 'Telegram' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,63,94,0.2),transparent_60%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-800 text-transparent bg-clip-text">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row items-start justify-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="group relative bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {['name', 'email', 'message'].map((field) => (
                  <div key={field} className="mb-6 last:mb-0">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === 'message' ? (
                      <textarea
                        id={field}
                        name={field}
                        rows={5}
                        className="w-full p-4 bg-gray-700/50 text-white rounded-lg outline-none border border-gray-600 focus:border-rose-500 transition-all duration-300"
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        required
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        className="w-full p-4 bg-gray-700/50 text-white rounded-lg outline-none border border-gray-600 focus:border-rose-500 transition-all duration-300"
                        placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                        required
                      />
                    )}
                  </div>
                ))}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 mt-6 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg font-semibold shadow-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>

                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg text-center ${
                      formStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-rose-400 to-rose-500 text-transparent bg-clip-text">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <link.icon className="text-3xl mb-2 text-rose-500" />
                    <span className="text-sm text-gray-300">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
