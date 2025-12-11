import Link from 'next/link';
import { Sparkles, Terminal } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                        <Sparkles size={20} fill="white" className="animate-pulse" />
                    </div>
                    <div>
                        <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">MBTI.AI</span>
                        <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Career Optimization</span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                        診断トップ
                    </Link>
                    <Link href="/types" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                        タイプ一覧
                    </Link>
                    <Link href="/about" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                        MBTI.AIとは
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="md:hidden">
                    <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
                        <div className="w-6 h-0.5 bg-slate-800 rounded-full"></div>
                        <div className="w-4 h-0.5 bg-slate-800 rounded-full ml-auto"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
