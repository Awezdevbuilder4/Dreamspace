import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import BookingAssistant from './components/BookingAssistant';
import HotelOwnerSection from './components/HotelOwnerSection';
import Pricing from './components/Pricing';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import { MessageSquareText } from 'lucide-react';

export default function App() {
  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    handleScrollTo('hotel-owners');
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar onNavigate={handleScrollTo} />

      <main className="flex-1">
        {/* 1. Hero Page */}
        <Hero onScrollTo={handleScrollTo} />

        {/* 2. Features */}
        <Features onScrollTo={handleScrollTo} />

        {/* 3. Live AI Demo (Mountain View Resort Grounded Chatbot) */}
        <LiveDemo onScrollTo={handleScrollTo} />

        {/* 4. Booking Assistant (Demo enquiry flow with disclaimers) */}
        <BookingAssistant />

        {/* 5. Hotel Owner Section (Productivity gains + Pilot form) */}
        <HotelOwnerSection />

        {/* 6. Pricing (Starter, Growth, Pro with illustrative labels) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 7. About and Contact (Mission + Contact form) */}
        <AboutContact />
      </main>

      {/* Floating Shortcut to Demo */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleScrollTo('live-demo')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-xl shadow-blue-900/50 hover:shadow-blue-500/30 transition-all border border-blue-400/30 cursor-pointer"
          title="Try live Mountain View Resort AI assistant"
        >
          <MessageSquareText className="w-4 h-4" />
          <span className="hidden sm:inline">Try Demo Receptionist</span>
        </button>
      </div>

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}
