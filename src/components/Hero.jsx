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

          
        </div>
      </div>
    </section>
  );
}