import { Building2, Shield, Clock, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion'; // Add framer-motion for subtle animations (npm install framer-motion)

export default function DeveloperTrust() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading with Subtle Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6 bg-gradient-to-r from-blue-800 to-emerald-700 bg-clip-text text-transparent">
            Developed by Suncity Projects – A Legacy of Excellence Since 1996
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Suncity Projects Pvt. Ltd. is a pioneering real estate developer in Delhi-NCR, renowned for iconic townships, luxury residences, and commercial landmarks delivered with innovation, superior quality, and unwavering customer trust.
          </p>
        </motion.div>

        {/* Trust Highlights Grid with Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {[
            {
              icon: <Award className="w-10 h-10 text-amber-600" />,
              title: "Award-Winning Excellence",
              desc: "Honored with 'Luxury Project of the Year' and 'Best Emerging Developer' awards for outstanding design, amenities, and execution.",
              color: "from-amber-50 to-yellow-50",
              border: "border-amber-200",
            },
            {
              icon: <Clock className="w-10 h-10 text-emerald-600" />,
              title: "Timely Delivery & Trust",
              desc: "Proven track record of on-time possession across landmark projects, earning the confidence of thousands of families in the NCR.",
              color: "from-emerald-50 to-teal-50",
              border: "border-emerald-200",
            },
            {
              icon: <Shield className="w-10 h-10 text-blue-600" />,
              title: "Fully Transparent & RERA Compliant",
              desc: "Strict adherence to RERA guidelines, ensuring complete transparency, security, and peace of mind for every buyer.",
              color: "from-blue-50 to-indigo-50",
              border: "border-blue-200",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative p-8 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg border ${item.border} backdrop-blur-sm transition-all duration-300`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              <div className="absolute top-4 right-4 opacity-20">
                <Star className="w-12 h-12 text-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Tagline with Fade-In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl italic text-gray-800 font-medium">
            With Suncity Projects, you're not just investing in a home — 
            <span className="text-emerald-700 font-bold"> you're securing a legacy of trust, luxury, and timeless value.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}