import { motion } from 'framer-motion';
import IndianRupee from 'lucide-react/dist/esm/icons/indian-rupee';
import Info from 'lucide-react/dist/esm/icons/info';
import Download from 'lucide-react/dist/esm/icons/download';

export default function Pricing({ openPopup }) {
  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4 block">Exclusive Pricing</motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Investment <span className="italic">Summary</span></h2>
          <div className="inline-block px-8 py-4 bg-emerald-50 rounded-2xl border border-emerald-100">
             <p className="text-slate-600 text-lg">Launch Price: <span className="text-3xl font-bold text-slate-900 ml-2">₹16,000/sq. ft.</span></p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Highlighted 3BHK Pricing Only */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full translate-x-8 -translate-y-8" />
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">3 BHK + Study</h3>
                <p className="text-slate-400 mb-8 uppercase tracking-widest text-xs font-bold">2,350 Sq. Ft. • Prime Inventory</p>
                <ul className="space-y-4 mb-8">
                   {["₹16,000/sq. ft. Launch Rate", "₹3.76 Cr Starting Price", "Exclusive Allotment Benefits"].map((li, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {li}
                     </li>
                   ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                <IndianRupee className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-2">Request Quote For</p>
                <p className="text-3xl font-bold text-white mb-6">Preferred Unit</p>
                <button onClick={openPopup} className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20">
                  <Download className="w-4 h-4" /> Download 3BHK Breakup
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex items-start gap-3 p-4 rounded-xl border border-dashed border-slate-200">
            <Info className="w-5 h-5 text-slate-400 shrink-0" />
            <p className="text-[10px] text-slate-400 leading-relaxed italic">
              Pricing calculated at ₹16,000/sq. ft. basic sales price. 4 BHK details, PLC, GST, and other statutory charges are provided on-call or during site visits. Final inventory availability is subject to RERA approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}