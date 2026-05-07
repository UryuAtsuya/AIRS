'use client';

import React, { useState } from 'react';
import { Persona } from '../../data/personas';
import {
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';
import NextActions from './NextActions';

type ResultContentProps = {
    persona: Persona;
};

export default function ResultContent({ persona }: ResultContentProps) {
    const [isRiskOpen, setIsRiskOpen] = useState(false);

    return (
        <div className="bg-white pb-20">
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                        <h3 className="text-xl font-black text-slate-900">診断サマリー</h3>
                        <div className="mt-6 space-y-4">
                            {persona.summary3.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={20} className="text-blue-600 mt-0.5 shrink-0" />
                                    <p className="text-slate-700 leading-relaxed font-medium">
                                        {bullet}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-black text-slate-900">次にやること</h3>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {persona.strategy.steps.map((step, idx) => (
                                <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                        Step {idx + 1}
                                    </div>
                                    <h4 className="mt-2 text-sm font-black text-slate-900">{step.title}</h4>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.action}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    強み
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {persona.strengths.items.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-[24px] bg-slate-50 border border-slate-200">
                            <h4 className="font-black text-slate-900 mb-2">{item.label}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed text-opacity-90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    向いている役割
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {persona.roles.items.map((role, idx) => (
                        <div key={idx} className="flex items-center justify-between p-5 rounded-[24px] border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                            <div>
                                <h4 className="font-black text-slate-900">{role.role}</h4>
                                <p className="text-xs text-slate-500 mt-1">{role.why}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${role.fit === 'high' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                                {role.fit === 'high' ? '高相性' : '相性あり'}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    生存戦略
                </h3>
                <div className="relative">
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-100"></div>

                    <div className="space-y-8">
                        {persona.strategy.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 z-10">
                                    {idx + 1}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.action}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12 border-b border-slate-100">
                <button
                    onClick={() => setIsRiskOpen(!isRiskOpen)}
                    className="w-full flex items-center justify-between p-6 rounded-[24px] bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <AlertTriangle size={20} className="text-slate-500" />
                        <span className="font-black text-slate-700">注意点と対策</span>
                    </div>
                    {isRiskOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                </button>

                {isRiskOpen && (
                    <div className="mt-6 p-8 rounded-2xl border border-red-100 bg-red-50/30 animate-in slide-in-from-top-2">
                        <h4 className="text-red-800 font-bold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            {persona.risks.fatalFlaw}
                        </h4>
                        <p className="text-slate-700 mb-6 leading-relaxed">
                            {persona.risks.scenario}
                        </p>

                        <div className="bg-white p-6 rounded-xl border border-red-100">
                            <h5 className="text-xs font-bold text-slate-400 uppercase mb-3">対策</h5>
                            <ul className="space-y-2">
                                {persona.risks.avoid.map((item, idx) => (
                                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                        <span className="text-red-400 mt-0.5">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </section>

            <NextActions actions={persona.nextActions} />

        </div>
    );
}
