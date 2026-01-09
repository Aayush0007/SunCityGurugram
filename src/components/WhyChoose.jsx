import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Trophy, Home, MapPin, Sparkles, Leaf, ArrowUpRight } from 'lucide-react';

const reasons = [
  {
    icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    title: "Platinum Green Living",
    desc: "Experience Serenity Hills' IGBC Platinum Pre-Certified community with 25+ acres of nature and 8 acres of central greens.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
    category: "Sustainability"
  },
  {
    icon: <Trophy className="w-8 h-8 text-amber-600" />,
    title: "Kid-Centric Learning Hub",
    desc: "Ashiana Aaroham offers a dedicated Hub for music, arts, and professional sports academies like football and tennis.",
    img: "https://www.hiranandaniparks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffitness-luxury-club-de-royale-hiranandani-parks2.3b9ba817.jpg&w=2048&q=75",
    category: "Family Wellness"
  },
  {
    icon: <Home className="w-8 h-8 text-blue-600" />,
    title: "Master-Planned Privacy",
    desc: "Low-density architectural mastery featuring 34-floor high-rise towers and expansive 75,000 sq. ft. clubhouses.",
    img: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg",
    category: "Architecture"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-600" />,
    title: "Exclusive Launch Perks",
    desc: "Unlock inaugural benefits up to ₹16 Lakhs at Aaroham with entry pricing from ₹2.98 Cr for premium residences.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    category: "Investment"
  },
  {
    icon: <MapPin className="w-8 h-8 text-indigo-600" />,
    title: "Prime Growth Corridor",
    desc: "Strategic placement in Sectors 80-86 near NH-48 and Karma Lakelands for seamless NCR connectivity.",
    img: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/Southern-Peripheral-Road-Map_0_1200.jpg.webp",
    category: "Connectivity"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "RERA Certified Trust",
    desc: "Fully compliant portfolio (HRERA 993/994 of 2025) ensuring transparent delivery by Emaar, Conscient, and Ashiana.",
    img: "https://www.mvn.in/uploads/blog/1756198427957.webp",
    category: "Compliance"
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4"
          >
            The Decision Factor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
          >
            A Selection of <span className="italic text-emerald-700">Unmatched</span> Value
          </motion.h2>
          <div className="w-24 h-1 bg-emerald-500 rounded-full" />
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
              className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-emerald-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* Media Container */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-60" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  {item.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-10 relative">
                {/* Icon Glass Container */}
                <div className="absolute -top-12 left-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-50 group-hover:bg-emerald-600 transition-colors duration-500">
                  <div className="group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {item.icon}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
          <p className="text-2xl md:text-3xl italic text-slate-800 font-serif leading-snug">
            Investing in a future that prioritizes <br className="hidden md:block" />
            <span className="text-emerald-700 font-bold not-italic">Global Excellence & Sustainable Wellness.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}