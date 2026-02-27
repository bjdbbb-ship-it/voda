import { ArticleGrid } from "@/components/magazine/ArticleGrid";
import { articles } from "@/lib/data";

export const metadata = {
    title: "Whisky Voda Magazine | 위스키의 모든 이야기",
    description: "위스키 트렌드, 리뷰, 역사 그리고 입문 가이드까지 - Whisky Voda 매거진에서 확인하세요.",
};

export default function MagazinePage() {
    // Sort articles by date (descending) and filter future posts
    // [Fix] 타임존 이슈 해결: 현재 날짜(KST)를 YYYY-MM-DD 형식으로 가져와 문자열 비교
    const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
    const allPublishedArticles = articles
        .filter((article) => article.publishedAt <= todayStr && article.category !== "위스키 소식")
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return (
        <div className="flex flex-col min-h-screen pt-24">
            <main className="flex-1">
                {/* Magazine Hero */}
                <section className="py-16 bg-primary text-secondary">
                    <div className="container px-4 mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Magazine</h1>
                        <p className="font-sans text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto font-light">
                            위스키에 담긴 깊은 이야기와 최신 트렌드를 <br className="hidden md:block" />
                            Whisky Voda 매거진에서 만나보세요.
                        </p>
                    </div>
                </section>

                {/* All Articles Section */}
                <section className="py-24 bg-background">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-primary/10 pb-8">
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl text-primary mb-2">모든 기사</h2>
                                <p className="text-primary/60">총 {allPublishedArticles.length}개의 전문적인 위스키 아티클</p>
                            </div>

                            {/* Optional: Filter categories could go here in the future */}
                        </div>

                        <ArticleGrid articles={allPublishedArticles} />
                    </div>
                </section>
            </main>

            <footer className="py-8 bg-primary text-secondary/60 text-center text-sm border-t border-secondary/20">
                <p>&copy; 2024 WhiskyVoda. All rights reserved.</p>
            </footer>
        </div>
    );
}
