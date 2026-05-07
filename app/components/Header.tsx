import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#fcf8ef]/92 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
                <Link href="/" className="group">
                    <div className="text-xl font-black text-[var(--foreground)]">MBTI.AI</div>
                    <div className="text-[10px] font-semibold text-[var(--ink-muted)]">
                        AI時代のキャリア診断
                    </div>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="/" className="text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--accent-strong)]">
                        診断トップ
                    </Link>
                    <Link href="/types" className="text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--accent-strong)]">
                        タイプ一覧
                    </Link>
                    <Link href="/about" className="text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--accent-strong)]">
                        MBTI.AIとは
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold text-[var(--ink-soft)] hover:text-[var(--accent-strong)]">
                        お問い合わせ
                    </Link>
                </nav>

                <Link
                    href="/diagnosis"
                    className="btn-primary px-4 py-2.5 text-sm sm:px-5"
                >
                    <span className="hidden sm:inline">診断を始める</span>
                    <span className="sm:hidden">診断</span>
                    <ArrowRight size={16} />
                </Link>
            </div>
        </header>
    );
}
