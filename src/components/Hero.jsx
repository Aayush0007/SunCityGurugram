//<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
import { useState } from "react";
import { motion } from "framer-motion";
import { Trees, Home, Trophy, Sparkles, Download, ShieldCheck } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import heroBg from "../Assets/Hero.png";

export default function Hero({ openPopup }) {
  const [quickPhone, setQuickPhone] = useState("");

  const handleQuickLead = (e) => {
    e.preventDefault();
    if (quickPhone.length >= 10) {
      trackEvent({ action: "quick_lead_submit", category: "engagement", label: "hero_form" });
      openPopup();
    }
  };

  const highlights = [
    {
      icon: <Home className="w-8 h-8 text-[#D6AD60]" />, // Gold
      title: "Royal Living",
      desc: "Ultra-luxury residences in Gurugram's elite corridors.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#B68D40]" />, // Tan
      title: "Elite Clubs",
      desc: "75,000+ Sq. Ft. world-class designer club ecosystems.",
    },
    {
      icon: <Trees className="w-8 h-8 text-[#D6AD60]" />, // Gold
      title: "Nature's Estate",
      desc: "25+ acres of landscaped greens and waterfront trails.",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Royal Penthouse View" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D20617] via-[#0D20617]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D20617]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6AD60]/10 border border-[#D6AD60]/20 text-[#D6AD60] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <Sparkles className="w-4 h-4" /> The Royal Collection
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#F4F1E1] leading-[1.1] mb-6 tracking-tight"> {/* Cream Text */}
              The Gold Standard in <span className="text-[#D6AD60] italic">Gurugram</span> {/* Gold Accent */}
              <span className="block text-2xl md:text-4xl mt-4 font-sans font-light tracking-tight text-[#F4F1E1]/80">
                Curated Luxury for the Elite Few
              </span>
            </h1>

            <p className="text-lg text-[#F4F1E1]/70 mb-10 max-w-xl leading-relaxed font-light"> {/* Cream Muted */}
              Explore ultra-luxury 3 BHK residences starting from ₹2.98 Cr* in the city's most prestigious sectors.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={openPopup} 
                className="bg-[#D6AD60] hover:bg-[#B68D40] text-[#0D20617] px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-[#D6AD60]/30"
              > {/* Gold Button with Midnight Text */}
                Download Portfolio Kit
              </button>
              <button 
                onClick={openPopup} 
                className="bg-white/5 hover:bg-[#F4F1E1]/10 backdrop-blur-md text-[#F4F1E1] border border-[#F4F1E1]/20 px-8 py-4 rounded-xl font-bold transition-all"
              > {/* Translucent Cream Button */}
                Request Private Viewing
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + idx * 0.1 }}
                  className="p-5 rounded-2xl bg-[#0D20617]/40 backdrop-blur-md border border-[#F4F1E1]/10 hover:border-[#D6AD60]/30 transition-all duration-500 group">
                  <div className="mb-3 transition-transform group-hover:scale-110">{item.icon}</div>
                  <h4 className="text-[#F4F1E1] font-serif font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-[#F4F1E1]/50 text-[11px] leading-tight font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:ml-auto max-w-md w-full">
            <div className="bg-[#0D20617]/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#F4F1E1]/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D6AD60] to-transparent" />
              
              <h3 className="text-2xl font-bold text-[#F4F1E1] mb-2 font-serif tracking-tight">Priority Access</h3>
              <p className="text-[#F4F1E1]/60 text-sm mb-8 leading-relaxed font-light">Register for exclusive royal benefits up to ₹16 Lakhs* across our flagship portfolio.</p>

              <form onSubmit={handleQuickLead} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D6AD60] font-bold border-r border-[#F4F1E1]/10 pr-3">+91</span>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    required 
                    pattern="[6-9][0-9]{9}" 
                    className="w-full pl-16 pr-4 py-4 bg-[#F4F1E1]/5 border border-[#F4F1E1]/10 rounded-xl focus:border-[#D6AD60] outline-none transition-all text-[#F4F1E1] font-medium placeholder:text-[#F4F1E1]/30" 
                    onChange={(e) => setQuickPhone(e.target.value)} 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#D6AD60] hover:bg-[#B68D40] text-[#0D20617] py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl shadow-[#D6AD60]/20"
                > {/* Gold Button with Midnight Text */}
                  <Download className="w-5 h-5" /> Get Price List
                </button>
              </form>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-[#F4F1E1]/40 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4 text-[#D6AD60]" /> HRERA Registered Portfolio
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D6AD60]/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}