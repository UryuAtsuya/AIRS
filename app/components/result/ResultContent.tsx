'use client';

import React from 'react';
import { AirsType } from '../../types/airs';
import {
    Sparkles,
    AlertTriangle,
    Briefcase,
    Zap,
    Quote
} from 'lucide-react';
import Link from 'next/link';

type ResultContentProps = {
    type: AirsType;
    strengths?: string[];
    weaknesses?: string[];
};

export default function ResultContent({ type, strengths, weaknesses }: ResultContentProps) {
    return (
        <div className="bg-white pb-20">
            <div className="max-w-4xl mx-auto px-6 space-y-20">

                {/* Introduction Section */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600">
                            <Quote size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">Introduction</h3>
                    </div>
                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="leading-relaxed text-slate-700">
                            {type.desc}
                        </p>
                    </div>
                </section>

                {/* Risk & Bad End Section (The "Spicy" Part) */}
                <section className="bg-red-50/50 rounded-3xl p-8 md:p-12 border border-red-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">Critical Risks</h3>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                Fatal Flaw
                            </h4>
                            <p className="text-lg font-bold text-slate-800 mb-2">
                                「{type.risk}」
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                この特性は、AIが台頭する環境下において致命的な弱点となり得ます。自己認識と意識的な対策が不可欠です。
                            </p>
                        </div>

                        <div className="pt-8 border-t border-red-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">
                                Failure Scenario (Bad End)
                            </h4>
                            <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm">
                                <p className="text-slate-600 leading-relaxed italic">
                                    {type.badEnd}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategy Section */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">Survival Strategy</h3>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none mb-10">
                        <p className="leading-relaxed text-slate-700">
                            {type.strategy}
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-3xl p-8 md:p-10">
                        <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <Briefcase size={20} />
                            Recommended Careers
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {type.careerRecommendations.map((career, idx) => (
                                <span
                                    key={idx}
                                    className="bg-white text-blue-700 font-bold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow cursor-default text-sm border border-blue-100"
                                >
                                    {career}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-10">
                    <div className="p-10 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                他のタイプの戦略も見る
                            </h3>
                            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                                全16タイプの生存戦略データベースにアクセスして、チームメンバーや競合の分析に役立てましょう。
                            </p>
                            <Link href="/types">
                                <button className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
                                    タイプ一覧へ
                                </button>
                            </Link>
                        </div>

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </section>

            </div>
        </div>
    );
}
