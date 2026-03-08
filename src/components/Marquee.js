"use client";

export default function Marquee() {
  const text =
    "Machine Learning \u00A0·\u00A0 Data Science \u00A0·\u00A0 AI Systems \u00A0·\u00A0 Full Stack \u00A0·\u00A0 Blockchain \u00A0·\u00A0 OSINT \u00A0·\u00A0 NLP \u00A0·\u00A0 Cloud Computing \u00A0·\u00A0 Healthcare AI \u00A0·\u00A0 Cybersecurity \u00A0·\u00A0 Data Analytics \u00A0·\u00A0 Project Management \u00A0·\u00A0 ";

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}
