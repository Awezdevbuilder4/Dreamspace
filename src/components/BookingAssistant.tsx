import { useState, useId } from 'react';
import {
  Calendar,
  Users,
  Bed,
  CheckCircle,
  AlertTriangle,
  Send,
  Sparkles,
  Phone,
  Mail,
  User,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { MOUNTAIN_VIEW_RESORT, RoomType } from '../data/hotelData';

export default function BookingAssistant() {
  const [checkIn, setCheckIn] = useState('2026-11-10');
  const [checkOut, setCheckOut] = useState('2026-11-13');
  const [guests, setGuests] = useState(2);
  const [selectedRoomId, setSelectedRoomId] = useState('deluxe');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [submittedEnquiry, setSubmittedEnquiry] = useState<{
    referenceId: string;
    room: RoomType;
    nights: number;
    totalEstimate: number;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    dates: string;
    guestCount: number;
    specialRequests?: string;
  } | null>(null);

  const selectedRoom = MOUNTAIN_VIEW_RESORT.rooms.find(r => r.id === selectedRoomId) || MOUNTAIN_VIEW_RESORT.rooms[1];

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2.getTime() - d1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const nights = calculateNights();
  const estimatedTotal = nights * selectedRoom.basePricePerNight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    const refNumber = `DEMO-${Math.floor(1000 + Math.random() * 9000)}`;

    setSubmittedEnquiry({
      referenceId: refNumber,
      room: selectedRoom,
      nights,
      totalEstimate: estimatedTotal,
      guestName: fullName,
      guestEmail: email,
      guestPhone: phone || 'Not provided',
      dates: `${checkIn} to ${checkOut}`,
      guestCount: guests,
      specialRequests: specialRequests.trim() || undefined
    });
  };

  const handleReset = () => {
    setSubmittedEnquiry(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
  };

  return (
    <section id="booking-assistant" className="py-20 md:py-28 bg-[#091022] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <span>Automated Reservation Assistant</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Streamlined Booking Enquiry Flow
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Experience how DreamSpace AI collects guest preferences, calculates transparent rate estimates, and passes structured leads directly to hotel reservation systems.
          </p>
        </div>

        {/* Prominent Demo Notice Box (Requirement: Clearly label as DEMO, do not claim room reserved or availability checked) */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            <strong className="text-amber-300 font-semibold uppercase tracking-wider block sm:inline mr-2">
              Demonstration Only:
            </strong>
            This is an interactive simulation of DreamSpace AI&apos;s booking collection mechanism. No actual room has been reserved, room availability has not been verified against a real PMS, and no payment details will ever be requested.
          </div>
        </div>

        {submittedEnquiry ? (
          /* Submission Result Voucher / Success Card */
          <div className="max-w-2xl mx-auto bg-[#0d1629] rounded-2xl border border-blue-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600/20 text-blue-400 text-xs font-mono font-bold px-3 py-1 rounded-bl-lg border-b border-l border-blue-500/30">
              SIMULATED LEAD RECORD
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Demo Booking Enquiry Assembled
                </h3>
                <p className="text-xs text-slate-400">
                  Reference: <span className="font-mono text-sky-400">{submittedEnquiry.referenceId}</span> · Status: Routed to Hotelier Dashboard
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 bg-[#080d19] p-5 rounded-xl border border-slate-800 mb-6">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Guest Name:</span>
                <span className="font-medium text-white">{submittedEnquiry.guestName}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Contact Email:</span>
                <span className="text-white font-mono text-xs">{submittedEnquiry.guestEmail}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Phone:</span>
                <span className="text-white font-mono text-xs">{submittedEnquiry.guestPhone}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Selected Room:</span>
                <span className="font-medium text-sky-400">{submittedEnquiry.room.name}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Dates ({submittedEnquiry.nights} nights):</span>
                <span className="font-medium text-white">{submittedEnquiry.dates}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">Guest Count:</span>
                <span className="font-medium text-white">{submittedEnquiry.guestCount} Guests</span>
              </div>
              {submittedEnquiry.specialRequests && (
                <div className="py-1.5 border-b border-slate-800">
                  <span className="text-slate-400 block mb-1">Special Requests:</span>
                  <span className="text-slate-300 text-xs italic">{submittedEnquiry.specialRequests}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 text-base font-bold text-white">
                <span>Simulated Rate Estimate:</span>
                <span className="text-sky-400 tabular-nums">${submittedEnquiry.totalEstimate} USD</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              <strong>How it works in production:</strong> This inquiry would trigger an instantaneous notification to your front-desk reservation desk, prepare a personalized booking quote, and notify the traveler via WhatsApp or email.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors text-center cursor-pointer"
              >
                Test Another Booking Enquiry
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <div className="max-w-4xl mx-auto bg-[#0d1629] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Dates & Guests */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>1. Stay Dates & Party Size</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value={1}>1 Guest (Solo Traveler)</option>
                      <option value={2}>2 Guests (Couple / Pair)</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests (Family / Group)</option>
                      <option value={5}>5 Guests (Max capacity)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Preferred Room Selection */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    <span>2. Select Preferred Room Tier</span>
                  </h3>
                  <span className="text-xs text-slate-400">
                    Calculated for {nights} {nights === 1 ? 'night' : 'nights'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {MOUNTAIN_VIEW_RESORT.rooms.map((room) => {
                    const isSelected = room.id === selectedRoomId;
                    return (
                      <div
                        key={room.id}
                        onClick={() => setSelectedRoomId(room.id)}
                        className={`rounded-xl border p-4 cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#142340] border-blue-500 shadow-lg shadow-blue-900/20 ring-1 ring-blue-500'
                            : 'bg-[#080d19] border-slate-800 hover:border-slate-700 hover:bg-[#0b1324]'
                        }`}
                      >
                        <div>
                          <div className="h-32 w-full rounded-lg overflow-hidden mb-3 bg-slate-800">
                            <img
                              src={room.image}
                              alt={room.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex items-start justify-between gap-1 mb-1">
                            <h4 className="font-semibold text-white text-sm">
                              {room.name}
                            </h4>
                          </div>

                          <div className="text-lg font-bold text-sky-400 tabular-nums mb-1">
                            ${room.basePricePerNight}
                            <span className="text-xs font-normal text-slate-400"> / night</span>
                          </div>

                          <p className="text-xs text-slate-400 line-clamp-2 mb-2">
                            {room.bedConfig} · Up to {room.maxGuests} guests
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="text-slate-400">
                            {nights} nights: <strong className="text-white">${nights * room.basePricePerNight}</strong>
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'text-slate-400 bg-slate-800'
                            }`}
                          >
                            {isSelected ? 'Selected' : 'Select'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Contact Information */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>3. Guest Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Mobile Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2831"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Special Inquiries or Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Late arrival note, anniversary celebration, hypoallergenic pillows, crib needed..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Estimated Demo Total:{' '}
                  <span className="text-lg font-bold text-white tabular-nums">${estimatedTotal} USD</span>
                  <span className="block text-[11px] text-slate-400">
                    Illustrative estimate for demonstration only.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Demo Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
}
