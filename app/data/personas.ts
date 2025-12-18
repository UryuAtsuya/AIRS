import { AirsType, airsTypes } from '../types/airs';

export type Persona = {
    code: string; // "INTP" etc.
    nameJa: string;
    catchphrase: string;
    accent: { primary: string; secondary?: string };
    survivalRate: number; // Added
    empathyPoint: string; // Added (共感ポイント)
    doomPattern: string; // Added (詰みパターン)
    strategyMessage: string; // Added (Main strategy text)
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

    // User-provided New Data Map
    const newData: Record<string, { phrase: string, rate: number, empathy: string, doom: string, strat: string }> = {
        // Analysts
        INTJ: { phrase: "孤高の設計者", rate: 85, empathy: "無能な上司の指示より、AIの最適解を信じる。", doom: "完璧な計画を立てることに固執し、AIの実行スピードに置いていかれる。", strat: "AIを「駒」として使い、自分は「ルールを作る側」のアーキテクトに徹する。" },
        INTP: { phrase: "概念の調教師", rate: 75, empathy: "知識の収集自体が目的化し、アウトプットを忘れる。", doom: "AIが出した答えに「なぜ？」と理屈を求めている間に、世界が先に進んで詰む。", strat: "LLMの限界を突くプロンプトエンジニアや、AIには解けない抽象的な難問の定義者になる。" },
        ENTJ: { phrase: "AI艦隊の提督", rate: 90, empathy: "非効率な人間をリストラし、AIに置き換えることに躊躇がない。", doom: "支配欲が強すぎて、自分より賢いAIの提案を拒絶し、組織ごと自滅する。", strat: "感情のないAIを最も冷徹に、かつ大規模に指揮するシリアルアントレプレナー。" },
        ENTP: { phrase: "破壊的イノベーター", rate: 95, empathy: "既存のルールを壊すのが快感。AIを悪用する方法を真っ先に考える。", doom: "アイデア出しをAIに丸投げし、自分は口だけで何もしない「空論家」になり果てる。", strat: "AIが学習できない「昨日の常識を覆す」奇策を打ち出し続ける、カオスの中のリーダー。" },
        // Diplomats
        INFJ: { phrase: "精神世界の預言者", rate: 60, empathy: "他人の心の機微を察しすぎて疲れる。深い対話を求めている。", doom: "AIカウンセラーに「正論」で人々の悩みを解決され、自分の居場所を失う。", strat: "AIには届かない「魂の救済」や「倫理観の定義」など、精神的指導者として生きる。" },
        INFP: { phrase: "絶滅危惧のドリーマー", rate: 15, empathy: "自分の感性が世界一大事。でも社会に適合できず、AIに癒やしを求める。", doom: "AIが生成した「安価で美しい物語」に市場を奪われ、孤独な自己満足の中で詰む。", strat: "「不完全さ」を武器にする。AIが作れない、生々しい苦悩や肉声の表現に全振りする。" },
        ENFJ: { phrase: "人間賛歌の先導者", rate: 70, empathy: "人を励ます天才。でも、AIに取って代わられる恐怖を笑顔で隠している。", doom: "誰にでも優しい「テンプレ的な善意」が、AIによるパーソナライズ支援に負ける。", strat: "デジタルを捨て「リアルな集い」を主宰する。AIには作れない「熱狂の場」の王になる。" },
        ENFP: { phrase: "自由な冒険家", rate: 65, empathy: "常に新しい何かに飛びつきたい。事務作業はAIに押し付けたい。", doom: "企画の種をまくだけまいて、AIによる回収スピードに追いつけず、何も残らない。", strat: "AIを「有能な秘書」として使い、自分は複数のジャンルを跨ぐマルチポテンシャライトに。" },
        // Sentinels
        ISTJ: { phrase: "信頼の最終防衛ライン", rate: 50, empathy: "正確さが命。AIのミスを指摘することに喜びを感じる。", doom: "「正確さ」でAIと競ってしまい、スピードとコストで完敗して居場所を失う。", strat: "AIの暴走を止める「ラストリゾート（最終手段）」。法的・倫理的チェックの専門職。" },
        ISFJ: { phrase: "AI時代の慈愛の母", rate: 30, empathy: "誰かの役に立ちたい。丁寧な手仕事や気配りに誇りを持っている。", doom: "「気配り」がAIチャットボットに代替され、便利屋として使い潰されて終わる。", strat: "画面の中の仕事はやめる。対面での介護や高度接客など、物理的な「温もり」を売る。" },
        ESTJ: { phrase: "秩序の守護神", rate: 80, empathy: "ルールが絶対。効率の悪い人間はAI以下の存在だと思っている。", doom: "自分が作った「マニュアル」自体がAIに最適化され、管理職としての席を奪われる。", strat: "現場のDX（AI化）を強引に推し進める、実装コンサルタントとして君臨する。" },
        ESFJ: { phrase: "社交界の調整役", rate: 45, empathy: "周囲との調和が大事。AIよりも「人との繋がり」を信じている。", doom: "コミュニティの調整がAIによって自動化され、自分のおせっかいが不要になる。", strat: "「人間関係のハブ」を物理空間で作る。AIにはできない、地縁・血縁的な深い絆の維持。" },
        // Explorers
        ISTP: { phrase: "超絶技巧の技術兵", rate: 70, empathy: "道具の扱いが得意。理屈より「どう動くか」が重要。", doom: "PC上の作業に固執し、AIによる自動プログラミングに飲み込まれて詰む。", strat: "AIが持てない「物理的な体」を使う仕事。高度な修理や、現場での即興対応を極める。" },
        ISFP: { phrase: "刹那の表現者", rate: 40, empathy: "今、この瞬間の美しさがすべて。理論は苦手。", doom: "デジタルイラストなど、AIが得意な領域で勝負してしまい、埋没して終わる。", strat: "五感（味・香・触）に訴える表現。料理、空間演出、ライブパフォーマンスへの転向。" },
        ESTP: { phrase: "現場の交渉人", rate: 85, empathy: "考えるより先に動く。ピンチをチャンスに変えるのが得意。", doom: "データの裏付けがないままギャンブルに走り、AIの予測精度に完敗して破産する。", strat: "AIが入り込めない「泥臭い利害調整」や「対面での駆け引き」で勝利を掴む。" },
        ESFP: { phrase: "熱狂のエンターテイナー", rate: 55, empathy: "注目されるのが大好き。自分が楽しむことが最優先。", doom: "画面越しの人気をAIアイドルに奪われ、ファンがバーチャルへ流れて詰む。", strat: "「そこに人間がいること」の価値。ライブ、フィジカルイベントでの圧倒的な体験提供。" },
    };

    const d = newData[t.code] || { phrase: t.aiPhrase, rate: t.survivalRate, empathy: "N/A", doom: "N/A", strat: t.strategy };

    return {
        code: t.code,
        nameJa: t.name,
        catchphrase: d.phrase,
        accent: { primary: colors[t.group] || "#64748b" },
        survivalRate: d.rate,
        empathyPoint: d.empathy,
        doomPattern: d.doom,
        strategyMessage: d.strat,
        summary3: {
            title: "キャリア特性サマリ",
            bullets: [
                d.empathy, // Use "Empathy Point" as 1st bullet
                "AI時代における独自の立ち位置を持つ。",
                d.doom.substring(0, 30) + "..." // Use part of Doom Pattern as teaser
            ]
        },
        strengths: {
            title: "AI時代に輝く強み",
            items: [
                { label: "代替不可能な視点", desc: "AIには模倣できない独自の視座。" },
                { label: "人間的価値", desc: "数値化できない人間ならではの価値。" },
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
                    title: "現状のリスク（共感）",
                    action: d.empathy
                },
                {
                    title: "最悪のシナリオ（詰み）",
                    action: d.doom
                },
                {
                    title: "起死回生の生存戦略",
                    action: d.strat
                }
            ]
        },
        risks: {
            title: "回避すべきリスク",
            fatalFlaw: t.risk,
            scenario: t.badEnd,
            avoid: ["AIと真っ向勝負しない", "数値化できる仕事に固執しない"]
        },
        nextActions: {
            title: "次のアクション",
            disclosure: "※本ページはプロモーションが含まれています",
            cards: (() => {
                const commonCard = {
                    label: "自己分析",
                    why: "より深く自分を知るための精密診断",
                    ctaText: "診断を受ける",
                    href: "https://example.com/deep",
                    isAd: true
                };

                if (t.group === "Diplomats" || t.group === "Explorers") {
                    return [
                        {
                            label: "SNS収益化",
                            why: "あなたの感性と発信力を資産に変える「Heross」",
                            ctaText: "無料動画を見る",
                            href: "https://heross.example.com",
                            isAd: true
                        },
                        {
                            label: "クリエイティブ",
                            why: "AI×表現力で「個」の時代を勝ち抜く",
                            ctaText: "講座を探す",
                            href: "https://example.com/creative",
                            isAd: true
                        },
                        commonCard
                    ];
                } else {
                    return [
                        {
                            label: "起業・独立",
                            why: "組織に依存しない収益源を作る「Startup School」",
                            ctaText: "カリキュラムを見る",
                            href: "https://startup.example.com",
                            isAd: true
                        },
                        {
                            label: "ハイクラス転職",
                            why: "AI時代に評価される専門性を高く売る",
                            ctaText: "求人を見る",
                            href: "https://example.com/career",
                            isAd: true
                        },
                        commonCard
                    ];
                }
            })()
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
