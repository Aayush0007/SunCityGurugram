import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Trophy, Home, MapPin, Sparkles, Leaf, ArrowUpRight, Flower2 } from 'lucide-react';
import Godrej from "../Assets/Godrej.png";

const reasons = [
  {
    icon: <Flower2 className="w-8 h-8 text-[#D6AD60]" />,
    title: "Shibui Wellness Philosophy",
    desc: "Experience Godrej SORA’s Japanese-inspired aesthetic valuing subtle beauty and peace, featuring a unique Torii gate themed facade.",
    img: Godrej,
    category: "Wellness Heritage"
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#B68D40]" />,
    title: "Platinum Green Living",
    desc: "Experience Serenity Hills' IGBC Platinum Pre-Certified community with 25+ acres of nature and 8 acres of central greens.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
    category: "Sustainability"
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#D6AD60]" />,
    title: "Kid-Centric Learning Hub",
    desc: "Ashiana Aaroham offers a dedicated Hub for music, arts, and professional sports academies like football and tennis.",
    img: "https://www.hiranandaniparks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffitness-luxury-club-de-royale-hiranandani-parks2.3b9ba817.jpg&w=2048&q=75",
    category: "Family Wellness"
  },
  {
    icon: <Home className="w-8 h-8 text-[#B68D40]" />,
    title: "Elite Limited Edition",
    desc: "Exclusivity defined by Godrej SORA with just 2 units per core and total 244 residences overlooking Wazirabad Lake.",
    img: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg",
    category: "Architecture"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#D6AD60]" />,
    title: "Golf Course Road Access",
    desc: "Discover premium living at Sector 53, situated just steps away from Golf Course Road with dual sunrise and sunset views.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    category: "Investment"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#B68D40]" />,
    title: "RERA Certified Trust",
    desc: "Fully compliant portfolio including Godrej SORA (HRERA 976/708/2025/79) ensuring transparent delivery by India's top developers.",
    img: "https://www.mvn.in/uploads/blog/1756198427957.webp",
    category: "Compliance"
  },
];

export default function WhyChoose() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#0D20617",
    cream: "#F4F1E1",
    tan: "#B68D40"
  };

  return (
    <section className="py-24 bg-[#FDFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] font-bold mb-4"
            style={{ color: COLORS.gold }}
          >
            The Decision Factor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
            style={{ color: COLORS.charcoal }}
          >
            A Selection of <span className="italic" style={{ color: COLORS.gold }}>Unmatched</span> Value
          </motion.h2>
          <div className="w-24 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
        </div>

        {/* Masonry-Inspired Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 bg-white hover:shadow-[0_20px_50px_rgba(214,173,96,0.15)]"
            >
              {/* Media Container */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t opacity-60" style={{ backgroundImage: `linear-gradient(to top, ${COLORS.charcoal}, transparent)` }} />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest bg-white/10">
                  {item.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-10 relative">
                {/* Icon Container */}
                <div className="absolute -top-12 left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-50 transition-colors duration-500 group-hover:bg-[#0D20617]">
                  <div className="group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-serif font-bold mb-4 transition-colors group-hover:text-[#D6AD60]" style={{ color: COLORS.charcoal }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: COLORS.gold }}>
                    Verified Project Detail <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24 pt-12 border-t border-slate-100"
        >
          <p className="text-2xl md:text-3xl italic font-serif leading-snug text-slate-800">
            Investing in a future that prioritizes <br className="hidden md:block" />
            <span className="font-bold not-italic" style={{ color: COLORS.gold }}>Global Excellence & Sustainable Wellness.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}