import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdUnit from '../../components/AdUnit';
import { airsTypes } from '../airs';
import ResultHeader from '../../components/result/ResultHeader';
import TraitBars from '../../components/result/TraitBars';
import ResultContent from '../../components/result/ResultContent';

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

    // Static default scores for visualization based on type params
    // Logic/Vibe, Zero/Edit, Digital/Physical, Merge/Anti
    // We map these boolean-ish params to percentages for the visual bars
    const getScore = (val: string) => {
        // Left side dominant
        if (["Logic", "Zero", "Digital", "Merge"].includes(val)) return 20;
        // Right side dominant
        if (["Vibe", "Edit", "Physical", "Anti"].includes(val)) return 80;
        return 50;
    };

    const scores = {
        reasoning: getScore(type.params.reasoning),
        innovation: getScore(type.params.innovation),
        field: getScore(type.params.field),
        stance: getScore(type.params.stance),
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow w-full">

                {/* Reusing the Result Components for consistent design */}

                <ResultHeader type={type} showRetakeButton={false} />

                {/* AdUnit Top */}
                <div className="max-w-4xl mx-auto px-6 mt-8">
                    <AdUnit slotId={`detail-top-${type.code}`} />
                </div>

                <div className="border-b border-slate-100 bg-white">
                    <TraitBars scores={scores} group={type.group} />
                </div>

                <ResultContent type={type} />

                {/* AdUnit Bottom */}
                <div className="max-w-4xl mx-auto px-6 mb-12">
                    <AdUnit slotId={`detail-bottom-${type.code}`} />
                </div>

            </main>

            <Footer />
        </div>
    );
}
