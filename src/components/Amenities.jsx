import { motion } from 'framer-motion';
// Performance-optimized icon imports
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Dumbbell from 'lucide-react/dist/esm/icons/dumbbell';
import Waves from 'lucide-react/dist/esm/icons/waves';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Trees from 'lucide-react/dist/esm/icons/trees';
import Ship from 'lucide-react/dist/esm/icons/ship';

const amenities = [
  {
    icon: <Building2 className="w-8 h-8 text-blue-700" />,
    title: "Dual 75,000 Sq. Ft. Clubhouses",
    desc: "Luxury lifestyle hubs at Elaira and Serenity Hills featuring fine dining, temperature-controlled pools, and elite social spaces.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    featured: true,
  },
  {
    icon: <Trophy className="w-8 h-8 text-amber-600" />,
    title: "Pro-Sports Ecosystem",
    desc: "Ashiana Aaroham's curated arena with football fields, box cricket, tennis, and professional skating rinks[cite: 30, 45].",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/full/20240617124554.jpg",
    featured: true,
  },
  {
    icon: <Ship className="w-8 h-8 text-cyan-600" />,
    title: "Waterfront Promenade",
    desc: "A refreshing waterfront walkway and walking promenade integrated within 20+ acres of landscaped greenery.",
    img: "https://sreindiarealty.com/uploads/blog/experion-the-trillion-redefining-luxury-living-in-sector-48-gurgaon.jpg",
  },
  {
    icon: <Trees className="w-8 h-8 text-emerald-700" />,
    title: "Miyawaki Forest Trails",
    desc: "Aaroham's dense Miyawaki plantations and Miyawaki forests providing a carbon-neutral, safe green ecosystem.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
  },
  {
    icon: <Building2 className="w-8 h-8 text-indigo-600" />,
    title: "Kid-Centric Learning Hub",
    desc: "A dedicated hub for music, dance, art, and study curated by Hearth Education Advisors[cite: 59, 70].",
    img: "https://www.rsbmglobal.com/storage/dlf-privana-north-76-1-compressed.jpg",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-600" />,
    title: "Five-Zone Aquatic Deck",
    desc: "Featuring infinity edge pools, temperature-controlled lap pools, and dedicated splash zones for toddlers.",
    img: "https://gallantsports.in/wp-content/uploads/2025/03/Multi-Sport-Arena.jpg",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4"
          >
            The Ultimate Lifestyle Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6"
          >
            Redefining Green <span className="italic text-emerald-700">Urbanism</span>
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full" />
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-slate-50 ${
                item.featured ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Image with High-End Overlay */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                
                {/* Floating Icon Holder */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-colors duration-500">
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Global Standard Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 py-12 border-t border-slate-100 flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <Trophy className="w-5 h-5" /> Professional Academies [cite: 82]
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <Building2 className="w-5 h-5" /> IGBC Pre-Certified
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <Waves className="w-5 h-5" /> Temperature Controlled Pools
          </div>
        </motion.div>
      </div>
    </section>
  );
}