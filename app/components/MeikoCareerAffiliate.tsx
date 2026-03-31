'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function MeikoCareerAffiliate() {
    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="bg-white rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Affiliate Image Link */}
                    <div className="flex-shrink-0 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <a
                            href="https://px.a8.net/svt/ejp?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX"
                            rel="nofollow"
                            className="relative block bg-white p-2 rounded-lg border border-slate-100 shadow-sm"
                        >
                            <img
                                width="100"
                                height="60"
                                alt="メイコーキャリア"
                                src="https://www25.a8.net/svt/bgt?aid=260131679502&wid=002&eno=01&mid=s00000026573001004000&mc=1"
                                className="hover:scale-105 transition-transform duration-300 border-0"
                            />
                        </a>
                        <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX" alt="" className="absolute border-0" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow text-center md:text-left">
                        <div className="inline-block px-3 py-1 mb-3 text-xs font-bold text-blue-600 bg-blue-50 rounded-full border border-blue-100 uppercase tracking-widest">
                            Career Strategy Ad
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight">
                            AI時代のエンジニア転職なら<br className="hidden md:block" />
                            <span className="text-blue-600">「メイコーキャリア」</span>
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base font-medium mb-6">
                            AIに代替されないキャリアを築くなら、技術と変化に強いエージェントの選定が不可欠です。専門アドバイザーがあなたの「次の一手」をプロデュース。
                        </p>

                        <a
                            href="https://px.a8.net/svt/ejp?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX"
                            rel="nofollow"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            詳細・無料相談はこちら
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
