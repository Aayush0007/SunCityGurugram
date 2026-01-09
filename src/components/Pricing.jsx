import { motion } from 'framer-motion';
import IndianRupee from 'lucide-react/dist/esm/icons/indian-rupee';
import Info from 'lucide-react/dist/esm/icons/info';
import Download from 'lucide-react/dist/esm/icons/download';

export default function Pricing({ openPopup }) {
  // Organized pricing data from new property details
  const portfolioPricing = [
    {
      label: "3 BHK Premium Range",
      price: "₹2.98 Cr*",
      desc: "Serenity Hills Small & Elaira Type A",
    },
    {
      label: "4 BHK Luxury Range",
      price: "₹4.08 Cr*",
      desc: "Aaroham Phase I & Serenity Hills Large",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4 block"
          >
            Curated Investment Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Price <span className="italic">Summary</span>
          </h2>
          
          {/* Main Price Indicator */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {portfolioPricing.map((item, idx) => (
              <div key={idx} className="px-8 py-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center min-w-[280px]">
                <p className="text-[10px] uppercase font-bold text-emerald-600 mb-1 tracking-widest">{item.label}</p>
                <p className="text-3xl font-bold text-slate-900">Starting {item.price}</p>
                <p className="text-[10px] text-slate-500 mt-1 italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Pricing Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full translate-x-8 -translate-y-8" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">Limited Inventory Release</h3>
                <p className="text-slate-400 mb-8 uppercase tracking-widest text-xs font-bold">
                  Exclusive High-Rise & Duplex Units
                </p>
                <ul className="space-y-4 mb-8">
                   {[
                     "₹2.98 Cr - ₹5.68 Cr Portfolio Range",
                     "Up to ₹16 Lakhs Launch Benefits",
                     "Flexible 10:20:70 Construction Linked Plan",
                     "Priority Allotment for EOIs"
                   ].map((li, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {li}
                     </li>
                   ))}
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                <IndianRupee className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-2">Registration Amount</p>
                <p className="text-3xl font-bold text-white mb-2">₹11,00,000/-</p>
                <p className="text-[10px] text-emerald-400 mb-6 uppercase tracking-wider font-bold">Priority Access</p>
                
                <button 
                  onClick={openPopup} 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" /> Request Master Cost Sheet
                </button>
              </div>
            </div>
          </motion.div>

          {/* Payment Plan Summary (New Detail) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Info className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                   <p className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-tight">Milestone Linked Payment</p>
                   <p className="text-xs text-slate-500 leading-relaxed italic">
                     Application fees of ₹10L (3BHK) / ₹15L (4BHK). Only 10% on Allotment, followed by construction-linked milestones.
                   </p>
                </div>
             </div>
             <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                <Info className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                   <p className="text-sm font-bold text-slate-900 mb-1 uppercase tracking-tight">Inventory Status</p>
                   <p className="text-xs text-slate-500 leading-relaxed italic">
                     Elaira Phase I Sold Out. Upcoming Phase II Tower C & D reservations now open.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}