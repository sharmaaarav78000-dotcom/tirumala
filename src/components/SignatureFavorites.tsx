import React from 'react';
import { Sparkles, Flame, Award, Plus } from 'lucide-react';
import { MenuItem, PricingPreference } from '../types/cafe';

interface SignatureFavoritesProps {
  onAddToPlatter: (item: MenuItem, pref: PricingPreference) => void;
  onOpenReservation: () => void;
}

export const SignatureFavorites: React.FC<SignatureFavoritesProps> = ({
  onOpenReservation,
}) => {
  return (
    <section id="signature" className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <span>Chef's Repertoire</span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>House Specialties</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight mb-4">
            Signature Creations
          </h2>
          <p className="text-sm sm:text-base text-[#a8a29e] font-light leading-relaxed">
            Every dish here embodies decades of South Indian culinary discipline, combining time-honored cast-iron griddle techniques with rich dairy and artisanal spices.
          </p>
        </div>

        {/* Feature 1: Tirumala Special Dosa (Editorial Left Image, Right Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24 pb-20 border-b border-[#1c1917]">
          {/* Visual Showcase Card with Real Food Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1c1810] to-[#120f0a] border border-[#d4af37]/40 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0c0a09]">
                <img
                  src="/images/paneer_dosa_exact.jpg"
                  alt="Tirumala Special Dosa loaded with Cashews, Paneer and Cheese"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-cinzel text-xs tracking-wider text-[#d4af37] font-bold bg-[#0c0a09]/80 backdrop-blur-md px-3 py-1 rounded border border-[#d4af37]/40 uppercase">
                    House Special
                  </span>
                  <span className="font-mono text-sm text-[#f5ebd0] font-bold bg-[#0c0a09]/80 backdrop-blur-md px-3 py-1 rounded">
                    ₹269 / ₹279
                  </span>
                </div>
              </div>

              {/* Verified Pricing Ribbon */}
              <div className="flex items-center justify-between pt-4 mt-2">
                <span className="text-xs text-[#a8a29e] uppercase tracking-wider">
                  Butter ₹269 / Desi Ghee ₹279
                </span>
                <span className="text-xs text-[#d4af37] font-medium">
                  Includes Chutney Trio & Sambar
                </span>
              </div>
            </div>
          </div>

          {/* Description Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span>House Special Dosa</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#f7f4ec] mb-4">
              Tirumala Special Dosa
            </h3>
            <p className="text-base text-[#d6d3d1] font-light leading-relaxed mb-6">
              Our crown jewel. A lavish open-faced masterpiece spread thin across the seasoned griddle, lavishly laden with roasted cashews and dry fruits, seasoned malai paneer, sweet corn, tender green peas, and molten cheese.
            </p>
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3 text-sm text-[#a8a29e]">
                <span className="text-[#d4af37] font-bold">01.</span>
                <span>Rich dairy blend with house churned white butter or aromatic pure desi ghee.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#a8a29e]">
                <span className="text-[#d4af37] font-bold">02.</span>
                <span>Served with fresh coconut chutney, spicy shallot chutney, and simmering sambar.</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0c0a09] rounded-lg shadow-md hover:brightness-110 transition-all"
              >
                Reserve Table In Agra
              </button>
            </div>
          </div>
        </div>

        {/* Feature 2: Benne Podi Masala Dosa (Editorial Right Image, Left Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Description Copy */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff5e36] font-semibold mb-3">
              <Flame className="w-4 h-4 text-[#ff5e36]" />
              <span>Davangere Heritage Recipe</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#f7f4ec] mb-4">
              Benne Podi Masala Dosa
            </h3>
            <p className="text-base text-[#d6d3d1] font-light leading-relaxed mb-6">
              Chef's Special creation inspired by the legendary benne dosas of Karnataka. A thicker, pillowy yet deeply caramelized crust lavished with pure white butter (benne) and dusted with hand-pounded fiery gunpowder podi.
            </p>
            <div className="space-y-3 mb-8 w-full">
              <div className="flex items-start gap-3 text-sm text-[#a8a29e]">
                <span className="text-[#ff5e36] font-bold">01.</span>
                <span>Fresh daily-churned white butter that melts on contact with the sizzling podi.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#ff5e36] font-bold">
                <span className="text-[#ff5e36] font-bold">02.</span>
                <span className="text-[#a8a29e] font-normal">Folded around delicate spiced mustard-tempered potato mash.</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-cinzel text-2xl font-bold text-gold-gradient tabular-nums">
                ₹199
              </span>
              <span className="text-xs text-[#78716c]">Chef's Special Verified Price</span>
            </div>
          </div>

          {/* Visual Showcase Card with Real Food Image */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1a150e] to-[#120f0b] border border-[#ff5e36]/40 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0c0a09]">
                <img
                  src="/images/benne_podi_dosa.jpg"
                  alt="Davangere Benne Podi Dosa with white butter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-cinzel text-xs tracking-wider text-[#ff5e36] font-bold bg-[#0c0a09]/80 backdrop-blur-md px-3 py-1 rounded border border-[#ff5e36]/40 uppercase">
                    Chef's Special
                  </span>
                  <span className="font-mono text-sm text-[#f5ebd0] font-bold bg-[#0c0a09]/80 backdrop-blur-md px-3 py-1 rounded">
                    ₹199 Fixed
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-2">
                <span className="text-xs text-[#a8a29e] uppercase tracking-wider">
                  Davangere White Butter
                </span>
                <span className="text-xs text-[#ffb703] font-medium">
                  Served on Fresh Banana Leaf
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
