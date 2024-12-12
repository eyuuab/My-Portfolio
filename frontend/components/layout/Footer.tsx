// components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 mx-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  