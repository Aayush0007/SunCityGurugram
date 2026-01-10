import { motion } from 'framer-motion';
// Performance-optimized icon imports
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Waves from 'lucide-react/dist/esm/icons/waves';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Trees from 'lucide-react/dist/esm/icons/trees';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Flower2 from 'lucide-react/dist/esm/icons/flower-2';

const amenities = [
  {
    icon: <Flower2 className="w-8 h-8 text-pink-500" />,
    title: "Shibui Wellness Garden",
    project: "Godrej SORA",
    desc: "Japanese-inspired sanctuary featuring Cherry Blossom flora, sunken seating, and Genkan-style lobbies for a mindful arrival.",
    img: "https://images.pexels.com/photos/4060144/pexels-photo-4060144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    icon: <Building2 className="w-8 h-8 text-blue-700" />,
    title: "Dual 75,000 Sq. Ft. Clubs",
    project: "Elaira & Serenity Hills",
    desc: "Global lifestyle hubs designed by Benoy HK, featuring fine dining, cigar lounges, and temperature-controlled social zones.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    featured: true,
  },
  {
    icon: <Trophy className="w-8 h-8 text-amber-600" />,
    title: "Pro-Sports Ecosystem",
    project: "Ashiana Aaroham",
    desc: "A massive sports arena with professional academies for football, tennis, and skating, curated for active youth development.",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/full/20240617124554.jpg",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-cyan-600" />,
    title: "Lake-View Sun Deck",
    project: "Godrej SORA",
    desc: "A serene wellness deck where the sky meets the lake, offering unending horizons for yoga and meditation.",
    img: "https://sreindiarealty.com/uploads/blog/experion-the-trillion-redefining-luxury-living-in-sector-48-gurgaon.jpg",
  },
  {
    icon: <Trees className="w-8 h-8 text-emerald-700" />,
    title: "Miyawaki Forest Trails",
    project: "Ashiana Aaroham",
    desc: "Walk through carbon-neutral forest plantations and safe green trails designed for holistic family wellness.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-600" />,
    title: "Five-Zone Aquatic Deck",
    project: "Portfolio Wide",
    desc: "A collection of infinity edge pools, temperature-controlled lap pools, and dedicated splash pads for children.",
    img: "https://gallantsports.in/wp-content/uploads/2025/03/Multi-Sport-Arena.jpg",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-700 font-bold">
              The Living Luxura Experience
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
          >
            Wellness Meets <span className="italic text-emerald-700">Artistry</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            World-class infrastructure designed to foster community, health, and a legacy of refined living.
          </p>
        </div>

        {/* Improved Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-slate-100 ${
                item.featured ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                
                {/* Project Tag */}
                <div className="absolute bottom-4 left-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">
                    {item.project}
                  </span>
                </div>

                {/* Floating Icon Holder */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-emerald-600 transition-colors duration-500">
                  <div className="text-slate-900 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  <span>Explore Details</span>
                  <Sparkles className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Standard Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 py-10 border-t border-slate-100 flex flex-wrap justify-center gap-10 md:gap-20"
        >
          <div className="flex items-center gap-3">
             <Trophy className="w-6 h-6 text-amber-500" />
             <div className="flex flex-col">
               <span className="text-xs font-bold text-slate-900 uppercase">Sports Academies</span>
               <span className="text-[10px] text-slate-400">Professional Coaching</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <Building2 className="w-6 h-6 text-blue-500" />
             <div className="flex flex-col">
               <span className="text-xs font-bold text-slate-900 uppercase">Luxury Clubs</span>
               <span className="text-[10px] text-slate-400">75,000+ Sq. Ft.</span>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <Waves className="w-6 h-6 text-cyan-500" />
             <div className="flex flex-col">
               <span className="text-xs font-bold text-slate-900 uppercase">Aquatic Decks</span>
               <span className="text-[10px] text-slate-400">Temperature Controlled</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}