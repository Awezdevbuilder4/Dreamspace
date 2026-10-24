import { useState, useEffect } from 'react';
import {
  Building2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Send,
  CheckCircle2,
  PhoneCall,
  Sliders,
  Sparkles,
  Inbox,
  User,
  Lock,
  LogOut,
  KeyRound,
  FileText,
  Save,
  Check,
  AlertCircle
} from 'lucide-react';
import { MOUNTAIN_VIEW_RESORT } from '../data/hotelData';

interface OwnerUser {
  email: string;
  name: string;
  propertyName: string;
  roomCount: string;
}

export default function HotelOwnerSection() {
  const [currentUser, setCurrentUser] = useState<OwnerUser | null>(() => {
    try {
      const saved = localStorage.getItem('dreamspace_hotel_owner');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Auth Mode: 'login' | 'signup' | null
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [loginEmail, setLoginEmail] = useState('owner@mountainview.com');
  const [loginPassword, setLoginPassword] = useState('resort2026');
  
  // Sign up state
  const [signupName, setSignupName] = useState('');
  const [signupProperty, setSignupProperty] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRoomCount, setSignupRoomCount] = useState('25-75 rooms');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');

  // Dashboard tab: 'stream' | 'metrics' | 'controls' | 'settings'
  const [activeTab, setActiveTab] = useState<'stream' | 'metrics' | 'controls'>('stream');

  // Policy rules editable in secure dashboard
  const [policies, setPolicies] = useState({
    poolHours: MOUNTAIN_VIEW_RESORT.facilities[0].hours,
    checkInTime: MOUNTAIN_VIEW_RESORT.policies.checkInTime,
    checkOutTime: MOUNTAIN_VIEW_RESORT.policies.checkOutTime,
    wifiName: "MountainView-Guest",
    petPolicy: "Service animals welcome. Dogs up to 40 lbs permitted in ground-floor Standard Rooms ($35/night fee)."
  });
  const [policySaved, setPolicySaved] = useState(false);

  // Live enquiries state for the dashboard
  const [inquiries, setInquiries] = useState([
    {
      id: 'INQ-1042',
      guest: 'Sarah Jenkins (CA)',
      channel: 'Website Assistant',
      time: '12 mins ago',
      question: 'Does the Deluxe Mountain room have a bathtub and a fireplace?',
      response: 'Confirmed deep soaking tub, separate rainfall shower, and natural stone gas fireplace.',
      status: 'Auto-Resolved',
      priority: 'Standard'
    },
    {
      id: 'INQ-1041',
      guest: 'David Miller (NY)',
      channel: 'Direct Booking Lead',
      time: '34 mins ago',
      question: 'Requesting Family Alpine Suite for 4 guests (Nov 18-21). Need crib.',
      response: 'Estimated booking value: $960 USD. Routed to Front Desk for confirmation call.',
      status: 'Pending Callback',
      priority: 'High Priority'
    },
    {
      id: 'INQ-1040',
      guest: 'Elena Rostova (UK)',
      channel: 'Website Assistant',
      time: '1 hour ago',
      question: 'Can we store luggage at 10 AM before the 3 PM check-in?',
      response: 'Confirmed complimentary early luggage storage and lobby access.',
      status: 'Auto-Resolved',
      priority: 'Standard'
    }
  ]);

  // Lead contact form for unauthenticated visitors
  const [formData, setFormData] = useState({
    propertyName: '',
    roomCount: '25-75 rooms',
    managerName: '',
    workEmail: '',
    phone: '',
    currentPms: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setAuthError('Please enter both email and password.');
      return;
    }

    const user: OwnerUser = {
      email: loginEmail,
      name: loginEmail.includes('mountain') ? 'Alex Morgan' : 'Hotel General Manager',
      propertyName: loginEmail.includes('mountain') ? 'Mountain View Resort' : 'Alpine Boutique Lodge',
      roomCount: '48 rooms'
    };

    setCurrentUser(user);
    try {
      localStorage.setItem('dreamspace_hotel_owner', JSON.stringify(user));
    } catch {
      // ignore
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!signupName.trim() || !signupEmail.trim() || !signupProperty.trim() || !signupPassword.trim()) {
      setAuthError('Please fill in all required fields.');
      return;
    }

    const user: OwnerUser = {
      email: signupEmail,
      name: signupName,
      propertyName: signupProperty,
      roomCount: signupRoomCount
    };

    setCurrentUser(user);
    try {
      localStorage.setItem('dreamspace_hotel_owner', JSON.stringify(user));
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('dreamspace_hotel_owner');
    } catch {
      // ignore
    }
  };

  const handleSavePolicies = (e: React.FormEvent) => {
    e.preventDefault();
    setPolicySaved(true);
    setTimeout(() => setPolicySaved(false), 3000);
  };

  const markInquiryHandled = (id: string) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: 'Completed' } : inq));
  };

  const handlePilotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.propertyName || !formData.workEmail || !formData.managerName) return;
    setFormSubmitted(true);
  };

  return (
    <section id="hotel-owners" className="py-20 md:py-28 bg-[#070c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-3">
            <span>For Hoteliers & Resort Operators</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Operations & Revenue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Automate Repetitive Guest Inquiries. Protect Front Desk Sanity.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hoteliers spend over 3 hours every day answering the same questions: pool hours, breakfast times, parking fees, and room rates. DreamSpace AI handles them automatically so your team can focus on in-person hospitality.
          </p>
        </div>

        {/* 3 Operational Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#0d1629] border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-4">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              70% Fewer Routine Calls
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Handle the incessant wave of &quot;Is the pool open?&quot; and &quot;Do you have Wi-Fi?&quot; instantly without keeping checking-in guests waiting at the desk.
            </p>
          </div>

          <div className="bg-[#0d1629] border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Zero After-Hours Dropoff
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Travelers researching at midnight receive instant, accurate answers and booking guidance instead of leaving for an Online Travel Agency (OTA).
            </p>
          </div>

          <div className="bg-[#0d1629] border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Capture Direct Inquiries
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Transform high-intent website visitors into direct booking leads without losing 18% to 25% in third-party intermediary commissions.
            </p>
          </div>
        </div>

        {/* SECURE DASHBOARD (When Logged In) vs AUTHENTICATION PORTAL (When Logged Out) */}
        {currentUser ? (
          /* ================= LOGGED IN SECURE DASHBOARD ================= */
          <div className="bg-[#0d1629] rounded-2xl border border-blue-500/50 p-6 sm:p-8 shadow-2xl mb-12">
            
            {/* Dashboard Header with User Profile & Logout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {currentUser.propertyName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {currentUser.propertyName}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                      Live Portal Active
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Logged in as <strong className="text-slate-200">{currentUser.name}</strong> ({currentUser.email}) · {currentUser.roomCount}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Segmented Tab Controls */}
                <div className="flex items-center bg-[#070c18] p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('stream')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'stream'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Guest Inquiries
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'metrics'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Performance
                  </button>
                  <button
                    onClick={() => setActiveTab('controls')}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'controls'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Resort Policies
                  </button>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                  title="Sign out of Hotelier Portal"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* TAB 1: Guest Inquiries Stream */}
            {activeTab === 'stream' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    Live Front Desk Inquiries Feed
                  </div>
                  <div className="text-xs text-slate-400">
                    Auto-refreshed in real-time
                  </div>
                </div>

                <div className="space-y-3">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-xl bg-[#080d19] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white text-sm">{inq.guest}</span>
                          <span className="text-[11px] font-mono text-slate-400">({inq.channel})</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-xs text-slate-400">{inq.time}</span>
                          <span
                            className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                              inq.status === 'Completed'
                                ? 'bg-slate-800 text-slate-400'
                                : inq.status === 'Auto-Resolved'
                                ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/80'
                                : 'bg-amber-950/60 text-amber-300 border border-amber-800/80'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300">
                          &quot;{inq.question}&quot;
                        </div>
                        <div className="text-xs text-slate-400 bg-[#111a30] p-2.5 rounded-lg border border-slate-800">
                          <strong className="text-sky-400">AI Response:</strong> {inq.response}
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        {inq.status !== 'Completed' ? (
                          <button
                            onClick={() => markInquiryHandled(inq.id)}
                            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                          >
                            Mark Handled
                          </button>
                        ) : (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            Archived
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Performance Metrics */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#080d19] border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Monthly Enquiries</div>
                    <div className="text-2xl font-bold text-white tabular-nums mt-1">1,842</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">+18% vs last month</div>
                  </div>
                  <div className="p-4 bg-[#080d19] border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Autonomous Resolution</div>
                    <div className="text-2xl font-bold text-sky-400 tabular-nums mt-1">94.2%</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Zero hallucinations</div>
                  </div>
                  <div className="p-4 bg-[#080d19] border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Captured Booking Leads</div>
                    <div className="text-2xl font-bold text-indigo-400 tabular-nums mt-1">142</div>
                    <div className="text-[11px] text-emerald-400 mt-0.5">Avg value $620</div>
                  </div>
                  <div className="p-4 bg-[#080d19] border border-slate-800 rounded-xl">
                    <div className="text-xs text-slate-400">Est. OTA Fee Saved</div>
                    <div className="text-2xl font-bold text-emerald-400 tabular-nums mt-1">$15,800</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Based on 18% fee</div>
                  </div>
                </div>

                <div className="p-4 bg-[#080d19] border border-slate-800 rounded-xl text-xs space-y-3">
                  <div className="font-semibold text-white text-sm">Most Common Traveler Inquiries</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-slate-300 text-xs mb-1">
                        <span>Pool & Vitality Spa Timings</span>
                        <span className="font-mono text-white">42% (773 inquiries)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-sky-400 h-full w-[42%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-300 text-xs mb-1">
                        <span>Room Upgrades & Balcony Views</span>
                        <span className="font-mono text-white">32% (589 inquiries)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[32%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-300 text-xs mb-1">
                        <span>Early Check-in & Luggage Storage</span>
                        <span className="font-mono text-white">26% (480 inquiries)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-400 h-full w-[26%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Policy Customization / Rulebook */}
            {activeTab === 'controls' && (
              <form onSubmit={handleSavePolicies} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Hotelier Knowledge Customizer
                    </h4>
                    <p className="text-xs text-slate-400">
                      Changes here directly update what your DreamSpace AI receptionist tells guests.
                    </p>
                  </div>
                  {policySaved && (
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Updated Knowledge Base!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Check-In Time
                    </label>
                    <input
                      type="text"
                      value={policies.checkInTime}
                      onChange={(e) => setPolicies({ ...policies, checkInTime: e.target.value })}
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Check-Out Time
                    </label>
                    <input
                      type="text"
                      value={policies.checkOutTime}
                      onChange={(e) => setPolicies({ ...policies, checkOutTime: e.target.value })}
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Infinity Pool & Spa Schedule
                  </label>
                  <input
                    type="text"
                    value={policies.poolHours}
                    onChange={(e) => setPolicies({ ...policies, poolHours: e.target.value })}
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Guest Wi-Fi Network Information
                  </label>
                  <input
                    type="text"
                    value={policies.wifiName}
                    onChange={(e) => setPolicies({ ...policies, wifiName: e.target.value })}
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Pet Policy & Surcharge
                  </label>
                  <textarea
                    rows={2}
                    value={policies.petPolicy}
                    onChange={(e) => setPolicies({ ...policies, petPolicy: e.target.value })}
                    className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Knowledge Base Changes</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* ================= LOGGED OUT AUTHENTICATION & PILOT SECTION ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Left Column: Hotelier Authentication (Log In / Sign Up) */}
            <div className="lg:col-span-6 bg-[#0d1629] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-sky-400" />
                    <span>Hotel Owner Portal</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sign in to manage your property assistant and view guest conversations
                  </p>
                </div>

                {/* Auth Mode Toggle */}
                <div className="flex items-center bg-[#070c18] p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('login');
                      setAuthError('');
                    }}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      authMode === 'login'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signup');
                      setAuthError('');
                    }}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      authMode === 'signup'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {authError && (
                <div className="mb-4 p-3 rounded-lg bg-red-950/40 border border-red-800/80 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {authMode === 'login' ? (
                /* Hotel Owner Login Form */
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="owner@mountainview.com"
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="bg-[#080d19] p-3 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                    <strong className="text-sky-400">Demo Login:</strong> Pre-filled with Mountain View Resort general manager credentials (<span className="text-white">owner@mountainview.com</span> / <span className="text-white">resort2026</span>). Click below to access the secure portal.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <KeyRound className="w-4 h-4" />
                    <span>Log In to Owner Portal</span>
                  </button>
                </form>
              ) : (
                /* Hotel Owner Sign Up Form */
                <form onSubmit={handleSignup} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name & Role *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maria Gonzalez, General Manager"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Hotel / Resort Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Crestview Lodge"
                        value={signupProperty}
                        onChange={(e) => setSignupProperty(e.target.value)}
                        required
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Property Size
                      </label>
                      <select
                        value={signupRoomCount}
                        onChange={(e) => setSignupRoomCount(e.target.value)}
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Under 25 rooms">Under 25 rooms</option>
                        <option value="25-75 rooms">25 – 75 rooms</option>
                        <option value="75-150 rooms">75 – 150 rooms</option>
                        <option value="150+ rooms">150+ rooms</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="maria@crestviewlodge.com"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Create Password *
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      required
                      className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <User className="w-4 h-4" />
                    <span>Create Owner Account & Enter Dashboard</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Hotel Owner Pilot Request Form */}
            <div className="lg:col-span-6 bg-[#0d1629] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Request a Custom Property Pilot
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Prefer a guided deployment? Share your details for a personalized 14-day evaluation with your custom room catalog.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-[#080d19] border border-emerald-500/40 rounded-xl p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Pilot Request Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.managerName}</strong>. Our hospitality deployment team will analyze <strong className="text-sky-400">{formData.propertyName}</strong> and prepare a custom demonstration receptionist within 1 business day.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        propertyName: '',
                        roomCount: '25-75 rooms',
                        managerName: '',
                        workEmail: '',
                        phone: '',
                        currentPms: '',
                        notes: ''
                      });
                    }}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Property
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePilotSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Property Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pine Ridge Lodge"
                        value={formData.propertyName}
                        onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                        required
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Number of Rooms
                      </label>
                      <select
                        value={formData.roomCount}
                        onChange={(e) => setFormData({ ...formData, roomCount: e.target.value })}
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="1-25 rooms">Under 25 rooms (Boutique / Inn)</option>
                        <option value="25-75 rooms">25 – 75 rooms (Mid-size)</option>
                        <option value="75-150 rooms">75 – 150 rooms (Hotel / Resort)</option>
                        <option value="150+ rooms">150+ rooms (Full-scale Resort)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Your Name & Title *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Morgan, GM"
                        value={formData.managerName}
                        onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                        required
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@pineridge.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        required
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 018-9922"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Current PMS (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Cloudbeds, Opera, Mews"
                        value={formData.currentPms}
                        onChange={(e) => setFormData({ ...formData, currentPms: e.target.value })}
                        className="w-full bg-[#080d19] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-sky-400" />
                    <span>Schedule Property Pilot Consultation</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
