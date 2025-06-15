
import React from 'react';
import Globe from './Globe';
import ProfileAvatar from './hero/ProfileAvatar';
import HeroHeading from './hero/HeroHeading';
import HeroSubheading from './hero/HeroSubheading';
import DailyQuote from './hero/DailyQuote';
import ActionButtons from './hero/ActionButtons';
import SocialLinks from './hero/SocialLinks';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <Globe />
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl mx-auto">
        <ProfileAvatar />

        <div className="text-center md:text-left">
          <div className="mb-8">
            <HeroHeading />
            <HeroSubheading />
          </div>

          <DailyQuote />

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Building the future of technology in East Africa. From robotics to AI, 
            cybersecurity to e-commerce - crafting solutions that serve humanity.
          </p>

          <ActionButtons />
          <SocialLinks />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
