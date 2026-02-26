"use client";

import SafeImage from "@/components/SafeImage";
import { useState } from "react";

interface ImageGalleryProps {
    images: { src: string; alt: string }[];
    gridClassName?: string;
    itemClassName?: string;
}

export default function ImageGallery({ images, gridClassName, itemClassName }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <>
            <div className={gridClassName || "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={itemClassName || "relative aspect-[3/2] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-[20px] shadow-sm border border-gray-100"}
                        onClick={() => setSelectedImage(i)}
                    >
                        <SafeImage
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-100"
                        />
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-[var(--color-dark-bg)] flex items-center justify-center p-4 md:p-12 transition-opacity"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-[101] transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Schließen"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center cursor-default bg-transparent" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full h-full max-h-[95vh]">
                            <SafeImage
                                src={images[selectedImage].src}
                                alt={images[selectedImage].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                quality={95}
                                priority
                            />
                        </div>
                    </div>

                    <button
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[101] transition-colors p-4"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((selectedImage - 1 + images.length) % images.length);
                        }}
                        aria-label="Vorheriges Bild"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[101] transition-colors p-4"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage((selectedImage + 1) % images.length);
                        }}
                        aria-label="Nächstes Bild"
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase font-semibold">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
