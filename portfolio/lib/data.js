// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH FOR THE WHOLE SITE. Edit here; nothing else needed.
//  Fields marked  // ← EDIT  are waiting on you.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Saral Singhal",
  role: "Data & AI Engineer",
  tagline:
    "I turn messy data into working AI systems — from pipelines and dashboards to fine-tuned vision-language models and AI voice agents.",
  // One-line context shown under the tagline on the About page.
  intro:
    "Final-year Computer Science student at VIT Bhopal. Currently working on LeadX at Predixion AI, a live AI voice platform for lead and loan campaigns. Before that, data and analytics internships at Deloitte and EY.",
  location: "Jaipur/ Rajasthan, India",
  email: "saralsinghal2810@gmail.com",
  phone: "+91 80009 38425",
  linkedin: "https://linkedin.com/in/saral-singhal",
  github: "https://github.com/Saral2810",
  resume: "/Saral_Singhal_Resume.pdf",
  // Photo for the About page. Drop a file in /public/ and update this path,
  // e.g. "/saral.jpg". Leave as-is to show a labelled placeholder.
  photo: "/exhibits/portrait.jpeg", // ← EDIT: replace with your real photo
  education: {
    school: "Vellore Institute of Technology",
    campus: "Bhopal, Madhya Pradesh",
    degree: "B.Tech, Computer Science & Engineering",
    span: "2023 – 2027",
    cgpa: "8.42 / 10",
  },
  // About-page narrative. Plain paragraphs; edit freely.
  about: [
  "My academic journey began in the sciences. Studying biology in high school sparked a curiosity about healthcare that I wanted to explore through a technological lens. This led me to pursue a B.Tech in Computer Science and Engineering with a specialization in Health Informatics at Vellore Institute of Technology, Bhopal (Class of 2027).",
  "Once at university, I cast a wide net—exploring app development, cybersecurity, AI/ML, and data science. I quickly discovered a simple pull toward problems that have a right answer hidden in the details, and data turned out to be where that instinct fits best. I was fascinated by the way numbers can answer complex questions and how models learn patterns to drive business decisions.",
  "I decided to merge my biology roots with my growing technical stack by building BleedDetectX, a deep-learning system for Wireless Capsule Endoscopy that finds and outlines bleeding in capsule-camera images. My best model, DMP-WCEBleedNet, reached a Dice score of 0.812 for outlining bleeding regions and 98.31% accuracy for flagging bleeding images. With my professor's encouragement, I wrote a paper on this architecture, which was published at ICNACT 2026.",
  "Since then my work has moved towards generative AI. I built the machine-learning half of BillTrail, which fine-tunes the open-source Qwen3-VL vision-language model to read Indian medical bills and return clean, validated data. I now work on LeadX at Predixion AI, a live platform where AI voice agents call and qualify leads for lending campaigns.",
  "I also learned how businesses actually use data. At Deloitte I built a Power BI tool that scored bidders against a tender checklist, and worked on a data-centre feasibility study. At EY I sized non-fare revenue for Chennai Metro Rail and mapped highway assets with GIS. That consulting time taught me requirement gathering and stakeholder management, and now I start every build by asking what business question it answers.",
  ],
  vision:
    "I want to build AI systems that people rely on every day: systems that start from messy, real-world data and end in a decision someone can trust. A medical bill, a set of capsule-camera images or a lead list all need the same thing: clean the data, model it honestly, measure it with the right metric, and ship it.",
};

// Proof tiles shown on the first screen of the About page.
export const marquee = [
  { value: "Live", label: "AI voice platform", note: "LeadX at Predixion AI, in production" },
  { value: "0.812", label: "Dice score", note: "BleedDetectX, published at ICNACT 2026" },
  { value: "QLoRA", label: "VLM fine-tuning", note: "Qwen3-VL 4B pipeline for BillTrail" },
  { value: "MS Fabric", label: "Data Engineer cert", note: "Microsoft Certified Associate" },
];

export const experience = [
  {
    slug: "predixion-ai",
    org: "Predixion AI",
    team: "LeadX",
    title: "AI Engineering Intern", // ← EDIT: your exact job title
    location: "India", // ← EDIT: city, or "Remote"
    span: "2026 – Present", // ← EDIT: exact start month, e.g. "September 2026 – Present"
    period: "Current",
    summary:
      "Working on LeadX, a live platform where AI voice agents call, qualify and score leads for lending and lead-generation campaigns, with every call result written back to a Postgres database and partner systems.",
    task: "Lending and lead-generation teams get thousands of leads that a human team cannot call quickly. They needed AI agents that call each lead, hold a real conversation, decide if the lead is a good fit, and report back in real time, without calling the same person twice or anyone who opted out.",
    solution:
      "LeadX sits between the lead sources and the voice AI. Leads come in through an API, get cleaned (phone numbers standardised, duplicates and do-not-call numbers removed), scored, and stored in Supabase (PostgreSQL). A dispatcher then sends each call to one of several voice AI providers, chosen per campaign, and webhooks bring the call results back for post-call scoring, CRM sync and partner reporting.", // ← EDIT: add one line on the parts you personally built
    outcome:
      "The platform runs real campaigns in production, can switch voice providers per campaign without downtime, and keeps each client's data separate.",
    stack: ["Voice AI agents", "Supabase / PostgreSQL", "Node.js", "Webhooks", "Lead scoring"],
    // Company work: no client data, screenshots or code are shown here.
    exhibits: [],
  },
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
        src: "/exhibits/deloitte-1.jpeg",
        caption: "Strategy & Plan",
        source: "Deloitte, Strategy Risk & Transactions, 2026",
      },
      {
        src: "/exhibits/deloitte-2.jpeg",
        caption: "1st day of Joining",
        source: "Deloitte, 2026",
      },
      {
        src: "/exhibits/deloitte-3.jpeg",
        caption: "Dashboard Analysis",
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
        src: "/exhibits/ey-1.jpeg",
        caption: "CMRL non-fare revenue assessment — extract",
        source: "Ernst & Young, 2025",
      },
      {
        src: "/exhibits/ey-2.jpeg",
        caption: "1st day at EY",
        source: "Ernst & Young, 2025",
      },

    ],
  },
];

// Each project page opens with four facts (role, stack, problem, result), then
// numbered pipeline steps. `demo` and `repo` are optional; leave "" to hide a button.
export const projects = [
  {
    slug: "billtrail",
    name: "BillTrail",
    domain: "Generative AI",
    blurb:
      "Fine-tunes the open-source Qwen3-VL vision-language model to read Indian medical bills and return a clean, validated standard format, with rule checks that send doubtful bills to a human.",
    repo: "https://github.com/Saral2810/Medic-Billy",
    demo: "",
    stack: ["Python", "Qwen3-VL", "QLoRA / Unsloth", "vLLM", "Pydantic", "FastAPI"],
    facts: {
      role: "Built the machine-learning half (team project; a teammate built the web app and API)",
      problem:
        "Medical bills arrive as photos and PDFs in every layout. Typing them in by hand is slow, and plain OCR misreads tables, totals and GST numbers.",
      result:
        "One function turns a bill file into checked, structured data, plus a full train → serve → score pipeline backed by 23 automated tests.",
    },
    pipeline: [
      "Bill image or PDF",
      "Page extraction and image cleaning",
      "Fine-tuned Qwen3-VL reads the bill",
      "Pydantic schema and rule checks (GSTIN, totals, expiry)",
      "Clean JSON, or human review if unsure",
    ],
    metrics: [
      { value: "4B", label: "Model parameters" },
      { value: "23", label: "Automated tests" },
      { value: "1,000", label: "Synthetic training bills" },
    ],
    detail: [
      {
        heading: "Training data",
        body: "Wrote a generator that makes synthetic bills with known correct answers (clean, faded, tilted and noisy versions, about 20% with a planted error), then split real and synthetic bills so the model is never tested on what it trained on.",
      },
      {
        heading: "Fine-tuning",
        body: "QLoRA fine-tuning of Qwen3-VL 4B with Unsloth, runnable on a single GPU or free Colab, served through vLLM or Ollama behind an OpenAI-style API.",
      },
      {
        heading: "Checks before trust",
        body: "Every answer is validated against a Pydantic schema and rule checks (GSTIN check digit, line items adding up to totals, expiry dates). Anything invalid or unreadable goes to a human reviewer instead of the database.",
      },
      {
        heading: "Measuring it honestly",
        body: "An evaluation script scores each setup (base model, fine-tuned model and an OCR baseline) on field accuracy, line-item F1, GSTIN validity and how often a bill needs human review.",
      },
    ],
    exhibits: [],
  },
  {
    slug: "bleeddetectx",
    name: "BleedDetectX",
    domain: "Computer Vision",
    blurb:
      "Deep learning that finds and outlines bleeding in Wireless Capsule Endoscopy images. The research behind it was published at ICNACT 2026.",
    repo: "https://github.com/Saral2810/Wireless-capsule-Endoscopy",
    demo: "",
    stack: ["Python", "PyTorch", "TensorFlow", "Keras"],
    facts: {
      role: "Built and compared the models, and wrote the research paper",
      problem:
        "A capsule camera takes thousands of gut images per patient. Doctors need help spotting the few that show bleeding, and seeing exactly where it is.",
      result:
        "DMP-WCEBleedNet reached a Dice score of 0.812 for outlining bleeding and 98.31% accuracy for flagging bleeding images, beating the U-Net baseline.",
    },
    pipeline: [
      "Capsule endoscopy images",
      "Cleaning, resizing and augmentation",
      "U-Net, ResNet-UNet and DMP-WCEBleedNet",
      "Bleeding / non-bleeding label plus a mask",
      "Dice, IoU, precision, recall, F1",
    ],
    metrics: [
      { value: "0.812", label: "Dice score (segmentation)" },
      { value: "98.31%", label: "Accuracy (classification)" },
    ],
    metricNote:
      "Why Dice, not just accuracy: most of each image is healthy tissue, so a model that marks nothing as bleeding still looks \"accurate\". Dice only rewards the overlap between the predicted bleeding area and the true one.",
    detail: [
      {
        heading: "Model development",
        body: "Built and compared U-Net, ResNet-UNet and DMP-WCEBleedNet architectures for classifying and segmenting bleeding at the same time.",
      },
      {
        heading: "Results",
        body: "DMP-WCEBleedNet reached a Dice score of 0.812 and 98.31% classification accuracy on the held-out test set, outperforming the U-Net baseline.",
      },
      {
        heading: "Evaluation",
        body: "Scored every model on Dice, IoU, precision, recall and F1, because the dataset is imbalanced and accuracy alone would hide missed bleeds.",
      },
      {
        heading: "Research output",
        body: "Published and presented a research paper on Wireless Capsule Endoscopy at ICNACT 2026.",
      },
    ],
    exhibits: [
      {
        src: "/exhibits/bleeddetectx-1.jpeg",
        caption: "Bleeding Images",
        source: "BleedDetectX, DMP-WCEBleedNet",
      },
      {
        src: "/exhibits/bleeddetectx-2.jpeg",
        caption: "Bleeding and Non-Bleeding Images",
        source: "BleedDetectX",
      },
      {
        src: "/exhibits/bleeddetectx-3.jpeg",
        caption: "Learning curves",
        source: "BleedDetectX",
      },
      {
        src: "/exhibits/bleeddetectx-4.jpeg",
        caption: "Segmentation Confusion matrix",
        source: "BleedDetectX",
      },
      {
        src: "/exhibits/bleeddetectx-5.jpeg",
        caption: "Training Curve",
        source: "BleedDetectX",
      },
    ],
  },
  {
    slug: "churnsense",
    name: "ChurnSense",
    domain: "Machine Learning",
    blurb:
      "Predicts which customers will leave, explains why with SHAP, and picks the most profitable group to send a retention offer to, inside a Streamlit dashboard.",
    repo: "https://github.com/Saral2810/Churn-Sense",
    demo: "", // ← EDIT: add a Streamlit Community Cloud link once deployed
    stack: ["Python", "Scikit-learn", "XGBoost", "SHAP", "SMOTE", "Streamlit"],
    facts: {
      role: "Team project; I built the models, the profit engine and the Streamlit app in this repo", // ← EDIT: confirm your exact part
      problem:
        "Predicting churn is easy. Knowing which customers are worth the cost of saving is the real business question.",
      result:
        "A dashboard where a business user uploads a CSV, enters customer value and offer cost, and downloads a ranked \"send offer\" list.",
    },
    pipeline: [
      "Customer CSV",
      "Cleaning and SMOTE balancing",
      "Ensemble: Logistic Regression, Random Forest, XGBoost",
      "Risk score, SHAP reasons and K-Means segments",
      "Profit curve picks who gets an offer",
    ],
    metrics: [
      { value: "3", label: "Models in the ensemble" },
      { value: "SHAP", label: "Explains every prediction" },
    ],
    metricNote:
      "Instead of maximising accuracy, the cut-off is chosen to maximise profit: net profit = (true positives × customer value × offer success rate) − (customers contacted × offer cost).",
    detail: [
      {
        heading: "Modelling",
        body: "Balanced the classes with SMOTE and combined Logistic Regression, Random Forest and XGBoost into one risk score per customer.",
      },
      {
        heading: "Explainability",
        body: "Used SHAP to show which factors push each customer towards leaving, so the business can act on the cause rather than just the score.",
      },
      {
        heading: "Profit optimisation",
        body: "A money-based confusion matrix and profit curve find the threshold where the cost of the offer is lower than the revenue it saves.",
      },
    ],
    exhibits: [],
  },
  {
    slug: "tenderiq",
    name: "TenderIQ",
    domain: "Analytics",
    blurb:
      "A bid compliance and evaluation system in Power BI that checks every bidder against every tender requirement, flags missing documents and sorts bidders into qualified, at-risk and disqualified.",
    repo: "https://github.com/Saral2810/Bid-Compliance-System",
    demo: "https://saral2810.github.io/Bid-Compliance-System/3d_bid_compliance_system.html",
    stack: ["Power BI", "DAX", "Excel", "Data modelling", "HTML / 3D"],
    facts: {
      role: "Solo build",
      problem:
        "Checking each bid against a long tender checklist by hand, document by document, is slow and easy to get wrong.",
      result:
        "Five linked dashboards (overview, qualification summary, compliance grid, evaluation method and requirement traceability) plus an interactive 3D walkthrough of the workflow.",
    },
    pipeline: [
      "Tender requirements and bidder submissions",
      "Requirement mapping",
      "Match: exact, partial, missing or not applicable",
      "Qualification and gap review",
      "Dashboards and evaluation report",
    ],
    metrics: [
      { value: "5", label: "Linked dashboards" },
      { value: "4", label: "Match categories" },
    ],
    detail: [
      {
        heading: "Compliance grid",
        body: "Every bidder against every requirement in one view, so gaps and missing documents stand out at a glance.",
      },
      {
        heading: "Traceability",
        body: "Each finding links back to the exact requirement and bidder, showing the percentage of requirements each bidder has met.",
      },
      {
        heading: "Context",
        body: "A public version of the kind of bid-scoring tool I built during my Deloitte internship.",
      },
    ],
    exhibits: [],
  },
  {
    slug: "teletrace",
    name: "TeleTrace",
    domain: "Data Engineering",
    blurb:
      "A five-stage ETL pipeline in pure Python and SQLite that generates, validates, cleans, loads and analyses call-centre records, keeping every rejected row alongside its failure reason.",
    repo: "https://github.com/Saral2810/TeleTrace",
    demo: "",
    stack: ["Python", "SQLite", "SQL"],
    facts: {
      role: "Solo build",
      problem:
        "Call-centre data arrives with missing fields, duplicates and broken timestamps, and silently dropping bad rows hides problems.",
      result:
        "An idempotent pipeline that never duplicates rows on a re-run, logs why each bad row was rejected, and answers business questions in SQL.",
    },
    pipeline: ["Generate", "Validate", "Clean", "Load into SQLite", "Analyse in SQL"],
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
    exhibits: [],
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

// Skills, grouped by job. Only tools a project or certificate on this site proves.
export const skillGroups = [
  {
    group: "Data engineering",
    items: ["SQL", "PostgreSQL / Supabase", "SQLite", "ETL pipelines", "Microsoft Fabric", "Pandas, NumPy"],
  },
  {
    group: "Machine learning",
    items: ["Scikit-learn", "XGBoost", "SHAP (explainable AI)", "SMOTE (imbalanced data)", "PyTorch", "TensorFlow / Keras"],
  },
  {
    group: "Generative AI",
    items: [
      "Vision-language models (Qwen3-VL)",
      "QLoRA / LoRA fine-tuning (Unsloth)",
      "Structured LLM output (Pydantic)",
      "Model serving (vLLM, Ollama)",
      "AI voice agents",
    ],
  },
  {
    group: "Analytics & BI",
    items: ["Power BI (DAX, star schema)", "Oracle Analytics Cloud", "Excel", "Matplotlib, Seaborn"],
  },
  { group: "Build & ship", items: ["Python", "FastAPI", "Streamlit", "Git, GitHub", "Jupyter", "n8n, Power Automate"] },
];

export const nav = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];
