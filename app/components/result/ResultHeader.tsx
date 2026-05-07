'use client';

import { Persona } from '../../data/personas';
import { RefreshCw, Share2, Twitter } from 'lucide-react';

type ResultHeaderProps = {
  persona: Persona;
  onRetake?: () => void;
  showRetakeButton?: boolean;
  survivalRate?: number;
};

export default function ResultHeader({
  persona,
  onRetake,
  showRetakeButton = false,
  survivalRate,
}: ResultHeaderProps) {
  const canonicalUrl = `https://ai-career-type.com/types/${persona.code}`;
  const shareText = `【MBTI.AI 診断結果】私のタイプは「${persona.catchphrase}」(${persona.code})でした。 #AIRS診断 #AIキャリア`;

  const handleXShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(canonicalUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShare = async () => {
    const shareData = {
      title: `AI時代の最適キャリア診断: ${persona.code}`,
      text: shareText,
      url: canonicalUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    handleXShare();
  };

  return (
    <section className="overflow-hidden border-b bg-white/88">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="min-w-0 rounded-[30px] surface-card p-7 md:p-8">
          <div className="inline-flex rounded-full accent-chip px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em]">
            Your Type
          </div>
          <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8fa0bd]">
            TYPE {persona.code}
          </div>
          <h1 className="mt-3 break-words text-4xl font-black leading-[1.06] tracking-tight text-slate-950 md:text-6xl">
            {persona.catchphrase}
          </h1>
          <p className="mt-4 max-w-2xl break-words text-base leading-8 text-[#6f7d97] md:text-lg">
            {persona.nameJa}タイプとしての特性をもとに、AI時代における強みと注意点を整理しました。
          </p>

          <div className="mt-6 min-w-0 rounded-[24px] border bg-[var(--paper-soft)] p-5">
            <div className="text-sm font-black text-slate-900">このタイプの軸</div>
            <p className="mt-3 break-words text-sm leading-7 text-[#6f7d97]">{persona.empathyPoint}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {showRetakeButton && onRetake && (
              <button
                onClick={onRetake}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-[var(--paper-soft)]"
              >
                <RefreshCw size={16} />
                再診断
              </button>
            )}
            <button
              onClick={handleXShare}
              className="inline-flex items-center gap-2 rounded-full bg-[#5b8def] px-5 py-3 text-sm font-bold text-white hover:bg-[#3d74e8]"
            >
              <Twitter size={16} />
              Xでシェア
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-[var(--paper-soft)]"
            >
              <Share2 size={16} />
              シェア
            </button>
          </div>
        </div>

        <div className="min-w-0 rounded-[30px] bg-[#5b8def] p-7 text-white shadow-[0_26px_60px_rgba(91,141,239,0.24)]">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">Share Preview</div>
          <div className="mt-4 rounded-[24px] border border-white/18 bg-white/10 p-5">
            <div className="text-sm font-semibold text-white/75">結果カード</div>
            <div className="mt-2 break-words text-3xl font-black leading-tight">
              {persona.code} / {persona.catchphrase}
            </div>
            <p className="mt-4 break-words text-sm leading-7 text-white/85">{persona.strategyMessage}</p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/18 bg-white/10 p-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">共有の中心</div>
              <p className="mt-2 text-sm leading-7 text-white/85">
                タイプ名とキャッチコピーが一目で伝わる構成です。
              </p>
            </div>
            <div className="rounded-[22px] border border-white/18 bg-white/10 p-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/65">生存率の目安</div>
              <div className="mt-2 text-3xl font-black">{survivalRate ?? persona.survivalRate}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
