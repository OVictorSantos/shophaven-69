
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-foreground font-display font-medium text-xl"
        >
          Essence
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {['Product', 'Philosophy', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
          className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hidden md:block 
          hover:opacity-90 transition-opacity"
        >
          Shop Now
        </button>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass p-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 mb-6">
            {['Product', 'Philosophy', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-foreground text-lg font-medium reveal ${index === 0 ? 'delay-1' : index === 1 ? 'delay-2' : 'delay-3'} ${mobileMenuOpen ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <button 
            className="w-full bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium
            hover:opacity-90 transition-opacity reveal delay-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
