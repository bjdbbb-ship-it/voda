"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { whiskies, Whisky } from "@/lib/data";
import { WhiskyImage } from "@/components/whisky/WhiskyImage";

interface Question {
    id: number;
    question: string;
    key: keyof Whisky["flavorProfile"] | "priceRange" | "region"; // Matching algorithm key
    options: {
        value: string | number;
        label: string;
        description?: string;
        modifier?: number; // For flavor profile adjustment
    }[];
}

const quizQuestions: Question[] = [
    {
        id: 1,
        question: "평소 선호하는 커피 스타일은?",
        key: "body", // Body & Roast association
        options: [
            { value: 2, label: "가벼운 드립 커피", description: "깔끔하고 산뜻한 바디감", modifier: 2 },
            { value: 5, label: "밸런스 잡힌 아메리카노", description: "적당한 무게감과 향", modifier: 5 },
            { value: 8, label: "진한 에스프레소", description: "묵직하고 강렬한 바디감", modifier: 8 },
            { value: 6, label: "달콤한 바닐라 라떼", description: "부드럽고 크리미한 질감", modifier: 6 },
        ],
    },
    {
        id: 2,
        question: "가장 좋아하는 초콜릿 종류는?",
        key: "sweet",
        options: [
            { value: 8, label: "밀크 초콜릿", description: "부드럽고 달콤한 맛", modifier: 8 },
            { value: 4, label: "다크 초콜릿 (70% 이상)", description: "쌉싸름하고 깊은 풍미", modifier: 4 },
            { value: 6, label: "솔티드 카라멜", description: "단짠단짠의 조화", modifier: 6 },
            { value: 3, label: "과일이 든 초콜릿", description: "상큼함이 가미된 맛", modifier: 3 },
        ],
    },
    {
        id: 3,
        question: "캠핑장에서 맡는 장작 타는 냄새를 좋아하시나요?",
        key: "peat",
        options: [
            { value: 9, label: "매우 좋아함", description: "강렬한 스모키향을 즐깁니다", modifier: 9 },
            { value: 5, label: "적당히 좋아함", description: "은은한 훈연향은 괜찮아요", modifier: 5 },
            { value: 1, label: "별로 좋아하지 않음", description: "깔끔하고 향긋한게 좋아요", modifier: 1 },
            { value: 0, label: "전혀 싫음", description: "연기 냄새는 피하고 싶어요", modifier: 0 },
        ],
    },
    {
        id: 4,
        question: "과일 중에서는 어떤 종류를 선호하시나요?",
        key: "fruit",
        options: [
            { value: 8, label: "상큼한 시트러스 (레몬/오렌지)", description: "신선하고 톡 쏘는 느낌", modifier: 8 },
            { value: 7, label: "달콤한 열대과일 (파인애플/망고)", description: "진하고 풍부한 과즙", modifier: 7 },
            { value: 6, label: "잘 익은 붉은 과일 (사과/베리)", description: "은은한 단맛과 산미", modifier: 6 },
            { value: 2, label: "과일보다는 견과류/곡물", description: "고소한 맛을 선호", modifier: 2 },
        ],
    },
    {
        id: 5,
        question: "음식에 향신료(후추, 계피 등)를 즐기는 편인가요?",
        key: "spice",
        options: [
            { value: 8, label: "강한 향신료를 즐김", description: "자극적이고 화려한 맛", modifier: 8 },
            { value: 5, label: "적당한 포인트만", description: "음식의 풍미를 돋우는 정도", modifier: 5 },
            { value: 2, label: "순한 맛이 좋음", description: "재료 본연의 맛 중시", modifier: 2 },
        ],
    },
    {
        id: 6,
        question: "위스키 한 병에 지출할 수 있는 예산은?",
        key: "priceRange",
        options: [
            { value: "budget", label: "입문용 (5~10만원)", description: "가성비 좋은 데일리 위스키" },
            { value: "mid", label: "중급용 (10~20만원)", description: "확실한 개성과 퀄리티" },
            { value: "premium", label: "고급용 (20~40만원)", description: "특별한 날을 위한 선택" },
            { value: "luxury", label: "최고급 (40만원 이상)", description: "최상의 경험과 소장 가치" },
        ],
    },
    {
        id: 7,
        question: "선호하는 분위기는?",
        key: "region", // Indirectly maps to region style vibe
        options: [
            { value: "Islay", label: "거친 파도가 치는 바닷가", description: "야성적이고 강렬한 에너지" },
            { value: "Speyside", label: "꽃이 핀 정원에서의 티타임", description: "우아하고 섬세한 여유" },
            { value: "Kentucky", label: "활기찬 재즈바", description: "달콤하고 부드러운 분위기" },
            { value: "Highland", label: "웅장한 산맥과 숲", description: "다채롭고 깊이 있는 풍경" },
        ],
    },
];

export default function QuizPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [isCompleted, setIsCompleted] = useState(false);
    const [recommendations, setRecommendations] = useState<Whisky[]>([]);
    const [persona, setPersona] = useState({ id: "", title: "", description: "", icon: "🥃" });

    const personas = [
        {
            id: "peat_monster",
            title: "피트 몬스터 사냥꾼",
            description: "강렬한 연기 향과 거친 바다의 내음을 즐기는 당신은 진정한 모험가입니다. 소독약 같은 독특한 향마저 풍미로 즐길 줄 아는 전문가의 취향을 가지셨군요.",
            icon: "🔥"
        },
        {
            id: "sherry_romantic",
            title: "우아한 셰리 로맨티스트",
            description: "달콤한 건과일과 초콜릿, 웅장한 오크의 풍미를 사랑하는 당신. 마치 고급스러운 서재에서 클래식을 듣는 듯한 깊고 풍부한 맛을 선호하시네요.",
            icon: "🍷"
        },
        {
            id: "bourbon_lover",
            title: "활기찬 버번 미식가",
            description: "바닐라와 카라멜의 직관적인 달콤함, 그리고 옥수수의 고소함을 즐기는 당신. 화려하고 타격감 있는 위스키와 함께하는 에너제틱한 시간을 선호하시네요.",
            icon: "🌽"
        },
        {
            id: "minimalist",
            title: "깔끔한 실크 미니멀리스트",
            description: "자극적이지 않고 부드러운 목넘김, 섬세한 꽃향기를 선호하시네요. 은은하게 퍼지는 여운을 즐기며 위스키 본연의 순수함을 탐구하는 스타일입니다.",
            icon: "🌸"
        },
        {
            id: "fruit_explorer",
            title: "싱그러운 과일 탐험가",
            description: "상큼한 시트러스와 달콤한 열대과일 향을 좋아하는 당신. 위스키에서 느껴지는 다채로운 과실의 향연을 즐기며 기분 전환을 하는 스타일이시군요.",
            icon: "🍎"
        },
        {
            id: "balanced_philosopher",
            title: "완벽한 조화의 철학자",
            description: "어느 한쪽으로 치우치지 않는 밸런스를 중요하게 생각하시네요. 피트, 단맛, 과일향이 오케스트라처럼 조화를 이루는 완성도 높은 위스키를 찾고 계십니다.",
            icon: "⚖️"
        }
    ];

    const handleOptionSelect = (value: any) => {
        setAnswers({ ...answers, [currentStep]: value });
    };

    const calculateRecommendations = () => {
        // 1. User Profile Setup based on answers
        const userProfile = {
            peat: Number(answers[2]), // Q3
            sweet: Number(answers[1]), // Q2
            fruit: Number(answers[3]), // Q4
            spice: Number(answers[4]), // Q5
            body: Number(answers[0]), // Q1
            priceRange: answers[5], // Q6
            vibe: answers[6] // Q7 (Region hint)
        };

        // 2. Determine Persona
        let detectedPersona = personas[5]; // Default: Balanced
        if (userProfile.peat >= 8) detectedPersona = personas[0];
        else if (userProfile.sweet >= 8 && userProfile.body >= 7) detectedPersona = personas[1];
        else if (userProfile.sweet >= 7 && (userProfile.vibe === "Kentucky" || userProfile.body >= 8)) detectedPersona = personas[2];
        else if (userProfile.body <= 4 && userProfile.peat <= 2) detectedPersona = personas[3];
        else if (userProfile.fruit >= 8) detectedPersona = personas[4];
        
        setPersona(detectedPersona);

        // 3. Advanced Scoring Algorithm
        const scoredWhiskies = whiskies.map((whisky) => {
            let score = 0;

            // --- Flavor Matching (Higher is better) ---
            // PEAT is the most polarising factor - Double weight and check for deal-breakers
            const peatDiff = Math.abs(whisky.flavorProfile.peat - userProfile.peat);
            if (userProfile.peat <= 1 && whisky.flavorProfile.peat >= 7) score -= 200; // Deal-breaker: Hates peat but whisky is a peat bomb
            if (userProfile.peat >= 8 && whisky.flavorProfile.peat <= 2) score -= 100;  // Loves peat but whisky is unpeated
            score += (100 - (peatDiff * peatDiff)) * 2.5;

            // Other flavor notes
            const sweetDiff = Math.abs(whisky.flavorProfile.sweet - userProfile.sweet);
            score += (100 - (sweetDiff * sweetDiff)) * 1.5;

            const fruitDiff = Math.abs(whisky.flavorProfile.fruit - userProfile.fruit);
            score += (100 - (fruitDiff * fruitDiff)) * 1.2;

            const spiceDiff = Math.abs(whisky.flavorProfile.spice - userProfile.spice);
            score += (100 - (spiceDiff * spiceDiff)) * 1.0;

            const bodyDiff = Math.abs(whisky.flavorProfile.body - userProfile.body);
            score += (100 - (bodyDiff * bodyDiff)) * 1.3;

            // --- Popularity & Reputation Boost (NEW) ---
            // Give a boost to well-known whiskies (up to 200 points)
            if (whisky.popularity) {
                score += (whisky.popularity / 100) * 150;
            }
            
            if (whisky.rating) {
                score += (whisky.rating - 3) * 50; // Boost for high ratings (3.5 = +25, 5.0 = +100)
            }

            // --- Context Matching ---
            // Price Bonus
            if (whisky.priceRange === userProfile.priceRange) {
                score += 200;
            } else {
                const orders = ['budget', 'mid', 'premium', 'luxury'];
                const dist = Math.abs(orders.indexOf(whisky.priceRange) - orders.indexOf(userProfile.priceRange));
                if (dist === 1) score += 80;
            }

            // Region/Vibe Bonus
            if (userProfile.vibe && (whisky.region.toLowerCase().includes(userProfile.vibe.toLowerCase()) ||
                whisky.type.toLowerCase().includes(userProfile.vibe.toLowerCase()))) {
                score += 120;
            }

            // Tags match (extra points for matching interests)
            const matchedTags = (whisky.tags || []).filter(tag => 
                (userProfile.peat >= 7 && tag.includes("피트")) ||
                (userProfile.sweet >= 7 && tag.includes("셰리")) ||
                (userProfile.vibe === "Kentucky" && tag.includes("버번"))
            );
            score += matchedTags.length * 30;

            // Small randomness to keep results fresh
            score += Math.random() * 10;

            return { ...whisky, score };
        });

        // 4. Sort and Take Top 10
        const top10 = scoredWhiskies.sort((a, b) => b.score - (a.score || 0)).slice(0, 10);
        setRecommendations(top10 as Whisky[]);
    };

    const handleNext = () => {
        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            calculateRecommendations();
            setIsCompleted(true);
        }
    };

    const handleRestart = () => {
        setCurrentStep(0);
        setAnswers({});
        setIsCompleted(false);
        setRecommendations([]);
    };

    const getMatchReason = (whisky: Whisky) => {
        const reasons = [];
        if (whisky.flavorProfile.peat >= 7 && persona.id === "peat_monster") reasons.push("당신이 갈구하던 강력한 피트 스모크의 정점입니다.");
        if (whisky.flavorProfile.sweet >= 7) reasons.push("셰리 캐스크가 선사하는 깊은 달콤함이 당신의 취향과 일치합니다.");
        if (whisky.flavorProfile.fruit >= 7) reasons.push("입 안 가득 퍼지는 풍부한 과실향이 기분 좋은 만족감을 줍니다.");
        if (whisky.flavorProfile.body >= 7) reasons.push("묵직하고 깊은 바디감이 당신이 선호하는 무게감과 완벽히 맞닿아 있습니다.");
        if (whisky.popularity && whisky.popularity >= 90) reasons.push("전 세계적으로 검증된 가장 대중적이고 아이코닉한 선택입니다.");
        
        return reasons.length > 0 ? reasons[0] : "고객님의 세밀한 취향 프로필을 가장 완벽하게 반영하는 위스키입니다.";
    };

    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl"> {/* Wider container for results */}

                {/* Helper Header */}
                {!isCompleted && (
                    <div className="mb-8 flex justify-between items-center text-secondary/60 text-sm uppercase tracking-widest max-w-2xl mx-auto w-full">
                        <span>Discovery Quiz</span>
                        <span>{`질문 ${currentStep + 1} / ${quizQuestions.length}`}</span>
                    </div>
                )}

                {/* Progress Bar */}
                {!isCompleted && (
                    <div className="w-full h-1 bg-white/10 rounded-full mb-12 overflow-hidden max-w-2xl mx-auto">
                        <motion.div
                            className="h-full bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {!isCompleted ? (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="max-w-2xl mx-auto w-full"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-8 leading-tight">
                                {quizQuestions[currentStep].question}
                            </h2>

                            <div className="space-y-4">
                                {quizQuestions[currentStep].options.map((option) => (
                                    <button
                                        key={option.label}
                                        onClick={() => handleOptionSelect(option.value)}
                                        className={`w-full text-left p-6 rounded-lg border transition-all duration-200 group relative overflow-hidden ${answers[currentStep] === option.value
                                            ? "bg-secondary border-secondary text-primary"
                                            : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center relative z-10">
                                            <div>
                                                <div className="font-bold text-lg mb-1">{option.label}</div>
                                                <div className={`text-sm ${answers[currentStep] === option.value ? "text-primary/80" : "text-white/60"}`}>
                                                    {option.description}
                                                </div>
                                            </div>
                                            {answers[currentStep] === option.value && (
                                                <Check className="w-6 h-6" />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 flex justify-end">
                                <button
                                    onClick={handleNext}
                                    disabled={answers[currentStep] === undefined}
                                    className={`flex items-center gap-2 px-8 py-3 rounded text-lg font-bold transition-all ${answers[currentStep] !== undefined
                                        ? "bg-secondary text-primary hover:bg-white"
                                        : "bg-white/10 text-white/30 cursor-not-allowed"
                                        }`}
                                >
                                    {currentStep === quizQuestions.length - 1 ? "결과 보기" : "다음"}
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center w-full"
                        >
                            {/* Persona Section */}
                            <div className="mb-12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl grayscale">
                                    {persona.icon}
                                </div>
                                <div className="relative z-10 text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 text-secondary mb-6 text-4xl">
                                        {persona.icon}
                                    </div>
                                    <div className="text-secondary text-sm uppercase tracking-[0.3em] mb-2 font-bold">당신의 위스키 페르소나</div>
                                    <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
                                        {persona.title}
                                    </h2>
                                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                                        {persona.description}
                                    </p>
                                </div>
                            </div>

                            {/* Top Match Hero */}
                            {recommendations.length > 0 && (
                                <div className="mb-16 text-left max-w-5xl mx-auto">
                                    <h3 className="text-white/40 text-sm uppercase tracking-widest mb-6 px-4">오늘의 완벽한 드람</h3>
                                    <div className="bg-white/10 rounded-3xl overflow-hidden border border-secondary/30 flex flex-col md:flex-row shadow-2xl">
                                        <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-white/5">
                                            <WhiskyImage whisky={recommendations[0]} className="object-cover" />
                                            <div className="absolute top-6 left-6 bg-secondary text-primary font-bold px-4 py-2 rounded-full text-sm">
                                                100% MATCH
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary to-primary/80">
                                            <div className="text-secondary font-bold text-sm mb-2 uppercase tracking-wider">
                                                {recommendations[0].type} • {recommendations[0].region}
                                            </div>
                                            <h4 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">
                                                {recommendations[0].name}
                                            </h4>
                                            
                                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                                                <div className="text-white/40 text-xs uppercase tracking-tighter mb-2">왜 당신과 잘 맞을까요?</div>
                                                <p className="text-secondary text-lg font-medium leading-snug">
                                                    "{getMatchReason(recommendations[0])}"
                                                </p>
                                            </div>

                                            <p className="text-white/60 mb-8 leading-relaxed">
                                                {recommendations[0].description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {(recommendations[0].tags || []).map((tag: string) => (
                                                    <span key={tag} className="text-xs px-3 py-1.5 bg-white/10 rounded-full text-white/80 border border-white/5">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Other Recommendations Grid */}
                            <div className="max-w-5xl mx-auto text-left">
                                <h3 className="text-white/40 text-sm uppercase tracking-widest mb-8 px-4">당신을 위한 또 다른 선택지들</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                    {recommendations.slice(1).map((whisky, index) => (
                                        <div key={whisky.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-1">
                                            <div className="aspect-[4/3] relative bg-white/10">
                                                <WhiskyImage
                                                    whisky={whisky}
                                                    className="group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md text-white/80 text-[10px] font-bold px-2 py-1 rounded">
                                                    MATCH #{index + 2}
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="text-secondary/70 text-[10px] uppercase tracking-widest mb-2 font-bold">{whisky.type}</div>
                                                <h3 className="font-serif text-lg text-white font-bold mb-3 line-clamp-1">{whisky.name}</h3>
                                                <p className="text-white/50 text-xs mb-4 line-clamp-2 leading-relaxed">{whisky.description}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {(whisky.tags || []).slice(0, 3).map((tag: string) => (
                                                        <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 rounded text-white/50">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={handleRestart}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded text-lg hover:bg-white/10 transition-colors"
                                >
                                    <RefreshCw className="w-5 h-5" />
                                    다시 하기
                                </button>
                                <Link
                                    href="/"
                                    className="inline-block px-10 py-4 bg-secondary text-primary font-bold rounded text-lg hover:bg-white transition-colors"
                                >
                                    매거진으로 돌아가기
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
