export type Question = {
    id: string;
    text: string;
    axis: "R" | "I" | "F" | "S";
    direction: "left" | "right";
};

export const questions: Question[] = [
    // --- 1-24: Basic MBTI Traits ---
    // 1. E/I -> F Axis (Right=E)
    { id: "q1", text: "定期的に新しい友人を作っている。", axis: "F", direction: "right" },
    // 2. N/S -> I Axis (Left=N)
    { id: "q2", text: "単純明快なアイデアよりも、複雑で斬新なアイデアにワクワクする。", axis: "I", direction: "left" },
    // 3. T/F -> R Axis (Right=F)
    { id: "q3", text: "事実に基づいた議論よりも、感情的に響くものに説得力を感じる。", axis: "R", direction: "right" },
    // 4. J/P -> S Axis (Left=J)
    { id: "q4", text: "自分の生活と仕事の空間は、清潔で整理整頓されている。", axis: "S", direction: "left" },

    // 5. E/I -> F Axis (Left=I)
    { id: "q5", text: "人脈を広げたり、見知らぬ人に自分を売り込んだりするのは大変だと感じる。", axis: "F", direction: "left" },
    // 6. N/S -> I Axis (Right=S)
    { id: "q6", text: "創作物の様々な解釈についての議論にはあまり興味がない。", axis: "I", direction: "right" },
    // 7. T/F -> R Axis (Left=T)
    { id: "q7", text: "行動方針を決定する際、人々の感情よりも事実や効率を優先する。", axis: "R", direction: "left" },
    // 8. J/P -> S Axis (Right=P)
    { id: "q8", text: "まったく予定を立てずに、その日の成り行きに任せて過ごすことがよくある。", axis: "S", direction: "right" },

    // 9. E/I -> F Axis (Right=E)
    { id: "q9", text: "チームでの活動に参加するのが好きだ。", axis: "F", direction: "right" },
    // 10. N/S -> I Axis (Left=N)
    { id: "q10", text: "新しい、まだ試されていないアプローチを試すのが好きだ。", axis: "I", direction: "left" },
    // 11. T/F -> R Axis (Right=F)
    { id: "q11", text: "正直であることよりも、相手への配慮を優先する。", axis: "R", direction: "right" },
    // 12. J/P -> S Axis (Right=P)
    { id: "q12", text: "仕事や勉強のスケジュールを一貫して維持するのは難しいと感じる。", axis: "S", direction: "right" },

    // 13. E/I -> F Axis (Left=I)
    { id: "q13", text: "社交の場では、通常、相手から自己紹介されるのを待つ。", axis: "F", direction: "left" },
    // 14. N/S -> I Axis (Left=N)
    { id: "q14", text: "未来の世界がどうなるかという理論を議論するのが好きだ。", axis: "I", direction: "left" },
    // 15. T/F -> R Axis (Left=T)
    { id: "q15", text: "意見が対立した際、相手の感情を守るよりも自分の主張を証明したい。", axis: "R", direction: "left" },
    // 16. J/P -> S Axis (Left=J)
    { id: "q16", text: "毎日「やることリスト」を作るのが好きだ。", axis: "S", direction: "left" },

    // 17. E/I -> F Axis (Right=E)
    { id: "q17", text: "一人でいるよりも、誰かと一緒にいるほうが好きだ。", axis: "F", direction: "right" },
    // 18. N/S -> I Axis (Right=S)
    { id: "q18", text: "抽象的な哲学的な問いを考えるのは時間の無駄だと思う。", axis: "I", direction: "right" },
    // 19. T/F -> R Axis (Right=F)
    { id: "q19", text: "決断を下す際、何が論理的かよりも、人がどう感じるかに重点を置く。", axis: "R", direction: "right" },
    // 20. J/P -> S Axis (Left=J)
    { id: "q20", text: "計画が中断された場合、できるだけ早く軌道修正することを優先する。", axis: "S", direction: "left" },

    // 21. E/I -> F Axis (Right=E)
    { id: "q21", text: "初対面の人とも簡単に打ち解けることができる。", axis: "F", direction: "right" },
    // 22. N/S -> I Axis (Left=N)
    { id: "q22", text: "具体的な手順に従うよりも、自分で解決策を考えるタスクを好む。", axis: "I", direction: "left" },
    // 23. T/F -> R Axis (Left=T)
    { id: "q23", text: "感情的な印象よりも、客観的なデータに基づいて選択を行う。", axis: "R", direction: "left" },
    // 24. J/P -> S Axis (Right=P)
    { id: "q24", text: "物事をギリギリまで後回しにしてしまうことがよくある。", axis: "S", direction: "right" },

    // --- 25-32: AI Era Values ---
    // 25. AI Art -> Digital (F Axis: Left)
    { id: "q25", text: "AIが作った文章やアートでも、感動できれば人間が作ったものと同等の価値があると思う。", axis: "F", direction: "left" },
    // 26. Efficiency > Skill -> Edit/S (I Axis: Right)
    { id: "q26", text: "自分の仕事のやり方がAIによって効率化されるなら、長年培ったスキルを捨てることに抵抗はない。", axis: "I", direction: "right" },
    // 27. Physical > AI Tool -> Real (F Axis: Right)
    { id: "q27", text: "便利なAIツールを使いこなすことよりも、自分の手や体を使って何かを完成させることに喜びを感じる。", axis: "F", direction: "right" },
    // 28. Human Poison -> Anti/P (S Axis: Right)
    { id: "q28", text: "AIには出せない「人間らしい毒気」や「不合理なこだわり」こそが、これからの差別化になると思う。", axis: "S", direction: "right" },
    // 29. Solo Biz -> Zero/N (I Axis: Left)
    { id: "q29", text: "指示を待つよりも、AIを使って自分一人で新しいビジネスやプロジェクトを立ち上げることに興味がある。", axis: "I", direction: "left" },
    // 30. Vibe > Logic -> Vibe/F (R Axis: Right)
    { id: "q30", text: "AIが導き出した「正論（最適解）」よりも、現場の熱量や人間関係の空気を優先して判断したい。", axis: "R", direction: "right" },
    // 31. Human Mgmt Immutable -> Merge/J (S Axis: Left)
    { id: "q31", text: "どれだけAIが進化しても、最終的な責任を取るのは人間であり、管理職の役割は不変だと思う。", axis: "S", direction: "left" },
    // 32. Exploit Risk -> Logic/T (R Axis: Left)
    { id: "q32", text: "未知のAI技術が登場した際、リスクを調べる前にまず触って、どう悪用（活用）できるか考える。", axis: "R", direction: "left" },
];

export const typeDetails: Record<string, { strengths: string[]; weaknesses: string[] }> = {
    "INTJ": {
        "strengths": ["長期的視野に立った戦略立案", "感情に流されない冷徹な意思決定", "複雑なシステムの構造化"],
        "weaknesses": ["他者の感情的ニーズの無視", "現場の細かな事情への無関心", "自分の論理への過度な固執"]
    },
    "INTP": {
        "strengths": ["既存の概念にとらわれない独創的な発想", "論理的矛盾の即座の発見", "新しい技術への高い学習意欲"],
        "weaknesses": ["アイデアを実行に移すのが苦手", "ルーチンワークへの極端な嫌悪", "対人コミュニケーションの省略"]
    },
    "ENTJ": {
        "strengths": ["圧倒的なリーダーシップと推進力", "非効率なプロセスの容赦ない排除", "困難な目標への挑戦意欲"],
        "weaknesses": ["独善的になりがちな態度", "弱者への配慮不足", "休息を取ることの下手さ"]
    },
    "ENTP": {
        "strengths": ["常識を打ち破るトリックスター的発想", "多角的な視点からの問題解決", "スピーディなプロトタイピング"],
        "weaknesses": ["細かい詰めが甘く飽きっぽい", "議論のための議論をしてしまう", "ルールを守ることへの抵抗感"]
    },
    "INFJ": {
        "strengths": ["深い洞察力と未来予知のような直感", "他者の潜在能力を見抜く力", "高い倫理観と使命感"],
        "weaknesses": ["理想と現実のギャップへの苦悩", "燃え尽き症候群になりやすい", "批判に対する過度な敏感さ"]
    },
    "INFP": {
        "strengths": ["独自の美意識と世界観の表現", "他者の痛みへの深い共感", "型にはまらない柔軟な生き方"],
        "weaknesses": ["現実的なタスク処理の苦手さ", "批判を人格否定と受け取る傾向", "決断の先送り"]
    },
    "ENFJ": {
        "strengths": ["人々を共通のゴールへ導くカリスマ性", "他者の成長を心から喜べる支援力", "優れた対人コミュニケーション"],
        "weaknesses": ["他者の問題への過度な介入", "対立を避けるための八方美人", "自分自身のニーズの無視"]
    },
    "ENFP": {
        "strengths": ["周囲を巻き込む伝染性の高い情熱", "全く異なる分野を結びつける発想力", "変化への適応力の高さ"],
        "weaknesses": ["詳細な計画や管理が苦手", "興味の対象が次々と移る", "ストレス下での感情的爆発"]
    },
    "ISTJ": {
        "strengths": ["比類なき責任感と完遂力", "事実とデータに基づく正確な判断", "組織の安定性を支える実務能力"],
        "weaknesses": ["変化や新しい方法への強い抵抗", "前例のない事態への対応力不足", "融通の利かなさ"]
    },
    "ISFJ": {
        "strengths": ["細やかな気配りと献身的なサポート", "忍耐強く着実なタスク処理", "周囲の調和を保つ調整力"],
        "weaknesses": ["変化に対する過度な不安", "Noと言えない自己犠牲", "自分の功績をアピールできない"]
    },
    "ESTJ": {
        "strengths": ["明確な手順とルールの確立", "現実的で迅速な意思決定", "組織やプロジェクトの効率的管理"],
        "weaknesses": ["他者の感情や事情への想像力不足", "自分のやり方以外を認めない", "変化への柔軟性の欠如"]
    },
    "ESFJ": {
        "strengths": ["場の雰囲気を明るくする社交性", "他者のニーズを察知する能力", "忠実で献身的なチームプレイ"],
        "weaknesses": ["批判に対する弱さと依存的傾向", "変化よりも現状維持を好む", "表面的な調和の重視"]
    },
    "ISTP": {
        "strengths": ["危機的状況での冷静な対応", "既存ツールを応用するブリコラージュ能力", "効率的で無駄のない動き"],
        "weaknesses": ["長期的な計画性の欠如", "他者との感情的交流の回避", "リスクを軽視した行動"]
    },
    "ISFP": {
        "strengths": ["言葉にできないニュアンスの表現力", "柔軟で適応力のある対応", "現在の瞬間を楽しむ感性"],
        "weaknesses": ["長期的な目標設定の苦手さ", "競争的な環境への不適応", "批判への過敏な反応"]
    },
    "ESTP": {
        "strengths": ["即断即決の行動力", "リスクを恐れないチャレンジ精神", "人々を惹きつける魅力"],
        "weaknesses": ["長期的な結果を考慮しない衝動性", "退屈な作業への耐性のなさ", "計画性の欠如"]
    },
    "ESFP": {
        "strengths": ["周囲を楽しませるエンターテインメント性", "実践的なアプローチ", "変化や新しい環境への順応性"],
        "weaknesses": ["深刻な問題の直視を避ける", "衝動的な出費や行動", "長期的な計画の欠如"]
    }
};
