import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center">
    <h2 className="text-4xl font-bold mb-4">{title}</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
); 