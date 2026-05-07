'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Compass,
  FileText,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
} from 'lucide-react';
import Footer from './components/Footer';
import MeikoCareerAffiliate from './components/MeikoCareerAffiliate';

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-tile">
      <div className="text-2xl font-black text-[var(--foreground)]">{value}</div>
      <div className="mt-1 text-xs font-bold text-[var(--ink-soft)]">{label}</div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-black text-[var(--foreground)] md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[var(--ink-soft)] md:text-lg">{description}</p>
    </div>
  );
}

function NoteRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-1 shrink-0 text-[var(--accent)]" size={18} />
      <span className="text-sm leading-7 text-[#415159]">{children}</span>
    </li>
  );
}

function OutputCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="output-card">
      <div className="output-card-icon">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-black text-[var(--foreground)]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <main className="flex-grow">
        <section className="relative min-h-[calc(100svh-72px)] overflow-hidden border-b border-[var(--line)]">
          <Image
            src="/characters/banners_clean/INTJ.png"
            alt="MBTI.AI診断結果のキャラクタービジュアル"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-[#f8fbf7]/76" />
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,#f8fbf7_0%,rgba(248,251,247,0.96)_38%,rgba(248,251,247,0.42)_76%,rgba(248,251,247,0.1)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,#f7f3ea_0%,rgba(247,243,234,0)_100%)]" />

          <div className="section-wrap relative flex min-h-[calc(100svh-72px)] flex-col justify-between py-14 md:py-20">
            <div className="max-w-4xl pt-4 md:pt-10">
              <div className="eyebrow">
                <Sparkles size={15} />
                AI時代の就活キャリア診断
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.12] text-[var(--foreground)] md:text-6xl">
                MBTI.AI
                <span className="mt-3 block text-3xl leading-[1.18] md:text-5xl">
                  自己分析を、ES・面接で使える言葉へ。
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-[#415159]">
                性格タイプをもとに、強み、つまずきやすい場面、AI時代に伸ばしやすい役割を整理します。
                結果は、自己分析、ES、面接、企業選びの下書きとして使える就活レポートです。
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {['自己分析', 'ESの軸', '面接の話し方', '企業選び'].map((item) => (
                  <span key={item} className="signal-chip">{item}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnosis" className="btn-primary px-7 py-4 text-base">
                  診断を始める
                  <ArrowRight size={18} />
                </Link>
                <Link href="/types/INTJ" className="btn-secondary px-7 py-4 text-base">
                  結果例を見る
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-5 pb-2 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div className="grid max-w-xl grid-cols-3 gap-5">
                <Fact label="質問数" value="32問" />
                <Fact label="所要時間" value="3-5分" />
                <Fact label="診断タイプ" value="16" />
              </div>
              <div className="hero-output-strip">
                {[
                  ['Strength', '仕事で出やすい強み'],
                  ['Risk', '面接で補足すべき弱点'],
                  ['Action', '次に試す職種・学習テーマ'],
                ].map(([label, text]) => (
                  <div key={label} className="hero-output-item">
                    <div className="text-[11px] font-black uppercase text-[var(--accent)]">{label}</div>
                    <div className="mt-1 text-sm font-bold leading-6 text-[var(--foreground)]">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="診断の考え方"
              title="就活で聞かれることに、そのまま接続します。"
              description="AIに代替されるかどうかを大げさに煽るのではなく、あなたの考え方と仕事の向き合い方を整理します。結果は、自己PRや志望動機を考えるための下書きとして使えます。"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: '質問に答える',
                  text: '直感で選べる32問。正解を探すより、普段の判断に近い選択を重視します。',
                  icon: ClipboardList,
                },
                {
                  title: '傾向を読む',
                  text: '性格タイプをAI時代の働き方に置き換え、強みと注意点を短く整理します。',
                  icon: Compass,
                },
                {
                  title: '就活の言葉にする',
                  text: '自己PR、面接で話すエピソード、企業選びの軸まで落とし込みます。',
                  icon: Lightbulb,
                },
              ].map(({ title, text, icon: Icon }) => (
                <div key={title} className="ui-panel rounded-lg p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-white/45 py-16 md:py-20">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="結果でわかること"
              title="タイプ名だけで終わらせません。"
              description="読み物として気持ちよく読めて、あとから見返しても使える粒度にしています。"
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['自己PRの材料', '無理に盛らず、仕事で出やすい強みを具体的に整理します。'],
                ['面接での注意点', '弱みに聞こえやすい傾向を先に知り、補足の仕方まで書きます。'],
                ['AIとの距離感', '任せること、任せないこと、補助に使うことを分けて考えます。'],
                ['企業選びの軸', '向いている環境や避けたい働き方を現実的に提案します。'],
              ].map(([title, text]) => (
                <div key={title} className="ui-panel rounded-lg p-5">
                  <h3 className="text-base font-black text-[var(--foreground)]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="就活アウトプット"
              title="診断結果を、応募前の準備に変換する。"
              description="AIRSは性格診断だけで完結させず、次のアクションに使える形まで整理します。"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <OutputCard
                icon={GraduationCap}
                title="自己分析"
                text="強み、判断のクセ、モチベーションが上がる環境を短く言語化します。"
              />
              <OutputCard
                icon={FileText}
                title="ESの下書き"
                text="自己PRで使いやすい表現と、エピソード選びの方向性を出します。"
              />
              <OutputCard
                icon={UserCheck}
                title="面接対策"
                text="強みの伝え方、弱みの補足、深掘り質問への備えを整理します。"
              />
              <OutputCard
                icon={BriefcaseBusiness}
                title="職種選び"
                text="相性の良い役割、避けたい環境、最初に調べる業界を提示します。"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="ui-panel rounded-lg p-6">
              <div className="flex items-center gap-3 border-b border-[var(--line)] pb-4">
                <MessageCircle className="text-[var(--warm)]" size={22} />
                <div className="text-sm font-black text-[var(--foreground)]">レポートの読み心地</div>
              </div>
              <ul className="mt-6 space-y-4">
                <NoteRow>専門用語を並べすぎず、自分の状況に置き換えやすい言葉で書きます。</NoteRow>
                <NoteRow>「あなたはこうです」と決めつけず、傾向として読める表現にしています。</NoteRow>
                <NoteRow>不安だけで終わらず、明日試せる小さな行動まで入れています。</NoteRow>
              </ul>
            </div>

            <div>
              <div className="eyebrow">
                <ShieldCheck size={16} />
                無料で診断できます
              </div>
              <h2 className="mt-5 text-3xl font-black text-[var(--foreground)] md:text-4xl">
                まずは今の強みを、就活で話せる言葉にしてみる。
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                結果はその場で表示されます。個人情報の入力は不要です。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnosis" className="btn-primary px-8 py-4 text-base">
                  診断を始める
                </Link>
                <Link href="/types" className="btn-secondary px-8 py-4 text-base">
                  タイプ一覧を見る
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [BarChart3, '診断結果はレーダーと文章で確認'],
                  [Target, '次に試す行動まで提示'],
                ].map(([Icon, text]) => {
                  const TypedIcon = Icon as React.ComponentType<{ size?: number }>;
                  return (
                    <div key={text as string} className="flex items-center gap-3 rounded-lg border border-[var(--line)] bg-white/72 p-4">
                      <TypedIcon size={19} />
                      <span className="text-sm font-bold leading-6 text-[var(--foreground)]">{text as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="section-wrap pb-8">
          <MeikoCareerAffiliate />
        </div>
      </main>

      <Footer />
    </div>
  );
}
