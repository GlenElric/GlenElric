"use client";
import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Small delay to ensure all components are hydrated
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.12 }
      );

      document
        .querySelectorAll(".reveal, .reveal-clip")
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}
