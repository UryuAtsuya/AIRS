import type { Metadata } from 'next';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'お問い合わせ | MBTI.AI',
    description: 'MBTI.AIへのお問い合わせ窓口です。ご質問や掲載内容に関するご連絡を受け付けています。',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900">
            <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
                    <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                        Contact
                    </div>
                    <h1 className="mt-4 text-3xl font-black tracking-tight">お問い合わせ</h1>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        サービスに関するご質問、ご意見、ご要望、掲載内容の修正依頼は、以下のフォームからご連絡ください。
                        内容を確認のうえ、必要に応じて対応します。
                    </p>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <h2 className="text-lg font-bold text-slate-900">Googleフォーム</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            フォームは外部の Google Forms を利用しています。送信前に、入力内容をご確認ください。
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdf-tQyIIKhJ0snO2PYwLQsiEfcrwk2Mj1NkATbi2D_BfS4lA/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
                        >
                            フォームを開く
                        </a>
                    </div>

                    <div className="mt-8 text-xs leading-relaxed text-slate-500">
                        回答内容や個人情報の取り扱いについては、プライバシーポリシーをご確認ください。
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
