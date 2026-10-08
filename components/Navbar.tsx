// ===== HEADER / NAVBAR COMPONENT =====
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { BRAND, navigationContent } from "@/content/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-30 bg-transparent py-5 sm:py-7 max-w-full overflow-x-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* ===== [NAVBAR] IMAGE: Brand Logo | path: /public/images/logo.svg | size: 145x65 ===== */}
        {/* Content Key: BRAND.logo, BRAND.name in /content/siteContent.ts */}
        <Link
          href="#intro"
          className="relative z-50 flex items-center transition-opacity hover:opacity-90 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          aria-label="Go to Top / Hero"
          onClick={closeMenu}
        >
          <Image
            src={BRAND.logo}
            alt={BRAND.logoAlt}
            width={145}
            height={65}
            priority
            className="w-[125px] sm:w-[150px] h-auto object-contain object-left"
          />
        </Link>

        {/* ===== [NAVBAR] DESKTOP NAVIGATION LINKS ===== */}
        {/* Content Key: navigationContent.links in /content/siteContent.ts */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
          {navigationContent.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-heading font-bold text-white text-[14px] xl:text-[16px] tracking-[0.08em] uppercase transition-colors duration-200 hover:text-[#FF4438] relative py-1 group whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4438] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ===== [NAVBAR] MOBILE HAMBURGER BUTTON ===== */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4438] drop-shadow-md"
          >
            {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>
      </div>

      {/* ===== [NAVBAR] MOBILE MENU DRAWER ===== */}
      <div
        className={`fixed inset-0 top-[70px] bg-[#111111]/98 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between px-8 py-10 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-5">
          {navigationContent.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="font-heading font-bold text-white text-[20px] tracking-[0.08em] uppercase hover:text-[#FF4438] border-b border-white/10 pb-3 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="pt-6">
          <CTAButton
            text="UNLOCK ONE WEEK FREE"
            className="w-full text-center"
            ariaLabel="Unlock one week free inside the app"
          />
        </div>
      </div>
    </header>
  );
}
