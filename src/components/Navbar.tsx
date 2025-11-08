import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];


  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
              Carter Bridges
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary transition-colors duration-200 font-medium`}
              >
                {item.name}
              </a>
            ))}
            <div className="hidden md:flex items-center">
              <SocialLinks 
                className="space-x-2" 
                iconClassName={`p-2 rounded-full ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`} 
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-4">
              <SocialLinks 
                className="flex justify-center space-x-4"
                iconClassName="text-dark hover:text-primary text-xl"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
