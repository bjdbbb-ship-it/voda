"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Whisky } from "@/lib/data";

interface WhiskyImageProps {
    whisky: Partial<Whisky>;
    fill?: boolean;
    className?: string;
    priority?: boolean;
}

const WhiskyPlaceholder = ({ name }: { name?: string }) => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800">
        <div className="w-16 h-24 mb-4 relative opacity-20">
            {/* Minimalistic Bottle Silhouette */}
            <div className="absolute inset-x-4 top-0 h-6 bg-zinc-400 dark:bg-zinc-600 rounded-t-sm" />
            <div className="absolute inset-x-1 top-6 bottom-0 bg-zinc-400 dark:bg-zinc-600 rounded-lg" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 font-bold px-4 text-center">
            이미지 없음
        </span>
        {name && (
            <span className="text-[9px] text-zinc-300 dark:text-zinc-700 mt-1 px-4 text-center line-clamp-1">
                {name}
            </span>
        )}
    </div>
);

export const WhiskyImage = ({ whisky, fill = true, className = "", priority = false }: WhiskyImageProps) => {
    const [imgSrc, setImgSrc] = useState(whisky.imageUrl || "");
    const [hasError, setHasError] = useState(!whisky.imageUrl);

    useEffect(() => {
        setImgSrc(whisky.imageUrl || "");
        setHasError(!whisky.imageUrl);
    }, [whisky.imageUrl]);

    const handleImgError = () => {
        setHasError(true);
    };

    return (
        <div className={`relative w-full h-full transition-all duration-500 ${className}`}>
            {!hasError ? (
                <Image
                    src={imgSrc}
                    alt={whisky.name || "Whisky"}
                    fill={fill}
                    priority={priority}
                    className="object-contain hover:scale-105 transition-transform duration-700"
                    onError={handleImgError}
                />
            ) : (
                <WhiskyPlaceholder name={whisky.name} />
            )}
        </div>
    );
};
