import React from "react";

const OLIVE = "#87856C";

const MotifMountains = ({ neutral, accent }) => (
  <svg viewBox="0 0 240 90" className="w-44 h-[70px]" aria-hidden="true">
    <circle cx="120" cy="28" r="7" fill={accent} opacity="0.75" />
    <path d="M52,72 L94,34 120,54 146,30 188,72 Z" fill={neutral} opacity="0.5" />
    <path d="M86,72 120,44 154,72 Z" fill={neutral} opacity="0.85" />
    <circle cx="120" cy="73" r="3" fill={accent} />
    <circle cx="115" cy="71" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="125" cy="71" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="120" cy="68" r="2.5" fill={accent} opacity="0.7" />
  </svg>
);

const MotifSprig = ({ neutral, accent }) => (
  <svg viewBox="0 0 240 90" className="w-44 h-[70px]" aria-hidden="true">
    <path d="M120,80 Q120,52 120,28" stroke={neutral} strokeWidth="1.5" fill="none" opacity="0.7" />
    <ellipse cx="110" cy="56" rx="8" ry="3" fill={neutral} opacity="0.55" transform="rotate(-32 110 56)" />
    <ellipse cx="130" cy="46" rx="8" ry="3" fill={neutral} opacity="0.55" transform="rotate(32 130 46)" />
    <circle cx="120" cy="26" r="5" fill={accent} />
    <circle cx="114" cy="22" r="4" fill={accent} opacity="0.7" />
    <circle cx="126" cy="22" r="4" fill={accent} opacity="0.7" />
    <circle cx="120" cy="18" r="4" fill={accent} opacity="0.85" />
    <ellipse cx="92" cy="76" rx="4" ry="2" fill={accent} opacity="0.4" transform="rotate(20 92 76)" />
    <ellipse cx="148" cy="78" rx="4" ry="2" fill={accent} opacity="0.4" transform="rotate(-20 148 78)" />
  </svg>
);

const MotifPetals = ({ neutral, accent }) => (
  <svg viewBox="0 0 240 90" className="w-44 h-[70px]" aria-hidden="true">
    <path d="M100,74 120,48 140,74 Z" fill={neutral} opacity="0.45" />
    <ellipse cx="68" cy="70" rx="6" ry="3" fill={accent} opacity="0.5" transform="rotate(-18 68 70)" />
    <ellipse cx="90" cy="75" rx="5" ry="2.5" fill={accent} opacity="0.4" transform="rotate(12 90 75)" />
    <ellipse cx="150" cy="75" rx="5" ry="2.5" fill={accent} opacity="0.4" transform="rotate(-12 150 75)" />
    <ellipse cx="172" cy="70" rx="6" ry="3" fill={accent} opacity="0.5" transform="rotate(18 172 70)" />
    <circle cx="120" cy="60" r="3" fill={accent} />
    <circle cx="115" cy="58" r="2.5" fill={accent} opacity="0.7" />
    <circle cx="125" cy="58" r="2.5" fill={accent} opacity="0.7" />
  </svg>
);

const motifs = [MotifMountains, MotifSprig, MotifPetals];

export default function SectionDivider({ fromColor = "#F2EEE4", toColor = "#F2EEE4", variant = 0 }) {
  const isOlive =
    fromColor.toUpperCase() === OLIVE || toColor.toUpperCase() === OLIVE;
  const neutral = isOlive ? "#E4DED2" : OLIVE;
  const accent = "#C07847";
  const Motif = motifs[variant % motifs.length];

  return (
    <div
      className="w-full flex justify-center py-7"
      style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
      aria-hidden="true"
    >
      <Motif neutral={neutral} accent={accent} />
    </div>
  );
}