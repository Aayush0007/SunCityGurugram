import { motion } from 'framer-motion';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Users from 'lucide-react/dist/esm/icons/users';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Download from 'lucide-react/dist/esm/icons/download';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';

export default function UnitConfigurations({ openPopup }) {
  return (
    <section id="units" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold mb-4">Residential Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Featured <span className="italic text-emerald-700">3 BHK + Study</span>
            </h3>
          </motion.div>
          <motion.button onClick={openPopup} className="text-slate-900 font-bold flex items-center gap-2 border-b-2 border-emerald-500 pb-1">
            View All Configurations <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* PRIMARY: 3 BHK HIGHLIGHTED */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-emerald-100 flex flex-col md:flex-row group transition-all duration-500">
            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
              <img src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2025/02/14151503/living-room-interior-in-gurgaon.jpg" alt="3BHK Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"/>
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">High Demand</div>
            </div>
            <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif font-bold text-slate-900">3 BHK + Study</h4>
                  <BookOpen className="text-emerald-600 w-8 h-8" />
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-emerald-600">2,350 Sq. Ft.</span>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Starting @ ₹16,000/sq. ft.</p>
                </div>
                <ul className="grid grid-cols-1 gap-y-2 mb-8">
                  {["Dedicated WFH Study", "3-Side Open Ventilation", "Spacious Utility Balcony"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase"><Sparkles className="w-3 h-3 text-amber-500" /> {feat}</li>
                  ))}
                </ul>
              </div>
              <button onClick={openPopup} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors">
                <Download className="w-4 h-4" /> Get 3BHK Cost Sheet
              </button>
            </div>
          </motion.div>

          {/* SECONDARY: 4 BHK (DE-EMPHASIZED) */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-100/50 rounded-[2.5rem] overflow-hidden border border-slate-200 flex flex-col md:flex-row opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <img src="https://omararesidences.in/wp-content/uploads/2025/09/oview-1024x853.jpg" alt="4BHK Interior" className="w-full h-full object-cover opacity-50"/>
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <h4 className="text-xl font-serif font-bold text-slate-400 mb-2">4 BHK + Servant</h4>
              <p className="text-2xl font-bold text-slate-400 mb-4">3,150 Sq. Ft.</p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">Ultra-spacious units for larger families. Exclusive inventories available on request.</p>
              <button onClick={openPopup} className="text-slate-500 font-bold text-sm border border-slate-300 py-3 rounded-xl hover:bg-white transition-all">Request 4BHK Details</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}