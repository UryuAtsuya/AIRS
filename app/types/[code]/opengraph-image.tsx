import { ImageResponse } from 'next/og';
import { airsTypes } from '../airs';
import { getPersona } from '../../data/personas';

export const alt = 'AI時代キャリア診断 結果';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
    return airsTypes.map((type) => ({ code: type.code }));
}

const GROUP_COLORS: Record<string, { bg: string; accent: string; label: string }> = {
    Analysts:  { bg: '#1e1b4b', accent: '#a78bfa', label: '分析家' },
    Diplomats: { bg: '#064e3b', accent: '#34d399', label: '外交官' },
    Sentinels: { bg: '#1e3a5f', accent: '#60a5fa', label: '番人' },
    Explorers: { bg: '#3b2000', accent: '#fbbf24', label: '探検家' },
};

export default async function Image({ params }: { params: Promise<{ code: string }> }) {
    const { code } = await params;
    const typeCode = code.toUpperCase();
    const type = airsTypes.find((t) => t.code === typeCode);
    const persona = getPersona(typeCode);

    if (!type || !persona) {
        return new ImageResponse(<div>Not Found</div>, size);
    }

    const colors = GROUP_COLORS[type.group] ?? GROUP_COLORS.Analysts;
    const survivalRate = persona.survivalRate;
    const rateColor =
        survivalRate >= 80 ? '#34d399' :
        survivalRate >= 50 ? '#fbbf24' : '#f87171';

    return new ImageResponse(
        (
            <div
                style={{
                    width: '1200px',
                    height: '630px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: colors.bg,
                    padding: '60px',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* 背景装飾 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-100px',
                        right: '-100px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${colors.accent}33 0%, transparent 70%)`,
                    }}
                />

                {/* ヘッダー */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                        style={{
                            display: 'flex',
                            padding: '8px 20px',
                            borderRadius: '999px',
                            border: `1px solid ${colors.accent}66`,
                            backgroundColor: `${colors.accent}22`,
                            color: colors.accent,
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                        }}
                    >
                        A.I.R.S. TYPE : {type.code}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            padding: '8px 20px',
                            borderRadius: '999px',
                            backgroundColor: '#ffffff11',
                            color: '#ffffff88',
                            fontSize: '14px',
                        }}
                    >
                        {colors.label}
                    </div>
                </div>

                {/* メインコンテンツ */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', color: '#ffffffaa', fontSize: '22px', fontWeight: 600 }}>
                        AI時代の{persona.nameJa}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            color: '#ffffff',
                            fontSize: '50px',
                            fontWeight: 900,
                            lineHeight: 1.1,
                        }}
                    >
                        {persona.catchphrase}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            color: '#ffffffcc',
                            fontSize: '18px',
                            maxWidth: '680px',
                            lineHeight: 1.5,
                        }}
                    >
                        {persona.empathyPoint}
                    </div>
                </div>

                {/* フッター */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', color: '#ffffff55', fontSize: '12px', letterSpacing: '0.2em', marginBottom: '4px' }}>
                            AI SURVIVAL RATE
                        </div>
                        <div style={{ display: 'flex', color: rateColor, fontSize: '72px', fontWeight: 900, lineHeight: 1 }}>
                            {survivalRate}%
                        </div>
                    </div>
                    <div style={{ display: 'flex', color: '#ffffff44', fontSize: '16px' }}>
                        ai-career-type.com
                    </div>
                </div>
            </div>
        ),
        size
    );
}
