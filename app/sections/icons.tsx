import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v3M12 18v3M5.25 5.25l2.121 2.122M16.629 16.629l2.121 2.121M3 12h3M18 12h3M5.25 18.75l2.121-2.121M16.629 7.371l2.121-2.121M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />
    </svg>
  );
}

export function Waves(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 8.5c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
      <path
        d="M4 13.5c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.4}
      />
    </svg>
  );
}

export function AuroraLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 200" fill="none" aria-hidden="true" {...props}>
      <path
        d="M0 120C32 72 94 40 162 68c46 19 68 70 120 72 52 2 90-42 118-74"
        stroke="url(#a)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="a" x1="0" x2="400" y1="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5E17EB" />
          <stop offset="0.5" stopColor="#9042FF" />
          <stop offset="1" stopColor="#C6A3FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
