'use client';

import React from 'react';

type TraitBarsProps = {
    scores: {
        reasoning: number;
        innovation: number;
        field: number;
        stance: number;
    };
    group: string;
};

type TraitRowProps = {
    leftLabel: string;
    rightLabel: string;
    percentage: number;
    caption: string;
};

function getDominantSide(percentage: number) {
    if (percentage < 50) {
        return {
            side: 'left' as const,
            value: Math.round(100 - percentage),
            offset: 50 - percentage,
        };
    }

    if (percentage > 50) {
        return {
            side: 'right' as const,
            value: Math.round(percentage),
            offset: percentage - 50,
        };
    }

    return {
        side: 'center' as const,
        value: 50,
        offset: 0,
    };
}

function getStrengthLabel(offset: number) {
    if (offset >= 30) return 'かなり強い';
    if (offset >= 18) return '強め';
    if (offset >= 8) return 'やや強め';
    return 'ほぼ中間';
}

function compactLabel(label: string) {
    return label.replace(/（.*?）/g, '').trim();
}

function TraitRow({ leftLabel, rightLabel, percentage, caption }: TraitRowProps) {
    const dominant = getDominantSide(percentage);
    const leftActive = dominant.side === 'left';
    const rightActive = dominant.side === 'right';
    const activeLabel =
        dominant.side === 'center' ? '中間' : compactLabel(leftActive ? leftLabel : rightLabel);
    const strengthLabel = getStrengthLabel(dominant.offset);
    const summary = dominant.side === 'center'
        ? 'バランス型'
        : `${activeLabel} 寄り`;

    return (
        <article className="min-w-0 rounded-lg border border-[var(--line)] bg-white/92 p-5 shadow-[0_12px_28px_rgba(46,39,28,0.07)]">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xl font-black text-[var(--foreground)]">
                        <span className={leftActive || dominant.side === 'center' ? '' : 'text-[var(--ink-muted)]'}>
                            {leftLabel}
                        </span>
                        <span className="text-sm font-black text-[var(--line-strong)]">/</span>
                        <span className={rightActive || dominant.side === 'center' ? '' : 'text-[var(--ink-muted)]'}>
                            {rightLabel}
                        </span>
                    </div>
                    <p className="mt-2 break-words text-sm leading-7 text-[var(--ink-soft)]">{caption}</p>
                </div>

                <div className="shrink-0 rounded-md border border-[#b9d8d5] bg-[var(--accent-soft)] px-3 py-2 text-right">
                    <div className="text-[11px] font-black text-[var(--accent-strong)]">{summary}</div>
                    <div className="mt-0.5 text-xs font-bold text-[#426a6d]">{strengthLabel}</div>
                </div>
            </div>

            <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-[var(--ink-muted)]">
                    <span>{compactLabel(leftLabel)}</span>
                    <span>{dominant.side === 'center' ? '50%' : `${dominant.value}%`}</span>
                    <span>{compactLabel(rightLabel)}</span>
                </div>

                <div
                    className="relative h-5 w-full overflow-visible"
                    aria-label={`${leftLabel} と ${rightLabel} の特性バランス: ${summary} ${strengthLabel}`}
                >
                    <div className="absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 rounded-full bg-[#edf0f2]" />
                    <div className="absolute left-1/2 top-1/2 h-5 w-px -translate-y-1/2 bg-[var(--line-strong)]" />

                    {leftActive && (
                        <div
                            className="absolute right-1/2 top-1/2 h-3 -translate-y-1/2 rounded-l-full bg-[var(--accent)]"
                            style={{ width: `${dominant.offset}%` }}
                        />
                    )}

                    {rightActive && (
                        <div
                            className="absolute left-1/2 top-1/2 h-3 -translate-y-1/2 rounded-r-full bg-[var(--accent)]"
                            style={{ width: `${dominant.offset}%` }}
                        />
                    )}

                    <div
                        className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--accent)] bg-white shadow-[0_4px_12px_rgba(23,106,111,0.16)]"
                        style={{ left: `${percentage}%` }}
                    />
                </div>
            </div>
        </article>
    );
}

export default function TraitBars({ scores, group }: TraitBarsProps) {
    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <div className="eyebrow">4つの特性バランス</div>
                    <h2 className="mt-4 text-2xl font-black text-[var(--foreground)] md:text-3xl">
                        得意な判断パターンを、軸ごとに整理
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
                        中央から伸びる色付きのバーが、より強く出ている傾向です。カード右上に要約を置き、スクロール中でも読み取りやすくしています。
                    </p>
                </div>
                <div className="rounded-md border border-[var(--line)] bg-white/82 px-3 py-2 text-xs font-bold text-[var(--ink-soft)]">
                    {group} / 青緑の側が現在の傾向
                </div>
            </div>

            <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <TraitRow
                    leftLabel="LOGIC（論理）"
                    rightLabel="VIBE（直感）"
                    percentage={scores.reasoning}
                    caption="論理で組み立てるか、感覚で捉えるかの傾向。"
                />
                <TraitRow
                    leftLabel="ZERO（創造）"
                    rightLabel="EDIT（編集）"
                    percentage={scores.innovation}
                    caption="ゼロから発想するか、既存を磨くかの傾向。"
                />
                <TraitRow
                    leftLabel="DIGITAL（Web）"
                    rightLabel="REAL（物理）"
                    percentage={scores.field}
                    caption="デジタル領域か、現場や物理領域かの適性。"
                />
                <TraitRow
                    leftLabel="MERGE（融合）"
                    rightLabel="ANTI（対抗）"
                    percentage={scores.stance}
                    caption="AIと協働するか、差別化して戦うかのスタンス。"
                />
            </div>
        </section>
    );
}
