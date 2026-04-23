import React from 'react';
import type { ContactInfo, TimelineItem, Project, Skills } from './types';
import { MailIcon, LinkedInIcon, GithubIcon, ExternalLinkIcon } from './components/icons';

const contactData: ContactInfo = {
  name: "Gautam Marathe",
  title: "Data Engineer · ML Engineer · Mechanical Engineering",
  summary: "PySpark pipelines, Kafka, SageMaker, LangChain — built by someone who's also done FEA validation, Formula SAE builds, and factory floor manufacturing.",
  email: "gautammarathe11@gmail.com",
  linkedin: "https://linkedin.com/in/gautammarathe/",
  github: "https://github.com/16ghosty"
};

const experienceData: TimelineItem[] = [
  {
    title: "LOCOMex",
    subtitle: "SWE · ML",
    date: "2025 – Current",
    location: "NYC",
    summary: "• Built customer behavior prediction microservices using Gradient Boosting models deployed via FastAPI on AWS Lambda\n• Engineered ML training and deployment pipelines with MLflow versioning and ECR containerization\n• Developed backend data ingestion and feature engineering layers feeding live prediction endpoints"
  },
  {
    title: "Walmart Robotics",
    subtitle: "Hardware Support Eng.",
    isIntern: true,
    date: "May 2024 – Sep 2024",
    location: "MA",
    summary: "• Root-caused docking failures across 12+ fulfillment centers through hardware inspection and sensor log analysis\n• Built PySpark sensor data pipelines processing 500GB+ daily; identified charge toe wear patterns causing 43% of failures\n• Supported SolidWorks redesign of robotic charge toe component validated with Ansys FEA"
  },
  {
    title: "Credit Suisse",
    subtitle: "SWE · DS (Quant)",
    date: "2022 – 2023",
    location: "India",
    summary: "• Developed NLP pipelines for ESG policy violation detection achieving 94% F1-score on regulatory document corpora\n• Built risk quantification models integrating market signals; reduced compliance review time by 30%\n• Maintained compliance tooling and data pipelines supporting quant research workflows"
  },
  {
    title: "Goldman Sachs",
    subtitle: "SWE · ML",
    isIntern: true,
    date: "2022",
    location: "India",
    summary: "• Built market trend analysis dashboards aggregating multi-source financial data for trading desk consumption\n• Conducted EDA on equity signals; surfaced insights used in desk-level strategy reviews"
  },
  {
    title: "Formula Manipal",
    subtitle: "Vehicle Dynamics Head",
    date: "2019 – 2022",
    location: "Manipal, India",
    summary: "• Led full VD pipeline across 2 Formula SAE builds: concept design, FEA validation, manufacturing, and assembly\n• Designed Ackermann steering geometry achieving -60% steering effort; brake system reduced heat by 27%\n• Managed cross-functional team through two complete build cycles; achieved -17% improvement in lap times"
  },
  {
    title: "Pentagon Automation",
    subtitle: "Mechanical Design",
    isIntern: true,
    date: "2019 – 2020",
    location: "India",
    summary: "• Produced CAD models and assembly drawings for industrial automation components using SolidWorks\n• Supported manufacturing and prototyping; gained hands-on exposure to tolerance stack-up and GD&T"
  },
];

const projectData: Project[] = [
  {
    title: "Formula SAE Vehicle Dynamics System",
    description: "Designed brakes, suspension, and steering across 2 Formula SAE builds — -60% steering effort, -27% brake heat, -17% lap times. Rack-and-pinion Ackermann geometry + thermal FEA.",
    tags: ["SolidWorks", "CATIA V5/V6", "Ansys FEA", "FMEA", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1560724797-bf78e981d20d?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty",
    domain: 'mechanical',
    videoSrc: '/cad-renders/VehicleDynamics.mp4'
  },
  {
    title: "Predictive Maintenance Platform",
    description: "End-to-end ML platform: XGBoost training on Kafka streams, MLflow versioning, SageMaker deployment — 18% stockout reduction, drift-triggered Airflow retraining.",
    tags: ["XGBoost", "SageMaker", "MLflow", "Airflow", "Docker"],
    imageUrl: "/images/Robotics1.webp",
    repoUrl: "https://github.com/16ghosty/Manufacturing-Classification-Model",
    domain: 'robotics'
  },
  {
    title: "Medallion Data Lakehouse",
    description: "Bronze/Silver/Gold ETL pipelines on S3 — Kafka ingestion, PySpark transforms, Delta Lake storage, dbt + Airflow orchestration, Snowflake analytics.",
    tags: ["PySpark", "Kafka", "Delta Lake", "Airflow", "dbt", "Snowflake"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty",
    domain: 'data'
  },
  {
    title: "ESG Compliance Tool",
    description: "RAG-based system on AWS for ESG compliance reporting using LLMs.",
    tags: ["Python", "LangChain", "AWS", "RAG"],
    imageUrl: "/images/coding1.webp",
    repoUrl: "https://github.com/16ghosty/Bond-Pricing-Model-using-ESG",
    domain: 'ai'
  },
  {
    title: "LLM Contract Extraction Pipeline",
    description: "Production Claude API pipeline for structured extraction from unstructured contracts — confidence-based routing, PII controls, and schema enforcement.",
    tags: ["Python", "Claude API", "LangChain", "FastAPI", "AWS"],
    imageUrl: "/images/coding2.jpg",
    repoUrl: "https://github.com/16ghosty",
    domain: 'ai'
  },
  {
    title: "NLP Policy Detection",
    description: "94% F1-score pipeline for policy violation detection deployed as batch inference via Airflow.",
    tags: ["NLP", "spaCy", "scikit-learn", "Airflow", "Azure"],
    imageUrl: "https://images.unsplash.com/photo-1719255418097-acf2f18306ce?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Sentiment-Analysis",
    domain: 'ai'
  },
  {
    title: "CAPM Portfolio Model",
    description: "CAPM-based trading strategy that turned $10k to $1.09M over 6 years using robust linear modeling.",
    tags: ["Python", "Finance", "CAPM", "Backtesting"],
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/CAPM-Portfolio-Balancing-Model",
    domain: 'data'
  },
  {
    title: "Walmart Robotic Charge Toe Redesign",
    description: "Root-caused docking failures across 12+ fulfillment sites. SolidWorks redesign + Ansys FEA cut robot downtime 43%; PySpark pipeline processed 500GB+ daily sensor data.",
    tags: ["SolidWorks", "Ansys FEA", "PySpark", "Apache Kafka", "SQL"],
    imageUrl: "/images/Robotics2.webp",
    repoUrl: "https://github.com/16ghosty",
    domain: 'robotics'
  },
  {
    title: "Customer Prediction Service",
    description: "Gradient Boosting models deployed as scalable microservices with FastAPI, containerized on AWS Lambda + ECR.",
    tags: ["FastAPI", "AWS Lambda", "ECR", "Python"],
    imageUrl: "/images/coding2.jpg",
    repoUrl: "https://github.com/16ghosty",
    domain: 'backend'
  },
];


const skillCategories = [
  { name: "ML & AI", skills: ["PyTorch", "TensorFlow", "XGBoost", "scikit-learn", "MLflow", "SageMaker", "LangChain", "RAG", "spaCy"], color: "bg-nb-yellow" },
  { name: "Languages", skills: ["Python", "SQL", "Java", "Scala", "TypeScript", "Bash"], color: "bg-nb-blue" },
  { name: "Data Engineering", skills: ["PySpark", "Apache Kafka", "Airflow", "dbt", "Snowflake", "Delta Lake", "Parquet", "AWS S3", "EMR"], color: "bg-nb-pink" },
  { name: "Backend & Cloud", skills: ["FastAPI", "REST APIs", "Docker", "AWS Lambda", "ECR", "GitHub Actions", "React", "Claude Code"], color: "bg-nb-green" },
  { name: "CAD & Engineering", skills: ["SolidWorks", "CATIA V5/V6", "Ansys FEA", "GD&T", "FMEA", "HALT", "Tolerance Stack-Up"], color: "bg-nb-orange" },
];

// Hero Section - Original format with decorative artifacts
const Hero: React.FC = () => (
  <section className="min-h-screen bg-nb-cream p-6 md:p-12 relative overflow-hidden">
    {/* Decorative floating shapes - filling negative space */}
    <div className="absolute top-16 right-16 w-24 h-24 bg-nb-yellow border-4 border-nb-black rotate-12 shadow-brutal"></div>
    <div className="absolute top-32 right-48 w-16 h-16 bg-nb-pink border-4 border-nb-black -rotate-6 shadow-brutal"></div>
    <div className="absolute top-64 right-24 w-20 h-20 bg-nb-blue border-4 border-nb-black rotate-45 shadow-brutal"></div>
    <div className="absolute bottom-32 left-16 w-28 h-28 bg-nb-green border-4 border-nb-black -rotate-12 shadow-brutal"></div>
    <div className="absolute bottom-48 left-52 w-14 h-14 bg-nb-purple border-4 border-nb-black rotate-6 shadow-brutal"></div>
    <div className="absolute top-1/2 right-8 w-12 h-12 bg-nb-orange border-4 border-nb-black -rotate-45 shadow-brutal hidden lg:block"></div>

    {/* Animated flowing skill badges */}
    <style>{`
      @keyframes flowOut1 { 
        0% { transform: translate(0, 0) rotate(-5deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(-200px, -150px) rotate(15deg); opacity: 0; }
      }
      @keyframes flowOut2 { 
        0% { transform: translate(0, 0) rotate(5deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(-250px, 100px) rotate(-10deg); opacity: 0; }
      }
      @keyframes flowOut3 { 
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(200px, -200px) rotate(20deg); opacity: 0; }
      }
      @keyframes flowOut4 { 
        0% { transform: translate(0, 0) rotate(-3deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(180px, 150px) rotate(-15deg); opacity: 0; }
      }
      @keyframes flowOut5 { 
        0% { transform: translate(0, 0) rotate(8deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(-150px, 200px) rotate(25deg); opacity: 0; }
      }
      @keyframes flowOut6 { 
        0% { transform: translate(0, 0) rotate(-10deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(250px, -100px) rotate(-20deg); opacity: 0; }
      }
      .flow-skill { animation-iteration-count: infinite; animation-timing-function: ease-out; }
    `}</style>

    {/* Skills flowing from title area */}
    <div className="absolute top-[35%] left-[20%] bg-nb-black text-white px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut1 4s infinite' }}>Python</div>
    <div className="absolute top-[40%] left-[25%] bg-nb-yellow px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut2 5s infinite 0.5s' }}>AWS</div>
    <div className="absolute top-[35%] left-[30%] bg-nb-pink px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut3 4.5s infinite 1s' }}>TensorFlow</div>
    <div className="absolute top-[45%] left-[22%] bg-nb-blue px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut4 5.5s infinite 1.5s' }}>SQL</div>
    <div className="absolute top-[38%] left-[28%] bg-nb-green px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut5 4.2s infinite 2s' }}>PyTorch</div>
    <div className="absolute top-[42%] left-[18%] bg-nb-purple px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut6 5.2s infinite 2.5s' }}>NLP</div>

    {/* Skills flowing from card area */}
    <div className="absolute top-[35%] right-[15%] bg-nb-orange px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut3 4.8s infinite 0.3s' }}>ML</div>
    <div className="absolute top-[42%] right-[20%] bg-nb-yellow px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut4 5.3s infinite 0.8s' }}>Docker</div>
    <div className="absolute top-[38%] right-[12%] bg-nb-pink px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut1 4.6s infinite 1.3s' }}>LLMs</div>
    <div className="absolute top-[45%] right-[18%] bg-nb-blue px-3 py-1 border-3 border-nb-black font-bold text-sm shadow-brutal hidden lg:block flow-skill" style={{ animation: 'flowOut2 5.1s infinite 1.8s' }}>RAG</div>


    {/* Main content */}
    <div className="max-w-7xl mx-auto pt-20 lg:pt-32 relative z-10">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left side - Name and title */}
        <div className="lg:col-span-7">
          <div className="bg-nb-black text-white px-4 py-2 inline-block mb-6 border-4 border-nb-black shadow-brutal">
            <span className="font-bold tracking-wider">ML · DATA ENGINEERING · ROBOTICS</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-nb-black leading-none tracking-tighter">
            GAUTAM<br />
            <span className="text-stroke">MARATHE</span>
          </h1>
          <style>{`.text-stroke { -webkit-text-stroke: 4px black; -webkit-text-fill-color: transparent; }`}</style>

          <div className="mt-6">
            <p className="text-2xl md:text-3xl font-bold text-nb-black leading-tight">I build software that understands hardware.</p>
            <p className="text-lg text-nb-black mt-2 font-medium opacity-80">Grounded in years of mechanical design and manufacturing — elevated by modern ML and data engineering.</p>
          </div>

          {/* CTA buttons below name */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={`mailto:${contactData.email}`} className="bg-nb-yellow border-4 border-nb-black px-6 py-3 font-bold shadow-brutal-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 text-lg">
              <MailIcon className="w-5 h-5" /> Get in Touch
            </a>
            <a href={contactData.github} target="_blank" className="bg-white border-4 border-nb-black px-6 py-3 font-bold shadow-brutal-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 text-lg">
              <GithubIcon className="w-5 h-5" /> GitHub
            </a>
            <a href={contactData.linkedin} target="_blank" className="bg-nb-blue border-4 border-nb-black px-6 py-3 font-bold shadow-brutal-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 text-lg">
              <LinkedInIcon className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right side - Description card */}
        <div className="lg:col-span-5">
          <div className="bg-nb-pink border-4 border-nb-black shadow-brutal-lg p-8 transform lg:rotate-2 hover:rotate-0 transition-transform">
            <p className="text-xl text-nb-black font-medium leading-relaxed">{contactData.summary}</p>

            {/* Quick highlights */}
            <div className="mt-6 pt-6 border-t-4 border-nb-black grid grid-cols-2 gap-4">
              <div className="text-center">
                <span className="text-3xl font-bold block">3+</span>
                <span className="font-bold text-sm">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold block">4.0</span>
                <span className="font-bold text-sm">GPA @ UMass</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-14 h-14 bg-nb-black text-white flex items-center justify-center text-2xl border-4 border-nb-black shadow-brutal">↓</div>
    </div>

    {/* Bottom decorative border */}
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-nb-black"></div>
  </section>
);


// Media helper — uses looping video when available, falls back to image
const MediaDisplay: React.FC<{ project: Project; className: string }> = ({ project, className }) =>
  project.videoSrc ? (
    <video autoPlay loop muted playsInline className={className}>
      <source src={project.videoSrc} type="video/mp4" />
    </video>
  ) : (
    <img src={project.imageUrl} alt={project.title} className={className} />
  );

// Bento Grid Projects Section with domain filter
const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>('all');

  const filterLabels = [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'ML / AI' },
    { key: 'data', label: 'Data Engineering' },
    { key: 'backend', label: 'Backend / SWE' },
    { key: 'robotics', label: 'Robotics' },
    { key: 'mechanical', label: 'Mechanical' },
  ];

  const filtered = activeFilter === 'all' ? projectData : projectData.filter(p => p.domain === activeFilter);

  return (
    <section className="bg-nb-yellow p-6 md:p-12 border-t-4 border-nb-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-nb-black">PROJECTS</h2>
          <div className="flex-grow h-1 bg-nb-black"></div>
          <span className="text-2xl font-bold">{String(filtered.length).padStart(2, '0')}</span>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filterLabels.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 border-4 border-nb-black font-bold text-sm shadow-brutal transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 ${
                activeFilter === f.key ? 'bg-nb-black text-white' : 'bg-white text-nb-black'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        {filtered.length === 0 ? (
          <div className="bg-white border-4 border-nb-black shadow-brutal p-12 text-center">
            <p className="text-2xl font-bold text-nb-black">No projects in this category yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top highlight row — up to 2 large cards side by side */}
            {filtered.length >= 2 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filtered.slice(0, 2).map((project, i) => (
                  <a key={i} href={project.repoUrl} target="_blank" className="group bg-white border-4 border-nb-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden">
                    <div className="h-56 md:h-72 overflow-hidden border-b-4 border-nb-black">
                      <MediaDisplay project={project} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-nb-green px-3 py-1 border-2 border-nb-black text-sm font-bold">FEATURED</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-nb-black mb-2">{project.title}</h3>
                      <p className="text-nb-black mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="bg-nb-cream px-3 py-1 border-2 border-nb-black text-sm font-bold">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <a href={filtered[0].repoUrl} target="_blank" className="group block bg-white border-4 border-nb-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden">
                <div className="h-64 overflow-hidden border-b-4 border-nb-black">
                  <MediaDisplay project={filtered[0]} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-nb-green px-3 py-1 border-2 border-nb-black text-sm font-bold">FEATURED</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-nb-black mb-2">{filtered[0].title}</h3>
                  <p className="text-nb-black mb-4">{filtered[0].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {filtered[0].tags.map(tag => (
                      <span key={tag} className="bg-nb-cream px-3 py-1 border-2 border-nb-black text-sm font-bold">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            )}

            {/* Remaining cards — 3-column grid */}
            {filtered.length > 2 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(2).map((project, i) => (
                  <a key={i} href={project.repoUrl} target="_blank" className="group bg-white border-4 border-nb-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden">
                    <div className="h-40 overflow-hidden border-b-4 border-nb-black">
                      <MediaDisplay project={project} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-nb-black mb-2">{project.title}</h3>
                      <p className="text-sm text-nb-black mb-3">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <ExternalLinkIcon className="w-4 h-4" /> View →
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

// Experience Section - Horizontal scroll cards
const ExperienceSection: React.FC = () => (
  <section className="bg-nb-cream p-6 md:p-12 border-t-4 border-nb-black">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-nb-black">EXPERIENCE</h2>
        <div className="flex-grow h-1 bg-nb-black"></div>
      </div>

      {/* Staggered cards layout */}
      <div className="grid md:grid-cols-2 gap-6">
        {experienceData.map((exp, i) => (
          <div
            key={i}
            className={`bg-white border-4 border-nb-black shadow-brutal p-6 ${i % 2 === 1 ? 'md:translate-y-8' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className={`${['bg-nb-yellow', 'bg-nb-blue', 'bg-nb-pink', 'bg-nb-green', 'bg-nb-orange', 'bg-nb-purple'][i % 6]} px-3 py-1 border-2 border-nb-black text-sm font-bold`}>
                {exp.date}
              </span>
              <span className="text-sm font-bold text-nb-black">{exp.location}</span>
            </div>
            <h3 className="text-2xl font-bold text-nb-black">{exp.title}</h3>
            <p className="text-lg font-medium text-nb-black mb-2">{exp.subtitle}{exp.isIntern && <em> Intern</em>}</p>
            <p className="text-nb-black whitespace-pre-line">{exp.summary}</p>
          </div>
        ))}
      </div>

      {/* Education highlight */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="bg-nb-purple border-4 border-nb-black shadow-brutal-lg p-8 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="flex flex-col h-full justify-between gap-4">
            <div>
              <span className="bg-white px-3 py-1 border-2 border-nb-black text-sm font-bold">EDUCATION</span>
              <h3 className="text-2xl font-bold text-nb-black mt-4">University of Massachusetts</h3>
              <p className="text-lg text-nb-black">Master's in Data Science • GPA 4.0</p>
            </div>
            <div className="text-5xl font-bold text-nb-black">2025</div>
          </div>
        </div>
        <div className="bg-nb-blue border-4 border-nb-black shadow-brutal-lg p-8 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="flex flex-col h-full justify-between gap-4">
            <div>
              <span className="bg-white px-3 py-1 border-2 border-nb-black text-sm font-bold">EDUCATION</span>
              <h3 className="text-2xl font-bold text-nb-black mt-4">Manipal Institute of Technology</h3>
              <p className="text-lg text-nb-black">B.Tech in Mechanical Engineering • GPA 3.9</p>
            </div>
            <div className="text-5xl font-bold text-nb-black">2022</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section - Scattered tags design
const SkillsSection: React.FC = () => (
  <section className="bg-nb-black p-6 md:p-12 border-t-4 border-nb-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">SKILLS</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <div key={i} className={`${cat.color} border-4 border-nb-black shadow-brutal p-6`}>
            <h3 className="text-xl font-bold text-nb-black mb-4 border-b-2 border-nb-black pb-2">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="bg-white text-nb-black font-medium px-3 py-1 border-2 border-nb-black text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Footer
const Footer: React.FC = () => (
  <footer className="bg-nb-cream border-t-4 border-nb-black p-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-bold text-nb-black">© {new Date().getFullYear()} Gautam Marathe</p>
      <div className="flex gap-4">
        <a href={contactData.github} target="_blank" className="bg-nb-black text-white px-4 py-2 font-bold border-4 border-nb-black hover:bg-white hover:text-nb-black transition-colors">
          GitHub
        </a>
        <a href={contactData.linkedin} target="_blank" className="bg-nb-blue px-4 py-2 font-bold border-4 border-nb-black hover:shadow-brutal transition-all">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-nb-cream font-sans">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default App;