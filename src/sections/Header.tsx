'use client';

import React, { useState } from 'react';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToContact: () => void;
  scrollToHero: () => void;
  scrollToProjects: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToContact, scrollToHero, scrollToProjects }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScroll = (section: string, scrollFunction: () => void) => {
    setActiveSection(section);
    scrollFunction();
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={() => handleScroll('home', scrollToHero)}
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Beranda
        </a>
        <a
          onClick={() => handleScroll('projects', scrollToProjects)}
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Proyek
        </a>
        <a
          onClick={() => handleScroll('about', scrollToAbout)}
          className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Tentang Saya
        </a>
        <a
          onClick={() => handleScroll('contact', scrollToContact)}
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
        >
          Kontak
        </a>
      </nav>
    </div>
  );
};
