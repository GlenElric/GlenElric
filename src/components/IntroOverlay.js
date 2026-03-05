"use client";
import { useEffect, useRef } from "react";

export default function IntroOverlay() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.classList.add("gone");
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="intro-overlay" ref={overlayRef}>
      <div id="intro-top"></div>
      <div id="intro-bottom"></div>
    </div>
  );
}
