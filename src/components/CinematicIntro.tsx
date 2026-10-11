import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, X, Sparkles } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'awakening' | 'flame' | 'emblem' | 'brand' | 'signature' | 'exit'>('awakening');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play peaceful temple bell / sacred brass chime via Web Audio API
  const playTempleChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Fundamental temple bell tone (432Hz - sacred resonant frequency)
      const freqs = [432, 864, 1296, 1728];
      const gains = [0.25, 0.12, 0.06, 0.03];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        
        // Gentle strike envelope with long luxurious decay
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(gains[idx], now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 4.0);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const handleToggleSound = () => {
    setHasInteracted(true);
    if (!audioEnabled) {
      setAudioEnabled(true);
      playTempleChime();
    } else {
      setAudioEnabled(false);
    }
  };

  // 5-Second Animation Sequence Controller
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }

    // Sequence timelines:
    // 0.0s - 1.0s: Scene 1: The Awakening (Darkness & golden particles)
    // 1.0s - 2.0s: Scene 2: The Sacred Flame (Diya ignites and glows)
    // 2.0s - 3.0s: Scene 3: The Royal Emblem (Temple arch & symbols trace)
    // 3.0s - 4.0s: Scene 4: The Brand Reveal (Typography & Tagline shimmer)
    // 4.0s - 5.0s: Scene 5: The Final Signature (Complete gold emblem settled)
    // 5.2s+: Smooth transition into website

    const t1 = setTimeout(() => {
      setPhase('flame');
      if (audioEnabled) playTempleChime();
    }, 1000);

    const t2 = setTimeout(() => {
      setPhase('emblem');
    }, 2000);

    const t3 = setTimeout(() => {
      setPhase('brand');
    }, 3000);

    const t4 = setTimeout(() => {
      setPhase('signature');
    }, 4000);

    const t5 = setTimeout(() => {
      setPhase('exit');
    }, 5000);

    const t6 = setTimeout(() => {
      onComplete();
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete, audioEnabled]);

  // Golden particle dust canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * 0.05 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulse * 0.05) * 0.01;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.1, Math.min(0.85, p.opacity))})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-800 select-none ${
        phase === 'exit'
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: '#071510', // Deep forest green matching original logo backdrop
      }}
    >
      {/* Background Ambience & Golden Radial Bloom */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Forest-Green Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0d221a_0%,#071510_75%,#040e0b_100%)]" />

        {/* Dynamic Warm Golden Aura behind the center logo */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
            phase === 'awakening'
              ? 'bg-[#d4af37]/5 scale-75 opacity-40'
              : phase === 'flame'
              ? 'bg-[#ff9f1c]/15 scale-90 opacity-70'
              : 'bg-[#d4af37]/22 scale-105 opacity-100'
          }`}
        />

        {/* Ambient Film Grain Overlay */}
        <div className="absolute inset-0 bg-subtle-grain opacity-25" />
      </div>

      {/* Floating Golden Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Top Header Controls: Sound & Skip */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-30">
        {/* Subtle Ambient Sound Toggle */}
        <button
          onClick={handleToggleSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1b14]/70 border border-[#d4af37]/30 text-xs text-[#d4af37] hover:border-[#d4af37] hover:bg-[#0d231b] transition-all backdrop-blur-md"
          title="Toggle Temple Sound"
        >
          {audioEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#f7d070]" />
              <span className="tracking-wider uppercase text-[10px]">Chime On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span className="tracking-wider uppercase text-[10px] text-[#a8a29e]">Sound</span>
            </>
          )}
        </button>

        {/* Discreet Skip Intro Button */}
        <button
          onClick={onComplete}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0a1b14]/70 border border-[#d4af37]/30 text-xs font-semibold tracking-wider uppercase text-[#f5ebd0] hover:text-[#d4af37] hover:border-[#d4af37] hover:bg-[#0d231b] transition-all backdrop-blur-md group"
        >
          <span>Skip</span>
          <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Center 3D Logo Cinematic Composition */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-xl mx-auto px-6 text-center transform perspective-1000">
        {/* SVG Recreation of the Exact Tirumala Café Artwork */}
        <div className="relative transition-transform duration-1000 ease-out">
          <svg
            width="340"
            height="340"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] drop-shadow-[0_12px_36px_rgba(0,0,0,0.9)]"
          >
            <defs>
              {/* Antique Gold Metallic Foil Linear Gradient */}
              <linearGradient id="introGoldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffeaad" />
                <stop offset="25%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#9e781c" />
                <stop offset="75%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#fff3c9" />
              </linearGradient>

              {/* Shimmer Light Sweep for Typography */}
              <linearGradient id="shimmerSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="45%" stopColor="#fff8db" />
                <stop offset="55%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#fff8db" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>

              {/* Diya Sacred Flame Radial Glow */}
              <radialGradient id="flameRadial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fff275" />
                <stop offset="65%" stopColor="#ff8c00" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="ambientFlameGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffb703" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d4af37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* SCENE 3: The Royal Temple Arch & Capitals */}
            <g
              className={`transition-all duration-1000 ease-out ${
                phase === 'awakening' || phase === 'flame'
                  ? 'opacity-0 scale-95'
                  : 'opacity-100 scale-100'
              }`}
              style={{ transformOrigin: '200px 180px' }}
            >
              {/* Outer Decorative Crest Finial atop Gopuram */}
              <path
                d="M200 42 C196 52 192 60 200 70 C208 60 204 52 200 42 Z"
                fill="url(#introGoldMetallic)"
              />
              <circle cx="200" cy="38" r="4.5" fill="url(#introGoldMetallic)" />
              <circle cx="186" cy="54" r="3" fill="url(#introGoldMetallic)" />
              <circle cx="214" cy="54" r="3" fill="url(#introGoldMetallic)" />

              {/* Outer Arch Frame */}
              <path
                d="M92 250 V156 C92 94 140 56 200 56 C260 56 308 94 308 156 V250"
                stroke="url(#introGoldMetallic)"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Beaded Band along Arch Curve */}
              <path
                d="M106 250 V158 C106 106 148 74 200 74 C252 74 294 106 294 158 V250"
                stroke="url(#introGoldMetallic)"
                strokeWidth="3.5"
                strokeDasharray="6 4"
              />

              {/* Elaborate Scrolled Capitals (Left & Right) */}
              <g transform="translate(92, 145)">
                <path
                  d="M-14 -12 C-24 -4 -20 16 -6 18 C8 18 12 4 8 -6 C4 -14 -6 -16 -14 -12 Z"
                  fill="url(#introGoldMetallic)"
                />
              </g>
              <g transform="translate(308, 145)">
                <path
                  d="M14 -12 C24 -4 20 16 6 18 C-8 18 -12 4 -8 -6 C-4 -14 6 -16 14 -12 Z"
                  fill="url(#introGoldMetallic)"
                />
              </g>

              {/* Fluted Column Pilasters */}
              <rect x="80" y="160" width="24" height="84" rx="2" stroke="url(#introGoldMetallic)" strokeWidth="3" fill="none" />
              <rect x="296" y="160" width="24" height="84" rx="2" stroke="url(#introGoldMetallic)" strokeWidth="3" fill="none" />
              <line x1="88" y1="164" x2="88" y2="240" stroke="url(#introGoldMetallic)" strokeWidth="2" />
              <line x1="96" y1="164" x2="96" y2="240" stroke="url(#introGoldMetallic)" strokeWidth="2" />
              <line x1="304" y1="164" x2="304" y2="240" stroke="url(#introGoldMetallic)" strokeWidth="2" />
              <line x1="312" y1="164" x2="312" y2="240" stroke="url(#introGoldMetallic)" strokeWidth="2" />

              {/* Stepped Plinths Base */}
              <rect x="70" y="244" width="44" height="12" rx="2" fill="url(#introGoldMetallic)" />
              <rect x="286" y="244" width="44" height="12" rx="2" fill="url(#introGoldMetallic)" />
              <line x1="60" y1="256" x2="340" y2="256" stroke="url(#introGoldMetallic)" strokeWidth="3.5" />
            </g>

            {/* SCENE 3: Sacred Symbols Under Arch (Namam, Chakra, Shankha) */}
            <g
              className={`transition-all duration-1000 delay-150 ease-out ${
                phase === 'awakening' || phase === 'flame'
                  ? 'opacity-0 scale-90'
                  : 'opacity-100 scale-100'
              }`}
              style={{ transformOrigin: '200px 120px' }}
            >
              {/* Sudarshana Chakra (Left of Namam) */}
              <g transform="translate(142, 122) scale(0.9)">
                <circle cx="0" cy="0" r="16" stroke="url(#introGoldMetallic)" strokeWidth="3" fill="none" />
                <circle cx="0" cy="0" r="6" fill="url(#introGoldMetallic)" />
                {/* 8 Radiant spokes */}
                <line x1="0" y1="-16" x2="0" y2="-22" stroke="url(#introGoldMetallic)" strokeWidth="2.5" />
                <line x1="0" y1="16" x2="0" y2="22" stroke="url(#introGoldMetallic)" strokeWidth="2.5" />
                <line x1="-16" y1="0" x2="-22" y2="0" stroke="url(#introGoldMetallic)" strokeWidth="2.5" />
                <line x1="16" y1="0" x2="22" y2="0" stroke="url(#introGoldMetallic)" strokeWidth="2.5" />
                <line x1="-11" y1="-11" x2="-16" y2="-16" stroke="url(#introGoldMetallic)" strokeWidth="2" />
                <line x1="11" y1="-11" x2="16" y2="-16" stroke="url(#introGoldMetallic)" strokeWidth="2" />
                <line x1="-11" y1="11" x2="-16" y2="16" stroke="url(#introGoldMetallic)" strokeWidth="2" />
                <line x1="11" y1="11" x2="16" y2="16" stroke="url(#introGoldMetallic)" strokeWidth="2" />
              </g>

              {/* Sacred Venkateswara Namam (Center) */}
              <g transform="translate(200, 116)">
                {/* White / Gold Outer U-shape */}
                <path
                  d="M-15 -18 C-15 -2 -9 16 0 20 C9 16 15 -2 15 -18"
                  stroke="url(#introGoldMetallic)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Center Vermilion Tilak Flame */}
                <path
                  d="M0 -22 L0 8"
                  stroke="#ff5e36"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                <circle cx="0" cy="-23" r="2.8" fill="#ff5e36" />
              </g>

              {/* Panchajanya Shankha / Conch (Right of Namam) */}
              <g transform="translate(258, 122) scale(0.9)">
                <path
                  d="M-10 -15 C-2 -22 10 -20 15 -10 C19 -1 15 12 3 18 C-5 14 -10 4 -10 -15 Z"
                  stroke="url(#introGoldMetallic)"
                  strokeWidth="3"
                  fill="none"
                />
                <path d="M-3 -10 C4 -2 3 8 -3 13" stroke="url(#introGoldMetallic)" strokeWidth="2.2" />
                <line x1="15" y1="-10" x2="21" y2="-15" stroke="url(#introGoldMetallic)" strokeWidth="3" />
                <line x1="3" y1="18" x2="7" y2="24" stroke="url(#introGoldMetallic)" strokeWidth="3" />
              </g>
            </g>

            {/* SCENE 2: The Sacred Diya & Illuminated Flame */}
            <g
              transform="translate(200, 204)"
              className={`transition-all duration-1000 ease-out ${
                phase === 'awakening' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            >
              {/* Flame Ambient Glow */}
              <circle
                cx="0"
                cy="-30"
                r="38"
                fill="url(#ambientFlameGlow)"
                className="animate-pulse opacity-90"
              />

              {/* Sacred Flame (Deepam) */}
              <path
                d="M0 -6 C-9 -20 0 -42 0 -54 C0 -42 9 -20 0 -6 Z"
                fill="url(#flameRadial)"
                className="drop-shadow-[0_0_16px_rgba(255,183,3,0.9)]"
              />
              <circle cx="0" cy="-28" r="4.5" fill="#ffffff" opacity="0.9" />

              {/* Diya Bowl Outer Contour */}
              <path
                d="M-42 0 C-42 24 42 24 42 0 C42 -4 -42 -4 -42 0 Z"
                fill="url(#introGoldMetallic)"
              />

              {/* Lotus Petal Etchings on Diya Rim */}
              <path
                d="M0 6 C-8 13 0 19 0 19 C0 19 8 13 0 6 Z"
                fill="#071510"
              />
              <path
                d="M-18 4 C-24 10 -16 16 -16 16 C-16 16 -10 10 -18 4 Z"
                fill="#071510"
              />
              <path
                d="M18 4 C24 10 16 16 16 16 C16 16 10 10 18 4 Z"
                fill="#071510"
              />

              {/* Ornate Pedestal Foot */}
              <path
                d="M-16 18 L-22 32 L22 32 L16 18 Z"
                fill="url(#introGoldMetallic)"
              />
              <rect x="-28" y="32" width="56" height="5.5" rx="2.5" fill="url(#introGoldMetallic)" />
            </g>

            {/* SCENE 4 & 5: The Typography Brand Reveal */}
            <g
              className={`transition-all duration-1000 ease-out ${
                phase === 'awakening' || phase === 'flame' || phase === 'emblem'
                  ? 'opacity-0 translate-y-3'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {/* "TIRUMALA" Typography */}
              <text
                x="200"
                y="302"
                textAnchor="middle"
                className="font-cinzel text-3xl font-extrabold tracking-wider"
                fill={phase === 'brand' ? 'url(#shimmerSweep)' : 'url(#introGoldMetallic)'}
                style={{
                  letterSpacing: '0.12em',
                  filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))',
                }}
              >
                TIRUMALA
              </text>

              {/* Swashed Curled "CAFÉ" with Twin Flourishes */}
              <g transform="translate(200, 336)">
                {/* Left Swash Ribbon */}
                <path
                  d="M-92 -4 C-80 -12 -65 2 -48 -4"
                  stroke="url(#introGoldMetallic)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="-92" cy="-4" r="2" fill="url(#introGoldMetallic)" />

                {/* Word "CAFÉ" */}
                <text
                  x="0"
                  y="2"
                  textAnchor="middle"
                  className="font-editorial italic font-semibold text-xl tracking-[0.25em]"
                  fill="#f7f4ec"
                  style={{
                    filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))',
                  }}
                >
                  CAFÉ
                </text>

                {/* Right Swash Ribbon */}
                <path
                  d="M48 -4 C65 2 80 -12 92 -4"
                  stroke="url(#introGoldMetallic)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="92" cy="-4" r="2" fill="url(#introGoldMetallic)" />
              </g>

              {/* Horizontal Rule & Subtitle "AUTHENTIC SOUTH INDIAN FLAVOURS" */}
              <g
                className={`transition-all duration-1000 delay-200 ${
                  phase === 'signature' || phase === 'exit' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <line x1="56" y1="364" x2="88" y2="364" stroke="url(#introGoldMetallic)" strokeWidth="1.5" />
                <text
                  x="200"
                  y="367"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] uppercase font-semibold text-[#d4af37]"
                  fill="url(#introGoldMetallic)"
                  style={{
                    letterSpacing: '0.28em',
                  }}
                >
                  AUTHENTIC SOUTH INDIAN FLAVOURS
                </text>
                <line x1="312" y1="364" x2="344" y2="364" stroke="url(#introGoldMetallic)" strokeWidth="1.5" />
              </g>
            </g>
          </svg>
        </div>

        {/* Cinematic Step Indicator Micro-Caption */}
        <div className="h-6 mt-4 flex items-center justify-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-medium transition-opacity duration-500">
            {phase === 'awakening' && 'The Awakening'}
            {phase === 'flame' && 'The Sacred Flame'}
            {phase === 'emblem' && 'The Royal Heritage'}
            {phase === 'brand' && 'Tirumala Café'}
            {(phase === 'signature' || phase === 'exit') && 'Authentic South Indian Flavours'}
          </p>
        </div>

        {/* Enter Immediately Button */}
        <button
          onClick={onComplete}
          className="mt-6 px-6 py-2 rounded-full border border-[#d4af37]/40 bg-[#0d221a]/60 hover:bg-[#d4af37] text-xs font-semibold uppercase tracking-widest text-[#f5ebd0] hover:text-[#071510] transition-all backdrop-blur-md flex items-center gap-2 group shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-[#071510] transition-colors" />
          <span>Enter Tirumala Café</span>
        </button>
      </div>

      {/* Progress Timeline Bar along bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#040e0b]">
        <div
          className="h-full bg-gradient-to-r from-[#b38728] via-[#d4af37] to-[#fff3c9] transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          style={{
            width:
              phase === 'awakening'
                ? '20%'
                : phase === 'flame'
                ? '40%'
                : phase === 'emblem'
                ? '65%'
                : phase === 'brand'
                ? '85%'
                : '100%',
          }}
        />
      </div>
    </div>
  );
};
