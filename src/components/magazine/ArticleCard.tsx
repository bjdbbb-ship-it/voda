import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArticleImage } from "./ArticleImage";
import { Article } from "@/lib/data";

interface ArticleCardProps {
    article: Article;
    featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
    return (
        <Link
            href={`/article/${article.slug}`}
            className={`group block overflow-hidden border border-transparent hover:border-border/50 transition-all duration-300 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <ArticleImage
                    src={article.imageUrl}
                    alt={article.title}
                    className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary dark:text-white" />
                </div>
            </div>

            <div className="py-6 pr-4">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium tracking-widest uppercase text-secondary">
                        {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground">
                        {article.publishedAt}
                    </span>
                </div>

                <h3 className={`font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl mb-3' : 'text-xl mb-2'}`}>
                    {article.title}
                </h3>

                <p className={`font-sans text-muted-foreground line-clamp-2 ${featured ? 'text-base md:text-lg' : 'text-sm'}`}>
                    {article.subtitle}
                </p>
            </div>
        </Link>
    );
}
