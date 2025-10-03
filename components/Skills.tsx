import React, { useRef, useState, useEffect } from 'react';
import type { Skills } from '../types';

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting] as const;
};

const SkillCategory: React.FC<{ category: string; skillList: string[] }> = ({ category, skillList }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h3 className="font-bold text-white mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {Array.isArray(skillList) && skillList.map((skill) => (
          <span 
            key={skill} 
            className="bg-gradient-to-r from-teal-400/10 to-cyan-400/10 text-teal-300 text-sm font-medium px-3 py-1.5 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};


interface SkillsListProps {
  skills: Skills;
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="space-y-8">
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category} category={category} skillList={skillList as string[]} />
      ))}
    </div>
  );
};

export default SkillsList;