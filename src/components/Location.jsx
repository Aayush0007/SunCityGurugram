import { motion } from 'framer-motion';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Car from 'lucide-react/dist/esm/icons/car';
import School from 'lucide-react/dist/esm/icons/school';
import Hospital from 'lucide-react/dist/esm/icons/hospital';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Plane from 'lucide-react/dist/esm/icons/plane';
import Trees from 'lucide-react/dist/esm/icons/trees';

const connectivity = [
  { place: "NH-8 (Jaipur Highway)", time: "02 Mins", icon: <Car className="w-4 h-4" /> },
  { place: "Dwarka Expressway", time: "03 Mins", icon: <Car className="w-4 h-4" /> },
  { place: "Hyatt Regency", time: "02 Mins", icon: <Building2 className="w-4 h-4" /> },
  { place: "Cyber City II (Global City)", time: "05 Mins", icon: <Building2 className="w-4 h-4" /> },
  { place: "Karma Lakelands / Golf Course", time: "08 Mins", icon: <Trees className="w-4 h-4" /> },
  { place: "IGI Airport (T3)", time: "30 Mins", icon: <Plane className="w-4 h-4" /> },
];

export default function Location() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    cream: "#F4F1E1",
    white: "#FFFFFF"
  };

  const landmarks = [
    {
      category: "Premier Education",
      items: "The Shri Ram School, Shiv Nadar, MatriKiran High School, and Amity University (15 mins).",
      icon: <School className="w-6 h-6" style={{ color: COLORS.gold }} />,
    },
    {
      category: "World-Class Healthcare",
      items: "Medanta The Medicity, Aarvy Healthcare, Silver Streak, and Fortis Hospital.",
      icon: <Hospital className="w-6 h-6" style={{ color: COLORS.gold }} />,
    },
    {
      category: "Retail & Social Hubs",
      items: "Sapphire 83, Iris Broadway, Airia Mall, and the upcoming Global City lifestyle hub.",
      icon: <ShoppingBag className="w-6 h-6" style={{ color: COLORS.gold }} />,
    },
  ];

  return (
    <section id="location" className="py-24 bg-[#FDFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block" style={{ color: COLORS.gold }}>Strategic Nexus</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight" style={{ color: COLORS.charcoal }}>
              At the Heart of <span className="italic font-light" style={{ color: COLORS.gold }}>Future Gurugram</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-[2rem] border hidden md:block bg-white shadow-sm"
            style={{ borderColor: `${COLORS.gold}20` }}
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Micro-Markets</p>
            <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-wider" style={{ color: COLORS.gold }}>
               Sector 78 <span className="opacity-30">|</span> Sector 80 <span className="opacity-30">|</span> Sector 86
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Map Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group rounded-[3rem] overflow-hidden shadow-2xl border-4 bg-slate-100"
            style={{ borderColor: COLORS.white }}
          >
            <img
              src="https://www.luxuryresidencesindia.in/suncity-sector-78-gurgaon/images/location-map.webp"
              alt="Sector 78-86 Connectivity Map"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 right-6 left-6 md:left-auto backdrop-blur-md p-6 rounded-[2rem] shadow-xl md:max-w-xs border" style={{ backgroundColor: `${COLORS.white}CC`, borderColor: `${COLORS.gold}30` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: COLORS.gold }}>Growth Corridor Status</p>
              <p className="text-xs leading-relaxed font-medium" style={{ color: COLORS.charcoal }}>
                Positioned at the NH-8 and SPR junction, minutes from Global City and Aravalli foothills.
              </p>
            </div>
          </motion.div>

          {/* Connectivity Timeline Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold mb-8 text-[#121C17]">
              Seamless <span className="italic font-light" style={{ color: COLORS.gold }}>Connectivity</span>
            </h4>
            <div className="space-y-3">
              {connectivity.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between p-5 rounded-2xl border transition-all hover:bg-white hover:shadow-md"
                  style={{ borderColor: `${COLORS.gold}15` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FDFCF7] shadow-inner text-[#D6AD60]">
                       {item.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item.place}</span>
                  </div>
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter" style={{ color: COLORS.charcoal, backgroundColor: COLORS.cream }}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Infrastructure Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {landmarks.map((landmark, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] border transition-all duration-500 bg-white hover:shadow-xl hover:border-[#D6AD60]/30"
              style={{ borderColor: `${COLORS.gold}10` }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-sm bg-[#F4F1E1]">
                {landmark.icon}
              </div>
              <h5 className="text-xl font-serif font-bold mb-4 text-[#121C17]">{landmark.category}</h5>
              <p className="text-xs leading-relaxed font-light text-slate-500">
                {landmark.items}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEO Hook */}
        <div className="mt-20 pt-12 border-t text-center" style={{ borderColor: `${COLORS.gold}20` }}>
          <p className="text-sm max-w-4xl mx-auto italic leading-relaxed font-light text-slate-400">
            Bridging the gap between the sports-integrated lifestyle of <strong className="text-[#121C17]">Sector 78 (Suncity)</strong>, the wellness focus of <strong className="text-[#121C17]">Sector 80 (Conscient)</strong>, and the sustainable community of <strong className="text-[#121C17]">Sector 86 (Emaar)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}