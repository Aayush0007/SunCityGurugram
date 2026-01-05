import { useState } from "react";
import { motion } from "framer-motion";
// Tree-shaken imports for performance
import Trees from "lucide-react/dist/esm/icons/trees";
import Home from "lucide-react/dist/esm/icons/home";
import Trophy from "lucide-react/dist/esm/icons/trophy";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Phone from "lucide-react/dist/esm/icons/phone";
import Download from "lucide-react/dist/esm/icons/download";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";

import { trackEvent } from "../utils/analytics";

export default function Hero({ openPopup }) {
  const [quickPhone, setQuickPhone] = useState("");

  
  const handleQuickLead = (e) => {
    e.preventDefault();
    if (quickPhone.length >= 10) {
      // Pass the phone to the global state or open popup
      // To keep it simple: we open the main qualified form
      openPopup();
    }
  };

  const highlights = [
    {
      icon: <Home className="w-8 h-8 text-emerald-400" />,
      title: "Ultra-Low Density",
      desc: "Only 45 units per acre for unparalleled privacy.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-400" />,
      title: "Sports Ecosystem",
      desc: "Massive 3.5 Lakh Sq. Ft. world-class sports arena.",
    },
    {
      icon: <Trees className="w-8 h-8 text-emerald-400" />,
      title: "90% Open Greens",
      desc: "Designed for wellness-focused premium living.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Optimized Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://royalresidencies.com/wp-content/uploads/2025/07/aipl-lake-city-gurgaon.jpeg"
          alt="Suncity Monarch Aerial View"
          className="w-full h-full object-cover object-center opacity-60 bg-fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Branding & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles className="w-4 h-4" /> New Launch: Sector 78, Gurugram
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Suncity <span className="text-emerald-400">Monarch</span>
              <span className="block text-3xl md:text-4xl mt-4 font-sans font-light tracking-tight text-slate-300">
                The Zenith of Low-Density Luxury
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Experience expansive 3 & 4 BHK residences starting at ₹16,000/sq.
              ft. Featuring a 1.5 Lakh sq. ft. Clubhouse and India's finest
              sports infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => {
                  trackEvent({
                    action: "cta_click",
                    category: "engagement",
                    label: "hero_download_price_list",
                  });
                  openPopup();
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/20"
              >
                Download Price List
              </button>
              <button
                onClick={openPopup}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Schedule Site Visit
              </button>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-tight">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Quick Lead Capture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Priority Access
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Register now to receive the brochure, floor plans, and
                pre-launch pricing.
              </p>

              <form onSubmit={handleQuickLead} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold border-r pr-3">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    className="w-full pl-16 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all text-slate-900 font-semibold"
                    onChange={(e) => setQuickPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-slate-200"
                >
                  <Download className="w-5 h-5" /> Get Project Kit
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  <span className="text-emerald-600 font-bold">
                    140+ People
                  </span>{" "}
                  registered for <br /> site visits this week.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> RERA
                Registered Project
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-slate-900 p-4 rounded-2xl shadow-xl font-bold text-center rotate-3 hidden md:block">
              <p className="text-[10px] uppercase tracking-tighter">
                Limited Period
              </p>
              <p className="text-xl leading-none italic">Pre-Launch Offers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
