// ===== MARQUEE COMPONENT FOR INFINITE IMAGE CAROUSEL =====
// Matches nickbarefitness.app: horizontally scrolling transformation images
"use client";

import React from "react";
import Image from "next/image";
import { TransformationItem } from "@/content/siteContent";

interface MarqueeProps {
  items: TransformationItem[];
  isPaused: boolean;
}

export default function Marquee({ items, isPaused }: MarqueeProps) {
  // Duplicate 4x for seamless infinite loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Soft gradient edge fade for ultra sleek bleed effect */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center gap-5 w-max animate-marquee ${
          isPaused ? "is-paused" : ""
        }`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative flex-shrink-0 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-[24px] overflow-hidden bg-[#1A1A1A] shadow-[0_15px_30px_rgba(0,0,0,0.15)] group"
            style={{
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* ===== [SECTION 4] IMAGE: Transformation photo | path: /public/images/transformation-*.jpg ===== */}
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 340px, 420px"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
