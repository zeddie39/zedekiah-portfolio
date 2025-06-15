
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
        {/* Background Effects Removed */}
        
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
