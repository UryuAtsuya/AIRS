'use client';

import Script from 'next/script';

export default function AdConfig() {
    return (
        <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8206190214868370"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}
