// components/sections/Home.tsx
export default function Home() {
    return (
      <section
        id="home"
        className="h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex justify-center items-center text-center text-white"
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-6">
          
          {/* Left Section for Social Icons */}
          <div className="flex flex-col space-y-6 items-center md:items-start">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-indigo-500"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-indigo-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:example@example.com" className="text-2xl text-white hover:text-indigo-500">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white hover:text-indigo-500"
            >
              <i className="fab fa-behance"></i>
            </a>
          </div>
  
          {/* Right Section for Text */}
          <div className="space-y-6 text-center max-w-3xl mx-auto px-4 md:px-0">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
              <span className="text-indigo-500">Hi,</span> I'm Eyobed Abreham
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Web Developer | Aspiring ML Engineer
            </p>
            <p className="text-sm md:text-base text-gray-400">
              I'm passionate about crafting scalable, responsive web applications and I'm eager to apply machine learning techniques in real-world projects to solve challenging problems.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="#about"
                className="inline-block bg-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-700"
              >
                Learn More About Me
              </a>
              <a
                href="#resume"
                className="inline-block bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  