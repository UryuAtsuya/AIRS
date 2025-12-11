'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TypeCard from '../components/TypeCard';
import { airsTypes, AirsType } from './airs';
import { Sparkles, Search, Filter } from 'lucide-react';

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
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full animate-fade-in">

                {/* Dashboard Header */}
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold mb-4 tracking-wider uppercase">
                        <Sparkles size={12} />
                        A.I.R.S. Database
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                        Type <span className="text-gradient-cyber">Dashboard</span>
                    </h1>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        全16タイプの生存戦略データベース。<br />
                        AI時代におけるあなたの「勝ち筋」と「負け筋」を確認してください。
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 sticky top-20 z-40 bg-slate-50/90 backdrop-blur-sm py-4 border-b border-slate-100">

                    {/* Filter Tabs */}
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {groups.map((group) => (
                            <button
                                key={group}
                                onClick={() => setFilterGroup(group)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${filterGroup === group
                                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                                        : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {group}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-auto">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Type name or code..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm w-full md:w-64 placeholder:text-slate-300"
                        />
                    </div>
                </div>

                {/* Types Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                    {filteredTypes.map((type) => (
                        <div key={type.id} className="animate-slide-up" style={{ animationDelay: `${Math.random() * 0.2}s` }}>
                            <TypeCard type={type} />
                        </div>
                    ))}
                </div>

                {filteredTypes.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        <Filter size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-sm font-bold">No types found.</p>
                        <p className="text-xs">Try adjusting your search or filters.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
