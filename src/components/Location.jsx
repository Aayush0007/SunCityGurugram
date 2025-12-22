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
  { place: "NH-48 (Delhi-Jaipur Expy)", time: "05 Mins", icon: <Car className="w-4 h-4" /> },
  { place: "Southern Peripheral Road", time: "02 Mins", icon: <MapPin className="w-4 h-4" /> },
  { place: "Cyber City / Golf Course Rd", time: "25 Mins", icon: <Building2 className="w-4 h-4" /> },
  { place: "IGI Airport (T3)", time: "35 Mins", icon: <Plane className="w-4 h-4" /> },
];

const landmarks = [
  {
    category: "Education",
    items: "The Moksh Intl, DPS Sec 84, Mount Olympus, Yaduvanshi Intl.",
    icon: <School className="w-6 h-6 text-emerald-600" />,
  },
  {
    category: "Healthcare",
    items: "Medanta Medicity, Artemis, Fortis, Genesis Hospital.",
    icon: <Hospital className="w-6 h-6 text-indigo-600" />,
  },
  {
    category: "Retail & Leisure",
    items: "Sapphire 83, Town Square, Airia Mall, Ambience Mall.",
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
              Sector 78: Gurugram's <span className="italic">New Alpha</span> Corridor
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hidden md:block"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Google Maps Rating</p>
            <div className="flex items-center gap-1 text-amber-500">
              {[1,2,3,4,5].map(i => <SparkleIcon key={i} />)}
              <span className="ml-2 text-slate-900 font-bold">4.8/5</span>
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
              alt="Sector 78 Connectivity Map"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs border border-white/50">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Live Location Status</p>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">Strategically nestled between NH-48 and SPR for zero-bottleneck travel.</p>
            </div>
          </motion.div>

          {/* Connectivity Timeline Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8">Minutes Away From Everything</h4>
            <div className="space-y-6">
              {connectivity.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item.place}</span>
                  </div>
                  <span className="text-sm font-serif font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
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
              <p className="text-xs leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                {landmark.items}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Local SEO Text Hook */}
        <div className="mt-20 pt-10 border-t border-slate-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-4">Investment Potential</p>
          <p className="text-sm text-slate-500 max-w-3xl mx-auto italic leading-relaxed">
            Sector-78 is currently Gurugram's fastest-growing residential corridor. With the integration of the Southern Peripheral Road (SPR) and the upcoming Metro extension, property values are projected to appreciate significantly by the time of possession.
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