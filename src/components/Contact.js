"use client";
import { useEffect, useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-clip")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-headline reveal-clip">
        <span>Let&apos;s work</span>
        <span className="italic">together.</span>
      </div>
      <div className="contact-row">
        <a
          href="mailto:glenelricfernandes@gmail.com"
          className="contact-email reveal"
        >
          glenelricfernandes@gmail.com
        </a>
        <div className="contact-socials reveal" style={{ transitionDelay: "0.1s" }}>
          <a
            href="https://github.com/GlenElric"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/glen-elric-fernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            LinkedIn
          </a>
          <a
            href="/Glen_Elric.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
