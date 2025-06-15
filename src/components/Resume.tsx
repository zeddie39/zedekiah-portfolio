
import React from 'react';
import { Download, FileText, Award } from 'lucide-react';
import Timeline from './Timeline';

const Resume = () => {
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to the public folder
    link.download = 'Vincent_Zedekiah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            An interactive timeline of my professional experience and education
          </p>
        </div>

        {/* Resume Timeline */}
        <Timeline />
        
        {/* Download Button */}
        <div className="text-center my-12">
          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] flex items-center mx-auto"
          >
            <Download size={24} className="mr-3" />
            Download Full Resume (PDF)
          </button>
        </div>

        {/* Skills Summary */}
        <div className="md:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="flex items-center mb-6">
            <Award className="text-teal-400 mr-3" size={24} />
            <h3 className="text-2xl font-bold text-white">Core Competencies</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Languages & Frameworks</h4>
              <div className="space-y-2">
                {['Python', 'JavaScript', 'React', 'Node.js', 'FastAPI', 'Django'].map((skill) => (
                  <span key={skill} className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Databases & Tools</h4>
              <div className="space-y-2">
                {['MySQL', 'MongoDB', 'Docker', 'Git', 'AWS', 'REST APIs'].map((skill) => (
                  <span key={skill} className="inline-block bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Hardware & AI</h4>
              <div className="space-y-2">
                {['Arduino', 'ESP32', 'TensorFlow', 'IoT', 'Robotics', 'ML'].map((skill) => (
                  <span key={skill} className="inline-block bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            <FileText size={20} className="mr-2" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
