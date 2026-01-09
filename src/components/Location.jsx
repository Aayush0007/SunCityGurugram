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
  { place: "Karma Lakelands", time: "05 Mins", icon: <MapPin className="w-4 h-4" /> }, // [cite: 155, 176]
  { place: "NH-48 (Delhi-Jaipur Expy)", time: "05 Mins", icon: <Car className="w-4 h-4" /> }, // [cite: 159]
  { place: "Southern Peripheral Road", time: "02 Mins", icon: <MapPin className="w-4 h-4" /> },
  { place: "Dwarka Expressway", time: "10 Mins", icon: <Building2 className="w-4 h-4" /> }, // [cite: 159]
  { place: "Cyber City / Golf Course Rd", time: "25 Mins", icon: <Building2 className="w-4 h-4" /> },
  { place: "IGI Airport (T3)", time: "35 Mins", icon: <Plane className="w-4 h-4" /> },
];

const landmarks = [
  {
    category: "Education",
    items: "St. Xavier's (8 mins), DPS Sec 84 (12 mins), Maitrikiran (13 mins), Vega School[cite: 271, 273, 275, 277].",
    icon: <School className="w-6 h-6 text-emerald-600" />,
  },
  {
    category: "Healthcare",
    items: "Miracles Apollo (9 mins), Fortis Manesar (12 mins), Aarvy Hospital (13 mins), Medanta[cite: 237, 239, 241, 245].",
    icon: <Hospital className="w-6 h-6 text-indigo-600" />,
  },
  {
    category: "Retail & Leisure",
    items: "Elan Mercado (5 mins), Iris Broadway (9 mins), Airia Mall, Entertainland Mall[cite: 202, 204, 206, 193].",
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
            <span className="text-xs uppercase tracking-[0.5em] text-emerald-600 font-bold mb-4 block">The New Growth Epicenter</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
              Sectors 78-86: Gurugram's <span className="italic">Luxury</span> Corridor
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hidden md:block"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Portfolio Proximity</p>
            <div className="flex items-center gap-1 text-emerald-600 font-bold">
               Suncity | Emaar | Conscient | Ashiana
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Map Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50"
          >
            <img
              src="https://www.luxuryresidencesindia.in/suncity-sector-78-gurgaon/images/location-map.webp"
              alt="Sector 78, 80 and 86 Connectivity Map featuring Serenity Hills and Elaira Residences"
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs border border-white/50">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Live Location Status</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">Perfectly balanced between Karma Lakelands and the high-speed NH-48 corridor[cite: 151, 155].</p>
            </div>
          </motion.div>

          {/* Connectivity Timeline Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8">Travel Times by Google Maps [cite: 287]</h4>
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
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-4">Prime Micro-Market SEO</p>
          <p className="text-sm text-slate-500 max-w-4xl mx-auto italic leading-relaxed">
            The Sector 80-86 micro-market is emerging as Gurugram's most premium low-density hub, with Elaira and Serenity Hills leading the IGBC-certified green movement. Proximity to Aravali Hills and world-class golf courses makes this an unparalleled end-user destination.
          </p>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}