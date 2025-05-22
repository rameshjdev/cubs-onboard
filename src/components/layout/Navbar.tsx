import { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight, Baby } from 'lucide-react';
import { NavLink } from './NavLink';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler to reload the app
  const handleReload = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/'; // Change to root URL instead of reloading
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Baby Icon + Text */}
          <a 
            href="/" 
            className="group flex items-center gap-3 hover:opacity-90 transition-all duration-300"
            onClick={handleReload}
          >
            <div className="relative">
              <span className="absolute -inset-2 bg-white/80 rounded-full blur-md"></span>
              <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Baby className="w-7 h-7 text-white drop-shadow" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none">
                Cubs Onboard
              </span>
              <span className="text-[0.75rem] font-medium text-gray-600 tracking-wide select-none mt-0.5 pl-0.5 whitespace-nowrap">
                Nurturing Growth Every Day
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" onClick={handleReload} className="relative text-gray-800 hover:text-primary font-medium transition-all duration-300 py-2 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="group bg-white shadow-md hover:shadow-lg border border-primary/20 text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-medium ml-4">
              <Calendar className="w-4 h-4" />
              <span className="text-base font-semibold">Schedule Visit</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 text-gray-800 hover:text-primary transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
            <a href="/" onClick={(e) => {handleReload(e); setIsMenuOpen(false);}} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              Home
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              Services
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              About
            </a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              Gallery
            </a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              Testimonials
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl text-gray-800 hover:text-primary font-medium transition-all duration-300">
              Contact
            </a>
            <button className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 font-medium mt-4 shadow-lg">
              <Calendar className="w-5 h-5" />
              <span className="text-base font-semibold">Schedule Visit</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};