import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FooterLink } from './FooterLink';

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/10 text-white hover:text-primary transition-all duration-300"
  >
    {icon}
  </a>
);

const ContactItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 text-gray-300">
    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
      {icon}
    </div>
    <span>{text}</span>
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Cubs Onboard
            </h2>
            <p className="text-gray-300 text-sm">
              Nurturing hearts and minds in a home-based environment where every child's potential is cherished.
            </p>
            <div className="flex space-x-3 mt-4">
              <SocialIcon icon={<Facebook className="w-4 h-4" />} href="#" />
              <SocialIcon icon={<Instagram className="w-4 h-4" />} href="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li><FooterLink href="#home">Home</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#gallery">Gallery</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <ContactItem 
                icon={<MapPin className="w-4 h-4" />} 
                text="123 Sunshine Lane, Anytown, USA 12345" 
              />
              <ContactItem 
                icon={<Phone className="w-4 h-4" />} 
                text="(555) 123-4567" 
              />
              <ContactItem 
                icon={<Mail className="w-4 h-4" />} 
                text="sarah@cubsonboarddaycare.com" 
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Cubs Onboard Home Daycare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};