
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <Hero />
        <AnimatedSection animation="fade-in">
          <About />
        </AnimatedSection>
        <AnimatedSection animation="slide-in-from-left">
          <Skills />
        </AnimatedSection>
        <AnimatedSection animation="slide-in-from-right">
          <Projects />
        </AnimatedSection>
        <AnimatedSection animation="fade-in">
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection animation="slide-in-from-left">
          <Resume />
        </AnimatedSection>
        <AnimatedSection animation="scale-in">
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
