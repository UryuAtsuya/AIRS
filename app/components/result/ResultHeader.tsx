'use client';

import React from 'react';
import Image from 'next/image';
import { AirsType, groupColors } from '../../types/airs';
import { Share2, RefreshCw } from 'lucide-react';

type ResultHeaderProps = {
    type: AirsType;
    onRetake?: () => void;
    showRetakeButton?: boolean;
};

export default function ResultHeader({ type, onRetake, showRetakeButton = false }: ResultHeaderProps) {
    // Determine gradient based on group
    const getGradientColors = () => {
        switch (type.group) {
            case "Analysts": return "from-purple-600 to-purple-900";
            case "Diplomats": return "from-green-600 to-green-900";
            case "Sentinels": return "from-blue-600 to-blue-900";
            case "Explorers": return "from-yellow-500 to-yellow-800";
            default: return "from-slate-600 to-slate-900";
        }
    };

    // Calculate survival rate color
    const getSurvivalColor = (rate: number) => {
        if (rate >= 90) return "text-cyan-400";
        if (rate < 60) return "text-red-400";
        return "text-white";
    };

    return (
        <div className={`relative overflow-hidden bg-gradient-to-br ${getGradientColors()} pt-20 pb-32 text-white`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>

            {/* Wave Decoration at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0 40L48 45C96 50 192 60 288 63.3C384 66.7 480 63.3 576 56.7C672 50 768 40 864 36.7C960 33.3 1056 36.7 1152 43.3C1248 50 1344 60 1392 65L1440 70V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 0 100V40Z" className="fill-slate-50" />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Survival Score Floating Badge */}
                <div className="inline-flex flex-col items-center mb-6 animate-fade-in-up">
                    <div className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase mb-2">Survival Rate</div>
                    <div className={`text-6xl md:text-8xl font-black tracking-tight ${getSurvivalColor(type.survivalRate)} drop-shadow-2xl`}>
                        {type.survivalRate}%
                    </div>
                </div>

                {/* Type Info */}
                <div className="mb-10 animate-fade-in-up delay-100">
                    <h2 className="text-xl md:text-2xl font-bold text-white/90 tracking-widest mb-2 uppercase">
                        {type.group}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-md">
                        {type.name}
                    </h1>
                    <div className="inline-block px-4 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-bold tracking-wider mb-6">
                        {type.code}-A / {type.engName}
                    </div>
                    <p className="text-lg md:text-2xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed">
                        &quot;{type.aiPhrase}&quot;
                    </p>
                </div>

                {/* Character Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-10 animate-scale-in delay-200">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-75 animate-pulse"></div>
                    <Image
                        src={`/characters/${type.code}.png`}
                        alt={type.name}
                        fill
                        className="object-contain drop-shadow-2xl relative z-10"
                        priority
                    />
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
                    {showRetakeButton && onRetake && (
                        <button
                            onClick={onRetake}
                            className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <RefreshCw size={18} />
                            再診断する
                        </button>
                    )}
                    <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                        <Share2 size={18} />
                        結果をシェア
                    </button>
                </div>
            </div>
        </div>
    );
}
