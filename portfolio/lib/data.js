// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH FOR THE WHOLE SITE. Edit here; nothing else needed.
//  Fields marked  // ← EDIT  are waiting on you (currently: cert verify URLs).
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Saral Singhal",
  role: "Data & Strategy",
  tagline:
    "Computer Science student at VIT Bhopal working where infrastructure policy meets data — PPP and data-centre feasibility at Deloitte, Power BI and DAX for public-sector reporting, and machine learning for medical imaging on my own time.",
  location: "Gurugram / Delhi, India",
  email: "saralsinghal2810@gmail.com",
  phone: "+91 80009 38425",
  linkedin: "https://linkedin.com/in/saral-singhal",
  github: "https://github.com/Saral2810",
  resume: "/Saral_Singhal_Resume.pdf",
  // Photo for the About page. Drop a file in /public/ and update this path,
  // e.g. "/saral.jpg". Leave as-is to show a labelled placeholder.
  photo: "/exhibits/portrait.svg", // ← EDIT: replace with your real photo
  education: {
    school: "Vellore Institute of Technology",
    campus: "Bhopal, Madhya Pradesh",
    degree: "B.Tech, Computer Science & Engineering",
    span: "2023 – 2027",
    cgpa: "8.42 / 10",
  },
  // About-page narrative. Plain paragraphs; edit freely.
  about: [
    "I'm a Computer Science and Engineering student at Vellore Institute of Technology, Bhopal, graduating in 2027. My route into engineering started with a simple pull toward problems that have a right answer hiding in the details — and data turned out to be where that instinct fits best.",
    "Over time that interest narrowed into something specific: turning messy, real-world information into decisions people can act on. Whether it's a highway asset register, a metro's revenue streams, or a set of endoscopy images, the work I enjoy most is the same — cleaning, modelling and shaping data until a clear story falls out of it.",
    "I've been fortunate to test that in industry early. At Deloitte I worked on data-centre feasibility and built Power BI analytics for public-infrastructure bids; at Ernst & Young I quantified revenue streams for Chennai Metro Rail and mapped highway assets through GIS. Alongside consulting, I build on my own time — from a deep-learning system for medical imaging to a from-scratch data pipeline — because the fastest way I learn is by making the thing work end to end.",
  ],
  vision:
    "By 40, I want to be the person organisations trust to turn tangled data into the decision that moves them forward — and to have trained a generation of analysts who do the same.",
};

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
      "Feasibility work on a Tier III data-centre PPP, a Power BI bid-compliance tool scoring bidders against a tender checklist, and the reporting layer for a government asset-registration system.",
    // Task → Solution → Outcome
    task: "Support a feasibility study for a 10 MW Tier III data centre under a public-private partnership, and fix a slow, manual process for checking infrastructure bids against tender rules.",
    solution:
      "For the feasibility study I worked across demand assessment, site and infrastructure requirements, and a 20-year operating case. For the bid problem, I designed a Power BI dashboard on a star-schema data model with custom DAX measures that scored 19 bidders against a 32-point NHAI tender checklist automatically. I also built the reporting layer for the Asset Registration System, pulling scattered highway asset records into review-ready dashboards.",
    outcome:
      "The bid dashboard replaced a manual, document-by-document review with a single scored view, and the asset dashboards gave stakeholders a clean base to sign off on.",
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
      "Non-fare revenue assessment for Chennai Metro Rail, a build-ready spec for automating vendor revenue collection, and GIS asset mapping across two state highway networks.",
    task: "Assess non-fare revenue potential for Chennai Metro Rail and help specify a system to manage that revenue, plus standardise highway asset data across two states.",
    solution:
      "I quantified non-fare box revenue streams, benchmarking commercial space use and land-value-capture mechanisms across station assets. I then specified the functional requirements and workflow models for a platform to automate vendor-based revenue collection, tracking and reconciliation. Separately, I mapped Chhattisgarh and Uttar Pradesh national highway stretches through GIS.",
    outcome:
      "A clear revenue assessment and a build-ready specification the team could take forward, plus standardised highway asset records ready for downstream registration.",
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
    repo: "https://github.com/Saral2810/Wireless-capsule-Endoscopy",
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
    repo: "https://github.com/Saral2810/TeleTrace",
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

// Certifications & achievements. Add a url to turn the name into a Verify link.
export const certifications = [
  {
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    url: "https://drive.google.com/file/d/1-oChk8PGQBI0lIoysgMc882YFsrqtdgT/view?usp=sharing",
  },
  {
    name: "Oracle Analytics Cloud Certified Professional",
    issuer: "Oracle",
    url: "https://drive.google.com/file/d/1ZJkRuZsVCAyPTwLLpi3UaxtUMeDnFhMe/view?usp=sharing",
  },
  {
    name: "Applied Machine Learning in Python",
    issuer: "University of Michigan · Coursera",
    url: "https://drive.google.com/file/d/1qNmc00rT6EWGqkLL7Ws3AalZJBcgcWNB/view?usp=sharing",
  },
  { name: "Research paper on Wireless Capsule Endoscopy", issuer: "Presented at ICNACT 2026", url: "" },
];

export const leadership = [
  {
    role: "Co-Lead, Vitronix (Technical Club)",
    body: "Ran technical workshops and speaker sessions for a 300+ member community, coordinating design, outreach and logistics teams to ship content on schedule and support 110+ registrations.",
  },
  {
    role: "Co-Lead, Mahro Rajasthan Club (Cultural Club)",
    body: "Led a 7-member team across 4 cultural events attended by 500+ students; introduced a bilingual script template and two-round review process that cut last-minute rewrites.",
  },
];

// Documents shown as prominent links (Google Drive, etc.)
export const documents = [
  {
    label: "Partner Letter of Recommendation",
    issuer: "Deloitte",
    url: "https://drive.google.com/file/d/1pxn4BY8bCA6Vvn3LOn3yCnUW7HdghbLW/view?usp=sharing",
  },
  {
    label: "Letter of Appreciation",
    issuer: "Mahro Rajasthan Club",
    url: "https://drive.google.com/file/d/1NcS0L-HGUIbnJLHqhEIGvJrGXnLC577n/view?usp=sharing",
  },
];

export const hobbies =
  "Off-screen, I play badminton — I've represented college clubs — and I'm a steady reader of mystery and crime fiction. Both scratch the same itch, honestly: spotting the pattern before the reveal.";

// Skill strip kept on the About page so it isn't lost.
export const skillGroups = [
  { group: "Querying & programming", items: ["SQL", "Python", "Java (Basics)"] },
  {
    group: "Analytics & BI",
    items: ["Power BI (DAX, star-schema)", "Oracle Analytics Cloud", "Excel", "Matplotlib", "Streamlit"],
  },
  {
    group: "Data & ML libraries",
    items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "TensorFlow", "PyTorch", "Keras"],
  },
  { group: "Methods", items: ["ETL", "Data Modelling", "Requirement Gathering", "Stakeholder Management"] },
  { group: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Power Automate", "n8n"] },
];

export const nav = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];
