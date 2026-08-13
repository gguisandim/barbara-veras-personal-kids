'use client';

import { useMemo, useState } from 'react';

const plans = {
  individual1: {
    modality: 'Individual',
    frequency: '1x por semana',
    eyebrow: 'Planos individuais',
    description: 'A aula acontece na sua casa, utilizando o espaço disponível para criar experiências de movimento e desenvolvimento.',
    prices: [
      ['Mensal', 'R$ 240,00', ''],
      ['Trimestral', 'R$ 220,00', 'por mês'],
      ['Semestral', 'R$ 200,00', 'por mês'],
    ],
  },
  individual2: {
    modality: 'Individual',
    frequency: '2x por semana',
    eyebrow: 'Planos individuais',
    description: 'A aula acontece na sua casa, utilizando o espaço disponível para criar experiências de movimento e desenvolvimento.',
    prices: [
      ['Mensal', 'R$ 420,00', ''],
      ['Trimestral', 'R$ 400,00', 'por mês'],
      ['Semestral', 'R$ 380,00', 'por mês'],
    ],
  },
  dupla1: {
    modality: 'Dupla',
    frequency: '1x por semana',
    eyebrow: 'Planos em dupla',
    description: 'Atendimento exclusivo a domicílio para até 2 crianças, no mesmo local e horário. O segundo aluno garante 35% de economia.',
    note: 'Aulas em dupla requerem a presença de ambos os alunos no mesmo horário.',
    prices: [
      ['Mensal', 'R$ 367,50', ''],
      ['Trimestral', 'R$ 315,00', 'por mês'],
    ],
  },
  dupla2: {
    modality: 'Dupla',
    frequency: '2x por semana',
    eyebrow: 'Planos em dupla',
    description: 'Atendimento exclusivo a domicílio para até 2 crianças, no mesmo local e horário. O segundo aluno garante 35% de economia.',
    note: 'Aulas em dupla requerem a presença de ambos os alunos no mesmo horário.',
    prices: [
      ['Mensal', 'R$ 735,00', ''],
      ['Trimestral', 'R$ 630,00', 'por mês'],
    ],
  },
};

export default function PlanSelector() {
  const [modality, setModality] = useState('individual');
  const [frequency, setFrequency] = useState('1');
  const selected = `${modality}${frequency}`;
  const plan = plans[selected];

  const whatsapp = useMemo(() => {
    const text = `Olá, Bárbara! Gostaria de saber sobre disponibilidade para o plano ${plan.modality} · ${plan.frequency}.`;
    return `https://wa.me/5598984842030?text=${encodeURIComponent(text)}`;
  }, [plan]);

  return (
    <div className="plan-finder" data-scroll-pop>
      <div className="plan-finder-head">
        <div>
          <span className="kicker">Encontre seu plano</span>
          <h2>Escolha em dois passos.</h2>
        </div>
        <span className="plan-finder-badge">Sem recarregar a página</span>
      </div>

      <div className="plan-choices" aria-label="Assistente de escolha de plano">
        <fieldset>
          <legend><span>01</span> Como será a aula?</legend>
          <div className="choice-row">
            <button type="button" className={modality === 'individual' ? 'is-active' : ''} onClick={() => setModality('individual')}>Individual</button>
            <button type="button" className={modality === 'dupla' ? 'is-active' : ''} onClick={() => setModality('dupla')}>Em dupla</button>
          </div>
        </fieldset>
        <fieldset>
          <legend><span>02</span> Quantas vezes por semana?</legend>
          <div className="choice-row">
            <button type="button" className={frequency === '1' ? 'is-active' : ''} onClick={() => setFrequency('1')}>1x por semana</button>
            <button type="button" className={frequency === '2' ? 'is-active' : ''} onClick={() => setFrequency('2')}>2x por semana</button>
          </div>
        </fieldset>
      </div>

      <div className="plan-result" key={selected} aria-live="polite">
        <div className="plan-result-copy">
          <span className="kicker">{plan.eyebrow}</span>
          <div className="plan-result-title">
            <h3>{plan.modality}</h3>
            <strong>{plan.frequency}</strong>
          </div>
          <p>{plan.description}</p>
          {plan.note && <p className="plan-result-note">{plan.note}</p>}
          <a className="button button-dark" data-magnetic href={whatsapp} target="_blank" rel="noreferrer">
            Consultar disponibilidade ↗
          </a>
        </div>

        <div className={`plan-price-board ${plan.prices.length === 2 ? 'has-two' : ''}`}>
          {plan.prices.map(([name, price, suffix], index) => (
            <article className={`plan-price-card price-${index + 1}`} key={name}>
              <div className="plan-price-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <b>{name}</b>
              </div>
              <strong>{price}</strong>
              <small>{suffix || 'valor do plano'}</small>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
