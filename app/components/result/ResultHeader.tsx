'use client';

import React from 'react';
import Image from 'next/image';
import { Persona } from '../../data/personas';
import { Share2, RefreshCw } from 'lucide-react';

type ResultHeaderProps = {
    persona: Persona;
    onRetake?: () => void;
    showRetakeButton?: boolean;
    survivalRate?: number;
};

export default function ResultHeader({ persona, onRetake, showRetakeButton = false, survivalRate }: ResultHeaderProps) {
    // Map code to a gradient style if image fails or as overlay
    // Increased transparency (lower opacity values) to make characters more visible
    const gradientOverlay = "bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent";

    // Helper to determine banner image path
    const getBannerPath = (code: string) => {
        // All banners are now available as JPGs
        return `/characters/banners/${code}.jpg`;
    };

    const handleShare = async () => {
        const shareData = {
            title: `AI時代の最適キャリア診断: ${persona.code}`,
            text: `私の診断結果は... ${persona.nameJa} (${persona.catchphrase}) でした！\n生存確率は${survivalRate}%！\n#AIRS #キャリア診断`,
            url: typeof window !== 'undefined' ? window.location.href : '',
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share canceled');
            }
        } else {
            // Fallback: Twitter Intent
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
            window.open(twitterUrl, '_blank');
        }
    };

    return (
        <div className="relative w-full overflow-hidden bg-slate-900 text-white">
            {/* 1. Background Image Layer */}
            {/* In a real scenario, this would be specific per type or a generic cool bg */}
            <div className="absolute inset-0 z-0">
                {/* Type-Specific Banner Background */}
                <Image
                    src={getBannerPath(persona.code)}
                    alt={`${persona.nameJa} Background`}
                    fill
                    className="object-cover opacity-100"
                    priority
                />
            </div>

            {/* 2. Gradient Overlay for Text Readability (Left Side Darker) */}
            <div className={`absolute inset-0 z-10 ${gradientOverlay}`}></div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10">

                {/* Left: Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold tracking-[0.2em] uppercase">
                        A.I.R.S. TYPE : {persona.code}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        <span className="block text-2xl md:text-3xl font-bold opacity-80 mb-2">AI時代の{persona.nameJa}:</span>
                        {persona.code} 進化系
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium">
                        &quot;{persona.catchphrase}&quot;
                        <br />
                        <span className="text-sm mt-2 block opacity-60 font-normal">
                            {persona.nameJa}は独創的かつ戦略的に物事を考える傾向があり... (Sample description placeholder)
                        </span>
                    </p>

                    {/* Survival Rate Badge (Integrated) */}
                    {survivalRate !== undefined && (
                        <div className="inline-flex items-center gap-4 mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-right">
                                <div className="text-[10px] uppercase tracking-widest text-slate-400">Survival Rate</div>
                                <div className="text-4xl font-black text-cyan-400 text-shadow">{survivalRate}%</div>
                            </div>
                            <div className="h-10 w-px bg-white/20"></div>
                            <div className="text-xs text-white/60 text-left max-w-[12rem]">
                                あなたのAI社会生存確率は極めて高い水準です。
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start mt-8">
                        {showRetakeButton && onRetake && (
                            <button
                                onClick={onRetake}
                                className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg"
                            >
                                <RefreshCw size={18} />
                                再診断
                            </button>
                        )}
                        <button
                            onClick={handleShare}
                            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            <Share2 size={18} />
                            結果をシェア
                        </button>
                    </div>
                </div>

                {/* Right: Character Visual (Integrated into background) */}
                {/*
                <div className="flex-1 relative w-full max-w-md md:max-w-lg aspect-square flex items-center justify-center">
                    Glowing effect behind character
                <div
                    className="absolute inset-0 rounded-full blur-[100px] opacity-40 animate-pulse"
                    style={{ backgroundColor: persona.accent.primary }}
                ></div>

                <div className="relative w-64 h-64 md:w-96 md:h-96">
                    <Image
                        src={getBannerPath(persona.code)}
                        alt={`${persona.nameJa} Background`}
                        fill
                        className="object-contain drop-shadow-2xl relative z-10"
                        priority
                    />
                    Tech holographic rings mockup (CSS)
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-[spin_10s_linear_infinite] scale-110"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-125 border-dashed"></div>
                </div>
            </div>
                */}
            </div>
        </div >
    );
}
