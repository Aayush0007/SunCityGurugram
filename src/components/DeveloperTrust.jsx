import { Building2, Shield, Clock, Award, Star, Globe, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeveloperTrust() {
  const developers = [
    {
      name: "Suncity Projects",
      heritage: "Since 1996",
      focus: "Luxury Townships",
      desc: "Pioneering iconic landmarks across Delhi-NCR with a focus on low-density elegance and premium urban planning.",
      accent: "text-blue-600"
    },
    {
      name: "Emaar India",
      heritage: "Global Presence",
      focus: "Master Communities",
      desc: "The creators of Serenity Hills, bringing international standards of sustainable living to Sector 86.",
      accent: "text-emerald-600"
    },
    {
      name: "Conscient",
      heritage: "Value Meets Values",
      focus: "Architectural Marvels",
      desc: "Partnering with global masters like Benoy, HK to deliver Gurugram's most expansive luxury clubhouses.",
      accent: "text-amber-600"
    },
    {
      name: "Ashiana Housing",
      heritage: "Kid-Centric Experts",
      focus: "Family Wellness",
      desc: "India's leader in curated Kid-Centric Residences designed to nurture growth and creativity[cite: 5, 6, 10].",
      accent: "text-indigo-600"
    }
  ];

  const highlights = [
    {
      icon: <Award className="w-10 h-10 text-amber-600" />,
      title: "Platinum Pre-Certified",
      desc: "Sustainability-focused developments including Serenity Hills' IGBC Platinum Pre-Certification for green living.",
      color: "from-amber-50 to-yellow-50",
      border: "border-amber-200",
    },
    {
      icon: <Globe className="w-10 h-10 text-emerald-600" />,
      title: "Global Design Partners",
      desc: "Collaborating with world-renowned consultants like Benoy (Hong Kong) and Hearth Education Advisors.",
      color: "from-emerald-50 to-teal-50",
      border: "border-emerald-200",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "H-RERA Certified Portfolio",
      desc: "Full transparency with RERA-registered phases, ensuring complete safety and peace of mind for every investor.",
      color: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.6em] text-emerald-600 font-bold mb-4 block">The Pillars of Excellence</span>
          <h2 className="text-5xl md:text-7xl font-bold font-serif text-gray-900 mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Global Masters. <span className="italic text-emerald-700">Trusted Legacies.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Living Luxura curates Gurugram's most prestigious residential enclaves, developed by industry leaders 
            recognized for their IGBC pre-certified sustainability and architectural innovation.
          </p>
        </motion.div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {developers.map((dev, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-500"
            >
              <Building2 className={`w-8 h-8 mb-6 ${dev.accent}`} />
              <h4 className="font-serif font-bold text-slate-900 text-2xl mb-1">{dev.name}</h4>
              <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-4">{dev.heritage}</p>
              <div className="h-px w-12 bg-slate-100 mb-4 group-hover:w-full transition-all duration-500" />
              <p className="text-sm text-slate-500 leading-relaxed">{dev.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Trust Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative p-10 bg-gradient-to-br ${item.color} rounded-[2.5rem] border ${item.border} transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">{item.desc}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Verified Portfolio Detail
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
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full mb-8">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest">RERA Compliant Development Portfolio</span>
          </div>
          <p className="text-3xl md:text-4xl italic text-slate-800 font-serif leading-snug">
            "We don't just build residences; we secure <br className="hidden md:block" />
            <span className="text-emerald-700 font-bold not-italic">legacies of trust and timeless value.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}