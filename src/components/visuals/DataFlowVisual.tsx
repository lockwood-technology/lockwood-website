export default function DataFlowVisual() {
  return (
    <svg viewBox="0 0 520 420" width="100%" style={{ display: "block" }}>
      <defs>
        <linearGradient id="dfg1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--color-primary-500)" stopOpacity="0.15" />
          <stop offset="1" stopColor="var(--color-primary-500)" stopOpacity="0" />
        </linearGradient>
        <pattern id="dfgrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="var(--color-ink-100)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="520" height="420" fill="url(#dfgrid)" />
      <line x1="40" y1="380" x2="500" y2="380" stroke="var(--color-ink-300)" strokeWidth="1" />
      <line x1="40" y1="40" x2="40" y2="380" stroke="var(--color-ink-300)" strokeWidth="1" />
      <path
        d="M40 320 Q120 300 180 280 T300 220 T420 160 T500 120 L500 380 L40 380 Z"
        fill="url(#dfg1)"
      />
      <path
        d="M40 320 Q120 300 180 280 T300 220 T420 160 T500 120"
        fill="none"
        stroke="var(--color-primary-500)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M40 340 Q140 330 220 300 T360 250 T500 200"
        fill="none"
        stroke="var(--color-ink-500)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      {[
        [120, 302],
        [220, 282],
        [300, 220],
        [420, 160],
        [500, 120],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="var(--color-primary-500)" fillOpacity="0.15" />
          <circle cx={x} cy={y} r="4" fill="var(--color-primary-500)" />
        </g>
      ))}
      <g transform="translate(300, 180)">
        <rect x="-54" y="-30" width="108" height="28" rx="14" fill="#111" />
        <text
          x="0"
          y="-11"
          fill="#fff"
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
        >
          +214% reach
        </text>
      </g>
    </svg>
  );
}
