import Reveal from '@/components/Reveal';
import ActivityCircuit from '@/components/ActivityCircuit';
import PageBridge from '@/components/PageBridge';

export const metadata = { title: 'Aulas' };

const capacities = ['Agilidade', 'Força', 'Velocidade', 'Equilíbrio', 'Flexibilidade', 'Coordenação motora', 'Resistência'];

export default function AulasPage() {
  return (
    <>
      <section className="subhero page-ambient classes-ambient">
        <img className="doodle classes-rings" data-parallax="12" src="/doodles/rings.svg" alt="" />
        <img className="doodle classes-cone" data-parallax="-8" src="/doodles/cone.svg" alt="" />
        <img className="doodle para-flag classes-flag" data-parallax="6" src="/doodles/para-flag.png" alt="" />
        <div className="subhero-copy wide">
          <span className="eyebrow-sticker">Como funcionam as aulas?</span>
          <h1>Uma pista de desafios feita para <em>cada criança.</em></h1>
          <p>Dentro do ambiente da própria casa, são criadas atividades que transformam o exercício em uma grande brincadeira.</p>
        </div>
        <div className="classes-hero-photo" data-tilt>
          <img src="/images/atividade-cones.webp" alt="Bárbara preparando uma atividade com cones" />
          <span>movimento em casa</span>
        </div>
      </section>

      <section className="capacity-zone section-wrap">
        <Reveal className="section-heading compact">
          <span className="kicker">O que a criança desenvolve?</span>
          <h2>Capacidades físicas e motoras em movimento.</h2>
          <p>Tudo isso de forma lúdica, segura e respeitando o ritmo individual de cada criança.</p>
        </Reveal>
        <div className="capacity-track">
          {capacities.map((item, index) => (
            <Reveal key={item} className={`capacity-card capacity-${(index % 3) + 1}`} delay={index * 0.03}>
              <div data-tilt>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="method-zone section-wrap">
        <Reveal className="method-heading">
          <span className="kicker">Na prática</span>
          <h2>O espaço da casa vira cenário de movimento.</h2>
          <p>Escolha uma estação para explorar como os elementos das aulas se organizam.</p>
        </Reveal>
        <ActivityCircuit />
      </section>

      <PageBridge
        step="03"
        nextStep="04"
        title="Encontre o melhor ritmo de aula"
        copy="Compare as opções individuais e em dupla, com frequência de 1x ou 2x por semana."
        href="/planos"
        accent="dark"
      />
    </>
  );
}
