import { motion } from "framer-motion";
import overImg from "../Assets/Overview.png";

export default function ProjectOverview() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    cream: "#F4F1E1",
  };

  return (
    <section id="overview" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Focused only on the Brand Vision */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2
              className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4"
              style={{ color: COLORS.gold }}
            >
              The Living Luxura Portfolio
            </h2>
            <h3
              className="text-4xl md:text-6xl font-serif leading-tight"
              style={{ color: COLORS.charcoal }}
            >
              Curating the most <span className="italic font-light">prestigious</span> addresses in Gurugram
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-sm"
          >
            <p className="text-slate-500 leading-relaxed border-l-2 pl-6 font-light border-[#D6AD60]">
              From the global engineering of <strong>Emaar</strong>, we provide a unified gateway to the city's finest ultra-luxury developments.
            </p>
          </motion.div>
        </div>

        {/* Immersive Visual Grid: Cleaned of unnecessary cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Brand Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-[450px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl relative group"
          >
            <img
              src={overImg}
              alt="Luxury Living Overview"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121C17]/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
               <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2">Heritage & Design</p>
               <h4 className="text-3xl font-serif italic">The Gold Corridor Collection</h4>
            </div>
          </motion.div>

          {/* Secondary "Details" Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 rounded-[3rem] overflow-hidden shadow-xl"
            >
              <img
                src="https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon.png"
                alt="Interior Excellence"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Concise Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] flex flex-col justify-center border border-[#D6AD60]/20 bg-[#FDFCF7]"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-3xl font-serif font-bold text-[#121C17]">35+</h5>
                  <p className="text-[9px] uppercase tracking-widest text-[#D6AD60] font-bold">Acres Curated</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif font-bold text-[#121C17]">93%</h5>
                  <p className="text-[9px] uppercase tracking-widest text-[#D6AD60] font-bold">Green Reserve</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif font-bold text-[#121C17]">IGBC</h5>
                  <p className="text-[9px] uppercase tracking-widest text-[#D6AD60] font-bold">Platinum</p>
                </div>
                <div>
                  <h5 className="text-3xl font-serif font-bold text-[#121C17]">75K</h5>
                  <p className="text-[9px] uppercase tracking-widest text-[#D6AD60] font-bold">Sq. Ft Club</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}