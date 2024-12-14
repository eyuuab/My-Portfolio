'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Logs, Minimize, Paintbrush } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Shared link styles for consistent underline animation
  const linkStyles = "relative hover:text-indigo-400 transition duration-300 ease-in-out " +
    "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 " +
    "after:h-[2px] after:bg-indigo-400 after:transition-all after:duration-300 " +
    "hover:after:w-full";

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logs Section */}
        <div className="flex items-center gap-2">
          <Link href="#home" className={`${linkStyles} flex items-center`}>
            {/* Adjust Paintbrush and text size for mobile */}
            <Paintbrush
              className="text-indigo-400"
              size={20} // Small size for mobile
              strokeWidth={2}
            />
            <span className="text-lg md:text-2xl font-bold">Eyu.</span> {/* Adjust font size */}
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-Minimize-8 text-lg">
          <li>
            <Link href="#about" className={linkStyles}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className={linkStyles}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className={linkStyles}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Logs Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none transition duration-300 ease-in-out"
            aria-label="Toggle Logs"
          >
            {isMenuOpen ? <Minimize /> : <Logs />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white absolute top-16 left-0 w-full p-6">
          <ul className="space-y-6 text-center text-xl">
            <li>
              <Link href="#about" className={linkStyles}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className={linkStyles}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className={linkStyles}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
