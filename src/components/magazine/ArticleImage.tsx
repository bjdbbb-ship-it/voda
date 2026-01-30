"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface ArticleImageProps extends Omit<ImageProps, "onError"> {
    fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/images/whiskies/talisker-10.png";

const ArticlePlaceholder = ({ title }: { title: string }) => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <div className="h-full w-full rotate-12 scale-150 flex flex-wrap gap-4 items-center justify-center font-serif text-8xl font-bold uppercase overflow-hidden whitespace-nowrap">
                VODA VODA VODA VODA VODA VODA VODA VODA
            </div>
        </div>
        <div className="z-10 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-black mb-2 px-6 py-1 border border-zinc-200 dark:border-zinc-800 rounded">
                이미지 없음
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-600 font-serif italic opacity-60 max-w-[80%] text-center line-clamp-1">
                {title}
            </span>
        </div>
    </div>
);

export const ArticleImage = ({
    src,
    alt,
    fallbackSrc,
    className = "",
    fill = true,
    ...props
}: ArticleImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(!src);

    useEffect(() => {
        setImgSrc(src);
        setHasError(!src);
    }, [src]);

    const handleError = () => {
        setHasError(true);
    };

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {!hasError && imgSrc ? (
                <Image
                    {...props}
                    src={imgSrc}
                    alt={alt}
                    fill={fill}
                    className={`object-cover transition-opacity duration-300 ${className}`}
                    onError={handleError}
                />
            ) : (
                <ArticlePlaceholder title={alt as string} />
            )}
        </div>
    );
};
