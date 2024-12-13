'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="#home" className="hover:text-indigo-500 transition duration-300 ease-in-out">
            My Portfolio
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="#about" className="hover:text-indigo-400 transition duration-300 ease-in-out">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-indigo-400 transition duration-300 ease-in-out">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-indigo-400 transition duration-300 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none transition duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white absolute top-16 left-0 w-full p-6">
          <ul className="space-y-6 text-center text-xl">
            <li>
              <Link href="#about" className="hover:text-indigo-400 transition duration-300 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-indigo-400 transition duration-300 ease-in-out">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-indigo-400 transition duration-300 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
