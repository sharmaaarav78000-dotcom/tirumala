import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, Eye } from 'lucide-react';
import { CULINARY_GALLERY } from '../data/menuData';
import { FoodGalleryItem } from '../types/cafe';

export const CulinaryGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<FoodGalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Hearth & The Table</span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>Culinary Visuals</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight">
            Artisanal Food Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#a8a29e] mt-2 max-w-xl mx-auto font-light leading-relaxed">
            A visual journey through the culinary artistry of Tirumala Cafe: sizzling 300°C cast-iron tawas, pure white butter, and aromatic rasam.
          </p>
        </div>

        {/* 6-Item Masonry/Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULINARY_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#141210] border border-[#292524] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0c0a09]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/20" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#0c0a09]/85 backdrop-blur-md text-[10px] font-semibold text-[#d4af37] border border-[#d4af37]/40 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#0c0a09]/80 backdrop-blur-sm border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#a8a29e] font-medium">
                    {item.subtitle}
                  </span>
                  <h3 className="font-editorial text-lg font-bold text-[#f7f4ec] mt-0.5 group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#a8a29e] font-light leading-relaxed mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1c1917] flex items-center justify-between text-[11px] text-[#78716c]">
                  <span>Pure Vegetarian</span>
                  <span className="text-[#d4af37] font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>View Dish</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Lightbox Photo Viewing */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
            <div className="relative w-full max-w-2xl bg-[#141210] border border-[#d4af37]/50 rounded-2xl overflow-hidden shadow-2xl p-6">
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-2 text-[#a8a29e] hover:text-[#f7f4ec] rounded-lg bg-[#1c1917] z-10"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0c0a09] mb-5 border border-[#292524]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#d4af37] uppercase tracking-widest mb-1">
                <span>{activePhoto.tag}</span>
                <span aria-hidden="true" className="text-[#78716c]">·</span>
                <span>Tirumala Café Signature</span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-[#f7f4ec] mb-2">
                {activePhoto.title}
              </h3>

              <p className="text-sm text-[#d6d3d1] font-light leading-relaxed mb-6">
                {activePhoto.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#292524] text-xs text-[#a8a29e]">
                <span>1, Adan Bagh Extension, DayalBagh, Agra</span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2 bg-[#1c1917] hover:bg-[#292524] text-[#f7f4ec] rounded-lg transition-colors"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
