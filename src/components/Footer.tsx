import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Navigation } from 'lucide-react';
import { TirumalaLogo } from './TirumalaLogo';

interface FooterProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreMenu, onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const address = '1, Adan Bagh Extension, DayalBagh, Agra, Uttar Pradesh 282005';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '1, Adan Bagh Extension, DayalBagh, Agra, Uttar Pradesh 282005'
  )}`;

  return (
    <footer className="bg-[#080706] border-t border-[#1c1917] text-[#d6d3d1] relative">
      {/* Final Call to Action Section */}
      <div className="py-24 px-6 border-b border-[#1c1917] relative overflow-hidden text-center bg-gradient-to-b from-[#120f0c] to-[#080706]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#d4af37]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto z-10">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-4">
            <span>Authentic South Indian Flavours · DayalBagh, Agra</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f7f4ec] tracking-tight mb-6">
            Your Next Favourite Meal Awaits.
          </h2>

          <p className="text-base sm:text-lg text-[#a8a29e] max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Come for the complimentary steaming hot rasam, stay for the crisp golden benne dosas and frothy filter coffee in DayalBagh, Agra.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreMenu}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0c0a09] bg-gradient-to-r from-[#e5c07b] via-[#d4af37] to-[#b8860b] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              Explore the Menu
            </button>
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#f5ebd0] bg-[#1c1917] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-lg hover:bg-[#292524] transition-all"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Brand */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand Wordmark & Arch */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <TirumalaLogo size="md" showSubtitle={true} className="items-start text-left mb-4" />
            <p className="text-xs sm:text-sm text-[#a8a29e] font-light leading-relaxed max-w-sm mt-3">
              Honoring South Indian culinary traditions with live cast-iron hearth cooking, authentic Davangere white butter, and welcoming hospitality in Agra.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#f7f4ec] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a8a29e]">
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Full Menu & Prices
                </a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#d4af37] transition-colors">
                  Signature Benne Dosas
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Artisanal Food Gallery
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4af37] transition-colors">
                  The Complimentary Rasam Tradition
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#d4af37] transition-colors">
                  Location & Hours (12–11 PM)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Agra Location & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#f7f4ec] mb-4">
              Visit & Timings
            </h4>
            <div className="space-y-3 text-xs text-[#a8a29e]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f7f4ec] font-medium">12:00 PM – 11:00 PM</span>
                  <p className="text-[11px] text-[#78716c]">Open all 7 days (Sunday – Saturday)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>

              <div className="pt-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Quiet copyright) */}
        <div className="mt-12 pt-8 border-t border-[#1c1917] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78716c]">
          <p>© {new Date().getFullYear()} Tirumala Café, Agra. Authentic South Indian Flavours.</p>
          <div className="flex items-center gap-6">
            <span>Pure Vegetarian Kitchen · DayalBagh, Agra</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
