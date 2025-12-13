import { AirsType, airsTypes } from '../types/airs';

export type Persona = {
    code: string; // "INTP" etc.
    nameJa: string;
    catchphrase: string;
    accent: { primary: string; secondary?: string };
    summary3: { title: string; bullets: string[] };
    strengths: { title: string; items: { label: string; desc: string }[] };
    roles: { title: string; items: { role: string; why: string; fit: "high" | "mid" | "low" }[] };
    strategy: { title: string; steps: { title: string; action: string }[] };
    risks: { title: string; fatalFlaw: string; scenario: string; avoid: string[] };
    nextActions: {
        title: string;
        disclosure: string;
        cards: { label: string; why: string; ctaText: string; href: string; isAd: boolean }[];
    };
    seo: { title: string; description: string };
};

// Helper to map old data to new schema
const mapToPersona = (t: AirsType): Persona => {
    // Define group accent colors
    const colors: Record<string, string> = {
        Analysts: "#8b5cf6", // Purple
        Diplomats: "#10b981", // Green
        Sentinels: "#3b82f6", // Blue
        Explorers: "#eab308", // Yellow
    };

    return {
        code: t.code,
        nameJa: t.name,
        catchphrase: t.aiPhrase,
        accent: { primary: colors[t.group] || "#64748b" },
        summary3: {
            title: "キャリア特性サマリ",
            bullets: [
                t.desc.substring(0, 50) + "...", // Placeholder extraction
                "AI時代における独自の立ち位置を持つ。",
                "しかし特定の条件下では脆さを露呈する危険性がある。"
            ]
        },
        strengths: {
            title: "AI時代に輝く強み",
            items: [
                { label: "代替不可能な視点", desc: "AIには模倣できない独自の視座を持っています。" },
                { label: "人間的価値", desc: "数値化できない人間ならではの価値を提供します。" },
            ]
        },
        roles: {
            title: "適正キャリア・ロール",
            items: t.careerRecommendations.map(c => ({
                role: c,
                why: "あなたの特性が最大限に活きる領域です。",
                fit: "high"
            }))
        },
        strategy: {
            title: "生存戦略ロードマップ",
            steps: [
                {
                    title: "AI共創タクティクス",
                    action: t.aiCollaborationStrategy
                },
                {
                    title: "弱点補完アプローチ",
                    action: (() => {
                        switch (t.group) {
                            case "Analysts": return "論理的正しさだけでなく、人間的な「納得感」や「感情」を設計に組み込むことで、AIにはない説得力を獲得できます。";
                            case "Diplomats": return "あなたの理想やビジョンを、AIを使って具体的な数値やデータに翻訳するスキルを磨いてください。理想を語るだけでなく、実証する力を。";
                            case "Sentinels": return "過去の慣例に固執せず、AIによる新しいプロセスを積極的に導入する「変化のリーダー」になってください。守るために、変えるのです。";
                            case "Explorers": return "短期的な衝動だけでなく、AIを使って長期的なシミュレーションを行い、リスクを管理する習慣をつけてください。アクセルだけでなく、ナビを持つこと。";
                            default: return "AIには代替できない、あなた独自の人間的価値（共感、創造、即興）を磨き続けてください。";
                        }
                    })()
                },
                {
                    title: "市場価値の確立",
                    action: t.strategy
                }
            ]
        },
        risks: {
            title: "回避すべきリスクシナリオ",
            fatalFlaw: t.risk,
            scenario: t.badEnd,
            avoid: ["AIと真っ向勝負しない", "数値化できる仕事に固執しない"]
        },
        nextActions: {
            title: "次のアクション",
            disclosure: "※本ページはプロモーションが含まれています",
            cards: [
                {
                    label: "ハイクラス転職",
                    why: "あなたの専門性は高く評価されます。",
                    ctaText: "求人を見る",
                    href: "https://example.com/job",
                    isAd: true
                },
                {
                    label: "スキルアップ",
                    why: "AIスキルを補完しましょう。",
                    ctaText: "講座を探す",
                    href: "https://example.com/skill",
                    isAd: true
                },
                {
                    label: "自己分析",
                    why: "より深い適性を知るために。",
                    ctaText: "詳しく診断",
                    href: "https://example.com/deep",
                    isAd: true
                }
            ]
        },
        seo: {
            title: `${t.code} (${t.name}) のAI時代生存戦略 | A.I.R.S.`,
            description: `${t.name} (A.I.R.S.タイプ: ${t.code}) の性格特性、AI時代における強みとリスク、具体的なキャリア戦略を徹底分析。`
        }
    };
};

export const personas: Record<string, Persona> = airsTypes.reduce((acc, t) => {
    acc[t.code] = mapToPersona(t);
    return acc;
}, {} as Record<string, Persona>);

export const getPersona = (code: string): Persona | undefined => {
    return personas[code.toUpperCase()];
};
