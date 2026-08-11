import React from "react";

// Color differential separator: the upper section's color flows down in a smooth
// wave over the lower section's color, with a translucent overlap band that blends
// the two — the transition itself is the divider.
export default function SectionDivider({ fromColor = "#F2EEE4", toColor = "#F2EEE4" }) {
  return (
    <div className="w-full leading-[0] overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="block w-full h-[80px] md:h-[110px]"
        aria-hidden="true"
      >
        <rect width="1440" height="130" fill={toColor} />
        <path
          d="M0,0 L0,45 C240,5 480,5 720,45 C960,85 1200,85 1440,45 L1440,0 Z"
          fill={fromColor}
        />
        <path
          d="M0,45 C240,5 480,5 720,45 C960,85 1200,85 1440,45 L1440,85 C1200,125 960,125 720,85 C480,45 240,45 0,85 Z"
          fill={fromColor}
          opacity="0.3"
        />
      </svg>
    </div>
  );
}