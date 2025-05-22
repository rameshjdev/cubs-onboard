import React from 'react';

interface CredentialProps {
  icon: React.ReactNode;
  text: string;
}

export const Credential = ({ icon, text }: CredentialProps) => (
  <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
    <div className="text-[#F8B195]">{icon}</div>
    <span className="text-sm font-medium">{text}</span>
  </div>
); 