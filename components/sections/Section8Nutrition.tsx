// ===== SECTION 8: NUTRITION 101 =====
"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import IPhoneMockup from "@/components/IPhoneMockup";
import { nutritionContent } from "@/content/siteContent";

export default function Section8Nutrition() {
  return (
    <section
      id="nutrition101"
      className="w-full bg-[#F5F3F0] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT COLUMN: User Chicken Food Plate & User App Diet Plan in iPhone Mockup Frame */}
        <div className="lg:col-span-6 relative w-full min-h-[500px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[780px] flex items-center justify-start">
          {/* ===== [SECTION 8] IMAGE: User Grilled Chicken Plate | path: /public/images/nutrition-bg.jpg ===== */}
          {/* Content Key: nutritionContent.bgImage, nutritionContent.bgAlt in /content/siteContent.ts */}
          <div className="relative w-[90%] sm:w-[85%] lg:w-[88%] h-[420px] sm:h-[540px] md:h-[620px] lg:h-[680px] rounded-r-[36px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.14)] bg-[#111111]">
            <Image
              src="/images/nutrition-bg.jpg"
              alt={nutritionContent.bgAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 750px"
            />
          </div>

          {/* ===== [SECTION 8] IMAGE: Diet Plan in iPhone Frame Mockup | path: /public/images/app-program-1.png ===== */}
          <div className="absolute left-[30%] sm:left-[38%] md:left-[42%] lg:left-[42%] top-1/2 -translate-y-1/2 w-[230px] sm:w-[290px] md:w-[330px] lg:w-[360px] z-20 transition-transform duration-500 hover:scale-105">
            <IPhoneMockup
              src="/images/app-program-1.png"
              alt="Khairy Hybrid Diet Plan inside iPhone"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Nutrition Course Details & 8 Pillars List */}
        <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16">
          {/* ===== [SECTION 8] HEADING: Nutrition 101 Red Heading ===== */}
          {/* Content Key: nutritionContent.heading in /content/siteContent.ts */}
          <h2 className="font-heading font-bold text-[#FF4438] text-[38px] sm:text-[48px] lg:text-[58px] leading-tight tracking-[0.03em] uppercase mb-6">
            {nutritionContent.heading}
          </h2>

          {/* ===== [SECTION 8] TEXT: Nutrition Course Overview Paragraphs ===== */}
          {/* Content Key: nutritionContent.paragraphs in /content/siteContent.ts */}
          <div className="space-y-4 mb-8">
            {nutritionContent.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-body text-[#2A2A2A] text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.45]"
              >
                {para}
              </p>
            ))}
          </div>

          {/* ===== [SECTION 8] TEXT: "What's Inside" Label ===== */}
          {/* Content Key: nutritionContent.whatsInsideLabel in /content/siteContent.ts */}
          <h3 className="font-heading font-bold text-[#111111] text-[20px] sm:text-[22px] uppercase tracking-wider mb-5">
            {nutritionContent.whatsInsideLabel}
          </h3>

          {/* ===== [SECTION 8] LIST: 8 Nutrition Pillars with Red Arrow Bullets ===== */}
          {/* Content Key: nutritionContent.pillars in /content/siteContent.ts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 sm:gap-y-4 mb-10">
            {nutritionContent.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.3] text-[#2A2A2A] group"
              >
                {/* Red Arrow Bullet */}
                <span className="flex-shrink-0 mt-0.5 text-[#FF4438] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5 text-[#FF4438] stroke-[2.5]" />
                </span>
                <span className="font-medium font-body group-hover:text-[#111111] transition-colors">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          {/* ===== [SECTION 8] BUTTON: Bottom CTA Button ===== */}
          {/* Content Key: nutritionContent.ctaText in /content/siteContent.ts */}
          <div>
            <CTAButton
              text={nutritionContent.ctaText}
              id="nutrition-cta-button"
              ariaLabel="Unlock one week free nutrition access"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
