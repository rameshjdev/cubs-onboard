import React from 'react';
import { Clock, Users, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  ageRange: string;
  capacity: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  price,
  ageRange,
  capacity
}: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="h-full relative group"
  >
    {/* Animated background gradient */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-70 rounded-2xl blur-md transition-all duration-500"></div>
    
    <div className="relative h-full backdrop-blur-md bg-white/90 p-8 rounded-2xl shadow-xl border border-white/20 flex flex-col transition-all duration-300 z-10">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      
      {/* Icon with animated background */}
      <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-300">
        <div className="absolute inset-0 bg-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-accent group-hover:text-primary transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Stats with improved styling */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <span>{ageRange}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-accent" />
          </div>
          <span>{capacity}</span>
        </div>
      </div>

      {/* Features with improved styling */}
      <div className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
              <Check className="w-3 h-3 text-primary" />
            </div>
            {feature}
          </div>
        ))}
      </div>

      {/* Price and CTA */}
      <div className="pt-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">
            <span className="text-gray-400 text-sm mr-1">Starting at</span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{price.replace('From ', '')}</span>
          </p>
          <button className="group flex items-center gap-1 text-primary hover:text-accent font-semibold transition-colors duration-300">
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);