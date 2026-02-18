import { ArticleGrid } from "@/components/magazine/ArticleGrid";
import { articles } from "@/lib/data";
import Link from "next/link";

export default function NewsPage() {
    // "신규 위스키 소식" 카테고리의 기사만 필터링
    const newsArticles = articles
        .filter((article) => article.category === "신규 위스키 소식")
        .filter((article) => new Date(article.publishedAt) <= new Date())
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 bg-primary text-secondary overflow-hidden">
                    <div className="container px-4 mx-auto text-center z-10">
                        <span className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-sm tracking-widest uppercase mb-4 text-secondary/80">
                            Daily Updates
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            신규 위스키 소식
                        </h1>
                        <p className="font-sans text-lg text-secondary/80 max-w-2xl mx-auto font-light">
                            매일 업데이트되는 최신 위스키 뉴스와 트렌드를 확인하세요.
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute left-0 top-0 w-64 h-64 bg-secondary blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </section>

                {/* News Articles Section */}
                <section className="py-16 bg-background">
                    <div className="container px-4 mx-auto">
                        {newsArticles.length > 0 ? (
                            <>
                                <ArticleGrid articles={newsArticles} hideImage={false} />

                                <div className="mt-12 text-center">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-secondary transition-all duration-300"
                                    >
                                        홈으로 돌아가기
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-xl text-primary/60">아직 등록된 소식이 없습니다.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <footer className="py-8 bg-primary text-secondary/60 text-center text-sm border-t border-secondary/20">
                <p>&copy; 2024 WhiskyVoda. All rights reserved.</p>
            </footer>
        </div>
    );
}
