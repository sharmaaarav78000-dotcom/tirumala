import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Droplets } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { FoodCard } from './FoodCard';
import { MenuItem, PricingPreference } from '../types/cafe';

interface MenuSectionProps {
  onAddToPlatter: (item: MenuItem, pref: PricingPreference) => void;
  selectedItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToPlatter,
  selectedItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pricingPreference, setPricingPreference] = useState<PricingPreference>('butter');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'special' | 'jain'>('all');

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'welcome-sip', label: 'Welcome Sip' },
    { id: 'classic-dosas', label: 'Classic Dosas' },
    { id: 'specialty-benne', label: 'Specialty & Benne' },
    { id: 'accompaniments', label: 'Accompaniments' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'special' && !item.isHouseSpecial && !item.isChefSpecial) {
        return false;
      }
      if (dietaryFilter === 'jain' && item.dietary !== 'jain-available') {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIng = item.ingredients.some((ing) => ing.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesIng;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
              <span>Authentic Offerings</span>
              <span aria-hidden="true" className="text-[#78716c]">·</span>
              <span>Verified Menu Card</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight">
              Explore Our Menu
            </h2>
            <p className="text-sm text-[#a8a29e] mt-2 max-w-xl">
              Freshly ground batter, slow-roasted spices, and age-old culinary recipes prepared live on heavy cast-iron tawas.
            </p>
          </div>

          {/* Butter vs Ghee Toggle */}
          <div className="flex items-center gap-3 bg-[#141210] p-1.5 rounded-xl border border-[#292524] self-start md:self-auto">
            <span className="text-xs text-[#a8a29e] px-2 flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Fat Base:</span>
            </span>
            <button
              onClick={() => setPricingPreference('butter')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                pricingPreference === 'butter'
                  ? 'bg-[#d4af37] text-[#0c0a09] shadow-sm'
                  : 'text-[#a8a29e] hover:text-[#f7f4ec]'
              }`}
            >
              Butter
            </button>
            <button
              onClick={() => setPricingPreference('ghee')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                pricingPreference === 'ghee'
                  ? 'bg-[#d4af37] text-[#0c0a09] shadow-sm'
                  : 'text-[#a8a29e] hover:text-[#f7f4ec]'
              }`}
            >
              Desi Ghee
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1c1917]">
          {/* Category Tabs (Functional segmented controls) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1c1917] text-[#d4af37] border border-[#d4af37]/40 font-semibold'
                    : 'text-[#a8a29e] hover:text-[#f7f4ec] hover:bg-[#141210]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & Dietary filter */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#78716c] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dosa, rasam, garlic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-[#141210] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] placeholder-[#78716c] focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>

            <div className="flex items-center gap-1 bg-[#141210] p-1 rounded-lg border border-[#292524]">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#1c1917] text-[#f7f4ec] font-semibold'
                    : 'text-[#78716c] hover:text-[#a8a29e]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('special')}
                className={`px-2.5 py-1 text-[11px] rounded flex items-center gap-1 transition-colors ${
                  dietaryFilter === 'special'
                    ? 'bg-[#1c1917] text-[#d4af37] font-semibold'
                    : 'text-[#78716c] hover:text-[#a8a29e]'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Specials
              </button>
              <button
                onClick={() => setDietaryFilter('jain')}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                  dietaryFilter === 'jain'
                    ? 'bg-[#1c1917] text-[#38bdf8] font-semibold'
                    : 'text-[#78716c] hover:text-[#a8a29e]'
                }`}
              >
                Jain Option
              </button>
            </div>
          </div>
        </div>

        {/* Results Count & Unboxed Status */}
        <div className="flex items-center justify-between text-xs text-[#78716c] mb-6">
          <div className="flex items-center gap-2">
            <span>Showing {filteredItems.length} authentic dishes</span>
            <span aria-hidden="true">·</span>
            <span>All dosas served with Chutney Trio & Drumstick Sambar</span>
          </div>
          <span className="hidden sm:inline text-[#a8a29e] font-mono text-[11px]">
            Tirumala Official Menu
          </span>
        </div>

        {/* Food Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                pricingPreference={pricingPreference}
                onAddToPlatter={onAddToPlatter}
                isAdded={selectedItemIds.includes(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#141210] rounded-xl border border-[#292524]">
            <Filter className="w-8 h-8 text-[#78716c] mx-auto mb-3" />
            <h3 className="font-editorial text-lg text-[#f7f4ec] font-bold mb-1">
              No dishes found
            </h3>
            <p className="text-xs text-[#a8a29e]">
              Try adjusting your search terms or selecting 'All Offerings'.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
