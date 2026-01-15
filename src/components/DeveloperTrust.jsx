import { Building2, Shield, Award, Globe, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function DeveloperTrust() {
  const COLORS = {
    tan: "#B68D40", // Tan
    cream: "#F4F1E1", // Cream
    charcoal: "#121C17", // Charcoal (Dark Green-Black)
    gold: "#D6AD60", // Gold
    white: "#FFFFFF",
    bgCream: "#FDFCF7", // Soft secondary cream
  };

  const developers = [
    {
      name: "Emaar India",
      heritage: "Global Legacy",
      desc: "The creators of the Burj Khalifa, bringing world-class engineering and the 'Emaar Life' philosophy to iconic Gurugram developments like Serenity Hills.",
    },
    {
      name: "DLF Limited",
      heritage: "Since 1946",
      desc: "The architects of modern Gurugram with a nearly 80-year legacy, defining super-luxury living through the legendary Golf Course Road ecosystem.",
    },
    {
      name: "Godrej Properties",
      heritage: "Since 1897",
      desc: "A 129-year legacy of trust, blending historic sustainability with Japanese-inspired 'Shibui' wellness residences at Godrej SORA.",
    },
    {
      name: "M3M India",
      heritage: "Magnificence in Trinity",
      desc: "Redefining the luxury skyline with speed and scale, M3M is known for futuristic designs and ultra-luxury smart-home enclaves across the Dwarka Expressway.",
    },
    {
      name: "Ashiana Housing",
      heritage: "Kid-Centric Experts",
      desc: "Voted India's No. 1 Care Provider, specializing in curated Kid-Centric Residences designed to nurture growth, creativity, and active childhoods.",
    },
  ];

  const highlights = [
    {
      icon: <Award className="w-10 h-10" style={{ color: COLORS.gold }} />,
      title: "Platinum Pre-Certified",
      desc: "Sustainability-focused developments including Godrej SORA and Serenity Hills' IGBC Platinum Pre-Certifications.",
    },
    {
      icon: <Globe className="w-10 h-10" style={{ color: COLORS.gold }} />,
      title: "Global Design Partners",
      desc: "Collaborating with world-renowned consultants like Benoy (Hong Kong) and Japanese design philosophies.",
    },
    {
      icon: <Shield className="w-10 h-10" style={{ color: COLORS.gold }} />,
      title: "H-RERA Certified Portfolio",
      desc: "Full transparency with RERA-registered phases, ensuring complete safety for every elite investor.",
    },
  ];

  return (
    <section
      className="py-24 overflow-hidden"
      style={{ backgroundColor: COLORS.bgCream }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="text-xs uppercase tracking-[0.6em] font-bold mb-4 block"
            style={{ color: COLORS.tan }}
          >
            The Pillars of Excellence
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold font-serif mb-8"
            style={{ color: COLORS.charcoal }}
          >
            Global Masters.{" "}
            <span className="italic font-light" style={{ color: COLORS.gold }}>
              Trusted Legacies.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: COLORS.charcoal, opacity: 0.8 }}
          >
            Living Luxura curates Gurugram's most prestigious residential
            enclaves, developed by industry leaders recognized for their
            sustainable innovation and 100+ years of collective trust.
          </p>
        </motion.div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] shadow-sm border transition-all duration-500 bg-white hover:shadow-xl"
              style={{ borderColor: `${COLORS.tan}20` }}
            >
              <Building2
                className="w-6 h-6 mb-4"
                style={{ color: COLORS.tan }}
              />
              <h4
                className="font-serif font-bold text-lg mb-1 leading-tight"
                style={{ color: COLORS.charcoal }}
              >
                {dev.name}
              </h4>
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-4"
                style={{ color: COLORS.tan }}
              >
                {dev.heritage}
              </p>
              <div
                className="h-px w-8 mb-4 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: COLORS.gold }}
              />
              <p
                className="text-xs leading-relaxed font-light"
                style={{ color: COLORS.charcoal, opacity: 0.7 }}
              >
                {dev.desc}
              </p>
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
              className="relative p-10 rounded-[2.5rem] border transition-all duration-300 bg-white"
              style={{ borderColor: `${COLORS.tan}33` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8"
                style={{ backgroundColor: COLORS.cream }}
              >
                {item.icon}
              </div>
              <h3
                className="text-2xl font-serif font-bold mb-4"
                style={{ color: COLORS.charcoal }}
              >
                {item.title}
              </h3>
              <p
                className="leading-relaxed text-sm mb-8 font-light"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                {item.desc}
              </p>

              <div
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"
                style={{ color: COLORS.tan }}
              >
                <CheckCircle2 className="w-3 h-3" /> Verified Portfolio Detail
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
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full mb-8 shadow-lg"
            style={{ backgroundColor: COLORS.charcoal }}
          >
            <Shield className="w-4 h-4" style={{ color: COLORS.gold }} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              HRERA Registered Portfolio
            </span>
          </div>
          <p
            className="text-2xl md:text-4xl italic font-serif leading-snug"
            style={{ color: COLORS.charcoal }}
          >
            "A century of trust, <br className="hidden md:block" />
            <span
              className="font-bold not-italic"
              style={{ color: COLORS.gold }}
            >
              securing legacies for generations.
            </span>
            "
          </p>
        </motion.div>
      </div>
    </section>
  );
}
