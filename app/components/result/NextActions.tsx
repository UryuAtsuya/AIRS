'use client';

import React from 'react';
import { Persona } from '../../data/personas';
import { ExternalLink } from 'lucide-react';

type NextActionsProps = {
    actions: Persona['nextActions'];
};

export default function NextActions({ actions }: NextActionsProps) {
    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header with Disclosure */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                            Recommended for You
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">
                            あなたのタイプに推奨されるキャリア戦略レポート
                        </p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium px-2 py-1 bg-white border border-slate-100 rounded">
                        {actions.disclosure}
                    </span>
                </div>

                <div className="space-y-4">
                    {actions.cards.map((card, idx) => (
                        <a
                            key={idx}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Thumbnail Area (Mock) */}
                            <div className="md:w-48 h-32 md:h-auto bg-slate-100 relative shrink-0 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    {/* Placeholder Icon */}
                                    <ExternalLink size={24} className="opacity-20" />
                                </div>
                                <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                    {card.label}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                                <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                                    {card.why}
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-slate-500 mt-auto pt-2">
                                    <span className="font-semibold text-slate-400">Career Compass</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        詳しく見る <ExternalLink size={10} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
