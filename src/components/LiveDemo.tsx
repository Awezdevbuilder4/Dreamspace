import { useState, useRef, useEffect } from 'react';
import {
  Send,
  Bot,
  User,
  Sparkles,
  Info,
  RotateCcw,
  BookOpen,
  Wifi,
  Waves,
  Utensils,
  Bed,
  Check,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import {
  MOUNTAIN_VIEW_RESORT,
  queryResortAssistant,
  SAMPLE_QUESTIONS
} from '../data/hotelData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  sourceCategory?: string;
  isGrounded?: boolean;
}

interface LiveDemoProps {
  onScrollTo: (sectionId: string) => void;
}

export default function LiveDemo({ onScrollTo }: LiveDemoProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello and welcome to Mountain View Resort! I am your AI Receptionist. I can provide real-time assistance with room rates, our heated infinity pool, dining at The Alpine Table, Wi-Fi access, and check-in policies. How may I assist you today?",
      timestamp: 'Just now',
      sourceCategory: 'Mountain View Resort Directory',
      isGrounded: true
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showKnowledgeModal, setShowKnowledgeModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response with natural slight latency
    setTimeout(() => {
      const response = queryResortAssistant(query);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sourceCategory: response.sourceCategory,
        isGrounded: response.isGrounded
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'ai',
        text: "Chat reset. How can I help you with Mountain View Resort's accommodations or amenities?",
        timestamp: 'Just now',
        sourceCategory: 'Mountain View Resort Directory',
        isGrounded: true
      }
    ]);
  };

  return (
    <section id="live-demo" className="py-20 md:py-28 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <span>Interactive Receptionist</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Live Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Try the AI Receptionist Live
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ask any question about our fictional demonstration property,{' '}
            <strong className="text-white font-semibold">Mountain View Resort</strong>.
            Watch how the assistant answers grounded questions instantly and refuses to hallucinate unknown facts.
          </p>
        </div>

        {/* Prominent Demonstration Notice Box */}
        <div className="max-w-4xl mx-auto mb-8 bg-[#0f172a]/90 border border-sky-500/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white font-medium">Demonstration Data Notice:</strong> Mountain View Resort is a fictional property created to demonstrate DreamSpace AI. The chatbot is programmed to only answer using provided sample information and will state when an answer is not known.
            </div>
          </div>
          <button
            onClick={() => setShowKnowledgeModal(true)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg whitespace-nowrap shrink-0 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            <span>View Resort Directory</span>
          </button>
        </div>

        {/* Chat Application Interface */}
        <div className="max-w-4xl mx-auto bg-[#0d1527] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Chat Window Top Bar */}
          <div className="px-5 py-4 bg-[#111a30] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">
                    Mountain View Resort Concierge
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.2 rounded">
                    Active Demo
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  Powered by DreamSpace AI · Zero Hallucinations Policy
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Message Scroll Area */}
          <div className="p-4 sm:p-6 min-h-[360px] max-h-[460px] overflow-y-auto space-y-4 bg-[#0a101f]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div className="max-w-[85%] sm:max-w-[78%] space-y-1.5">
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                        : 'bg-[#142038] border border-slate-700/70 text-slate-200 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'ai' && (
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 px-1">
                      {msg.isGrounded ? (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Grounded in Resort Data</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-amber-400">
                          <AlertCircle className="w-3 h-3" />
                          <span>Out of Scope Warning</span>
                        </span>
                      )}
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="truncate">{msg.sourceCategory}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{msg.timestamp}</span>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#142038] border border-slate-700/70 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Testing Chips */}
          <div className="px-4 py-3 bg-[#0d1629] border-t border-slate-800/80">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Suggested Test Questions:
            </div>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_QUESTIONS.map((question, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(question)}
                  className="text-xs bg-[#15223c] hover:bg-[#1b2b4d] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors cursor-pointer text-left"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#111a30] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about pool hours, room rates, restaurant, Wi-Fi, check-in..."
              className="flex-1 bg-[#090f1d] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

        {/* Quick Jump to Booking Assistant */}
        <div className="max-w-4xl mx-auto mt-6 text-center">
          <p className="text-xs text-slate-400">
            Ready to test booking enquiry flow?{' '}
            <button
              onClick={() => onScrollTo('booking-assistant')}
              className="text-sky-400 hover:underline font-medium cursor-pointer"
            >
              Jump to the Booking Assistant demo &rarr;
            </button>
          </p>
        </div>

      </div>

      {/* Fictional Hotel Knowledge Directory Modal */}
      {showKnowledgeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-[#0f172a] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Mountain View Resort Directory (Demonstration Data)
                </h3>
                <p className="text-xs text-slate-400">
                  This is the exact truth source DreamSpace AI uses to answer guest queries.
                </p>
              </div>
              <button
                onClick={() => setShowKnowledgeModal(false)}
                className="text-slate-400 hover:text-white px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>

            {/* Room catalog */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5" />
                <span>Room Types & Pricing</span>
              </h4>
              <div className="space-y-2.5">
                {MOUNTAIN_VIEW_RESORT.rooms.map((room) => (
                  <div key={room.id} className="p-3 rounded-lg bg-[#162238] border border-slate-800 text-xs text-slate-300">
                    <div className="flex justify-between items-center text-sm font-semibold text-white mb-1">
                      <span>{room.name}</span>
                      <span className="text-sky-400 tabular-nums">${room.basePricePerNight}/night</span>
                    </div>
                    <p>{room.bedConfig} · Up to {room.maxGuests} guests · {room.sizeSqFt} sq ft</p>
                    <p className="text-slate-400 text-[11px] mt-1">{room.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
                <Waves className="w-3.5 h-3.5" />
                <span>Facilities & Amenities</span>
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-[#162238] border border-slate-800">
                  <div className="font-semibold text-white">Heated Outdoor Infinity Pool & Sauna</div>
                  <div className="text-sky-400 font-mono text-[11px] mt-0.5">Hours: 7:00 AM – 10:00 PM (All ages) · 10:00 PM – 11:00 PM (18+)</div>
                  <div className="text-slate-400 mt-1">Maintained at 30°C (86°F) year-round. Complimentary towels and herbal tea bar on Terrace Level.</div>
                </div>
                <div className="p-3 rounded-lg bg-[#162238] border border-slate-800">
                  <div className="font-semibold text-white">The Alpine Table Restaurant</div>
                  <div className="text-sky-400 font-mono text-[11px] mt-0.5">Breakfast: 6:30–10:30 AM · Lunch: 12:00–2:30 PM · Dinner: 5:30–10:00 PM</div>
                  <div className="text-slate-400 mt-1">Farm-to-table cuisine, stone fireplace, vegetarian & gluten-free options. In-room dining available during restaurant hours.</div>
                </div>
                <div className="p-3 rounded-lg bg-[#162238] border border-slate-800">
                  <div className="font-semibold text-white">Free Wi-Fi</div>
                  <div className="text-sky-400 font-mono text-[11px] mt-0.5">Network: MountainView-Guest (No password needed)</div>
                  <div className="text-slate-400 mt-1">300 Mbps high-speed fiber across all rooms, dining areas, and pool deck.</div>
                </div>
              </div>
            </div>

            {/* Key Policies */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">Resort Policies</h4>
              <div className="p-3 rounded-lg bg-[#162238] border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div><strong>Check-in:</strong> 3:00 PM · <strong>Check-out:</strong> 11:00 AM</div>
                <div><strong>Parking:</strong> Free on-site outdoor & heated underground parking with Level 2 EV chargers.</div>
                <div><strong>Pets:</strong> Service animals welcome. Well-behaved dogs under 40 lbs permitted in ground-floor Standard Rooms ($35/night fee).</div>
                <div><strong>Smoking:</strong> 100% non-smoking property.</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowKnowledgeModal(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Close Directory
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
