import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav');
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('section, header');
      
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
      
      // Highlight active nav link based on scroll position
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    // Scroll reveal animations
    const handleReveal = () => {
      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    // Initial setup
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'block';
      section.style.opacity = '1';
      section.style.visibility = 'visible';
    });

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
    revealElements.forEach(element => {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
    });

    // Apply animation classes
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.classList.add('reveal-up');
      card.style.animationDelay = `${index * 0.1}s`;
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
      card.classList.add('reveal-up');
      card.style.animationDelay = `${index * 0.1}s`;
    });

    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutImage) aboutImage.classList.add('reveal-left');
    if (aboutContent) aboutContent.classList.add('reveal-right');

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      item.classList.add('reveal');
      item.style.animationDelay = `${index * 0.1}s`;
    });

    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) contactInfo.classList.add('reveal-left');
    if (contactForm) contactForm.classList.add('reveal-right');

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleReveal);

    // Initial checks
    handleScroll();
    handleReveal();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);
}; 