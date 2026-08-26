// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.
//  Fields marked  // ← EDIT  are placeholders waiting on your input.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Saral Singhal",
  role: "Strategy & Data Science",
  tagline:
    "Computer Science undergraduate working where infrastructure policy meets data — PPP and data-centre feasibility at Deloitte, Power BI and DAX for public-sector reporting, and machine learning for medical imaging on my own time.",
  location: "Gurugram / Delhi, India",
  email: "saralsinghal2810@gmail.com",
  phone: "+91 80009 38425",
  linkedin: "https://linkedin.com/in/saral-singhal",
  github: "https://github.com/Saral2810",
  resume: "/Saral_Singhal_Resume.pdf",
  education: {
    school: "Vellore Institute of Technology",
    campus: "Bhopal, Madhya Pradesh",
    degree: "B.Tech, Computer Science & Engineering",
    span: "2023 – 2027",
    cgpa: "8.42 / 10",
  },
};

// Small, verifiable facts for the hero. Keep these honest and few.
export const marquee = [
  { value: "0.812", label: "Dice coefficient", note: "DMP-WCEBleedNet segmentation" },
  { value: "98.31%", label: "Classification accuracy", note: "Bleeding detection, test set" },
  { value: "2", label: "Consulting internships", note: "Deloitte · Ernst & Young" },
  { value: "8.42", label: "CGPA / 10", note: "VIT Bhopal, CSE" },
];

export const experience = [
  {
    slug: "deloitte",
    org: "Deloitte",
    team: "Strategy, Risk & Transactions",
    title: "Intern",
    location: "Gurugram, India",
    span: "May 2026 – August 2026",
    period: "Recent",
    summary:
      "Feasibility work on a Tier III data-centre PPP, a Power BI bid-compliance analytics tool scoring bidders against a tender checklist, and the reporting layer for a government asset-registration system.",
    contributions: [
      {
        heading: "Feasibility study",
        body: "Contributed to the feasibility study for a 10 MW Tier III data centre in India under a public-private partnership (PPP) model, covering demand assessment, site and infrastructure requirements and a 20-year operating case.",
      },
      {
        heading: "Bid compliance analytics",
        body: "Designed a Power BI dashboard on a star-schema data model with custom DAX measures to score 19 bidders against a 32-point NHAI tender checklist, replacing a manual document-by-document review process.",
      },
      {
        heading: "Asset monetisation reporting",
        body: "Developed the reporting layer for the Asset Registration System, consolidating dispersed highway asset records into review-ready dashboards for stakeholder sign-off.",
      },
    ],
    stack: ["Power BI", "DAX", "Star-schema modelling", "PPP frameworks", "Secondary research"],
    // ← EDIT: drop images into /public/exhibits/ and update src + caption + source.
    exhibits: [
      {
        src: "/exhibits/deloitte-1.svg",
        caption: "Bid-compliance analytics dashboard, Power BI",
        source: "Deloitte, Strategy Risk & Transactions, 2026",
      },
      {
        src: "/exhibits/deloitte-2.svg",
        caption: "Tier III data-centre feasibility study — extract",
        source: "Deloitte, 2026",
      },
      {
        src: "/exhibits/deloitte-3.svg",
        caption: "Internship confirmation",
        source: "Deloitte, 2026",
      },
    ],
  },
  {
    slug: "ey",
    org: "Ernst & Young",
    team: "Research",
    title: "Research Intern",
    location: "Delhi, India",
    span: "May 2025 – June 2025",
    period: "Past",
    summary:
      "Non-fare-box revenue assessment for Chennai Metro Rail, a functional spec for automating vendor revenue collection, and GIS asset mapping across two state highway networks.",
    contributions: [
      {
        heading: "Revenue analysis",
        body: "Quantified non-fare box revenue streams for Chennai Metro Rail Limited (CMRL), benchmarking commercial space utilisation and land value capture mechanisms across station assets.",
      },
      {
        heading: "Requirements design",
        body: "Specified functional requirements and workflow models for a platform automating vendor-based non-fare revenue collection, tracking and reconciliation.",
      },
      {
        heading: "Geospatial data",
        body: "Mapped Chhattisgarh and Uttar Pradesh national highway stretches through GIS, standardising asset records for downstream registration and analysis.",
      },
    ],
    stack: ["Market sizing", "GIS mapping", "Requirements design", "Land value capture"],
    exhibits: [
      {
        src: "/exhibits/ey-1.svg",
        caption: "CMRL non-fare revenue assessment — extract",
        source: "Ernst & Young, 2025",
      },
      {
        src: "/exhibits/ey-2.svg",
        caption: "National Highway asset mapping, Chhattisgarh & Uttar Pradesh",
        source: "Ernst & Young, 2025",
      },
      {
        src: "/exhibits/ey-3.svg",
        caption: "Internship completion certificate",
        source: "Ernst & Young, 2025",
      },
    ],
  },
];

export const projects = [
  {
    slug: "bleeddetectx",
    name: "BleedDetectX",
    domain: "Computer Vision",
    blurb:
      "Deep learning for bleeding classification and segmentation in Wireless Capsule Endoscopy images.",
    // ← EDIT: paste the repo URL. Falls back to the GitHub profile if left as-is.
    repo: profile.github,
    stack: ["Python", "PyTorch", "TensorFlow", "Keras"],
    metrics: [
      { value: "0.812", label: "Dice coefficient" },
      { value: "98.31%", label: "Classification accuracy" },
    ],
    detail: [
      {
        heading: "Model development",
        body: "Built and compared U-Net, ResNet-UNet and DMP-WCEBleedNet architectures for simultaneous bleeding classification and segmentation in Wireless Capsule Endoscopy imagery.",
      },
      {
        heading: "Results",
        body: "Reached a Dice coefficient of 0.812 and 98.31% classification accuracy with DMP-WCEBleedNet, outperforming the U-Net baseline on the held-out test set.",
      },
      {
        heading: "Evaluation",
        body: "Assessed models across Dice, IoU, Precision, Recall and F1 on a class-imbalanced dataset to ensure reliable, clinically meaningful performance.",
      },
      {
        heading: "Research output",
        body: "Published and presented a research paper on Wireless Capsule Endoscopy at ICNACT 2026.",
      },
    ],
    exhibits: [
      {
        src: "/exhibits/bleeddetectx-1.svg",
        caption: "Segmentation output — predicted mask against ground truth",
        source: "BleedDetectX, DMP-WCEBleedNet",
      },
    ],
  },
  {
    slug: "teletrace",
    name: "TeleTrace",
    domain: "Data Engineering",
    blurb:
      "A five-stage ETL pipeline in pure Python and SQLite that generates, validates, cleans, loads and analyses call-centre records — with every rejected row kept alongside its failure reason.",
    repo: profile.github, // ← EDIT: paste the repo URL.
    stack: ["Python", "SQLite", "SQL"],
    metrics: [
      { value: "5", label: "Pipeline stages" },
      { value: "500", label: "Records processed" },
    ],
    detail: [
      {
        heading: "Pipeline design",
        body: "Built a five-stage ETL pipeline in pure Python and SQLite — generate, validate, clean, load and analyse — processing 500 synthetic call-centre records seeded with missing fields, duplicates and malformed timestamps. Every rejected record retained a failure reason alongside a run-level ingestion audit log.",
      },
      {
        heading: "Modelling & analysis",
        body: "Normalised timestamps to IST and derived duration, hour and weekend attributes with imputation explicitly flagged; loaded into an idempotent SQLite schema so re-runs never duplicated rows, and answered business questions in SQL using conditional aggregation with CSV report exports.",
      },
    ],
    exhibits: [
      {
        src: "/exhibits/teletrace-1.svg",
        caption: "ETL pipeline run — ingestion audit log and rejected-record reasons",
        source: "TeleTrace",
      },
    ],
  },
];

export const skillGroups = [
  { group: "Querying & programming", items: ["SQL", "Python", "Java (Basics)"] },
  {
    group: "Analytics & BI",
    items: [
      "Power BI (DAX, star-schema modelling)",
      "Oracle Analytics Cloud",
      "Excel",
      "Matplotlib",
      "Streamlit",
    ],
  },
  {
    group: "Data & ML libraries",
    items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    group: "Methods",
    items: ["ETL", "Data Modelling", "Requirement Gathering", "Stakeholder Management"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Power Automate", "n8n"],
  },
];

export const certifications = [
  { name: "Microsoft Certified: Fabric Data Engineer Associate", issuer: "Microsoft", url: "" }, // ← EDIT: credential URL
  { name: "Oracle Analytics Cloud Certified Professional", issuer: "Oracle", url: "" },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan · Coursera",
    url: "",
  },
  {
    name: "Research paper on Wireless Capsule Endoscopy",
    issuer: "Presented at ICNACT 2026",
    url: "",
  },
];

export const nav = [
  { href: "/", label: "Overview" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
