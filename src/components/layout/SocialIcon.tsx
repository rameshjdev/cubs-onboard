import React from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export const SocialIcon = ({ icon, href }: SocialIconProps) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#C06C84] transition-colors duration-200"
  >
    {icon}
  </a>
); 