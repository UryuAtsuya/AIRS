import React from 'react';
import { airsTypes, AirsType } from '../types/airs';
import { getPersona } from '../data/personas';
import ResultHeader from './result/ResultHeader';
import TraitBars from './result/TraitBars';
import ResultContent from './result/ResultContent';

type DiagnosisResult = {
    type: string; // e.g. "ENTP"
    scores: { [key: string]: number };
    strengths: string[];
    weaknesses: string[];
};

type ResultViewProps = {
    result: DiagnosisResult;
    onRetake: () => void;
};

export default function ResultView({ result, onRetake }: ResultViewProps) {
    // Find static data
    const staticData: AirsType | undefined = airsTypes.find(t => t.id === result.type);
    const persona = getPersona(result.type);

    if (!staticData || !persona) {
        return <div className="p-10 text-center text-red-500 font-bold">Error: Unknown Type</div>;
    }

    // Helper to calc 0-100 percentage from score (Range: -8 to +8 for 32 questions / 4 axes = 8 questions each)
    const calcPercent = (score: number) => {
        // -8 -> 0%, +8 -> 100%
        // (score + 8) / 16 * 100
        return Math.min(100, Math.max(0, ((score + 8) / 16) * 100));
    };

    const scores = {
        reasoning: calcPercent(result.scores["R"]),
        innovation: calcPercent(result.scores["I"]),
        field: calcPercent(result.scores["F"]),
        stance: calcPercent(result.scores["S"])
    };

    return (
        <div className="w-full bg-white min-h-screen font-sans selection:bg-purple-100 selection:text-purple-900">

            {/* 1. Header Area with Hero & Survival Rate */}
            <ResultHeader
                persona={persona}
                survivalRate={persona.survivalRate ?? staticData.survivalRate}
                onRetake={onRetake}
                showRetakeButton={true}
            />

            {/* 2. Trait Bars Visualization */}
            <div className="border-b border-slate-100">
                <TraitBars
                    scores={scores}
                    group={staticData.group}
                />
            </div>

            {/* 3. Detailed Content (Desc, Strategy, Risk) */}
            <ResultContent
                persona={persona}
            />
        </div>
    );
}

