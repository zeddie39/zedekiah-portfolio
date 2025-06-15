
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Resume', href: '/#resume' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const handleLinkClick = (hash: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      // If we are on a different page, navigate to home and then scroll
      window.location.href = `/${hash}`;
    } else {
      // If we are on the home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || location.pathname !== '/' ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Vincent Zedekiah
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isHashLink = item.href.includes('#');
              if (isHashLink) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href.split('#')[1] ? '#' + item.href.split('#')[1] : '');
                    }}
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/90 rounded-lg backdrop-blur-md">
              {navItems.map((item) => {
                const isHashLink = item.href.includes('#');
                if (isHashLink) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href.split('#')[1] ? '#' + item.href.split('#')[1] : '');
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
