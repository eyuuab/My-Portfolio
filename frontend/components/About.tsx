export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">About Me</h2>

        <div className="md:flex md:space-x-12">
          {/* Left Section - Image or Avatar */}
          <div className="flex justify-center md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://via.placeholder.com/200" // Replace with your image URL
              alt="Eyobed Abreham"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>

          {/* Right Section - Text Description */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg md:text-xl text-gray-300">
              Hi! I'm Eyobed Abreham, a passionate web developer with a strong interest in machine learning. I enjoy creating beautiful, responsive web applications that provide real-world solutions.
            </p>

            <p className="text-lg md:text-xl text-gray-300">
              I have experience with frontend and backend technologies, and I am always looking for new challenges that allow me to grow as a developer. When I'm not coding, I love learning about the latest developments in the tech world and working on personal projects to improve my skills.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-200">My Skills</h3>
              <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>React.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>Node.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>Express.js
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>Python
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>TypeScript
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>MongoDB
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>Tailwind CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
