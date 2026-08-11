import React from "react";

export default function SectionDivider({ fromColor = "#F2EEE4", toColor = "#F2EEE4" }) {
  return (
    <div className="w-full leading-[0] overflow-hidden" style={{ background: fromColor }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block w-full h-[32px] md:h-[48px]"
        aria-hidden="true"
      >
        <path
          d="M0,30 C240,8 480,52 720,30 C960,8 1200,52 1440,30 L1440,60 L0,60 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}