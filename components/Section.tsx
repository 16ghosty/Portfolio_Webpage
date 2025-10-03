import React, { useRef, useState, useEffect, forwardRef } from 'react';

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


interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ title, id, children }, ref) => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id={id}
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={title}
    >
      <div 
        ref={headerRef}
        className={`sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 lg:backdrop-blur-none transition-all duration-700 ease-in-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:text-slate-500">{title}</h2>
      </div>
      {children}
    </section>
  );
});

export default Section;