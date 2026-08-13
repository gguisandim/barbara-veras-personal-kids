import PlanSelector from '@/components/PlanSelector';
import Reveal from '@/components/Reveal';
import PageBridge from '@/components/PageBridge';

export const metadata = { title: 'Planos' };

export default function PlanosPage() {
  return (
    <>
      <section className="subhero page-ambient plans-ambient">
        <img className="doodle plans-cone" src="/doodles/cone.svg" alt="" />
        <img className="doodle plans-star" src="/doodles/star.svg" alt="" />
        <img className="doodle para-flag plans-flag" data-parallax="-5" src="/doodles/para-flag.png" alt="" />
        <div className="subhero-copy wide">
          <span className="eyebrow-sticker blue">Planos</span>
          <h1>Escolha o ritmo.<br /><em>O movimento continua.</em></h1>
          <p>Aulas em domicílio com opções individuais ou em dupla.</p>
        </div>
        <div className="scoreboard" aria-hidden="true">
          <span>1×</span><b>ou</b><span>2×</span><small>por semana</small>
        </div>
      </section>

      <section className="section-wrap plans-zone">
        <Reveal className="section-heading compact">
          <span className="kicker">Escolha guiada</span>
          <h2>Menos tabela. Mais decisão.</h2>
          <p>Escolha modalidade e frequência; o site mostra apenas o conjunto de valores correspondente ao material fornecido.</p>
        </Reveal>
        <PlanSelector />
      </section>

      <section className="section-wrap plan-rules">
        <div className="rule-card red-rule">
          <span>Individual</span>
          <p>A aula acontece na sua casa, utilizando o espaço disponível.</p>
        </div>
        <div className="rule-card blue-rule">
          <span>Dupla</span>
          <p>Atendimento exclusivo a domicílio para até 2 crianças, no mesmo local e horário.</p>
        </div>
      </section>
      <PageBridge
        step="04"
        nextStep="05"
        title="Vamos começar?"
        copy="Chegue ao final do percurso e fale diretamente com a Bárbara."
        href="/contato"
        accent="blue"
      />
    </>
  );
}
