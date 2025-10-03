import React, { useRef, useState, useEffect } from 'react';
import type { TimelineItem as TimelineItemProps } from '../types';

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


const TimelineItem: React.FC<{ item: TimelineItemProps, isLast: boolean }> = ({ item, isLast }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`group relative flex gap-6 sm:gap-8 transition-all duration-700 ease-in-out p-4 rounded-md -mx-4 hover:bg-slate-800/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      {/* Date */}
      <div className="hidden sm:flex flex-col items-end w-28 text-sm font-medium text-slate-500 flex-shrink-0 pt-1">
        {item.date}
      </div>

      {/* Line and Dot */}
      <div className="absolute left-8 sm:left-[128px] top-2 bottom-0 w-px bg-slate-700">
        {!isLast && <div className="h-full w-full bg-slate-700"></div>}
      </div>
      <div className="absolute left-[26.5px] sm:left-[121px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400"></div>


      {/* Content */}
      <div className="flex-grow pl-12 sm:pl-0">
         <div className="sm:hidden text-sm font-medium uppercase text-slate-500 tracking-wider mb-2">{item.date}</div>
        <h3 className="font-bold text-lg text-white group-hover:text-teal-400 transition-colors">{item.title} &middot; <span className="font-semibold text-md text-slate-300">{item.subtitle}</span></h3>
        <p className="text-xs text-slate-400 mt-1 mb-3">{item.location}</p>
        <p className="text-slate-400 text-sm leading-relaxed">
          {item.summary}
        </p>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;