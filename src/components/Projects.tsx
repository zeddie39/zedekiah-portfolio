
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects.tsx';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions that bridge technology and real-world impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group ${
                project.featured 
                  ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30' 
                  : 'bg-slate-800/50 border-slate-700/50'
              } backdrop-blur-sm rounded-2xl p-8 border hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]`}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <Link to={`/projects/${project.slug}`}>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </Link>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live Platform' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      project.status === 'Live Site' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      project.status === 'In Development' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                      project.status === 'Beta' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-purple-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-slate-700/50 rounded-xl border border-slate-600/50 flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-gray-500">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        {project.icon || <ArrowRight className="text-white" size={24} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/vincentzedekiah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Github size={20} className="mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
