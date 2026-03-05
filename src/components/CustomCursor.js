"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
    };
    document.addEventListener("mousemove", onMouseMove);

    let raf;
    function lerpCursor() {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      if (dot) {
        dot.style.left = mx.current + "px";
        dot.style.top = my.current + "px";
      }
      if (ring) {
        ring.style.left = rx.current + "px";
        ring.style.top = ry.current + "px";
      }
      raf = requestAnimationFrame(lerpCursor);
    }
    lerpCursor();

    // Hover effects
    const addHover = () => {
      document
        .querySelectorAll("a, button, .project-row, .skill-item")
        .forEach((el) => {
          const isProject = el.classList.contains("project-row");
          el.addEventListener("mouseenter", () => {
            ring.classList.add("hover");
            if (isProject) ring.classList.add("view-mode");
          });
          el.addEventListener("mouseleave", () => {
            ring.classList.remove("hover", "view-mode");
          });
        });
    };
    // Delay slightly to ensure DOM is ready
    setTimeout(addHover, 500);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-ring" ref={ringRef}>
        <span className="cursor-label">VIEW</span>
      </div>
      <div id="cursor-dot" ref={dotRef}></div>
    </>
  );
}
