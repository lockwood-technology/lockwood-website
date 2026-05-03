export default function EastAfricaMap() {
  const NEUTRAL = "rgba(255,255,255,0.08)";
  const NEUTRAL_STROKE = "rgba(255,255,255,0.28)";
  const LOCATOR_FILL = "rgba(255,255,255,0.12)";
  const LOCATOR_STROKE = "rgba(255,255,255,0.35)";
  const ACCENT = "var(--color-primary-500)";

  return (
    <svg viewBox="0 0 900 620" width="100%" style={{ display: "block" }}>
      <defs>
        <pattern id="eagrid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.14)" />
        </pattern>
        <filter id="eaGlow">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <linearGradient id="zoomBeam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(95,120,255,0)" />
          <stop offset="60%" stopColor="rgba(95,120,255,0.15)" />
          <stop offset="100%" stopColor="rgba(95,120,255,0)" />
        </linearGradient>
      </defs>

      <g transform="translate(20, 70)">
        <path
          d="M 120 40 L 170 30 L 220 38 L 250 55 L 275 50 L 280 80 L 295 95 L 285 120 L 290 150 L 300 175 L 288 205 L 260 235 L 240 275 L 235 310 L 205 340 L 170 350 L 130 345 L 90 325 L 58 285 L 45 240 L 40 190 L 55 145 L 80 100 L 105 70 Z"
          fill={LOCATOR_FILL}
          stroke={LOCATOR_STROKE}
          strokeWidth="1.2"
        />
        <g stroke={LOCATOR_STROKE} strokeWidth="0.6" fill="none" opacity="0.6">
          <path d="M 55 145 L 140 160 L 200 180 L 270 165" />
          <path d="M 140 160 L 150 220 L 130 260" />
          <path d="M 200 180 L 215 230 L 235 275" />
          <path d="M 88 200 L 150 220 L 215 230" />
          <path d="M 130 260 L 200 280 L 230 310" />
          <path d="M 58 285 L 130 260" />
        </g>
        <circle
          cx="210"
          cy="220"
          r="42"
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
          strokeDasharray="5 4"
          opacity="0.9"
        />
        <circle cx="215" cy="232" r="10" fill="#fff" opacity="0.85" />
        <circle cx="215" cy="232" r="4" fill={ACCENT} />
      </g>

      <path
        d="M 260 260 L 400 140 L 400 500 L 260 310 Z"
        fill="url(#zoomBeam)"
        opacity="0.7"
      />
      <line
        x1="262"
        y1="260"
        x2="400"
        y2="180"
        stroke="rgba(95,120,255,0.4)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <line
        x1="262"
        y1="310"
        x2="400"
        y2="460"
        stroke="rgba(95,120,255,0.4)"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      <g transform="translate(380, 30)">
        <rect x="0" y="0" width="500" height="560" fill="url(#eagrid)" opacity="0.7" />

        <path
          d="M 90 20 L 230 15 L 260 65 L 245 95 L 175 100 L 115 90 L 95 55 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 260 20 L 430 35 L 460 115 L 395 155 L 320 140 L 265 100 L 258 55 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 460 115 L 485 175 L 455 255 L 410 240 L 395 185 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 15 145 L 95 105 L 130 135 L 140 200 L 120 290 L 75 310 L 30 265 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 45 390 L 160 380 L 200 430 L 180 485 L 100 498 L 40 460 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 245 460 L 275 450 L 285 515 L 268 548 L 250 520 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />
        <path
          d="M 300 415 L 395 405 L 425 450 L 410 525 L 350 552 L 310 528 L 295 480 Z"
          fill={NEUTRAL}
          stroke={NEUTRAL_STROKE}
          strokeWidth="1"
        />

        <path
          d="M 130 135 L 215 120 L 232 150 L 225 190 L 215 215 L 160 210 L 130 185 Z"
          fill="rgba(255,255,255,0.28)"
          stroke="#fff"
          strokeWidth="1.3"
        />
        <path
          d="M 150 225 L 185 220 L 195 245 L 172 260 L 148 250 Z"
          fill="rgba(255,255,255,0.28)"
          stroke="#fff"
          strokeWidth="1.3"
        />
        <path
          d="M 145 270 L 180 265 L 188 295 L 165 310 L 140 295 Z"
          fill="rgba(255,255,255,0.28)"
          stroke="#fff"
          strokeWidth="1.3"
        />
        <path
          d="M 232 150 L 305 115 L 385 155 L 420 205 L 435 265 L 400 282 L 315 290 L 258 268 L 232 225 L 225 190 Z"
          fill="rgba(95,120,255,0.42)"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <path
          d="M 160 210 L 215 215 L 232 225 L 258 268 L 315 290 L 400 282 L 410 335 L 402 395 L 370 438 L 310 432 L 260 440 L 195 445 L 150 420 L 130 365 L 138 310 L 155 255 Z"
          fill="rgba(255,255,255,0.58)"
          stroke="#fff"
          strokeWidth="1.5"
        />
        <ellipse cx="420" cy="350" rx="8" ry="14" fill="rgba(255,255,255,0.58)" stroke="#fff" strokeWidth="1" />
        <ellipse cx="428" cy="318" rx="5" ry="9" fill="rgba(255,255,255,0.58)" stroke="#fff" strokeWidth="1" />

        <ellipse cx="220" cy="225" rx="32" ry="20" fill="rgba(95,120,255,0.55)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
        <path
          d="M 148 305 Q 158 355 152 420 Q 144 400 142 365 Q 142 325 148 305 Z"
          fill="rgba(95,120,255,0.35)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
        />
        <path
          d="M 260 465 Q 270 500 265 545 Q 258 520 256 490 Z"
          fill="rgba(95,120,255,0.35)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
        />

        <path
          d="M 395 395 C 380 340 370 290 355 235"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.75"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        <g>
          <circle cx="355" cy="235" r="18" fill={ACCENT} opacity="0.2" filter="url(#eaGlow)" />
          <circle cx="355" cy="235" r="9" fill="#fff" />
          <circle cx="355" cy="235" r="3.5" fill={ACCENT} />
          <text x="370" y="233" fill="#fff" fontSize="13" fontWeight="700">Nairobi</text>
          <text x="370" y="249" fill="#fff" opacity="0.65" fontSize="10">via Malsery partnership</text>
        </g>

        <g>
          <circle cx="395" cy="395" r="24" fill={ACCENT} opacity="0.24" filter="url(#eaGlow)" />
          <circle cx="395" cy="395" r="12" fill="#fff" />
          <circle cx="395" cy="395" r="5" fill={ACCENT} />
          <text x="414" y="393" fill="#fff" fontSize="14" fontWeight="800" letterSpacing="-0.01em">Dar es Salaam</text>
          <text x="414" y="410" fill="#fff" opacity="0.75" fontSize="11" fontWeight="600">Headquarters</text>
        </g>

        <text x="180" y="170" fill="#fff" opacity="0.85" fontSize="12" textAnchor="middle" fontWeight="700" letterSpacing="0.08em">UGANDA</text>
        <text x="320" y="200" fill="#fff" opacity="0.95" fontSize="14" textAnchor="middle" fontWeight="800" letterSpacing="0.1em">KENYA</text>
        <text x="275" y="360" fill="#fff" opacity="0.95" fontSize="18" textAnchor="middle" fontWeight="800" letterSpacing="0.14em">TANZANIA</text>
        <text x="170" y="245" fill="#fff" opacity="0.75" fontSize="9" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">RWANDA</text>
        <text x="163" y="292" fill="#fff" opacity="0.75" fontSize="9" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">BURUNDI</text>

        <text x="160" y="60" fill="#fff" opacity="0.32" fontSize="10" textAnchor="middle" letterSpacing="0.08em">SOUTH SUDAN</text>
        <text x="350" y="90" fill="#fff" opacity="0.32" fontSize="10" textAnchor="middle" letterSpacing="0.08em">ETHIOPIA</text>
        <text x="75" y="215" fill="#fff" opacity="0.28" fontSize="9" textAnchor="middle" letterSpacing="0.08em">DRC</text>
        <text x="120" y="445" fill="#fff" opacity="0.32" fontSize="10" textAnchor="middle" letterSpacing="0.08em">ZAMBIA</text>
        <text x="360" y="485" fill="#fff" opacity="0.32" fontSize="10" textAnchor="middle" letterSpacing="0.08em">MOZAMBIQUE</text>
      </g>
    </svg>
  );
}
