"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const countersObserved = useRef(false);

  useEffect(() => {
    if (countersObserved.current) return;
    countersObserved.current = true;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            let current = 0;
            const step = Math.ceil(target / 30);
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              el.textContent = current + "+";
              if (current >= target) clearInterval(timer);
            }, 40);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("[data-count]")
      .forEach((el) => counterObserver.observe(el));

    return () => counterObserver.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="section-meta reveal">01 / About</div>
      <div className="about-grid">
        <div className="about-label reveal">Who I am</div>
        <div className="about-content">
          <p className="reveal" style={{ transitionDelay: "0.1s" }}>
            I&apos;m Glen Elric Fernandes, a Computer Science and Data Science
            student at St. Joseph Engineering College, Mangaluru. I specialize in
            machine learning, data analytics, and AI-powered applications , turning
            raw data into intelligent, real-world systems.
          </p>
          <div className="stats-row">
            <div className="stat-item reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="stat-num" data-count="6">
                0
              </div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="stat-num" data-count="4">
                0
              </div>
              <div className="stat-label">Hackathons</div>
            </div>
            <div className="stat-item reveal" style={{ transitionDelay: "0.25s" }}>
              <div className="stat-num" data-count="1">
                0
              </div>
              <div className="stat-label">Internships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
