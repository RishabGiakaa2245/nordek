import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    const elements = containerRef.current?.querySelectorAll(
      '.fade-up, .fade-in, .slide-in-left, .slide-in-right'
    );

    elements?.forEach(el => observer.observe(el));

    return () => elements?.forEach(el => observer.unobserve(el));
  }, [options.threshold, options.rootMargin]);

  return containerRef;
};
