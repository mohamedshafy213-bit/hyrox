// ===== MAIN LANDING PAGE: KHAIRY HYBRID APP =====
import React from "react";
import Navbar from "@/components/Navbar";
import Section1Hero from "@/components/sections/Section1Hero";
import Section2Video from "@/components/sections/Section2Video";
import Section2Transition from "@/components/sections/Section2Transition";
import Section3System from "@/components/sections/Section3System";
import Section4Results from "@/components/sections/Section4Results";
import Section5Inside from "@/components/sections/Section5Inside";
import Section6Method from "@/components/sections/Section6Method";
import Section7Steps from "@/components/sections/Section7Steps";
import Section8Nutrition from "@/components/sections/Section8Nutrition";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-[#F5F3F0] text-[#2A2A2A] selection:bg-[#FF4438] selection:text-white overflow-x-hidden">
      {/* Navigation Bar in Header */}
      <Navbar />

      {/* SECTION 1 — HERO */}
      <Section1Hero />

      {/* SECTION 2 — INTRO VIDEO (id="introvid") */}
      <Section2Video />

      {/* SECTION 2.5 — BRAND TICKER & TRANSITION STATEMENT */}
      <Section2Transition />

      {/* SECTION 3 — ABOUT THE SYSTEM (id="aboutthesystem") */}
      <Section3System />

      {/* SECTION 4 — SOCIAL PROOF / TRANSFORMATIONS (id="results") */}
      <Section4Results />

      {/* SECTION 5 — WHAT'S INSIDE / APP PREVIEW (id="whatsinside") */}
      <Section5Inside />

      {/* SECTION 6 — THE METHOD (id="goonemoremethod") */}
      <Section6Method />

      {/* SECTION 7 — START BUILDING YOUR STANDARD (id="steps") */}
      <Section7Steps />

      {/* SECTION 8 — NUTRITION 101 (id="nutrition101") */}
      <Section8Nutrition />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
