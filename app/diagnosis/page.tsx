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
import Link from 'next/link';
import AdUnit from '../components/AdUnit';
import ResultView from '../components/ResultView';

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

// --- API Client ---
const API_URL = 'http://localhost:8000';

export default function DiagnosisPage() {
    const [step, setStep] = useState<'intro' | 'quiz' | 'analyzing' | 'result'>('intro');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [answers, setAnswers] = useState<{ questionId: string, value: number }[]>([]);
    const [result, setResult] = useState<DiagnosisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const res = await fetch(`${API_URL}/questions`);
                if (!res.ok) throw new Error("AIサーバーとの通信に失敗しました。");
                const data = await res.json();
                setQuestions(data);
            } catch (err) {
                console.error(err);
                setError("AIコアへの接続エラー。Backendが起動しているか確認してください。");
            }
        };
        fetchQuestions();
    }, []);

    const handleStart = () => {
        if (questions.length > 0) {
            setStep('quiz');
        }
    };

    const handleAnswer = (value: number) => {
        const currentQ = questions[currentQIndex];
        const newAnswers = [...answers, { questionId: currentQ.id, value }];
        setAnswers(newAnswers);

        if (currentQIndex < questions.length - 1) {
            setCurrentQIndex(currentQIndex + 1);
        } else {
            finishDiagnosis(newAnswers);
        }
    };

    const finishDiagnosis = async (finalAnswers: typeof answers) => {
        setStep('analyzing');
        try {
            const res = await fetch(`${API_URL}/diagnose`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: finalAnswers }),
            });
            if (!res.ok) throw new Error("診断処理に失敗しました。");
            const data = await res.json();

            setTimeout(() => {
                setResult(data);
                setStep('result');
            }, 3000);

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
            {/* Navbar */}
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                            <Sparkles size={18} fill="white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-800">A.I.R.S.</span>
                    </Link>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">

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
                        <h1 className="text-3xl font-bold text-slate-900 mb-4">キャリア診断シーケンス</h1>
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
                            スキャン開始
                            <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {/* STEP: QUIZ */}
                {step === 'quiz' && (
                    <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-in slide-in-from-right-8 duration-300">
                        <div className="flex justify-between items-center mb-8 text-xs font-bold text-slate-400 tracking-wider">
                            <span>QUESTION {currentQIndex + 1} / {questions.length}</span>
                            <span>AXIS: {questions[currentQIndex].axis}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800 mb-12 leading-snug min-h-[4rem]">
                            {questions[currentQIndex].text}
                        </h2>

                        <div className="grid gap-3">
                            <button onClick={() => handleAnswer(2)} className="p-4 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition-colors text-left border border-blue-100 hover:shadow-md">
                                そう思う (Strongly Agree)
                            </button>
                            <button onClick={() => handleAnswer(1)} className="p-4 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 transition-colors text-left border border-slate-100 hover:shadow-xs">
                                少しそう思う (Agree)
                            </button>
                            <button onClick={() => handleAnswer(-1)} className="p-4 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-slate-100 transition-colors text-left border border-slate-100 hover:shadow-xs">
                                あまりそう思わない (Disagree)
                            </button>
                            <button onClick={() => handleAnswer(-2)} className="p-4 rounded-xl bg-red-50 text-red-700 font-bold hover:bg-red-100 transition-colors text-left border border-red-100 hover:shadow-md">
                                そう思わない (Strongly Disagree)
                            </button>
                        </div>

                        <div className="mt-8">
                            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-300 ease-out"
                                    style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                                />
                            </div>
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
