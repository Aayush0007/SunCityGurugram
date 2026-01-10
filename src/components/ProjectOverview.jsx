import { motion } from 'framer-motion';
// Performance-optimized icon imports
import Trees from 'lucide-react/dist/esm/icons/trees';
import Home from 'lucide-react/dist/esm/icons/home';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Ruler from 'lucide-react/dist/esm/icons/ruler';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';

export default function ProjectOverview() {
  // Aggregate stats including Godrej SORA and existing portfolio
  const stats = [
    { label: "Portfolio Scale", value: "35+ Acres" }, 
    { label: "Design Philosophy", value: "Shibui" },    // Godrej SORA Shibui Philosophy
    { label: "Max Unit Size", value: "3,971 SqFt" },   // Godrej SORA 4BHK XL
    { label: "Certification", value: "Platinum" },     // IGBC Platinum
  ];

  const highlights = [
    {
      icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
      title: "Godrej SORA: Shibui Life",
      desc: "A Japanese-inspired sanctuary at Sector 53 featuring cherry blossom native flora and stunning lake views.",
    },
    {
      icon: <Trees className="w-8 h-8 text-emerald-600" />,
      title: "Eco-Luxe Sanctuaries",
      desc: "Serenity Hills' landmark green community with 20+ acres of open spaces and a tranquil waterfront promenade.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-600" />,
      title: "Elite Sports & Wellness",
      desc: "Professional sports academies at Ashiana Aaroham and wellness-themed residences at Godrej SORA.",
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Global Architecture",
      desc: "Designed by global masters Benoy (HK) at Elaira and inspired by minimalist elegance at Golf Course Road.",
    },
  ];

  return (
    <section id="overview" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-bold mb-4">The Pinnacle Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Where the <span className="italic text-emerald-700">Lake Meets the Sky</span>
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-sm"
          >
            <p className="text-slate-500 leading-relaxed border-l-2 border-emerald-500 pl-6">
              Expanding our horizon to <strong>Sector 53, Golf Course Road</strong>. Our curated collection now spans Gurugram's most elite corridors.
            </p>
          </motion.div>
        </div>

        {/* Project Statistics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-100 mb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-bold">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Immersive Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group relative"
          >
            <img 
              src="https://megarealtymax.com/wp-admin/uploads/property/aipl-lake-city-luxury-apartments-gurugram-waterfront-towers.webp" 
              alt="Godrej SORA Sector 53 featuring lake views and Japanese-inspired architecture" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute top-6 left-6 bg-slate-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <p className="text-white text-[10px] font-bold uppercase tracking-widest">Golf Course Road Collection</p>
            </div>
          </motion.div>
          <div className="lg:col-span-4 grid grid-rows-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img src="https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon.png" alt="Wellness-themed interiors at Godrej SORA and Serenity Hills" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex flex-col justify-center p-8 text-white"
            >
              <MapPin className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-2xl font-bold mb-2">Sector 53 Legacy</h4>
              <p className="text-slate-300 text-sm">Godrej SORA occupies plot no. GH-21, Village Wazirabad, offering the ultimate address on Golf Course Road.</p>
            </motion.div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-emerald-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform group-hover:bg-emerald-600 group-hover:text-white">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}