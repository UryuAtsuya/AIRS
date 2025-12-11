'use client';

import { useEffect, useRef } from 'react';

type AdUnitProps = {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
};

export default function AdUnit({ slotId, format = 'auto', className = '' }: AdUnitProps) {
    const adInit = useRef(false);

    useEffect(() => {
        if (adInit.current) return;
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adInit.current = true;
        } catch (err) {
            console.error('AdSense error', err);
        }
    }, []);

    if (process.env.NODE_ENV === 'development') {
        return (
            <div className={`w-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-bold min-h-[100px] ${className}`}>
                AdSpace (Slot: {slotId})
            </div>
        )
    }

    return (
        <div className={`overflow-hidden ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with real ID or use Context
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
