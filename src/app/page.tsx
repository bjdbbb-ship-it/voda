import { ArticleGrid } from "@/components/magazine/ArticleGrid";
import { articles } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  // Sort articles by date (descending) and filter future posts
  const publishedArticles = articles
    .filter((article) => new Date(article.publishedAt) <= new Date())
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 16); // 표시 개수 제한

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
            {/* Grid Layout for Better Organization */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 취향 분석 */}
                <a
                  href="/quiz"
                  className="group relative px-8 py-6 bg-secondary text-primary font-bold text-lg rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2">취향 분석</div>
                    <p className="text-sm font-normal text-primary/70">나에게 맞는 위스키 찾기</p>
                  </div>
                </a>

                {/* 가치 판단 */}
                <a
                  href="/value"
                  className="group relative px-8 py-6 bg-secondary/20 border-2 border-secondary text-secondary font-bold text-lg rounded-lg hover:bg-secondary/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2">가치 판단</div>
                    <p className="text-sm font-normal text-secondary/70">위스키 가격 평가하기</p>
                  </div>
                </a>

                {/* 테이스팅 노트 */}
                <a
                  href="https://vodabar.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-6 bg-secondary/20 border-2 border-secondary text-secondary font-bold text-lg rounded-lg hover:bg-secondary/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2">테이스팅 노트</div>
                    <p className="text-sm font-normal text-secondary/70">나만의 시음 기록 작성</p>
                  </div>
                </a>

                {/* 신규 위스키 소식 */}
                <a
                  href="/news"
                  className="group relative px-8 py-6 bg-secondary/20 border-2 border-secondary text-secondary font-bold text-lg rounded-lg hover:bg-secondary/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="font-bold text-xl mb-2">신규 위스키 소식</div>
                    <p className="text-sm font-normal text-secondary/70">최신 위스키 뉴스 확인</p>
                  </div>
                </a>
              </div>

              {/* 매거진 읽기 버튼 - 별도로 강조 */}
              <div className="mt-6">
                <a
                  href="#magazine"
                  className="block w-full px-8 py-4 border-2 border-secondary text-secondary font-bold text-lg rounded-lg hover:bg-secondary/10 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="font-bold text-xl">매거진 읽기</div>
                </a>
              </div>
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

            <ArticleGrid articles={publishedArticles} hideImage={true} />

            <div className="mt-16 text-center">
              <Link
                href="/magazine"
                className="inline-flex items-center px-8 py-4 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-secondary transition-all duration-300"
              >
                모든 기사 읽기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-primary text-secondary/60 text-center text-sm border-t border-secondary/20">
        <p>&copy; 2024 WhiskyVoda. All rights reserved.</p>
      </footer>
    </div>
  );
}
