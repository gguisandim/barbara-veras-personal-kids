'use client';

import { useEffect, useRef, useState } from 'react';

const stations = [
  {
    title: 'Circuitos motores',
    image: '/images/atividade-circuito.webp',
    alt: 'Bárbara acompanhando uma criança em um circuito motor dentro de casa',
    description:
      'Dentro do ambiente da própria casa, o espaço disponível vira uma sequência de movimentos e desafios, sempre de forma lúdica e adaptada à criança.',
  },
  {
    title: 'Trabalhos de concentração',
    image: '/images/atividade-concentracao.webp',
    alt: 'Bárbara realizando uma atividade de concentração com uma criança',
    description:
      'Momentos de concentração entram nas aulas junto com a brincadeira, respeitando a idade, o desenvolvimento e as necessidades de cada criança.',
  },
  {
    title: 'Atividades lúdicas',
    image: '/images/barbara-criancas.webp',
    alt: 'Bárbara com crianças durante uma atividade lúdica',
    description:
      'A criança brinca, se movimenta, aprende e desenvolve novas habilidades enquanto participa de atividades dinâmicas pensadas especialmente para ela.',
  },
  {
    title: 'Exercícios para o fortalecimento corporal',
    image: '/images/atividade-cones.webp',
    alt: 'Bárbara preparando uma atividade com cones para uma aula infantil',
    description:
      'O fortalecimento corporal faz parte do planejamento das aulas e é trabalhado de forma segura, lúdica e respeitando o ritmo individual.',
  },
  {
    title: 'Superação de desafios',
    image: '/images/treino-degrau.webp',
    alt: 'Bárbara auxiliando uma criança durante um desafio de movimento',
    description:
      'Os desafios convidam a criança a se movimentar, experimentar, superar etapas e desenvolver novas habilidades em uma experiência divertida.',
  },
  {
    title: 'Avaliação e relatórios mensais',
    image: '/images/barbara-perfil.webp',
    alt: 'Bárbara Veras, profissional de Educação Física e Personal Kids',
    description:
      'O acompanhamento inclui avaliação e relatórios mensais, mantendo o trabalho alinhado ao desenvolvimento e às necessidades de cada criança.',
  },
];

export default function ActivityCircuit() {
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  const tabsRef = useRef(null);
  const station = stations[active];

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let context;
    let cancelled = false;
    import('gsap').then(({ gsap }) => {
      if (cancelled || !panel) return;
      context = gsap.context(() => {
        gsap.fromTo(
          '[data-activity-photo]',
          { scale: 1.08, xPercent: -3, autoAlpha: 0.35 },
          { scale: 1, xPercent: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }
        );
        gsap.fromTo(
          '[data-activity-copy] > *',
          { y: 22, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.48, stagger: 0.055, ease: 'power3.out' }
        );
      }, panel);
    });

    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [active]);

  const choose = (index) => {
    setActive(index);
    const button = tabsRef.current?.querySelectorAll('button')[index];
    if (button && window.innerWidth <= 680) {
      button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const changeBy = (amount) => {
    choose((active + amount + stations.length) % stations.length);
  };

  return (
    <div className="activity-circuit-v4" data-scroll-pop>
      <div className="activity-stations-v4" ref={tabsRef} role="tablist" aria-label="Elementos das aulas">
        {stations.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="activity-panel"
            className={active === index ? 'is-active' : ''}
            onClick={() => choose(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <article
        className={`activity-feature-v4 feature-${active + 1}`}
        id="activity-panel"
        role="tabpanel"
        aria-live="polite"
        ref={panelRef}
      >
        <div className="activity-photo-v4" data-activity-photo>
          <img src={station.image} alt={station.alt} />
          <span className="activity-photo-tag">Na prática</span>
          <span className="activity-photo-index">{String(active + 1).padStart(2, '0')}</span>
        </div>

        <div className="activity-copy-v4" data-activity-copy>
          <span className="activity-kicker-v4">Estação ativa</span>
          <h3>{station.title}</h3>
          <p>{station.description}</p>
          <div className="activity-rule-v4">
            Tudo adaptado de acordo com a idade, desenvolvimento e necessidades de cada criança.
          </div>
          <div className="activity-controls-v4" aria-label="Navegar entre atividades">
            <button type="button" onClick={() => changeBy(-1)} aria-label="Atividade anterior">←</button>
            <span>{active + 1} / {stations.length}</span>
            <button type="button" onClick={() => changeBy(1)} aria-label="Próxima atividade">→</button>
          </div>
        </div>
      </article>
    </div>
  );
}
