import { Terminal, Github, Twitter } from 'lucide-react';

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
                    本サービスはAI時代におけるキャリア適性を独自のアルゴリズムで分析するジョーク/パロディサイトです。<br />
                    診断結果があなたの人生を保証するものではありません。
                </p>

                <div className="flex justify-center gap-6 text-slate-300 mb-8">
                    <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-slate-800 transition-colors"><Github size={20} /></a>
                </div>

                <div className="text-[10px] text-slate-300 tracking-wider">
                    © 2025 A.I.R.S. SURVIVAL STRATEGY.
                </div>
            </div>
        </footer>
    );
}
