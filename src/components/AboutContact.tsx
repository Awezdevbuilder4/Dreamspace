import { useState } from 'react';
import { Mail, Compass, ShieldCheck, HeartHandshake, Send, CheckCircle2 } from 'lucide-react';

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: About & Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span>Our Purpose & Mission</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Hospitality First</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Empowering Independent Hotels to Provide 24/7 Five-Star Service
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                <strong>DreamSpace AI</strong> (powered by the StayPilot conversational framework) was founded to resolve a critical challenge in modern hospitality: guests expect instantaneous answers around the clock, while front-desk teams are under heavier operational strain than ever.
              </p>
              <p>
                Large hotel chains have massive call centers, but independent hotels, boutique lodges, and mountain resorts often lose valuable bookings simply because a guest cannot reach someone at midnight or gets put on hold during peak check-in rushes.
              </p>
              <p>
                We build dedicated, strictly grounded AI receptionists that never hallucinate inaccurate amenities, speak with warm hospitality manners, and guide travelers smoothly from initial questions to direct reservation requests.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0d1629] border border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero Hallucinations</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every answer is strictly constrained to your property rulebook. If an answer is unconfirmed, our AI explicitly states it.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1629] border border-slate-800">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-sky-400" />
                  <span>Human Front-Desk First</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We don&apos;t replace hospitality staff—we take over mundane phone inquiries so your team can attend to guests in the lobby.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: General Contact Form */}
          <div id="contact" className="lg:col-span-6 bg-[#0d1629] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">
                Contact the DreamSpace AI Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Have questions about our hotel assistant technology or partnership opportunities? Send us a message.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#080d19] border border-blue-500/40 rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-sky-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Message Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding &quot;{formData.subject}&quot; has been sent to our team. We will respond to <span className="font-mono text-sky-400">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Sarah Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Demo Request">Custom Resort Demo</option>
                    <option value="Partnership">Hospitality Integration / Agency Partner</option>
                    <option value="Support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
