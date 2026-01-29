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

const GENERIC_PLACEHOLDER_IMAGE = "/images/whiskies/talisker-10.png"; // Generic fallback

export const WhiskyImage = ({ whisky, fill = true, className = "", priority = false }: WhiskyImageProps) => {
    const initialSrc = whisky.imageUrl || GENERIC_PLACEHOLDER_IMAGE;
    const [imgSrc, setImgSrc] = useState(initialSrc);
    const [hasError, setHasError] = useState(false);

    // Sync state when props change
    useEffect(() => {
        const nextSrc = whisky.imageUrl || GENERIC_PLACEHOLDER_IMAGE;
        setImgSrc(nextSrc);
        setHasError(false); // Reset error state when image URL changes
    }, [whisky.imageUrl]);

    const handleImgError = () => {
        if (!hasError) {
            setHasError(true);
            // If the original image fails, fall back to the generic placeholder
            setImgSrc(GENERIC_PLACEHOLDER_IMAGE);
        }
    };

    return (
        <div className={`relative w-full h-full transition-opacity duration-300 ${className}`}>
            <Image
                src={imgSrc}
                alt={whisky.name || "Whisky"}
                fill={fill}
                priority={priority}
                className="object-contain" // Keep object-contain for product photos
                onError={handleImgError}
            />
        </div>
    );
};
