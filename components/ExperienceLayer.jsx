'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ExperienceLayer() {
  const progressRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    let context;
    const cleanups = [];

    const updateProgress = () => {
      const progress = progressRef.current;
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    Promise.all([import('gsap'), import('gsap/dist/ScrollTrigger')]).then(([gsapModule, scrollModule]) => {
      if (cancelled) return;
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger = scrollModule.ScrollTrigger || scrollModule.default;
      if (!gsap || !ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        gsap.utils.toArray('[data-parallax]').forEach((element) => {
          const amount = Number(element.dataset.parallax || 10);
          gsap.to(element, {
            yPercent: amount,
            ease: 'none',
            scrollTrigger: {
              trigger: element.closest('section') || element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        });

        gsap.utils.toArray('[data-scroll-pop]').forEach((element) => {
          gsap.fromTo(
            element,
            { y: 42, opacity: 0, rotate: -1.1 },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              duration: .8,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 88%', once: true },
            }
          );
        });

        const journey = document.querySelector('[data-journey]');
        const journeyPath = document.querySelector('[data-journey-path]');
        if (journey && journeyPath) {
          const length = journeyPath.getTotalLength();
          gsap.set(journeyPath, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(journeyPath, {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: { trigger: journey, start: 'top 72%', end: 'bottom 55%', scrub: .7 },
          });
          gsap.from('[data-journey-step]', {
            y: 34,
            scale: .94,
            autoAlpha: 0,
            stagger: .12,
            duration: .65,
            ease: 'back.out(1.35)',
            scrollTrigger: { trigger: journey, start: 'top 70%', once: true },
          });
        }
      });

      if (window.matchMedia('(pointer:fine)').matches) {
        document.querySelectorAll('[data-tilt]').forEach((element) => {
          const onMove = (event) => {
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;
            gsap.to(element, { rotateY: x * 4, rotateX: -y * 4, y: -3, transformPerspective: 900, transformOrigin: 'center', duration: .28, ease: 'power2.out' });
          };
          const onLeave = () => gsap.to(element, { rotateY: 0, rotateX: 0, y: 0, duration: .42, ease: 'power3.out' });
          element.addEventListener('pointermove', onMove);
          element.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            element.removeEventListener('pointermove', onMove);
            element.removeEventListener('pointerleave', onLeave);
          });
        });

        document.querySelectorAll('[data-magnetic]').forEach((element) => {
          const onMove = (event) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            gsap.to(element, { x: x * .1, y: y * .1, duration: .2, ease: 'power2.out' });
          };
          const onLeave = () => gsap.to(element, { x: 0, y: 0, duration: .35, ease: 'elastic.out(1, .45)' });
          element.addEventListener('pointermove', onMove);
          element.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            element.removeEventListener('pointermove', onMove);
            element.removeEventListener('pointerleave', onLeave);
          });
        });
      }

      ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      cleanups.forEach((cleanup) => cleanup());
      context?.revert();
    };
  }, [pathname]);

  return <div className="scroll-progress" ref={progressRef} aria-hidden="true" />;
}
