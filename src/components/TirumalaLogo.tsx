import React from 'react';

interface TirumalaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'emblem-only';
  showSubtitle?: boolean;
}

export const TirumalaLogo: React.FC<TirumalaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { width: 140, height: 140 },
    md: { width: 220, height: 220 },
    lg: { width: 320, height: 320 },
    xl: { width: 440, height: 440 },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        width={current.width}
        height={current.height}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]"
      >
        <defs>
          {/* Antique Gold Metallic Foil Gradient */}
          <linearGradient id="exactGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="18%" stopColor="#e8c468" />
            <stop offset="38%" stopColor="#c59b27" />
            <stop offset="55%" stopColor="#8d6812" />
            <stop offset="78%" stopColor="#d4af37" />
            <stop offset="92%" stopColor="#f3d789" />
            <stop offset="100%" stopColor="#fff8db" />
          </linearGradient>

          {/* Secondary Shimmer Gradient */}
          <linearGradient id="goldShimmer" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#c59b27" />
            <stop offset="35%" stopColor="#fae29c" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#fae29c" />
            <stop offset="100%" stopColor="#c59b27" />
          </linearGradient>

          {/* Deep Forest-Green Background Radial Gradient */}
          <radialGradient id="forestBackdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0d241c" />
            <stop offset="65%" stopColor="#081813" />
            <stop offset="100%" stopColor="#05100c" />
          </radialGradient>

          {/* Flame Radial Glow */}
          <radialGradient id="sacredFlameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#ffe478" />
            <stop offset="70%" stopColor="#ff7b00" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          {/* Ambient Diya Halo */}
          <radialGradient id="haloAmbient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb703" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#d4af37" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Halo Behind Diya */}
        <circle cx="250" cy="225" r="90" fill="url(#haloAmbient)" />

        {/* ======================================================== */}
        {/* 1. TEMPLE ARCH (GOPURAM MANDAPAM)                        */}
        {/* ======================================================== */}
        <g id="temple-arch">
          {/* Top Crown Finial Crest (Acanthus / Kalash) */}
          <path
            d="M250 44 C244 56 238 66 250 80 C262 66 256 56 250 44 Z"
            fill="url(#exactGold)"
          />
          <circle cx="250" cy="38" r="5" fill="url(#exactGold)" />
          <circle cx="234" cy="58" r="3.5" fill="url(#exactGold)" />
          <circle cx="266" cy="58" r="3.5" fill="url(#exactGold)" />
          <path
            d="M228 68 C238 62 245 74 250 78 C255 74 262 62 272 68"
            stroke="url(#exactGold)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Main Outer Arch Moldings */}
          <path
            d="M140 274 V160 C140 92 190 62 250 62 C310 62 360 92 360 160 V274"
            stroke="url(#exactGold)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Beaded Pearl Ring along Arch Curve */}
          <path
            d="M156 274 V162 C156 106 198 78 250 78 C302 78 344 106 344 162 V274"
            stroke="url(#exactGold)"
            strokeWidth="4"
            strokeDasharray="6 5"
          />

          {/* Left Arch Scrolled Volute Capital */}
          <g transform="translate(140, 148)">
            <path
              d="M-18 -14 C-32 -4 -26 22 -6 24 C10 24 16 6 10 -8 C5 -18 -8 -20 -18 -14 Z"
              fill="url(#exactGold)"
            />
            <circle cx="-6" cy="5" r="4" fill="#081813" />
          </g>

          {/* Right Arch Scrolled Volute Capital */}
          <g transform="translate(360, 148)">
            <path
              d="M18 -14 C32 -4 26 22 6 24 C-10 24 -16 6 -10 -8 C-5 -18 8 -20 18 -14 Z"
              fill="url(#exactGold)"
            />
            <circle cx="6" cy="5" r="4" fill="#081813" />
          </g>

          {/* Left Fluted Pillar Column */}
          <rect x="124" y="168" width="32" height="106" rx="2" stroke="url(#exactGold)" strokeWidth="3.5" fill="none" />
          <line x1="134" y1="172" x2="134" y2="268" stroke="url(#exactGold)" strokeWidth="2.5" />
          <line x1="146" y1="172" x2="146" y2="268" stroke="url(#exactGold)" strokeWidth="2.5" />

          {/* Right Fluted Pillar Column */}
          <rect x="344" y="168" width="32" height="106" rx="2" stroke="url(#exactGold)" strokeWidth="3.5" fill="none" />
          <line x1="354" y1="172" x2="354" y2="268" stroke="url(#exactGold)" strokeWidth="2.5" />
          <line x1="366" y1="172" x2="366" y2="268" stroke="url(#exactGold)" strokeWidth="2.5" />

          {/* Left Column Stepped Plinth Base */}
          <rect x="112" y="274" width="56" height="14" rx="2" fill="url(#exactGold)" />
          <rect x="104" y="288" width="72" height="6" rx="1.5" fill="url(#exactGold)" />

          {/* Right Column Stepped Plinth Base */}
          <rect x="332" y="274" width="56" height="14" rx="2" fill="url(#exactGold)" />
          <rect x="324" y="288" width="72" height="6" rx="1.5" fill="url(#exactGold)" />

          {/* Bottom Continuous Ground Base Line */}
          <line x1="96" y1="294" x2="404" y2="294" stroke="url(#exactGold)" strokeWidth="4" />
        </g>

        {/* ======================================================== */}
        {/* 2. SACRED EMBLEMS (CHAKRA, NAMAM, SHANKHA)               */}
        {/* ======================================================== */}
        <g id="sacred-symbols">
          {/* Sudarshana Chakra (Left of Namam) */}
          <g transform="translate(192, 134)">
            <circle cx="0" cy="0" r="18" stroke="url(#exactGold)" strokeWidth="3.5" fill="none" />
            <circle cx="0" cy="0" r="7" fill="url(#exactGold)" />
            {/* 8 Radiant Flaming Spokes */}
            <line x1="0" y1="-18" x2="0" y2="-25" stroke="url(#exactGold)" strokeWidth="3" />
            <line x1="0" y1="18" x2="0" y2="25" stroke="url(#exactGold)" strokeWidth="3" />
            <line x1="-18" y1="0" x2="-25" y2="0" stroke="url(#exactGold)" strokeWidth="3" />
            <line x1="18" y1="0" x2="25" y2="0" stroke="url(#exactGold)" strokeWidth="3" />
            <line x1="-13" y1="-13" x2="-18" y2="-18" stroke="url(#exactGold)" strokeWidth="2.5" />
            <line x1="13" y1="-13" x2="18" y2="-18" stroke="url(#exactGold)" strokeWidth="2.5" />
            <line x1="-13" y1="13" x2="-18" y2="18" stroke="url(#exactGold)" strokeWidth="2.5" />
            <line x1="13" y1="13" x2="18" y2="18" stroke="url(#exactGold)" strokeWidth="2.5" />
          </g>

          {/* Lord Venkateswara's Sacred Namam (Center) */}
          <g transform="translate(250, 130)">
            {/* White/Gold Outer U-Wings */}
            <path
              d="M-17 -22 C-17 -2 -10 18 0 22 C10 18 17 -2 17 -22"
              stroke="url(#exactGold)"
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Central Vermilion Tilak Flame */}
            <path
              d="M0 -26 L0 10"
              stroke="#ff5e36"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="0" cy="-28" r="3.2" fill="#ff5e36" />
          </g>

          {/* Panchajanya Shankha / Conch (Right of Namam) */}
          <g transform="translate(308, 134)">
            <path
              d="M-12 -18 C-3 -26 12 -24 18 -12 C23 -1 18 14 3 22 C-7 18 -12 6 -12 -18 Z"
              stroke="url(#exactGold)"
              strokeWidth="3.5"
              fill="none"
            />
            <path d="M-4 -12 C5 -2 4 10 -4 16" stroke="url(#exactGold)" strokeWidth="2.8" />
            <line x1="18" y1="-12" x2="25" y2="-18" stroke="url(#exactGold)" strokeWidth="3.5" />
            <line x1="3" y1="22" x2="8" y2="30" stroke="url(#exactGold)" strokeWidth="3.5" />
          </g>
        </g>

        {/* ======================================================== */}
        {/* 3. TRADITIONAL BRONZE DIYA (OIL LAMP)                    */}
        {/* ======================================================== */}
        <g id="sacred-diya" transform="translate(250, 240)">
          {/* Sacred Flame (Deepam) */}
          <path
            d="M0 -6 C-11 -24 0 -50 0 -64 C0 -50 11 -24 0 -6 Z"
            fill="url(#sacredFlameGlow)"
            className="animate-pulse"
          />
          <circle cx="0" cy="-32" r="5" fill="#ffffff" opacity="0.95" />

          {/* Wide Flared Oil Bowl */}
          <path
            d="M-52 0 C-52 28 52 28 52 0 C52 -5 -52 -5 -52 0 Z"
            fill="url(#exactGold)"
          />

          {/* Detailed Lotus Petals Etched across Diya Bowl */}
          {/* Center Lotus Petal */}
          <path
            d="M0 6 C-10 16 0 24 0 24 C0 24 10 16 0 6 Z"
            fill="#081813"
          />
          {/* Left Lotus Petals */}
          <path
            d="M-22 4 C-30 12 -20 20 -20 20 C-20 20 -12 12 -22 4 Z"
            fill="#081813"
          />
          <path
            d="M-38 2 C-45 8 -36 14 -36 14 C-36 14 -30 8 -38 2 Z"
            fill="#081813"
          />
          {/* Right Lotus Petals */}
          <path
            d="M22 4 C30 12 20 20 20 20 C20 20 12 12 22 4 Z"
            fill="#081813"
          />
          <path
            d="M38 2 C45 8 36 14 36 14 C36 14 30 8 38 2 Z"
            fill="#081813"
          />

          {/* Pedestal Foot */}
          <path
            d="M-20 22 L-28 38 L28 38 L20 22 Z"
            fill="url(#exactGold)"
          />
          <rect x="-35" y="38" width="70" height="7" rx="3" fill="url(#exactGold)" />
        </g>

        {variant === 'full' && (
          <>
            {/* ======================================================== */}
            {/* 4. BRAND TYPOGRAPHY: "TIRUMALA"                          */}
            {/* ======================================================== */}
            <g id="typography-tirumala" transform="translate(250, 370)">
              {/* Swash Tail on Capital 'T' */}
              <path
                d="M-154 -14 C-172 -14 -188 -6 -194 8 C-200 22 -184 32 -172 26 C-162 20 -166 6 -176 8"
                stroke="url(#exactGold)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />

              {/* Main "TIRUMALA" Wordmark */}
              <text
                x="0"
                y="0"
                textAnchor="middle"
                className="font-cinzel text-5xl font-black tracking-wide"
                fill="url(#exactGold)"
                style={{
                  letterSpacing: '0.1em',
                  filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.9))',
                }}
              >
                TIRUMALA
              </text>
            </g>

            {/* ======================================================== */}
            {/* 5. SUB-BRAND: "CAFÉ" WITH TWIN FLOURISHES                */}
            {/* ======================================================== */}
            <g id="typography-cafe" transform="translate(250, 420)">
              {/* Left Flourish Ribbon */}
              <path
                d="M-115 -4 C-98 -16 -78 4 -58 -4"
                stroke="url(#exactGold)"
                strokeWidth="3.6"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="-115" cy="-4" r="2.8" fill="url(#exactGold)" />

              {/* Word "CAFÉ" with Acute Accent */}
              <text
                x="0"
                y="4"
                textAnchor="middle"
                className="font-editorial italic font-bold text-3xl tracking-[0.28em]"
                fill="#fbf7ec"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))',
                }}
              >
                CAFÉ
              </text>

              {/* Right Flourish Ribbon */}
              <path
                d="M58 -4 C78 4 98 -16 115 -4"
                stroke="url(#exactGold)"
                strokeWidth="3.6"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="115" cy="-4" r="2.8" fill="url(#exactGold)" />
            </g>

            {/* ======================================================== */}
            {/* 6. TAGLINE: "AUTHENTIC SOUTH INDIAN FLAVOURS"            */}
            {/* ======================================================== */}
            {showSubtitle && (
              <g id="typography-tagline" transform="translate(250, 458)">
                {/* Left Thin Gold Rule */}
                <line x1="-190" y1="-4" x2="-150" y2="-4" stroke="url(#exactGold)" strokeWidth="1.8" />

                {/* Tagline Text */}
                <text
                  x="0"
                  y="0"
                  textAnchor="middle"
                  className="font-sans text-[11px] uppercase font-bold"
                  fill="url(#exactGold)"
                  style={{
                    letterSpacing: '0.28em',
                  }}
                >
                  AUTHENTIC SOUTH INDIAN FLAVOURS
                </text>

                {/* Right Thin Gold Rule */}
                <line x1="150" y1="-4" x2="190" y2="-4" stroke="url(#exactGold)" strokeWidth="1.8" />
              </g>
            )}
          </>
        )}
      </svg>
    </div>
  );
};
