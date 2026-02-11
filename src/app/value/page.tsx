"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, TrendingUp, DollarSign, Euro, Sparkles, Globe, ShieldCheck, Calendar, Zap } from "lucide-react";
import { whiskies, Whisky } from "@/lib/data";
import { globalWhiskies } from "@/lib/global-data";
import { whiskyPool } from "@/lib/whisky-pool";
import { isSameWhisky } from "@/lib/whisky-utils";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { WhiskyImage } from "@/components/whisky/WhiskyImage";

const DEFAULT_EX_RATES = {
    USD: 1428,
    EUR: 1710,
};

export default function ValueAssessmentPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isAISearching, setIsAISearching] = useState(false);
    const [showGlobal, setShowGlobal] = useState(false);
    const [exRates, setExRates] = useState(DEFAULT_EX_RATES);

    // Fetch real-time exchange rates
    useEffect(() => {
        const fetchRates = async () => {
            try {
                // Using Frankfurter API (Free, no key required)
                // Fetching USD and EUR against KRW
                const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=KRW');
                const usdData = await response.json();

                const eurResponse = await fetch('https://api.frankfurter.app/latest?from=EUR&to=KRW');
                const eurData = await eurResponse.json();

                if (usdData.rates?.KRW && eurData.rates?.KRW) {
                    setExRates({
                        USD: Math.round(usdData.rates.KRW),
                        EUR: Math.round(eurData.rates.KRW)
                    });
                }
            } catch (error) {
                console.error("Failed to fetch exchange rates:", error);
                // Keep default rates on error
            }
        };

        fetchRates();
    }, []);

    // Dynamic Update System: Shows whiskies added today
    const getDailyUpdated = () => {
        const todayStr = new Date().toISOString().split('T')[0];
        // 1. 오늘 날짜로 등록된 위스키 필터링
        const todayAdded = whiskies.filter(w => w.availableDate === todayStr);

        // 2. 만약 오늘 추가된 게 없다면 최신순으로 10개 보여주기 (백업 로직)
        if (todayAdded.length === 0) {
            return [...whiskies]
                .filter(w => w.availableDate)
                .sort((a, b) => new Date(b.availableDate!).getTime() - new Date(a.availableDate!).getTime())
                .slice(0, 10);
        }

        return todayAdded;
    };

    const dailyUnlocked = getDailyUpdated();

    // Use the utility to ensure no duplicates when merging
    const combinedDatabase: Whisky[] = [...whiskies];
    dailyUnlocked.forEach(du => {
        if (!combinedDatabase.some(lw => isSameWhisky(lw.name, du.name || ""))) {
            combinedDatabase.push(du as Whisky);
        }
    });

    const localWhiskies = combinedDatabase.filter(w =>
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.tags?.some((t: string) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const globalResults = globalWhiskies.filter(w =>
        w.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.tags?.some((t: string) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    ).filter(gw => !localWhiskies.some(lw => isSameWhisky(lw.name, gw.name || ""))); // Enhanced duplicate removal

    const allWhiskies = showGlobal ? [...localWhiskies, ...globalResults] : localWhiskies;

    const handleSearch = (val: string) => {
        setSearchTerm(val);
        if (val.trim() !== "" && localWhiskies.length === 0 && !showGlobal) {
            triggerAISearch();
        }
    };

    const triggerAISearch = () => {
        setIsAISearching(true);
        setTimeout(() => {
            setIsAISearching(false);
            setShowGlobal(true);
        }, 1200);
    };

    const formatPrice = (price: number = 0, currency: 'USD' | 'EUR' = 'USD') => {
        const krw = Math.round(price * exRates[currency]);
        return {
            original: `${price}`,
            krw: new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(krw)
        };
    };

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <span className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-[10px] tracking-widest uppercase text-secondary font-bold">
                            Market Insight
                        </span>
                        <div className="flex items-center gap-1 py-1 px-3 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-[10px] tracking-widest uppercase font-bold animate-pulse">
                            <Zap className="w-3 h-3 fill-secondary" />
                            Daily Auto-Update Active
                        </div>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                        위스키 가치 판단
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        <span className="font-bold text-secondary">매일 10종 이상의 신규 위스키 정보가 자동으로 추가</span>됩니다.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto mb-8 sticky top-24 z-20">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-secondary transition-colors duration-300" />
                        <input
                            type="text"
                            placeholder="매일 업데이트되는 글로벌 위스키를 검색하세요..."
                            className="w-full pl-12 pr-24 py-5 bg-white/70 backdrop-blur-xl border border-secondary/20 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all placeholder:text-muted-foreground/60"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            {searchTerm && (
                                <button
                                    onClick={() => { setSearchTerm(""); setShowGlobal(false); }}
                                    className="px-3 py-1 bg-muted rounded-md text-[10px] text-muted-foreground hover:bg-border transition-colors"
                                >
                                    초기화
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Market Rates */}
                    <div className="mt-4 flex justify-between items-center px-4">
                        <div className="flex gap-4 text-[10px] text-muted-foreground font-medium">
                            <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-secondary" /> 1 USD = {exRates.USD.toLocaleString()}원</span>
                            <span className="flex items-center gap-1"><TrendingUp className="w-3 h-3 text-secondary" /> 1 EUR = {exRates.EUR.toLocaleString()}원</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-muted-foreground font-bold flex items-center gap-1">
                                <Globe className="w-3 h-3" /> AI Global Mode
                            </span>
                            <button
                                onClick={() => setShowGlobal(!showGlobal)}
                                className={cn(
                                    "w-10 h-5 rounded-full transition-all relative p-1",
                                    showGlobal ? "bg-secondary" : "bg-muted"
                                )}
                            >
                                <div className={cn(
                                    "w-3 h-3 bg-white rounded-full transition-all",
                                    showGlobal ? "translate-x-5" : "translate-x-0"
                                )} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Daily New Section (Only when not searching) */}
                <AnimatePresence>
                    {!searchTerm && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-20"
                        >
                            <div className="flex items-center gap-3 mb-8 px-4 border-l-4 border-secondary">
                                <Calendar className="w-5 h-5 text-secondary" />
                                <h2 className="font-serif text-2xl font-bold text-primary">오늘의 신규 업데이트 위스키</h2>
                                <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                    {dailyUnlocked.length} Items Unlocked
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {dailyUnlocked.slice(-5).map((whisky) => (
                                    <div
                                        key={whisky.id}
                                        onClick={() => handleSearch(whisky.name)}
                                        className="cursor-pointer group relative bg-white border border-border rounded-xl p-4 hover:border-secondary transition-all"
                                    >
                                        <div className="relative aspect-square mb-3 bg-[#F9F9F4] rounded-lg overflow-hidden">
                                            <WhiskyImage
                                                whisky={whisky}
                                                className="p-4 group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        <div className="text-[10px] text-secondary font-bold uppercase mb-1">{whisky.region}</div>
                                        <div className="text-xs font-bold text-primary truncate">{whisky.name}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* AI Searching Animation */}
                <AnimatePresence>
                    {isAISearching && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex flex-col items-center justify-center py-24 text-center glass-morphism rounded-3xl border border-secondary/20"
                        >
                            <div className="relative w-28 h-28 mb-8">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                    className="absolute inset-0 border-[6px] border-secondary/10 border-t-secondary rounded-full"
                                />
                                <Sparkles className="absolute inset-0 m-auto w-12 h-12 text-secondary animate-bounce" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-primary mb-3 text-glow">VODA가 전 세계 신규 정보를 분석 중입니다</h3>
                            <p className="text-sm text-secondary font-medium tracking-wide">Daily Shot, Whiskybase, TWE 데이터를 실시간 대조 중...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Results Grid */}
                {!isAISearching && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {searchTerm.trim() !== "" && allWhiskies.map((whisky, index) => {
                                const prices = formatPrice(whisky.basePrice, whisky.currency as 'USD' | 'EUR');
                                const isGlobal = whisky.id?.startsWith("g");
                                const isNew = whisky.id?.startsWith("p");
                                return (
                                    <motion.div
                                        key={whisky.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 group"
                                    >
                                        <div className="relative h-64 bg-[#F9F9F4] overflow-hidden">
                                            <WhiskyImage
                                                whisky={whisky}
                                                className="p-8 group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                                                {isNew && (
                                                    <div className="bg-secondary text-primary px-3 py-1 rounded-full text-[10px] font-black shadow-lg uppercase tracking-tighter flex items-center gap-1">
                                                        <Zap className="w-3 h-3" /> NEW DAILY
                                                    </div>
                                                )}
                                                <div className="bg-primary text-secondary px-3 py-1 rounded-full text-[10px] font-bold shadow-lg uppercase tracking-widest">
                                                    {whisky.type}
                                                </div>
                                                {isGlobal && (
                                                    <div className="bg-white/90 backdrop-blur-sm text-primary border border-primary/20 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 shadow-sm">
                                                        <Globe className="w-2 h-2" /> Global DB
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-xs text-secondary font-bold uppercase tracking-widest">{whisky.region}</span>
                                                <ShieldCheck className="w-4 h-4 text-secondary/50" />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-1">
                                                {whisky.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-2 h-10">
                                                {whisky.description || `${whisky.name}은(는) ${whisky.region} 지역을 대표하는 정교한 ${whisky.type} 위스키입니다.`}
                                            </p>

                                            <div className="flex items-center justify-between border-t border-border pt-6">
                                                <div>
                                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1 underline decoration-secondary/30 decoration-2 underline-offset-4">Estimated Value</div>
                                                    <div className="text-2xl font-black text-primary tracking-tight">{prices.krw}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-[10px] text-muted-foreground uppercase mb-1 font-bold">Global Market</div>
                                                    <div className="text-sm font-black flex items-center justify-end gap-1 text-secondary bg-secondary/10 px-2 py-1 rounded">
                                                        {whisky.currency === 'USD' ? <DollarSign className="w-3 h-3" /> : <Euro className="w-3 h-3" />}
                                                        {whisky.basePrice}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                )}

                {/* Empty Search State */}
                {!isAISearching && searchTerm.trim() !== "" && allWhiskies.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-muted/20 border border-border rounded-3xl"
                    >
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                            <Search className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                        <p className="text-xl text-primary font-serif font-bold mb-4">
                            &quot;{searchTerm}&quot;에 대한 지역 검색 결과가 없습니다.
                        </p>
                        {!showGlobal && (
                            <button
                                onClick={triggerAISearch}
                                className="px-10 py-4 bg-primary text-white rounded-xl text-sm font-bold flex items-center gap-3 mx-auto hover:bg-primary/90 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
                            >
                                <Sparkles className="w-5 h-5 text-secondary" />
                                VODA 글로벌 정밀 검색 실행
                            </button>
                        )}
                        <button
                            onClick={() => { setSearchTerm(""); setShowGlobal(false); }}
                            className="mt-8 text-xs text-muted-foreground hover:text-secondary hover:underline transition-all"
                        >
                            검색 초기화 및 다른 위스키 찾기
                        </button>
                    </motion.div>
                )}

                {/* Promotion Section */}
                {!isAISearching && searchTerm && !showGlobal && localWhiskies.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-20 text-center py-10 border-t border-border bg-gradient-to-b from-transparent to-primary/5 rounded-b-3xl"
                    >
                        <button
                            onClick={triggerAISearch}
                            className="text-sm font-bold text-secondary hover:text-primary transition-all flex items-center gap-3 mx-auto bg-white px-6 py-3 rounded-full shadow-md border border-secondary/20"
                        >
                            <Sparkles className="w-4 h-4 fill-secondary" />
                            찾으시는 명백한 가치가 보이지 않나요? VODA로 글로벌 딥스캔
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
