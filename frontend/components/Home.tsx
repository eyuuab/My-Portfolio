import { FaGithub, FaXTwitter, FaTelegram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6'

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex justify-center items-center text-center text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6">
        
        {/* Left Section for Text */}
        <div className="space-y-6 text-center md:text-left max-w-3xl mx-auto px-4 md:px-0 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
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

        {/* Right Section for Social Icons */}
        <div className="md:hidden mt-8 flex justify-center space-x-6">
          <a 
            href="https://github.com/eyobedebreham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          
          <a 
            href="https://x.com/eyobedebreham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-black transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
          
          <a 
            href="https://t.me/eyobedebreham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaTelegram />
          </a>
          
          <a 
            href="mailto:eyobed.abreham@gmail.com" 
            className="text-2xl text-white hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/eyobedebreham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}
