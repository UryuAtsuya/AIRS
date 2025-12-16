'use client';

import { useEffect, useRef } from 'react';

type AdUnitProps = {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    className?: string;
};

export default function AdUnit({ slotId, format = 'auto', className = '' }: AdUnitProps) {
    const adInit = useRef(false);
    const insRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        // Skip in development
        if (process.env.NODE_ENV === 'development') return;

        // Skip if already initialized
        if (adInit.current) return;

        // Check if the ins element already has ads
        if (insRef.current && insRef.current.getAttribute('data-adsbygoogle-status')) {
            return;
        }

        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            adInit.current = true;
        } catch (err) {
            console.error('AdSense error', err);
        }

        // Cleanup function
        return () => {
            adInit.current = false;
        };
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
                ref={insRef}
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8206190214868370"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
}
