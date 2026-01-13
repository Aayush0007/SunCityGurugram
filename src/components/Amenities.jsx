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
    icon: <Flower2 className="w-8 h-8" />,
    title: "Shibui Wellness Garden",
    project: "Godrej SORA",
    desc: "Japanese-inspired sanctuary featuring Cherry Blossom flora, sunken seating, and Genkan-style lobbies for a mindful arrival.",
    img: "https://images.pexels.com/photos/4060144/pexels-photo-4060144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Dual 75,000 Sq. Ft. Clubs",
    project: "Elaira & Serenity Hills",
    desc: "Global lifestyle hubs designed by Benoy HK, featuring fine dining, cigar lounges, and temperature-controlled social zones.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    featured: true,
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Pro-Sports Ecosystem",
    project: "Ashiana Aaroham",
    desc: "A massive sports arena with professional academies for football, tennis, and skating, curated for active youth development.",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/full/20240617124554.jpg",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Lake-View Sun Deck",
    project: "Godrej SORA",
    desc: "A serene wellness deck where the sky meets the lake, offering unending horizons for yoga and meditation.",
    img: "https://sreindiarealty.com/uploads/blog/experion-the-trillion-redefining-luxury-living-in-sector-48-gurgaon.jpg",
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Miyawaki Forest Trails",
    project: "Ashiana Aaroham",
    desc: "Walk through carbon-neutral forest plantations and safe green trails designed for holistic family wellness.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Five-Zone Aquatic Deck",
    project: "Portfolio Wide",
    desc: "A collection of infinity edge pools, temperature-controlled lap pools, and dedicated splash pads for children.",
    img: "https://gallantsports.in/wp-content/uploads/2025/03/Multi-Sport-Arena.jpg",
  },
];

export default function Amenities() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#0D20617",
    cream: "#F4F1E1",
    white: "#FFFFFF"
  };

  return (
    <section id="amenities" className="py-24 bg-[#FDFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full mb-6 border"
            style={{ backgroundColor: `${COLORS.gold}10`, borderColor: `${COLORS.gold}30` }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: COLORS.gold }}>
              The Living Luxura Experience
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
            style={{ color: COLORS.charcoal }}
          >
            Wellness Meets <span className="italic font-light" style={{ color: COLORS.gold }}>Artistry</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            World-class infrastructure designed to foster community, health, and a legacy of refined living across our flagship projects.
          </p>
        </div>

        {/* Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-700 bg-white border border-slate-100 hover:shadow-[0_20px_50px_rgba(214,173,96,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D20617]/90 via-transparent to-transparent opacity-80" />
                
                {/* Project Tag */}
                <div className="absolute bottom-6 left-6 backdrop-blur-md px-4 py-1.5 rounded-full border bg-white/10" style={{ borderColor: `${COLORS.cream}30` }}>
                  <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">
                    {item.project}
                  </span>
                </div>

                {/* Floating Icon Holder */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-[1.25rem] flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110" style={{ color: COLORS.gold }}>
                  <div className="transition-all duration-500">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <h3 className="text-2xl font-serif font-bold mb-3 transition-colors duration-500 group-hover:text-[#D6AD60]" style={{ color: COLORS.charcoal }}>
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ color: COLORS.gold }}>
                  <span>Experience the Lifestyle</span>
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
          className="mt-20 py-12 border-t flex flex-wrap justify-center gap-10 md:gap-24"
          style={{ borderColor: `${COLORS.gold}30` }}
        >
          <div className="flex items-center gap-4 group">
             <div className="p-3 rounded-xl bg-[#FDFCF7] group-hover:scale-110 transition-transform" style={{ color: COLORS.gold, border: `1px solid ${COLORS.gold}30` }}>
                <Trophy className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Sports Academies</span>
               <span className="text-[10px] text-slate-400 font-medium">Professional Coaching</span>
             </div>
          </div>
          <div className="flex items-center gap-4 group">
             <div className="p-3 rounded-xl bg-[#FDFCF7] group-hover:scale-110 transition-transform" style={{ color: COLORS.gold, border: `1px solid ${COLORS.gold}30` }}>
                <Building2 className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Elite Clubs</span>
               <span className="text-[10px] text-slate-400 font-medium">75,000+ Sq. Ft. Spaces</span>
             </div>
          </div>
          <div className="flex items-center gap-4 group">
             <div className="p-3 rounded-xl bg-[#FDFCF7] group-hover:scale-110 transition-transform" style={{ color: COLORS.gold, border: `1px solid ${COLORS.gold}30` }}>
                <Waves className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-xs font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Aquatic Decks</span>
               <span className="text-[10px] text-slate-400 font-medium">Temperature Controlled</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}