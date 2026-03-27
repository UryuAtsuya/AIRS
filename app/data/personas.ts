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
        disclosure?: string;
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
        INTJ: {
            phrase: "AI参謀",
            rate: 92,
            empathy: "表舞台より「裏側」で全体構造を設計することに喜びを感じる。AIを「便利な道具」ではなく「戦略の構成要素」として捉え、どのAIをどの業務フローに組み込むかを緻密に設計する。",
            doom: "完璧な計画の完成を待っている間に、世界が先に進んでしまう。AI時代はスピードの時代。「100%の設計図を描いてから動く」という美学が、加速した世界と根本的に相性が悪い。",
            strat: "設計図を描くだけでなく、それを「人間の言葉」で翻訳し、チームを巻き込み、実行に移す。この最後の1マイルを克服できたとき、組織において真に代替不可能な存在になる。"
        },
        INTP: {
            phrase: "AI研究者",
            rate: 78,
            empathy: "AIが「こういう傾向があります」と出力したとき、多くの人が次のアクションに移る中、「なぜその傾向が生まれるのか？」と問い続ける。AIが到達できない思考の深淵に自然と向かう。",
            doom: "「知的好奇心」と「市場価値」のミスマッチ。深夜3時に没頭している研究テーマが面白くても、対価を払う人がいるかどうかは全く別問題。「もう少し調べてから……」が成果を永遠に先延ばしにする。",
            strat: "考えたことを世界に届ける回路——発信力、ネットワーク、ビジネスモデル——を持つ。「世界一詳しいのに、世界一知られていない人」にならないよう、深さを「広さ」と接続する。"
        },
        ENTJ: {
            phrase: "AI経営者",
            rate: 95,
            empathy: "AIを「便利な道具」ではなく「支配すべき資源」として扱う。AIエージェントを何体、どう統率するかで勝負する新しいリーダーシップを、全タイプ中最も早く体得できる。",
            doom: "効率化の追求が「人間の疎外」につながる。最も効率化された組織では、リーダーである自分自身も「非効率な人件費」として排除されうるという根本的な逆説が待ち受ける。",
            strat: "AIに「どこへ向かうか」を決めさせてはいけない。ビジョンの方向性を決める判断を下す勇気と責任を引き受けられる人間こそ、AI時代の真の経営者だ。"
        },
        ENTP: {
            phrase: "AIソロプレナー",
            rate: 88,
            empathy: "アイデアを形にするコスト——開発、デザイン、マーケティング——がAIで激減。「思いつき→実行」のサイクルが驚異的なスピードで回る。一人で100人分の成果を出せる時代がついに来た。",
            doom: "「全部60点症候群」——10個のプロジェクトを同時に走らせ、どれもそこそこの完成度で止まる。AIで立ち上げコストはゼロに近づいたが、「成功させる」には依然として集中と忍耐が必要。",
            strat: "「面白い」と「成功する」を一致させる。一つのものを最後まで磨き上げる忍耐を持ち、「永遠のベータ版」から脱却する。出さないと、始まらない。"
        },
        // Diplomats
        INFJ: {
            phrase: "AI時代のストーリーテラー",
            rate: 82,
            empathy: "言葉の裏にある感情、場の空気の微かな揺れ——データ化できない情報を直感的に正確に読み取る。AIが「データはこう読める」と出力したとき、「このデータが意味するのは顧客の孤独だ」と翻訳できる。",
            doom: "「物語」の力をビジネスの成果に変換する回路を持たない。「ブランディング」「UXリサーチ」「組織開発」といったビジネスの言葉に翻訳できるかどうかが、生存の鍵。",
            strat: "AIがデータと効率を支配する世界で、人間の心を動かす物語を紡げる人の希少性は上がり続ける。その才能を「ビジネスの成果」に接続すること。それができたとき最も代替不可能な存在になる。"
        },
        INFP: {
            phrase: "AIクリエイター",
            rate: 65,
            empathy: "AIクリエイターの作品には「温度」がある。AIが生成した文章に「無菌室」のような清潔さがある一方、人間の傷・迷い・喜び・矛盾という「混沌」こそが、AIコンテンツが溢れる世界で人の心を掴む唯一の要素。",
            doom: "「AIが嫌い」になって活用を拒否するか、「こだわり」がスピードを殺す。3週間かけた作品と3分で作ったAI作品の「差がわかる人」は限られており、市場で評価されないリスクがある。",
            strat: "AIを「敵」ではなく「助手」として使いこなす。AIに「つまらない仕事」を任せ、自分は「魂のこもった部分」だけに集中する。「違いがわかる人」を見つけ、その人たちに向けて表現を届ける。"
        },
        ENFJ: {
            phrase: "カリスマリーダー",
            rate: 80,
            empathy: "AIが業務を効率化するほど、人は「なぜこの仕事をしているのか」という存在論的な不安を抱える。その不安に答えを出せるのはAIではない。カリスマリーダーだけが「意味」を与えられる。",
            doom: "「献身」が「成果」として認識されない。KPIに「チームの心理的安全性」は含まれず、人を動かす力がビジネス成果に紐付けられなければ、感謝はされるが評価されない万年中間管理職になる。",
            strat: "「人を動かす力」を具体的なビジネス成果に紐付ける。「離職率X%低下」「エンゲージメントスコアY%向上」——数字の言語で自分の価値を語れるようになったとき、AI時代の組織で最も不可欠な存在になる。"
        },
        ENFP: {
            phrase: "バズの仕掛け人",
            rate: 75,
            empathy: "部屋に入った瞬間に空気が明るくなり、一つのジョークで重苦しい会議を転換できる。AIが「正しい情報」を出す世界で、「面白そう！」と人の心に火をつけることはAIには絶対にできない。",
            doom: "「盛り上げること」と「稼ぐこと」の断絶。SNSで1万いいねを取れても、マネタイズできなければ趣味と変わらない。100人を興奮させた翌日、誰も行動していない。",
            strat: "「盛り上げる」能力と「回収する」能力を橋渡しする。仕組み化が得意なタイプとチームを組み、爆発的なエネルギーをビジネスの成果に転換する持続可能な仕組みを作る。"
        },
        // Sentinels
        ISTJ: {
            phrase: "AI監査人",
            rate: 60,
            empathy: "正確さと責任感において最高水準の資質を持つ。ルールを守り、期限を守り、品質を守る「守る力」が強みだったが、AIがその多くを代替しつつある残酷な現実と向き合っている。",
            doom: "かつての強みだった「正確さ」と「勤勉さ」が月額3,000円のSaaSに代替される。「AIの後始末をする人」というポジションに追いやられ、自分の仕事が「格下げ」されていく。",
            strat: "「正確にチェックする」能力を「AIの品質を保証する」能力へアップグレード。単なる作業者ではなく「AIが出力する品質の最終責任者」として自分を再定義する。"
        },
        ISFJ: {
            phrase: "人間の味方",
            rate: 70,
            empathy: "AIが「お困りですか？」と言えても、本当に辛いとき、本当に不安なとき、人間が求めるのは「正確な回答」ではなく「温かい存在」だ。その「温かい存在」になれる稀少な人々。",
            doom: "「感謝はされるが報われない」構造。ケアの仕事は社会的に不可欠だが賃金が低い。「AI化できないけど給料は上がらない」状態が続き、同世代との収入格差が広がり続ける。",
            strat: "「気配り」を富裕層・高付加価値市場に売る。富裕層向けパーソナルコンシェルジュ、エグゼクティブ向け対面カウンセリング——同じ「優しさ」でも客が違えば単価は10倍になる。"
        },
        ESTJ: {
            phrase: "AI管理人",
            rate: 72,
            empathy: "実行力と管理能力においてトップクラス。AIは戦略を立て提案してくれるが、それを現場で実行に移すのは人間。「理想と現実のギャップを埋める」ところに真価がある。",
            doom: "「自分の経験」が負債に変わることに気づけない。AIネイティブの部下が1時間で終わらせる仕事を「正しいやり方」で3日かける構図が常態化し、「やり方が古い上司」とレッテルを貼られる。",
            strat: "「自分が管理する側」から「自分も学ぶ側」へのマインドセット転換。変わらぬ実行力と変わり続ける柔軟性の両立。DX推進の「最後の1マイル」を担う実装責任者になる。"
        },
        ESFJ: {
            phrase: "AIブリッジ役",
            rate: 68,
            empathy: "AIチャットボットが「お困りですか？」と言えても、「この人なら信用できる」という感覚はAIには作れない。高額な契約や人生の大きな決断では、人間への信頼が最後の決め手になる。",
            doom: "「数値化されない貢献が評価されない」構造。AIが数値化した世界では、顧客との信頼関係や社内の人間関係調整など、数字に表れない貢献は過小評価され続ける。",
            strat: "「信頼」が最大の通貨になる時代。差別化要因は「情報の正しさ」から「誰が言っているか」に移行する。その信頼を「ビジネスの成果」として可視化する技術を身につける。"
        },
        // Explorers
        ISTP: {
            phrase: "AIオタク",
            rate: 80,
            empathy: "新しいAIツールが出たら仕組みを徹底的に理解するまで試し続ける。AIを「使う」のではなく「理解する」ことに快感を覚え、他の人には見えないAIの活用法や限界を見抜く力がある。",
            doom: "「こだわりが納期を殺す」——技術的に完璧なものを作りたい気持ちが強すぎて、「80%の品質で期限通りに出す」ことができない。AI時代のスピードと職人的こだわりの相性の悪さ。",
            strat: "AIが持てない「物理的な体」を使う仕事を極める。ロボティクス、スマートファクトリー、ドローン——「AI+職人」のハイブリッドとして、AIに設計させたものを現実に実装する唯一の存在になる。"
        },
        ISFP: {
            phrase: "AIデザイナー",
            rate: 62,
            empathy: "色の微妙な違い、素材の手触り、空間の空気感——データ化できない感覚的差異を瞬時に感じ取る。AIが画像と音楽を量産する時代、触覚・嗅覚・味覚・空間という「五感の残り」はAIの到達できない聖域。",
            doom: "「美しいものを作る」と「稼ぐ」のギャップ。アーティストとフリーターの境界線は年収で引かれる。五感デザインの価値を認めてくれる市場を見つけられなければ、「素敵ですね。で、売上は？」で終わる。",
            strat: "「五感の体験」が高い対価で取引される市場——高級ホスピタリティ、ウェルネス、ラグジュアリーブランド——にポジションを取る。「美しさ」を「ビジネス」に変換する回路を持てるかどうかが分水嶺。"
        },
        ESTP: {
            phrase: "AI起業家",
            rate: 85,
            empathy: "AIが市場分析を終える前に、現場で実験を3つ終えている。「市場の反応」という最も信頼できるデータを最速で取得する「行動先、分析後」のスタイルがAI時代の高速サイクルと相性が良い。",
            doom: "「方向音痴の全力疾走」——スピードは最大の武器だが、方向が間違っていれば崖に向かって全力ダッシュ。行動が先、分析が後なので「そもそもやるべきだったのか」という検証が甘くなる。",
            strat: "AIで市場分析をしつつ、フィジカルな「現場感覚」という代替不可能な強みを生かす。デジタル化が進むほど「現場に行ける人間」の価値が上がるという逆説を最大限に活用する。"
        },
        ESFP: {
            phrase: "AIエンターテイナー",
            rate: 72,
            empathy: "AIアバターは疲れない・老いない・炎上しない。だが「会いたい」と思わせることはできない。観客の反応に合わせて即興でアドリブを入れ、一人ひとりの目を見て語りかける「生きた対話」はAIに不可能。",
            doom: "デジタル配信ではAIアバターに勝てない。SNS・動画・配信の領域でAIアバターが疲れないという圧倒的利点を持つ中、「デジタルかライブか」の戦略を持たないと居場所を失う。",
            strat: "「デジタルではなくライブで勝負する」という明確な戦略を持つ。「そこに人間がいること」の価値を最大化する体験型ビジネスに集中し、AIアバターが入れない物理空間で圧倒的なプレゼンスを発揮する。"
        },
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
            disclosure: undefined,
            cards: (() => {
                const commonCard = {
                    label: "自己分析",
                    why: "診断の考え方と活用方法を確認する",
                    ctaText: "サービス概要を見る",
                    href: "/about",
                    isAd: false
                };

                if (t.group === "Diplomats" || t.group === "Explorers") {
                    return [
                        {
                            label: "記事を読む",
                            why: "AI時代のキャリア戦略を長文記事で深掘りする",
                            ctaText: "記事を読む",
                            href: "/articles/career-strategy-2026",
                            isAd: false
                        },
                        {
                            label: "タイプ一覧",
                            why: "他タイプとの違いを比較して視野を広げる",
                            ctaText: "一覧を見る",
                            href: "/types",
                            isAd: false
                        },
                        commonCard
                    ];
                } else {
                    return [
                        {
                            label: "記事を読む",
                            why: "市場価値を上げるための考え方を整理する",
                            ctaText: "記事を読む",
                            href: "/articles/career-strategy-2026",
                            isAd: false
                        },
                        {
                            label: "お問い合わせ",
                            why: "サービス内容や掲載情報について相談する",
                            ctaText: "フォームを開く",
                            href: "/contact",
                            isAd: false
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
