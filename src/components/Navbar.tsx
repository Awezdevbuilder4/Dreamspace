import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-sky-400 transition-colors"
          >
            DreamSpace AI
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('features')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo('live-demo')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Live AI Demo
            </button>
            <button
              onClick={() => scrollTo('booking-assistant')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Booking Assistant
            </button>
            <button
              onClick={() => scrollTo('hotel-owners')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              For Hotel Owners
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Pricing
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollTo('live-demo')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Try Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0b1222] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('features')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('live-demo')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400"
          >
            Live AI Demo
          </button>
          <button
            onClick={() => scrollTo('booking-assistant')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400"
          >
            Booking Assistant
          </button>
          <button
            onClick={() => scrollTo('hotel-owners')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400"
          >
            For Hotel Owners
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-sky-400"
          >
            Pricing
          </button>
          <div className="pt-2">
            <button
              onClick={() => scrollTo('live-demo')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Try Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
