import { ArticleGrid } from "@/components/magazine/ArticleGrid";
import { articles } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  // Sort articles by date (descending) and filter future posts
  // [Fix] 타임존 이슈 해결: 현재 날짜(KST)를 YYYY-MM-DD 형식으로 가져와 문자열 비교
  const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().split('T')[0];
  const publishedArticles = articles
    .filter((article) => article.publishedAt <= todayStr)
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
            {/* Compact Flex Layout for Better Balance */}
            <div className="max-w-3xl mx-auto flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {/* 취향 분석 */}
                <a
                  href="/quiz"
                  className="group relative px-5 py-2 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <span className="text-sm">취향 분석</span>
                    <span className="ml-2 text-[10px] font-normal text-primary/70 hidden sm:inline-block border-l border-primary/20 pl-2">나에게 맞는 위스키 찾기</span>
                  </div>
                </a>

                {/* 가치 판단 */}
                <a
                  href="/value"
                  className="group relative px-5 py-2 bg-secondary/10 border border-secondary/50 text-secondary font-bold rounded-full hover:bg-secondary/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <span className="text-sm">가치 판단</span>
                    <span className="ml-2 text-[10px] font-normal text-secondary/70 hidden sm:inline-block border-l border-secondary/20 pl-2">위스키 가격 평가하기</span>
                  </div>
                </a>

                {/* 테이스팅 노트 */}
                <a
                  href="https://vodabar.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-5 py-2 bg-secondary/10 border border-secondary/50 text-secondary font-bold rounded-full hover:bg-secondary/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <span className="text-sm">테이스팅 노트</span>
                    <span className="ml-2 text-[10px] font-normal text-secondary/70 hidden sm:inline-block border-l border-secondary/20 pl-2">시음 기록 작성</span>
                  </div>
                </a>

                {/* 신규 위스키 소식 */}
                <a
                  href="/news"
                  className="group relative px-5 py-2 bg-secondary/10 border border-secondary/50 text-secondary font-bold rounded-full hover:bg-secondary/20 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <span className="text-sm">위스키 뉴스</span>
                    <span className="ml-2 text-[10px] font-normal text-secondary/70 hidden sm:inline-block border-l border-secondary/20 pl-2">최신 소식 확인</span>
                  </div>
                </a>
              </div>

              {/* 매거진 읽기 버튼 - 정교한 스타일링 */}
              <div>
                <a
                  href="#magazine"
                  className="inline-flex items-center px-8 py-2.5 bg-secondary text-primary font-bold text-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
                >
                  매거진 아카이브 읽기
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
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

            <ArticleGrid articles={publishedArticles} />


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
