const items = [
  ['/images/atividade-circuito.webp', 'Circuitos motores'],
  ['/images/atividade-concentracao.webp', 'Concentração'],
  ['/images/barbara-criancas.webp', 'Atividades lúdicas'],
];

export default function InstagramStrip() {
  return (
    <section className="instagram-strip section-wrap">
      <div className="section-heading compact">
        <span className="kicker">No Instagram</span>
        <h2>Mais movimento no @barbaraverasp</h2>
        <p>O perfil oficial também apresenta o trabalho de Personal Kids e treinamento funcional.</p>
      </div>
      <div className="social-grid">
        {items.map(([src, label]) => (
          <a href="https://www.instagram.com/barbaraverasp/" target="_blank" rel="noreferrer" className="social-card" data-tilt key={src}>
            <img src={src} alt="" />
            <span>{label}</span>
            <b>↗</b>
          </a>
        ))}
      </div>
    </section>
  );
}
