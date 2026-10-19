"use client";

import { useState } from "react";

// Shows the YouTube thumbnail and loads the player only after a click.
export default function LiteYouTube({
  id,
  title,
  playLabel,
}: {
  id: string;
  title: string;
  playLabel: string;
}) {
  const [active, setActive] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  return (
    <div className="relative w-full aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            loading="lazy"
            onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-black/60 group-hover:bg-black/80 transition-colors flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
