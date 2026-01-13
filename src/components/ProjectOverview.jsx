import { motion } from "framer-motion";
// Performance-optimized icon imports
import Trees from "lucide-react/dist/esm/icons/trees";
import Home from "lucide-react/dist/esm/icons/home";
import Trophy from "lucide-react/dist/esm/icons/trophy";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Ruler from "lucide-react/dist/esm/icons/ruler";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import overImg from "../Assets/Overview.png";

export default function ProjectOverview() {
  // Aggregate stats including the new Serenity Hills scale
  const stats = [
    { label: "Portfolio Scale", value: "35+ Acres" },
    { label: "Design Philosophy", value: "Shibui" },
    { label: "Green Reserve", value: "20+ Acres" }, // From Serenity Hills data
    { label: "Certification", value: "Platinum" }, // IGBC Platinum
  ];

  const highlights = [
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Serenity Hills Estate",
      desc: "A massive 25+ acre sanctuary by Emaar featuring an 8-acre central green zone and a tranquil waterfront promenade.",
      color: "#D6AD60", // Gold
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Benoy HK Mastery",
      desc: "Elaira Residences, designed by world-renowned Benoy Hong Kong, featuring iconic 34-floor high-rise towers.",
      color: "#B68D40", // Tan
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Royal Clubhouses",
      desc: "Access the city's largest lifestyle hubs with ~75,000+ sq. ft. clubhouses at Elaira and Serenity Hills.",
      color: "#D6AD60",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Elite Inventory",
      desc: "Curated 3 BHK to Duplex 5 BHK residences across Gurugram's most coveted sectors 53, 80, and 86.",
      color: "#B68D40",
    },
  ];

  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#0D20617",
    cream: "#F4F1E1",
    tan: "#B68D40",
  };

  return (
    <section id="overview" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2
              className="text-sm uppercase tracking-[0.4em] font-bold mb-4"
              style={{ color: COLORS.gold }}
            >
              The Royal Portfolio
            </h2>
            <h3
              className="text-4xl md:text-6xl font-serif font-bold leading-tight"
              style={{ color: COLORS.charcoal }}
            >
              Where the{" "}
              <span
                className="italic font-light"
                style={{ color: COLORS.gold }}
              >
                Legacy Meets Luxury
              </span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-sm"
          >
            <p
              className="text-slate-500 leading-relaxed border-l-2 pl-6 font-light"
              style={{ borderLeftColor: COLORS.gold }}
            >
              Expanding to <strong>Sectors 53, 80, and 86</strong>. Our curated
              collection now features masterpieces by Emaar, Conscient, and
              Ashiana.
            </p>
          </motion.div>
        </div>

        {/* Project Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y mb-20"
          style={{ borderColor: `${COLORS.gold}33` }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p
                className="text-3xl md:text-4xl font-serif font-bold"
                style={{ color: COLORS.charcoal }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs uppercase tracking-widest mt-2 font-bold"
                style={{ color: COLORS.gold }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Immersive Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group relative"
          >
            <img
              src={overImg}
              alt="Serenity Hills Waterfront Promenade"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div
              className="absolute top-6 left-6 backdrop-blur-md px-4 py-2 rounded-full border"
              style={{
                backgroundColor: `${COLORS.charcoal}66`,
                borderColor: `${COLORS.cream}33`,
              }}
            >
              <p className="text-white text-[10px] font-bold uppercase tracking-widest">
                The Gold Corridor Collection
              </p>
            </div>
          </motion.div>
          <div className="lg:col-span-4 grid grid-rows-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon.png"
                alt="Royal Interiors"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Dark Information Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-xl flex flex-col justify-center p-8 border-l-4"
              style={{
                backgroundColor: COLORS.charcoal,
                borderLeftColor: COLORS.gold,
              }}
            >
              <MapPin
                className="w-10 h-10 mb-4"
                style={{ color: COLORS.gold }}
              />
              <h4
                className="text-2xl font-serif font-bold mb-2"
                style={{ color: COLORS.charcoal }}
              >
                Strategic <span style={{ color: COLORS.gold }}>Legacy</span>
              </h4>

              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: COLORS.charcoal, opacity: 0.9 }}
              >
                Occupying the most coveted plots across Sector 53, 80, and 86,
                offering the ultimate addresses in Gurugram.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-slate-50 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-200"
              style={{ borderHoverColor: COLORS.gold }}
            >
              <div
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 transition-all group-hover:scale-110"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <h4
                className="text-xl font-serif font-bold mb-3"
                style={{ color: COLORS.charcoal }}
              >
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
