import { Article } from "@/lib/data";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
    articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
    // First article is featured
    const featuredArticle = articles[0];
    const remainingArticles = articles.slice(1);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {featuredArticle && (
                <ArticleCard article={featuredArticle} featured={true} />
            )}
            {remainingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
