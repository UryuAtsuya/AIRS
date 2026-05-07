'use client';

import React, { useState } from 'react';
import Footer from '../components/Footer';
import TypeCard from '../components/TypeCard';
import { airsTypes } from './airs';
import { Filter, Search, Sparkles } from 'lucide-react';

export default function TypesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterGroup, setFilterGroup] = useState<string>("All");

    const filteredTypes = airsTypes.filter(type => {
        const matchesSearch = type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            type.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            type.aiPhrase.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGroup = filterGroup === "All" || type.group === filterGroup;
        return matchesSearch && matchesGroup;
    });

    const groups = ["All", "Analysts", "Diplomats", "Sentinels", "Explorers"];

    return (
        <div className="page-shell flex min-h-screen flex-col">
            <main className="mx-auto w-full max-w-7xl flex-grow px-6 py-12">
                <div className="mb-12 max-w-3xl">
                    <div className="eyebrow">
                        <Sparkles size={14} />
                        A.I.R.S. Database
                    </div>
                    <h1 className="mt-5 text-4xl font-black text-[var(--foreground)] md:text-5xl">
                        16タイプのキャリア戦略を見る
                    </h1>
                    <p className="mt-4 text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                        全タイプの強み、注意点、AI時代の役割を横断して確認できます。診断前の比較にも、結果の読み直しにも使えます。
                    </p>
                </div>

                <div className="sticky top-20 z-40 mb-10 flex flex-col gap-4 border-y border-[var(--line)] bg-[#f7f3ea]/92 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
                    <div className="no-scrollbar flex w-full gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
                        {groups.map((group) => (
                            <button
                                key={group}
                                onClick={() => setFilterGroup(group)}
                                className={`whitespace-nowrap rounded-md px-4 py-2 text-xs font-black transition-all ${filterGroup === group
                                    ? 'bg-[var(--foreground)] text-white shadow-[0_12px_24px_rgba(24,35,43,0.14)]'
                                    : 'border border-[var(--line)] bg-white/86 text-[var(--ink-soft)] hover:bg-[var(--paper-soft)]'
                                    }`}
                            >
                                {group}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--ink-muted)]" size={16} />
                        <input
                            type="text"
                            placeholder="タイプ名・コードで検索"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-md border border-[var(--line)] bg-white/90 py-2.5 pl-10 pr-4 text-sm transition-all placeholder:text-[var(--ink-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-4 focus:ring-[#d7e5e2] md:w-72"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredTypes.map((type) => (
                        <TypeCard key={type.id} type={type} />
                    ))}
                </div>

                {filteredTypes.length === 0 && (
                    <div className="py-20 text-center text-[var(--ink-muted)]">
                        <Filter size={48} className="mx-auto mb-4 opacity-30" />
                        <p className="text-sm font-black">一致するタイプが見つかりませんでした。</p>
                        <p className="mt-2 text-xs">検索語かフィルターを変えてください。</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
