import Link from 'next/link';
import { AirsType } from '../../types/airs';
import { Persona } from '../../data/personas';
import { ArrowUpRight, BriefcaseBusiness, Radio, Rocket, ShieldCheck, Users } from 'lucide-react';

type ResultOffersProps = {
  persona: Persona;
  type: AirsType;
};

type OfferProfile = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  body: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  note: string;
  showMeikoBanner?: boolean;
};

const MEIKO_URL = 'https://px.a8.net/svt/ejp?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX';
const MEIKO_IMAGE_URL = 'https://www25.a8.net/svt/bgt?aid=260131679502&wid=002&eno=01&mid=s00000026573001004000&mc=1';
const MEIKO_TRACKING_URL = 'https://www11.a8.net/0.gif?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX';

function getOfferProfile(type: AirsType): OfferProfile {
  const snsTypes = new Set(['ENFP', 'ESFP', 'INFP', 'ISFP']);
  const founderTypes = new Set(['ENTJ', 'ENTP', 'ESTP']);
  const governanceTypes = new Set(['ISTJ', 'ESTJ', 'ESFJ', 'ISFJ']);

  if (snsTypes.has(type.code)) {
    return {
      icon: Radio,
      label: 'SNS / 発信型',
      title: '発信を仕事につなげる設計を先に作る',
      body: 'クリエイター・SNS寄りのタイプは、伸びる投稿よりも「何に誘導するか」が重要です。診断結果を、発信テーマ・商品導線・相談導線に分解して整理しましょう。',
      primaryText: '発信戦略を読む',
      primaryHref: '/articles/career-strategy-2026',
      secondaryText: 'タイプ一覧で比較',
      secondaryHref: '/types',
      note: 'HEROなどのSNS向け案件リンクを入れる場合は、この枠を差し替えます。',
    };
  }

  if (founderTypes.has(type.code)) {
    return {
      icon: Rocket,
      label: '起業 / 経営型',
      title: 'アイデアを事業仮説に変える',
      body: '起業・経営寄りのタイプは、思いつきを増やすより検証対象を絞る方が成果につながります。市場・顧客・収益化の3点で次の一手を整理します。',
      primaryText: 'キャリア戦略を読む',
      primaryHref: '/articles/career-strategy-2026',
      secondaryText: '相談する',
      secondaryHref: '/contact',
      note: '経営者コミュニティや起業支援サービスのリンクを入れる候補枠です。',
    };
  }

  if (governanceTypes.has(type.code)) {
    return {
      icon: ShieldCheck,
      label: '安定 / 実務型',
      title: 'AI時代の実務価値を職務経歴に変換する',
      body: '管理・品質・信頼構築に強いタイプは、実績の見せ方で評価が変わります。AI活用、監査、現場導入の経験として言語化しておくと次の選択肢が広がります。',
      primaryText: '転職相談を見る',
      primaryHref: MEIKO_URL,
      secondaryText: '自己分析を読む',
      secondaryHref: '/about',
      note: '技術職・実務職の転職相談向け広告を表示しています。',
      showMeikoBanner: true,
    };
  }

  return {
    icon: BriefcaseBusiness,
    label: '技術 / 戦略型',
    title: 'AI活用経験を市場価値として見せる',
    body: '技術・戦略寄りのタイプは、スキル単体より「AIで何を変えたか」を言語化するほど評価されます。診断結果をもとに職務経歴や次の学習テーマを整理できます。',
    primaryText: '転職相談を見る',
    primaryHref: MEIKO_URL,
    secondaryText: 'キャリア戦略を読む',
    secondaryHref: '/articles/career-strategy-2026',
    note: '技術職の転職支援に強いサービスを掲載しています。',
    showMeikoBanner: true,
  };
}

function ActionLink({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}) {
  const isExternal = href.startsWith('http');
  const className =
    variant === 'primary'
      ? 'inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800'
      : 'inline-flex items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-[var(--paper-soft)]';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="nofollow noopener noreferrer" className={className}>
        {children}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export default function ResultOffers({ persona, type }: ResultOffersProps) {
  const profile = getOfferProfile(type);
  const Icon = profile.icon;

  return (
    <section className="mx-auto max-w-6xl overflow-hidden px-6 py-12">
      <div className="grid min-w-0 gap-6 rounded-[30px] border bg-white p-6 shadow-[0_18px_42px_rgba(46,39,28,0.08)] lg:grid-cols-[1fr_0.72fr] lg:p-8">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-lg border bg-[var(--paper-soft)] px-3 py-2 text-xs font-black text-slate-700">
            <Icon className="h-4 w-4 text-[var(--accent)]" />
            {profile.label}
          </div>
          <h2 className="mt-5 max-w-2xl break-words text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-[#5d6d74] md:text-base">
            {profile.body}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border bg-[var(--paper-warm)] p-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#879299]">診断タイプ</div>
              <div className="mt-2 break-words text-lg font-black text-slate-950">
                {persona.code} / {persona.catchphrase}
              </div>
            </div>
            <div className="rounded-[22px] border bg-[var(--paper-warm)] p-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#879299]">導線メモ</div>
              <div className="mt-2 break-words text-sm font-semibold leading-7 text-slate-700">{profile.note}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={profile.primaryHref} variant="primary">
              {profile.primaryText}
            </ActionLink>
            <ActionLink href={profile.secondaryHref} variant="secondary">
              {profile.secondaryText}
            </ActionLink>
          </div>
        </div>

        <aside className="min-w-0 rounded-[26px] border bg-[var(--paper-soft)] p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
              <Users className="h-5 w-5 text-[var(--accent)]" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-950">次の行動に変換</div>
              <div className="text-xs font-semibold text-[#6f7d97]">診断後の離脱を減らすCTA枠</div>
            </div>
          </div>

          {profile.showMeikoBanner && (
            <div className="mt-5 rounded-[22px] border bg-white p-4">
              <a href={MEIKO_URL} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex rounded-lg border bg-[#fbfaf7] p-2">
                <img width="100" height="60" alt="メイコーキャリア" src={MEIKO_IMAGE_URL} className="border-0" />
              </a>
              <img width="1" height="1" src={MEIKO_TRACKING_URL} alt="" className="absolute border-0" />
              <p className="mt-3 text-sm leading-7 text-[#5d6d74]">
                診断結果をもとに、経験・希望・次の環境を整理して相談したい方向けの案内です。
              </p>
            </div>
          )}

          {!profile.showMeikoBanner && (
            <div className="mt-5 rounded-[22px] border bg-white p-4">
              <div className="text-sm font-black text-slate-950">広告リンク候補</div>
              <p className="mt-3 text-sm leading-7 text-[#5d6d74]">
                このタイプ群は、SNS支援・起業支援・コミュニティ導線との相性が高い枠です。実URL確定後に差し替えます。
              </p>
            </div>
          )}

          <p className="mt-4 text-xs leading-6 text-[#879299]">
            ※ 掲載リンクには広告・アフィリエイトを含む場合があります。診断結果はキャリア検討の参考情報です。
          </p>
        </aside>
      </div>
    </section>
  );
}
