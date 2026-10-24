import { useState } from 'react';
import { Send, CheckCircle2, Mail } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-900 py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Signup Row */}
        <div className="mb-12 pb-12 border-b border-slate-900/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <Mail className="w-3.5 h-3.5" />
              <span>Stay Ahead in Hospitality AI</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Subscribe to the DreamSpace AI Newsletter
            </h3>
            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              Get bi-weekly insights on hotel automation, reducing front-desk burnout, guest communication best practices, and direct booking tactics.
            </p>
          </div>

          <div className="lg:col-span-6">
            {newsletterSubscribed ? (
              <div className="bg-[#0b1324] border border-emerald-500/40 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-white text-sm">Thank You for Subscribing!</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    We&apos;ve added <span className="text-sky-400 font-mono">{newsletterEmail}</span> to our hospitality newsletter dispatch list.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-[#090f1d] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onScrollTo('home');
              }}
              className="text-lg font-bold text-white tracking-tight hover:text-sky-400 transition-colors inline-block"
            >
              DreamSpace AI
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Autonomous AI receptionist platform for hotels and resorts. Answering guest questions, managing enquiries, and simplifying bookings 24/7.
            </p>
            <div className="text-[11px] text-slate-500">
              Demonstration property: Mountain View Resort (Sample Data).
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Product Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onScrollTo('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Features & Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('live-demo')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Interactive AI Chatbot Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('booking-assistant')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Booking Assistant Simulation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('hotel-owners')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Hotel Owner Portal & Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('pricing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Subscription Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Transparency & Notice
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              DreamSpace AI is demonstrated with fictional hotel data. We strictly prohibit fake customer metrics, fake testimonials, and fabricated reviews. Production installations integrate directly with verified property rulebooks.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onScrollTo('about')}
                className="text-sky-400 hover:text-sky-300 transition-colors cursor-pointer font-medium"
              >
                Learn more about our mission &rarr;
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DreamSpace AI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Grounded Hospitality Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>24/7 AI Receptionist</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
