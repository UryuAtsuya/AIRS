import React from 'react';
import Image from 'next/image';
import { airsTypes, groupColors, AirsType } from '../types/airs';
import { TraitBar } from './TraitBar';
import {
    Share2,
    RefreshCw,
    Sparkles,
    TrendingUp,
    AlertTriangle,
    Lightbulb,
    Skull
} from 'lucide-react';

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

    if (!staticData) {
        return <div>Error: Unknown Type</div>;
    }

    // Determine group colors
    const groupColorClass = groupColors[staticData.group] || "text-gray-600 bg-gray-50";
    const groupKey = staticData.group.toLowerCase() as "analysts" | "diplomats" | "sentinels" | "explorers";

    // Get primary color for gradients
    const getGradientColors = () => {
        switch (staticData.group) {
            case "Analysts":
                return "from-purple-500 to-purple-700";
            case "Diplomats":
                return "from-green-500 to-green-700";
            case "Sentinels":
                return "from-blue-500 to-blue-700";
            case "Explorers":
                return "from-yellow-500 to-yellow-700";
            default:
                return "from-gray-500 to-gray-700";
        }
    };

    // Calculate percentages from scores (-10 to 10)
    const calcPercent = (score: number) => Math.min(100, Math.max(0, ((score + 10) / 20) * 100));

    const pLogicVibe = calcPercent(result.scores["R"]);
    const pZeroEdit = calcPercent(result.scores["I"]);
    const pDigiReal = calcPercent(result.scores["F"]);
    const pMergeAnti = calcPercent(result.scores["S"]);

    const pSurvival = staticData.survivalRate;

    return (
        <div className="w-full bg-white min-h-screen">

            {/* 1. HERO SECTION with Gradient Background - 16Personalities Style */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${getGradientColors()} pt-16 pb-32`}>
                {/* Decorative Wave at Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
                    <div className="mb-4 font-semibold tracking-wide uppercase text-white/80 text-xs">
                        YOUR RESULT
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-3">
                        {staticData.name}
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-2 font-light">
                        {staticData.code}-A型の性格
                    </h2>
                    <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                        {staticData.aiPhrase}は、{staticData.desc.substring(0, 100)}...
                    </p>

                    {/* Character Avatar - Centered in gradient */}
                    <div className="mx-auto w-72 h-72 md:w-96 md:h-96 mb-8 relative">
                        <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                            <Image
                                src={`/characters/${staticData.code}.png`}
                                alt={`${staticData.name} character`}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 justify-center">
                        <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors border border-white/30">
                            <Share2 size={20} />
                        </button>
                        <button
                            onClick={onRetake}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors font-medium border border-white/30"
                        >
                            <RefreshCw size={18} />
                            もう一度診断
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. SURVIVAL RATE - Prominent Section */}
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <TrendingUp className={groupColorClass.split(' ')[0]} size={28} />
                        <h3 className="text-2xl font-bold text-slate-800">AI時代 生存率</h3>
                    </div>
                    <div className={`text-7xl font-black mb-6 ${groupColorClass.split(' ')[0]}`}>
                        {pSurvival}%
                    </div>
                    <div className="relative h-4 bg-slate-200 rounded-full w-full max-w-md mx-auto overflow-hidden">
                        <div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getGradientColors()} transition-all duration-1000 rounded-full`}
                            style={{ width: `${pSurvival}%` }}
                        ></div>
                    </div>
                    <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
                        あなたのタイプは、AI時代において<strong className={groupColorClass.split(' ')[0]}>{pSurvival}%の確率で生き残る</strong>ことができます。
                        この数値は、あなたの特性がAIに代替されにくく、人間としての価値を発揮できる可能性を示しています。
                    </p>
                </div>
            </div>

            {/* 3. TRAIT BARS - Cleaner Design */}
            <div className="bg-slate-50 border-y border-slate-200 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">性格特性</h3>

                    <div className="space-y-6">
                        <TraitBar
                            leftLabel="Digital"
                            rightLabel="Physical"
                            percentage={pDigiReal}
                            groupColor={groupKey}
                        />

                        <TraitBar
                            leftLabel="Logic"
                            rightLabel="Vibe"
                            percentage={pLogicVibe}
                            groupColor={groupKey}
                        />

                        <TraitBar
                            leftLabel="Zero"
                            rightLabel="Edit"
                            percentage={pZeroEdit}
                            groupColor={groupKey}
                        />

                        <TraitBar
                            leftLabel="Merge"
                            rightLabel="Anti"
                            percentage={pMergeAnti}
                            groupColor={groupKey}
                        />
                    </div>

                </div>
            </div>

            {/* 4. MAIN CONTENT SECTIONS - Enhanced with Icons and Better Layout */}
            <div className="bg-white">
                <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

                    {/* Introduction - Enhanced */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${getGradientColors()} text-white`}>
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">{staticData.name}とは？</h3>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                {staticData.desc}
                            </p>
                            <div className={`p-6 rounded-xl ${groupColorClass.split(' ')[1]} border-l-4 ${groupColorClass.split(' ')[0].replace('text-', 'border-')}`}>
                                <h4 className="font-bold text-slate-900 mb-3 text-lg">このタイプの特徴</h4>
                                <p className="text-slate-700">
                                    {staticData.name}タイプの人は、AI時代において独自の強みを持っています。
                                    あなたの思考パターンや行動様式は、単純な自動化では代替できない価値を生み出します。
                                    しかし、その強みを最大限に活かすためには、戦略的なアプローチが必要です。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strengths & Weaknesses */}
                    <section>
                        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">強みと弱み</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Strengths */}
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                                <h4 className="font-bold text-green-900 mb-4 text-xl flex items-center gap-2">
                                    <TrendingUp size={24} className="text-green-600" />
                                    強み
                                </h4>
                                <ul className="space-y-3">
                                    {result.strengths.map((strength, idx) => (
                                        <li key={idx} className="text-green-800 flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✓</span>
                                            <span>{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Weaknesses */}
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
                                <h4 className="font-bold text-orange-900 mb-4 text-xl flex items-center gap-2">
                                    <AlertTriangle size={24} className="text-orange-600" />
                                    弱み
                                </h4>
                                <ul className="space-y-3">
                                    {result.weaknesses.map((weakness, idx) => (
                                        <li key={idx} className="text-orange-800 flex items-start gap-2">
                                            <span className="text-orange-600 mt-1">!</span>
                                            <span>{weakness}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Risk - Enhanced */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">最大のリスク</h3>
                        </div>
                        <div className="p-8 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                            <p className="text-xl text-red-900 font-semibold mb-4">
                                「{staticData.risk}」
                            </p>
                            <p className="text-red-800 leading-relaxed">
                                これがあなたの最大の弱点であり、AIに代替される可能性が最も高いポイントです。
                                このリスクを理解し、適切な対策を講じることで、AI時代でも価値を発揮し続けることができます。
                                自分の弱点を認識することは、成長への第一歩です。
                            </p>
                        </div>
                    </section>

                    {/* Strategy - Enhanced */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${getGradientColors()} text-white`}>
                                <Lightbulb size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">生存戦略</h3>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                {staticData.strategy}
                            </p>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                                <h4 className="font-bold text-blue-900 mb-3">具体的なアクションプラン</h4>
                                <ul className="space-y-2 text-blue-800">
                                    <li>• AIツールを積極的に学び、自分の武器として使いこなす</li>
                                    <li>• 人間にしかできない価値（創造性、共感力、判断力）を磨く</li>
                                    <li>• 継続的な学習とスキルアップデートを習慣化する</li>
                                    <li>• 自分の強みを活かせる環境・ポジションを選ぶ</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Bad End - Enhanced */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white">
                                <Skull size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900">バッドエンド・シナリオ</h3>
                        </div>
                        <div className="p-8 bg-slate-900 rounded-2xl text-slate-300">
                            <p className="text-sm text-slate-500 mb-4 font-mono">
                                ⚠️ SIMULATION LOG #9999 (FAILURE SCENARIO)
                            </p>
                            <p className="text-base leading-relaxed mb-6">
                                {staticData.badEnd}
                            </p>
                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-sm text-slate-400">
                                    このシナリオは、適切な対策を講じなかった場合の最悪のケースです。
                                    しかし、今この結果を知ったあなたには、未来を変える力があります。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="text-center pt-10">
                        <div className={`inline-block p-8 rounded-2xl bg-gradient-to-br ${getGradientColors()} text-white mb-8`}>
                            <h3 className="text-2xl font-bold mb-3">あなたの未来は、今日の選択で決まる</h3>
                            <p className="text-white/90 mb-6">
                                この診断結果を活かして、AI時代を生き抜く戦略を立てましょう。
                            </p>
                            <button
                                onClick={onRetake}
                                className="px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg"
                            >
                                もう一度診断する
                            </button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
