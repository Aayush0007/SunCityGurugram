import { motion } from 'framer-motion';
import { Trees, ShieldCheck, Trophy, Home, MapPin, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: <Trees className="w-12 h-12 text-emerald-600" />,
    title: "Unmatched Low-Density Living",
    desc: "Only ~45 units per acre across ~16 acres (+5 acres future phase) with 90% open & green spaces — rare privacy in Gurugram.",
    img: "https://www.green-valley.site/assets/img/g8.webp", // Aerial green view
    alt: "Expansive low-density township with lush greens and elegant towers",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-amber-600" />,
    title: "World-Class Sports & Lifestyle Amenities",
    desc: "1.5 Lakh sq. ft. grand clubhouse + 3.5 Lakh sq. ft. dedicated sports arena — international-standard facilities for all ages.",
    img: "https://www.hiranandaniparks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffitness-luxury-club-de-royale-hiranandani-parks2.3b9ba817.jpg&w=2048&q=75", // Sports facilities
    alt: "Luxury sports arena with swimming pool, gym, and courts",
  },
  {
    icon: <Home className="w-12 h-12 text-blue-600" />,
    title: "Spacious Premium Residences",
    desc: "3 & 4 BHK homes (2,350–3,150 sq. ft.) with large balconies, natural light, cross-ventilation, and modern efficiency.",
    img: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg", // Luxury interior
    alt: "Ultra-luxury apartment interior with expansive views and natural light",
  },
  {
    icon: <Trophy className="w-12 h-12 text-emerald-600" />,
    title: "Strong Investment Potential",
    desc: "New launch pricing ~₹16,000/sq. ft. in a prime growth corridor — ideal for end-users, NRIs, and long-term appreciation.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg", // Clubhouse luxury
    alt: "Grand luxury clubhouse interior",
  },
  {
    icon: <MapPin className="w-12 h-12 text-indigo-600" />,
    title: "Strategic Location & Connectivity",
    desc: "Sector-78 with seamless access to NH-8, Southern Peripheral Road (SPR), business hubs, schools, and hospitals.",
    img: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/2/Southern-Peripheral-Road-Map_0_1200.jpg.webp", // SPR map
    alt: "Southern Peripheral Road connectivity map in Gurugram",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    title: "Trusted Developer & Compliance",
    desc: "Backed by Suncity Projects' legacy of excellence, timely delivery, and full RERA compliance for complete peace of mind.",
    img: "https://www.mvn.in/uploads/blog/1756198427957.webp", // Another luxury interior/green view
    alt: "Modern luxury living space with premium finishes",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-8 bg-gradient-to-r from-blue-800 to-emerald-700 bg-clip-text text-transparent">
            Why Choose This Ultra-Luxury Masterpiece?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            A rare combination of serenity, luxury, wellness, and investment growth in Gurugram's most promising corridor.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={reason.img}
                  alt={reason.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-full mb-6 shadow-md">
                  {reason.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-2xl italic text-gray-800 font-medium">
            Elevate your lifestyle with a home that offers more than luxury —
            <span className="text-emerald-700 font-bold"> it promises a legacy.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}