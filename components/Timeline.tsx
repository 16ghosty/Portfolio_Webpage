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

const markerColors = ['bg-nb-yellow', 'bg-nb-pink', 'bg-nb-blue', 'bg-nb-green'];

const TimelineItem: React.FC<{ item: TimelineItemProps, isLast: boolean, index: number }> = ({ item, isLast, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const markerColor = markerColors[index % markerColors.length];

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Timeline line and marker */}
      <div className="flex flex-col items-center">
        <div className={`w-5 h-5 ${markerColor} border-3 border-nb-black flex-shrink-0`}></div>
        {!isLast && <div className="w-1 flex-grow bg-nb-black"></div>}
      </div>

      {/* Content */}
      <div className="pb-8 flex-grow">
        <div className="bg-white border-3 border-nb-black shadow-brutal p-4 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <div className="bg-nb-yellow inline-block px-2 py-1 border-2 border-nb-black text-sm font-bold mb-2">
            {item.date}
          </div>
          <h3 className="font-bold text-lg text-nb-black">{item.title}</h3>
          <p className="font-bold text-nb-black">{item.subtitle}</p>
          <p className="text-sm text-nb-black mt-1">{item.location}</p>
          <p className="text-nb-black mt-3">{item.summary}</p>
        </div>
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
        <TimelineItem key={index} item={item} isLast={index === items.length - 1} index={index} />
      ))}
    </div>
  );
};

export default Timeline;