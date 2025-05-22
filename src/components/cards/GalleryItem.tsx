import React from 'react';

interface GalleryItemProps {
  image: string;
  title: string;
}

export const GalleryItem = ({ image, title }: GalleryItemProps) => (
  <div className="relative group overflow-hidden rounded-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
    </div>
  </div>
); 