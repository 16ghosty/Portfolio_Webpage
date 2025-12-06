import React from 'react';
import type { ContactInfo, TimelineItem, Project, Skills } from './types';
import { MailIcon, LinkedInIcon, GithubIcon, ExternalLinkIcon } from './components/icons';

const contactData: ContactInfo = {
  name: "Gautam Marathe",
  title: "Data Scientist & Machine Learning Engineer",
  summary: "Building end-to-end ML solutions from data exploration to cloud deployment. Translating complex data into actionable insights.",
  phone: "774-503-9995",
  email: "gautammarathe11@gmail.com",
  linkedin: "https://linkedin.com/in/gautammarathe/",
  github: "https://github.com/16ghosty"
};

const experienceData: TimelineItem[] = [
  { title: "LOCOMex", subtitle: "Data Scientist", date: "2025 - Current", location: "NYC", summary: "ML model development for customer behavior prediction" },
  { title: "Walmart Robotics", subtitle: "Data Science Intern", date: "2024", location: "MA", summary: "Predictive maintenance achieving 85% accuracy" },
  { title: "Credit Suisse", subtitle: "Data Scientist", date: "2022 - 2023", location: "India", summary: "NLP pipelines and risk models" },
  { title: "Goldman Sachs", subtitle: "STEM Intern", date: "2022", location: "India", summary: "Market trend analysis dashboards" },
];

const projectData: Project[] = [
  {
    title: "ESG Compliance Tool",
    description: "RAG-based system on AWS for ESG compliance reporting using LLMs.",
    tags: ["Python", "LangChain", "AWS", "RAG"],
    imageUrl: "https://images.unsplash.com/photo-1633307057722-a4740ba0c5d0?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Bond-Pricing-Model-using-ESG"
  },
  {
    title: "Predictive Maintenance",
    description: "ML model forecasting robotic arm failures, reducing downtime 15%.",
    tags: ["Python", "SageMaker", "Tableau"],
    imageUrl: "https://images.unsplash.com/photo-1560724797-bf78e981d20d?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Manufacturing-Classification-Model"
  },
  {
    title: "Customer Prediction",
    description: "Gradient Boosting models deployed as scalable microservices.",
    tags: ["FastAPI", "AWS Lambda", "ECR"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty"
  },
  {
    title: "NLP Policy Detection",
    description: "94% F1-score pipeline for policy violation detection.",
    tags: ["NLP", "Airflow", "Azure"],
    imageUrl: "https://images.unsplash.com/photo-1719255418097-acf2f18306ce?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Sentiment-Analysis"
  }
];

const skillCategories = [
  { name: "ML & AI", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "NLP"], color: "bg-nb-yellow" },
  { name: "Languages", skills: ["Python", "R", "SQL", "Go", "Java"], color: "bg-nb-blue" },
  { name: "Cloud", skills: ["AWS", "Azure", "GCP", "SageMaker", "Lambda"], color: "bg-nb-pink" },
  { name: "Data", skills: ["Tableau", "Power BI", "Airflow", "Pandas"], color: "bg-nb-green" },
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
            <span className="font-bold tracking-wider">DATA SCIENTIST & ML ENGINEER</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-nb-black leading-none tracking-tighter">
            GAUTAM<br />
            <span className="text-stroke">MARATHE</span>
          </h1>
          <style>{`.text-stroke { -webkit-text-stroke: 4px black; -webkit-text-fill-color: transparent; }`}</style>

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


// Bento Grid Projects Section
const ProjectsSection: React.FC = () => (
  <section className="bg-nb-yellow p-6 md:p-12 border-t-4 border-nb-black">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-nb-black">PROJECTS</h2>
        <div className="flex-grow h-1 bg-nb-black"></div>
        <span className="text-2xl font-bold">04</span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured large card */}
        <a href={projectData[0].repoUrl} target="_blank" className="group md:col-span-2 lg:row-span-2 bg-white border-4 border-nb-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden">
          <div className="h-64 lg:h-80 overflow-hidden border-b-4 border-nb-black">
            <img src={projectData[0].imageUrl} alt={projectData[0].title} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-nb-green px-3 py-1 border-2 border-nb-black text-sm font-bold">FEATURED</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-nb-black mb-2">{projectData[0].title}</h3>
            <p className="text-nb-black mb-4">{projectData[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {projectData[0].tags.map(tag => (
                <span key={tag} className="bg-nb-cream px-3 py-1 border-2 border-nb-black text-sm font-bold">{tag}</span>
              ))}
            </div>
          </div>
        </a>

        {/* Smaller cards */}
        {projectData.slice(1).map((project, i) => (
          <a key={i} href={project.repoUrl} target="_blank" className={`group bg-white border-4 border-nb-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all overflow-hidden ${i === 1 ? 'lg:col-span-1' : ''}`}>
            <div className="h-40 overflow-hidden border-b-4 border-nb-black">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
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
    </div>
  </section>
);

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
              <span className={`${['bg-nb-yellow', 'bg-nb-blue', 'bg-nb-pink', 'bg-nb-green'][i]} px-3 py-1 border-2 border-nb-black text-sm font-bold`}>
                {exp.date}
              </span>
              <span className="text-sm font-bold text-nb-black">{exp.location}</span>
            </div>
            <h3 className="text-2xl font-bold text-nb-black">{exp.title}</h3>
            <p className="text-lg font-medium text-nb-black mb-2">{exp.subtitle}</p>
            <p className="text-nb-black">{exp.summary}</p>
          </div>
        ))}
      </div>

      {/* Education highlight */}
      <div className="mt-12 bg-nb-purple border-4 border-nb-black shadow-brutal-lg p-8 transform -rotate-1 hover:rotate-0 transition-transform">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="bg-white px-3 py-1 border-2 border-nb-black text-sm font-bold">EDUCATION</span>
            <h3 className="text-3xl font-bold text-nb-black mt-4">University of Massachusetts</h3>
            <p className="text-xl text-nb-black">Master's in Data Science • GPA 4.0</p>
          </div>
          <div className="text-6xl font-bold text-nb-black">2025</div>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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