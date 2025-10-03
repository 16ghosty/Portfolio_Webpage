import React, { useRef, useState, useEffect } from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons';


const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting] as const;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <a 
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative rounded-lg bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 p-[1px] transition-all duration-300 hover:from-teal-400 hover:to-cyan-400 hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[7px] bg-slate-900 transition-all duration-300 group-hover:bg-slate-800/50">
          <div className="aspect-video overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-white mb-2 transition-colors group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-teal-300 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1 text-xs text-slate-500 font-medium transition-colors group-hover:text-teal-400">
              <ExternalLinkIcon className="w-4 h-4" />
              View Project
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-y-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;