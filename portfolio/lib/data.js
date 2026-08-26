// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.
//  Fields marked  // ← EDIT  are placeholders waiting on your input.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Saral Singhal",
  role: "Strategy & Data Science",
  tagline:
    "Computer Science undergraduate working where infrastructure policy meets machine learning — PPP and data-centre research at Deloitte, deep learning for medical imaging on my own time.",
  location: "Gurugram / Delhi, India",
  email: "saralsinghal2810@gmail.com",
  phone: "+91 80009 38425",
  linkedin: "https://linkedin.com/in/saral-singhal",
  github: "https://github.com/Saral2810",
  resume: "/Saral_Singhal_Resume.pdf",
  education: {
    school: "Vellore Institute of Technology",
    campus: "Bhopal, Madhya Pradesh",
    degree: "B.Tech, Computer Science",
    span: "2023 – 2027",
    cgpa: "8.4 / 10",
  },
};

// Small, verifiable facts for the hero. Keep these honest and few.
export const marquee = [
  { value: "0.812", label: "Dice coefficient", note: "DMP-WCEBleedNet segmentation" },
  { value: "98.31%", label: "Classification accuracy", note: "Bleeding detection, test set" },
  { value: "2", label: "Consulting internships", note: "Deloitte · Ernst & Young" },
  { value: "8.4", label: "CGPA / 10", note: "VIT Bhopal, CSE" },
];

export const experience = [
  {
    slug: "deloitte",
    org: "Deloitte",
    team: "Strategy, Risk & Transactions",
    title: "Intern",
    location: "Gurugram, India",
    span: "May 2026 – Present",
    period: "Current",
    summary:
      "Research and analysis on public-private partnership models and data-centre infrastructure in India, plus a Power BI review layer for the government asset-monetisation pipeline.",
    contributions: [
      {
        heading: "Report building",
        body: "Developed research and analytical studies on Public-Private Partnership (PPP) models and data centre infrastructure development in India.",
      },
      {
        heading: "Asset review system",
        body: "Built a Power BI dashboard for the Asset Registration System under the Asset Monetization Pipeline, enabling seamless and efficient review of resources.",
      },
    ],
    stack: ["Power BI", "Advanced Excel", "Secondary research", "PPP frameworks"],
    // ← EDIT: drop images into /public/exhibits/ and update src + caption + source.
    exhibits: [
      {
        src: "/exhibits/deloitte-1.svg",
        caption: "Asset Registration System dashboard, Power BI",
        source: "Deloitte, Strategy Risk & Transactions, 2026",
      },
      {
        src: "/exhibits/deloitte-2.svg",
        caption: "PPP and data-centre infrastructure study — extract",
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
        heading: "Market analysis",
        body: "Performed a detailed assessment of non-fare box revenue streams for Chennai Metro Rail Limited (CMRL), evaluating commercial space utilisation and land value capture mechanisms.",
      },
      {
        heading: "System specification",
        body: "Designed functional requirements and workflow models for a software platform to automate vendor-based non-fare revenue collection and monitoring.",
      },
      {
        heading: "Technical documentation",
        body: "Mapped Chhattisgarh and Uttar Pradesh National Highways through GIS mapping for Asset Registration.",
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
    stack: ["Python", "TensorFlow", "Keras", "PyTorch"],
    metrics: [
      { value: "0.812", label: "Dice coefficient" },
      { value: "98.31%", label: "Classification accuracy" },
    ],
    detail: [
      {
        heading: "Medical imaging models",
        body: "Developed deep learning architectures including U-Net, ResNet-UNet and DMP-WCEBleedNet for bleeding classification and segmentation in Wireless Capsule Endoscopy images.",
      },
      {
        heading: "High-performance results",
        body: "Achieved peak performance using DMP-WCEBleedNet, with a Dice coefficient of 0.812 and classification accuracy of 98.31% on the test dataset.",
      },
      {
        heading: "Multi-task learning",
        body: "Built a PyTorch-based ResNet-UNet leveraging a pre-trained ResNet34 encoder for simultaneous bleeding classification and segmentation.",
      },
      {
        heading: "Comprehensive evaluation",
        body: "Deployed DMP-WCEBleedNet with multi-metric assessment including Dice, IoU, Precision, Recall and F1-Score to ensure clinical-grade reliability.",
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
    slug: "churnsense",
    name: "ChurnSense",
    domain: "Decision Intelligence",
    blurb:
      "A churn-risk and customer-lifetime-value platform that turns model output into targeted retention actions.",
    repo: profile.github, // ← EDIT: paste the repo URL.
    stack: ["Python", "XGBoost", "SMOTE", "SHAP", "Streamlit"],
    metrics: [
      { value: "3", label: "Ensembled models" },
      { value: "SHAP", label: "Explainability layer" },
    ],
    detail: [
      {
        heading: "Customer retention",
        body: "Proposed a decision intelligence platform for customer retention combining churn-risk assessment, customer lifetime value analysis, ROI optimisation and strategic segmentation to support targeted business interventions.",
      },
      {
        heading: "Machine learning",
        body: "Implemented an ensemble churn prediction pipeline using Logistic Regression, Random Forest and XGBoost with SMOTE balancing and SHAP explainability, deployed through an interactive Streamlit dashboard for analytics and decision support.",
      },
    ],
    exhibits: [
      {
        src: "/exhibits/churnsense-1.svg",
        caption: "Streamlit decision dashboard — churn risk and CLV segments",
        source: "ChurnSense",
      },
    ],
  },
];

export const skillGroups = [
  { group: "Languages", items: ["Java", "Python", "SQL"] },
  { group: "ML frameworks", items: ["TensorFlow", "Scikit-Learn", "Keras", "PyTorch"] },
  { group: "Data & analytics", items: ["Pandas", "NumPy", "SHAP", "Matplotlib"] },
  {
    group: "Concepts",
    items: ["Data Cleaning", "EDA", "Feature Engineering", "Ensemble Learning"],
  },
  {
    group: "Tools & software",
    items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Oracle BI", "n8n", "Power BI"],
  },
];

export const certifications = [
  { name: "Microsoft Certified: Data Engineer Associate", issuer: "Microsoft", url: "" }, // ← EDIT: credential URL
  { name: "Oracle Analytics Cloud Certified Professional", issuer: "Oracle", url: "" },
  {
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Skill Badge · Vertex AI",
    url: "",
  },
  { name: "Prompt Design in Vertex AI", issuer: "Google Skill Badge", url: "" },
  { name: "Applied Machine Learning Specialization", issuer: "Coursera", url: "" },
];

export const nav = [
  { href: "/", label: "Overview" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
