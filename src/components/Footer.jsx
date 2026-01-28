import { motion } from "framer-motion";
import Phone from "lucide-react/dist/esm/icons/phone";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Building2 from "lucide-react/dist/esm/icons/building-2";
import Globe from "lucide-react/dist/esm/icons/globe";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const COLORS = {
    tan: "#B68D40", // Tan
    cream: "#F4F1E1", // Cream
    charcoal: "#121C17", // Charcoal
    gold: "#D6AD60", // Gold
    white: "#FFFFFF",
  };

  return (
    <footer
      className="pt-20 pb-10 overflow-hidden"
      style={{ backgroundColor: COLORS.charcoal }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity & SEO Hook */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: COLORS.gold }}
              >
                <Building2
                  style={{ color: COLORS.charcoal }}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="text-3xl font-serif font-bold tracking-tight text-white">
                Living Luxura
              </h3>
            </div>
            <p
              className="leading-relaxed max-w-md mb-10 text-sm font-light italic"
              style={{ color: COLORS.cream, opacity: 0.8 }}
            >
              Curating Gurugram's finest residential masterpieces. From the
              wellness-inspired{" "}
              {/* <strong style={{ color: COLORS.gold }}>
                Godrej SORA (Sector 53)
              </strong>{" "} */}
              to the sustainable greens of{" "}
              <strong style={{ color: COLORS.gold }}>
                Serenity Hills (Emaar)
              </strong>
              , the global design of{" "}
              <strong style={{ color: COLORS.gold }}>Elaira (Conscient)</strong>
              , and <strong style={{ color: COLORS.gold }}>Suncity</strong>.
            </p>
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em]"
                style={{ color: COLORS.gold }}
              >
                <ShieldCheck className="w-4 h-4" />
                H-RERA Registered Portfolio
              </div>
              {/* <div
                className="flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em]"
                style={{ color: COLORS.cream, opacity: 0.6 }}
              >
                <Globe className="w-4 h-4" />
                Sectors 53, 78, 80 & 86, Gurugram
              </div> */}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4
              className="text-xl font-serif font-bold mb-10 italic"
              style={{ color: COLORS.gold }}
            >
              Portfolio Concierge
            </h4>
            <div className="space-y-8">
              <a
                href="tel:+919311594047"
                className="flex items-start gap-5 group"
              >
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    borderColor: `${COLORS.tan}44`,
                    backgroundColor: `${COLORS.white}05`,
                  }}
                >
                  <Phone
                    className="w-5 h-5 transition-colors duration-500"
                    style={{ color: COLORS.tan }}
                  />
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase font-bold tracking-[0.2em] mb-1"
                    style={{ color: COLORS.tan }}
                  >
                    Direct Hotline
                  </p>
                  <p
                    className="text-xl font-bold transition-colors group-hover:text-[#D6AD60]"
                    style={{ color: COLORS.white }}
                  >
                    +91 92115 22011
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: `${COLORS.tan}44`,
                    backgroundColor: `${COLORS.white}05`,
                  }}
                >
                  <MapPin className="w-5 h-5" style={{ color: COLORS.tan }} />
                </div>
                <div>
                  <p
                    className="text-[10px] uppercase font-bold tracking-[0.2em] mb-1"
                    style={{ color: COLORS.tan }}
                  >
                    Visit Us
                  </p>
                  <p
                    className="font-medium text-sm leading-relaxed"
                    style={{ color: COLORS.cream }}
                  >
                    Gurugram, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3">
            {/* Heading styled with brand Gold #D6AD60 */}
            <h4
              className="text-xl font-serif font-bold mb-10 italic"
              style={{ color: COLORS.gold }}
            >
              Navigation
            </h4>

            <ul className="space-y-5 text-sm font-medium">
              {[
                { name: "Properties", id: "properties" }, 
                { name: "Gallery", id: "gallery" },
                { name: "Amenities", id: "amenities" },
                { name: "Contact Us", id: "contact" },
                { name: "Developer Legacy", id: "trust" },
                { name: "Legal & Terms", id: "terms" },
              ].map((link) => (
                <li
                  key={link.name}
                  className="transition-all duration-300 hover:translate-x-2 cursor-pointer"
                  style={{ color: COLORS.cream }}
                >
                  <a
                    href={`#${link.id}`}
                    className="hover:text-[#D6AD60] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Legal */}
        <div
          className="border-t pt-10"
          style={{ borderColor: `${COLORS.tan}22` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <p
                className="text-[10px] leading-relaxed italic uppercase tracking-wider font-medium"
                style={{ color: COLORS.tan }}
              >
                RC/HARERA/GGM/3846/3441/2025/723 | RERA IDs:
                RC/REP/HARERA/GGM/976/708/2025/79 |
                RC/REP/HARERA/GGM/993/725/2025/96 |
                RC/REP/HARERA/GGM/917/649/2025/20.
              </p>
              <p
                className="text-[10px] leading-relaxed font-light"
                style={{ color: COLORS.cream, opacity: 0.4 }}
              >
                Disclaimer: The information on this website is for informational
                purposes only. "Living Luxura" acts as a marketing partner for
                Godrej Properties, Emaar India, Conscient, and Ashiana Housing.
                All artistic impressions and layouts are subject to change as
                per approved plans.
              </p>
            </div>
            <div className="md:text-right self-end">
              <div
                className="text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: COLORS.tan }}
              >
                © {currentYear} Living Luxura – Royal Real Estate Curation
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
