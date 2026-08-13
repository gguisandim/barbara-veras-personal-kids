import Reveal from '@/components/Reveal';

export const metadata = { title: 'Sobre' };

export default function SobrePage() {
  return (
    <>
      <section className="subhero page-ambient about-ambient">
        <div className="notebook-lines" aria-hidden="true" />
        <img className="doodle para-flag about-flag" src="/doodles/para-flag.png" alt="" />
        <img className="doodle about-star" src="/doodles/star.svg" alt="" />
        <div className="subhero-copy">
          <span className="eyebrow-sticker blue">Quem sou eu?</span>
          <h1>Sou <em>Bárbara Veras</em>.</h1>
          <p>Formada em Educação Física pela Universidade do Estado do Pará (UEPA) e atuo desde 2023 com o desenvolvimento infantil.</p>
        </div>
        <div className="about-photo-stack">
          <div className="tape tape-one" />
          <div className="photo-frame about-photo">
            <img src="/images/barbara-perfil.webp" alt="Bárbara Veras" />
          </div>
          <div className="paper-note">CREF<br /><strong>019493-G/PA</strong></div>
        </div>
      </section>

      <section className="section-wrap about-story">
        <Reveal className="story-copy">
          <span className="kicker">Personal Kids</span>
          <h2>Exercício com intenção, mas com linguagem de brincadeira.</h2>
          <p>Como Personal Kids, meu objetivo é transformar o exercício em uma experiência divertida, desafiadora e pensada especialmente para cada criança.</p>
        </Reveal>
        <Reveal className="story-quote" delay={0.1}>
          <span>“</span>
          <p>Cada aula é pensada para ela.</p>
          <b>Movimento + desenvolvimento</b>
        </Reveal>
      </section>

      <section className="section-wrap mini-profile">
        <div className="mini-profile-card">
          <span>Perfil oficial</span>
          <h2>@barbaraverasp</h2>
          <p>O Instagram oficial apresenta o trabalho de Personal Kids e treinamento funcional.</p>
          <a className="button button-blue" href="https://www.instagram.com/barbaraverasp/" target="_blank" rel="noreferrer">Abrir Instagram ↗</a>
        </div>
        <div className="mini-profile-image">
          <img src="/images/atividade-cones.webp" alt="Atividade de treino com cones" />
        </div>
      </section>

    </>
  );
}
