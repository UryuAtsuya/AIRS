'use client';

import React from 'react';

type QuestionSelectProps = {
    value: number | null;        // -3 to 3, null if not selected
    onSelect: (value: number) => void;
    disabled?: boolean;
    agreeLabel?: string;
    disagreeLabel?: string;
};

export default function QuestionSelect({
    value,
    onSelect,
    disabled = false,
    agreeLabel = "そう思う",
    disagreeLabel = "そう思わない"
}: QuestionSelectProps) {
    const options = [-3, -2, -1, 0, 1, 2, 3];

    // Size mapping: center is smallest, edges are largest
    const getSizeClass = (val: number) => {
        const absVal = Math.abs(val);
        switch (absVal) {
            case 0: return 'w-8 h-8';
            case 1: return 'w-10 h-10';
            case 2: return 'w-12 h-12';
            case 3: return 'w-14 h-14';
            default: return 'w-8 h-8';
        }
    };

    // Color mapping
    const getColorClass = (val: number) => {
        if (val === 0) return 'bg-[#b9ab96] hover:bg-[#a89880]';
        if (val > 0) {
            switch (val) {
                case 1: return 'bg-[#b8d8d5] hover:bg-[#a0cbc7]';
                case 2: return 'bg-[#5d9da0] hover:bg-[#458b8f]';
                case 3: return 'bg-[var(--accent)] hover:bg-[var(--accent-strong)]';
                default: return 'bg-[#5d9da0]';
            }
        } else {
            switch (val) {
                case -1: return 'bg-[#efd9c8] hover:bg-[#e6c9b3]';
                case -2: return 'bg-[#cc8f70] hover:bg-[#ba7c5d]';
                case -3: return 'bg-[var(--warm)] hover:bg-[#8e4f34]';
                default: return 'bg-[#cc8f70]';
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="mb-6 flex items-center justify-between px-1 sm:px-4">
                <span className="text-sm font-semibold text-[var(--warm)]">{disagreeLabel}</span>
                <span className="text-sm font-semibold text-[var(--accent)]">{agreeLabel}</span>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-3">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => !disabled && onSelect(opt)}
                        disabled={disabled}
                        className={`
                            ${getSizeClass(opt)}
                            ${getColorClass(opt)}
                            rounded-full
                            transition-all
                            duration-200
                            border
                            ${value === opt
                                ? 'border-[var(--foreground)] ring-4 ring-[#d7e5e2] scale-110 shadow-lg'
                                : 'border-white/80 hover:border-[var(--line-strong)]'
                            }
                            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#d7e5e2]
                        `}
                        aria-label={`選択肢 ${opt}`}
                        aria-pressed={value === opt}
                    />
                ))}
            </div>
        </div>
    );
}
