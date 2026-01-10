import { motion } from 'framer-motion';
import IndianRupee from 'lucide-react/dist/esm/icons/indian-rupee';
import Info from 'lucide-react/dist/esm/icons/info';
import Download from 'lucide-react/dist/esm/icons/download';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';

export default function Pricing({ openPopup }) {
  // Organized pricing data across the luxury portfolio
  const portfolioPricing = [
    {
      label: "Premium Collection",
      price: "₹2.98 Cr*",
      desc: "Serenity Hills & Elaira Residences",
    },
    {
      label: "Wellness Collection",
      price: "₹8.86 Cr*",
      desc: "Godrej SORA Sector 53 (Golf Course Rd)",
    },
  ];

  const godrejMilestones = [
    { event: "Application Money", value: "5%" },
    { event: "Within 18 Days", value: "5%" },
    { event: "Within 90 Days", value: "10%" },
    { event: "Completion of Terrace", value: "25%" },
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
            Price <span className="italic text-emerald-700">Summary</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {portfolioPricing.map((item, idx) => (
              <div key={idx} className="px-8 py-6 bg-slate-50 rounded-2xl border border-slate-100 text-center min-w-[300px] hover:shadow-lg transition-shadow">
                <p className="text-[10px] uppercase font-bold text-emerald-600 mb-1 tracking-widest">{item.label}</p>
                <p className="text-3xl font-bold text-slate-900">Starting {item.price}</p>
                <p className="text-[10px] text-slate-500 mt-1 italic leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Godrej SORA Premium Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden mb-12"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full translate-x-8 -translate-y-8" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">Godrej SORA Collection</h3>
                <p className="text-emerald-400 mb-8 uppercase tracking-widest text-xs font-bold">
                  Wellness Themed • Golf Course Road
                </p>
                <div className="space-y-4 mb-8">
                   {[
                     { type: "3 BHK (2771 SqFt)", range: "₹8.86 - 9.63 Cr*" },
                     { type: "4 BHK L (3519 SqFt)", range: "₹11.26 - 12.23 Cr*" },
                     { type: "4 BHK XL (3971 SqFt)", range: "₹12.70 - 13.80 Cr*" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                       <span className="text-sm text-slate-300 font-medium">{item.type}</span>
                       <span className="text-sm text-white font-bold">{item.range}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                <IndianRupee className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-2">Registration Amount</p>
                <p className="text-3xl font-bold text-white mb-2">₹11,00,000/-</p>
                <p className="text-[10px] text-emerald-400 mb-6 uppercase tracking-wider font-bold">Priority Allotment</p>
                
                <button 
                  onClick={openPopup} 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" /> Get Detailed Cost Sheet
                </button>
              </div>
            </div>
          </motion.div>

          {/* Detailed Payment Plan Structure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
               <h4 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                 <ShieldCheck className="text-emerald-600" /> Milestone Payment Structure
               </h4>
               
               <div className="grid grid-cols-2 gap-4">
                  {godrejMilestones.map((m, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                       <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{m.event}</p>
                       <p className="text-lg font-bold text-slate-900">{m.value}</p>
                    </div>
                  ))}
                  <div className="col-span-2 p-4 bg-emerald-900 text-white rounded-xl">
                     <p className="text-[10px] opacity-70 font-bold uppercase">Balance Milestones</p>
                     <p className="text-sm font-medium">Completion of Ground Floor (25%) | OC Application (20%) | Possession (5%)</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100 flex items-start gap-4">
                <Info className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                   <p className="text-xs font-bold text-slate-900 mb-1 uppercase">Portfolio Range</p>
                   <p className="text-[11px] text-slate-600 leading-relaxed italic">
                     Collection spans ₹2.98 Cr to ₹13.80 Cr across Gurugram's elite sectors (53, 80, 86).
                   </p>
                </div>
              </div>
              <div className="p-6 rounded-[2rem] bg-slate-900 text-white flex items-start gap-4 shadow-xl">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                   <p className="text-xs font-bold mb-1 uppercase">RERA Compliant</p>
                   <p className="text-[11px] text-slate-400 leading-relaxed italic">
                     Godrej SORA Registered under RC/REP/HARERA/GGM/976/708/2025/79.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}