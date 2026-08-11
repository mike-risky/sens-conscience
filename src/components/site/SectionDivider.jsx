import React from "react";

// Color differential separator: the upper section's color flows down through two
// overlapping translucent mountain ranges into the lower section's color — the
// transition itself is the divider.
export default function SectionDivider({ fromColor = "#F2EEE4", toColor = "#F2EEE4" }) {
  return (
    <div
      className="w-full leading-[0] overflow-hidden"
      style={{ background: toColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block w-full h-[100px] md:h-[140px]"
        aria-hidden="true"
      >
        <rect width="1440" height="160" fill={toColor} />
        <path
          d="M0,108 C160,88 320,125 480,100 C640,75 800,120 960,95 C1120,70 1280,108 1440,85 L1440,150 C1360,158 1240,152 1080,155 C900,158 740,148 580,152 C420,155 260,150 0,152 Z"
          fill={fromColor}
          opacity="0.3"
        />
        <path
          d="M0,68 C140,45 260,90 420,55 C580,20 740,80 900,45 C1060,12 1220,60 1360,30 C1400,22 1420,28 1440,25 L1440,105 C1360,125 1240,118 1080,122 C900,128 740,110 580,115 C420,120 260,108 0,110 Z"
          fill={fromColor}
          opacity="0.5"
        />
        <path
          d="M0,0 L0,68 C140,45 260,90 420,55 C580,20 740,80 900,45 C1060,12 1220,60 1360,30 C1400,22 1420,28 1440,25 L1440,0 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}