// ===== SECTION 3: ABOUT THE SYSTEM =====
"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { BRAND, systemContent } from "@/content/siteContent";

export default function Section3System() {
  return (
    <section
      id="aboutthesystem"
      className="w-full bg-[#FFFFFF] py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Phone Mockup & Badge Collage (50%) */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] order-2 lg:order-1">
          {/* Background Ambient Glow */}
          <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-[#FF4438]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* ===== [SECTION 3] IMAGE: Phone 2 (Exercise List) | path: /public/images/phone-workout-2.jpg | size: 420x700 ===== */}
          {/* Content Key: systemContent.phones.exerciseList in /content/siteContent.ts */}
          <div className="relative z-10 w-[175px] sm:w-[225px] md:w-[265px] lg:w-[290px] xl:w-[310px] h-[315px] sm:h-[405px] md:h-[475px] lg:h-[515px] xl:h-[545px] rotate-[10deg] sm:rotate-[12deg] lg:rotate-[14deg] translate-x-10 sm:translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28 translate-y-1 sm:translate-y-2 lg:translate-y-3 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] transition-transform duration-500 hover:rotate-[11deg] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#111111] p-1 border border-black/15">
            <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden">
              <Image
                key="behind-phone-mobility"
                src={systemContent.phones.exerciseList}
                alt={systemContent.phones.exerciseListAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 220px, 350px"
              />
            </div>
          </div>

          {/* ===== [SECTION 3] IMAGE: Phone 1 (Workout Video) | path: /public/images/phone-workout-1.jpg | size: 420x700 ===== */}
          {/* Content Key: systemContent.phones.workoutVideo in /content/siteContent.ts */}
          <div className="absolute z-20 w-[185px] sm:w-[235px] md:w-[275px] lg:w-[305px] xl:w-[325px] h-[335px] sm:h-[425px] md:h-[495px] lg:h-[540px] xl:h-[570px] -rotate-[8deg] sm:-rotate-[9deg] lg:-rotate-[10deg] -translate-x-8 sm:-translate-x-12 md:-translate-x-16 lg:-translate-x-18 xl:-translate-x-20 drop-shadow-[0_25px_40px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:-rotate-[7deg] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#111111] p-1 border border-black/10">
            <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden">
              <Image
                key="front-phone-workout"
                src={systemContent.phones.workoutVideo}
                alt={systemContent.phones.workoutVideoAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 230px, 360px"
              />
            </div>
          </div>

          {/* ===== [SECTION 3] IMAGE: Circle badge photo | path: /public/images/badge.jpg | size: 300x300 ===== */}
          {/* Content Key: systemContent.badge in /content/siteContent.ts */}
          <div className="absolute z-30 bottom-1 sm:bottom-3 left-1/2 -translate-x-3 sm:-translate-x-1 md:translate-x-1 lg:translate-x-2 w-[100px] sm:w-[130px] md:w-[150px] lg:w-[165px] h-[100px] sm:h-[130px] md:h-[150px] lg:h-[165px] rounded-full border-[3px] sm:border-[4px] border-[#FF4438] overflow-hidden shadow-[0_15px_30px_rgba(255,68,56,0.35)] group bg-[#111111]">
            <Image
              src={systemContent.badge.image}
              alt={systemContent.badge.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 130px, 200px"
            />
            {/* Dark gradient for badge text readability */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center select-none pointer-events-none">
              <span className="font-heading font-extrabold text-white text-[20px] sm:text-[28px] md:text-[34px] leading-none tracking-wider">
                {systemContent.badge.title}
              </span>
              <span className="font-heading font-bold text-[#FF4438] text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.2em] mt-0.5">
                {systemContent.badge.subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content & Bullet Points (50%) */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
          {/* ===== [SECTION 3] HEADING: Red Two-Line Main Title ===== */}
          {/* Content Key: systemContent.headingLine1, systemContent.headingLine2 in /content/siteContent.ts */}
          <h2 className="font-heading font-bold text-[#FF4438] text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.05] tracking-[0.03em] uppercase mb-2">
            <span className="block">{systemContent.headingLine1}</span>
            <span className="block">{BRAND.name}</span>
          </h2>

          {/* ===== [SECTION 3] HEADING: Gold Subheading ===== */}
          {/* Content Key: systemContent.subHeading in /content/siteContent.ts */}
          <h3 className="font-heading font-medium text-[#D4C08F] text-[24px] sm:text-[30px] lg:text-[34px] leading-tight uppercase mb-6 sm:mb-8">
            {systemContent.subHeading}
          </h3>

          {/* ===== [SECTION 3] TEXT: Main Paragraphs ===== */}
          {/* Content Key: systemContent.paragraphs in /content/siteContent.ts */}
          <div className="space-y-4 mb-8">
            {systemContent.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-body text-[#2A2A2A] text-[18px] sm:text-[21px] lg:text-[24px] leading-[1.4]"
              >
                {para}
              </p>
            ))}
          </div>

          {/* ===== [SECTION 3] LIST: 4 Feature Bullet Rows with Red Arrow Icons ===== */}
          {/* Content Key: systemContent.bulletPoints in /content/siteContent.ts */}
          <div className="space-y-4 sm:space-y-5 mb-10">
            {systemContent.bulletPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3.5 sm:space-x-4 text-[17px] sm:text-[20px] lg:text-[22px] leading-[1.35] text-[#2A2A2A]"
              >
                {/* Red Arrow Icon (→) */}
                <span className="flex-shrink-0 mt-1 text-[#FF4438]">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4438] stroke-[2.5]" />
                </span>
                <span>
                  <strong className="font-bold text-[#111111] mr-1.5">
                    {item.lead}
                  </strong>
                  <span className="font-normal">{item.text}</span>
                </span>
              </div>
            ))}
          </div>

          {/* ===== [SECTION 3] BUTTON: Left-Aligned CTA Button ===== */}
          {/* Content Key: systemContent.ctaText in /content/siteContent.ts */}
          <div className="pt-2">
            <CTAButton
              text={systemContent.ctaText}
              id="system-cta-button"
              ariaLabel="BEYOND YOUR LIMITS STARTS HERE inside the system"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
