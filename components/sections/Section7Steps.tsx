// ===== SECTION 7: START BUILDING YOUR STANDARD =====
"use client";

import React from "react";
import CTAButton from "@/components/CTAButton";
import IPhoneMockup from "@/components/IPhoneMockup";
import { stepsContent } from "@/content/siteContent";

export default function Section7Steps() {
  return (
    <section
      id="steps"
      className="w-full bg-[#FFFFFF] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto flex flex-col items-center">
        {/* ===== [SECTION 7] HEADING: Centered Red Section Title ===== */}
        {/* Content Key: stepsContent.heading in /content/siteContent.ts */}
        <div className="text-center max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-[#FF4438] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[0.03em] uppercase">
            {stepsContent.heading}
          </h2>
        </div>

        {/* ===== [SECTION 7] GRID: 3-Column Steps with Realistic iPhone Mockups ===== */}
        {/* Content Key: stepsContent.steps in /content/siteContent.ts */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-end mb-14 sm:mb-18">
          {stepsContent.steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center group h-full justify-between pt-2"
            >
              {/* Step Header: Numeral + Title + Description */}
              <div className="flex flex-col items-center max-w-md mb-8 px-2">
                {/* ===== [SECTION 7] TEXT: Giant Gold Step Numeral (~70px) ===== */}
                <span className="font-heading font-extrabold text-[#D4C08F] text-[54px] sm:text-[62px] lg:text-[70px] leading-none mb-3 drop-shadow-sm select-none">
                  {step.num}
                </span>

                {/* ===== [SECTION 7] HEADING: Step Red Uppercase Bold Title ===== */}
                <h3 className="font-heading font-bold text-[#FF4438] text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.1] uppercase mb-3 tracking-wide">
                  {step.title}
                </h3>

                {/* ===== [SECTION 7] TEXT: Step Dark Description ===== */}
                <p className="font-body text-[#2A2A2A] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-center max-w-sm">
                  {step.description}
                </p>
              </div>

              {/* ===== [SECTION 7] IMAGE: iPhone Device Mockup Frame ===== */}
              <div className="w-[240px] sm:w-[270px] md:w-[290px] lg:w-[320px] transition-transform duration-500 group-hover:-translate-y-2">
                <IPhoneMockup
                  src={step.image}
                  alt={step.imageAlt}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===== [SECTION 7] BUTTON: Centered Bottom WhatsApp CTA Button ===== */}
        {/* Content Key: stepsContent.ctaText in /content/siteContent.ts */}
        <div className="pt-2 flex justify-center">
          <CTAButton
            text={stepsContent.ctaText}
            id="steps-cta-button"
            ariaLabel="Unlock one week free and start building your standard"
          />
        </div>
      </div>
    </section>
  );
}
