'use client';

import React from 'react';
import { Persona } from '../../data/personas';
import { ExternalLink } from 'lucide-react';

type NextActionsProps = {
    actions: Persona['nextActions'];
};

export default function NextActions({ actions }: NextActionsProps) {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header with Disclosure */}
                <div className="flex justify-between items-baseline mb-8 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{actions.title}</h3>
                    <span className="text-[10px] text-slate-400 font-medium">
                        {actions.disclosure}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {actions.cards.map((card, idx) => (
                        <a
                            key={idx}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all hover:shadow-md h-full flex flex-col"
                        >
                            <div className="mb-auto">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold bg-white px-2 py-1 rounded text-slate-500 border border-slate-200 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                                        {card.label}
                                    </span>
                                    {card.isAd}
                                </div>
                                <h4 className="font-bold text-slate-800 mb-2 group-hover:text-blue-800 transition-colors">
                                    {card.why}
                                </h4>
                            </div>

                            <div className="mt-6 flex items-center text-blue-600 font-bold text-sm">
                                {card.ctaText}
                                <ExternalLink size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
