import { motion } from 'framer-motion';
import Users from 'lucide-react/dist/esm/icons/users';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Download from 'lucide-react/dist/esm/icons/download';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';

export default function UnitConfigurations({ openPopup }) {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#0D20617",
    cream: "#F4F1E1",
    tan: "#B68D40",
    white: "#FFFFFF"
  };

  const configurations = [
    {
      title: "Godrej SORA Premium",
      subtitle: "Sector 53, Golf Course Road",
      size: "2,771 Sq. Ft. Onwards",
      desc: "Japanese-inspired 'Shibui' life featuring Torii gate facades, cherry blossom flora, and private lift lobbies.",
      features: ["Private Genkan Lobbies", "50 Ft. Expansive Balconies", "Lake & Sky Views"],
      price: "Luxury Pricing on Request",
      highlight: "New Tower Launch",
      img: "https://omararesidences.in/wp-content/uploads/2025/09/oview-1024x853.jpg",
      featured: true
    },
    {
      title: "Serenity Hills Luxury",
      subtitle: "Sector 86, Emaar India",
      size: "3 BHK Small & Large",
      desc: "IGBC Platinum Pre-Certified estate featuring an 8-acre central green zone and ~75,000 sq. ft. clubhouse.",
      features: ["8-Acre Central Green", "Waterfront Walkway", "Majestic 7-Tower Estate"],
      price: "Starting @ ₹2.98 Cr*",
      highlight: "High Demand",
      img: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2025/02/14151503/living-room-interior-in-gurgaon.jpg",
      featured: true
    }
  ];

  return (
    <section id="units" className="py-24 bg-[#FDFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold mb-4" style={{ color: COLORS.gold }}>
              The Luxury Collection
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight" style={{ color: COLORS.charcoal }}>
              Curated <span className="italic font-light" style={{ color: COLORS.gold }}>3 BHK</span> Residences
            </h3>
          </motion.div>
          <motion.button 
            onClick={openPopup} 
            className="font-bold flex items-center gap-2 border-b-2 pb-1 transition-all hover:translate-x-1"
            style={{ color: COLORS.charcoal, borderBottomColor: COLORS.gold }}
          >
            View All Floor Plans <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Configuration Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {configurations.map((unit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={unit.img} 
                  alt={`${unit.title} Interior`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
                />
                <div 
                  className="absolute top-6 left-6 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg"
                  style={{ backgroundColor: COLORS.gold }}
                >
                  {unit.highlight}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-2xl font-serif font-bold" style={{ color: COLORS.charcoal }}>{unit.title}</h4>
                    <Users style={{ color: COLORS.gold }} className="w-6 h-6" />
                  </div>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-6" style={{ color: COLORS.gold }}>{unit.subtitle}</p>
                  
                  <div className="mb-6 p-6 rounded-2xl bg-[#FDFCF7] border border-[#D6AD60]/10">
                    <span className="text-2xl font-bold block" style={{ color: COLORS.charcoal }}>{unit.size}</span>
                    <p className="text-sm font-bold mt-2" style={{ color: COLORS.gold }}>{unit.price}</p>
                  </div>
                  
                  <p className="text-sm text-slate-500 leading-relaxed font-light italic mb-8">
                    {unit.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {unit.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-700 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" style={{ color: COLORS.gold }} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-8">
                  <button 
                    onClick={openPopup} 
                    className="w-full py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg"
                    style={{ backgroundColor: COLORS.charcoal, color: COLORS.white }}
                  >
                    <Download className="w-5 h-5" /> Download Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Footer Alert */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-[2rem] text-center border-2 border-dashed"
          style={{ backgroundColor: COLORS.white, borderColor: `${COLORS.gold}44` }}
        >
          <p className="text-base font-light tracking-wide" style={{ color: COLORS.charcoal }}>
            <span className="font-bold uppercase tracking-widest block mb-2" style={{ color: COLORS.gold }}>Portfolio Note:</span> 
            From Japanese-inspired sky residences at <span className="font-bold">Sector 53</span> to Benoy-designed masterpieces at <span className="font-bold">Sector 80</span> and <span className="font-bold">Sector 86</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}