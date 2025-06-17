import React from 'react';
import { Code, Database, Brain, Cpu, Cloud, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript", "SCSS/SASS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Node.js", "Python", "FastAPI", "Express.js", "MySQL", "MongoDB"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hardware & Robotics",
      skills: ["Arduino", "ESP32", "C/C++", "Sensors", "Microcontrollers", "IoT"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Git", "GitHub", "Heroku", "Bash"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      skills: ["Network Security", "Penetration Testing", "Risk Assessment", "Incident Response"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions. Hover over a category to see more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition-all duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              
              <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                <div className="space-y-2 pt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      style={{
                        transitionDelay: `${200 + skillIndex * 75}ms`,
                      }}
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
