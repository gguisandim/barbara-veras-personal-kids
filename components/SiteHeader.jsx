'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['/', 'Início'],
  ['/sobre', 'Sobre'],
  ['/aulas', 'Aulas'],
  ['/planos', 'Planos'],
  ['/contato', 'Contato'],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <Link className="brand" href="/" aria-label="Bárbara Veras - página inicial">
        <img src="/images/logo.webp" alt="" />
        <span>
          <strong>Bárbara Veras</strong>
          <small>Personal Kids</small>
        </span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Abrir menu</span>
      </button>

      <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Navegação principal">
        {links.map(([href, label]) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className={active ? 'is-active' : ''}>
              {label}
            </Link>
          );
        })}
      </nav>

      <a className="header-instagram" data-magnetic href="https://www.instagram.com/barbaraverasp/" target="_blank" rel="noreferrer">
        @barbaraverasp
      </a>
    </header>
  );
}
