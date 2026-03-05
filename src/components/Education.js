"use client";

const education = [
  {
    year: "2022 – 2026",
    type: "Undergraduate",
    title: "B.Tech in Computer Science & Data Science",
    org: "St. Joseph Engineering College · Mangaluru",
    desc: "Specializing in machine learning, data analytics, and AI systems. Core coursework in algorithms, database systems, and statistical modeling. CGPA: 9.38.",
  },
  {
    year: "2020 – 2022",
    type: "Pre-University",
    title: "PCMS (Physics, Chemistry, Math, Computer Science)",
    org: "St. Aloysius P U College · Mangaluru",
    desc: "Completed pre-university education with 89% aggregate. Strong foundation in mathematics and computer science fundamentals.",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section-meta reveal">05 / Education</div>
      <div className="timeline">
        {education.map((edu, i) => (
          <div
            key={edu.title}
            className="timeline-item reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-left">
              <div className="timeline-year">{edu.year}</div>
              <div className="timeline-type">{edu.type}</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-title">{edu.title}</div>
              <div className="timeline-org">{edu.org}</div>
              <div className="timeline-desc">{edu.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
