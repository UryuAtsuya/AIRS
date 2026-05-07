'use client';

import { useMemo, useSyncExternalStore } from 'react';
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
    const sessionSnapshot = useSyncExternalStore(
        (onStoreChange) => {
            if (typeof window === 'undefined') return () => {};

            const handleStorage = () => onStoreChange();
            window.addEventListener('storage', handleStorage);
            window.addEventListener('focus', handleStorage);

            return () => {
                window.removeEventListener('storage', handleStorage);
                window.removeEventListener('focus', handleStorage);
            };
        },
        () => {
            if (typeof window === 'undefined') return '';
            const storedType = window.sessionStorage.getItem('diagnosisType') ?? '';
            const storedScores = window.sessionStorage.getItem('diagnosisScores') ?? '';
            return `${storedType}::${storedScores}`;
        },
        () => ''
    );

    const scores = useMemo(() => {
        try {
            const separatorIndex = sessionSnapshot.indexOf('::');
            if (separatorIndex === -1) return staticScores;

            const storedType = sessionSnapshot.slice(0, separatorIndex);
            const storedScores = sessionSnapshot.slice(separatorIndex + 2);

            if (storedType === typeCode && storedScores) {
                const raw: { R: number; I: number; F: number; S: number } = JSON.parse(storedScores);
                const toPercent = (v: number) => Math.min(100, Math.max(0, ((v + 8) / 16) * 100));

                return {
                    reasoning: toPercent(raw.R),
                    innovation: toPercent(raw.I),
                    field: toPercent(raw.F),
                    stance: toPercent(raw.S),
                };
            }
        } catch {
            // ignore parse failures and fall back to static values
        }

        return staticScores;
    }, [sessionSnapshot, staticScores, typeCode]);

    return <TraitBars scores={scores} group={group} />;
}
