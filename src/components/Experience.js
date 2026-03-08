"use client";

const experiences = [
  {
    year: "Mar 2025 – Current",
    type: "Internship",
    title: "AI Research Intern",
    org: "CloudxLab",
    desc: "Authored six in-depth technical blogs on AI in healthcare, covering robotic surgery, synthetic data, and genomic analysis. Gained advanced technical writing skills and deep understanding of healthcare data standards and privacy regulations.",
  },
  {
    year: "2026",
    type: "Hackathon",
    title: "UIDAI Data Hackathon",
    org: "Unique Identification Authority of India",
    desc: "Analyzed 260M+ Aadhaar transactions using K-Means clustering and predictive modeling to deliver data-driven recommendations for India's digital identity infrastructure.",
  },
  {
    year: "2024",
    type: "Hackathon",
    title: "CIDeCode Hackathon — Runner Up",
    org: "PES University · OSINT Track",
    desc: "Developed SleuthAI, a secure backend integrating multiple OSINT data sources with advanced correlation algorithms for law enforcement digital footprint mapping.",
  },
  {
    year: "2023",
    type: "Hackathon",
    title: "SJEC Premiere Hackathon — Runner Up",
    org: "St. Joseph Engineering College · Agricultural Innovation",
    desc: "Built Agriscrow, a decentralized agricultural marketplace on the TON blockchain with smart-contract escrow, multi-user roles, and real-time market data.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-meta reveal">04 / Experience</div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className="timeline-item reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-left">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-type">{exp.type}</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-org">{exp.org}</div>
              <div className="timeline-desc">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
