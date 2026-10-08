// ===== FOOTER COMPONENT =====
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] py-16 sm:py-24 px-6 flex flex-col items-center justify-center text-center border-t border-black/5">
      {/* ===== [FOOTER] IMAGE: Centered Red Brand Logo | path: /public/images/logo-red.svg | size: 220x105 ===== */}
      {/* Content Key: BRAND.logoRed, BRAND.name in /content/siteContent.ts */}
      <Link
        href="#intro"
        aria-label="Back to top"
        className="group relative inline-flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer max-w-full"
      >
        <Image
          src={BRAND.logoRed || "/images/logo-red.svg"}
          alt={BRAND.logoAlt || `${BRAND.name} Red Logo`}
          width={220}
          height={105}
          className="w-[180px] sm:w-[220px] h-auto object-contain mx-auto"
        />
      </Link>
    </footer>
  );
}
