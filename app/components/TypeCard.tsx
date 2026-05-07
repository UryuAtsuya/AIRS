import Link from 'next/link';
import Image from 'next/image';
import { AirsType, groupColors } from '../types/airs';
import { ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

type TypeCardProps = {
    type: AirsType;
};

export default function TypeCard({ type }: TypeCardProps) {
    const isHighRisk = type.survivalRate < 60;
    const isSafe = type.survivalRate >= 90;
    const badgeColor = isHighRisk
        ? 'bg-red-50 text-red-700 border-red-100'
        : isSafe
            ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)] border-[#b9d8d5]'
            : 'bg-[var(--blue-soft)] text-[var(--blue)] border-[#c7d5ea]';

    const positionMap: Record<string, string> = {
        INTJ: '70% 20%', INTP: '50% 15%', ENTJ: '80% 15%', ENTP: '75% 20%',
        INFJ: '60% 20%', INFP: '50% 20%', ENFJ: '70% 15%', ENFP: '60% 15%',
        ISTJ: '70% 20%', ISFJ: '60% 20%', ESTJ: '80% 20%', ESFJ: '65% 15%',
        ISTP: '60% 20%', ISFP: '50% 20%', ESTP: '75% 15%', ESFP: '65% 20%',
    };

    const objectPosition = positionMap[type.code] || 'center top';

    return (
        <Link href={`/types/${type.code}`} className="group block h-full">
            <article className="type-card flex h-full flex-col overflow-hidden rounded-lg">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--line)] bg-[var(--paper-soft)]">
                    <Image
                        src={`/characters/banners_clean/${type.code}.png`}
                        alt={`${type.name} character`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition }}
                    />
                    <div className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/86 px-3 py-1 text-[10px] font-black uppercase text-[#33424a] backdrop-blur">
                        {type.group}
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-black text-[var(--foreground)]">
                                    {type.code}
                                </h3>
                                <span className="text-xs font-bold text-[var(--ink-muted)]">{type.engName}</span>
                            </div>
                            <h4 className="mt-1 text-sm font-bold text-[var(--ink-soft)]">{type.name}</h4>
                        </div>
                        <div className={`flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1 ${badgeColor}`}>
                            {isHighRisk ? <AlertTriangle size={12} /> : <ShieldCheck size={12} />}
                            <span className="text-xs font-black">{type.survivalRate}%</span>
                        </div>
                    </div>

                    <div className={`mt-4 w-fit rounded-md px-3 py-1 text-[10px] font-black uppercase ${groupColors[type.group]}`}>
                        {type.aiPhrase}
                    </div>

                    <p className="mt-4 line-clamp-3 flex-grow text-xs leading-6 text-[var(--ink-soft)]">
                        {type.desc}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                        <span className="text-[10px] font-black text-[var(--ink-muted)]">
                            REPORT
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent)] text-white transition-transform group-hover:translate-x-0.5">
                            <ArrowRight size={14} />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
