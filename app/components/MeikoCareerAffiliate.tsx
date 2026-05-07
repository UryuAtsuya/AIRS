'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function MeikoCareerAffiliate() {
    return (
        <div className="mx-auto my-12 w-full max-w-4xl overflow-hidden rounded-lg border bg-white shadow-[0_10px_24px_rgba(43,45,48,0.06)]">
            <div className="p-6 md:p-8">
                <div className="flex flex-col items-center gap-7 md:flex-row">
                    <div className="flex-shrink-0">
                        <a
                            href="https://px.a8.net/svt/ejp?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX"
                            rel="nofollow"
                            className="block rounded-lg border bg-[#fbfaf7] p-2"
                        >
                            <img
                                width="100"
                                height="60"
                                alt="メイコーキャリア"
                                src="https://www25.a8.net/svt/bgt?aid=260131679502&wid=002&eno=01&mid=s00000026573001004000&mc=1"
                                className="border-0"
                            />
                        </a>
                        <img width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX" alt="" className="absolute border-0" />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <div className="mb-3 inline-block rounded-lg border bg-[#f4e8df] px-3 py-1 text-xs font-bold text-[#8b5138]">
                            転職相談の案内
                        </div>
                        <h3 className="mb-3 text-xl font-black leading-tight text-[#202a32] md:text-2xl">
                            エンジニアとして次の環境を考えるなら
                        </h3>
                        <p className="mb-6 text-sm leading-7 text-[#65727a] md:text-base">
                            診断結果をきっかけに、経験や希望を整理して相談したい方向けの案内です。技術職の転職支援に強いサービスを掲載しています。
                        </p>

                        <a
                            href="https://px.a8.net/svt/ejp?a8mat=4AVIVZ+8AVN8A+5P1E+5Z6WX"
                            rel="nofollow"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#202a32] px-6 py-3 text-sm font-bold text-white hover:bg-[#11171c]"
                        >
                            詳細を見る
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
