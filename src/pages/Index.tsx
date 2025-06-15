
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Services from '@/components/Services';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="relative">
        <div id="home"><Hero /></div>
        <div id="about">
          <AnimatedSection animation="fade-in">
            <About />
          </AnimatedSection>
        </div>
        <div id="services">
          <AnimatedSection animation="slide-in-from-right">
            <Services />
          </AnimatedSection>
        </div>
        <div id="skills">
          <AnimatedSection animation="slide-in-from-left">
            <Skills />
          </AnimatedSection>
        </div>
        <div id="projects">
          <AnimatedSection animation="slide-in-from-right">
            <Projects />
          </AnimatedSection>
        </div>
        <div id="testimonials">
          <AnimatedSection animation="fade-in">
            <Testimonials />
          </AnimatedSection>
        </div>
        <div id="resume">
          <AnimatedSection animation="slide-in-from-left">
            <Resume />
          </AnimatedSection>
        </div>
        <div id="contact">
          <AnimatedSection animation="scale-in">
            <Contact />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
