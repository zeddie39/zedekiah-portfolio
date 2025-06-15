import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, BrainCircuit, ToyBrick, ShieldCheck, Wrench, HardDrive } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-10 h-10 text-primary mb-4" />,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and web applications tailored to your business needs.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary mb-4" />,
    title: 'AI & ML Consulting',
    description: 'Leveraging artificial intelligence and machine learning to build smart solutions and drive data-driven decisions.',
  },
  {
    icon: <ToyBrick className="w-10 h-10 text-primary mb-4" />,
    title: 'Robotics Prototyping',
    description: 'Bringing your ideas to life with custom robotics prototypes, from initial design to functional models.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
    title: 'Cybersecurity Solutions',
    description: 'Protecting your digital assets with robust security assessments, strategies, and implementation.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary mb-4" />,
    title: 'Electronics Repair',
    description: 'Expert repair services for a wide range of electronic devices, from simple fixes to complex component-level repairs.',
  },
  {
    icon: <HardDrive className="w-10 h-10 text-primary mb-4" />,
    title: 'Hardware & Software Services',
    description: 'Comprehensive hardware and software solutions, including diagnostics, upgrades, and repairs to keep your gadgets running smoothly.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          What I <span className="text-primary">Offer</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          From concept to deployment, I provide a range of services to help you achieve your technological goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/80 border-primary/30 text-card-foreground transform hover:scale-105 transition-transform duration-300 ease-out">
              <CardHeader>
                {service.icon}
                <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
