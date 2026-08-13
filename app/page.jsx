import Link from 'next/link';
import HeroMotion from '@/components/HeroMotion';
import Reveal from '@/components/Reveal';
import InstagramStrip from '@/components/InstagramStrip';
import HomeJourney from '@/components/HomeJourney';

export default function HomePage() {
  return (
    <>
      <HeroMotion className="home-hero page-ambient home-ambient">
        <img data-doodle data-float="1" data-parallax="-10" className="doodle doodle-star hero-star" data-hero-depth="1" src="/doodles/star.svg" alt="" />
        <img data-doodle data-float="2" data-parallax="8" className="doodle hero-ball" data-hero-depth="2" src="/doodles/ball.svg" alt="" />
        <img data-doodle data-parallax="14" className="doodle hero-rings" data-hero-depth="1" src="/doodles/rings.svg" alt="" />
        <img data-doodle data-parallax="-8" className="doodle hero-cone" data-hero-depth="2" src="/doodles/cone.svg" alt="" />

        <div className="hero-copy" data-hero-copy>
          <span className="eyebrow-sticker">Personal Kids</span>
          <h1 className="hero-title">
            <span data-hero-line>Movimento</span>
            <span data-hero-line>que <em>diverte.</em></span>
            <span data-hero-line>Desenvolvimento</span>
            <span data-hero-line>que <i>transforma.</i></span>
          </h1>
          <p>
            Exercício transformado em uma experiência divertida, desafiadora e pensada especialmente para cada criança.
          </p>
          <div className="hero-actions">
            <Link className="button button-red" data-magnetic href="/aulas">Conhecer as aulas</Link>
            <Link className="text-link" href="/sobre">Quem é Bárbara? <span>→</span></Link>
          </div>
        </div>

        <div className="hero-visual" data-hero-photo data-tilt>
          <div className="photo-frame photo-frame-main">
            <img src="/images/barbara-perfil.webp" alt="Bárbara Veras em ambiente de treino" />
          </div>
          <div className="hero-badge">
            <strong>Bárbara Veras</strong>
            <span>CREF 019493-G/PA</span>
          </div>
        </div>

        <a className="scroll-cue" href="#comece-aqui">role para brincar ↓</a>
      </HeroMotion>

      <section id="comece-aqui" className="home-intro section-wrap">
        <Reveal className="section-heading">
          <span className="kicker">Muito mais do que “fazer exercício”</span>
          <h2>Uma aula que parece brincadeira — e trabalha o desenvolvimento por inteiro.</h2>
        </Reveal>

        <div className="intro-grid">
          <Reveal className="intro-card intro-card-red" delay={0.05}>
            <span>01</span>
            <h3>Brinca</h3>
            <p>Atividades lúdicas e dinâmicas, adequadas à fase de cada criança.</p>
          </Reveal>
          <Reveal className="intro-card intro-card-blue" delay={0.1}>
            <span>02</span>
            <h3>Se movimenta</h3>
            <p>Capacidades físicas e motoras estimuladas com segurança e propósito.</p>
          </Reveal>
          <Reveal className="intro-card intro-card-paper" delay={0.15}>
            <span>03</span>
            <h3>Supera desafios</h3>
            <p>Cada aula é pensada para a criança, respeitando seu ritmo individual.</p>
          </Reveal>
        </div>
      </section>

      <HomeJourney />

      <InstagramStrip />
    </>
  );
}
