import { motion } from 'framer-motion';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Users from 'lucide-react/dist/esm/icons/users';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Download from 'lucide-react/dist/esm/icons/download';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';

export default function UnitConfigurations({ openPopup }) {
  const configurations = [
    {
      title: "3 BHK Premium",
      subtitle: "Serenity Hills & Elaira",
      size: "2,045 - 2,350 Sq. Ft.",
      desc: "Designed by global masters Benoy, featuring IGBC Platinum sustainability and full-height glass corners.",
      features: ["Benoy HK Architecture", "Stretched Balconies", "Utility/Puja Niche"],
      price: "Starting @ ₹2.98 Cr*",
      highlight: "High Demand",
      featured: true
    },
    {
      title: "4 BHK + Servant",
      subtitle: "Aaroham & Serenity",
      size: "1,521 - 3,150 Sq. Ft.",
      desc: "Kid-centric designs with HEPA-filtered air and spacious layouts for ultra-luxury living.",
      features: ["HEPA Fresh Air", "Kid-Centric Design", "3-Side Open Views"],
      price: "Starting @ ₹4.08 Cr*",
      highlight: "Exclusive",
      featured: true
    }
  ];

  return (
    <section id="units" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold mb-4">Elite Residential Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Curated <span className="italic text-emerald-700">3 & 4 BHK</span> Residences
            </h3>
          </motion.div>
          <motion.button onClick={openPopup} className="text-slate-900 font-bold flex items-center gap-2 border-b-2 border-emerald-500 pb-1">
            View All Floor Plans <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {configurations.map((unit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className={`bg-white rounded-[2.5rem] overflow-hidden shadow-xl border-2 flex flex-col md:flex-row group transition-all duration-500 ${unit.highlight === "High Demand" ? 'border-emerald-100' : 'border-slate-100'}`}
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={idx === 0 ? "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2025/02/14151503/living-room-interior-in-gurgaon.jpg" : "https://omararesidences.in/wp-content/uploads/2025/09/oview-1024x853.jpg"} 
                  alt={`${unit.title} Luxury Interior`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className={`absolute top-4 left-4 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${unit.highlight === "High Demand" ? 'bg-emerald-600' : 'bg-slate-800'}`}>
                  {unit.highlight}
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-serif font-bold text-slate-900">{unit.title}</h4>
                      <p className="text-[10px] uppercase font-bold text-emerald-600 tracking-tighter">{unit.subtitle}</p>
                    </div>
                    <Users className="text-emerald-600 w-8 h-8" />
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-emerald-600">{unit.size}</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{unit.price}</p>
                  </div>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed italic">{unit.desc}</p>
                  <ul className="grid grid-cols-1 gap-y-2 mb-8">
                    {unit.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase">
                        <Sparkles className="w-3 h-3 text-amber-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button onClick={openPopup} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors">
                  <Download className="w-4 h-4" /> Get {unit.title} Floor Plans
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ASHIANA AAROHAM LIMITED INVENTORY FOOTNOTE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white rounded-3xl border border-dashed border-emerald-200 text-center"
        >
          <p className="text-sm text-slate-600 font-medium">
            <span className="text-emerald-600 font-bold uppercase tracking-wider">Limited Inventory Alert:</span> Duplex 4BHK and 5BHK configurations available at Aaroham (Sector 80) ranging from 2,099 - 2,613 sq. ft..
          </p>
        </motion.div>
      </div>
    </section>
  );
}