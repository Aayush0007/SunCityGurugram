import { useState } from "react";
import { motion } from "framer-motion";
// Tree-shaken imports for performance
import Trees from "lucide-react/dist/esm/icons/trees";
import Home from "lucide-react/dist/esm/icons/home";
import Trophy from "lucide-react/dist/esm/icons/trophy";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Download from "lucide-react/dist/esm/icons/download";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";

// Import local video asset
import heroVideo from "../Assets/VD2.mp4";

import { trackEvent } from "../utils/analytics";

export default function Hero({ openPopup }) {
  const [quickPhone, setQuickPhone] = useState("");

  const handleQuickLead = (e) => {
    e.preventDefault();
    if (quickPhone.length >= 10) {
      trackEvent({
        action: "quick_lead_submit",
        category: "engagement",
        label: "hero_form",
      });
      openPopup();
    }
  };

  const highlights = [
    {
      icon: <Home className="w-8 h-8 text-emerald-400" />,
      title: "Godrej SORA",
      desc: "Japanese-inspired Shibui wellness on Golf Course Road.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-400" />,
      title: "Ultra-Luxury Range",
      desc: "Exclusive 3 & 4 BHK residences up to 3,971 Sq. Ft.",
    },
    {
      icon: <Trees className="w-8 h-8 text-emerald-400" />,
      title: "Nature & Views",
      desc: "Stunning Lake views and Cherry Blossom inspired flora.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Branding & Multi-Project Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles className="w-4 h-4" /> Godrej | Emaar | Conscient | Ashiana
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              The Finest in <span className="text-emerald-400 italic">Gurugram</span>
              <span className="block text-2xl md:text-4xl mt-4 font-sans font-light tracking-tight text-slate-300 leading-tight">
                Wellness-Themed Residences <br className="hidden md:block"/> at Sector 53, Golf Course Road
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Explore ultra-luxury living starting from ₹2.98 Cr* to ₹13.80 Cr* in Gurgaon's most coveted sectors.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => {
                  trackEvent({
                    action: "cta_click",
                    category: "engagement",
                    label: "hero_download_portfolio",
                  });
                  openPopup();
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-emerald-900/20"
              >
                Download Portfolio Kit
              </button>
              <button
                onClick={openPopup}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Request Private Viewing
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
                  <p className="text-slate-500 text-[10px] leading-tight">
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

              <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
                Priority Access
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Register for Godrej SORA (Sector 53) and get exclusive launch benefits and floor plans.
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
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number"
                    className="w-full pl-16 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-emerald-500 outline-none transition-all text-slate-900 font-semibold"
                    onChange={(e) => setQuickPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-slate-200"
                >
                  <Download className="w-5 h-5" /> Get Price List
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
                        src={`https://i.pravatar.cc/100?img=${i + 22}`}
                        alt="Interested Buyer"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  <span className="text-emerald-600 font-bold">
                    Join 1100+ Individuals
                  </span>{" "}
                  exploring <br /> Gurgaon's Shibui-inspired living.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> HRERA Registered: 976/708/2025/79
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-slate-900 p-4 rounded-2xl shadow-xl font-bold text-center rotate-3 hidden md:block">
              <p className="text-[10px] uppercase tracking-tighter">
                Sector 53
              </p>
              <p className="text-xl leading-none italic">New Tower Launch</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}