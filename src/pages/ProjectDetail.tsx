
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Navigation from '@/components/Navigation';
import NotFound from '@/pages/NotFound';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="pt-16">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">{project.title}</h1>
            <p className="text-gray-300 text-lg">{project.description}</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none prose-p:text-gray-300">
                  <p>{project.long_description}</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle>Challenges & Solutions</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none prose-p:text-gray-300">
                  <p>{project.challenges}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle>Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-300 border-purple-500/20">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                   <div>
                    <h4 className="font-semibold mb-2">Status</h4>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <div className="flex space-x-4 pt-2">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
                        <ExternalLink size={16} className="mr-2" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                        <Github size={16} className="mr-2" /> Source
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
              {project.images && (
                 <Card className="bg-slate-800/50 border-slate-700/50">
                   <CardHeader><CardTitle>Gallery</CardTitle></CardHeader>
                   <CardContent className="grid grid-cols-2 gap-2">
                      {project.images.map((img, i) => (
                        <img key={i} src={img} alt={`${project.title} screenshot ${i+1}`} className="rounded-md aspect-video object-cover" />
                      ))}
                   </CardContent>
                 </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
