import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Tree-shaken imports for performance
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Phone from "lucide-react/dist/esm/icons/phone";
import Building2 from "lucide-react/dist/esm/icons/building-2";

import { trackEvent } from "../utils/analytics";

export default function Navbar({ openPopup }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Overview", id: "overview" },
    { name: "Units", id: "units" },
    { name: "Amenities", id: "amenities" },
    { name: "Pricing", id: "pricing" },
    { name: "Location", id: "location" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo("hero")}
          >
            <div className="relative overflow-hidden w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:rotate-[360deg] duration-700">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors duration-300 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Suncity Monarch
              </span>
              <span
                className={`text-[8px] uppercase tracking-[0.3em] font-bold mt-1 transition-colors duration-300 ${
                  isScrolled ? "text-emerald-600" : "text-emerald-400"
                }`}
              >
                Sector 78, Gurugram
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm uppercase tracking-widest font-semibold transition-all duration-300 hover:text-emerald-500 relative group ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            <button
              onClick={() => {
                trackEvent({
                  action: "cta_click",
                  category: "engagement",
                  label: "enquire-form",
                });
                openPopup();
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:shadow-xl hover:shadow-emerald-500/20 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Enquire Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 z-[70] lg:hidden flex flex-col justify-center items-center backdrop-blur-sm"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-serif text-white hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  openPopup();
                  setIsOpen(false);
                }}
                className="mt-6 bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl"
              >
                Contact Expert
              </motion.button>
            </div>

            <div className="absolute bottom-12 flex flex-col items-center text-white/40 italic text-sm">
              <Building2 className="w-6 h-6 mb-2 opacity-20" />
              <p>Redefining Ultra-Luxury Living</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
