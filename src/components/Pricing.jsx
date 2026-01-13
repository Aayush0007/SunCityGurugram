import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IndianRupee, 
  Info, 
  Download, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight,
  Gem,
  CheckCircle2,
  Lock
} from 'lucide-react';

// Color Palette Constants
const COLORS = {
  gold: "#D6AD60",
  goldLight: "#E5C687",
  charcoal: "#0D202B", // Fixed hex (removed extra digit)
  charcoalLight: "#1A323D",
  cream: "#F4F1E1",
  white: "#FFFFFF",
  slate: "#64748b"
};

const portfolioPricing = [
  {
    label: "Serenity Hills Collection",
    price: "₹2.98 Cr*",
    desc: "Sector 86 | 3 BHK Small & Large Residences",
    tag: "Wellness Living"
  },
  {
    label: "Elaira Residences",
    price: "₹3.80 Cr*",
    desc: "Sector 80 | Iconic Benoy HK Architecture",
    tag: "Architectural Icon"
  },
];

const masterPaymentPlan = [
  { event: "Application Fee", value: "₹10 L - 15 L", sub: "At time of booking" },
  { event: "On Allotment", value: "10%", sub: "Within 30 days" },
  { event: "Post-Booking", value: "20%", sub: "4 Months Milestone" },
  { event: "Superstructure", value: "12.5%", sub: "On Casting of Top Floor" },
];

export default function App({openPopup}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

 

  return (
    <div className="min-h-screen bg-[#FDFCF7] font-sans text-[#0D202B]">
      <section id="pricing" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* --- Section Header --- */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-8 bg-[#D6AD60]" />
              <span 
                className="text-[10px] uppercase tracking-[0.4em] font-bold"
                style={{ color: COLORS.gold }}
              >
                Exclusive Investment Portfolio
              </span>
              <div className="h-[1px] w-8 bg-[#D6AD60]" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-medium mb-8"
              style={{ color: COLORS.charcoal }}
            >
              Ownership <span className="italic font-light text-[#D6AD60]">Privileges</span>
            </motion.h2>

            {/* --- Quick Glance Cards --- */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {portfolioPricing.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative px-10 py-10 bg-white rounded-[2.5rem] text-left w-full md:w-[400px] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default border border-slate-100"
                >
                  <div className="absolute top-8 right-8 text-slate-200 group-hover:text-[#D6AD60] transition-colors duration-500">
                    <ArrowUpRight size={32} />
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold mb-6 bg-[#F4F1E1] text-[#D6AD60]">
                    {item.tag}
                  </span>
                  
                  <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">{item.label}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-slate-400">Starting</span>
                    <p className="text-4xl font-serif font-bold" style={{ color: COLORS.charcoal }}>{item.price}</p>
                  </div>
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed font-light">{item.desc}</p>
                  
                  <div 
                    className="absolute bottom-0 left-10 right-10 h-1 transition-all duration-500 scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: COLORS.gold }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* --- Main Pricing Highlight Card --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="rounded-[3.5rem] p-8 md:p-20 shadow-2xl relative overflow-hidden mb-16 border border-white/10"
              style={{ backgroundColor: COLORS.charcoal }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 opacity-5 rounded-full border-[20px]" style={{ borderColor: COLORS.gold }} />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: COLORS.gold }} />
              
              <div className="grid lg:grid-cols-5 gap-16 items-center relative z-10">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-6">
                    <Gem size={20} className="text-[#D6AD60]" />
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#F4F1E1]">Elite Portfolio</h3>
                  </div>
                  
                  <p className="mb-10 uppercase tracking-[0.4em] text-[10px] font-bold text-[#D6AD60]">
                    Wellness Themed • Global Standards • Limited Inventory
                  </p>
                  
                  <div className="space-y-8 mb-10">
                    {[
                      { label: "3 BHK Luxury Residences", val: "₹2.98 Cr*" },
                      // { label: "4 BHK & Servant Typologies", val: "₹5.27 Cr*" },
                      { label: "Penthouse Collection", val: "Price on Request" }
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center group cursor-default">
                        <span className="text-lg font-light text-[#F4F1E1]/80 group-hover:text-[#F4F1E1] transition-colors">{row.label}</span>
                        <div className="flex-1 mx-6 border-b border-dashed border-[#D6AD60]/20" />
                        <span className="text-lg font-medium text-[#D6AD60]">{row.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CheckCircle2 className="text-[#D6AD60] shrink-0" size={20} />
                    <p className="text-xs text-[#F4F1E1]/60 leading-relaxed">
                      Pricing includes high-end specifications including VRV Air Conditioning, 
                      Italian Marble flooring, and Modular Kitchen as standard fitments.
                    </p>
                  </div>
                </div>
                
                {/* Registration CTA Box */}
                <div className="lg:col-span-2">
                  <div className="p-10 rounded-[3rem] border border-[#D6AD60]/30 relative group transition-all duration-500 hover:border-[#D6AD60]/60 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D6AD60]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />
                    
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-[#D6AD60] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D6AD60]/20">
                        <Lock className="text-[#0D202B]" size={28} />
                      </div>
                      <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2 text-[#F4F1E1]/60">Registration Amount</p>
                      <p className="text-5xl font-serif font-bold mb-2 text-[#F4F1E1]">₹11.00 L</p>
                      <p className="text-[10px] mb-10 uppercase tracking-widest font-bold text-[#D6AD60]">Immediate Priority Allotment</p>
                      
                      <button 
                        onClick={openPopup} 
                        className="group w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all relative overflow-hidden active:scale-[0.98]"
                        style={{ backgroundColor: COLORS.gold, color: COLORS.charcoal }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <Download size={18} /> Detailed Cost Sheet
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- Secondary Details Section --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Payment Plan */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
              >
                 <div className="flex items-center justify-between mb-10">
                    <h4 className="text-2xl font-serif font-bold flex items-center gap-3" style={{ color: COLORS.charcoal }}>
                      <ShieldCheck className="text-[#D6AD60]" /> Master Payment Plan
                    </h4>
                    <span className="text-[10px] font-bold py-1 px-3 bg-slate-100 rounded-full text-slate-500 uppercase tracking-widest">Construction Linked</span>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                    {masterPaymentPlan.map((m, idx) => (
                      <div key={idx} className="group p-6 rounded-2xl border border-slate-50 hover:border-[#D6AD60]/20 transition-all bg-[#FDFCF7]">
                         <div className="flex justify-between items-start mb-1">
                           <p className="text-[9px] font-bold uppercase tracking-widest text-[#D6AD60]">{m.event}</p>
                           <span className="text-[10px] text-slate-300 font-mono">0{idx + 1}</span>
                         </div>
                         <p className="text-2xl font-bold mb-1" style={{ color: COLORS.charcoal }}>{m.value}</p>
                         <p className="text-[10px] text-slate-400 italic">{m.sub}</p>
                      </div>
                    ))}
                    <div className="md:col-span-2 p-8 rounded-2xl text-white flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ backgroundColor: COLORS.charcoal }}>
                       <div>
                          <p className="text-[10px] opacity-60 font-bold uppercase tracking-[0.2em] mb-1">Possession Phase</p>
                          <p className="text-sm font-light leading-relaxed">External Glazing (12.5%) • OC Application (15%) • Possession (5%)</p>
                       </div>
                       <ChevronRight className="hidden md:block text-[#D6AD60]/40" />
                    </div>
                 </div>
              </motion.div>

              {/* Side Badges / Benefits */}
              <div className="flex flex-col gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] border flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-500" 
                  style={{ backgroundColor: COLORS.cream, borderColor: `${COLORS.gold}33` }}
                >
                  <div className="bg-white/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-[#D6AD60] group-hover:scale-110 transition-transform">
                    <Info size={24} />
                  </div>
                  <div>
                     <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Launch Benefits</p>
                     <p className="text-sm leading-relaxed font-light text-slate-600">
                       Exclusive limited-time inventory benefits up to <span className="font-bold text-[#D6AD60]">₹16 Lakhs*</span> applicable on priority registrations.
                     </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 rounded-[2.5rem] text-white flex flex-col justify-between h-full relative overflow-hidden shadow-2xl" 
                  style={{ backgroundColor: COLORS.charcoal }}
                >
                  <div className="absolute top-0 right-0 p-4">
                    <ShieldCheck className="text-[#D6AD60]/20" size={60} />
                  </div>
                  <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-[#D6AD60]">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="relative z-10">
                     <p className="text-xs font-bold mb-3 uppercase tracking-widest text-[#F4F1E1]">Portfolio Compliant</p>
                     <p className="text-sm leading-relaxed font-light text-[#F4F1E1]/60">
                       Fully HRERA registered projects ensuring 100% transparency and escrow-backed security for the elite buyer.
                     </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-12 text-[10px] text-center text-slate-400 uppercase tracking-widest leading-loose max-w-3xl mx-auto">
              *T&C Apply. Prices are indicative of starting units. Government taxes, IFMS, and possession charges extra. 
              Images used are for representational purposes only. HRERA Reg: 104 OF 2023.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}