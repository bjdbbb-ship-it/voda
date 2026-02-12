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
            <div className={`relative w-full overflow-hidden bg-muted ${featured ? 'aspect-[4/3] md:aspect-video' : 'aspect-[4/3]'}`}>
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 p-6 text-center transition-transform duration-700 group-hover:scale-105">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary break-keep leading-snug">
                        {article.title}
                    </h3>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />

                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary dark:text-white" />
                </div>
            </div>

            <div className="py-6 pr-4">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold tracking-widest uppercase border ${article.category === "리뷰" ? "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800" :
                        article.category === "팟캐스트" || article.category === "인터뷰" ? "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800" :
                            article.category === "뉴스" ? "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800" :
                                "text-secondary border-transparent"
                        }`}>
                        {['팟캐스트', '인터뷰'].includes(article.category) && "🎙️ "}{article.category}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">
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
