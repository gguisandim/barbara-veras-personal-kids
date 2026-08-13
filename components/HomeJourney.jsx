import Link from 'next/link';

const steps = [
  ['01', 'Conheça a Bárbara', 'Formação, atuação e a proposta do Personal Kids.', '/sobre'],
  ['02', 'Explore as aulas', 'Veja capacidades e atividades em uma experiência interativa.', '/aulas'],
  ['03', 'Encontre seu plano', 'Escolha modalidade e frequência em dois passos.', '/planos'],
  ['04', 'Vamos começar', 'Fale diretamente com a Bárbara.', '/contato'],
];

export default function HomeJourney() {
  return (
    <section className="home-journey section-wrap" data-journey>
      <div className="journey-heading">
        <span className="kicker">Percurso</span>
        <h2>O site também funciona como um circuito.</h2>
        <p>Siga as estações no seu ritmo. Cada página muda de ambientação, mas continua dentro do mesmo universo visual.</p>
      </div>

      <div className="journey-board">
        <svg className="journey-line" viewBox="0 0 1100 290" preserveAspectRatio="none" aria-hidden="true">
          <path className="journey-line-base" d="M50,225 C190,55 320,65 405,168 C510,292 650,260 705,130 C755,15 935,30 1050,145" />
          <path data-journey-path className="journey-line-active" d="M50,225 C190,55 320,65 405,168 C510,292 650,260 705,130 C755,15 935,30 1050,145" />
        </svg>

        <div className="journey-steps">
          {steps.map(([number, title, copy, href], index) => (
            <Link href={href} className={`journey-step step-${index + 1}`} key={href} data-journey-step>
              <span>{number}</span>
              <div><strong>{title}</strong><p>{copy}</p></div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
