import { useEffect } from 'react';

export const useFormAndScroll = () => {
  useEffect(() => {
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      const handleSubmit = (event: Event) => {
        event.preventDefault();
        
        // Basic validation
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
          if (!(field as HTMLInputElement).value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
          } else {
            field.classList.remove('is-invalid');
          }
        });
        
        // Email validation
        const emailField = document.getElementById('parentEmail') as HTMLInputElement;
        if (emailField && !validateEmail(emailField.value) && emailField.value.trim()) {
          isValid = false;
          emailField.classList.add('is-invalid');
        }
        
        if (isValid) {
          showFormSuccess();
        }
      };

      contactForm.addEventListener('submit', handleSubmit);
      return () => contactForm.removeEventListener('submit', handleSubmit);
    }
  }, []);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId!);
        if (targetElement) {
          const navbar = document.getElementById('mainNav');
          const navbarHeight = navbar?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse?.classList.contains('show')) {
            (navbarToggler as HTMLElement)?.click();
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
};

// Helper functions
const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const showFormSuccess = () => {
  const form = document.getElementById('contactForm');
  const formContainer = form?.parentElement;
  
  if (!form || !formContainer) return;

  // Create success message
  const successMessage = document.createElement('div');
  successMessage.classList.add('alert', 'alert-success', 'mb-4', 'slide-up');
  successMessage.innerHTML = '<h4 class="alert-heading">Message Sent!</h4><p>Thank you for reaching out. We\'ll get back to you shortly to discuss your childcare needs.</p>';
  
  // Clear and hide form
  form.reset();
  form.style.display = 'none';
  
  // Show success message
  formContainer.prepend(successMessage);
  
  // Reset after 5 seconds
  setTimeout(() => {
    successMessage.remove();
    form.style.display = 'block';
  }, 5000);
}; 