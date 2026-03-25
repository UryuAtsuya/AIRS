import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';
import AdUnit from '../../components/AdUnit';
import { airsTypes } from '../airs';
import { getPersona } from '../../data/personas';
import ResultHeader from '../../components/result/ResultHeader';
import TraitBarsWithSession from '../../components/result/TraitBarsWithSession';
import ResultContent from '../../components/result/ResultContent';

export async function generateStaticParams() {
    return airsTypes.map((type) => ({
        code: type.code,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }): Promise<Metadata> {
    const { code } = await params;
    const type = airsTypes.find((t) => t.code === code.toUpperCase());
    const persona = getPersona(code);

    if (!type || !persona) return {};

    const title = `${persona.code} – ${persona.nameJa}「${persona.catchphrase}」| AI時代キャリア診断`;
    const description = `AI時代の生存率${persona.survivalRate}%。${persona.empathyPoint} ${persona.doomPattern}`;
    // opengraph-image.tsx により /types/[code]/opengraph-image が自動生成される
    const ogImageUrl = `https://ai-career-type.com/types/${type.code}/opengraph-image`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://ai-career-type.com/types/${type.code}`,
            images: [{ url: ogImageUrl, width: 1200, height: 630 }],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
        },
    };
}

export default async function TypeDetailPage({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const type = airsTypes.find((t) => t.code === code.toUpperCase());
    const persona = getPersona(code);

    if (!type || !persona) {
        return notFound();
    }

    // 静的スコア（sessionStorage がない場合のフォールバック）
    const getScore = (val: string) => {
        if (["Logic", "Zero", "Digital", "Merge"].includes(val)) return 20;
        if (["Vibe", "Edit", "Physical", "Anti"].includes(val)) return 80;
        return 50;
    };

    const staticScores = {
        reasoning: getScore(type.params.reasoning),
        innovation: getScore(type.params.innovation),
        field: getScore(type.params.field),
        stance: getScore(type.params.stance),
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <main className="flex-grow w-full">

                <ResultHeader
                    persona={persona}
                    survivalRate={persona.survivalRate}
                    showRetakeButton={false}
                />

                {/* AdUnit Top */}
                <div className="max-w-4xl mx-auto px-6 mt-8">
                    <AdUnit slotId={`detail-top-${type.code}`} />
                </div>

                {/* TraitBars: 診断後はsessionStorageのスコア、直アクセスは静的スコア */}
                <div className="border-b border-slate-100 bg-white">
                    <TraitBarsWithSession
                        staticScores={staticScores}
                        group={type.group}
                        typeCode={type.code}
                    />
                </div>

                <ResultContent persona={persona} />

                {/* AdUnit Bottom */}
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <AdUnit slotId={`detail-bottom-${type.code}`} />
                </div>

            </main>

            <Footer />
        </div>
    );
}
