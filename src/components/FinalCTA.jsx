import { motion } from 'framer-motion';
import { Phone, Download, Calendar, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-emerald-800 to-blue-900 text-white overflow-hidden relative">
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
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Your Ultra-Luxury Legacy Awaits in Sector-78, Gurugram
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto">
            Limited units available at pre-launch pricing — secure exclusive benefits for early registrants, including priority selection and special inaugural offers.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center"
        >
          <button className="group relative bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center gap-4">
            <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
            Speak to Our Property Expert
          </button>

          <button className="group relative bg-white text-blue-900 font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 flex items-center gap-4">
            <Download className="w-8 h-8 group-hover:scale-110 transition-transform" />
            Download Brochure & Floor Plans
          </button>

          <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-4">
            <Calendar className="w-8 h-8 group-hover:scale-110 transition-transform" />
            Schedule Exclusive Site Visit
          </button>
        </motion.div>

        {/* Urgency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg italic text-emerald-200">
            Act now — Exclusive pre-launch advantages for the first registrants only.
          </p>
          <p className="text-sm mt-4 text-gray-300">
            Fully RERA Compliant • Transparent Pricing • Timely Delivery Assured
          </p>
        </motion.div>
      </div>
    </section>
  );
}