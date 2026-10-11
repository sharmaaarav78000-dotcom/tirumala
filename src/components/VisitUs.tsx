import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, CheckCircle2 } from 'lucide-react';

interface VisitUsProps {
  onOpenReservation: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenReservation }) => {
  const address = '1, Adan Bagh Extension, DayalBagh, Agra, Uttar Pradesh 282005';
  const phone = '+91 98200 12345';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '1, Adan Bagh Extension, DayalBagh, Agra, Uttar Pradesh 282005'
  )}`;

  const schedule = [
    { day: 'Sunday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Monday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Tuesday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Wednesday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Thursday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Friday', hours: '12:00 PM – 11:00 PM' },
    { day: 'Saturday', hours: '12:00 PM – 11:00 PM' },
  ];

  return (
    <section id="visit" className="py-24 px-6 bg-[#0c0a09] border-t border-[#1c1917] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <span>Location & Hospitality</span>
            <span aria-hidden="true" className="text-[#78716c]">·</span>
            <span>DayalBagh, Agra</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ec] tracking-tight mb-4">
            Visit Tirumala Cafe
          </h2>
          <p className="text-sm sm:text-base text-[#a8a29e] font-light leading-relaxed">
            Experience the aroma of freshly toasted spices, bubbling sambar, and crisp benne dosas served straight from our live hearth in DayalBagh, Agra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Exact Verified Details */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-[#141210] border border-[#292524] rounded-2xl p-6 relative group">
                <div className="w-10 h-10 rounded-xl bg-[#1c1917] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-base font-bold text-[#f7f4ec] mb-1">
                  Our Agra Location
                </h3>
                <p className="text-xs text-[#d6d3d1] font-light leading-relaxed mt-2">
                  {address}
                </p>
                <div className="mt-4 pt-3 border-t border-[#1c1917]">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-semibold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Hours Card (All 7 Days 12–11 PM) */}
              <div className="bg-[#141210] border border-[#292524] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#1c1917] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-base font-bold text-[#f7f4ec] mb-1">
                  Operating Hours
                </h3>
                <div className="mt-2 space-y-1 text-xs">
                  <p className="text-[#d4af37] font-semibold">
                    12:00 PM – 11:00 PM Daily
                  </p>
                  <p className="text-[#a8a29e] text-[11px]">
                    Open Sunday to Saturday (All 7 Days)
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1c1917] text-[11px] text-[#78716c]">
                  Lunch · Evening Tiffins · Dinner Service
                </div>
              </div>

              {/* Phone / Contact Card */}
              <div className="bg-[#141210] border border-[#292524] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#1c1917] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-base font-bold text-[#f7f4ec] mb-1">
                  Direct Inquiries & Dining
                </h3>
                <p className="text-xs text-[#a8a29e] font-light mt-2">
                  Table bookings, takeaways & inquiries
                </p>
                <div className="mt-4 pt-3 border-t border-[#1c1917]">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-semibold font-mono"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{phone}</span>
                  </a>
                </div>
              </div>

              {/* Welcome Tradition Card */}
              <div className="bg-[#141210] border border-[#292524] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#24130f] border border-[#ff5e36]/30 flex items-center justify-center text-[#ff5e36] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-base font-bold text-[#f7f4ec] mb-1">
                  Hospitality Guarantee
                </h3>
                <p className="text-xs text-[#a8a29e] font-light mt-2">
                  Complimentary Hot Rasam served upon arrival for every guest. Pure vegetarian kitchen.
                </p>
                <div className="mt-4 pt-3 border-t border-[#1c1917] text-[11px] text-[#10b981]">
                  ✓ Pure Desi Ghee & Fresh White Butter
                </div>
              </div>
            </div>

            {/* Quick Action Strip */}
            <div className="p-6 bg-gradient-to-r from-[#171412] to-[#120f0e] border border-[#d4af37]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-editorial text-lg font-bold text-[#f7f4ec]">
                  Visiting us in DayalBagh, Agra?
                </p>
                <p className="text-xs text-[#a8a29e] font-light">
                  Reserve your table online in advance for immediate seating.
                </p>
              </div>
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0c0a09] rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-md hover:brightness-110 transition-all"
              >
                Reserve Table Now
              </button>
            </div>
          </div>

          {/* Right Column: Weekly Schedule Breakdown & Map Card */}
          <div className="lg:col-span-5 bg-[#141210] border border-[#292524] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                  Weekly Schedule
                </span>
                <span className="text-xs font-mono text-[#a8a29e]">
                  Agra, UP
                </span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#f7f4ec] mb-2">
                Dining Hours
              </h3>
              <p className="text-xs text-[#a8a29e] font-light leading-relaxed mb-6">
                Open every day from lunch through late dinner.
              </p>

              {/* Exact 7-Day Hours Table */}
              <div className="space-y-2 py-2 border-y border-[#1c1917]">
                {schedule.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-xs py-1"
                  >
                    <span className="text-[#f7f4ec] font-medium">{item.day}</span>
                    <span className="font-mono text-[#d4af37] tabular-nums">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions Card */}
            <div className="mt-6 pt-4 border-t border-[#1c1917]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#f5ebd0] font-cinzel font-bold">
                    TIRUMALA CAFÉ AGRA
                  </p>
                  <p className="text-[11px] text-[#78716c]">
                    1, Adan Bagh Extension, DayalBagh
                  </p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1c1917] hover:bg-[#292524] border border-[#d4af37]/50 rounded-lg text-xs text-[#d4af37] font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
