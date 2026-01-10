import { motion } from 'framer-motion';
import { Phone, Download, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ openPopup }) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full mb-8 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent leading-tight">
            The Pinnacle of Gurugram <br className="hidden md:block" /> Real Estate Awaits
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            From the wellness-themed Shibui life at <strong>Godrej SORA</strong> to the eco-luxe sanctuaries of <strong>Serenity Hills</strong>. Secure your place in the sun across Golf Course Road and the New Alpha Corridor.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-4 active:scale-95"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Consult a Portfolio Expert
          </button>

          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto bg-white text-slate-900 font-bold text-lg px-8 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-4 active:scale-95"
          >
            <Download className="w-6 h-6 group-hover:scale-110 transition-transform text-emerald-600" />
            Download Digital Brochure
          </button>

          <button 
            onClick={openPopup}
            className="group w-full lg:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-4 active:scale-95"
          >
            <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Request Private Site Visit
          </button>
        </motion.div>

        {/* Urgency and Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg italic text-emerald-200">
            Limited inventory release at Sector 53 — Exclusive 4 BHK residences starting at ₹11.26 Cr onwards.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 opacity-70">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> HRERA No: 976/708/2025/79
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-500 rounded-full" />
            <div className="text-sm text-gray-300">
              Registration Amount: ₹11,00,000/- for Priority Allotment
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}