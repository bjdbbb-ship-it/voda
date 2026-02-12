import { Article } from "@/lib/data";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
    articles: Article[];
    hideImage?: boolean;
}

export function ArticleGrid({ articles, hideImage = false }: ArticleGridProps) {
    // hideImage가 true일 때는 featured 구분이 큰 의미가 없으므로 평탄하게 렌더링하거나
    // featured 레이아웃을 유지하되 이미지만 뺄 수도 있음. 
    // 여기서는 레이아웃 구조는 유지하되 이미지만 숨기는 방향으로 감.

    // First article is featured (only if not hiding images, or keep logic same)
    const featuredArticle = articles[0];
    const remainingArticles = articles.slice(1);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredArticle && (
                <ArticleCard article={featuredArticle} featured={true} hideImage={hideImage} />
            )}
            {remainingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} hideImage={hideImage} />
            ))}
        </div>
    );
}
