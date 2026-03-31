import React from 'react';
import Link from 'next/link';
import MeikoCareerAffiliate from '../../components/MeikoCareerAffiliate';
import { ArrowRight, BrainCircuit, Users, Target, Shield, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2026年の分かれ道：AIに「代替される人」と「価値が暴騰する人」の決定的な違い | MBTI.AI',
    description: 'AI時代において生存し、かつ市場価値を最大化させるための「新・キャリア戦略」を徹底解説します。',
};

export default function CareerStrategy2026Page() {
    return (
        <article className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
            {/* Hero Header */}
            <header className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
                        Special Career Column
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                        2026年の分かれ道：
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                            AIに「代替される人」と<br className="hidden md:block" />「価値が暴騰する人」の決定的な違い
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        「AI時代、今の仕事を続けていて、10年後も大丈夫だろうか？」<br />
                        その不安を解消し、市場価値を最大化する新・キャリア戦略を徹底解説。
                    </p>
                </div>
            </header>

            <div className="max-w-3xl mx-auto px-6 mt-12">
                {/* Intro */}
                <div className="prose prose-lg prose-slate mx-auto mb-16">
                    <p className="lead text-xl font-medium text-slate-700">
                        そんな漠然とした不安が、現実のものとなりつつあります。2024年から2025年にかけて、生成AIは「便利なツール」から「業務のインフラ」へと進化しました。かつて、高度な専門知識が必要だったプログラミング、ライティング、データ分析の多くが、今や数秒のプロンプトで完結します。
                    </p>
                    <p>
                        しかし、これは「人間の仕事がなくなる」という単純な話ではありません。実は、キャリアの評価基準が根底から変わっただけなのです。
                        本記事では、AI時代において生存し、かつ市場価値を最大化させるための「新・キャリア戦略」を徹底解説します。
                    </p>
                </div>

                {/* Section 1: 3 Elements */}
                <section className="mb-20">
                    <div className="bg-blue-50/50 rounded-3xl p-8 borber border-blue-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <BrainCircuit className="text-blue-600" />
                            AI時代のキャリア形成に不可欠な3つの要素
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">「スキル」の賞味期限を認識する</h3>
                                    <p className="text-slate-600 text-sm">定型的な知識や技術はAIに代替される。これからは「AIをどう使いこなすか」というメタ・スキルが価値を持つ。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">「責任と意思決定」に特化する</h3>
                                    <p className="text-slate-600 text-sm">AIは正解を出せても、結果に責任は持てない。最後にGOを出す、あるいは顧客の感情を動かす「人間特有の領域」に重心を置く。</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</span>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">「自己OS（認知特性）」の最適化</h3>
                                    <p className="text-slate-600 text-sm">自分の思考の癖（強み）を理解し、それに最適なAIツールを「外骨格」として装着する。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Why Redefine? */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">
                        なぜ今、キャリア戦略を「再定義」しなければならないのか？
                    </h2>
                    <div className="prose prose-lg prose-slate text-slate-600">
                        <p>
                            これまでのキャリア戦略は、山登りに例えられました。「特定のスキルを磨き、その道のプロとして頂上を目指す」という一本道の戦略です。しかし、AIの登場によって、その山自体が地殻変動を起こしています。
                        </p>
                        <p className="font-bold text-slate-800 bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-400">
                            「AIが得意なこと」を必死に練習するのは、F1カーの横で全力疾走の練習をするようなものです。
                        </p>
                        <p>
                            今求められているのは、走る速さではなく「どの車（AI）を選び、どこへ向かうか（戦略）」を決めるドライバーの視点です。この視点を持たないまま「今の業務」に固執することは、キャリアにおける最大の停滞リスクとなります。
                        </p>
                    </div>
                </section>

                {/* Section 3: 3 Pillars */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
                        AI時代を勝ち抜くための「3つの柱」
                    </h2>
                    <div className="grid gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">① コンテクスト読解力（文脈を読み解く力）</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                AIは、与えられた指示に対しては完璧に応えます。しかし、「なぜその仕事が必要なのか？」「クライアントが本当に求めている隠れた望みは何か？」という、行間に眠る<strong className="text-indigo-600">文脈（コンテクスト）</strong>を読み解くことはできません。
                            </p>
                            <p className="text-slate-600 text-sm font-medium">
                                ビジネスの本質的な課題を見つけ出し、AIに適切な「問い」を立てる力こそが、これからの主戦場になります。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">② エモーショナル・インテリジェンス（共感と信頼）</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                どれだけAIが精巧になっても、人は「AIに励まされたい」とは思いません。
                                「あなただから任せたい」「この人の言うことなら信じられる」という、感情的な繋がりと信頼関係の構築。このアナログな領域の価値は、デジタル化が進めば進むほど<strong className="text-pink-600">「希少資産」として暴騰</strong>します。
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">③ 自己OS（認知特性）の活用</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                ここが最も重要です。AIを使いこなすには、まず「自分という道具」の使い道を知る必要があります。
                                自分は論理的にシステムを組むのが得意なのか？
                                それとも、カオスな中から直感的に本質を抜くのが得意なのか？
                            </p>
                            <p className="text-slate-600 text-sm font-medium">
                                自分の<strong className="text-emerald-600">「思考の癖（OS）」</strong>に合ったAIの使い分けができている人は、一人で100人分の成果を出す「拡張型人材」へと変貌します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conclusion 1 */}
                <section className="mb-20 bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            結論：戦略の第一歩は「自分を客観視すること」
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            AI時代におけるキャリア戦略は、新しい知識を詰め込むことから始まるのではありません。「自分は何者で、どの領域でAIとシナジー（相乗効果）を生み出せるのか」を特定することから始まります。
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-10">
                            「144診断」や「AIキャリアタイプ診断」が今、多くのビジネスパーソンに求められているのは、単なる性格診断としての面白さではありません。それが、激動の時代を生き抜くための<strong className="text-white font-bold">「自分専用の取扱説明書」</strong>になるからです。
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
                            <h3 className="font-bold text-lg mb-4 text-white">FAQ：AI時代のキャリア形成</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-sm font-bold text-blue-300 mb-1">Q：文系職ですが、AIに仕事を奪われませんか？</div>
                                    <div className="text-sm text-slate-300">A：むしろチャンスです。AIを操作するのは「言葉」です。文脈を捉え、適切な表現でAIを誘導できる文系的な素養（言語化能力）は、AI時代の最強の武器になります。</div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-blue-300 mb-1">Q：リスキリングは何から始めるべきですか？</div>
                                    <div className="text-sm text-slate-300">A：特定のツールの使い方を覚える前に、まずは「自己分析」を行ってください。自分の特性に合わないスキルを学んでも、AIの進化スピードに追い越されてしまいます。</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link href="/diagnosis">
                                <button className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 mx-auto">
                                    <SparklesIcon className="w-5 h-5" />
                                    あなたの「AI時代生存タイプ」を今すぐ診断する
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200 my-16" />

                {/* Part 2: Pivot */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                        【2026年版】AI時代に「年収が上がる人」の共通点。<br />
                        「キャリアピボット」の成功法則
                    </h2>
                    <div className="prose prose-lg prose-slate text-slate-600 mb-10">
                        <p>
                            「AIに仕事が奪われる」という議論はもう終わりです。2026年現在、私たちが直面しているのは、「AIを使いこなして市場価値を爆上げする人」と「古いスキルに固執して停滞する人」の二極化です。
                            では、その境界線はどこにあるのか？
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12">
                        <h3 className="font-bold text-xl text-slate-900 mb-4">AI時代のキャリア戦略：3つの最重要ポイント</h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">●</span>
                                <span><strong className="text-slate-900">「軸足」のない転向は失敗する：</strong> キャリアピボットの本質は、自分の強み（軸足）を固定し、踏み出す足（環境・市場）を変えること。</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">●</span>
                                <span><strong className="text-slate-900">「非連続の中の連続」を狙う：</strong> 全くの未経験へ飛び込むのではなく、既存スキルを「ポテンシャルの高い巨大市場（製造業DX等）」へ持ち込むのが最短ルート。</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-600 font-bold">●</span>
                                <span><strong className="text-slate-900">AIは「雇うべき部下」：</strong> AIスキルを恐れる必要はない。AIを「面倒な作業を代行してくれる部下」として使いこなし、人間は「意思決定」に特化する。</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. 勘違いだらけの「ピボット」。成功の鍵は「軸足」の固定にある</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                多くの人が「これからはAIの時代だ」と焦り、今のキャリアを捨てて全く新しい分野へ飛び込もうとします。しかし、これを「ただフラフラしているだけ」と一蹴します。
                                バスケットボールのピボットと同じで、片足（軸足）が動いてしまったら反則です。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <div className="text-red-800 font-bold text-sm mb-1">× 間違ったピボット</div>
                                    <div className="text-red-700 text-sm">営業経験を捨てて、ゼロからAIプログラミングを学ぶ。</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                    <div className="text-green-800 font-bold text-sm mb-1">◎ 正しいピボット</div>
                                    <div className="text-green-700 text-sm">培った「課題解決力（軸足）」はそのままに、それを「AI×製造業（新しい市場）」という成長領域で発揮する。</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. 実例：なぜ一流ほど「製造業×AI」という巨大産業を選ぶのか？</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                今、コンサル出身者やITエンジニアがこぞって「製造業DX」の世界へ飛び込んでいます。なぜでしょうか？
                                それは、「日本が世界で勝てる巨大産業」と「AIという劇薬」の掛け合わせが、最も大きなレバレッジ（てこ）を生むからです。
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600">
                                <li><strong className="text-slate-900">図面の解析・知見の継承：</strong> ベテランの頭の中にしかなかった知見をAIがデータ化する。</li>
                                <li><strong className="text-slate-900">車輪の再発明の防止：</strong> 過去のデータをAIが瞬時に検索し、無駄な設計をゼロにする。</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. AIスキルより大切な「AIを雇う」というマインドセット</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                「AIを使えないと置いていかれる」と不安になる必要はありません。車が発明されたことで「足が速い人」より「運転が上手い人」が遠くへ行けるようになったのと同じです。
                                リーダーたちが語るように、これからは<strong className="text-indigo-600">「AIを部下として雇い、複数をマネジメントする」</strong>感覚が重要になります。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Conclusion 2 */}
                <section className="mb-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 md:p-12 rounded-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        結論：あなたの「軸足」はどこにありますか？
                    </h2>
                    <p className="text-indigo-200 leading-relaxed mb-8 max-w-2xl mx-auto">
                        AI時代のキャリア戦略において、最も危険なのは「自分の軸」がわからないまま、変化の波に飲み込まれることです。
                        「自分の強みは何なのか？」この問いに答えられないなら、まずは<strong className="text-white">「客観的な自己分析」</strong>が必要です。
                    </p>

                    <Link href="/diagnosis">
                        <button className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold px-8 py-4 rounded-full transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
                            <Shield className="w-5 h-5" />
                            無料でAIキャリアタイプ診断を受ける
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>

                    <div className="mt-12 text-left bg-white/5 rounded-xl p-6">
                        <h3 className="font-bold text-lg mb-4 text-indigo-300">FAQ：よくある質問</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-bold text-white mb-1">Q：自分のスキルに自信がありません。軸足が見つからない場合は？</div>
                                <div className="text-sm text-indigo-200">A：自分では「当たり前」だと思っていることが、他業界（例えば伝統的な製造業）では「超一流のスキル」として評価されることが多々あります。144診断を通じて、自分では気づかない「無意識の強み」を言語化してください。</div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200 my-16" />

                {/* Part 3: Survival Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
                        【2026年版】会社が守ってくれない時代の生存戦略：<br />AIを「武装」して個人の市場価値を3倍にする方法
                    </h2>
                    <div className="prose prose-lg prose-slate text-slate-600 mb-10">
                        <p>
                            「終身雇用の崩壊」という言葉が使い古された今、2026年の私たちはさらに厳しい現実に直面しています。それは「スキルのコモディティ化」です。
                            昨日まで「プロ」と呼ばれていたスキルの多くが、今や月額数千円のAIサブスクリプションで誰にでも手に入るようになりました。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg text-slate-900 mb-3">あなたは「AIに追われる人」か、<br />それとも「AIを武装する人」か</h3>
                            <p className="text-slate-600 text-sm">
                                多くの人が、「AIに仕事を奪われる」と怯え、AIの進化を後ろから追いかけています。しかし、勝者の戦略は逆です。AIを自分の<strong className="text-blue-600">「外骨格（パワードスーツ）」</strong>として装着し、自らの移動距離を100倍に伸ばすのです。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg text-slate-900 mb-3">AI時代の市場価値を最大化する<br />「掛け算」の法則</h3>
                            <div className="bg-slate-50 p-3 rounded font-mono text-sm text-slate-700 text-center mb-3">
                                市場価値 = (固有の才能 × AIシナジー) × 市場の希少性
                            </div>
                            <p className="text-slate-600 text-sm">
                                AI Synergyが「0」であれば、どんなに才能があっても価値は1倍のままです。逆に、才能が平凡でもAIとの相性が「10」であれば、市場価値は爆発的に高まります。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        AI時代、最大の贅沢は「自分らしく働くこと」
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                        AIは、私たちから「単調な労働」を奪ってくれました。それは裏を返せば、<strong className="text-white">「人間にしかできない、クリエイティブで、意思決定を伴う、自分らしい仕事」</strong>に集中せざるを得ない時代が来たことを意味します。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/diagnosis">
                            <button className="px-10 py-5 bg-white text-blue-700 font-bold text-xl rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3">
                                あなたの「AIキャリア診断」を診断する
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-blue-200">
                        所要時間：約3分 | 完全無料 | 診断結果は即時表示
                    </p>
                </section>

                <MeikoCareerAffiliate />
            </div>
        </article>
    );
}

function SparklesIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
    );
}
