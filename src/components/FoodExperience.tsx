import React from 'react';
import { Sparkles, Timer, Flame, Droplets } from 'lucide-react';

export const FoodExperience: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '48-Hour Granite Stone Grinding',
      subtitle: 'Natural Aeration & Fermentation',
      description:
        'Selected whole urad dal and aged rice are slow-milled between granite millstones, creating a micro-aerated batter that ferments undisturbed for 48 hours to unlock natural tang and crispness.',
      icon: Timer,
      highlight: 'Granite-Milled Batter',
    },
    {
      num: '02',
      title: 'The Seasoned Iron Griddle',
      subtitle: '300°C Searing Discipline',
      description:
        'No non-stick coatings. Our thick, multi-decade seasoned cast-iron tawas retain steady heat, searing the batter into a lacy honeycomb crust that remains crisp down to the final bite.',
      icon: Flame,
      highlight: 'Authentic Tawa Sizzle',
    },
    {
      num: '03',
      title: 'Churned Davangere White Butter',
      subtitle: 'The Soul of Benne Dosas',
      description:
        'Fresh cream churned into pure white unsalted butter (benne), placed in generous dollops directly over the hot griddle surface and toasted gunpowder podi.',
      icon: Droplets,
      highlight: 'Freshly Churned Benne',
    },
    {
      num: '04',
      title: 'The Black Pepper Rasam Infusion',
      subtitle: 'Complimentary Welcome Tradition',
      description:
        'Country tomatoes and tangy tamarind simmered with crushed whole black pepper, garlic cloves, and fresh curry leaves crackled in hot mustard oil.',
      icon: Sparkles,
      highlight: 'Complimentary on Arrival',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <span>Culinary Discipline</span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>The Tawa Rituals</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight mb-4">
            The Food Experience
          </h2>
          <p className="text-sm sm:text-base text-[#a8a29e] font-light leading-relaxed">
            Every dosa that leaves our hearth follows four uncompromising principles of authentic South Indian kitchen craft.
          </p>
        </div>

        {/* 4-Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-[#141210] border border-[#292524] rounded-xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-cinzel text-2xl font-bold text-gold-gradient tabular-nums">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                    {step.subtitle}
                  </p>
                  <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a8a29e] leading-relaxed mb-6 font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1c1917] flex items-center justify-between text-[11px] text-[#78716c]">
                  <span>{step.highlight}</span>
                  <span className="text-[#d4af37]">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
