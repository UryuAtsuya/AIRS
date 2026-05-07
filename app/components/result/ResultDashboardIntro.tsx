'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { Persona } from '../../data/personas';
import { AirsType } from '../../types/airs';

type DashboardScores = {
  reasoning: number;
  innovation: number;
  field: number;
  stance: number;
};

type Props = {
  persona: Persona;
  type: AirsType;
  staticScores: DashboardScores;
};

function toDisplayScores(scores: DashboardScores) {
  return {
    aiResilience: Math.round((scores.reasoning + scores.innovation) / 2),
    marketValue: Math.round((scores.reasoning + scores.field) / 2),
    growthPotential: Math.round((scores.innovation + scores.stance) / 2),
  };
}

function RadarChart({ scores }: { scores: DashboardScores }) {
  const points = [
    [60, 12 + (100 - scores.reasoning) * 0.24],
    [103 - scores.innovation * 0.35, 38],
    [88 - (100 - scores.field) * 0.24, 102 - (100 - scores.field) * 0.06],
    [32 + (100 - scores.stance) * 0.24, 102 - (100 - scores.stance) * 0.06],
    [17 + scores.field * 0.12, 38 + (100 - scores.field) * 0.05],
  ];

  return (
    <svg viewBox="0 0 120 120" className="h-full w-full">
      <polygon points="60,12 102,38 88,100 32,100 18,38" fill="none" stroke="#d9e4f6" />
      <polygon points="60,24 90,42 80,88 40,88 30,42" fill="none" stroke="#d9e4f6" />
      <polygon
        points={points.map(([x, y]) => `${x},${y}`).join(' ')}
        fill="rgba(91,141,239,0.18)"
        stroke="#5b8def"
        strokeWidth="2"
      />
      {points.map(([cx, cy], idx) => (
        <circle key={idx} cx={cx} cy={cy} r="3" fill="#5b8def" />
      ))}
    </svg>
  );
}

export default function ResultDashboardIntro({ persona, type, staticScores }: Props) {
  const sessionSnapshot = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === 'undefined') return () => {};

      const handleStorage = () => onStoreChange();
      window.addEventListener('storage', handleStorage);
      window.addEventListener('focus', handleStorage);

      return () => {
        window.removeEventListener('storage', handleStorage);
        window.removeEventListener('focus', handleStorage);
      };
    },
    () => {
      if (typeof window === 'undefined') return '';
      const storedType = window.sessionStorage.getItem('diagnosisType') ?? '';
      const storedScores = window.sessionStorage.getItem('diagnosisScores') ?? '';
      return `${storedType}::${storedScores}`;
    },
    () => ''
  );

  const scores = useMemo(() => {
    try {
      const separatorIndex = sessionSnapshot.indexOf('::');
      if (separatorIndex === -1) return staticScores;

      const storedType = sessionSnapshot.slice(0, separatorIndex);
      const storedScores = sessionSnapshot.slice(separatorIndex + 2);

      if (storedType === type.code && storedScores) {
        const raw: { R: number; I: number; F: number; S: number } = JSON.parse(storedScores);
        const toPercent = (value: number) => Math.min(100, Math.max(0, ((value + 8) / 16) * 100));
        return {
          reasoning: toPercent(raw.R),
          innovation: toPercent(raw.I),
          field: toPercent(raw.F),
          stance: toPercent(raw.S),
        };
      }
    } catch {
      return staticScores;
    }

    return staticScores;
  }, [sessionSnapshot, staticScores, type.code]);

  const display = useMemo(() => toDisplayScores(scores), [scores]);

  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-6 py-8">
      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="min-w-0 rounded-[30px] surface-card p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8fa0bd]">診断サマリー</div>
          <h2 className="mt-3 break-words text-3xl font-black tracking-tight text-slate-950">
            {persona.code} / {persona.catchphrase}
          </h2>
          <p className="mt-4 break-words text-base leading-8 text-[#6f7d97]">{persona.summary3.bullets[0]}</p>

          <div className="mt-6 grid gap-3">
            {[
              ['一言要約', persona.summary3.bullets[0]],
              ['注意点', persona.risks.fatalFlaw],
              ['次にやること', persona.strategy.steps[0]?.title ?? '強みの棚卸し'],
            ].map(([label, text]) => (
              <div key={label} className="rounded-[22px] border bg-[var(--paper-soft)] p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fa0bd]">{label}</div>
                <div className="mt-2 break-words text-sm font-semibold leading-7 text-slate-700">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 rounded-[30px] surface-card p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['AI耐性', display.aiResilience],
              ['市場価値', display.marketValue],
              ['成長余地', display.growthPotential],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border bg-white p-4 text-center">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fa0bd]">{label}</div>
                <div className="mt-3 text-3xl font-black text-slate-950">{value}</div>
                <div className="text-sm font-semibold text-[#5b8def]">/ 100</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid min-w-0 gap-5 md:grid-cols-[240px_minmax(0,1fr)]">
            <div className="rounded-[24px] border bg-[var(--paper-soft)] p-4">
              <div className="text-sm font-black text-slate-900">特性バランス</div>
              <div className="mt-4 aspect-square">
                <RadarChart scores={scores} />
              </div>
            </div>

            <div className="rounded-[24px] border bg-[var(--paper-soft)] p-5">
              <div className="text-sm font-black text-slate-900">市場価値の見立て</div>
              <div className="mt-5 h-40 rounded-[18px] border bg-white p-4">
                <svg viewBox="0 0 320 140" className="h-full w-full">
                  {[18, 46, 74, 102, 130].map((y) => (
                    <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#e2eaf7" strokeDasharray="4 5" />
                  ))}
                  <path
                    d={`M0 112 C50 108, 92 ${120 - display.marketValue * 0.6}, 160 ${108 - display.aiResilience * 0.48} S260 ${98 - display.growthPotential * 0.48}, 320 ${90 - display.growthPotential * 0.44}`}
                    fill="none"
                    stroke="#5b8def"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 120 C100 118, 220 110, 320 102"
                    fill="none"
                    stroke="#b5c7e6"
                    strokeWidth="3"
                    strokeDasharray="7 7"
                  />
                </svg>
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-[#8fa0bd]">
                <span>Now</span>
                <span>1Y</span>
                <span>3Y</span>
                <span>5Y</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
