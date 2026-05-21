"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border-b border-[var(--color-border-hairline)] last:border-0"
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-main)] leading-snug">
                {item.q}
              </h3>
              {/* Chevron icon — rotates when open */}
              <span
                aria-hidden="true"
                className="shrink-0 w-5 h-5 text-[var(--color-text-muted)] transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </span>
            </button>

            {/*
              CSS grid-row trick: animates from 0fr → 1fr without knowing height.
              The inner div has overflow:hidden to clip during animation.
            */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 280ms ease",
              }}
            >
              <div className="overflow-hidden">
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed pb-5">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
