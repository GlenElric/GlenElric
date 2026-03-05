"use client";

import CustomCursor from "@/components/CustomCursor";
import IntroOverlay from "@/components/IntroOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <IntroOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Marquee />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
