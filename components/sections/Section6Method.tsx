// ===== SECTION 6: THE METHOD =====
"use client";

import React from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { BRAND, methodContent } from "@/content/siteContent";

export default function Section6Method() {
  return (
    <section
      id="goonemoremethod"
      className="relative w-full min-h-[700px] lg:min-h-[780px] flex items-center bg-[#111111] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* ===== [SECTION 6] IMAGE: Method Rowing Athlete Background | path: /public/images/method-bg.jpg (badge.jpg) ===== */}
      {/* Content Key: methodContent.bgImage, methodContent.bgAlt in /content/siteContent.ts */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/method-bg.jpg"
          alt={methodContent.bgAlt}
          fill
          className="object-cover object-[center_25%] sm:object-right"
          sizes="100vw"
        />
        {/* Soft vignette on left side to ensure high text readability while keeping the athlete fully visible and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/50 to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Method Philosophy & CTA (~45%) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* ===== [SECTION 6] HEADING: White Bold Method Title ===== */}
          {/* Content Key: methodContent.headingLine1, methodContent.headingLine2 in /content/siteContent.ts */}
          <h2 className="font-heading font-bold text-white text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] tracking-[0.03em] uppercase mb-6 sm:mb-8 drop-shadow-md">
            <span className="block">{methodContent.headingLine1}</span>
            <span className="block text-[#FF4438]">{methodContent.headingLine2}</span>
          </h2>

          {/* ===== [SECTION 6] TEXT: Method Philosophy Paragraph ===== */}
          {/* Content Key: methodContent.paragraph in /content/siteContent.ts */}
          <p className="font-body text-white/95 text-[17px] sm:text-[19px] lg:text-[21px] leading-[1.5] mb-8 sm:mb-10 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {methodContent.paragraph}
          </p>

          {/* ===== [SECTION 6] BUTTON: Left-Aligned CTA Button ===== */}
          {/* Content Key: methodContent.ctaText in /content/siteContent.ts */}
          <div>
            <CTAButton
              text={methodContent.ctaText}
              id="method-cta-button"
              ariaLabel="Unlock one week free method access"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Framework 2x3 Grid Directly Overlaid on Photo (~55%) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* ===== [SECTION 6] HEADING: Framework Small Heading ===== */}
          {/* Content Key: methodContent.frameworkTitle in /content/siteContent.ts */}
          <h3 className="font-heading font-bold text-white text-[20px] sm:text-[24px] uppercase tracking-[0.1em] mb-6 sm:mb-8 drop-shadow-md">
            {methodContent.frameworkTitle}
          </h3>

          {/* ===== [SECTION 6] LIST: 2-Column x 3-Row Framework Grid (Matching Reference Site Exactly) ===== */}
          {/* Content Key: methodContent.frameworkItems in /content/siteContent.ts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-8 lg:gap-x-12">
            {methodContent.frameworkItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3.5 group"
              >
                {/* Red Number */}
                <span className="font-heading font-extrabold text-[#FF4438] text-[22px] sm:text-[26px] leading-tight flex-shrink-0 drop-shadow-md">
                  {item.num}.
                </span>
                {/* Framework Title */}
                <span className="font-heading font-bold text-white text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.2] uppercase tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group-hover:text-[#D4C08F] transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
