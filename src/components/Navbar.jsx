import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Phone from "lucide-react/dist/esm/icons/phone";
import { trackEvent } from "../utils/analytics";

export default function Navbar({ openPopup }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Simplified Menu: Removed individual 'Residences' and 'Pricing' 
  // since those are now dynamic within the 'Properties' section.
  const menuItems = [
    { name: "Properties", id: "properties" }, // New consolidated properties link
    { name: "Overview", id: "overview" },
    { name: "Amenities", id: "amenities" },
    { name: "Location", id: "location" },
    { name: "Contact Us", id: "contact" },
  ];

  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    cream: "#F4F1E1",
    white: "#FFFFFF",
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-[#D6AD60]/10"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 flex justify-between items-center">
          
          {/* Logo Identity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => scrollTo("hero")}
          >
            <div className="flex items-center gap-0">
              <span
                className="font-serif font-bold transition-colors duration-300 flex items-center"
                style={{ color: isScrolled ? COLORS.charcoal : COLORS.white }}
              >
                <span className="text-5xl md:text-6xl leading-none" style={{ color: COLORS.gold }}>L</span>
                <div className="flex flex-col justify-center leading-[0.75]">
                  <span className="text-lg md:text-xl tracking-[0.2em] uppercase ml-[-2px]">iving</span>
                  <span className="text-lg md:text-xl tracking-[0.15em] uppercase ml-1" style={{ color: COLORS.gold }}>uxura</span>
                </div>
              </span>
            </div>
            <span
              className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] font-bold mt-2 transition-colors duration-300"
              style={{ color: COLORS.gold }}
            >
              EMAAR | SUNCITY | CONSCIENT
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-[#D6AD60] relative group ${
                  isScrolled ? "text-[#121C17]" : "text-white/90"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D6AD60] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                trackEvent({ action: "cta_click", category: "engagement", label: "navbar_priority" });
                openPopup();
              }}
              className={`px-10 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 active:scale-95 flex items-center gap-2 border ${
                isScrolled
                  ? "bg-[#121C17] text-white border-[#121C17] hover:bg-[#D6AD60]"
                  : "bg-transparent text-white border-white/30 hover:bg-white hover:text-[#121C17]"
              }`}
            >
              <Phone size={12} />
              Enquire Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-[#121C17]" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] lg:hidden flex flex-col p-10 backdrop-blur-2xl bg-[#121C17]/95"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif font-bold text-2xl text-[#F4F1E1]">Living Luxura</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-[#D6AD60]"><X size={32} /></button>
            </div>

            <div className="flex flex-col space-y-6 text-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-serif italic text-[#F4F1E1] hover:text-[#D6AD60]"
                >
                  {item.name}
                </motion.button>
              ))}
              <button 
                onClick={() => { openPopup(); setIsOpen(false); }}
                className="mt-10 w-full py-5 rounded-full bg-[#D6AD60] text-[#121C17] font-bold uppercase tracking-widest"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}