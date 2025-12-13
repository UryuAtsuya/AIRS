'use client';

import React from 'react';

type TraitBarsProps = {
    scores: {
        reasoning: number; // Logic vs Vibe (0-100)
        innovation: number; // Zero vs Edit (0-100)
        field: number;      // Digital vs Physical (0-100)
        stance: number;     // Merge vs Anti (0-100)
    };
    group: string;
};

// Map group to color theme
const getGroupColor = (group: string) => {
    switch (group) {
        case "Analysts": return "bg-purple-600";
        case "Diplomats": return "bg-green-600";
        case "Sentinels": return "bg-blue-600";
        case "Explorers": return "bg-yellow-500";
        default: return "bg-slate-600";
    }
};

const getSecondaryColor = (group: string) => {
    switch (group) {
        case "Analysts": return "bg-purple-400";
        case "Diplomats": return "bg-green-400";
        case "Sentinels": return "bg-blue-400";
        case "Explorers": return "bg-yellow-400";
        default: return "bg-slate-400";
    }
};

const TraitRow = ({
    leftLabel,
    rightLabel,
    percentage,
    group
}: {
    leftLabel: string,
    rightLabel: string,
    percentage: number,
    group: string
}) => {
    // 16Personalities Logic:
    // If percentage < 50, dominance is LEFT. Score = (50 - percentage) * 2
    // If percentage > 50, dominance is RIGHT. Score = (percentage - 50) * 2
    // If percentage == 50, neutral.

    const isLeft = percentage < 50;
    const isRight = percentage > 50;

    // Calculate width for the bar (0-100% of the half-width)
    let barWidth = 0;
    let valueDisplay = 50; // default display value

    if (isLeft) {
        barWidth = (50 - percentage) * 2;
        valueDisplay = 100 - percentage; // e.g. 10% -> 90% Left
    } else if (isRight) {
        barWidth = (percentage - 50) * 2;
        valueDisplay = percentage;
    } else {
        barWidth = 0;
        valueDisplay = 50;
    }

    // Colors
    const leftColor = isLeft ? getGroupColor(group) : "bg-slate-200";
    const rightColor = isRight ? getGroupColor(group) : "bg-slate-200";
    const textLeftColor = isLeft ? "text-slate-800 font-bold" : "text-slate-400";
    const textRightColor = isRight ? "text-slate-800 font-bold" : "text-slate-400";

    return (
        <div className="mb-8">
            <div className="flex justify-between text-sm md:text-base font-bold mb-2 px-1">
                <span className={textLeftColor}>{leftLabel}</span>
                <span className={`text-slate-300 text-xs tracking-widest uppercase`}>{Math.round(valueDisplay)}%</span>
                <span className={textRightColor}>{rightLabel}</span>
            </div>

            <div className="relative h-3 md:h-4 w-full flex items-center justify-center">
                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-300 rounded-full z-10"></div>

                {/* Background tracks */}
                <div className="w-1/2 h-full bg-slate-100 rounded-l-full mr-[1px]"></div>
                <div className="w-1/2 h-full bg-slate-100 rounded-r-full ml-[1px]"></div>

                {/* Active Bars */}
                {/* Left Bar (grows from right to left) */}
                <div className="absolute left-0 w-1/2 h-full flex justify-end pr-[1px]">
                    <div
                        className={`h-full rounded-l-full transition-all duration-1000 ease-out ${leftColor} opacity-90`}
                        style={{ width: isLeft ? `${barWidth}%` : '0%' }}
                    ></div>
                </div>

                {/* Right Bar (grows from left to right) */}
                <div className="absolute right-0 w-1/2 h-full flex justify-start pl-[1px]">
                    <div
                        className={`h-full rounded-r-full transition-all duration-1000 ease-out ${rightColor} opacity-90`}
                        style={{ width: isRight ? `${barWidth}%` : '0%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default function TraitBars({ scores, group }: TraitBarsProps) {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h3 className="text-2xl font-black text-slate-800 text-center mb-10 tracking-tight">
                Personality Traits
            </h3>

            <TraitRow
                leftLabel="LOGIC (論理)"
                rightLabel="VIBE (直感)"
                percentage={scores.reasoning}
                group={group}
            />
            <TraitRow
                leftLabel="ZERO (創造)"
                rightLabel="EDIT (編集)"
                percentage={scores.innovation}
                group={group}
            />
            <TraitRow
                leftLabel="DIGITAL (Web)"
                rightLabel="REAL (物理)"
                percentage={scores.field}
                group={group}
            />
            <TraitRow
                leftLabel="MERGE (融合)"
                rightLabel="ANTI (対抗)"
                percentage={scores.stance}
                group={group}
            />
        </div>
    );
}
