'use client';

import React, { useState, useEffect } from 'react';
import {
    Sparkles,
    ArrowRight,
    Terminal,
    BrainCircuit,
    CheckCircle2,
    AlertCircle,
    ThumbsUp,
    ThumbsDown,
    Briefcase
} from 'lucide-react';
// --- Imports ---
import Link from 'next/link';

import AdUnit from '../components/AdUnit';
import ResultView from '../components/ResultView';
import QuestionSelect from '../components/QuestionSelect';
import { questions as staticQuestions, typeDetails } from '../lib/mbti-data';

// --- Types ---
type Question = {
    id: string;
    text: string;
    axis: string;
    direction: string;
};

type DiagnosisResult = {
    type: string;
    scores: { [key: string]: number };
    detail: string;
    strengths: string[];
    weaknesses: string[];
};

export default function DiagnosisPage() {
    const [step, setStep] = useState<'intro' | 'quiz' | 'analyzing' | 'result'>('intro');
    // Initialize directly from static data
    const [questions] = useState<Question[]>(staticQuestions as Question[]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState<{ questionId: string, value: number }[]>([]);
    const [result, setResult] = useState<DiagnosisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    // No useEffect fetch needed anymore

    const handleStart = () => {
        setStep('quiz');
    };

    const finishDiagnosis = async (finalAnswers: typeof answers) => {
        setStep('analyzing');

        // Calculate Logic locally (Client-Side)
        try {
            // Simulate processing delay for UX
            await new Promise(resolve => setTimeout(resolve, 1500));

            const scores: { [key: string]: number } = { "R": 0, "I": 0, "F": 0, "S": 0 };

            for (const ans of finalAnswers) {
                const q = questions.find(item => item.id === ans.questionId);
                if (q) {
                    let val = ans.value;
                    if (q.direction === "left") {
                        val = -val;
                    }
                    scores[q.axis] += val;
                }
            }

            // Scoring Logic
            let mbti = "";
            // F Axis: Real(>0) -> E, Digital(else) -> I
            mbti += scores["F"] > 0 ? "E" : "I";
            // I Axis: Edit(>0) -> S, Zero(else) -> N
            mbti += scores["I"] > 0 ? "S" : "N";
            // R Axis: Logic(else) -> T, Vibe(>0) -> F (Wait, backend says: if R > 0 (Vibe) -> F, else T)
            mbti += scores["R"] > 0 ? "F" : "T";
            // S Axis: Anti(>0) -> P, Merge(else) -> J
            mbti += scores["S"] > 0 ? "P" : "J";

            const detail = typeDetails[mbti] || { strengths: [], weaknesses: [] };

            const finalResult: DiagnosisResult = {
                type: mbti,
                scores: scores,
                detail: "Diagnosis complete",
                strengths: detail.strengths,
                weaknesses: detail.weaknesses
            };

            setResult(finalResult);
            setStep('result');

        } catch (err) {
            console.error(err);
            setError("分析エラーが発生しました。");
            setStep('intro');
        }
    };

    if (questions.length === 0 && !error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center animate-pulse">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                        <BrainCircuit size={32} />
                    </div>
                    <p className="text-slate-500 font-medium tracking-wider text-sm">システム初期化中...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">


            <main className="flex-grow flex flex-col items-center justify-start p-6 max-w-4xl mx-auto w-full">

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center gap-2 w-full">
                        <AlertCircle size={20} />
                        <span className="text-sm font-bold">{error}</span>
                    </div>
                )}

                {/* STEP: INTRO */}
                {step === 'intro' && (
                    <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center animate-in zoom-in-95 duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                            <BrainCircuit size={32} />
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">AI時代のキャリア生存戦略診断</h1>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            A.I.R.S.は {questions.length} の戦略的質問を通じて、あなたのAI時代におけるキャリア適性を分析します。<br />
                            深く考えすぎず、直感的に回答してください。
                        </p>
                        <div className="mb-8 p-4 bg-blue-50 rounded-xl text-xs text-blue-800 text-left">
                            <p className="font-bold mb-1">所要時間: 3-5分</p>
                            <p>高度なパターン認識により、あなたの「生存戦略」をカテゴリ化します。</p>
                        </div>
                        <button
                            onClick={handleStart}
                            disabled={questions.length === 0}
                            className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            診断する
                            <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {/* STEP: QUIZ */}
                {step === 'quiz' && (
                    <div className="w-full max-w-4xl animate-in slide-in-from-right-8 duration-300">
                        {/* Progress indicator */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 sticky top-20 z-20">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-sm font-bold text-slate-600">
                                    進行度
                                </span>
                                <span className="text-sm font-bold text-purple-600">
                                    {Math.round((answers.length / questions.length) * 100)}%
                                </span>
                            </div>
                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-teal-500 transition-all duration-500 ease-out"
                                    style={{ width: `${(answers.length / questions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Questions List */}
                        <div className="space-y-6 mb-12">


                            {questions
                                .slice(currentQIndex, currentQIndex + 8)
                                .map((q, idx) => {
                                    const answer = answers.find(a => a.questionId === q.id)?.value ?? null;

                                    return (
                                        <div key={q.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-100 transition-all">
                                            <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-6 leading-relaxed">
                                                {q.text}
                                            </h2>

                                            <QuestionSelect
                                                value={answer}
                                                onSelect={(val) => {
                                                    const newAnswers = [...answers];
                                                    const existingIdx = newAnswers.findIndex(a => a.questionId === q.id);
                                                    if (existingIdx >= 0) {
                                                        newAnswers[existingIdx].value = val;
                                                    } else {
                                                        newAnswers.push({ questionId: q.id, value: val });
                                                    }
                                                    setAnswers(newAnswers);
                                                }}
                                                agreeLabel="そう思う"
                                                disagreeLabel="そう思わない"
                                            />
                                        </div>
                                    );
                                })}
                        </div>

                        {/* Navigation Actions */}
                        <div className="flex justify-center pb-20">
                            <button
                                onClick={() => {
                                    // Check if all displayed questions are answered
                                    const currentQuestions = questions.slice(currentQIndex, currentQIndex + 8);
                                    const allAnswered = currentQuestions.every(q => answers.some(a => a.questionId === q.id));

                                    if (!allAnswered) {
                                        alert("このページのすべての質問に回答してください。");
                                        return;
                                    }

                                    const nextIndex = currentQIndex + 8;
                                    if (nextIndex < questions.length) {
                                        setCurrentQIndex(nextIndex);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    } else {
                                        finishDiagnosis(answers);
                                    }
                                }}
                                className="group relative px-10 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="flex items-center gap-2 text-lg">
                                    {(currentQIndex + 8) >= questions.length ? '診断結果を見る' : '次へ進む'}
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP: ANALYZING */}
                {step === 'analyzing' && (
                    <div className="text-center animate-in fade-in duration-500 w-full max-w-md">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-purple-100 relative">
                            <div className="absolute inset-0 rounded-full border-4 border-purple-100 border-t-purple-600 animate-spin"></div>
                            <Briefcase className="text-purple-600" size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">キャリア適性を分析中...</h2>
                        <p className="text-slate-500 text-sm mb-8">回答パターンから生存戦略を導き出しています。</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 bg-white p-3 rounded-lg border border-slate-100 opacity-50 animate-pulse">
                                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                                論理思考パターンの解析...
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 bg-white p-3 rounded-lg border border-slate-100 opacity-50 animate-pulse delay-100">
                                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                                イノベーション適性の照合...
                            </div>
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 bg-white p-3 rounded-lg border border-slate-100 opacity-50 animate-pulse delay-200">
                                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                                最終戦略プロファイルの生成...
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP: RESULT */}
                {step === 'result' && result && (
                    <div className="w-full">
                        {/* AdUnit Top (Optional placement, maybe inside ResultView or above) */}
                        <AdUnit slotId="result-top" className="mb-8 bg-transparent" />

                        <ResultView
                            result={result}
                            onRetake={() => {
                                setStep('intro');
                                setAnswers([]);
                                setCurrentQIndex(0);
                            }}
                        />

                        {/* AdUnit Bottom */}
                        <AdUnit slotId="result-bottom" className="mt-8 bg-transparent" />
                    </div>
                )}

            </main>

            {/* Footer */}
            <footer className="text-center text-slate-400 text-xs py-10 border-t border-slate-200 mt-auto">
                <div className="flex justify-center items-center gap-2 mb-2">
                    <Terminal size={14} />
                    <span>Powered by A.I.R.S. System</span>
                </div>
                © 2025 A.I.R.S. Survival Diagnostic.
            </footer>
        </div>
    );
}
