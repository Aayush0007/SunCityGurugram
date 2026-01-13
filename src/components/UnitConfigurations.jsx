import { motion } from 'framer-motion';
import Users from 'lucide-react/dist/esm/icons/users';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Download from 'lucide-react/dist/esm/icons/download';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';

export default function UnitConfigurations({ openPopup }) {
  const configurations = [
    {
      title: "Godrej SORA Premium",
      subtitle: "Sector 53, Golf Course Road",
      size: "2,771 Sq. Ft. Onwards",
      desc: "Japanese-inspired 'Shibui' life featuring Torii gate facades, cherry blossom flora, and private lift lobbies.",
      features: ["Private Genkan Lobbies", "50 Ft. Expansive Balconies", "Lake & Sky Views"],
      // price: "Starting @ ₹8.86 Cr*",
      highlight: "New Tower Launch",
      img: "https://omararesidences.in/wp-content/uploads/2025/09/oview-1024x853.jpg",
      featured: true
    },
    {
      title: "3 BHK Luxury",
      subtitle: "Serenity Hills & Elaira",
      size: "2,045 - 2,350 Sq. Ft.",
      desc: "Architectural excellence by Benoy HK with IGBC Platinum sustainability and wrap-around glass corners.",
      features: ["Benoy HK Architecture", "Stretched Balconies", "Utility/Puja Niche"],
      price: "Starting @ ₹2.98 Cr*",
      highlight: "High Demand",
      img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2025/02/14151503/living-room-interior-in-gurgaon.jpg",
      featured: true
    }
  ];

  return (
    <section id="units" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold mb-4">The Luxury Collection</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Curated <span className="italic text-emerald-700">3 BHK</span> Residences
            </h3>
          </motion.div>
          <motion.button onClick={openPopup} className="text-slate-900 font-bold flex items-center gap-2 border-b-2 border-emerald-500 pb-1 hover:text-emerald-700 transition-colors">
            View All Floor Plans <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {configurations.map((unit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={unit.img} 
                  alt={`${unit.title} Interior`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className={`absolute top-4 left-4 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${unit.highlight === "New Tower Launch" ? 'bg-amber-500' : 'bg-emerald-600'}`}>
                  {unit.highlight}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-serif font-bold text-slate-900">{unit.title}</h4>
                    <Users className="text-emerald-600 w-6 h-6" />
                  </div>
                  <p className="text-[10px] uppercase font-bold text-emerald-600 tracking-tighter mb-4">{unit.subtitle}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-slate-900">{unit.size}</span>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">{unit.price}</p>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed italic mb-6">{unit.desc}</p>
                  
                  <ul className="space-y-2">
                    {unit.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 uppercase">
                        <Sparkles className="w-3 h-3 text-amber-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-6">
                  <button onClick={openPopup} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-colors">
                    <Download className="w-4 h-4" /> Get Floor Plans
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-12 p-8 bg-white rounded-3xl border border-dashed border-emerald-200 text-center shadow-sm"
        >
          <p className="text-sm text-slate-600 font-medium">
            <span className="text-emerald-600 font-bold uppercase tracking-wider">Strategic Portfolio Alert:</span> From Japanese-inspired sky residences at <span className="font-bold">Sector 53</span> to premium low-density residences at <span className="font-bold">Sector 80 & 86</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}