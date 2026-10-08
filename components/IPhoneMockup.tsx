// ===== REUSABLE REALISTIC IPHONE DEVICE MOCKUP COMPONENT =====
"use client";

import React from "react";
import Image from "next/image";

interface IPhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function IPhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
}: IPhoneMockupProps) {
  return (
    <div
      className={`relative rounded-[46px] p-[10px] sm:p-[12px] bg-gradient-to-b from-[#3a3a3c] via-[#1c1c1e] to-[#000000] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-black/40 ${className}`}
    >
      {/* Outer Titanium Edge Highlights */}
      <div className="absolute inset-0 rounded-[46px] border border-white/20 pointer-events-none" />

      {/* Side Button Accents (Volume + Power) */}
      <div className="absolute -left-[3px] top-[100px] w-[3px] h-[35px] bg-[#555555] rounded-l-sm" />
      <div className="absolute -left-[3px] top-[145px] w-[3px] h-[35px] bg-[#555555] rounded-l-sm" />
      <div className="absolute -right-[3px] top-[120px] w-[3px] h-[55px] bg-[#555555] rounded-r-sm" />

      {/* Inner Screen Bezel */}
      <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-black flex flex-col justify-start">
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-[80px] sm:w-[95px] h-[22px] bg-black rounded-full flex items-center justify-end pr-2 space-x-1.5 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111111] border border-[#222222]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#0d2238]" />
        </div>

        {/* Screen Content / User Image */}
        <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 768px) 300px, 420px"
          />
        </div>

        {/* Glass Glare Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
      </div>
    </div>
  );
}
