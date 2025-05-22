import { Phone } from 'lucide-react';
import { useState } from 'react';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Add scroll functionality
  const scrollToContent = () => {
    const nextSection = document.querySelector('#about') || document.querySelector('section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="home"
      className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden"
    >
      {/* Background image with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-secondary/80 z-10" />
      
      {/* Background pattern with adjusted opacity */}
      <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMyLjIgMCA0IDEuOCA0IDRzLTEuOCA0LTQgNC00LTEuOC00LTQgMS44LTQgNC00em0wIDMyYzIuMiAwIDQgMS44IDQgNHMtMS44IDQtNCA0LTQtMS44LTQtNCAxLjgtNCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] z-0" />
      
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            {/* Subheading with improved typography */}
            <p className="text-lg text-accent font-semibold mb-2 animate-slideUp">
              Welcome to Our Daycare
            </p>
            
            {/* Heading with improved typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 animate-slideUp tracking-tight">
              Quality Childcare <span className="text-white">Services</span> <br className="hidden sm:block" />
              <span className="text-accent font-extrabold">For Your Family</span>
            </h1>
            
            {/* Description with improved readability */}
            <p className="text-lg text-white leading-relaxed mb-8 max-w-xl animate-slideUp animation-delay-100 font-light">
              A safe, nurturing environment where children learn, play, and grow together.
              We provide personalized care that adapts to your child's unique needs.
            </p>
            
            {/* Contact Info with improved visibility */}
            <div className="mt-10 flex items-center gap-2 text-white animate-slideUp animation-delay-300">
              <Phone className="w-5 h-5 text-white" />
              <p className="font-medium">Call us: <a href="tel:5551234567" className="text-accent hover:text-accent/80 transition-colors font-bold">(555) 123-4567</a></p>
            </div>
          </div>
          
          {/* Image or Decorative Element with improved styling */}
          <div className="md:w-1/2 relative animate-slideIn">
            <div className="aspect-square max-w-md mx-auto bg-white/15 rounded-3xl p-3 backdrop-blur-sm shadow-xl">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-secondary/30 overflow-hidden flex items-center justify-center border border-white/20">
                {/* Replace placeholder with actual image */}
                <img 
                  src="/images/child-playing.jpg" 
                  alt="Happy child playing" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80';
                  }}
                />
              </div>
            </div>
            
            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with improved visibility and functionality */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-30"
        onClick={scrollToContent}
        role="button"
        aria-label="Scroll down to content"
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToContent();
          }
        }}
      >
        <div className={`w-10 h-14 border-2 ${isHovered ? 'border-accent' : 'border-white'} rounded-full flex items-center justify-center transition-all duration-300 mb-2`}>
          <div className={`w-2 h-4 ${isHovered ? 'bg-accent' : 'bg-white'} rounded-full animate-scrollDown transition-colors duration-300`}></div>
        </div>
        <span className={`text-sm font-medium ${isHovered ? 'text-accent' : 'text-white'} transition-colors duration-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm`}>
          Scroll Down
        </span>
      </div>
    </header>
  );
};
