import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Bárbara Veras</strong>
        <span>Personal Kids · CREF 019493-G/PA</span>
      </div>
      <div className="footer-links">
        <Link href="/aulas">Aulas</Link>
        <Link href="/planos">Planos</Link>
        <a href="https://www.instagram.com/barbaraverasp/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://wa.me/5598984842030" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}
