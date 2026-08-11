import React from "react";

const OLIVE = "#87856C";

// A single continuous flowing line: mountain peaks loop into flowers, loop into
// more peaks, and end in a flower — drawn as one stroke, like a hand sketch.
export default function SectionDivider({ fromColor = "#F2EEE4", toColor = "#F2EEE4" }) {
  const isOlive =
    fromColor.toUpperCase() === OLIVE || toColor.toUpperCase() === OLIVE;
  const neutral = isOlive ? "#E4DED2" : OLIVE;
  const accent = "#C07847";

  return (
    <div
      className="w-full flex justify-center py-6"
      style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 100"
        className="w-72 md:w-80 h-auto"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M30,85 L75,28 120,70 165,52 C170,45 160,45 165,52 C173.2,54.6 170.1,45.1 165,52 C165.07,60.6 173.17,54.72 165,52 C156.83,54.72 164.93,60.6 165,52 C159.89,45.08 156.79,54.6 165,52 L235,22 295,68 340,42 385,70 430,52 C435,45 425,45 430,52 C438.2,54.6 435.1,45.1 430,52 C430.07,60.6 438.17,54.72 430,52 C421.83,54.72 429.93,60.6 430,52 C424.89,45.08 421.79,54.6 430,52 L460,60"
          stroke={neutral}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="235" cy="9" r="3.5" fill={accent} />
        <circle cx="165" cy="52" r="2.5" fill={accent} />
        <circle cx="430" cy="52" r="2.5" fill={accent} />
      </svg>
    </div>
  );
}