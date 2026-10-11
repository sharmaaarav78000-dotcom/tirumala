import React from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, UtensilsCrossed, Sparkles } from 'lucide-react';
import { PlatterItem, PricingPreference } from '../types/cafe';

interface PlatterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: PlatterItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearPlatter: () => void;
  onChangePreference: (id: string, pref: PricingPreference) => void;
}

export const PlatterDrawer: React.FC<PlatterDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearPlatter,
  onChangePreference,
}) => {
  if (!isOpen) return null;

  const calculateItemPrice = (item: PlatterItem) => {
    if (item.menuItem.isComplimentary && item.menuItem.priceFixed === 0) return 0;
    if (item.menuItem.id === 'welcome-rasam') return 0; // First is complimentary
    if (item.menuItem.priceFixed) return item.menuItem.priceFixed * item.quantity;
    if (item.preference === 'ghee' && item.menuItem.priceGhee) {
      return item.menuItem.priceGhee * item.quantity;
    }
    if (item.menuItem.priceButter) {
      return item.menuItem.priceButter * item.quantity;
    }
    return 0;
  };

  const totalAmount = items.reduce((acc, curr) => acc + calculateItemPrice(curr), 0);

  const getWhatsAppMessage = () => {
    const list = items
      .map(
        (i) =>
          `• ${i.quantity}x ${i.menuItem.name} (${i.preference === 'ghee' ? 'Pure Ghee' : 'Butter'}) - ₹${calculateItemPrice(i)}`
      )
      .join('\n');
    const msg = `Namaskara Tirumala Cafe! I would like to enquire about this order / tasting selection:\n\n${list}\n\nEstimated Total: ₹${totalAmount}\n\nPlease confirm availability!`;
    return `https://wa.me/?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-[#141210] border-l border-[#292524] h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#292524]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-lg font-bold text-[#f7f4ec]">
                  Curated Tasting Platter
                </h3>
                <p className="text-[11px] text-[#a8a29e]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a8a29e] hover:text-[#f7f4ec] bg-[#1c1917]"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List */}
          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <UtensilsCrossed className="w-10 h-10 text-[#78716c] mx-auto mb-3" />
                <p className="text-sm text-[#f7f4ec] font-semibold">
                  Your platter is empty
                </p>
                <p className="text-xs text-[#a8a29e] mt-1 max-w-xs mx-auto">
                  Click 'Select' on any dosa or specialty in our menu to curate your custom South Indian feast.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="p-4 bg-[#0c0a09] border border-[#292524] rounded-xl flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-editorial text-sm font-bold text-[#f7f4ec]">
                        {item.menuItem.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        {item.menuItem.priceButter && item.menuItem.priceGhee ? (
                          <div className="flex items-center gap-1 text-[10px]">
                            <button
                              onClick={() => onChangePreference(item.menuItem.id, 'butter')}
                              className={`px-1.5 py-0.5 rounded ${
                                item.preference === 'butter'
                                  ? 'bg-[#d4af37] text-[#0c0a09] font-bold'
                                  : 'text-[#78716c] hover:text-[#a8a29e]'
                              }`}
                            >
                              Butter
                            </button>
                            <span>/</span>
                            <button
                              onClick={() => onChangePreference(item.menuItem.id, 'ghee')}
                              className={`px-1.5 py-0.5 rounded ${
                                item.preference === 'ghee'
                                  ? 'bg-[#d4af37] text-[#0c0a09] font-bold'
                                  : 'text-[#78716c] hover:text-[#a8a29e]'
                              }`}
                            >
                              Ghee
                            </button>
                          </div>
                        ) : (
                          <span className="text-[10px] text-[#78716c]">
                            Fixed Recipe
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.menuItem.id)}
                      className="text-[#78716c] hover:text-[#ef4444] p-1"
                      title="Remove dish"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1c1917]">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                        className="w-6 h-6 rounded bg-[#1c1917] text-[#a8a29e] hover:text-[#f7f4ec] flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs text-[#f7f4ec] px-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                        className="w-6 h-6 rounded bg-[#1c1917] text-[#a8a29e] hover:text-[#f7f4ec] flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-cinzel text-sm font-bold text-gold-gradient tabular-nums">
                      ₹{calculateItemPrice(item)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer calculation & WhatsApp */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-[#292524] mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#a8a29e] uppercase tracking-wider">
                Total Estimate
              </span>
              <span className="font-cinzel text-xl font-bold text-gold-gradient tabular-nums">
                ₹{totalAmount}
              </span>
            </div>
            <p className="text-[11px] text-[#78716c] mb-4">
              Taxes included. Served with Chutney Trio & complimentary Hot Rasam.
            </p>

            <div className="space-y-2">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-[#0c0a09] rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button
                onClick={onClearPlatter}
                className="w-full py-2 text-center text-[11px] text-[#78716c] hover:text-[#a8a29e] transition-colors"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
