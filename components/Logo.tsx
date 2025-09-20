import React from 'react';

interface LogoProps {
  variant?: 'primary' | 'white';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'primary', className = '' }) => {
  const textColor = variant === 'primary' ? 'text-blue-800' : 'text-white';
  const iconColor = variant === 'primary' ? '#3B82F6' : 'white'; // blue-500
  const leafColor = variant === 'primary' ? '#22C55E' : 'white'; // green-500

  return (
    <a href="#home" className={`flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg ${className}`} aria-label="Eskada Home">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <title>Eskada Logo Icon</title>
        <path d="M4 6H16" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12H12" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 18H10C10 18 12 18 14 16C16 14 18 12 20 12C20 12 18 14 16 16C14 18 12 20 10 20C8 20 4 18 4 18Z" stroke={leafColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={`text-3xl font-bold tracking-wider ${textColor}`}>
        Eskada
      </span>
    </a>
  );
};

export default Logo;
