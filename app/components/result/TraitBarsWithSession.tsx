'use client';

import { useEffect, useState } from 'react';
import TraitBars from './TraitBars';

type Group = "Analysts" | "Diplomats" | "Sentinels" | "Explorers";

type Props = {
    staticScores: {
        reasoning: number;
        innovation: number;
        field: number;
        stance: number;
    };
    group: Group;
    typeCode: string;
};

/** sessionStorage に診断スコアがあればそれを使い、なければ静的スコアにフォールバック */
export default function TraitBarsWithSession({ staticScores, group, typeCode }: Props) {
    const [scores, setScores] = useState(staticScores);

    useEffect(() => {
        try {
            const storedType = sessionStorage.getItem('diagnosisType');
            const storedScores = sessionStorage.getItem('diagnosisScores');

            if (storedType === typeCode && storedScores) {
                const raw: { R: number; I: number; F: number; S: number } = JSON.parse(storedScores);
                // -8 ~ +8 → 0 ~ 100% に変換
                const toPercent = (v: number) =>
                    Math.min(100, Math.max(0, ((v + 8) / 16) * 100));

                setScores({
                    reasoning: toPercent(raw.R),
                    innovation: toPercent(raw.I),
                    field: toPercent(raw.F),
                    stance: toPercent(raw.S),
                });
            }
        } catch {
            // sessionStorage が使えない環境ではそのまま静的スコアを使用
        }
    }, [typeCode]);

    return <TraitBars scores={scores} group={group} />;
}
