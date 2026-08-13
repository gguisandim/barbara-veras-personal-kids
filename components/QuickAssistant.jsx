'use client';

import { useState } from 'react';
import Link from 'next/link';

const questions = [
  {
    q: 'Onde acontecem as aulas?',
    a: 'As aulas acontecem na casa da criança, utilizando o espaço disponível para criar experiências de movimento e desenvolvimento.',
  },
  {
    q: 'O que a criança desenvolve?',
    a: 'As atividades estimulam agilidade, força, velocidade, equilíbrio, flexibilidade, coordenação motora e resistência.',
  },
  {
    q: 'Tem aula em dupla?',
    a: 'Sim. Há planos em dupla para até 2 crianças, no mesmo local e horário. As duas precisam estar presentes no mesmo horário.',
  },
  {
    q: 'Como funciona o acompanhamento?',
    a: 'O material informa avaliação e relatórios mensais, além da adaptação das atividades à idade, desenvolvimento e necessidades da criança.',
  },
];

export default function QuickAssistant() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div className={`quick-assistant ${open ? 'is-open' : ''}`}>
      {open && (
        <div className="assistant-panel" role="dialog" aria-label="Dúvidas rápidas sobre as aulas">
          <div className="assistant-head">
            <div>
              <span>Personal Kids</span>
              <strong>Dúvidas rápidas</strong>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar dúvidas rápidas">×</button>
          </div>
          <p className="assistant-intro">Escolha uma pergunta. As respostas usam apenas as informações apresentadas no material da Bárbara.</p>
          <div className="assistant-questions">
            {questions.map((item, index) => (
              <button
                type="button"
                key={item.q}
                className={active === index ? 'is-active' : ''}
                onClick={() => setActive(active === index ? null : index)}
              >
                <span>{item.q}</span><b>{active === index ? '−' : '+'}</b>
                {active === index && <p>{item.a}</p>}
              </button>
            ))}
          </div>
          <div className="assistant-actions">
            <Link href="/planos" onClick={() => setOpen(false)}>Ver planos</Link>
            <a href="https://wa.me/5598984842030?text=Ol%C3%A1%2C%20B%C3%A1rbara!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20aulas." target="_blank" rel="noreferrer">Perguntar no WhatsApp ↗</a>
          </div>
        </div>
      )}
      <button className="assistant-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>?</span><strong>Dúvidas</strong>
      </button>
    </div>
  );
}
