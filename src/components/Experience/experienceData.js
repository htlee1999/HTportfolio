// Experience content. Shared by the Experience component and the chatbot knowledge base
// (api/_lib/knowledge.mjs) — keep it free of image/JSX imports.

export const experiences = [
  {
    id: "hdb",
    company: "Housing & Development Board (HDB)",
    // logo: "hdb",  // add an HDB logo to assets/images and wire it in Experience.js
    role: "Systems Analyst",
    period: "Dec 2025 — Present",
    highlights: [
      {
        title: "Digital Transformation Framework",
        description: "Helped shape the organisation's enterprise digital transformation strategy, leading the pillar on formulating and executing AI and digital innovation projects.",
        details: [
          "Designed a three-phase operating model — Idea Capture, Assessment & Prioritisation, and Development, Monitoring & Deployment — governing how AI and digital projects are submitted, evaluated, and tracked",
          "Built a productivity impact model from the ground up, including a four-factor savings formula (base hours, scale, ramp factor, and adoption rate) and project tiering assumptions across simple, intermediate, and advanced categories",
          "Developed compounded savings logic that accounts for prior-year projects continuing to generate value in subsequent years"
        ],
        icon: "🧭"
      },
      {
        title: "Project BEACON — AI Sense-Making Pipeline",
        description: "Independently conceptualised and built an AI-driven pipeline from proof-of-concept to help manage high volumes of resident feedback more effectively.",
        details: [
          "Semantic case clustering using embeddings to surface hidden patterns across cases",
          "AI-assisted escalation that detects mismatches between resident sentiment and case priority tagging",
          "An LLM-generated strategic analysis report that synthesises trends and recommends actions",
          "Ran stakeholder demos, folded feedback into the roadmap, and initiated engagement with the data science team to take it toward production deployment"
        ],
        icon: "🚦"
      },
      {
        title: "Staff SMS Audit Platform",
        description: "Drove the evolution of an AI-powered SMS audit tool from prototype to platform — automating compliance checks, AI quality grading, and category discovery across the outbound staff SMS corpus, with org-level (Zone → Limb → Staff) analytics and PDF/Excel reporting.",
        details: [
          "Re-platformed the UI from a ~750-line Streamlit prototype to a Flask JSON/SSE backend with a hand-built HTML/CSS/JS single-page frontend, enabling live streaming progress and full control over the audit UX",
          "Substantially rewrote the compliance rule engine and AI grading modules — each message scored 1–5 on Clarity, Tone, and Grammar with sentiment and written justification, across multiple LLM providers (Platform AI/GovTech gateway, OpenAI, Gemini, Claude)",
          "Built emergent category discovery two ways: a keyword/document-frequency taxonomy and a semantic BERTopic pipeline (embeddings → UMAP → HDBSCAN → c-TF-IDF) with AI-named clusters, plus a head-to-head method comparison over the full corpus",
          "Engineered background-job and checkpoint plumbing so long grading/discovery runs survive the production ~30s request kill and resume after interruption",
          "Scaled clustering to ~250k-row uploads by clustering distinct messages only, cutting HDBSCAN memory spikes, and unlocking multi-core UMAP on large corpora"
        ],
        icon: "⚡"
      },
      {
        title: "PairChat Bots — Use Case Framing",
        description: "Shaped the use cases for three internal assistant bots developed by a colleague: PhishDetect, WriteRefine, and iTechAssist.",
        details: [
          "PhishDetect — helps staff identify phishing emails",
          "WriteRefine — improves the quality and professionalism of written correspondence",
          "iTechAssist — provides IT FAQ assistance for common technical queries",
          "Framed and packaged each solution so it was clearly positioned and purposefully scoped for its intended users"
        ],
        icon: "🤖"
      },
      {
        title: "Organisational Research & Knowledge Synthesis",
        description: "Produced three knowledge pieces to inform the organisation's digital transformation direction.",
        details: [
          "Digital Transformation Study — analysed how leading organisations (Microsoft, Netflix, DBS, IKEA, Walmart, Estonia, IRAS, URA, CAG) approached transformation, distilling findings into a P.R.I.M.E. framework and a Digital Maturity Assessment model",
          "Case Studies Compilation — translated those findings into an accessible format for internal sharing",
          "UOB Briefing — synthesised UOB's AI strategy and implementation approach into lessons and candidate use cases (advisory chatbots, policy update management, and service quality monitoring)"
        ],
        icon: "📚"
      }
    ]
  },
  {
    id: "ura-contract",
    company: "Urban Redevelopment Authority",
    logo: "ura",
    role: "Systems Analyst (Contract)",
    period: "Jul 2025 — Nov 2025",
    presentationLink: { url: "/URA-Temp-Projects.pdf", text: "View Project Showcase" },
    highlights: [
      {
        title: "RAG Pipeline & AI Chatbot",
        description: "Built an end-to-end Retrieval-Augmented Generation pipeline powering a domain-specific AI chatbot over URA web and PDF content.",
        details: [
          "Automated data acquisition with Puppeteer-based scraping (daily incremental + weekly full refresh via cron jobs) and PyMuPDF for multi-modal PDF extraction",
          "Processed content into 100–1000 token chunks with 1536-dim embeddings stored in a PostgreSQL + pgvector + Vercel Blob multi-tier system",
          "Implemented hybrid retrieval (80% vector similarity + 20% BM25 keyword) with query expansion and cross-encoder reranking",
          "Built a real-time monitoring dashboard tracking scraping health, content quality, and session status"
        ],
        icon: "🗃️"
      },
      {
        title: "Smart Compliance Operations Tool",
        description: "Developed an AI-powered tool that automates property compliance checking and prioritises enforcement at scale.",
        details: [
          "Automated occupant identification and assessment of properties against approved-use regulations",
          "Supported dual input modes: bulk CSV uploads and single-entry forms for ad-hoc checks",
          "Implemented smart prioritisation to rank enforcement actions by risk and urgency",
          "Evaluated SERP API vs. Exa API for AI search, selecting Exa for stronger accuracy"
        ],
        icon: "✅"
      },
      {
        title: "Advanced Deep Research & Search Agent",
        description: "Created a multi-step deep research agent that goes beyond standard RAG using live web data via Exa's Research API.",
        details: [
          "Web Search mode for real-time fact-checking and Deep Research mode for citation-rich synthesised reports",
          "Generated query variations and ran them in parallel via Promise.all with result deduplication",
          "Built a ResearchSteps UI visualising the planning → searching → synthesis thought process",
          "Implemented adaptive timeouts for complex models (e.g. exa-research-pro)"
        ],
        icon: "🧠"
      },
      {
        title: "Additional Projects",
        description: "Delivered a PUB knowledge-base chatbot and drafted product Terms & Conditions documentation.",
        details: [
          "PUB Chatbot: Python/Jupyter scraper extracting PDFs and web content into Markdown, with a custom chunking and embedding pipeline feeding a domain-specific RAG chatbot",
          "DC Assistant T&C: drafted legal, privacy, usage, IP, and SLA documentation benchmarked against OpenAI, Gemini, and Anthropic policies"
        ],
        icon: "📋"
      }
    ]
  },
  {
    id: "ura",
    company: "Urban Redevelopment Authority",
    logo: "ura",
    role: "Product Development Intern (AI/ML)",
    period: "Jan 2025 — May 2025",
    presentationLink: { url: "/Internship presentation.pdf", text: "View Internship Presentation" },
    highlights: [
      {
        title: "GPT Chatbot Development",
        description: "Developed front-end components for an in-house GPT chatbot powered by Gemini 2.5 Pro.",
        details: [
          "Conducted comparative testing with Gemini 2.0 Flash, Gemini 2.5 Pro and OpenAI o3/o3-mini models, GPT 4.1/4, o4 mini",
          "Tested with long context and web grounding capabilities for Gemini models",
          "Implemented responsive UI design for optimal display across devices"
        ],
        icon: "💬"
      },
      {
        title: "Email Editor Application",
        description: "Built a Notion-like email editor web application.",
        details: [
          "Integrated AI functions powered by GPT-4.1 for content enhancement",
          "Implemented real-time collaborative editing features"
        ],
        icon: "✉️"
      },
      {
        title: "Prompt Engineering",
        description: "Applied prompt engineering techniques to optimize AI-generated responses for business use cases.",
        details: [],
        icon: "🧠"
      },
      {
        title: "Front-end Development",
        description: "Utilized Next.js, HTML, and TypeScript to build modular and maintainable front-end components.",
        details: [],
        icon: "💻"
      }
    ]
  },
  {
    id: "twimbit",
    company: "Twimbit Pte Ltd",
    logo: "twimbit",
    role: "Research Intern",
    period: "May 2023 — Jul 2023",
    highlights: [
      {
        title: "Fintech Research",
        description: "Researched and contributed to articles on emerging financial technologies.",
        details: [
          "ChatGPT applications in Financial services",
          "Buy Now Pay Later (BNPL) market trends",
          "Customer Experience analysis for Singapore Banks"
        ],
        link: {
          url: "https://twimbit.com/insights/chatgpt-in-financial-services-11-best-practice-cases-from-banks-and-fintechs",
          text: "View Published Article: ChatGPT in Financial Services"
        },
        icon: "📊"
      },
      {
        title: "Content Development",
        description: "Transformed technical presentations into accessible blog content, improving content reach.",
        details: [],
        icon: "📝"
      },
      {
        title: "Chatbot Testing",
        description: "Provided user testing and feedback for Twimbit's ChatGPT-powered website chatbot.",
        details: [],
        icon: "🔍"
      }
    ]
  },
  {
    id: "jumbo",
    company: "Jumbo Group of Restaurants",
    logo: "jumbo",
    role: "IT Intern",
    period: "Mar 2018 — Sep 2018",
    highlights: [
      {
        title: "Mobile App Testing",
        description: "Conducted comprehensive UI/UX testing for a new mobile application.",
        details: [],
        icon: "📱"
      },
      {
        title: "ERP System Management",
        description: "Digitized 100+ physical recipes into the Epicor ERP system and managed menu pricing across nationwide POS systems.",
        details: [],
        icon: "🗄️"
      },
      {
        title: "IT Support",
        description: "Supported a company-wide Microsoft Office version upgrade.",
        details: [],
        icon: "🖥️"
      },
      {
        title: "Data Analysis",
        description: "Applied advanced Excel formulas for data analysis and reporting.",
        details: [],
        icon: "📈"
      }
    ]
  },
  {
    id: "ncode",
    company: "Ncode Consultant",
    logo: "ncode",
    role: "Intern",
    period: "Jan 2017 — Dec 2017",
    highlights: [
      {
        title: "Web Content Management",
        description: "Managed website content updates and maintenance.",
        details: [],
        icon: "🌐"
      },
      {
        title: "Digital Media",
        description: "Used Photoshop for professional photo editing and conducted product photography sessions.",
        details: [],
        icon: "📷"
      },
      {
        title: "UX Design",
        description: "Implemented information design principles to enhance user experience.",
        details: [],
        icon: "🎨"
      }
    ]
  }
];

export const competencies = [
  {
    title: "AI & Machine Learning",
    skills: ["LLM Integration (GPT · Gemini · Claude)", "RAG Pipelines", "Prompt Engineering", "Embeddings & Vector Search", "Topic Modelling (BERTopic · UMAP · HDBSCAN)", "Research Agents"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["Python", "Flask", "TypeScript", "JavaScript", "React", "Next.js", "HTML / CSS"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["PostgreSQL · pgvector", "Puppeteer", "Exa API", "Tableau", "Epicor ERP", "Excel Analytics"],
  },
  {
    title: "Professional Skills",
    skills: ["Technical Research", "Content Development", "UX & Information Design", "Stakeholder Communication"],
  },
];
