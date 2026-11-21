// ===== SECTION 2: INTRO VIDEO =====
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Maximize } from "lucide-react";
import { introVideoContent } from "@/content/siteContent";

export default function Section2Video() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });
      setHasStarted(true);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
      // Do not pause the video when scrubbing
      if (isPlaying && videoRef.current.paused) {
        videoRef.current.play();
      }
    }
  };

  const handleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const container = containerRef.current as any;
    const video = videoRef.current as any;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }

    if (container?.requestFullscreen) {
      container.requestFullscreen().catch(() => {
        video?.requestFullscreen?.();
      });
    } else if (container?.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (video?.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video?.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    if (isPlaying) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  useEffect(() => {
    return () => {
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    };
  }, []);

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

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

        {/* ===== [SECTION 2] VIDEO: Large Cinematic Video Player ===== */}
        {/* Content Key: introVideoContent.posterImage, introVideoContent.videoSrc in /content/siteContent.ts */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          className="relative w-full max-w-[850px] lg:max-w-[980px] xl:max-w-[1060px] h-[480px] sm:h-[580px] md:h-[650px] lg:h-[720px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-black/10 bg-[#0A0A0A] group flex items-center justify-center select-none"
        >
          {/* Ambient blurred backdrop matching the video/poster colors */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={introVideoContent.posterImage}
              alt=""
              fill
              aria-hidden
              className="object-cover blur-2xl opacity-25 scale-110"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Native Video Element without native controls */}
          <video
            ref={videoRef}
            src={introVideoContent.videoSrc}
            playsInline
            preload="metadata"
            className="relative z-10 w-full h-full object-contain cursor-pointer"
            onClick={togglePlayPause}
            onTimeUpdate={() => {
              if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
              }
            }}
            onLoadedMetadata={() => {
              if (videoRef.current) {
                setDuration(videoRef.current.duration);
              }
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>

          {/* Fullscreen Button pinned in Top-Right */}
          <button
            type="button"
            onClick={handleFullscreen}
            aria-label="Watch Fullscreen"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 bg-black/60 hover:bg-black/85 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-heading font-bold tracking-wider flex items-center gap-1.5 sm:gap-2 backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            <span>FULL SCREEN</span>
          </button>

          {/* Initial Cover Photo & Play Button Overlay (ONLY shown BEFORE first start) */}
          {!hasStarted && (
            <div
              onClick={handlePlayVideo}
              className="absolute inset-0 z-30 cursor-pointer group/overlay"
              aria-label="Play video"
            >
              {/* Sharp, uncropped Cover Image centered in the middle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src={introVideoContent.posterImage}
                  alt={introVideoContent.posterAlt}
                  fill
                  priority
                  className="object-contain object-center drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 1060px"
                />
              </div>

              {/* Dark subtle vignette over poster */}
              <div className="absolute inset-0 bg-black/20 group-hover/overlay:bg-black/10 transition-colors pointer-events-none" />

              {/* Big White Circular Play Button — dead center in the middle */}
              <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                <div className="w-[80px] h-[80px] sm:w-[104px] sm:h-[104px] rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 transform group-hover/overlay:scale-110 pointer-events-auto">
                  <Play className="w-8 h-8 sm:w-11 sm:h-11 text-black fill-black ml-1.5" />
                </div>
              </div>
            </div>
          )}

          {/* Paused State Indicator (shows over frozen video frame, never shows initial cover photo) */}
          {hasStarted && !isPlaying && (
            <div
              onClick={togglePlayPause}
              className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-black/25"
            >
              <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-transform hover:scale-110">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-black fill-black ml-1" />
              </div>
            </div>
          )}

          {/* Custom Bottom Controls Bar (Visible once started) */}
          {hasStarted && (
            <div
              className={`absolute bottom-0 inset-x-0 z-30 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex flex-col gap-2 transition-opacity duration-300 ${
                showControls || !isPlaying ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrubber / Progress Bar Timeline */}
              <div className="relative w-full flex items-center group/scrubber cursor-pointer py-1.5">
                {/* Background Track */}
                <div className="w-full h-1.5 sm:h-2 bg-white/25 rounded-full overflow-hidden relative">
                  {/* Played Fill */}
                  <div
                    className="h-full bg-[#FF4438] transition-[width] duration-75"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>

                {/* Range Slider for scrubbing (does NOT pause playback while seeking) */}
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek video position"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />

                {/* Scrubber thumb circle */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-md pointer-events-none transition-transform group-hover/scrubber:scale-125"
                  style={{
                    left: `calc(${progressPercentage}% - 8px)`,
                  }}
                />
              </div>

              {/* Bottom Control Row */}
              <div className="flex items-center justify-between w-full">
                {/* Left: Play/Pause button and Time Display */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="text-white hover:text-[#FF4438] transition-colors p-1 cursor-pointer focus:outline-none"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                    )}
                  </button>
                  <span className="font-heading font-medium text-white/90 text-xs sm:text-sm tracking-wider select-none">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right: Clean, no volume, no settings, no duplicate fullscreen */}
                <div />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
