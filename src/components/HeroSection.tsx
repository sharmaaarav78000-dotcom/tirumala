import React, { useState } from 'react';
import { ArrowDown, Flame, Sparkles, MapPin, Clock } from 'lucide-react';
import { TirumalaLogo } from './TirumalaLogo';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onDiscoverStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onDiscoverStory,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#0c0a09]">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm Golden Glow Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[140px]" />
        {/* Deep Charcoal Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0a09_85%)]" />
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 bg-subtle-grain opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Hero Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Unboxed Metadata Kicker (Verified Agra location & hours) */}
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              DayalBagh, Agra
            </span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              12:00 PM – 11:00 PM Daily
            </span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>Pure Desi Ghee & Benne</span>
          </div>

          {/* User Requested Exact Headline */}
          <h1
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#f7f4ec] leading-[1.08] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Good Food. <br />
            <span className="italic font-normal text-gold-gradient">
              Beautiful Moments.
            </span>
          </h1>

          {/* User Requested Exact Supporting text */}
          <p className="text-base sm:text-lg text-[#d6d3d1] max-w-xl font-light leading-relaxed mb-8">
            Discover the flavours, freshness and experience of Tirumala Cafe.
            From complimentary steaming rasam poured upon arrival to paper-thin dosas roasted in pure white butter and aromatic spices in DayalBagh, Agra.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onExploreMenu}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0c0a09] bg-gradient-to-r from-[#e5c07b] via-[#d4af37] to-[#b8860b] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] whitespace-nowrap"
            >
              Explore Our Menu
            </button>

            <button
              onClick={onDiscoverStory}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#f5ebd0] bg-[#1c1917] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#292524] active:scale-[0.98] transition-all rounded-lg whitespace-nowrap"
            >
              Discover Tirumala Cafe
            </button>
          </div>

          {/* Clean Unboxed Editorial Highlights */}
          <div className="pt-6 border-t border-[#292524] w-full grid grid-cols-3 gap-4 text-left">
            <div>
              <p className="text-lg lg:text-xl font-cinzel font-bold text-[#f7f4ec] tabular-nums">
                Complimentary
              </p>
              <p className="text-[11px] text-[#a8a29e] tracking-wider uppercase mt-0.5">
                Hot Rasam on Arrival
              </p>
            </div>
            <div>
              <p className="text-lg lg:text-xl font-cinzel font-bold text-[#f7f4ec] tabular-nums">
                Davangere
              </p>
              <p className="text-[11px] text-[#a8a29e] tracking-wider uppercase mt-0.5">
                White Butter & Podi
              </p>
            </div>
            <div>
              <p className="text-lg lg:text-xl font-cinzel font-bold text-[#f7f4ec] tabular-nums">
                12 – 11 PM
              </p>
              <p className="text-[11px] text-[#a8a29e] tracking-wider uppercase mt-0.5">
                Open All 7 Days
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Food Centerpiece with High-Res Photography */}
        <div
          className="lg:col-span-5 flex justify-center items-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative w-full max-w-md bg-gradient-to-b from-[#1c1917] to-[#141210] rounded-2xl p-6 border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-transform duration-200 ease-out"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top Atmospheric Steam Graphics */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none opacity-40">
              <span className="w-1.5 h-12 bg-gradient-to-t from-[#d4af37] to-transparent rounded-full animate-steam" />
              <span className="w-2 h-16 bg-gradient-to-t from-[#f5ebd0] to-transparent rounded-full animate-steam delay-150" />
              <span className="w-1.5 h-10 bg-gradient-to-t from-[#d4af37] to-transparent rounded-full animate-steam delay-300" />
            </div>

            {/* Food Image Container */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-5 border border-[#292524] shadow-inner group">
              <img
                src="/images/hero_dosa.jpg"
                alt="Golden Crisp Tirumala Dosa on Banana Leaf"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-black/20" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[#d4af37] font-semibold border border-[#d4af37]/40 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#ff5e36]" />
                  Fresh from Cast-Iron Hearth
                </span>
                <span className="px-2 py-0.5 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[11px] text-[#f5ebd0] font-mono">
                  300°C Tawa
                </span>
              </div>
            </div>

            {/* Tirumala Authentic Brand Mark Display */}
            <div className="mb-4 flex justify-center">
              <TirumalaLogo size="md" showSubtitle={true} />
            </div>

            {/* Visual Highlight Card: Signature Ritual */}
            <div className="pt-4 border-t border-[#292524] bg-[#0c0a09]/50 rounded-xl p-4 border border-[#292524]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  House Special
                </span>
                <span className="text-xs font-mono text-gold-gradient font-bold tabular-nums">
                  ₹269 / ₹279
                </span>
              </div>

              <h2 className="font-editorial text-lg font-bold text-[#f7f4ec] mb-1">
                Tirumala Special Dosa
              </h2>
              <p className="text-xs text-[#a8a29e] leading-relaxed">
                Loaded with cashews, fresh malai paneer, sweet corn, green peas, and molten cheese with house churned white butter.
              </p>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl" />
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a8a29e] hover:text-[#d4af37] transition-colors text-[10px] tracking-widest uppercase"
      >
        <span>Discover Our Story</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
