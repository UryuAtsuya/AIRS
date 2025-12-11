import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdUnit from '../../components/AdUnit';
import { airsTypes, groupColors, AirsType } from '../airs';
import {
    Sparkles,
    AlertTriangle,
    ShieldCheck,
    ArrowLeft,
    Share2,
    Briefcase,
    Zap,
    TrendingUp,
    AlertCircle
} from 'lucide-react';

export async function generateStaticParams() {
    return airsTypes.map((type) => ({
        code: type.code,
    }));
}

export default async function TypeDetailPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const type = airsTypes.find((t) => t.code === code.toUpperCase());

    if (!type) {
        return notFound();
    }

    const isHighRisk = type.survivalRate < 60;
    const isSafe = type.survivalRate >= 90;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-white border-b border-slate-100 overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${groupColors[type.group].split(' ')[1].replace('bg-', 'from-').replace('50', '50/50')} to-transparent opacity-50`}></div>

                <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
                    <Link href="/types" className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-blue-600 mb-8 transition-colors">
                        <ArrowLeft size={14} />
                        BACK TO LIST
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Character Image */}
                        <div className={`w-48 h-48 rounded-3xl flex items-center justify-center shadow-2xl bg-white border-4 border-white ring-1 ring-slate-100`}>
                            <Image
                                src={`/characters/${type.code}.png`}
                                alt={`${type.name} character`}
                                width={192}
                                height={192}
                                className="object-contain p-4"
                            />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-slate-900 text-white`}>
                                    {type.code}
                                </span>
                                <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${isHighRisk ? 'bg-red-50 text-red-600' : 'bg-cyan-50 text-cyan-600'}`}>
                                    {isHighRisk ? <AlertTriangle size={10} /> : <ShieldCheck size={10} />}
                                    SURVIVAL RATE: {type.survivalRate}%
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-2 tracking-tighter leading-none">
                                {type.name}
                            </h1>
                            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                                {type.aiPhrase}
                            </p>

                            <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                                {type.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full animate-slide-up">

                {/* AdUnit Top */}
                <AdUnit slotId={`detail-top-${type.code}`} className="mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Strategy Block */}
                    <div className="card-soft-cyber p-8 ring-1 ring-blue-50/50">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <TrendingUp size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            生存戦略 <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">STRATEGY</span>
                        </h2>
                        <p className="text-slate-600 leading-7 text-sm">
                            {type.strategy}
                        </p>
                    </div>

                    {/* Risk Block */}
                    <div className="card-soft-cyber p-8 ring-1 ring-red-50/50">
                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                            <AlertCircle size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 mb-1 flex items-center gap-2">
                            AI時代の落とし穴 <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">RISK</span>
                        </h2>
                        <p className="text-xs font-bold text-red-600 mb-4">{type.risk}</p>
                        <p className="text-slate-600 leading-7 text-sm">
                            {type.badEnd}
                        </p>
                    </div>
                </div>

                {/* Radar Chart Placeholder (Future Phase) */}
                <div className="bg-slate-100 rounded-3xl p-8 text-center mb-12 border border-slate-200 border-dashed">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Parameter Analysis</p>
                    <div className="flex justify-center gap-4 text-xs font-mono text-slate-500">
                        {Object.entries(type.params).map(([key, value]) => (
                            <span key={key} className="bg-white px-3 py-1 rounded shadow-sm">
                                {key}: {value}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-slate-900 text-white rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden mb-12">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">Are you {type.code}?</h2>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
                            あなたの本当の生存戦略を知りたくありませんか？<br />
                            A.I.R.S.の精密アルゴリズムが、あなたのキャリアの行く末を予測します。
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/diagnosis">
                                <button className="btn-soft-cyber-secondary bg-white text-slate-900 border-none hover:bg-blue-50">
                                    <Zap size={16} className="inline mr-2" />
                                    今すぐ診断する
                                </button>
                            </Link>
                            <button className="btn-soft-cyber border border-slate-700 hover:bg-slate-800 text-white">
                                <Share2 size={16} className="inline mr-2" />
                                結果をシェア
                            </button>
                        </div>
                    </div>
                </div>

                {/* AdUnit Bottom */}
                <AdUnit slotId={`detail-bottom-${type.code}`} className="mt-0" />

            </main>

            <Footer />
        </div>
    );
}
