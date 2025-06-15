
import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-6 mb-12">
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
  );
};

export default ActionButtons;
