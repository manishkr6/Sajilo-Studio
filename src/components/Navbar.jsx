import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '#work' },
    { name: 'Studio', path: '#studio' },
    { name: 'Services', path: '#services' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-6 ${
          scrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold tracking-tight uppercase hover:opacity-70 transition-opacity z-50 relative flex items-center"
          >
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm uppercase tracking-wide font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden z-50 relative p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <a
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-bold uppercase tracking-tighter"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
