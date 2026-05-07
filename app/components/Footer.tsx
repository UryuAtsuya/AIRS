import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-[var(--line)] bg-[#fcf8ef] py-14">
            <div className="mx-auto max-w-7xl px-6 text-center">

                <div className="mb-6 flex items-center justify-center gap-3 text-[var(--ink-soft)]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                        <BookOpen size={16} />
                    </div>
                    <span className="text-sm font-bold">MBTI.AI 編集部</span>
                </div>

                <p className="mx-auto mb-8 max-w-lg text-xs leading-relaxed text-[var(--ink-muted)]">
                    本サービスは、AI時代におけるキャリアの自己分析と情報収集を支援する診断サービスです。<br />
                    診断結果はキャリア検討の参考情報としてご活用ください。
                </p>

                <div className="mb-8">
                    <Link
                        href="/contact"
                        className="btn-primary px-6 py-3 text-sm"
                    >
                        お問い合わせ
                    </Link>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-5 text-xs font-bold text-[var(--ink-muted)]">
                    <Link href="/about" className="hover:text-[var(--accent-strong)]">運営方針</Link>
                    <Link href="/privacy" className="hover:text-[var(--accent-strong)]">プライバシーポリシー</Link>
                    <Link href="/contact" className="hover:text-[var(--accent-strong)]">お問い合わせ</Link>
                    <Link href="/articles/career-strategy-2026" className="hover:text-[var(--accent-strong)]">記事</Link>
                </div>

                <div className="text-[10px] text-[var(--ink-muted)]">
                    © 2025 MBTI.AI
                </div>
            </div>
        </footer>
    );
}
