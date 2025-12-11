'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  ShieldAlert,
  BrainCircuit,
  Network,
  Users,
  Lock,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center max-w-4xl mx-auto px-6 py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-8 tracking-wider uppercase">
            AI Era Career Optimization System
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-110%">
            たった10分で、あなたの
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              『AI時代の最適キャリア』
            </span>
            <br />
            がわかります
          </h1>

          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            AI時代に自分の理解と適職を知らないと、いつの間にかAIに代替されてしまう。<br />
            16Personalitiesをベースに、あなたの強みとAI時代に最適なキャリアパスを提示します。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/diagnosis" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles size={20} className="group-hover:animate-pulse" />
                  診断テストをする
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>

            <Link href="/types" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-4 bg-white text-slate-600 font-bold text-lg rounded-full hover:bg-slate-50 transition-all border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Search size={20} />
                全タイプを見る
                <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <BrainCircuit size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">独自アルゴリズム解析</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              従来の適性診断とは一線を画す、AI時代特化型のロジックであなたの潜在能力を測定します。
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
              <Network size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">生存戦略の提案</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              単なる性格診断ではなく、具体的にどのようにキャリアを形成すべきかの戦略を提示します。
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-4">
              <ShieldAlert size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">リスク回避</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              あなたのタイプが陥りやすいキャリアの罠や、AIに代替されるリスクを事前に把握できます。
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-400 text-xs py-10 border-t border-slate-200">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Terminal size={14} />
          <span>Powered by A.I.R.S. System</span>
        </div>
        © 2025 A.I.R.S. Survival Diagnostic.
      </footer>
    </div>
  );
}
