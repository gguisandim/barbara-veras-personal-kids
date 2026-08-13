'use client';

import { useEffect, useRef } from 'react';

export default function HeroMotion({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let context;
    let cancelled = false;
    const cleanups = [];

    import('gsap').then(({ gsap }) => {
      if (cancelled || !root) return;
      context = gsap.context(() => {
        gsap.set('[data-hero-copy]', { autoAlpha: 1 });
        gsap.from('.eyebrow-sticker', { y: -18, rotate: -6, scale: .86, autoAlpha: 0, duration: .55, ease: 'back.out(1.7)' });
        gsap.from('[data-hero-line]', {
          yPercent: 110,
          rotate: 2,
          autoAlpha: 0,
          duration: .72,
          stagger: .09,
          ease: 'power4.out',
          delay: .08,
        });
        gsap.from('[data-hero-copy] > p, .hero-actions', { y: 20, autoAlpha: 0, duration: .65, stagger: .1, ease: 'power3.out', delay: .4 });
        gsap.from('[data-hero-photo]', { scale: .9, rotate: 5, x: 30, autoAlpha: 0, duration: 1, ease: 'power4.out', delay: .16 });
        gsap.from('[data-doodle]', { scale: .35, rotate: -18, autoAlpha: 0, duration: .62, stagger: .07, ease: 'back.out(1.8)', delay: .35 });
        gsap.to('[data-float="1"]', { y: -12, rotate: 4, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('[data-float="2"]', { y: 10, rotate: -5, duration: 3.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }, root);

      if (window.matchMedia('(pointer:fine)').matches) {
        const onMove = (event) => {
          const rect = root.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - .5;
          const y = (event.clientY - rect.top) / rect.height - .5;
          root.querySelectorAll('[data-hero-depth]').forEach((element) => {
            const depth = Number(element.dataset.heroDepth || 1);
            gsap.to(element, { x: x * 18 * depth, y: y * 12 * depth, duration: .55, ease: 'power2.out', overwrite: 'auto' });
          });
        };
        const onLeave = () => {
          root.querySelectorAll('[data-hero-depth]').forEach((element) => {
            gsap.to(element, { x: 0, y: 0, duration: .7, ease: 'power3.out', overwrite: 'auto' });
          });
        };
        root.addEventListener('pointermove', onMove);
        root.addEventListener('pointerleave', onLeave);
        cleanups.push(() => {
          root.removeEventListener('pointermove', onMove);
          root.removeEventListener('pointerleave', onLeave);
        });
      }
    });

    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
      context?.revert();
    };
  }, []);

  return <section ref={ref} className={className}>{children}</section>;
}
