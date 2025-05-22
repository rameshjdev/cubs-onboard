import React from 'react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
  return (
    <div className="flex items-start gap-4 group">
      {icon}
      <div>
        <h4 className="text-lg font-semibold text-secondary mb-1 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {content}
        </p>
      </div>
    </div>
  );
}; 