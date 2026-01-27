import { motion } from 'framer-motion';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Waves from 'lucide-react/dist/esm/icons/waves';
import Trophy from 'lucide-react/dist/esm/icons/trophy';
import Trees from 'lucide-react/dist/esm/icons/trees';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';

const amenities = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "1.25 Lakh Sq. Ft. Club",
    project: "Suncity Monarch",
    desc: "One of Gurugram's grandest lifestyle hubs featuring a bowling alley, podcast studio, and high-end private theatre.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    featured: true,
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "3.15 Acre Sports Arena",
    project: "Suncity Monarch",
    desc: "Dedicated Olympic-standard facilities for Football, Cricket, Tennis, and a professional-grade Shooting Range.",
    img: "https://gallantsports.in/wp-content/uploads/2025/03/Multi-Sport-Arena.jpg",
    featured: true,
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "8-Acre Central Greens",
    project: "Emaar Serenity Hills",
    desc: "A sprawling botanical sanctuary with waterfront walkways and IGBC Platinum-certified sustainable landscaping.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "CTFA® Tech Powered",
    project: "Conscient Elaira",
    desc: "Next-gen healthy homes with Clean Technology for Fresh Air (CTFA®), ensuring zero-pollution indoor wellness.",
    img: "https://images.pexels.com/photos/4060144/pexels-photo-4060144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    icon: <Waves className="w-8 h-8" />,
    title: "Infinity Sky Pool",
    project: "Portfolio Wide",
    desc: "Olympic-sized infinity pools and temperature-controlled aquatic decks with panoramic views of the Aravallis.",
    img: "https://sreindiarealty.com/uploads/blog/experion-the-trillion-redefining-luxury-living-in-sector-48-gurgaon.jpg",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Padel & Pickleball Courts",
    project: "Conscient Elaira",
    desc: "First-of-its-kind trendy racquet sports ecosystem curated for the modern, active luxury lifestyle.",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/full/20240617124554.jpg",
  },
];

export default function Amenities() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    cream: "#F4F1E1",
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
            className="px-6 py-2 rounded-full mb-6 border bg-white shadow-sm"
            style={{ borderColor: `${COLORS.gold}30` }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: COLORS.gold }}>
              The Living Luxura Experience
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
            style={{ color: COLORS.charcoal }}
          >
            Wellness Meets <span className="italic font-light" style={{ color: COLORS.gold }}>Artistry</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base font-light leading-relaxed">
            From the city's largest private clubhouses to carbon-neutral forest trails, we curate spaces that foster a legacy of refined living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[3rem] overflow-hidden bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121C17]/90 to-transparent opacity-80" />
                
                {/* Project Tag */}
                <div className="absolute bottom-6 left-6 backdrop-blur-md px-4 py-1.5 rounded-full border bg-white/10 border-white/20">
                  <span className="text-[9px] text-white font-bold tracking-widest uppercase">
                    {item.project}
                  </span>
                </div>

                {/* Floating Icon Holder */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 text-[#D6AD60]">
                   {item.icon}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-[#D6AD60] transition-colors" style={{ color: COLORS.charcoal }}>
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: COLORS.gold }}>
                  Experience Excellence <Sparkles className="w-3 h-3" />
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
          className="mt-20 py-12 border-t flex flex-wrap justify-center gap-12"
          style={{ borderColor: `${COLORS.gold}20` }}
        >
          <div className="flex items-center gap-4">
             <div className="p-3 rounded-xl bg-white shadow-sm border border-[#D6AD60]/20 text-[#D6AD60]">
                <Trophy className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Mega Sports Arena</span>
               <span className="text-[9px] text-slate-400 font-medium">3.15 Acre Complex</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 rounded-xl bg-white shadow-sm border border-[#D6AD60]/20 text-[#D6AD60]">
                <Building2 className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Signature Clubs</span>
               <span className="text-[9px] text-slate-400 font-medium">1.25 Lakh Sq. Ft.</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 rounded-xl bg-white shadow-sm border border-[#D6AD60]/20 text-[#D6AD60]">
                <Waves className="w-6 h-6" />
             </div>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: COLORS.charcoal }}>Aquatic Suites</span>
               <span className="text-[9px] text-slate-400 font-medium">Infinity Edge Pools</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}