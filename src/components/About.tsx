
import React from 'react';
import { MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of passion, innovation, and impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <MapPin className="text-purple-400 mr-3" size={20} />
                <span className="text-white font-semibold">Location</span>
              </div>
              <p className="text-gray-300">
                Originally from Kisii, raised in Kitale, Kenya. 
                Traveled across 20+ counties finding inspiration everywhere.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Calendar className="text-blue-400 mr-3" size={20} />
                <span className="text-white font-semibold">Born</span>
              </div>
              <p className="text-gray-300">
                June 10, 2000 - A creative soul with a passion for technology and innovation.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-teal-400 mr-3" size={20} />
                <span className="text-white font-semibold">Education</span>
              </div>
              <p className="text-gray-300">
                BSc. Computer Science at Kisii University (2022-2026). 
                Self-taught in robotics, AI, and cybersecurity.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                From teaching myself robotics with Arduino to founding Ztech Electronics, 
                my journey has been driven by one simple belief: technology should serve humanity.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As CEO of Ztech Electronics, I'm building East Africa's premier electronics 
                e-commerce and repair platform. Every project I undertake aims to solve 
                real-world problems while inspiring the next generation of innovators.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or building robots, you'll find me enjoying gospel music, 
                writing poetry, traveling, or cooking up new ideas - both literally and figuratively!
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center mb-4">
                <Heart className="text-red-400 mr-3" size={20} />
                <span className="text-white font-semibold">Passion</span>
              </div>
              <p className="text-gray-300">
                Building tech that matters, mentoring youth, and glorifying God through every innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
