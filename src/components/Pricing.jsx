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
                
              </div>
            </motion.div>

            {/* --- Secondary Details Section --- */}
            

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