'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    const goToTop = () => window.scrollTo(0, 0);

    // Next.js keeps the shared layout mounted between routes. Force the new
    // document view to start at the beginning instead of reusing the scroll
    // position of the page the visitor just left.
    goToTop();
    const frame = window.requestAnimationFrame(goToTop);
    const timeout = window.setTimeout(goToTop, 40);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      html.style.scrollBehavior = previousBehavior;
    };
  }, [pathname]);

  return null;
}
