import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const techQuotes = [
  "Technology is not just about convenience, it's about empowering human potential.",
  "The future belongs to those who see possibilities before they become obvious.",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Technology is the campfire around which we tell our stories. - Laurie Anderson",
  "The advance of technology is based on making it fit in so that you don't really even notice it.",
  "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
  "Technology is a useful servant but a dangerous master. - Christian Lous Lange"
];

const Hero = () => {
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    // Get daily quote based on current date
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % techQuotes.length;
    setDailyQuote(techQuotes[quoteIndex]);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 md:py-0">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 max-w-6xl mx-auto">
        {/* Profile Photo Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="text-white text-lg font-bold">VZ</div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-left">
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

          {/* Daily Tech Quote */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-purple-500/30">
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "{dailyQuote}"
            </p>
            <p className="text-purple-400 text-sm mt-2">Quote of the Day</p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Building the future of technology in East Africa. From robotics to AI, 
            cybersecurity to e-commerce - crafting solutions that serve humanity.
          </p>

          <div className="flex justify-start space-x-6 mb-12">
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

          {/* Social Media Links */}
          <div className="flex justify-start space-x-6">
            <a
              href="mailto:zeedy028@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com/vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://youtube.com/@vincentzedekiah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
