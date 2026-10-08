// ===== SECTION 1: HERO =====
"use client";

import React from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { heroContent } from "@/content/siteContent";

export default function Section1Hero() {
  return (
    <section
      id="intro"
      className="relative w-full min-h-[100svh] flex flex-col justify-center items-center text-center overflow-hidden px-6 pt-24 pb-16 sm:pb-20"
    >
      {/* ===== [SECTION 1] IMAGE: Hero background photo | path: /public/images/hero.jpg ===== */}
      {/* Content Key: heroContent.bgImage, heroContent.bgAlt in /content/siteContent.ts */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt={heroContent.bgAlt}
          fill
          priority
          className="object-cover object-[center_55%] sm:object-[center_50%]"
          sizes="100vw"
        />
        {/* Cinematic dark overlay for crisp text readability matching reference site */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-[#111111]/30" />
      </div>

      {/* Hero Center Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center mt-12 sm:mt-16">
        {/* ===== [SECTION 1] HEADING: Giant H1 Hero Title ===== */}
        {/* Content Key: heroContent.h1 in /content/siteContent.ts */}
        <h1 className="font-heading font-bold text-white text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px] leading-[0.95] tracking-[0.02em] uppercase mb-4 sm:mb-6 max-w-5xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          {heroContent.h1}
        </h1>

        {/* ===== [SECTION 1] TEXT: Hero Subtitle ===== */}
        {/* Content Key: heroContent.subtitle in /content/siteContent.ts */}
        <p className="font-body font-light text-white/95 text-[19px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.25] tracking-normal mb-8 sm:mb-12 max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {heroContent.subtitle}
        </p>

        {/* ===== [SECTION 1] BUTTON: Primary Hero CTA Button ===== */}
        {/* Content Key: heroContent.ctaText in /content/siteContent.ts */}
        <CTAButton
          text={heroContent.ctaText}
          id="hero-cta-button"
          ariaLabel="Unlock one week free inside the app"
        />
      </div>
    </section>
  );
}
