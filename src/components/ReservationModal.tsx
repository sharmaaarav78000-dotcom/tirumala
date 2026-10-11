import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { TableReservation } from '../types/cafe';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('01:30 PM');
  const [seatingPreference, setSeatingPreference] = useState<'main-dining' | 'hearth-counter' | 'family-alcove'>('main-dining');
  const [notes, setNotes] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<TableReservation | null>(null);

  if (!isOpen) return null;

  // Exact operating hours 12–11 PM
  const timeSlots = [
    '12:00 PM', '12:30 PM', '01:30 PM', '02:30 PM',
    '03:30 PM', '05:00 PM', '06:30 PM', '07:30 PM',
    '08:30 PM', '09:30 PM', '10:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !phone.trim()) return;

    const booking: TableReservation = {
      id: `TC-${Math.floor(1000 + Math.random() * 9000)}`,
      guestName,
      phone,
      guests,
      date,
      timeSlot,
      seatingPreference,
      notes,
      status: 'confirmed',
    };

    setConfirmedBooking(booking);
    setStep('confirmed');
  };

  const getWhatsAppMessage = () => {
    if (!confirmedBooking) return '';
    const text = `Namaskara Tirumala Cafe Agra! I would like to confirm my table reservation:\n\nBooking ID: ${confirmedBooking.id}\nGuest: ${confirmedBooking.guestName}\nLocation: 1, Adan Bagh Extension, DayalBagh, Agra\nGuests: ${confirmedBooking.guests} People\nDate: ${confirmedBooking.date}\nTime: ${confirmedBooking.timeSlot} (Operating Hours 12-11 PM)\nSeating: ${confirmedBooking.seatingPreference}\n${confirmedBooking.notes ? `Notes: ${confirmedBooking.notes}` : ''}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#141210] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#a8a29e] hover:text-[#f7f4ec] rounded-lg bg-[#1c1917]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                <span>Table Hospitality · DayalBagh, Agra</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f7f4ec]">
                Reserve a Table
              </h3>
              <p className="text-xs text-[#a8a29e] mt-1 font-light">
                Open 12:00 PM – 11:00 PM Daily. Complimentary Hot Rasam served on arrival.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0c0a09] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] placeholder-[#78716c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0c0a09] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] placeholder-[#78716c] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Guests & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                    Party Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#78716c] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#0c0a09] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value={1}>1 Guest (Counter)</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests (Family Table)</option>
                      <option value={6}>6 Guests</option>
                      <option value={8}>8 Guests</option>
                      <option value={10}>10+ Guests (Large Gathering)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#0c0a09] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Time Slots (12-11 PM) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Time Slot</span>
                  </span>
                  <span className="text-[11px] text-[#78716c]">Operating Hours: 12 PM – 11 PM</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`py-1.5 px-2 rounded text-xs font-mono transition-colors ${
                        timeSlot === slot
                          ? 'bg-[#d4af37] text-[#0c0a09] font-bold'
                          : 'bg-[#0c0a09] border border-[#292524] text-[#a8a29e] hover:text-[#f7f4ec]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                  Seating Ambiance
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('main-dining')}
                    className={`p-2 rounded text-xs text-center border transition-all ${
                      seatingPreference === 'main-dining'
                        ? 'border-[#d4af37] bg-[#1c1917] text-[#f5ebd0]'
                        : 'border-[#292524] bg-[#0c0a09] text-[#78716c]'
                    }`}
                  >
                    Main Dining
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('hearth-counter')}
                    className={`p-2 rounded text-xs text-center border transition-all ${
                      seatingPreference === 'hearth-counter'
                        ? 'border-[#d4af37] bg-[#1c1917] text-[#f5ebd0]'
                        : 'border-[#292524] bg-[#0c0a09] text-[#78716c]'
                    }`}
                  >
                    Live Tawa View
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeatingPreference('family-alcove')}
                    className={`p-2 rounded text-xs text-center border transition-all ${
                      seatingPreference === 'family-alcove'
                        ? 'border-[#d4af37] bg-[#1c1917] text-[#f5ebd0]'
                        : 'border-[#292524] bg-[#0c0a09] text-[#78716c]'
                    }`}
                  >
                    Quiet Alcove
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#a8a29e] font-medium mb-1.5">
                  Special Dietary or Occasion Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jain preparation requested / Birthday dinner"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0c0a09] border border-[#292524] rounded-lg text-xs text-[#f7f4ec] placeholder-[#78716c] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#e5c07b] via-[#d4af37] to-[#b8860b] text-[#0c0a09] text-xs font-bold uppercase tracking-widest shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#10b981] mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
              Table Reserved Successfully
            </p>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#f7f4ec] mb-3">
              We Look Forward to Welcoming You
            </h3>

            <div className="bg-[#0c0a09] border border-[#292524] rounded-xl p-5 my-6 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#1c1917] pb-2">
                <span className="text-[#a8a29e]">Booking Reference:</span>
                <span className="font-mono text-[#d4af37] font-bold">{confirmedBooking?.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1917] pb-2">
                <span className="text-[#a8a29e]">Location:</span>
                <span className="text-[#f7f4ec] font-semibold">1, Adan Bagh Ext, DayalBagh, Agra</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1917] pb-2">
                <span className="text-[#a8a29e]">Guest Name:</span>
                <span className="text-[#f7f4ec] font-semibold">{confirmedBooking?.guestName}</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1917] pb-2">
                <span className="text-[#a8a29e]">Date & Time:</span>
                <span className="text-[#f7f4ec] font-mono">{confirmedBooking?.date} at {confirmedBooking?.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-[#1c1917] pb-2">
                <span className="text-[#a8a29e]">Party Size:</span>
                <span className="text-[#f7f4ec]">{confirmedBooking?.guests} Guests ({confirmedBooking?.seatingPreference})</span>
              </div>
              <div className="pt-1 text-[11px] text-[#10b981]">
                ✓ Complimentary Welcome Hot Rasam arranged for your party on arrival.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25D366] text-[#0c0a09] rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="py-3 px-5 bg-[#1c1917] border border-[#292524] text-[#a8a29e] hover:text-[#f7f4ec] rounded-lg text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
