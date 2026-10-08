// ===== SECTION 5: WHAT'S INSIDE / APP PREVIEW =====
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { insideContent } from "@/content/siteContent";

export default function Section5Inside() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slides = insideContent.slides;

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      id="whatsinside"
      className="w-full bg-[#F5F3F0] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Text & Controls (approx 45-50%) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* ===== [SECTION 5] HEADING: Red Two-Line Main Title ===== */}
          {/* Content Key: insideContent.headingLine1, insideContent.headingLine2 in /content/siteContent.ts */}
          <h2 className="font-heading font-bold text-[#FF4438] text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.05] tracking-[0.03em] uppercase mb-2">
            <span className="block">{insideContent.headingLine1}</span>
            <span className="block">{insideContent.headingLine2}</span>
          </h2>

          {/* ===== [SECTION 5] HEADING: Gold Subheading ===== */}
          {/* Content Key: currentSlide.subtitle in /content/siteContent.ts */}
          <h3 className="font-heading font-medium text-[#D4C08F] text-[24px] sm:text-[30px] lg:text-[36px] leading-tight mb-6">
            {currentSlide.subtitle}
          </h3>

          {/* ===== [SECTION 5] TEXT: Description Paragraph or Bullets ===== */}
          {currentSlide.description && (
            <p className="font-body text-[#2A2A2A] text-[18px] sm:text-[21px] lg:text-[23px] leading-[1.45] mb-8 max-w-xl">
              {currentSlide.description}
            </p>
          )}

          {currentSlide.bullets && (
            <ul className="space-y-3.5 mb-8 max-w-xl">
              {currentSlide.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 text-[18px] sm:text-[20px] lg:text-[22px] text-[#2A2A2A]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF4438] mt-2.5 flex-shrink-0" />
                  <span className="font-body leading-[1.4]">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* ===== [SECTION 5] BUTTONS: Gold Carousel Arrow Buttons (Left & Right) ===== */}
          <div className="flex items-center space-x-4 mb-10">
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous slide"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4C08F] bg-[#D4C08F]/10 hover:bg-[#D4C08F] text-[#D4C08F] hover:text-[#111111] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4C08F]"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next slide"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4C08F] bg-[#D4C08F]/10 hover:bg-[#D4C08F] text-[#D4C08F] hover:text-[#111111] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4C08F]"
            >
              <ArrowRight className="w-6 h-6 stroke-[2.5]" />
            </button>
            <span className="font-heading text-[#D4C08F] font-bold text-sm tracking-widest ml-2">
              {currentSlideIndex + 1} / {slides.length}
            </span>
          </div>

          {/* ===== [SECTION 5] BUTTON: CTA Button ===== */}
          {/* Content Key: insideContent.ctaText in /content/siteContent.ts */}
          <div>
            <CTAButton
              text={insideContent.ctaText}
              id="inside-cta-button"
              ariaLabel="Unlock one week free app preview"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Slider / Mockup Composition (approx 50-55%) */}
        <div className="lg:col-span-7 relative min-h-[440px] sm:min-h-[520px] md:min-h-[600px] flex items-center justify-center lg:justify-end">
          {/* Background Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-[#D4C08F]/15 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Athlete Background Photo Container (600x400) */}
          <div className="relative w-full max-w-[580px] h-[320px] sm:h-[380px] md:h-[420px] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.18)] bg-[#111111] border border-black/5 ml-auto">
            {/* ===== [SECTION 5] IMAGE: Athlete Photo | path: /public/images/inside-athlete-*.jpg | size: 600x400 ===== */}
            <Image
              src={currentSlide.athleteImage}
              alt={currentSlide.title}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 right-6 text-right max-w-xs z-10 hidden sm:block">
              <span className="font-heading font-bold text-white text-lg block uppercase">
                {currentSlide.subtitle}
              </span>
            </div>
          </div>

          {/* Overlapping App Mockup 1: Profile (Behind, Left) */}
          {/* ===== [SECTION 5] IMAGE: App Profile Phone Mockup | path: /public/images/app-profile-*.jpg | size: 240x520 ===== */}
          <div className="absolute left-2 sm:left-6 lg:-left-2 bottom-0 w-[140px] sm:w-[190px] md:w-[230px] lg:w-[240px] h-[280px] sm:h-[380px] md:h-[450px] lg:h-[480px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] z-20 transition-all duration-500 hover:-translate-y-2 rounded-[24px] overflow-hidden bg-[#111111] p-1 border border-black/15">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src={currentSlide.phoneBack}
                alt="App Profile Overview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 160px, 240px"
              />
            </div>
          </div>

          {/* Overlapping App Mockup 2: Program / Workout (Front, Overlapping) */}
          {/* ===== [SECTION 5] IMAGE: App Program Phone Mockup | path: /public/images/app-program-*.jpg | size: 240x520 ===== */}
          <div className="absolute left-20 sm:left-32 lg:left-28 bottom-[-10px] sm:bottom-[-20px] w-[150px] sm:w-[200px] md:w-[240px] lg:w-[250px] h-[300px] sm:h-[400px] md:h-[470px] lg:h-[500px] drop-shadow-[0_30px_45px_rgba(0,0,0,0.4)] z-30 transition-all duration-500 hover:-translate-y-2 rounded-[24px] overflow-hidden bg-[#111111] p-1 border border-black/15">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <Image
                src={currentSlide.phoneFront}
                alt="App Program Details"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 180px, 250px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
