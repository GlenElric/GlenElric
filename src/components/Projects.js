"use client";
import { useState } from "react";

const projects = [
  {
    num: "01",
    title: "VarunNetra",
    tags: ["AI · RAG", "Defence Tech"],
    year: "2025",
    desc: "Naval intelligence platform using RAG (FAISS + Gemini) to extract and visualize maritime communications on a real-time tactical map. Automated threat detection, WebSocket live updates.",
    stack: ["Flask", "React", "FAISS", "Gemini", "Socket.IO", "Leaflet.js"],
    links: [{label: "GitHub ↗", url: "https://github.com/GlenElric/VaruNetra"}],
  },
  {
    num: "02",
    title: "Aadhaar Data Insights",
    tags: ["Data Science", "Hackathon"],
    year: "2026",
    desc: "ML-powered analysis of 260M+ Aadhaar transactions across 39 states. K-Means clustering to discover enrollment archetypes, 85–90% accurate forecasting model, 13 interactive Plotly visualizations. UIDAI Hackathon 2026.",
    stack: ["Python", "Pandas", "Plotly", "Scikit-learn", "Jupyter"],
    links: [{ label: "Live Report ↗", url: "https://aadhaar-data-hackathon.vercel.app" }, {label: "GitHub ↗", url: "https://github.com/GlenElric/UIDAI-Data-Analysis"}],
  },
  {
    num: "03",
    title: "Agriscrow",
    tags: ["Blockchain", "Web3"],
    year: "2023",
    desc: "TON blockchain marketplace connecting farmers and buyers through smart contract escrow with multi-sig, timelock, and FCFS rental processing. Multi-role system for farmers, buyers, landlords, and renters. 🏆 Runner Up, SJEC Premiere Hackathon 2023.",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "TON Blockchain", "Tact", "Flask"],
    links: [{ label: "GitHub ↗", url: "https://github.com/0x5h31d0n/Agriscrow-TON" }],
  },
  {
    num: "04",
    title: "SleuthAI",
    tags: ["OSINT", "Cybersecurity"],
    year: "2024",
    desc: "OSINT-based law enforcement tool with secure backend integrating multiple data sources, advanced data correlation algorithms, and enhanced cybersecurity measures for digital footprint mapping. 🏆 Runner Up, CIDeCode Hackathon 2024 (PES University).",
    stack: ["Python", "Flask", "JavaScript", "HTML5", "CSS3"],
    links: [{ label: "GitHub ↗", url: "https://github.com/0x5h31d0n/SleuthAI" }],
  },
  {
    num: "05",
    title: "feedback.",
    tags: ["Full Stack", "NLP"],
    year: "2025",
    desc: "Minimalist feedback platform with built-in NLP sentiment engine, TF-IDF keyword extraction, bigram detection, and a weighted 0–100 performance scoring system visualized as a radar chart. B&W aesthetic.",
    stack: ["FastAPI", "React 18", "MySQL", "Recharts", "Custom NLP"],
    links: [{label: "GitHub ↗", url: "https://github.com/GlenElric/feedback"}],
  },
  {
    num: "06",
    title: "DataSynth",
    tags: ["Data Science", "ML Platform"],
    year: "2025",
    desc: "Human-in-the-loop EDA platform streamlining data preprocessing, interactive visualization, and synthetic data generation using Copulas and SDV. Glassmorphism UI with real-time analytics.",
    stack: ["Python", "Streamlit", "Copulas", "SDV", "Plotly"],
    links: [{label: "GitHub ↗", url: "https://github.com/jeswin2003lobo/DataSynth"}],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects">
      <div className="section-meta reveal">03 / Projects</div>
      <div className="projects-list">
        {projects.map((project, i) => (
          <div key={project.num} className="reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
            <div
              className={`project-row ${openIndex === i ? "active-row" : ""}`}
              onClick={() => toggleProject(i)}
            >
              <span className="project-num">{project.num}</span>
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="project-year">{project.year}</span>
              <span className="project-arrow">→</span>
            </div>
            <div className={`project-detail ${openIndex === i ? "open" : ""}`}>
              <div className="project-detail-inner">
                <div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
