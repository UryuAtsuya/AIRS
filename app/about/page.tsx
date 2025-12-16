import Link from 'next/link';
import { Sparkles, BrainCircuit, ShieldAlert, Rocket, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12 animate-fade-in">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold mb-4 tracking-wider uppercase">
                        <Sparkles size={12} />
                        About A.I.R.S.
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                        AI時代を生き抜くための<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            キャリア防衛システム
                        </span>
                    </h1>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        AIの進化は止まりません。あなたの仕事が5年後に存在するか、誰も保証できません。<br />
                        MBTI.AIは、あなたの性格特性を分析し、AI時代における「生存戦略」を提示します。
                    </p>
                </div>

                {/* Mission */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <ShieldAlert size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">リスクの可視化</h3>
                        <p className="text-sm text-slate-500">あなたの性格特性において、AIに代替されやすい「脆弱性」を特定します。</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <BrainCircuit size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">適性の再定義</h3>
                        <p className="text-sm text-slate-500">AIには模倣できない、あなただけの「人間的価値」を発掘します。</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Rocket size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">生存戦略の提示</h3>
                        <p className="text-sm text-slate-500">今の職場でどう振る舞うべきか、あるいは新しいフィールドへ進むべきか、具体的なロードマップを示します。</p>
                    </div>
                </div>

                {/* About Tool */}
                <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[2rem] relative overflow-hidden mb-20">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold mb-4">A.I.R.S. (AI Response Strategy) とは？</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            従来のMBTI（16タイプ性格診断）をベースに、生成AIの特性データセットを掛け合わせた独自の分析アルゴリズムです。<br />
                            単なる性格診断ではなく、「対AI」という観点から、あなたのキャリアの堅牢性を評価します。
                        </p>
                        <div className="p-4 bg-white/10 rounded-xl border border-white/10 text-sm text-slate-200">
                            ※本サービスはMBTIの理論を参考にしていますが、公式のMBTI®診断とは異なります。エンターテインメントおよびキャリア考察の一助としてご利用ください。
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link href="/diagnosis" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                        今すぐ診断する
                        <ArrowRight size={18} />
                    </Link>
                </div>

            </main>

            <Footer />
        </div>
    );
}
