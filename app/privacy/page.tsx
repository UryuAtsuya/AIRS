import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'プライバシーポリシー | MBTI.AI',
    description: 'MBTI.AIにおける個人情報の取り扱い、アクセス解析、広告配信に関する方針を掲載しています。',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
            <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        Privacy Policy
                    </div>
                    <h1 className="mt-4 text-3xl font-black tracking-tight">プライバシーポリシー</h1>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        MBTI.AI（以下、「当サイト」）では、利用状況の把握とサービス品質向上のため、アクセス解析や広告配信に関する情報を取り扱います。
                        本ページでは、その基本方針を定めます。
                    </p>

                    <div className="mt-8 space-y-8 text-sm leading-relaxed text-slate-600">
                        <section>
                            <h2 className="text-lg font-bold text-slate-900">1. 取得する情報</h2>
                            <p className="mt-2">
                                当サイトでは、アクセス解析やお問い合わせ対応のために、ブラウザ情報、参照元、閲覧ページ、送信されたお問い合わせ内容などを取得する場合があります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-slate-900">2. アクセス解析について</h2>
                            <p className="mt-2">
                                当サイトでは、サイト改善のために Google Analytics を利用しています。Google Analytics はトラフィックデータ収集のために Cookie を利用することがあります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-slate-900">3. 広告配信について</h2>
                            <p className="mt-2">
                                当サイトは、今後 Google AdSense などの第三者配信広告サービスを利用する場合があります。
                                広告配信事業者は、ユーザーの興味に応じた広告を表示するために Cookie を使用することがあります。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-slate-900">4. お問い合わせについて</h2>
                            <p className="mt-2">
                                お問い合わせフォームから提供いただいた情報は、回答や必要なご連絡のために利用し、それ以外の目的では利用しません。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-slate-900">5. ポリシーの見直し</h2>
                            <p className="mt-2">
                                本ポリシーは、法令やサービス内容の変更に応じて見直すことがあります。最新の内容は本ページに掲載します。
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 text-xs text-slate-500">
                        ご不明点がある場合は、<Link href="/contact" className="font-bold text-blue-600 hover:underline">お問い合わせページ</Link>からご連絡ください。
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
