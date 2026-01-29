import { Check } from "lucide-react";

export default function SubscribePage() {
    return (
        <div className="min-h-screen bg-background py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-secondary text-sm uppercase tracking-widest font-bold mb-4 block">Membership</span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                        위스키 여정을 시작하세요
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        WhiskyVoda 멤버십에 가입하시고 개인화된 추천, 독점 콘텐츠, 그리고 애호가 커뮤니티를 경험해보세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Free Tier */}
                    <div className="p-8 rounded-2xl border border-border bg-white dark:bg-zinc-900">
                        <h3 className="font-serif text-2xl font-bold text-primary mb-2">큐레이티드 리더</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-primary">Free</span>
                        </div>
                        <p className="text-muted-foreground mb-8 text-sm">
                            위스키 세계에 막 입문하시는 분들을 위한 플랜입니다.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['모든 매거진 기사 열람', '주간 뉴스레터', '기본 검색 기능'].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 border border-primary text-primary font-bold rounded hover:bg-muted transition-colors">
                            게스트로 계속하기
                        </button>
                    </div>

                    {/* Premium Tier */}
                    <div className="p-8 rounded-2xl bg-primary text-secondary relative overflow-hidden transform md:-translate-y-4 shadow-xl">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-secondary text-primary text-xs font-bold uppercase tracking-widest -translate-y-1/2 translate-x-[20%] rotate-45 w-[150px] text-center">
                            Best Value
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-white mb-2">코노소어 클럽</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-white">₩12,000</span>
                            <span className="text-white/60">/월</span>
                        </div>
                        <p className="text-white/70 mb-8 text-sm">
                            AI 기반 큐레이션 엔진과 독점 혜택을 제한 없이 누리세요.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                '무제한 개인화 위스키 추천',
                                '상세한 취향 프로필 분석',
                                '멤버 전용 독점 기사',
                                '시음회 우선 초대권',
                                '분기별 위스키 시장 리포트'
                            ].map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-white/90">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 bg-secondary text-primary font-bold rounded hover:bg-white transition-colors">
                            14일 무료 체험 시작하기
                        </button>
                        <p className="text-center text-xs text-white/40 mt-4">
                            언제든지 취소 가능합니다. 약정 없음.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
