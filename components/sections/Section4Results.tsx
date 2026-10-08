// ===== SECTION 4: SOCIAL PROOF / TRANSFORMATIONS =====
"use client";

import React, { useState } from "react";
import { Pause, Play } from "lucide-react";
import Marquee from "@/components/Marquee";
import { resultsContent } from "@/content/siteContent";

export default function Section4Results() {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section
      id="results"
      className="w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="w-full max-w-[1920px] mx-auto">
        {/* ===== [SECTION 4] HEADING: Centered Red Section Title ===== */}
        {/* Content Key: resultsContent.heading in /content/siteContent.ts */}
        <div className="text-center px-6 mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-[#FF4438] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[0.03em] uppercase">
            {resultsContent.heading}
          </h2>
        </div>

        {/* ===== [SECTION 4] MARQUEE: Infinite Horizontal Image Carousel | Card Size: 475x475 | Gap: 20px ===== */}
        {/* Content Key: resultsContent.items in /content/siteContent.ts */}
        <div className="w-full">
          <Marquee items={resultsContent.items} isPaused={isPaused} />
        </div>

        {/* ===== [SECTION 4] BUTTON: Circular Pause / Play Toggle (50px, #FF4438) ===== */}
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-24 flex justify-end mt-6">
          <button
            type="button"
            onClick={togglePause}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className="w-[50px] h-[50px] rounded-full bg-[#FF4438] hover:bg-[#E0382D] active:bg-[#CC3328] text-white flex items-center justify-center shadow-[0_4px_15px_rgba(255,68,56,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF4438] focus:ring-offset-2"
          >
            {isPaused ? (
              <Play className="w-5 h-5 fill-white text-white ml-0.5" />
            ) : (
              <Pause className="w-5 h-5 fill-white text-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
