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
  { place: "Golf Course Road", time: "Immediate", icon: <Building2 className="w-4 h-4" /> }, // Godrej SORA
  { place: "Sector 54 Rapid Metro", time: "03 Mins", icon: <Car className="w-4 h-4" /> }, // Godrej SORA Proximity
  { place: "Karma Lakelands", time: "05 Mins", icon: <MapPin className="w-4 h-4" /> }, 
  { place: "NH-48 (Delhi-Jaipur Expy)", time: "05 Mins", icon: <Car className="w-4 h-4" /> },
  { place: "Cyber City / Horizon Center", time: "12 Mins", icon: <Building2 className="w-4 h-4" /> }, //
  { place: "IGI Airport (T3)", time: "30 Mins", icon: <Plane className="w-4 h-4" /> },
];

const landmarks = [
  {
    category: "Education",
    items: "The Shri Ram School (10 mins), Shiv Nadar School, St. Xavier's, DPS Sec 84.",
    icon: <School className="w-6 h-6 text-emerald-600" />,
  },
  {
    category: "Healthcare",
    items: "Fortis Memorial (10 mins), Max Hospital, Miracles Apollo, Medanta Medicity.",
    icon: <Hospital className="w-6 h-6 text-indigo-600" />,
  },
  {
    category: "Retail & Leisure",
    items: "South Point Mall (5 mins), DLF Golf Course, Airia Mall, Iris Broadway.",
    icon: <ShoppingBag className="w-6 h-6 text-amber-600" />,
  },
];

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4 block">Strategic Positioning</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Gurugram's <span className="italic text-emerald-700">Most Elite</span> Corridors
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hidden md:block"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Portfolio Presence</p>
            <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs uppercase tracking-tight">
               Godrej | Emaar | Conscient | Ashiana
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Map Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100"
          >
            <img
              src="https://www.luxuryresidencesindia.in/suncity-sector-78-gurgaon/images/location-map.webp"
              alt="Sector 53 and Sector 80-86 Connectivity Map featuring Godrej SORA and Serenity Hills"
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs border border-white/50">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Live Location Status</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">Primely situated at Sector 53, Golf Course Road and the Sector 80-86 luxury hub.</p>
            </div>
          </motion.div>

          {/* Connectivity Timeline Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8">Minutes Away From Perfection</h4>
            <div className="space-y-4">
              {connectivity.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.place}</span>
                  </div>
                  <span className="text-xs font-serif font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
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
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-slate-900 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {landmark.icon}
              </div>
              <h5 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{landmark.category}</h5>
              <p className="text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                {landmark.items}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Local SEO Text Hook */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-4">Prime Corridors SEO</p>
          <p className="text-sm text-slate-500 max-w-4xl mx-auto italic leading-relaxed">
            Our portfolio bridges the established luxury of <strong>Golf Course Road (Sector 53)</strong> with the high-growth residential corridors of <strong>Sectors 80-86</strong>. From lake-view retreats to sports-integrated communities, we offer Gurugram's most strategic addresses.
          </p>
        </div>
      </div>
    </section>
  );
}