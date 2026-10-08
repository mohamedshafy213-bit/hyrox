// ===== SECTION 2.5: BRAND TICKER & TRANSITION STATEMENT =====
"use client";

import React from "react";
import { transitionContent } from "@/content/siteContent";

export default function Section2Transition() {
  // 6 sporty emblem tags repeated for the infinite marquee ticker
  const badges = [
    "HYBRID ATHLETE",
    "ENDURANCE & STRENGTH",
    "TRAIN BEYOND LIMITS",
    "DISCIPLINE & HABITS",
    "NUTRITION & RECOVERY",
  ];

  const repeatedBadges = [...badges, ...badges, ...badges, ...badges];

  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 overflow-hidden border-b border-black/5">
      {/* Brand Ticker Row */}
      <div className="w-full overflow-hidden mb-12 sm:mb-16 select-none opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-6 sm:gap-10 animate-marquee w-max">
          {repeatedBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF4438]" />
              <span className="font-heading font-extrabold text-[#111111] text-[16px] sm:text-[20px] md:text-[22px] tracking-[0.15em] uppercase">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Transition Statement */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 text-center">
        {/* ===== [SECTION 2.5] HEADING: Transition Statement Title ===== */}
        {/* Content Key: transitionContent.heading in /content/siteContent.ts */}
        <h2 className="font-heading font-bold text-[#FF4438] text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-[0.03em] uppercase mb-4 sm:mb-6">
          {transitionContent.heading}
        </h2>

        {/* ===== [SECTION 2.5] TEXT: Transition Statement Paragraph ===== */}
        {/* Content Key: transitionContent.paragraph in /content/siteContent.ts */}
        <p className="font-body text-[#2A2A2A] text-[18px] sm:text-[22px] lg:text-[26px] leading-[1.4] max-w-3xl mx-auto font-light">
          {transitionContent.paragraph}
        </p>
      </div>
    </section>
  );
}
