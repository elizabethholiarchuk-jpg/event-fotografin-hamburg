"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function SafeImage({ src, alt, className, ...props }: ImageProps) {
    const [error, setError] = useState(false);

    if (error) {
        if (process.env.NODE_ENV === "development") {
            console.warn(`[SafeImage] Image missing or failed to load: ${src}`);
        }
        return null;
    }

    return (
        <Image
            src={src}
            alt={alt}
            onError={() => setError(true)}
            className={className}
            {...props}
        />
    );
}
