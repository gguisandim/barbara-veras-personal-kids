import Link from 'next/link';

export default function PageBridge({
  step,
  nextStep,
  title,
  copy,
  href,
  accent = 'blue',
  final = false,
}) {
  if (final) {
    return (
      <section className="page-bridge-wrap section-wrap" data-scroll-pop aria-label="Fim do percurso">
        <div className="page-bridge page-bridge-final">
          <div className="page-bridge-meta">
            <span>05 / 05</span>
            <b>Fim do circuito</b>
          </div>
          <div className="page-bridge-copy">
            <span className="kicker">Pronto para começar?</span>
            <h2>Agora o próximo movimento acontece fora do site.</h2>
            <p>Fale diretamente com a Bárbara para consultar disponibilidade e agendar uma aula.</p>
          </div>
          <div className="page-bridge-actions">
            <a
              className="button button-red"
              data-magnetic
              href="https://wa.me/5598984842030?text=Ol%C3%A1%2C%20B%C3%A1rbara!%20Gostaria%20de%20saber%20sobre%20disponibilidade%20para%20as%20aulas%20de%20Personal%20Kids."
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp ↗
            </a>
            <Link className="text-link" href="/" scroll={true}>Voltar ao início <span>↺</span></Link>
          </div>
          <img className="page-bridge-flag" src="/doodles/para-flag.png" alt="" />
        </div>
      </section>
    );
  }

  return (
    <section className="page-bridge-wrap section-wrap" data-scroll-pop aria-label={`Próxima página: ${title}`}>
      <Link className={`page-bridge page-bridge-${accent}`} href={href} scroll={true}>
        <div className="page-bridge-meta">
          <span>{step} / 05</span>
          <b>Próxima página · {nextStep} / 05</b>
        </div>
        <div className="page-bridge-copy">
          <span className="kicker">Continue o percurso</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="page-bridge-arrow" aria-hidden="true">→</div>
        <img className="page-bridge-flag" src="/doodles/para-flag.png" alt="" />
      </Link>
    </section>
  );
}
