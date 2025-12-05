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

const categoryColors = ['bg-nb-blue', 'bg-nb-pink', 'bg-nb-green', 'bg-nb-yellow', 'bg-nb-purple', 'bg-nb-orange'];

const SkillCategory: React.FC<{ category: string; skillList: string[]; index: number }> = ({ category, skillList, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const headerColor = categoryColors[index % categoryColors.length];

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`${headerColor} border-3 border-nb-black shadow-brutal p-4`}>
        <h3 className="font-bold text-lg text-nb-black mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {Array.isArray(skillList) && skillList.map((skill) => (
            <span
              key={skill}
              className="bg-white text-nb-black font-medium px-3 py-1.5 border-2 border-nb-black shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


interface SkillsListProps {
  skills: Skills;
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="space-y-6">
      {Object.entries(skills).map(([category, skillList], index) => (
        <SkillCategory key={category} category={category} skillList={skillList as string[]} index={index} />
      ))}
    </div>
  );
};

export default SkillsList;