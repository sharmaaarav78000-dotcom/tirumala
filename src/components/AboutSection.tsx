import React, { useState } from 'react';
import { TirumalaLogo } from './TirumalaLogo';
import { Edit3, Check, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [storyCopy, setStoryCopy] = useState(
    'Rooted in the revered culinary customs of South India, Tirumala Cafe was founded with a singular devotion: to serve honest, uncompromising food crafted with temple-grade purity. From our 48-hour stone-ground fermented batter to the golden swirl of Davangere white butter and our complimentary welcome rasam, every meal is an expression of genuine hospitality.'
  );

  return (
    <section className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Emblem & Sacred Arch */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-10 rounded-2xl bg-gradient-to-b from-[#141210] to-[#0c0a09] border border-[#d4af37]/30 shadow-2xl flex flex-col items-center text-center">
              <TirumalaLogo size="lg" showSubtitle={true} />

              <div className="mt-8 pt-6 border-t border-[#292524] w-full text-center">
                <p className="text-xs text-[#a8a29e] tracking-widest uppercase font-medium">
                  The Sacred Diya of Purity
                </p>
                <p className="text-[11px] text-[#78716c] mt-1 font-light">
                  Symbolizing light, warmth, and the sacred bond between host and guest.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Our Heritage & Hospitality</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight mb-6">
              About Tirumala Cafe
            </h2>

            {/* Editable Story Content as instructed in brief */}
            <div className="relative w-full mb-6">
              {isEditing ? (
                <div className="flex flex-col gap-3">
                  <textarea
                    value={storyCopy}
                    onChange={(e) => setStoryCopy(e.target.value)}
                    rows={5}
                    className="w-full p-4 bg-[#141210] border border-[#d4af37] rounded-xl text-sm text-[#f7f4ec] focus:outline-none focus:ring-1 focus:ring-[#d4af37] font-light leading-relaxed"
                  />
                  <button
                    onClick={() => setIsEditing(false)}
                    className="self-start flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] text-[#0c0a09] rounded-lg text-xs font-semibold uppercase tracking-wider"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save Story</span>
                  </button>
                </div>
              ) : (
                <div className="group relative">
                  <p className="text-base sm:text-lg text-[#d6d3d1] font-light leading-relaxed">
                    {storyCopy}
                  </p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="mt-3 flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline opacity-80 hover:opacity-100"
                    title="Edit cafe story text"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Customize Cafe Story (Click to edit)</span>
                  </button>
                </div>
              )}
            </div>

            {/* Trust Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-6 border-t border-[#1c1917]">
              <div>
                <h3 className="font-editorial text-base font-bold text-[#f5ebd0] mb-1">
                  100% Pure Vegetarian
                </h3>
                <p className="text-xs text-[#a8a29e] font-light">
                  Cooked in a clean, sattvic kitchen respecting traditional dietary sensibilities. Jain choices available.
                </p>
              </div>

              <div>
                <h3 className="font-editorial text-base font-bold text-[#f5ebd0] mb-1">
                  Complimentary Welcome Sip
                </h3>
                <p className="text-xs text-[#a8a29e] font-light">
                  A steaming bowl of Hot Rasam served complimentary the moment you walk through our doors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
