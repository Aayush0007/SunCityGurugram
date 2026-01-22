import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Phone from "lucide-react/dist/esm/icons/phone";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import { trackEvent } from "../utils/analytics";
import Logo from "/Logo.png";
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
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Overview", id: "overview" },
    { name: "Residences", id: "units" },
    { name: "Amenities", id: "amenities" },
    { name: "Pricing", id: "pricing" },
    { name: "Location", id: "location" },
    { name: "Contact Us", id: "contact" },
  ];

  // Design Constants
  const COLORS = {
    gold: "#D6AD60",
    midnight: "#0D20617",
    cream: "#F4F1E1",
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 border-b border-[#D6AD60]/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo("hero")}
          >
            <div className="flex flex-col">
              {/* Brand Name Section */}

              <div className="flex flex-col items-center">
                {/* The Brand Identity: High-Precision Stacked Logo */}
                <div
                  className="flex items-center gap-0 cursor-pointer group"
                  onClick={() => scrollTo("hero")}
                >
                  <span
                    className="font-serif font-bold transition-colors duration-300 flex items-center"
                    style={{ color: isScrolled ? "#121C17" : "#FFFFFF" }}
                  >
                    {/* Large anchor 'L' */}
                    <span
                      className="text-6xl md:text-7xl leading-none"
                      style={{ color: "#D6AD60" }}
                    >
                      L
                    </span>

                    {/* Precision-aligned text container */}
                    <div className="flex flex-col justify-center leading-[0.75]">
                      {/* 'IVING' tucked close to the L stem */}
                      <span className="text-xl md:text-2xl tracking-[0.1em] uppercase ml-[-2px] md:ml-[-4px]">
                        iving
                      </span>

                      {/* 'UXURA' with a small intentional space after the L stem */}
                      <span
                        className="text-xl md:text-2xl tracking-[0.05em] uppercase ml-1 md:ml-1.5"
                        style={{ color: "#D6AD60" }}
                      >
                        uxura
                      </span>
                    </div>
                  </span>
                </div>

                {/* Developer Names centered below */}
                <span
                  className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold mt-2 transition-colors duration-300 whitespace-nowrap"
                  style={{ color: "#D6AD60" }}
                >
                  EMAAR | DLF | GODREJ | M3M | ASHIANA
                </span>
              </div>

              {/* Animated Underline Effect */}
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-0.5"
                style={{ backgroundColor: "#D6AD60" }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-[12px] uppercase font-serif italic tracking-[0.1em] font-bold transition-all duration-300 hover:text-[#D6AD60] relative group ${
                  isScrolled ? "text-[#0D20617]" : "text-white/90"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D6AD60] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                trackEvent({
                  action: "cta_click",
                  category: "engagement",
                  label: "navbar_priority",
                });
                openPopup();
              }}
              className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all duration-300 active:scale-95 flex items-center gap-2 border ${
                isScrolled
                  ? "bg-[#D6AD60] text-[#0D20617] border-[#D6AD60] hover:bg-[#0D20617] hover:text-[#000000] shadow-lg shadow-[#D6AD60]/20"
                  : "bg-transparent text-white border-[#D6AD60]/50 hover:bg-[#D6AD60] hover:text-[#0D20617]"
              }`}
            >
              <Phone
                size={14}
                className={isScrolled ? "text-[#0D20617]" : "text-[#D6AD60]"}
              />
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-[#0D20617]" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="fixed inset-0 z-[70] lg:hidden flex flex-col p-8 backdrop-blur-2xl"
            style={{ backgroundColor: `${COLORS.midnight}F2` }} // Use hex with opacity 'F2' (95%)
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <span
                  className="font-serif font-bold text-2xl"
                  style={{ color: COLORS.cream }}
                >
                  Living Luxura
                </span>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase italic"
                  style={{ color: COLORS.gold }}
                >
                  Curated Royal Portfolio
                </span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                style={{ color: COLORS.gold }}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-4xl font-serif italic text-left border-b pb-6 transition-colors"
                  style={{
                    color: COLORS.cream,
                    borderBottomColor: `${COLORS.gold}1A`, // 10% opacity gold
                  }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  openPopup();
                  setIsOpen(false);
                }}
                className="mt-8 w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform"
                style={{
                  backgroundColor: COLORS.gold,
                  color: COLORS.midnight,
                  shadowColor: `${COLORS.gold}33`,
                }}
              >
                <Phone size={20} /> Enquire Now
              </motion.button>
            </div>

            <div className="mt-auto pt-10 text-center">
              <p
                className="text-[10px] uppercase tracking-widest opacity-40"
                style={{ color: COLORS.cream }}
              >
                The Pinnacle of Gurugram Living
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
