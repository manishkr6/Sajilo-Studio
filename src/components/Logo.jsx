import React from 'react';

const LogoIcon = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 15 C 20 15 10 35 15 55 C 20 75 35 85 50 85 C 55 85 50 75 45 65 C 30 50 30 30 50 25 C 65 20 75 30 75 30 C 75 30 70 15 50 15 Z" />
    <path d="M 50 85 C 80 85 90 65 85 45 C 80 25 65 15 50 15 C 45 15 50 25 55 35 C 70 50 70 70 50 75 C 35 80 25 70 25 70 C 25 70 30 85 50 85 Z" />
  </svg>
);

const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-1.5 md:gap-2 font-black tracking-tighter uppercase ${className}`}>
    <span>SAJILO</span>
    <LogoIcon className="w-8 h-8 md:w-10 md:h-10" />
    <span>CULTURE</span>
  </div>
);

export default Logo;
