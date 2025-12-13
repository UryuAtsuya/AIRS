'use client';

import React, { useState } from 'react';
import { Persona } from '../../data/personas';
import {
    ChevronDown,
    ChevronUp,
    AlertTriangle,
    CheckCircle2,
    Briefcase,
    TrendingUp
} from 'lucide-react';
import NextActions from './NextActions';

type ResultContentProps = {
    persona: Persona;
};

export default function ResultContent({ persona }: ResultContentProps) {
    const [isRiskOpen, setIsRiskOpen] = useState(false);

    return (
        <div className="bg-white pb-20">
            {/* 1. Summary Section */}
            <section className="max-w-4xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-slate-800"></span>
                    {persona.summary3.title}
                </h3>
                <div className="space-y-4">
                    {persona.summary3.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-slate-400 mt-0.5 shrink-0" />
                            <p className="text-slate-700 leading-relaxed font-medium">
                                {bullet}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Strengths Section */}
            <section className="max-w-4xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    {persona.strengths.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {persona.strengths.items.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-2">{item.label}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed text-opacity-90">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Roles Section */}
            <section className="max-w-4xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    {persona.roles.title}
                </h3>
                <div className="space-y-4">
                    {persona.roles.items.map((role, idx) => (
                        <div key={idx} className="flex items-center justify-between p-5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                            <div>
                                <h4 className="font-bold text-slate-900">{role.role}</h4>
                                <p className="text-xs text-slate-500 mt-1">{role.why}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${role.fit === 'high' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-slate-50 text-slate-600 border-slate-100'}`}>
                                {role.fit === 'high' ? 'HIGH FIT' : 'FIT'}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Strategy Section */}
            <section className="max-w-4xl mx-auto px-6 py-12 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: persona.accent.primary }}></span>
                    {persona.strategy.title}
                </h3>
                <div className="relative">
                    {/* Line */}
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

            {/* 5. Risks Section (Collapsed by default) */}
            <section className="max-w-4xl mx-auto px-6 py-12 border-b border-slate-100">
                <button
                    onClick={() => setIsRiskOpen(!isRiskOpen)}
                    className="w-full flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <AlertTriangle size={20} className="text-slate-500" />
                        <span className="font-bold text-slate-700">注意すべきリスクと対策</span>
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
                            <h5 className="text-xs font-bold text-slate-400 uppercase mb-3">Countermeasures</h5>
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

            {/* 6. Next Actions (Ad / CTA) */}
            <NextActions actions={persona.nextActions} />

        </div>
    );
}
