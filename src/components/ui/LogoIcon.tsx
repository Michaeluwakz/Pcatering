import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
  variant?: "dark" | "light" | "gold" | "monochrome";
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  className = "",
  size = 40,
  variant = "dark",
}) => {
  // Variations for background adaptation
  const goldColor = variant === "light" ? "#9E7B3B" : "#C5A46D";
  const redPrimary = "#A71930";
  const burgundyDark = "#720D20";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Perleco Catering Emblem"
    >
      <defs>
        {/* Rich red-to-burgundy linear gradient */}
        <linearGradient id="perlecoRedGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={redPrimary} />
          <stop offset="60%" stopColor={burgundyDark} />
          <stop offset="100%" stopColor="#4A0713" />
        </linearGradient>

        {/* Muted Gold luxury metallic gradient */}
        <linearGradient id="perlecoGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DFBF82" />
          <stop offset="50%" stopColor={goldColor} />
          <stop offset="100%" stopColor="#8A6B32" />
        </linearGradient>

        {/* Glow filter for subtle luxury aura */}
        <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Fine Crest Octagonal / Circular Halo */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#perlecoGoldGrad)"
        strokeWidth="1.2"
        strokeDasharray="4 2"
        opacity="0.8"
      />
      <circle
        cx="50"
        cy="50"
        r="43"
        stroke="url(#perlecoGoldGrad)"
        strokeWidth="0.75"
        opacity="0.5"
      />

      {/* Decorative Cardinal Diamond Accents */}
      <polygon points="50,4 52,6 50,8 48,6" fill="url(#perlecoGoldGrad)" />
      <polygon points="50,92 52,94 50,96 48,94" fill="url(#perlecoGoldGrad)" />
      <polygon points="4,50 6,52 8,50 6,48" fill="url(#perlecoGoldGrad)" />
      <polygon points="92,50 94,52 96,50 94,48" fill="url(#perlecoGoldGrad)" />

      {/* Culinary Cloche & Dining Arc (Subtle Cloche Lid line) */}
      <path
        d="M26 68 C 26 40, 74 40, 74 68"
        stroke="url(#perlecoGoldGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Top Cloche Pearl / Finial Accent */}
      <circle cx="50" cy="38" r="3" fill="url(#perlecoGoldGrad)" />

      {/* The Monogram 'P' - Aristocratic, sculptural & bold */}
      {/* Vertical Spine */}
      <path
        d="M34 26 H46 V74 H34 Z"
        fill="url(#perlecoRedGrad)"
      />
      {/* Top Serif */}
      <path
        d="M28 26 H48 V30 H28 Z"
        fill="url(#perlecoRedGrad)"
      />
      {/* Bottom Serif / Base */}
      <path
        d="M28 70 H52 V74 H28 Z"
        fill="url(#perlecoRedGrad)"
      />
      {/* Sculpted Loop of the 'P' blending into a culinary tasting arch */}
      <path
        d="M44 26 C58 26, 72 32, 72 47 C72 61, 58 66, 44 66 V56 C52 56, 61 53, 61 47 C61 40, 52 36, 44 36 Z"
        fill="url(#perlecoRedGrad)"
      />

      {/* Gold Inlay Trim on the P's curved outer rim */}
      <path
        d="M46 29 C56 29, 69 34, 69 47 C69 59, 56 63, 46 63"
        stroke="url(#perlecoGoldGrad)"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Subtle Culinary Fork / Chef Sparkle Accent in Gold */}
      <circle cx="53" cy="46" r="2.2" fill="url(#perlecoGoldGrad)" />
    </svg>
  );
};
