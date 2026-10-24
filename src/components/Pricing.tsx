import { Check, Info, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    {
      name: "Starter",
      tagline: "For boutique inns and bed & breakfasts wanting 24/7 coverage",
      price: 79,
      period: "/ month",
      roomsRecommended: "Up to 30 rooms",
      enquiriesLimit: "1,000 guest chats / mo",
      featured: false,
      features: [
        "24/7 autonomous guest enquiry assistant",
        "Property rules & amenities knowledge engine",
        "Website chat widget with custom theme",
        "Basic booking enquiry capture to email",
        "Mountain & resort directory sync",
        "Email support (48h turnaround)"
      ]
    },
    {
      name: "Growth",
      tagline: "For independent hotels & mountain resorts accelerating direct bookings",
      price: 199,
      period: "/ month",
      roomsRecommended: "30 – 100 rooms",
      enquiriesLimit: "4,000 guest chats / mo",
      featured: true,
      features: [
        "Everything in Starter, plus:",
        "Real-time rate & room availability preview",
        "Advanced booking enquiry collection with SMS alerts",
        "Hotel Owner Analytics & Conversation Dashboard",
        "Custom property voice and VIP guest escalation",
        "Priority phone & email support (4h response)",
        "Zero hallucination guarantee audit"
      ]
    },
    {
      name: "Pro",
      tagline: "For full-service luxury resort properties and multi-property groups",
      price: 399,
      period: "/ month",
      roomsRecommended: "100+ rooms or multi-unit",
      enquiriesLimit: "Unlimited guest chats",
      featured: false,
      features: [
        "Everything in Growth, plus:",
        "Direct bidirectional PMS integration (Opera, Cloudbeds, Mews)",
        "Multi-department routing (Concierge, Spa, Dining, Front Desk)",
        "Multi-language guest auto-translation (20+ languages)",
        "Dedicated hospitality account strategist",
        "Custom staff training and onboarding SLA",
        "Enterprise uptime SLA (99.9%)"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#091022] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <span>Transparent Investment</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Example Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Predictable Plans for Every Property Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminate commission leakage and empower your front desk with flexible subscription plans.
          </p>
        </div>

        {/* Required Illustrative Notice */}
        <div className="max-w-3xl mx-auto mb-14 bg-[#0d1629] border border-slate-800 rounded-xl p-3.5 flex items-center justify-center gap-2 text-xs text-slate-300 text-center">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            <strong className="text-white">Notice:</strong> Prices and plan structures shown below are illustrative and subject to change based on custom property requirements and integrations.
          </span>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                plan.featured
                  ? 'bg-[#0f1c36] border-2 border-blue-500 shadow-2xl shadow-blue-900/20 relative'
                  : 'bg-[#0d1629] border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {plan.featured && (
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2">
                    Most Popular for Independent Hotels
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1">
                  {plan.name}
                </h3>
                
                <p className="text-xs text-slate-400 min-h-[36px] mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-white tabular-nums">
                    ${plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="text-xs text-sky-400 font-medium mb-6 pb-6 border-b border-slate-800">
                  {plan.roomsRecommended} · {plan.enquiriesLimit}
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.featured
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>Inquire for {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commission comparison callout */}
        <div className="mt-12 bg-[#0d1629] border border-slate-800 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <div className="text-sm sm:text-base font-semibold text-white mb-2">
            Save thousands in third-party OTA commissions
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A single direct 3-night family suite booking ($960) typically incurs $170 to $240 in commission fees on major travel sites. One direct booking recovered with DreamSpace AI pays for an entire month of coverage.
          </p>
        </div>

      </div>
    </section>
  );
}
