 "use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("hero");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    let prevScroll = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > prevScroll + 5 && current > 200);
      if (current < prevScroll) setHidden(false);
      prevScroll = current;

      // Scrollspy
      const sections = document.querySelectorAll("section[id]");
      let activeId = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 140) {
          activeId = sec.getAttribute("id");
        }
      });
      setActive(activeId);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      className={`${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
    >
      <a
        href="#hero"
        className="nav-logo"
        onClick={(e) => handleClick(e, "#hero")}
      >
        GE.
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
