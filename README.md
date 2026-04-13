<div align="center">

```
   _____ _             ______ _      _      _      ______
  / ____| |           |  ____| |    (_)    | |    |  ____|
 | |  __| | ___ _ __  | |__  | |     _  ___| |  _ | |__ ___  _ __ _ __   __ _ _ __   __| | ___  ___
 | | |_ | |/ _ \ '_ \ |  __| | |    | |/ __| | |/ /|  __/ _ \| '__| '_ \ / _` | '_ \ / _` |/ _ \/ __|
 | |__| | |  __/ | | || |____| |____| | (__  |   < | | |  __/| |  | | | | (_| | | | | (_| |  __/\__ \
  \_____|_|\___|_| |_||______|______|_|\___|_|_|\_\|_|  \___||_|  |_| |_|\__,_|_| |_|\__,_|\___||___/
```

# Glen Elric Fernandes

**Data Scientist · ML Engineer · AI Systems Builder**

[![B.Tech CSE (Data Science)](https://img.shields.io/badge/B.Tech_CSE_(Data_Science)-SJEC_Mangaluru-0a0a0a?style=flat-square&labelColor=1a1a1a)](https://www.sjec.ac.in/)
[![CGPA](https://img.shields.io/badge/CGPA-9.25%2F10-0a0a0a?style=flat-square&labelColor=1a1a1a)](/)
[![Best Outgoing Student](https://img.shields.io/badge/🏅_Best_Outgoing_Student-CSE--DS_2022--2026-0a0a0a?style=flat-square&labelColor=1a1a1a)](/)
[![DDU Fellow](https://img.shields.io/badge/🎖_Deen_Dayal_Upadhyaya_Fellow-10_Nationally-0a0a0a?style=flat-square&labelColor=1a1a1a)](/)

[![Email](https://img.shields.io/badge/glenelricfernandes@gmail.com-0a0a0a?style=flat-square&logo=gmail&logoColor=white&labelColor=1a1a1a)](mailto:glenelricfernandes@gmail.com)
[![LinkedIn](https://img.shields.io/badge/glen--elric--fernandes-0a0a0a?style=flat-square&logo=linkedin&logoColor=white&labelColor=1a1a1a)](https://linkedin.com/in/glen-elric-fernandes)
[![Portfolio](https://img.shields.io/badge/glenelric.space-0a0a0a?style=flat-square&logo=googlechrome&logoColor=white&labelColor=1a1a1a)](https://glenelric.space)

</div>

---

## `whoami`

Final-year CS undergrad specialising in Data Science — building systems at the intersection of **large-scale analytics**, **generative AI**, and **real-world deployment**. My work ranges from analyzing 260M+ government transactions to shipping GPU-accelerated RAG pipelines and full-stack analytics platforms. I care about the gap between a Jupyter notebook and a system that actually works in production.

- 🔬 **Research interest:** Large-scale data pipelines · synthetic data · retrieval-augmented generation
- 🛠 **Engineering interest:** End-to-end ML systems · LLM inference · agentic AI
- 🌏 **Domain interest:** FinTech analytics · digital identity systems · maritime intelligence

---

## Highlights

| | |
|---|---|
| 🏅 | **Best Outgoing Student** — BE CSE-DS, SJEC 2022–2026 |
| 🎖 | **Deen Dayal Upadhyaya Fellowship** — 10 awarded nationally |
| 🥈 | **Runner-Up, CIDeCode 2024** — PES University (VarunNetra) |
| 🔟 | **Top 10, TonHacker House** — India Blockchain Week 2024 (Agriscrow) |
| 📊 | **UIDAI Data Hackathon 2026** — 260M+ Aadhaar transaction analysis |
| 🎖 | **NCC 'B' & 'C' Certificate** — First Rank in unit |
| 📈 | **Rank 8, KRLMPCA** · KSEEB 10th Board: 96.16% |

---

## Projects

### [DataSynth](https://github.com/GlenElric/DataSynth) — Synthetic Tabular Data Generation Platform
> *Human-in-the-loop EDA + synthetic data generation*

Built a Streamlit-based platform for intelligent data preprocessing, exploratory analysis, and synthetic data generation. Ships three generative model backends — **CTGAN, TVAE, and Gaussian Copula** — with quality validation comparing synthetic vs. original distributions. Achieves **90%+ statistical fidelity** on benchmark tabular datasets.

`Python` `Streamlit` `SDV` `CTGAN` `TVAE` `Copulas` `Plotly` `Scikit-learn`

---

### [Aadhaar Data Insights](https://aadhaar-data-hackathon.vercel.app) — National-Scale Identity Analytics
> *UIDAI Data Hackathon 2026 submission*

End-to-end analysis of **260M+ Aadhaar enrollment and update transactions** across 39 states and 6 geographic zones. Applied **K-Means clustering (k=3)** to discover enrollment archetypes (Adult-Heavy, Balanced, Child-Heavy), and built a linear regression forecasting model with **R² 0.85–0.90** to predict daily enrollment demand. Produced **13 interactive Plotly dashboards** covering temporal trends, MoM/QoQ growth, geographic segmentation, and age-cohort behavior.

`Python` `Pandas` `Scikit-learn` `Plotly` `K-Means` `Linear Regression` `Jupyter`

---

### [VarunNetra](https://github.com/GlenElric/VarunNetra) — Maritime Situational Awareness System
> *Runner-Up, CIDeCode 2024 — PES University*

RAG-powered naval intelligence platform for real-time maritime surveillance. Ingests **100+ communication messages** and surveillance logs, embeds them with Sentence-Transformers into a **FAISS** vector store, and serves an NL query interface backed by Google Gemini. Automated threat detection engine flags unauthorized vessels, distress signals, and restricted-zone infractions via a rule engine. Real-time map updates pushed via **Socket.IO**.

`Python` `Flask` `FAISS` `Sentence-Transformers` `React` `Socket.IO` `Gemini API` `Leaflet`

---

### [Feedback Analytics Platform](https://github.com/GlenElric/feedback) — Full-Stack NLP Feedback Engine
> *FastAPI · React · Custom NLP · MySQL*

Full-stack feedback collection platform with a custom NLP engine (no external API dependencies). Built a **200+ term sentiment lexicon** with scores from −5 to +5, negation detection, and intensifier amplification. Performance scoring uses a **5-dimension weighted model**: Completion Quality (25%), Average Rating (25%), Sentiment (20%), Engagement (15%), Response Volume (15%). REST API serves sentiment, TF-IDF keywords, trend analysis, and radar chart–ready performance scores.

`FastAPI` `React 18` `MySQL` `SQLAlchemy` `JWT` `Custom NLP` `Recharts` `Vite`

---

### [GPU-Accelerated RAG API Agent](https://github.com/GlenElric/RAG-Agent) — LLM Inference at Scale
> *Llama 3.3-70B · vLLM · AMD MI300X*

High-throughput RAG system running **Llama 3.3-70B-Instruct** via vLLM on AMD MI300X (192GB HBM3). Processes PDFs, HTML, and JSON APIs, chunks and embeds content into **FAISS**, and answers questions with context-grounded responses. Built with **LangChain** orchestration, Docker + ROCm containerization, and a FastAPI inference layer supporting concurrent multilingual queries.

`Python` `vLLM` `LangChain` `FAISS` `FastAPI` `Docker` `ROCm` `AMD MI300X`

---

### [Agriscrow](https://github.com/0x5h31d0n/Agriscrow-TON) — Decentralized Agricultural Marketplace
> *Top 10 Finalist — TonHacker House, India Blockchain Week 2024*

Blockchain-powered agricultural marketplace on the **TON network**. Smart contract–based escrow system with multi-sig requirements, timelock mechanisms, and dispute resolution. Supports four roles (farmers, buyers, landlords, renters), equipment rental with FCFS scheduling, and native TON cryptocurrency payments.

`React 18` `TypeScript` `TON Blockchain` `Tact` `Flask` `SQLite` `TON Connect` `Tailwind CSS`

---

### Anomaly Detection Pipeline — Financial Fraud Detection
> *Dual-model: PyTorch Autoencoder + Isolation Forest*

End-to-end fraud detection pipeline with domain-specific feature engineering (transaction frequency, amount ratios, time deltas). Dual-model architecture combines a **PyTorch Autoencoder** (reconstruction-based detection) with a **Scikit-learn Isolation Forest** (ensemble outlier detection). Achieves **67% accuracy improvement** over standard thresholding baselines. FastAPI inference layer delivers sub-500ms predictions.

`Python` `PyTorch` `Scikit-learn` `FastAPI` `Docker` `Feature Engineering`

---

## Experience

**Software Development Intern (AI/ML)** · CloudxLab &nbsp;·&nbsp; *Mar 2025 – Nov 2025 (Remote)*

Authored six technical blogs on applied AI in healthcare, published on [aiforhealthtech.com](https://aiforhealthtech.com), covering synthetic data generation, genomic analysis with DeepVariant, AI-assisted surgical systems, and healthcare data standards. Developed deep familiarity with privacy-preserving ML, clinical data pipelines, and responsible AI deployment in regulated domains.

Selected publications:
- [Synthetic Data in Healthcare](https://aiforhealthtech.com/synthetic-data-in-healthcare/)
- [Google's DeepVariant: AI with Precision Healthcare](https://aiforhealthtech.com/googles-deepvariant-ai-with-precision-healthcare/)
- [The AI Revolution in Surgery](https://aiforhealthtech.com/the-ai-revolution-in-surgery-how-smart-technology-is-transfor)

---

## Tech Stack

```
Languages    Python · SQL · JavaScript · TypeScript · LaTeX
ML/AI        PyTorch · Scikit-learn · LangChain · FAISS · vLLM · SDV (CTGAN, TVAE, Copulas)
Data         Pandas · NumPy · Plotly · Matplotlib · Seaborn
Backend      FastAPI · Flask · SQLAlchemy · JWT · MySQL · SQLite
Frontend     React 18 · Vite · Tailwind CSS · Recharts
Infra        Docker · AMD ROCm · Git
Blockchain   TON · Tact · TON Connect
```

---

## Education

**B.Tech — Computer Science & Engineering (Data Science)**
St. Joseph Engineering College, Mangaluru · 2022–2026
CGPA: **9.25 / 10** · Best Outgoing Student, CSE-DS Dept.

---

<div align="center">

*Building things that work, not just things that demo.*

</div>
