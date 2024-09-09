'use client';

import { useRef, useEffect, useState } from 'react';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const smoothScrollTo = (target: HTMLElement, duration: number) => {
  gsap.to(window, {
    scrollTo: {
      y: target,
      offsetY: 70 // Adjust offset if needed
    },
    duration: duration / 1000, // Duration in seconds
    ease: 'power2.inOut' // Smooth easing function
  });
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'beranda', ref: heroRef, name: 'beranda' },
    { id: 'proyek', ref: projectsRef, name: 'proyek' },
    { id: 'about', ref: aboutRef, name: 'about' },
    { id: 'kontak', ref: contactRef, name: 'kontak' }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 // Adjust threshold if needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  const scrollToHero = () => heroRef.current && smoothScrollTo(heroRef.current, 1500);
  const scrollToAbout = () => aboutRef.current && smoothScrollTo(aboutRef.current, 1500);
  const scrollToContact = () => contactRef.current && smoothScrollTo(contactRef.current, 1500);
  const scrollToProjects = () => projectsRef.current && smoothScrollTo(projectsRef.current, 1500);

  return (
    <div>
      <Header
        scrollToHero={scrollToHero}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        scrollToProjects={scrollToProjects}
        activeSection={activeSection}
      />
      <div ref={heroRef} id="beranda">
        <HeroSection 
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
      </div>
      <div ref={projectsRef} id="proyek">
        <ProjectsSection />
      </div>
      <TapeSection />
      <div ref={aboutRef} id="about">
        <AboutSection />
      </div>
      <div ref={contactRef} id="kontak">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}