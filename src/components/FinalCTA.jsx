import { motion } from 'framer-motion';
import { Phone, Download, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ openPopup }) {
  // Brand Color Palette from provided source
  const COLORS = {
    tan: "#B68D40",      // Tan
    cream: "#F4F1E1",    // Cream
    charcoal: "#121C17", // Charcoal (Dark Green-Black)
    gold: "#D6AD60",     // Gold
    white: "#FFFFFF"     
  };

  return (
    <section 
      className="py-24 overflow-hidden relative"
      style={{ backgroundColor: COLORS.charcoal }} // Using Charcoal for the base
    >
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ background: `radial-gradient(circle at center, ${COLORS.tan} 0%, transparent 70%)` }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 shadow-2xl"
            style={{ backgroundColor: `${COLORS.tan}20`, border: `1px solid ${COLORS.gold}40` }}
          >
            <Sparkles className="w-10 h-10" style={{ color: COLORS.gold }} />
          </div>
          
          <h2 
            className="text-4xl md:text-6xl font-bold font-serif mb-8 leading-tight"
            style={{ color: COLORS.white }}
          >
            The Pinnacle of Gurugram <br className="hidden md:block" /> 
            <span className="italic font-light" style={{ color: COLORS.gold }}>Real Estate Awaits</span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: COLORS.cream, opacity: 0.9 }} // Cream text for legibility on Charcoal
          >
            From the wellness-themed Shibui life at <strong>Godrej SORA</strong> to the eco-luxe sanctuaries of <strong>Serenity Hills</strong>. Secure your legacy across Golf Course Road and the New Alpha Corridor.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 active:scale-95"
            style={{ backgroundColor: COLORS.gold, color: COLORS.charcoal }} // Gold button with Charcoal text
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Consult an Expert
          </button>

          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto bg-transparent font-bold text-lg px-10 py-5 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-4 active:scale-95 hover:bg-white/5"
            style={{ color: COLORS.white, borderColor: `${COLORS.tan}66` }}
          >
            <Download className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: COLORS.gold }} />
            Digital Brochure
          </button>

          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-4 active:scale-95"
            style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }} // Cream button with Charcoal text
          >
            <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Request Site Visit
          </button>
        </motion.div>

        {/* Urgency and Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg italic font-light mb-8" style={{ color: COLORS.tan }}>
            Strategic Release: Premium residences starting at ₹2.98 Cr* onwards.
          </p>
          
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-4 rounded-2xl border" style={{ backgroundColor: `${COLORS.white}05`, borderColor: `${COLORS.tan}33` }}>
            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.cream }}>
              <ShieldCheck className="w-5 h-5" style={{ color: COLORS.gold }} /> 
              HRERA Compliant Portfolio
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="text-sm font-light uppercase tracking-widest" style={{ color: COLORS.cream }}>
              Priority Allotment Amount: ₹11,00,000/-
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}