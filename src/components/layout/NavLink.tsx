import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className = '' }: NavLinkProps) => (
  <a
    href={href}
    className={`relative text-gray-800 hover:text-primary font-medium transition-all duration-300 py-2 group ${className}`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/20 group-hover:w-full transition-all duration-300 delay-75" />
  </a>
); 