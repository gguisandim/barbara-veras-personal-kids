'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0, distance = 34, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup = () => {};
    let cancelled = false;

    import('gsap').then(({ gsap }) => {
      if (cancelled || !element) return;
      gsap.set(element, { autoAlpha: 0, y: distance });
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          gsap.to(element, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            delay,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          });
          observer.disconnect();
        },
        { threshold: 0.14 }
      );
      observer.observe(element);
      cleanup = () => observer.disconnect();
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [delay, distance]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
