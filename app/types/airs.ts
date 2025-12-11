import {
    Lightbulb,
    Users,
    Gavel,
    Compass,
    LucideIcon
} from 'lucide-react';

export type AirsType = {
    id: string; // e.g., "ENTP"
    code: string; // 表示用コード
    indicator: string; // e.g., "LVZE" - 4文字の指標
    group: "Analysts" | "Diplomats" | "Sentinels" | "Explorers";
    name: string; // e.g., "討論者"
    engName: string; // e.g., "Debater"
    aiPhrase: string; // e.g., "破壊的イノベーター"
    survivalRate: number; // 0-100 (%)
    risk: string; // 短い警告文
    desc: string; // 概要
    badEnd: string; // 詰みパターン詳細（辛口）
    strategy: string; // 生存戦略詳細（具体的アクション）
    aiCollaborationStrategy: string; // AI活用戦略
    careerRecommendations: string[]; // おすすめ職業3-5個
    params: {
        reasoning: "Logic" | "Vibe";
        innovation: "Zero" | "Edit";
        field: "Digital" | "Physical";
        stance: "Merge" | "Anti";
    };
};

export const airsTypes: AirsType[] = [
    // --- Analysts (分析家) ---
    {
        id: "INTJ",
        code: "INTJ",
        indicator: "LVZE",
        group: "Analysts",
        name: "建築家",
        engName: "Architect",
        aiPhrase: "戦略的AIの設計者",
        survivalRate: 97,
        risk: "感情なき最適化による孤立",
        desc: "面接官が3分で判断する「適性」を、あなたは3秒で見抜く。AIに戦略を立てさせ、自分は最終決断だけを下す。効率化の極致。だが気づいているか？あなたが最適化した組織は、いつかあなた自身も「非効率な人件費」として排除する。論理は冷酷だ。感情を持たない者は、感情を持つ者に裏切られる。",
        badEnd: "完璧な業務フローを設計し、全てをAIに置き換えた。そして経営陣が気づく。「このシステム、もう人間いらないな」。あなたが作った効率化システムが、あなたの退職勧奨書を自動生成する。皮肉なことに、それは論理的に正しい判断だった。最適化の果てに待つのは、自分の椅子が消えた会議室だ。",
        strategy: "AIを「実行部隊」として使い倒せ。だが最終責任は絶対に人間が取れ。経営者が欲しいのは「判断を下せる人間」だ。AIは完璧な分析をするが、株主総会で頭を下げることはできない。あなたの価値は「腹を切る覚悟」にある。その覚悟を、年収に変えろ。",
        aiCollaborationStrategy: "AIを戦略実行ツールとして活用し、データ分析・シミュレーション・自動化を徹底。最終的な意思決定と責任は人間が担う。",
        careerRecommendations: ["AIストラテジスト", "システムアーキテクト", "経営コンサルタント", "プロダクトマネージャー", "データサイエンティスト"],
        params: { reasoning: "Logic", innovation: "Zero", field: "Digital", stance: "Merge" }
    },
    {
        id: "INTP",
        code: "INTP",
        indicator: "LVZM",
        group: "Analysts",
        name: "論理学者",
        engName: "Logician",
        aiPhrase: "AI深層の解読者",
        survivalRate: 88,
        risk: "終わりのない知的探求への逃避",
        desc: "転職サイトに「AI経験者優遇」と書いてある。だが企業が欲しいのは「AIを理解してる人」じゃない。「AIで金を稼げる人」だ。あなたは技術を愛しすぎている。深夜3時、誰も読まない技術ブログを書きながら、ふと気づく。「これ、誰の役に立ってるんだ？」。知的好奇心と市場価値は、必ずしも一致しない。",
        badEnd: "「完璧な設計」にこだわり、リリースは永遠に来ない。後輩が雑に作ったMVPが大ヒットし、昇進していく。あなたのコードは美しいが、誰も使わない。GitHubに星は付くが、給料は上がらない。40歳、フリーランス、単価は新卒と同じ。「技術力」だけでは食えない現実を、骨身に染みて理解する。",
        strategy: "「AIが壊れた時に呼ばれる人間」になれ。平時は不要でいい。だが障害が起きた瞬間、企業は土下座してでもあなたを呼ぶ。その時の時給は10万円だ。緊急事態のスペシャリストは、常に高値で取引される。あなたの論理的思考は、火消しでこそ輝く。",
        aiCollaborationStrategy: "AIのアルゴリズムを深く理解し、ブラックボックスを解明。例外処理やデバッグで真価を発揮する。",
        careerRecommendations: ["AI研究者", "機械学習エンジニア", "セキュリティアナリスト", "アルゴリズムスペシャリスト"],
        params: { reasoning: "Logic", innovation: "Zero", field: "Digital", stance: "Merge" }
    },
    {
        id: "ENTJ",
        code: "ENTJ",
        indicator: "LEDEN",
        group: "Analysts",
        name: "指揮官",
        engName: "Commander",
        aiPhrase: "AI組織の統率者",
        survivalRate: 95,
        risk: "効率が生む自らの首絞め",
        desc: "面接で「マネジメント経験は？」と聞かれる。あなたは答える。「AI100体を統率してました」。面接官は笑う。だがあなたは本気だ。一人で10人分の成果を出せる人間と、10人を管理できるだけの人間。企業はどちらを欲しがる？答えは明白だ。だが、その効率化があなた自身の首を絞める日が来る。",
        badEnd: "あなたが構築した完璧なAIシステムが、取締役会で絶賛される。「素晴らしい。これで人件費が8割削減できる」。翌週、あなたの机に退職勧奨の封筒が置かれている。皮肉なことに、あなたの後任もAIだ。効率化の極致は、効率化した本人の排除。あなたは自分の墓を掘っていたのだ。",
        strategy: "AIに「作業」を任せ、あなたは「政治」をやれ。株主を説得し、取締役を丸め込み、メディアに顔を出せ。AIには絶対にできない「人間の顔」になれ。組織のトップに必要なのは能力じゃない。「この人がいないと回らない」という空気だ。その空気を、戦略的に作れ。",
        aiCollaborationStrategy: "AIを実務部隊として大量配備し、自らは最終意思決定と責任を担う。効率化と人間的判断の両立を図る。",
        careerRecommendations: ["CEO", "事業責任者", "プロジェクトマネージャー", "経営戦略コンサルタント", "起業家"],
        params: { reasoning: "Logic", innovation: "Edit", field: "Digital", stance: "Merge" }
    },
    {
        id: "ENTP",
        code: "ENTP",
        indicator: "LEDA",
        group: "Analysts",
        name: "討論者",
        engName: "Debater",
        aiPhrase: "破壊的イノベーター",
        survivalRate: 92,
        risk: "実装フェーズでの飽きと放棄",
        desc: "面接で「何か新しいアイデアは？」と聞かれ、あなたは30分語る。面接官の目が輝く。だが次の質問で全てが崩れる。「で、それ実装できます？」。沈黙。あなたのアイデアは素晴らしい。だが企業が金を払うのは「実装できる人」だ。発想だけなら、ChatGPTで十分。あなたの価値は、どこにある？",
        badEnd: "起業して3ヶ月。革命的なアイデアに飽きて、新しいアイデアを追いかける。気づけば未完成のプロジェクトが50個。投資家は去り、共同創業者は逃げ、残ったのは借金だけ。「あいつは口だけ」。業界でそう呼ばれるようになる。アイデアマンの墓標には、何も刻まれない。",
        strategy: "AIを「実装の奴隷」として使え。あなたは発想に全力を注ぎ、コーディングは全てAIに丸投げしろ。ただし、絶対に「完成」させろ。未完成のアイデア100個より、完成品1個の方が100倍価値がある。「実装できるアイデアマン」は、市場で最も希少な人材だ。",
        aiCollaborationStrategy: "AIを実装の事務次官として活用。アイデア生成に集中し、具現化・プロトタイピングは全てAIに委任する。",
        careerRecommendations: ["イノベーションコンサルタント", "プロダクトデザイナー", "起業家", "ベンチャーキャピタリスト"],
        params: { reasoning: "Logic", innovation: "Edit", field: "Digital", stance: "Anti" }
    },

    // --- Diplomats (外交官) ---
    {
        id: "INFJ",
        code: "INFJ",
        indicator: "VZDA",
        group: "Diplomats",
        name: "提唱者",
        engName: "Advocate",
        aiPhrase: "デジタル社会の倫理的支柱",
        survivalRate: 85,
        risk: "理想とデジタル現実の乖離",
        desc: "転職エージェントに「AI時代に必要なスキルは？」と聞かれる。あなたは答える。「人間性です」。エージェントは苦笑する。「それ、職務経歴書に書けます？」。書けない。数値化できない。だがあなたは知っている。AIが支配する世界で、最後に残るのは「人間にしか語れない物語」だと。問題は、それで飯が食えるかだ。",
        badEnd: "「AIには書けない文章」を書き続けた。だが誰も読まない。月間PV 50、収益 300円。一方、AI生成記事は月間100万PV。「質より量」が勝つ世界で、あなたの理想は誰にも届かない。40歳、貯金ゼロ、実家暮らし。「人間性」では、家賃は払えなかった。",
        strategy: "AIが絶対に踏み込めない領域に特化しろ。死、喪失、裏切り、絶望——人間の暗部を扱え。企業の「AI倫理コンサルタント」として、炎上を未然に防ぐ仕事をしろ。一件500万円だ。あなたの「人間理解」は、企業のリスクヘッジとして売れる。理想を、ビジネスに変えろ。",
        aiCollaborationStrategy: "AIには表現できない人間の精神性・倫理・感情の深みを扱う。AI倫理やヒューマンセンタードデザインの領域で活躍。",
        careerRecommendations: ["AI倫理コンサルタント", "カウンセラー", "ライター", "NPO/NGO職員", "人事・組織開発"],
        params: { reasoning: "Vibe", innovation: "Zero", field: "Digital", stance: "Anti" }
    },
    {
        id: "INFP",
        code: "INFP",
        indicator: "VEDA",
        group: "Diplomats",
        name: "仲介者",
        engName: "Mediator",
        aiPhrase: "魂を吹き込むクリエイター",
        survivalRate: 65,
        risk: "量産型コンテンツへの埋没",
        desc: "ポートフォリオを見せる。採用担当者は言う。「いいですね。で、これAIで作りました？」。違う、と答える。「じゃあ制作時間は？」。3週間、と答える。「AIなら3分ですよね。なぜAI使わないんです？」。あなたの「こだわり」は、企業には「非効率」としか映らない。魂を込めた作品と、AI生成の量産品。市場はどちらを選ぶ？",
        badEnd: "渾身の作品を投稿する。「いいね」は3つ。隣で後輩がAI生成イラストを投稿する。「いいね」は3000。あなたは泣きながらAIに頼る。だが出来上がった作品に、もう魂はない。「自分じゃなくてもいい」。その事実が、あなたの心を完全に折る。クリエイターの死に方は、静かだ。",
        strategy: "作品を売るな。「制作過程の物語」を売れ。YouTubeで制作風景を配信し、苦悩を語れ。人は完成品ではなく、「人間が苦しんで作る過程」に金を払う。あなたの価値は作品ではない。「作品を作るあなた」だ。自分自身を、コンテンツ化しろ。",
        aiCollaborationStrategy: "AIを表現ツールとして活用しつつ、制作過程のストーリーと内面世界を前面に出す。作品に魂を吹き込む。",
        careerRecommendations: ["クリエイティブライター", "アーティスト", "UXライター", "ストーリーテラー"],
        params: { reasoning: "Vibe", innovation: "Edit", field: "Digital", stance: "Anti" }
    },
    {
        id: "ENFJ",
        code: "ENFJ",
        indicator: "VZPM",
        group: "Diplomats",
        name: "主人公",
        engName: "Protagonist",
        aiPhrase: "人間中心AI社会のリーダー",
        survivalRate: 94,
        risk: "過剰な利他による自己犠牲",
        desc: "チームのために尽くす。AI導入で不安がる部下を励まし、深夜まで相談に乗る。だが人事評価は「成果が見えない」。あなたの優しさは数値化できない。KPIに「チームの心理的安全性」は含まれない。献身は美しい。だが、それで昇進できるか？あなたが救った部下は昇進し、あなたは万年平社員。優しさの代償は、重い。",
        badEnd: "AI導入を推進し、業務効率は3倍になった。だが5人がリストラされた。あなたは責任を感じ、退職金を分け与える。感謝されるが、あなたの貯金はゼロになる。数年後、助けた元部下は起業して成功している。あなたは派遣社員として、その会社で働いている。善意は、報われるとは限らない。",
        strategy: "「心のケア」を商品化しろ。企業の「メンタルヘルス・コンサルタント」として、AI導入時の従業員ケアを請け負え。一社300万円だ。あなたの共感力は、企業のリスク管理として売れる。優しさで食えないなら、優しさを売れ。感情労働にも、適正価格がある。",
        aiCollaborationStrategy: "AIで業務効率化を図りつつ、人間の感情ケアとモチベーション管理に専念。テクノロジーと人間性の調和を実現。",
        careerRecommendations: ["チームリーダー", "人事マネージャー", "コーチ", "教育者", "コミュニティマネージャー"],
        params: { reasoning: "Vibe", innovation: "Zero", field: "Physical", stance: "Merge" }
    },
    {
        id: "ENFP",
        code: "ENFP",
        indicator: "VEPM",
        group: "Diplomats",
        name: "運動家",
        engName: "Campaigner",
        aiPhrase: "拡張現実のエバンジェリスト",
        survivalRate: 90,
        risk: "熱狂だけで終わるお祭り男",
        desc: "セミナーで熱く語る。「AIで世界が変わる！」。聴衆は拍手する。だが翌日、誰も行動しない。あなたの言葉は人を興奮させるが、行動させない。企業が欲しいのは「盛り上げ役」じゃない。「売上を上げる人」だ。熱量は素晴らしい。だが、それは仕事か？趣味か？あなた自身、わかっていないだろう。",
        badEnd: "毎月新しいAIツールを紹介する。フォロワーは増える。だが収益化できない。「いつか何かになる」と信じて5年。気づけば35歳、貯金30万円。後輩が「AI導入コンサル」で年収2000万。あなたは「AIインフルエンサー」として、案件単価3万円。熱狂は、空腹を満たさない。",
        strategy: "熱量を「営業力」に変えろ。企業のAI導入セミナーで、経営者を興奮させろ。そして契約を取れ。一件500万円だ。あなたの仕事は「技術を語ること」じゃない。「技術で経営者の財布を開かせること」だ。エバンジェリストは、セールスマンの別名だ。",
        aiCollaborationStrategy: "AIを未来のビジョンを語る道具として活用。技術を感情的に翻訳し、大衆を巻き込むエバンジェリストになる。",
        careerRecommendations: ["マーケター", "エバンジェリスト", "イベントプランナー", "インフルエンサー", "広報"],
        params: { reasoning: "Vibe", innovation: "Edit", field: "Physical", stance: "Merge" }
    },

    // --- Sentinels (番人) ---
    {
        id: "ISTJ",
        code: "ISTJ",
        indicator: "LVDA",
        group: "Sentinels",
        name: "管理者",
        engName: "Logistician",
        aiPhrase: "AIデータの監査人",
        survivalRate: 55,
        risk: "AIによる完全代替の筆頭",
        desc: "20年間、ミスなく働いた。上司に褒められた。「君は真面目だね」。だが昇進はしない。なぜなら、あなたの仕事は「誰でもできる」から。いや、正確には「AIでもできる」から。月給35万円のあなたと、月額3000円のSaaS。経営者の選択は、明白だ。真面目さは美徳だった。過去形だ。",
        badEnd: "ある朝、メールが届く。「業務効率化のため、あなたの部署を廃止します」。25年間、毎日定時に出社し、完璧に仕事をこなした。その報酬は、3ヶ月分の退職金。再就職活動を始めるが、「AIでできる仕事」しかスキルがない。50歳、時給1200円のパート。真面目だけでは、生き残れなかった。",
        strategy: "AIの「監査役」になれ。AIが出した答えの正当性を検証し、法的責任を担保する仕事だ。企業は訴訟を恐れる。だからAIの出力を盲信できない。あなたは「AIの嘘を見抜く番人」として、高給で雇われる。真面目さを、リスクヘッジとして売れ。",
        aiCollaborationStrategy: "AIの出力を監査・検証する役割に特化。法的正当性やコンプライアンスを保証するゲートキーパーになる。",
        careerRecommendations: ["監査役", "コンプライアンス担当", "品質管理", "法務", "データアナリスト"],
        params: { reasoning: "Logic", innovation: "Zero", field: "Digital", stance: "Anti" }
    },
    {
        id: "ISFJ",
        code: "ISFJ",
        indicator: "VZPM",
        group: "Sentinels",
        name: "擁護者",
        engName: "Defender",
        aiPhrase: "ハイタッチ・ホスピタリティ",
        survivalRate: 96,
        risk: "低賃金感情労働への固定化",
        desc: "「ありがとう」と毎日言われる。だが給料は上がらない。あなたの気配りは素晴らしい。だが「感謝」は給与明細に反映されない。AIが入れない領域で働けることは幸運だ。だが、それは「AI化できないほど非効率」という意味でもある。生産性が低い仕事は、賃金も低い。優しさで家賃は払えない。",
        badEnd: "介護の仕事を15年続けた。利用者に感謝され、やりがいを感じた。だが年収は300万円のまま。同級生はAI企業で年収1200万円。「好きな仕事だから」と自分に言い聞かせる。だが40歳、結婚も諦め、老後資金もない。優しさに殉じた人生。それは美しいが、報われない。",
        strategy: "「気配り」を富裕層に売れ。高級ホテルのコンシェルジュ、VIP専属秘書、富裕層向け医療コーディネーター。同じ「優しさ」でも、客が違えば単価は10倍だ。あなたの感情労働を、適正価格で売れる市場に行け。優しさは武器だ。安売りするな。",
        aiCollaborationStrategy: "AIでは代替できない温かみのあるサービスを提供。富裕層向けハイタッチサービスで高付加価値を実現。",
        careerRecommendations: ["高級コンシェルジュ", "医療従事者", "介護士", "カスタマーサクセス", "秘書"],
        params: { reasoning: "Vibe", innovation: "Zero", field: "Physical", stance: "Merge" }
    },
    {
        id: "ESTJ",
        code: "ESTJ",
        indicator: "LVPA",
        group: "Sentinels",
        name: "幹部",
        engName: "Executive",
        aiPhrase: "AI導入の現場指揮官",
        survivalRate: 75,
        risk: "組織の硬直化と共に沈没",
        desc: "「これまでのやり方」で成功してきた。だから変えたくない。だがAIネイティブの新人が、あなたの10倍の速度で仕事を終わらせる。上司は言う。「彼を見習ったら？」。プライドが傷つく。だが認めざるを得ない。あなたの「経験」は、もう武器じゃない。過去の成功が、未来の足枷になる。",
        badEnd: "「紙の書類が安全だ」と主張し続けた。だが会社は全てクラウド化した。あなただけが取り残される。「時代についていけない人」として、窓際に追いやられる。55歳、役職定年、年収半減。若手に頭を下げて、AIの使い方を教わる。過去の栄光は、今の屈辱を癒さない。",
        strategy: "「変化を嫌う老害」を説得する専門家になれ。AI導入の最大の障壁は技術じゃない。「人間の抵抗」だ。あなたは古い世代の言語を話せる。その能力を使い、社内政治を制御しろ。「AI導入の調整役」として、年収1000万円で雇われろ。",
        aiCollaborationStrategy: "AI導入を推進しつつ、現場の人間関係調整と社内政治をハンドリング。人間と機械の橋渡し役になる。",
        careerRecommendations: ["オペレーションマネージャー", "プロジェクトマネージャー", "現場監督", "業務改善コンサルタント"],
        params: { reasoning: "Logic", innovation: "Zero", field: "Physical", stance: "Anti" }
    },
    {
        id: "ESFJ",
        code: "ESFJ",
        indicator: "VZPM",
        group: "Sentinels",
        name: "領事",
        engName: "Consul",
        aiPhrase: "リアル・コミュニティの守護者",
        survivalRate: 82,
        risk: "八方美人による疲弊",
        desc: "みんなの相談に乗る。飲み会を企画する。職場の雰囲気を良くする。感謝される。だが人事評価は「C」。なぜなら「成果が見えない」から。あなたの貢献は数値化できない。KPIに「職場の雰囲気」は含まれない。いい人は、評価されない。それが現実だ。",
        badEnd: "リモートワークが標準化した。オフィスは縮小され、飲み会は廃止された。あなたの「場を和ませる能力」は不要になった。Slackで絵文字を送るが、誰も反応しない。気づけば、あなたの存在意義が消えている。「いい人」は、リストラの第一候補だ。",
        strategy: "「孤独なリモートワーカー」のケアを商品化しろ。企業の「コミュニティマネージャー」として、社員の孤立を防ぐ仕事をしろ。メンタル不調による離職は、企業に年間数千万円の損失を与える。あなたの「お節介」は、そのリスクヘッジとして売れる。",
        aiCollaborationStrategy: "デジタル疲れした人々にアナログな温かさを提供。コミュニティの潤滑油として、人間関係の調整役を担う。",
        careerRecommendations: ["コミュニティマネージャー", "イベントコーディネーター", "カスタマーサポート", "総務", "受付"],
        params: { reasoning: "Vibe", innovation: "Zero", field: "Physical", stance: "Merge" }
    },

    // --- Explorers (探検家) ---
    {
        id: "ISTP",
        code: "ISTP",
        indicator: "LEPA",
        group: "Explorers",
        name: "巨匠",
        engName: "Virtuoso",
        aiPhrase: "AI武装のアルチザン",
        survivalRate: 78,
        risk: "技術への執着による視野狭窄",
        desc: "完璧な工具を揃える。最高の開発環境を構築する。だが納品は遅れる。クライアントは言う。「品質より納期です」。あなたのこだわりは、顧客には「ただの遅延」だ。職人気質は美しい。だが、それで食えるか？市場が求めるのは「完璧な製品」じゃない。「今すぐ使える製品」だ。",
        badEnd: "「手作りの温かみ」にこだわり、全て手作業で作る。だがAI生成品が市場を席巻する。あなたの作品は誰も買わない。「職人」という肩書きだけが残り、収入はゼロ。50歳、技術はあるが金はない。こだわりは、時に足枷になる。",
        strategy: "AIに「80点の製品」を作らせ、あなたは「最後の20%」に集中しろ。ディテールの仕上げ、微調整、品質保証。そこに職人技を注げ。「AI×職人」のハイブリッドは、市場で最も希少だ。こだわりを捨てるな。ただし、効率も捨てるな。",
        aiCollaborationStrategy: "AIに80点の完成品を作らせ、最後の20%のディテールと仕上げに集中。職人技で差別化を図る。",
        careerRecommendations: ["エンジニア", "クラフトマン", "メカニック", "プロダクトデザイナー"],
        params: { reasoning: "Logic", innovation: "Edit", field: "Physical", stance: "Anti" }
    },
    {
        id: "ISFP",
        code: "ISFP",
        indicator: "VEPA",
        group: "Explorers",
        name: "冒険家",
        engName: "Adventurer",
        aiPhrase: "感性の越境者",
        survivalRate: 68,
        risk: "論理武装社会での窒息",
        desc: "面接で作品を見せる。「素敵ですね。で、これで売上は？」。答えられない。あなたの感性は素晴らしい。だが企業が欲しいのは「売れる感性」だ。美しいだけでは、給料は出ない。「アーティスト」と「フリーター」の境界線は、年収200万円だ。あなたは、どちら側にいる？",
        badEnd: "「感性を大事にしたい」と言い続けた。だが家賃は待ってくれない。40歳、バイトを掛け持ちしながら創作活動を続ける。作品は誰にも見られず、SNSのフォロワーは50人。「いつか認められる」。その「いつか」は、永遠に来なかった。",
        strategy: "「体験」を売れ。AIが作れないのは「今、ここ」の一回性だ。ライブペイント、即興パフォーマンス、限定イベント。記録できない瞬間に、人は金を払う。あなたの感性を「体験型コンテンツ」として商品化しろ。一回30万円で売れ。",
        aiCollaborationStrategy: "AIでは再現できないライブ感と一回性のある体験を創出。五感に訴える即興的な価値を提供する。",
        careerRecommendations: ["アーティスト", "体験デザイナー", "パフォーマー", "料理人", "インテリアデザイナー"],
        params: { reasoning: "Vibe", innovation: "Edit", field: "Physical", stance: "Anti" }
    },
    {
        id: "ESTP",
        code: "ESTP",
        indicator: "LEPM",
        group: "Explorers",
        name: "起業家",
        engName: "Entrepreneur",
        aiPhrase: "光速の事業開発者",
        survivalRate: 99,
        risk: "リスク・ジャンキーによる破綻",
        desc: "AIで市場分析し、3日でプロトタイプを作る。投資家は興奮する。「君は天才だ」。だが、その事業は本当に必要か？スピードは武器だ。だが方向が間違っていれば、崖に向かって全力疾走しているだけだ。あなたは「動くこと」自体に中毒している。立ち止まって考えろ。今、どこに向かっている？",
        badEnd: "AIの市場予測を信じ、全財産を投資した。「絶対に儲かる」とAIが言った。だが市場は崩壊し、借金だけが残った。「AIがそう言ったから」。それは破産法廷で通用しない。35歳、自己破産、信用情報ブラック。スピードだけでは、生き残れなかった。",
        strategy: "失敗コストを極限まで下げろ。AIで100個の事業案を作り、最小コストで全部試せ。99個失敗してもいい。1個当たれば億万長者だ。あなたの武器は「試行回数」だ。ただし、一発に全賭けするな。分散投資の思想で、事業を回せ。",
        aiCollaborationStrategy: "AIで失敗コストを下げ、高速でプロトタイプを量産。試行回数を最大化し、PDCAを爆速で回す。",
        careerRecommendations: ["起業家", "事業開発", "営業", "トレーダー", "不動産投資家"],
        params: { reasoning: "Logic", innovation: "Edit", field: "Physical", stance: "Merge" }
    },
    {
        id: "ESFP",
        code: "ESFP",
        indicator: "VEPM",
        group: "Explorers",
        name: "エンターテイナー",
        engName: "Entertainer",
        aiPhrase: "熱狂のインフルエンサー",
        survivalRate: 96,
        risk: "バーチャルヒューマンへの置換",
        desc: "フォロワー10万人。「いいね」は毎日1000。だが収入は月20万円。一方、AIバーチャルYouTuberは、24時間配信で月収500万円。あなたの「人間らしさ」は武器だった。だが、AIアバターは疲れない、老いない、炎上しない。企業はどちらを選ぶ？容姿と若さで勝負する者は、容姿と若さで負ける。",
        badEnd: "35歳、「若さ」が売りだったあなたに、仕事が来なくなる。事務所は言う。「新しいAIタレントを推します」。そのAIは、永遠に20歳で、完璧に美しい。あなたは「元タレント」として、地方のイベントで営業スマイルを作る。容姿は資産だった。だが、減価償却する資産だった。",
        strategy: "「生放送」と「リアルイベント」に全力投球しろ。編集できない、予測不能な、人間臭い瞬間。そこにあなたの価値がある。AIには「失敗」がない。だからAIには「人間味」もない。あなたの武器は「完璧じゃないこと」だ。その不完全さを、売れ。",
        aiCollaborationStrategy: "生放送とリアルイベントで予測不能な人間臭さを発揮。AIには真似できない生の熱量で勝負する。",
        careerRecommendations: ["エンターテイナー", "インフルエンサー", "MC", "俳優", "イベントホスト"],
        params: { reasoning: "Vibe", innovation: "Edit", field: "Physical", stance: "Merge" }
    }
];

export const groupColors: Record<string, string> = {
    Analysts: "text-purple-600 bg-purple-50 hover:bg-purple-100",
    Diplomats: "text-green-600 bg-green-50 hover:bg-green-100",
    Sentinels: "text-blue-600 bg-blue-50 hover:bg-blue-100",
    Explorers: "text-yellow-600 bg-yellow-50 hover:bg-yellow-100",
};
