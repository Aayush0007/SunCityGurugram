import { motion } from 'framer-motion';
// Tree-shaken icons for performance
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Car from 'lucide-react/dist/esm/icons/car';
import School from 'lucide-react/dist/esm/icons/school';
import Hospital from 'lucide-react/dist/esm/icons/hospital';
import ShoppingBag from 'lucide-react/dist/esm/icons/shopping-bag';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Plane from 'lucide-react/dist/esm/icons/plane';

const connectivity = [
  { place: "Golf Course Road", time: "Immediate", icon: <Building2 className="w-4 h-4" /> }, 
  { place: "Sector 54 Rapid Metro", time: "03 Mins", icon: <Car className="w-4 h-4" /> }, 
  { place: "Karma Lakelands", time: "05 Mins", icon: <MapPin className="w-4 h-4" /> },  
  { place: "NH-48 (Delhi-Jaipur Expy)", time: "05 Mins", icon: <Car className="w-4 h-4" /> },
  { place: "Cyber City / Horizon Center", time: "12 Mins", icon: <Building2 className="w-4 h-4" /> }, 
  { place: "IGI Airport (T3)", time: "30 Mins", icon: <Plane className="w-4 h-4" /> },
];

export default function Location() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#0D20617",
    cream: "#F4F1E1",
    tan: "#B68D40",
    white: "#FFFFFF"
  };

  const landmarks = [
    {
      category: "Education",
      items: "The Shri Ram School (10 mins), Shiv Nadar School, St. Xavier's, DPS Sec 84.",
      icon: <School className="w-6 h-6" style={{ color: COLORS.gold }} />,
    },
    {
      category: "Healthcare",
      items: "Fortis Memorial (10 mins), Max Hospital, Miracles Apollo, Medanta Medicity.",
      icon: <Hospital className="w-6 h-6" style={{ color: COLORS.gold }} />,
    },
    {
      category: "Retail & Leisure",
      items: "South Point Mall (5 mins), DLF Golf Course, Airia Mall, Iris Broadway.",
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
            <span className="text-xs uppercase tracking-[0.5em] font-bold mb-4 block" style={{ color: COLORS.gold }}>Strategic Positioning</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight" style={{ color: COLORS.charcoal }}>
              Gurugram's <span className="italic font-light" style={{ color: COLORS.gold }}>Most Elite</span> Corridors
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border hidden md:block"
            style={{ backgroundColor: COLORS.white, borderColor: `${COLORS.gold}20` }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Portfolio Presence</p>
            <div className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-wider" style={{ color: COLORS.gold }}>
               Emaar <span className="opacity-30">|</span> Conscient <span className="opacity-30">|</span> Suncity
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Map Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 bg-slate-100"
            style={{ borderColor: COLORS.white }}
          >
            <img
              src="https://www.luxuryresidencesindia.in/suncity-sector-78-gurgaon/images/location-map.webp"
              alt="Sector 53 and Sector 80-86 Connectivity Map"
              className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute bottom-6 left-6 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border" style={{ backgroundColor: `${COLORS.white}CC`, borderColor: `${COLORS.gold}30` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: COLORS.gold }}>Live Location Status</p>
              <p className="text-xs leading-relaxed font-medium" style={{ color: COLORS.charcoal }}>Primely situated at Sector 53, Golf Course Road and the Sector 80-86 luxury hub.</p>
            </div>
          </motion.div>

          {/* Connectivity Timeline Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-3xl font-serif font-bold mb-8" style={{ color: COLORS.charcoal }}>Minutes Away From <span className="italic font-light" style={{ color: COLORS.gold }}>Perfection</span></h4>
            <div className="space-y-4">
              {connectivity.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-2xl border transition-all group bg-white"
                  style={{ borderColor: `${COLORS.gold}10` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm bg-[#FDFCF7] group-hover:text-white" style={{ color: COLORS.gold }}>
                       <div className="group-hover:scale-110 transition-transform">
                          {item.icon}
                       </div>
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.place}</span>
                  </div>
                  <span className="text-xs font-serif font-bold px-4 py-1.5 rounded-lg" style={{ color: COLORS.charcoal, backgroundColor: COLORS.cream }}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Infrastructure Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {landmarks.map((landmark, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] border group transition-all duration-500 bg-white hover:shadow-2xl"
              style={{ borderColor: `${COLORS.gold}10` }}
              whileHover={{ backgroundColor: COLORS.charcoal }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-[#D6AD60]/10" style={{ backgroundColor: COLORS.cream }}>
                {landmark.icon}
              </div>
              <h5 className="text-xl font-serif font-bold mb-4 transition-colors group-hover:text-[#D6AD60]" style={{ color: COLORS.charcoal }}>{landmark.category}</h5>
              <p className="text-sm leading-relaxed font-light transition-colors group-hover:text-slate-300" style={{ color: COLORS.charcoal, opacity: 0.8 }}>
                {landmark.items}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Local SEO Text Hook */}
        <div className="mt-20 pt-12 border-t text-center" style={{ borderColor: `${COLORS.gold}30` }}>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4" style={{ color: COLORS.gold }}>Prime Corridors Portfolio</p>
          <p className="text-sm max-w-4xl mx-auto italic leading-relaxed font-light" style={{ color: COLORS.charcoal }}>
            Our portfolio bridges the established luxury of <strong className="font-bold">Golf Course Road (Sector 53)</strong> with the high-growth residential corridors of <strong className="font-bold">Sectors 80-86</strong>. From lake-view retreats to sports-integrated communities, we offer Gurugram's most strategic addresses.
          </p>
        </div>
      </div>
    </section>
  );
}