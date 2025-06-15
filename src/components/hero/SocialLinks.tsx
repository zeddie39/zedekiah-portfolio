
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const socialLinksData = [
  { href: "mailto:zeedy028@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/zeddie39", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/vincent-ombati-8b05b422b/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/MapesaZeddy", label: "Twitter", icon: Twitter },
  { href: "https://www.instagram.com/vincentzeddie/", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/vincent.zedie.5/", label: "Facebook", icon: Facebook },
  { href: "https://www.youtube.com/@zedekiahTunes", label: "YouTube", icon: Youtube },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-6">
      {socialLinksData.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
