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

const cardColors = ['bg-nb-pink', 'bg-nb-blue', 'bg-nb-green', 'bg-nb-yellow'];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const bgColor = cardColors[index % cardColors.length];

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block ${bgColor} border-4 border-nb-black shadow-brutal-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200`}
      >
        <div className="aspect-video overflow-hidden border-b-4 border-nb-black">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl text-nb-black mb-2">{project.title}</h3>
          <p className="text-nb-black mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-white text-nb-black text-sm font-bold px-3 py-1 border-2 border-nb-black">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-nb-black font-bold">
            <ExternalLinkIcon className="w-5 h-5" />
            View Project →
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
    <div className="grid grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default Projects;