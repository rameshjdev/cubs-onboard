import { useEffect } from 'react';

export const useImagePreload = () => {
  useEffect(() => {
    // Get all images in the document
    const images = document.querySelectorAll('img');
    
    // Create an array of image sources
    const imageSources = Array.from(images).map(img => img.src);
    
    // Preload each image
    imageSources.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Empty dependency array means this runs once on mount
}; 