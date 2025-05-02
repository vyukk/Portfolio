import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            I'm Aditya Raj, a passionate web developer with a love for technology, design, and problem-solving. With a background in <span className="font-bold">coding</span> and <span className="font-bold">creativity</span>, I aim to create interactive, user-friendly web applications that provide seamless experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="space-y-4 text-lg">
              <li>💻 Web Development (HTML, CSS, JavaScript, React)</li>
              <li>🔧 Backend Development (Node.js, Express, MongoDB)</li>
              <li>🎨 UI/UX Design (Figma, Adobe XD)</li>
              <li>⚡️ Responsive Design</li>
              <li>📱 Mobile Development (React Native)</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <p className="text-lg sm:text-xl max-w-lg mx-auto">
              I've worked on various web and mobile projects, ranging from personal portfolios to e-commerce platforms. Currently, I'm enhancing my skills in backend development and looking to solve real-world problems with scalable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
