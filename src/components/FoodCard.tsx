import React, { useState } from 'react';
import { Plus, Check, Sparkles, Flame, Leaf } from 'lucide-react';
import { MenuItem, PricingPreference } from '../types/cafe';

interface FoodCardProps {
  item: MenuItem;
  pricingPreference: PricingPreference;
  onAddToPlatter: (item: MenuItem, pref: PricingPreference) => void;
  isAdded: boolean;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  pricingPreference,
  onAddToPlatter,
  isAdded,
}) => {
  const [imageError, setImageError] = useState(false);

  // Determine price based on preference and available pricing
  const currentPrice = () => {
    if (item.isComplimentary && item.priceFixed === 0) return 'Included';
    if (item.id === 'welcome-rasam') return 'Free / Extra ₹39';
    if (item.priceFixed) return `₹${item.priceFixed}`;
    if (pricingPreference === 'ghee' && item.priceGhee) return `₹${item.priceGhee}`;
    if (item.priceButter) return `₹${item.priceButter}`;
    return '₹---';
  };

  const getCardBorder = () => {
    if (item.isHouseSpecial) return 'border-[#d4af37]/60 shadow-[0_8px_25px_rgba(212,175,55,0.15)]';
    if (item.isChefSpecial) return 'border-[#e5c07b]/40 shadow-[0_8px_25px_rgba(229,192,123,0.1)]';
    if (item.category === 'welcome-sip') return 'border-[#ff5e36]/40 shadow-[0_8px_25px_rgba(255,94,54,0.1)]';
    return 'border-[#292524] hover:border-[#d4af37]/40';
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden bg-[#141210] border ${getCardBorder()} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
    >
      <div>
        {/* Prominent Food Image Slot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#1c1917]">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#1c1810] to-[#0c0a09] text-center">
              <span className="font-cinzel text-xs text-[#d4af37] font-bold">
                TIRUMALA CAFÉ
              </span>
              <span className="font-editorial text-sm text-[#f5ebd0] mt-1">
                {item.name}
              </span>
            </div>
          )}

          {/* Gradient Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/30 pointer-events-none" />

          {/* Badges on Image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {item.isHouseSpecial && (
                <span className="px-2.5 py-1 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[10px] font-semibold text-[#d4af37] border border-[#d4af37]/50 flex items-center gap-1 uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  House Special
                </span>
              )}
              {item.isChefSpecial && (
                <span className="px-2.5 py-1 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[10px] font-semibold text-[#f5ebd0] border border-[#ff5e36]/50 flex items-center gap-1 uppercase tracking-wider">
                  <Flame className="w-3 h-3 text-[#ff5e36]" />
                  Chef's Special
                </span>
              )}
              {item.isComplimentary && (
                <span className="px-2.5 py-1 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[10px] font-semibold text-[#ffb703] border border-[#ffb703]/50 uppercase tracking-wider">
                  Welcome Tradition
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 bg-[#0c0a09]/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] border border-[#292524]">
              {item.dietary === 'pure-veg' && (
                <span className="flex items-center gap-0.5 text-[#10b981] font-medium">
                  <Leaf className="w-3 h-3" />
                  <span>Pure Veg</span>
                </span>
              )}
              {item.dietary === 'jain-available' && (
                <span className="text-[#38bdf8] font-medium">
                  Jain Available
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Item Title */}
          <h3 className="font-editorial text-xl font-bold text-[#f7f4ec] group-hover:text-[#f5ebd0] transition-colors mb-1.5">
            {item.name}
          </h3>

          {/* Item Description */}
          <p className="text-xs text-[#a8a29e] font-light leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Key Ingredients Unboxed Text */}
          <div className="text-[11px] text-[#78716c] font-light leading-snug">
            <span className="text-[#a8a29e] font-medium">Craft: </span>
            {item.ingredients.slice(0, 3).join(' · ')}
          </div>
        </div>
      </div>

      {/* Card Footer: Pricing and Action */}
      <div className="p-5 pt-3 border-t border-[#1c1917] flex items-center justify-between mt-auto bg-[#110f0e]/50">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-cinzel text-lg font-bold text-gold-gradient tabular-nums">
              {currentPrice()}
            </span>
            {item.priceButter && item.priceGhee && (
              <span className="text-[10px] text-[#78716c] font-mono">
                ({pricingPreference === 'ghee' ? 'Desi Ghee' : 'Butter'})
              </span>
            )}
          </div>
          {item.priceButter && item.priceGhee && (
            <div className="text-[10px] text-[#78716c]">
              Butter ₹{item.priceButter} / Ghee ₹{item.priceGhee}
            </div>
          )}
        </div>

        {/* Select Button */}
        <button
          onClick={() => onAddToPlatter(item, pricingPreference)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none ${
            isAdded
              ? 'bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/40 shadow-sm'
              : 'bg-[#1c1917] text-[#f5ebd0] border border-[#292524] hover:border-[#d4af37] hover:bg-[#292524]'
          }`}
          aria-label={`Select ${item.name}`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Selected</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Select</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
