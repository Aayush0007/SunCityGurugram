import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, MapPin, Sparkles, Leaf, ArrowUpRight, GraduationCap } from 'lucide-react';

const reasons = [
  {
    icon: <Leaf className="w-8 h-8 text-[#D6AD60]" />,
    title: "Eco-Conscious Luxury",
    desc: "Our portfolio features IGBC Platinum Pre-Certified communities, ensuring sustainable environments that reduce energy costs while protecting your family's future.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
    category: "Sustainability"
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#B68D40]" />,
    title: "Global Design Standards",
    desc: "Partnerships with world-renowned architects like Benoy, HK ensure your home is an international masterpiece of engineering and aesthetics.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    category: "Architecture"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#D6AD60]" />,
    title: "Kid-Centric Ecosystems",
    desc: "We prioritize residences with professional sports academies and dedicated learning hubs, nurturing growth and creativity within your community.",
    img: "https://www.hiranandaniparks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffitness-luxury-club-de-royale-hiranandani-parks2.3b9ba817.jpg&w=2048&q=75",
    category: "Family Growth"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#B68D40]" />,
    title: "Uncompromising Trust",
    desc: "A 100% RERA-certified portfolio. We only curate projects from India's top-tier developers with proven track records of timely delivery.",
    img: "https://www.mvn.in/uploads/blog/1756198427957.webp",
    category: "Compliance"
  }
];

export default function WhyChoose() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    bgCream: "#FDFCF7"
  };

  return (
    <section id="why-choose" className="py-24 bg-[#FDFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4"
            style={{ color: COLORS.gold }}
          >
            The Decision Factor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: COLORS.charcoal }}
          >
            A Selection of <span className="italic" style={{ color: COLORS.gold }}>Unmatched</span> Value
          </motion.h2>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: COLORS.gold }} />
        </div>

        {/* Dynamic Grid: Now focuses on 4 main pillars for better balance */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 bg-white border border-[#D6AD60]/10 hover:shadow-2xl"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121C17]/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-widest border border-white/20">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-12 relative">
                {/* Floating Icon */}
                <div className="absolute -top-10 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-[#D6AD60]/10 group-hover:bg-[#121C17] transition-colors duration-300">
                   <div className="group-hover:scale-110 transition-transform">
                    {item.icon}
                   </div>
                </div>

                <h3 className="text-xl font-serif font-bold mb-3 leading-tight text-[#121C17] group-hover:text-[#D6AD60] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl md:text-2xl italic font-serif text-slate-700">
            Investing in a future that prioritizes <br className="hidden md:block" />
            <span className="font-bold not-italic" style={{ color: COLORS.gold }}>Global Excellence & Sustainable Wellness.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}