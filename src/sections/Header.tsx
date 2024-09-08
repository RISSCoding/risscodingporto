'use client';

import React from 'react';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToContact: () => void;
  scrollToHero: () => void;
  scrollToProjects: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToContact, scrollToHero, scrollToProjects, activeSection }) => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          onClick={scrollToHero}
          className={`nav-item ${activeSection === 'beranda' ? 'bg-white text-gray-900' : ''}`}
        >
          Beranda
        </a>
        <a
          onClick={scrollToProjects}
          className={`nav-item ${activeSection === 'proyek' ? 'bg-white text-gray-900' : ''}`}
        >
          Proyek
        </a>
        <a
          onClick={scrollToAbout}
          className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`}
        >
          Tentang Saya
        </a>
        <a
          onClick={scrollToContact}
          className={`nav-item ${activeSection === 'kontak' ? 'bg-white text-gray-900' : ''}`}
        >
          Kontak
        </a>
      </nav>
    </div>
  );
};
