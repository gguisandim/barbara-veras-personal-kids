import Reveal from '@/components/Reveal';

export const metadata = { title: 'Contato' };

export default function ContatoPage() {
  return (
    <section className="contact-page page-ambient contact-ambient">
      <img className="doodle contact-rings" data-parallax="12" src="/doodles/rings.svg" alt="" />
      <img className="doodle para-flag contact-flag" data-parallax="-10" src="/doodles/para-flag.png" alt="" />
      <img className="doodle contact-ball" data-parallax="8" src="/doodles/ball.svg" alt="" />
      <div className="contact-copy">
        <Reveal>
          <span className="eyebrow-sticker">Vamos começar?</span>
          <h1>Mais movimento, diversão e desenvolvimento para o seu filho.</h1>
          <p>Entre em contato e agende uma aula.</p>
        </Reveal>
        <Reveal className="contact-actions" delay={0.08}>
          <a className="contact-button whatsapp" data-magnetic href="https://wa.me/5598984842030" target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <strong>(98) 98484-2030</strong>
            <b>↗</b>
          </a>
          <a className="contact-button instagram" data-magnetic href="https://www.instagram.com/barbaraverasp/" target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>@barbaraverasp</strong>
            <b>↗</b>
          </a>
        </Reveal>
      </div>
      <div className="contact-visual">
        <div className="contact-sunburst" aria-hidden="true" />
        <img src="/images/barbara-ilustracao-transparent.png" alt="Ilustração de Bárbara Veras" />
        <div className="contact-signature"><strong>Bárbara Veras</strong><span>Personal Kids</span></div>
      </div>
    </section>
  );
}
