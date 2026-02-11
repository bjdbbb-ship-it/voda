import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { ArticleImage } from "@/components/magazine/ArticleImage";
import { articles } from "@/lib/data";

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    // Filter by publish date - hide if not yet published
    if (!article || new Date(article.publishedAt) > new Date()) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <ArticleImage
                    src={article.imageUrl}
                    alt={article.title}
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <div className="absolute top-24 left-0 w-full px-4">
                    <div className="container mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-secondary transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="uppercase tracking-widest text-sm font-medium">매거진으로 돌아가기</span>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-4 pb-12">
                    <div className="container mx-auto">
                        <div className="max-w-3xl">
                            <span className="inline-block px-3 py-1 mb-6 border border-secondary/50 rounded-full text-secondary text-sm uppercase tracking-widest bg-black/30 backdrop-blur-sm">
                                {article.category}
                            </span>
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>
                            <p className="text-xl text-white/90 font-light max-w-2xl leading-relaxed">
                                {article.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Article Body */}
                    <div className="lg:w-2/3">
                        {/* Meta Info */}
                        <div className="flex items-center justify-between border-b border-border pb-8 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                    <span className="font-serif font-bold text-lg text-primary">
                                        {article.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-medium text-primary">{article.author}</div>
                                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Clock className="w-3 h-3" />
                                        {article.publishedAt}
                                    </div>
                                </div>
                            </div>

                            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Article Content - Preserving original line breaks and basic formatting */}
                        <div className="prose prose-lg md:prose-xl prose-headings:font-serif prose-headings:text-primary dark:prose-invert text-foreground/90 max-w-none whitespace-pre-wrap leading-relaxed tracking-tight">
                            {article.content}
                        </div>

                        {/* Discovery Trigger */}
                        <div className="mt-20 p-8 bg-primary text-secondary rounded-lg text-center relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="font-serif text-3xl font-bold mb-4">내 취향이 궁금하신가요?</h3>
                                <p className="font-sans text-white/80 mb-8 max-w-lg mx-auto">
                                    2분 만에 끝나는 취향 분석 퀴즈를 통해 당신의 입맛과 예산에 딱 맞는 위스키를 찾아보세요.
                                </p>
                                <Link
                                    href="/quiz"
                                    className="inline-block px-8 py-4 bg-secondary text-primary font-bold rounded hover:bg-white transition-colors"
                                >
                                    취향 분석 시작하기
                                </Link>
                            </div>

                            {/* Decorative background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-24">
                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h4 className="font-serif text-xl font-bold text-primary mb-6">관련 토픽</h4>
                                <div className="flex flex-wrap gap-2">
                                    {/* Check if tags exist before mapping */}
                                    {(article.tags || []).map((tag: string) => (
                                        <span key={tag} className="px-3 py-1 bg-background border border-border rounded-full text-xs uppercase tracking-wider text-muted-foreground hover:border-secondary hover:text-primary cursor-pointer transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border mt-8">
                                <h4 className="font-serif text-xl font-bold text-primary mb-6">추천 기사</h4>
                                <div className="space-y-6">
                                    {articles.filter(a => a.id !== article.id).slice(0, 3).map(rec => (
                                        <Link key={rec.id} href={`/article/${rec.slug}`} className="group block">
                                            <div className="aspect-video relative mb-3 overflow-hidden rounded bg-muted">
                                                <ArticleImage
                                                    src={rec.imageUrl}
                                                    alt={rec.title}
                                                    className="group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <h5 className="font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                                                {rec.title}
                                            </h5>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
