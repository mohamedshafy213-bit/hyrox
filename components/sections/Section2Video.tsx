// ===== SECTION 2: INTRO VIDEO =====
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { introVideoContent } from "@/content/siteContent";

export default function Section2Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="introvid"
      className="w-full bg-[#F5F3F0] py-16 sm:py-24 lg:py-28 px-6 sm:px-10 text-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* ===== [SECTION 2] HEADING: Two-line Red Heading (Light + Bold) ===== */}
        {/* Content Key: introVideoContent.headingLine1, introVideoContent.headingLine2 in /content/siteContent.ts */}
        <h2 className="text-[#FF4438] font-heading leading-[1.05] tracking-[0.03em] uppercase mb-4 sm:mb-6">
          <span className="block font-light text-[32px] sm:text-[44px] lg:text-[52px]">
            {introVideoContent.headingLine1}
          </span>
          <span className="block font-bold text-[34px] sm:text-[46px] lg:text-[52px]">
            {introVideoContent.headingLine2}
          </span>
        </h2>

        {/* ===== [SECTION 2] TEXT: Dark Light-weight Subtitle ===== */}
        {/* Content Key: introVideoContent.subtitle in /content/siteContent.ts */}
        <p className="font-body font-light text-[#2A2A2A] text-[20px] sm:text-[26px] lg:text-[34px] leading-[1.3] max-w-3xl mb-10 sm:mb-14">
          {introVideoContent.subtitle}
        </p>

        {/* ===== [SECTION 2] VIDEO: Centered 16:9 Video Player | size: 750x438 | radius: 24px ===== */}
        {/* Content Key: introVideoContent.posterImage, introVideoContent.videoSrc in /content/siteContent.ts */}
        <div className="relative w-full max-w-[750px] aspect-[16/9] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] bg-[#111111] group">
          <video
            ref={videoRef}
            src={introVideoContent.videoSrc}
            poster={introVideoContent.posterImage}
            controls={isPlaying}
            playsInline
            className="w-full h-full object-cover rounded-[24px]"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Video Poster & Play Button Overlay (shown before playback) */}
          {!isPlaying && (
            <div
              onClick={handlePlayVideo}
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-colors"
              aria-label="Play video"
            >
              {/* ===== [SECTION 2] IMAGE: Video Poster Image | path: /public/images/video-poster.jpg | size: 750x438 ===== */}
              <Image
                src={introVideoContent.posterImage}
                alt={introVideoContent.posterAlt}
                fill
                className="object-cover -z-10"
                sizes="(max-width: 768px) 100vw, 750px"
              />

              {/* Dark subtle vignette over poster */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* ===== [SECTION 2] BUTTON: Big White Circular Play Button (100px) ===== */}
              <div className="relative z-20 w-[76px] h-[76px] sm:w-[100px] sm:h-[100px] rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-black ml-1.5" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
