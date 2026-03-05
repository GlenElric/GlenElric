"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const nameLines = useRef([]);
  const slashRef = useRef(null);
  const subRef = useRef(null);
  const bottomRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      nameLines.current.forEach((el, i) => {
        setTimeout(() => el && el.classList.add("in"), i * 220);
      });
      setTimeout(() => slashRef.current && slashRef.current.classList.add("in"), 280);
      setTimeout(() => subRef.current && subRef.current.classList.add("in"), 700);
      setTimeout(() => bottomRef.current && bottomRef.current.classList.add("in"), 900);
      setTimeout(() => scrollHintRef.current && scrollHintRef.current.classList.add("in"), 1100);
    }, 700);
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">

      <img src="/mascot.png" alt="Glen Elric Mascot" className="hero-mascot" />

      <div className="hero-name-wrap">
        <div className="hero-name-line">
          <span ref={(el) => (nameLines.current[0] = el)}>GLEN</span>
        </div>
        <div className="hero-slash" ref={slashRef}>
          /
        </div>
        <div className="hero-name-line">
          <span ref={(el) => (nameLines.current[1] = el)}>ELRIC</span>
        </div>

        <div className="hero-sub" ref={subRef}>
          <p>Computer Science &amp; Data Science student.</p>
          <p>Building intelligent systems through code and data.</p>
        </div>
      </div>

      <div className="hero-bottom" ref={bottomRef}>
        <span className="hero-bottom-left">Based in Mangaluru, India</span>
        <span className="hero-bottom-right">
          <span className="status-dot"></span>
          Available for opportunities
        </span>
      </div>

      <a href="#about" className="hero-scroll-hint" ref={scrollHintRef} onClick={handleScrollDown}>
        ↓
      </a>
    </section>
  );
}
