import React, { useState, useEffect, useRef } from 'react';
import type { ContactInfo, TimelineItem, Project, Skills } from './types';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import SkillsList from './components/Skills';
import Section from './components/Section';

const contactData: ContactInfo = {
  name: "Gautam Marathe",
  title: "Data Scientist & Machine Learning Engineer",
  summary: "A passionate Data Scientist and Machine Learning Engineer with a Master's in Data Science. I specialize in building end-to-end machine learning solutions, from data exploration and model development to deployment on cloud platforms like AWS. I thrive on translating complex data into actionable insights and impactful products.",
  phone: "774-503-9995",
  email: "gautammarathe11@gmail.com",
  linkedin: "https://linkedin.com/in/gautammarathe/",
  github: "https://github.com/gautammarathe"
};

const timelineData: TimelineItem[] = [
  {
    title: "LOCOMex",
    subtitle: "Data Scientist",
    date: "July 2025 - Current",
    location: "New York City, New York",
    summary: "Led ML model development to predict customer behavior, boosting accuracy and saving data gathering time."
  },
  {
    title: "University of Massachusetts",
    subtitle: "Master's, Data Science, GPA: 4.0",
    date: "Sept 2023 - May 2025",
    location: "Dartmouth, MA",
    summary: "Completed graduate-level coursework in advanced machine learning, big data analytics, and statistical modeling, culminating in a perfect GPA."
  },
  {
    title: "UMass Dartmouth",
    subtitle: "Graduate Assistant",
    date: "Oct 2024 - Dec 2024",
    location: "Dartmouth, Massachusetts",
    summary: "Automated grading and built dashboards, reducing feedback time by 25% and providing key student insights."
  },
  {
    title: "Walmart Advanced Systems and Robotics",
    subtitle: "Data Science Intern, Robotics",
    date: "June 2024 - Sept 2024",
    location: "Andover, Massachusetts",
    summary: "Built a predictive maintenance model for robotics, achieving 85% accuracy and cutting downtime by 15%."
  },
  {
    title: "Credit Suisse",
    subtitle: "Data Scientist",
    date: "Sept 2022 - Sept 2023",
    location: "Pune, Maharashtra, India",
    summary: "Engineered NLP pipelines and risk models, improving detection by 20% and automating reports."
  },
  {
    title: "Goldman Sachs",
    subtitle: "STEM Intern",
    date: "Jan 2022 - July 2022",
    location: "Bengaluru, Karnataka, India",
    summary: "Identified market trends that cut trade losses by 12% and built dashboards saving over 1000 annual hours."
  },
  {
    title: "Manipal Institute of Technology",
    subtitle: "Bachelor's, Mechanical Engineering, GPA: 3.77",
    date: "Aug 2018 - Aug 2022",
    location: "Manipal, India",
    summary: "Gained a strong foundation in engineering principles and quantitative analysis, with a focus on thermodynamics and fluid mechanics."
  },
  {
    title: "Formula Manipal",
    subtitle: "Vehicle Data Analyst",
    date: "Oct 2019 - Dec 2021",
    location: "Manipal, Karnataka, India",
    summary: "Analyzed sensor data to optimize vehicle dynamics for a formula racing team."
  }
];

const projectData: Project[] = [
  {
    title: "Intelligent ESG Reporting Compliance tool",
    description: "A RAG-based system on AWS to provide accurate, context-aware answers for ESG compliance reporting, leveraging large language models.",
    tags: ["Python", "LangChain", "AWS Lambda", "Amazon Bedrock", "RAG", "OpenSearch"],
    imageUrl: "https://images.unsplash.com/photo-1633307057722-a4740ba0c5d0?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Bond-Pricing-Model-using-ESG"
  },
  {
    title: "Robotic Arm Predictive Maintenance",
    description: "A model to forecast component failures in robotic arms, reducing downtime by 15% through proactive maintenance.",
    tags: ["Python", "Scikit-learn", "Amazon SageMaker", "Tableau", "Pandas"],
    imageUrl: "https://images.unsplash.com/photo-1560724797-bf78e981d20d?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Manufacturing-Classification-Model"
  },
  {
    title: "Customer Behavior Prediction Engine",
    description: "ML models improving prediction accuracy by 15% using Random Forest and Gradient Boosting, deployed as a scalable microservice.",
    tags: ["Python", "Gradient Boosting", "AWS Lambda", "ECR", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty"
  },
  {
    title: "NLP-Powered Policy Violation Detection",
    description: "An NLP pipeline achieving a 94% F1-score in identifying policy violations from user-generated content for risk management.",
    tags: ["Python", "NLP", "A/B Testing", "Azure Data Factory", "Apache Airflow"],
    imageUrl: "https://images.unsplash.com/photo-1719255418097-acf2f18306ce?q=80&w=800&auto=format&fit=crop",
    repoUrl: "https://github.com/16ghosty/Sentiment-Analysis"
  }
];

const skillsData: Skills = {
  "Data Science Methodologies": ["Exploratory Data Analysis (EDA)", "Hypothesis Testing", "Model Validation", "Feature Engineering"],
  "Languages": ["Python", "R", "SQL", "Java", "Go"],
  "Machine Learning": ["Supervised & Unsupervised Learning", "Scikit-learn", "TensorFlow", "PyTorch", "Predictive Modeling", "LLMs"],
  "Data Engineering & ETL": ["Data Integration", "Data Migration", "Data Modeling", "Talend", "Informatica", "Airflow"],
  "Data Analytics & Visualization": ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
  "Analytics Software": ["SAS", "SPSS"],
  "Cloud Technologies": ["AWS (S3, Lambda, ECR, SageMaker, EMR, EC2, Bedrock, Opensearch, FastAPI)", "Azure", "GCP"],
};

const navLinks = [
  { name: 'Projects', id: 'projects' },
  { name: 'Career & Education', id: 'career' },
  { name: 'Skills', id: 'skills' },
];

const Intro: React.FC = () => {
  const [style, setStyle] = useState({ opacity: 1, transform: 'scale(1)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeEnd = window.innerHeight * 0.75;

      if (scrollY < fadeEnd) {
        const opacity = Math.max(0, 1 - scrollY / fadeEnd);
        const scale = Math.max(0.9, 1 - scrollY / (fadeEnd * 2.5));
        setStyle({ opacity, transform: `scale(${scale})` });
      } else {
        setStyle({ opacity: 0, transform: 'scale(0.9)' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ ...style, pointerEvents: style.opacity === 0 ? 'none' : 'auto' }} className="h-screen sticky top-0 flex flex-col items-center justify-center text-center px-4 z-20">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300">Gautam Marathe</h1>
      <p className="text-xl sm:text-2xl font-normal text-slate-300 mt-4 transition-all duration-300">Crafting Intelligent Solutions from Complex Data.</p>
    </div>
  );
};


const App: React.FC = () => {
  const [activeId, setActiveId] = useState('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);


  return (
    <div className="bg-slate-900 text-slate-300 font-sans">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full animate-aurora">
          <div className="absolute top-0 left-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-500/30 to-slate-900 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-[50rem] w-[50rem] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-cyan-500/20 to-slate-900 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 to-slate-900 blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Intro />
        <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <Header contact={contactData} navLinks={navLinks} activeId={activeId} />
              </header>

              <main className="pt-24 lg:w-1/2 lg:py-24">
                {/* FIX: The ref callback must not return a value. Changed from a concise arrow function body to a block body to ensure a void return type. */}
                <Section title="Projects" id="projects" ref={(el) => { sectionRefs.current[0] = el; }}>
                  <Projects projects={projectData} />
                </Section>

                {/* FIX: The ref callback must not return a value. Changed from a concise arrow function body to a block body to ensure a void return type. */}
                <Section title="Career & Education" id="career" ref={(el) => { sectionRefs.current[1] = el; }}>
                  <Timeline items={timelineData} />
                </Section>

                {/* FIX: The ref callback must not return a value. Changed from a concise arrow function body to a block body to ensure a void return type. */}
                <Section title="Technical Skills" id="skills" ref={(el) => { sectionRefs.current[2] = el; }}>
                  <SkillsList skills={skillsData} />
                </Section>

                <footer className="text-center text-slate-500 my-16">
                  <p>&copy; {new Date().getFullYear()} Gautam Marathe. All Rights Reserved.</p>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;