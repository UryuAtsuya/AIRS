import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-16 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <div className="flex justify-center items-center gap-3 mb-6 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                        <Terminal size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-400">Powered by A.I.R.S. Algorithm</span>
                </div>

                <p className="text-slate-400 text-xs mb-8 max-w-lg mx-auto leading-relaxed">
                    本サービスは、AI時代におけるキャリアの自己分析と情報収集を支援する診断サービスです。<br />
                    診断結果はキャリア検討の参考情報としてご活用ください。
                </p>

                <div className="mb-8">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
                    >
                        お問い合わせ
                    </Link>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-5 text-xs font-bold text-slate-400">
                    <Link href="/about" className="hover:text-blue-600 transition-colors">運営方針</Link>
                    <Link href="/privacy" className="hover:text-blue-600 transition-colors">プライバシーポリシー</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">お問い合わせ</Link>
                    <Link href="/articles/career-strategy-2026" className="hover:text-blue-600 transition-colors">記事</Link>
                </div>

                <div className="text-[10px] text-slate-300 tracking-wider">
                    © 2025 A.I.R.S. SURVIVAL STRATEGY.
                </div>
            </div>
        </footer>
    );
}
