import { ArrowRight, Bot, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#070c18]">
      {/* Subtle radial ambient glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed category kicker without pill capsule */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400 mb-4">
              <span>Next-Gen Hospitality AI</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Grounded Concierge Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Your Hotel&apos;s AI Receptionist,{' '}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Available 24/7.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Answer guest questions, manage enquiries, and simplify the booking journey with an AI assistant.
            </p>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => onScrollTo('live-demo')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                Try Live Demo
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollTo('hotel-owners')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                For Hotel Owners
              </button>
            </div>

            {/* Proof Points & Operational Guarantees (Clean unboxed text) */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Zero missed night calls</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-sky-400 tabular-nums">&lt; 1s</div>
                <div className="text-xs text-slate-400 mt-0.5">Average response time</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Policy-grounded facts</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Live Chat Teaser */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1527] shadow-2xl">
              {/* Hotel Exterior Photography */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_luxury_resort_1792466466968.jpg"
                  alt="Mountain View Resort luxury exterior at twilight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1527] via-[#0d1527]/40 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-white/90 font-medium drop-shadow bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Mountain View Resort (Demo)
                  </span>
                  <span className="text-sky-300 font-mono text-[11px] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/60 backdrop-blur-sm">
                    AI Concierge Active
                  </span>
                </div>
              </div>

              {/* Simulated Conversation Snapshot */}
              <div className="p-5 space-y-3.5">
                {/* Guest bubble */}
                <div className="flex gap-3 justify-end items-start">
                  <div className="bg-blue-600/90 text-white text-xs sm:text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                    Hi! What time does the pool close, and do you have family rooms for 4?
                  </div>
                </div>

                {/* AI Receptionist bubble */}
                <div className="flex gap-3 justify-start items-start">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-[#152238] border border-slate-700/70 text-slate-200 text-xs sm:text-sm rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] shadow-sm leading-relaxed">
                    <p className="mb-2">
                      Our heated alpine infinity pool is open daily until <strong className="text-white">10:00 PM</strong> (with adults-only hour until 11:00 PM).
                    </p>
                    <p>
                      For 4 guests, our <strong className="text-sky-400">Family Alpine Suite</strong> ($320/night) features 2 bedrooms, kitchenette, and sleeps up to 5 comfortably!
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Verified against Resort Directory</span>
                      <span className="text-sky-400 font-mono">0.3s</span>
                    </div>
                  </div>
                </div>

                {/* Quick prompt preview button */}
                <div className="pt-2">
                  <button
                    onClick={() => onScrollTo('live-demo')}
                    className="w-full py-2.5 px-3 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-300 hover:text-white rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>Interact with the live hotel chatbot below</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
