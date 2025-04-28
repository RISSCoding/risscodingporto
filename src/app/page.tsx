'use client';

import { useRef, useEffect, useState } from 'react';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { AboutSection } from '@/sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Jangan lupa import stylesheet AOS
import Lenis from 'lenis';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = (target: HTMLElement, duration: number) => {
    window.scrollTo({
      top: target.offsetTop - 70, // offset Y untuk mengatur jarak header
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({
      duration: 1000, // durasi animasi
      easing: 'ease-in-out', // easing untuk animasi
      once: true, // agar animasi hanya terjadi sekali
    });

    return () => {
      AOS.refresh(); // refresh AOS ketika komponen dihancurkan
    };
  }, []);

  const sections = [
    { id: 'beranda', ref: heroRef },
    { id: 'proyek', ref: projectsRef },
    { id: 'about', ref: aboutRef },
    { id: 'kontak', ref: contactRef },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      }),
      { root: null, rootMargin: '0px', threshold: 0.3 }
    );

    sections.forEach((section) => section.ref.current && observer.observe(section.ref.current));
    return () => sections.forEach((section) => section.ref.current && observer.unobserve(section.ref.current));
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
      <div ref={heroRef} id="beranda" data-aos="fade-up">
        <HeroSection 
          scrollToProjects={scrollToProjects}
          scrollToContact={scrollToContact}
        />
      </div>
      <div ref={projectsRef} id="proyek" data-aos="fade-up">
        <ProjectsSection />
      </div>
      <TapeSection />
      <div ref={aboutRef} id="about" data-aos="fade-up">
        <AboutSection />
      </div>
      <div ref={contactRef} id="kontak" data-aos="fade-up">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
