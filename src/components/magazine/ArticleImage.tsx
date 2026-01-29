"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface ArticleImageProps extends Omit<ImageProps, "onError"> {
    fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/images/whiskies/talisker-10.png";

export const ArticleImage = ({
    src,
    alt,
    fallbackSrc = DEFAULT_FALLBACK,
    className = "",
    fill = true,
    ...props
}: ArticleImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    // Sync state when src prop changes
    useEffect(() => {
        setImgSrc(src);
        setHasError(false);
    }, [src]);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <Image
                {...props}
                src={imgSrc}
                alt={alt}
                fill={fill}
                className={`object-cover transition-opacity duration-300 ${className}`}
                onError={handleError}
            />
        </div>
    );
};
