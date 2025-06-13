
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="block text-white mb-2">Vincent</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Zedekiah
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="block mb-2">Developer • Innovator • CEO</span>
            <span className="text-lg text-purple-300">Ztech Electronics</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building the future of technology in East Africa. From robotics to AI, 
          cybersecurity to e-commerce - crafting solutions that serve humanity.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:zeedy028@gmail.com"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/vincentzedekiah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/vincentzedekiah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
