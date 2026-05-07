import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';
import AdUnit from '../../components/AdUnit';
import { airsTypes } from '../airs';
import { getPersona } from '../../data/personas';
import ResultDashboardIntro from '../../components/result/ResultDashboardIntro';
import ResultHeader from '../../components/result/ResultHeader';
import TraitBarsWithSession from '../../components/result/TraitBarsWithSession';
import ResultContent from '../../components/result/ResultContent';
import ResultOffers from '../../components/result/ResultOffers';

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
        <div className="page-shell flex min-h-screen flex-col font-sans text-[var(--foreground)]">
            <main className="w-full flex-grow">

                <ResultHeader
                    persona={persona}
                    survivalRate={persona.survivalRate}
                    showRetakeButton={false}
                />

                <ResultDashboardIntro
                    persona={persona}
                    type={type}
                    staticScores={staticScores}
                />

                <div className="mx-auto mt-2 max-w-4xl px-6">
                    <AdUnit slotId={`detail-top-${type.code}`} />
                </div>

                {/* TraitBars: 診断後はsessionStorageのスコア、直アクセスは静的スコア */}
                <div className="border-y border-[var(--line)] bg-white/48">
                    <TraitBarsWithSession
                        staticScores={staticScores}
                        group={type.group}
                        typeCode={type.code}
                    />
                </div>

                <ResultContent persona={persona} />

                <ResultOffers persona={persona} type={type} />

                {/* AdUnit Bottom */}
                <div className="mx-auto mb-12 max-w-4xl px-6">
                    <AdUnit slotId={`detail-bottom-${type.code}`} />
                </div>

            </main>

            <Footer />
        </div>
    );
}
