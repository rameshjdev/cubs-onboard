import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FooterLink = ({ href, children, className = '' }: FooterLinkProps) => (
  <a
    href={href}
    className={`relative text-gray-300 hover:text-white transition-all duration-300 py-1 group inline-block ${className}`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-300 delay-75" />
  </a>
); 