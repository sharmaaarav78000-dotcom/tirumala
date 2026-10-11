import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed, Calendar } from 'lucide-react';
import { TirumalaLogo } from './TirumalaLogo';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenPlatter: () => void;
  onReplayIntro?: () => void;
  platterCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenPlatter,
  onReplayIntro,
  platterCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0a09]/95 backdrop-blur-md py-3 border-b border-[#292524] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
            : 'bg-gradient-to-b from-[#0c0a09]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand emblem and wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/50 flex items-center justify-center bg-[#071813] group-hover:border-[#d4af37] transition-all overflow-hidden p-1 shadow-md">
              <TirumalaLogo size="sm" variant="emblem-only" className="w-8 h-8 pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel tracking-wider text-sm md:text-base font-bold text-gold-gradient leading-tight">
                TIRUMALA CAFÉ
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#a8a29e] uppercase font-medium">
                DayalBagh · Agra
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium tracking-wide text-[#d6d3d1]">
            <a
              href="#menu"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Menu
            </a>
            <a
              href="#signature"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Signature Dosas
            </a>
            <a
              href="#gallery"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Food Gallery
            </a>
            <a
              href="#experience"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Our Craft
            </a>
            <a
              href="#visit"
              className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Visit & Hours
            </a>
          </nav>

          {/* Zone 3: 1 primary action + Quick platter icon */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Replay 3D Intro Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141210] border border-[#d4af37]/30 text-[#d4af37] hover:border-[#d4af37] hover:bg-[#1c1917] transition-all text-xs font-medium"
                title="Watch Cinematic Logo Intro"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider">Intro</span>
              </button>
            )}

            {/* Platter selection badge button */}
            <button
              onClick={onOpenPlatter}
              className="relative p-2 rounded-lg bg-[#1c1917] border border-[#292524] text-[#d6d3d1] hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              title="View Tasting Platter"
              aria-label="View Tasting Platter"
            >
              <UtensilsCrossed className="w-4 h-4" />
              {platterCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c59b27] text-[#0c0a09] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {platterCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0c0a09] bg-gradient-to-r from-[#e5c07b] via-[#d4af37] to-[#b8860b] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-[0_2px_12px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f7d070]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#1c1917] border border-[#292524] text-[#d6d3d1] hover:text-[#d4af37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0a09]/98 pt-24 px-6 pb-8 md:hidden flex flex-col justify-between">
          <div className="flex flex-col gap-6 text-lg font-cinzel text-center">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f4ec] hover:text-[#d4af37] py-2 border-b border-[#1c1917]"
            >
              Explore Menu
            </a>
            <a
              href="#signature"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f4ec] hover:text-[#d4af37] py-2 border-b border-[#1c1917]"
            >
              Signature Favourites
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f4ec] hover:text-[#d4af37] py-2 border-b border-[#1c1917]"
            >
              Artisanal Food Gallery
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f4ec] hover:text-[#d4af37] py-2 border-b border-[#1c1917]"
            >
              Our Craft
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f7f4ec] hover:text-[#d4af37] py-2 border-b border-[#1c1917]"
            >
              Visit Us (DayalBagh, Agra)
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 text-center font-semibold text-xs tracking-widest uppercase bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0c0a09] rounded-lg shadow-lg"
            >
              Reserve a Table
            </button>
            <p className="text-center text-xs text-[#d4af37] tracking-widest uppercase font-mono">
              12:00 PM – 11:00 PM Daily (Sunday – Saturday)
            </p>
          </div>
        </div>
      )}
    </>
  );
};
