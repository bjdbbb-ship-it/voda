import { ArticleGrid } from "@/components/magazine/ArticleGrid";
import { articles } from "@/lib/data";

export default function Home() {
  // Sort articles by date (descending) and filter future posts
  const publishedArticles = articles
    .filter((article) => new Date(article.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center bg-primary text-secondary overflow-hidden">
          <div className="container px-4 text-center z-10">
            <span className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-sm tracking-widest uppercase mb-6 text-secondary/80">
              Premium Curation
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Whisky <br /> <span className="italic font-light">Voda</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 font-light">
              당신의 취향에 맞는 최고의 위스키를 찾아보세요.<br className="hidden md:block" />
              완벽한 한 잔을 위한 여정이 여기서 시작됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quiz" className="px-8 py-4 bg-secondary text-primary font-bold text-lg rounded hover:bg-white transition-colors duration-300">
                취향 분석 시작하기
              </a>
              <a href="#magazine" className="px-8 py-4 border border-secondary text-secondary font-medium text-lg rounded hover:bg-secondary/10 transition-colors duration-300">
                매거진 읽기
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* Abstract Background Pattern can go here */}
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute left-0 top-0 w-64 h-64 bg-secondary blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </section>

        {/* Featured Section */}
        <section id="magazine" className="py-24 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">큐레이션 셀렉션</h2>
              <div className="w-24 h-1 bg-secondary mx-auto"></div>
            </div>

            <ArticleGrid articles={publishedArticles} />
          </div>
        </section>
      </main>

      <footer className="py-8 bg-primary text-secondary/60 text-center text-sm border-t border-secondary/20">
        <p>&copy; 2024 WhiskyVoda. All rights reserved.</p>
      </footer>
    </div>
  );
}
