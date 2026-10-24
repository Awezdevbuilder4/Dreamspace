import { useState } from 'react';
import {
  MessageSquare,
  Building2,
  BedDouble,
  ClipboardList,
  CalendarCheck2,
  LayoutDashboard,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FeaturesProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Features({ onScrollTo }: FeaturesProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      id: "guest-support",
      icon: MessageSquare,
      title: "AI-Powered Guest Support",
      summary: "Autonomous conversational reception that attends to guests 24/7 across website, mobile, and messaging.",
      details: [
        "Resolves common guest queries within 1 second",
        "Empathetic tone adhering to five-star hospitality standards",
        "Eliminates wait times and reduces front-desk phone congestion"
      ],
      previewSnippet: {
        guest: "Can we get fresh towels delivered to the pool deck?",
        ai: "Certainly! Complimentary fresh towels are stocked on the Terrace Level pool deck next to the cedar sauna. If you require extra in your room, our front team will happily assist."
      }
    },
    {
      id: "facilities-policies",
      icon: Building2,
      title: "Answers About Facilities & Policies",
      summary: "Instant, strictly verified facts about pool hours, dining times, parking, pet rules, and Wi-Fi credentials.",
      details: [
        "100% grounded in your official property rulebook",
        "Refuses to hallucinate features your property doesn't possess",
        "Real-time operational updates (e.g. seasonal pool maintenance)"
      ],
      previewSnippet: {
        guest: "What are your check-in and breakfast times?",
        ai: "Check-in begins at 3:00 PM (express luggage storage is available if you arrive early). Breakfast at The Alpine Table is served from 6:30 AM to 10:30 AM daily with full vegetarian and gluten-free menus."
      }
    },
    {
      id: "room-pricing",
      icon: BedDouble,
      title: "Room Information & Pricing",
      summary: "Clear, transparent room comparisons, bed configurations, square footage, and direct seasonal rates.",
      details: [
        "Presents Standard, Deluxe, and Suite options effortlessly",
        "Highlights distinct room amenities like balconies and fireplaces",
        "Encourages direct bookings by emphasizing best rate guarantees"
      ],
      previewSnippet: {
        guest: "Which room has the best mountain view and a balcony?",
        ai: "Our Deluxe Mountain Room ($210/night) features floor-to-ceiling glass sliding doors opening to a private wooden balcony with direct, panoramic alpine peak views, plus an in-room stone fireplace."
      }
    },
    {
      id: "enquiry-collection",
      icon: ClipboardList,
      title: "Booking Enquiry Collection",
      summary: "Captures qualified traveler dates, group size, preferred room tier, and contact information seamlessly.",
      details: [
        "Zero friction conversational data gathering",
        "Captures email and phone for guaranteed hotel staff follow-up",
        "Logs special requests like anniversaries, cribs, or dietary needs"
      ],
      previewSnippet: {
        guest: "We'd like to book 3 nights in October for 2 adults and 2 kids.",
        ai: "I'd love to help prepare your enquiry! For a family of 4, the Family Alpine Suite is ideal. May I have your check-in date and your contact details to assemble the reservation package?"
      }
    },
    {
      id: "reservation-assistance",
      icon: CalendarCheck2,
      title: "Reservation Assistance",
      summary: "Guides hesitant travelers through room selection and prepares clear reservation request summaries.",
      details: [
        "Helps guests choose the right room type for their exact budget",
        "Calculates clear rate estimates and length-of-stay totals",
        "Connects directly with hotel staff for final booking confirmation"
      ],
      previewSnippet: {
        guest: "Can you summarize our stay cost for 2 nights in the Deluxe Room?",
        ai: "Certainly! 2 nights in the Deluxe Mountain Room at $210/night comes to an estimated base total of $420, including heated pool access, free Wi-Fi, and complimentary heated parking."
      }
    },
    {
      id: "owner-dashboard",
      icon: LayoutDashboard,
      title: "Hotel Owner Dashboard",
      summary: "A centralized operational hub providing real-time visibility into guest conversations, trends, and demand.",
      details: [
        "Live conversation logs and resolution audit trails",
        "Instant alerts for VIP arrivals or complex custom requests",
        "One-click hotel rulebook and pricing updates"
      ],
      previewSnippet: {
        guest: "System Notification",
        ai: "Daily Summary: 142 guest enquiries resolved autonomously. 18 qualified booking leads gathered. Front-desk call volume decreased by 68%."
      }
    },
    {
      id: "enquiry-management",
      icon: Users,
      title: "Customer Enquiry Management",
      summary: "Sort, filter, and prioritize high-value reservation inquiries and guest requests with zero lead leakage.",
      details: [
        "Structured lead cards with dates, party size, and room preference",
        "Export inquiries to your PMS or CRM or email notifications",
        "Staff notes and one-click WhatsApp/email outreach"
      ],
      previewSnippet: {
        guest: "Lead Card #8821",
        ai: "Guest: Sarah Jenkins · Dates: Nov 12-15 · Room: Deluxe Mountain · Value: $630 · Status: Pending Front Desk Callback · Phone: +1 (555) 019-2831"
      }
    }
  ];

  const currentFeature = features[activeFeatureIndex];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#091022] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <span>Core Capabilities</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Hospitality Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Engineered Specifically for Modern Hotels & Resorts
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From late-night pool hours questions to high-value family suite inquiries,
            DreamSpace AI handles every interaction with precision, warmth, and zero hallucinations.
          </p>
        </div>

        {/* Interactive Feature Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feature Selection List */}
          <div className="lg:col-span-5 space-y-2">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = idx === activeFeatureIndex;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#131f38] border-blue-500/50 shadow-lg shadow-blue-900/10'
                      : 'bg-[#0d1629]/60 border-slate-800 hover:bg-[#101b33] hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {feature.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0 ml-2">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {feature.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive & Live Interaction Sample */}
          <div className="lg:col-span-7 bg-[#0d1629] rounded-2xl border border-slate-800 p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <currentFeature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {currentFeature.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Feature Module 0{activeFeatureIndex + 1} of 07
                  </div>
                </div>
              </div>
              <button
                onClick={() => onScrollTo('live-demo')}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Test in Live Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {currentFeature.summary}
            </p>

            {/* Checklist of operational advantages */}
            <div className="space-y-3 mb-8">
              {currentFeature.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Realistic AI interaction preview container */}
            <div className="bg-[#080d1a] rounded-xl border border-slate-800/90 p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
                <span className="font-medium text-slate-300">Simulated Guest Interaction</span>
                <span className="font-mono text-[11px] text-sky-400">DreamSpace Reception Engine</span>
              </div>

              {/* Guest query */}
              <div className="flex justify-end">
                <div className="bg-slate-800 text-slate-200 text-xs sm:text-sm rounded-xl px-4 py-2.5 max-w-[85%]">
                  {currentFeature.previewSnippet.guest}
                </div>
              </div>

              {/* Receptionist reply */}
              <div className="flex justify-start">
                <div className="bg-[#121e35] border border-blue-900/60 text-slate-200 text-xs sm:text-sm rounded-xl px-4 py-3 max-w-[90%] leading-relaxed">
                  <p>{currentFeature.previewSnippet.ai}</p>
                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Mountain View Resort Directory</span>
                    <span className="text-emerald-400 font-medium">Verified Response</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400">
                Want to see this working with your hotel&apos;s custom room inventory?
              </span>
              <button
                onClick={() => onScrollTo('hotel-owners')}
                className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 transition-colors"
              >
                Schedule Property Pilot
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
