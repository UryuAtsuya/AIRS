import Link from 'next/link';
import Image from 'next/image';
import { AirsType, groupColors } from '../types/airs';
import { Sparkles, ShieldCheck, AlertTriangle } from 'lucide-react';

type TypeCardProps = {
    type: AirsType;
};

export default function TypeCard({ type }: TypeCardProps) {
    const isHighRisk = type.survivalRate < 60;
    const isSafe = type.survivalRate >= 90;

    // Dynamic styles based on survival rate
    const ringColor = isHighRisk ? 'ring-red-100' : isSafe ? 'ring-blue-100' : 'ring-slate-100';
    const badgeColor = isHighRisk ? 'bg-red-50 text-red-600' : isSafe ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-100 text-slate-600';

    // Manual adjustments for character face focus per type
    // Banners are wide, characters are typically on the right side.
    // Adjust percentages (X% Y%) to center mainly on the face/upper body.
    const positionMap: Record<string, string> = {
        // Analysts
        INTJ: '70% 20%', INTP: '50% 15%', ENTJ: '80% 15%', ENTP: '75% 20%',
        // Diplomats
        INFJ: '60% 20%', INFP: '50% 20%', ENFJ: '70% 15%', ENFP: '60% 15%',
        // Sentinels
        ISTJ: '70% 20%', ISFJ: '60% 20%', ESTJ: '80% 20%', ESFJ: '65% 15%',
        // Explorers
        ISTP: '60% 20%', ISFP: '50% 20%', ESTP: '75% 15%', ESFP: '65% 20%',
    };

    const objectPosition = positionMap[type.code] || 'center top';

    return (
        <Link href={`/types/${type.code}`}>
            <div className={`card-soft-cyber p-6 h-full flex flex-col group relative overflow-hidden ring-1 ${ringColor}`}>

                {/* Background Decor */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${groupColors[type.group]}`}>
                        {type.group}
                    </div>
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ${badgeColor}`}>
                        {isHighRisk ? <AlertTriangle size={12} /> : <ShieldCheck size={12} />}
                        <span className="text-xs font-bold">{type.survivalRate}%</span>
                    </div>
                </div>

                {/* Character Image */}
                <div className="flex justify-center mb-4 relative z-10">
                    <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                        <Image
                            src={`/characters/banners_clean/${type.code}.png`}
                            alt={`${type.name} character`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{ objectPosition: objectPosition }}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="mb-4 relative z-10">
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                            {type.code}
                        </h3>
                        <span className="text-xs font-bold text-slate-400">{type.engName}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-600 mb-2">{type.name}</h4>
                    <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
                        {type.aiPhrase}
                    </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                    {type.desc}
                </p>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center relative z-10">
                    <span className="text-[10px] font-bold text-slate-300 group-hover:text-blue-400 transition-colors">
                        DETAILS
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Sparkles size={12} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
