import React from 'react';

type TraitBarProps = {
    leftLabel: string;
    rightLabel: string;
    percentage: number; // 0 to 100 representing the value (e.g., 50 is center)
    groupColor: "analysts" | "diplomats" | "sentinels" | "explorers";
};

export const TraitBar = ({
    leftLabel,
    rightLabel,
    percentage,
    groupColor,
}: TraitBarProps) => {
    // Map group to color classes
    const colorMap = {
        analysts: "bg-analysts",
        diplomats: "bg-diplomats",
        sentinels: "bg-sentinels",
        explorers: "bg-explorers",
    };

    const selectedColor = colorMap[groupColor] || "bg-gray-500";

    // Calculate width and side
    // 16Personalities style: Center is 50%.
    // If > 50%, bar grows to right. If < 50%, bar grows to left.
    // The "value" displayed is how far from 50% it is.
    // e.g. 50% -> 0% bar (neutral)
    // 90% -> 40% width to right, displayed as like "80%" or "90%" depending on scale.
    // Usually 0-100 scale: 0 is full left, 100 is full right.
    // Distance from center = abs(percentage - 50) * 2

    const distanceFromCenter = Math.abs(percentage - 50) * 2; // 0 to 100 scale of "intensity"
    const isRight = percentage > 50;
    const isNeutral = percentage === 50;

    // Note: colorMap logic acts as a fallback or base. We use Tailwind utilities.

    return (
        <div className="w-full max-w-2xl mx-auto mb-6">
            <div className="flex justify-between items-end mb-2 px-1">
                <span className={`font-bold text-sm tracking-wider transition-colors ${!isRight && !isNeutral ? `text-${groupColor}` : "text-gray-400"}`}>
                    {leftLabel}
                </span>
                <span className={`font-bold text-sm tracking-wider transition-colors ${isRight ? `text-${groupColor}` : "text-gray-400"}`}>
                    {rightLabel}
                </span>
            </div>

            <div className="flex items-center gap-4">
                {/* Left Percentage */}
                <div className={`w-12 text-right font-bold text-lg ${!isRight && !isNeutral ? `text-${groupColor}` : "text-gray-300"}`}>
                    {!isRight && !isNeutral ? `${Math.round(distanceFromCenter)}%` : ""}
                </div>

                {/* Bar Container */}
                <div className="flex-1 relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    {/* Center indicator */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white z-10 -translate-x-1/2"></div>

                    {/* The Bar */}
                    <div
                        className={`absolute h-full transition-all duration-1000 ease-out ${selectedColor}`}
                        style={{
                            left: isRight ? "50%" : "auto",
                            right: isRight ? "auto" : "50%",
                            width: `${Math.abs(percentage - 50)}%`,
                        }}
                    ></div>
                </div>

                {/* Right Percentage */}
                <div className={`w-12 text-left font-bold text-lg ${isRight ? `text-${groupColor}` : "text-gray-300"}`}>
                    {isRight ? `${Math.round(distanceFromCenter)}%` : ""}
                </div>
            </div>
        </div>
    );
};
