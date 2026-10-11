import React from 'react';
import { Coffee, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';

interface SignatureExperienceProps {
  onExploreMenu: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({ onExploreMenu }) => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <span>Our Philosophy</span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>South Indian Hospitality</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight mb-5">
            A Ritual of Warmth & Purity
          </h2>
          <p className="text-base text-[#a8a29e] font-light leading-relaxed">
            At Tirumala Cafe, every culinary experience begins with an age-old tradition: a warm, soul-soothing bowl of freshly brewed Rasam offered as our complimentary welcome sip the moment you take your seat.
          </p>
        </div>

        {/* Feature Grid: 4 Pillars of Tirumala Cafe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1: Complimentary Welcome Sip */}
          <div className="bg-[#141210] border border-[#292524] rounded-xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-[#24130f] border border-[#ff5e36]/30 flex items-center justify-center mb-6 group-hover:border-[#ff5e36] transition-colors">
              <Coffee className="w-6 h-6 text-[#ff5e36]" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-[#ff5e36] font-semibold">
                Complimentary
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] mb-2">
              Hot Rasam on Arrival
            </h3>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              Spiced tomato-tamarind broth infused with black pepper, crushed garlic, and fresh curry leaves to awaken your palate.
            </p>
          </div>

          {/* Pillar 2: Davangere Benne */}
          <div className="bg-[#141210] border border-[#292524] rounded-xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-[#1f1b0a] border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:border-[#d4af37] transition-colors">
              <Flame className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                Authentic Benne
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] mb-2">
              Fresh Churned Butter
            </h3>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              Our iconic Davangere-style Benne Podi Dosa is generously slathered with freshly churned white butter and stone-ground podi.
            </p>
          </div>

          {/* Pillar 3: Cast Iron Mastery */}
          <div className="bg-[#141210] border border-[#292524] rounded-xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-[#171412] border border-[#a8a29e]/30 flex items-center justify-center mb-6 group-hover:border-[#f7f4ec] transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#f5ebd0]" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-[#a8a29e] font-semibold">
                300°C Heavy Hearth
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] mb-2">
              Seasoned Cast Iron
            </h3>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              Cooked on seasoned iron tawas that impart that signature crunch, golden caramelized lattice, and heavenly aroma.
            </p>
          </div>

          {/* Pillar 4: Pure Ingredients */}
          <div className="bg-[#141210] border border-[#292524] rounded-xl p-7 hover:border-[#d4af37]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-[#171412] border border-[#c59b27]/30 flex items-center justify-center mb-6 group-hover:border-[#c59b27] transition-colors">
              <HeartHandshake className="w-6 h-6 text-[#c59b27]" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-wider text-[#c59b27] font-semibold">
                Desi Ghee & Fresh Curds
              </span>
            </div>
            <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] mb-2">
              Pure Vegetarian Purity
            </h3>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              Crafted in accordance with authentic South Indian sattvic traditions. Pure dairy, fresh coconuts, and zero artificial colors.
            </p>
          </div>
        </div>

        {/* Large Visual Banner: Welcome Sip Focus */}
        <div className="bg-gradient-to-r from-[#171412] via-[#1f1810] to-[#171412] rounded-2xl border border-[#d4af37]/30 p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff5e36] font-semibold mb-2">
              <span>Arrival Tradition</span>
              <span aria-hidden="true" className="text-[#78716c]">·</span>
              <span>Complimentary</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f7f4ec] mb-3">
              The Steaming Bowl of Tirumala Rasam
            </h3>
            <p className="text-sm sm:text-base text-[#d6d3d1] font-light leading-relaxed mb-6">
              "Hot Rasam – Complimentary on arrival / Extra ₹39. Traditional South Indian spiced tomato-tamarind broth infused with black pepper, garlic and fresh curry leaves."
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0c0a09] bg-[#d4af37] hover:bg-[#e5c07b] rounded-lg transition-colors"
              >
                Browse Our Dosas
              </button>
              <span className="text-xs text-[#a8a29e]">
                Served hot in traditional brass ware
              </span>
            </div>
          </div>

          {/* Real Hot Rasam Food Photograph */}
          <div className="relative w-56 h-56 lg:w-64 lg:h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-2xl group">
            <img
              src="/images/rasam_bowl_pure.jpg"
              alt="Steaming bowl of complimentary Hot Rasam served in a bowl"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="font-cinzel text-xs text-[#f5ebd0] font-bold block">
                HOT RASAM (BOWL)
              </span>
              <span className="text-[10px] text-[#ffb703] uppercase tracking-wider">
                Served in a Bowl · Complimentary on Arrival
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
