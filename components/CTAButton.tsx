"use client";

import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  className?: string;
  customMessage?: string;
  customUrl?: string;
  id?: string;
  ariaLabel?: string;
}

/**
 * Reusable CTA Button Component
 * Links directly to WhatsApp using NEXT_PUBLIC_WHATSAPP_URL or number/message
 * Opens in a new tab securely.
 */
export default function CTAButton({
  text = "UNLOCK ONE WEEK FREE",
  className = "",
  customMessage,
  customUrl,
  id,
  ariaLabel,
}: CTAButtonProps) {
  const directUrl =
    customUrl ||
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/message/OW7BVKQQEABYK1";

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "OW7BVKQQEABYK1";
  const defaultMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Hello! I want to unlock one week free for the Go One More App.";

  let href = directUrl;

  // If direct URL is not configured or an explicit custom message is provided on a phone number
  if (!directUrl || customMessage) {
    if (whatsappNumber.startsWith("http")) {
      href = whatsappNumber;
    } else if (whatsappNumber.startsWith("message/")) {
      href = `https://wa.me/${whatsappNumber}`;
    } else {
      const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
      const messageToSend = customMessage || defaultMessage;
      const encodedText = encodeURIComponent(messageToSend);
      href = cleanNumber
        ? `https://wa.me/${cleanNumber}?text=${encodedText}`
        : "https://wa.me/message/OW7BVKQQEABYK1";
    }
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      aria-label={ariaLabel || text}
      className={`inline-flex items-center justify-center bg-[#FF4438] hover:bg-[#E0382D] active:bg-[#CC3328] text-white font-heading font-bold text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.2em] uppercase px-7 py-4 sm:px-9 sm:py-[20px] md:py-[22px] rounded-none transition-all duration-300 shadow-[0_4px_20px_rgba(255,68,56,0.35)] hover:shadow-[0_6px_25px_rgba(255,68,56,0.55)] hover:-translate-y-0.5 active:translate-y-0 text-center select-none group cursor-pointer ${className}`}
    >
      <span className="relative z-10 font-bold">{text}</span>
    </Link>
  );
}
