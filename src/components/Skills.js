"use client";

const skillsLeft = [
  "Python",
  "PyTorch · TensorFlow",
  "Scikit-learn",
  "Pandas · NumPy",
  "SQL · Apache Spark",
  "Plotly · Seaborn",
];

const skillsRight = [
  "React · Next.js",
  "Flask · FastAPI",
  "CUDA · GCP",
  "FAISS · RAG",
  "TON Blockchain",
  "Docker · Vercel",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-meta reveal">02 / Skills</div>
      <div className="skills-grid">
        <div className="about-label reveal">What I use</div>
        <div className="skills-cols">
          <div>
            {skillsLeft.map((skill, i) => (
              <div
                key={skill}
                className="skill-item reveal"
                style={{ transitionDelay: `${0.05 + i * 0.03}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
          <div>
            {skillsRight.map((skill, i) => (
              <div
                key={skill}
                className="skill-item reveal"
                style={{ transitionDelay: `${0.05 + i * 0.03}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
