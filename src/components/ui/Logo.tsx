import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light" | "badge";
  size?: "sm" | "md" | "lg";
  className?: string;
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
  withLink = true,
}) => {
  // Dimension profiles for the official logo lockup from 1.png
  const dimensions = {
    sm: { width: 50, height: 50 },
    md: { width: 64, height: 64 },
    lg: { width: 88, height: 88 },
  };

  const currentDim = dimensions[size];

  // Select the appropriate optimized asset derived from /images/1.png
  // "dark"  -> transparent background with warm white script text for dark headers
  // "light" -> transparent background with charcoal script text for light backgrounds
  // "badge" -> authentic cropped white-backed badge
  const imageSrc =
    variant === "badge"
      ? "/images/logo-cropped-white.png"
      : variant === "light"
      ? "/images/logo-light.png"
      : "/images/logo-dark-header.png";

  const content = (
    <div
      className={cn(
        "flex items-center gap-3 select-none group transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Official Perleco Brand Logo (1.png) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Perleco Ltd Catering Services - Excellence is in detail"
          width={currentDim.width}
          height={currentDim.height}
          priority
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* Subtitle location badge for extra corporate polish */}
      <div className="hidden sm:flex flex-col justify-center border-l border-white/15 pl-3">
        <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-mutedGold">
          Manchester
        </span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-warmWhite/60">
          Est. 10+ Years
        </span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-richRed rounded"
        aria-label="Perleco Catering - Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};
