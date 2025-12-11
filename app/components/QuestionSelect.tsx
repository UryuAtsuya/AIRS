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
        if (val === 0) return 'bg-slate-300 hover:bg-slate-400';
        if (val > 0) {
            // Agree side - green/teal
            switch (val) {
                case 1: return 'bg-teal-300 hover:bg-teal-400';
                case 2: return 'bg-teal-400 hover:bg-teal-500';
                case 3: return 'bg-teal-500 hover:bg-teal-600';
                default: return 'bg-teal-400';
            }
        } else {
            // Disagree side - purple/indigo
            switch (val) {
                case -1: return 'bg-purple-300 hover:bg-purple-400';
                case -2: return 'bg-purple-400 hover:bg-purple-500';
                case -3: return 'bg-purple-500 hover:bg-purple-600';
                default: return 'bg-purple-400';
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Labels */}
            <div className="flex justify-between items-center mb-6 px-4">
                <span className="text-sm font-medium text-purple-600">{disagreeLabel}</span>
                <span className="text-sm font-medium text-teal-600">{agreeLabel}</span>
            </div>

            {/* Circular buttons */}
            <div className="flex justify-center items-center gap-2 md:gap-3">
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
                            border-2
                            ${value === opt
                                ? 'border-slate-800 ring-4 ring-slate-200 scale-110 shadow-lg'
                                : 'border-transparent hover:border-slate-300'
                            }
                            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                            focus:outline-none
                            focus:ring-4
                            focus:ring-slate-200
                        `}
                        aria-label={`選択肢 ${opt}`}
                        aria-pressed={value === opt}
                    />
                ))}
            </div>
        </div>
    );
}
