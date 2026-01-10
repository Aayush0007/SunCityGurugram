import { motion } from 'framer-motion';
import Phone from 'lucide-react/dist/esm/icons/phone';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity & SEO Hook */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">Living Luxura</h3>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8 text-sm">
              Curating Gurugram's finest residential masterpieces. From the wellness-inspired <strong>Godrej SORA (Sector 53)</strong> to the sustainable greens of <strong>Serenity Hills (Emaar)</strong>, the global design of <strong>Elaira (Conscient)</strong>, and <strong>Aaroham (Ashiana)</strong>.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                H-RERA Registered Portfolio
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                <Globe className="w-4 h-4" />
                Sectors 53, 78, 80 & 86, Gurugram
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-serif font-bold mb-8 italic">Portfolio Concierge</h4>
            <div className="space-y-6">
              <a href="tel:+919311594047" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all">
                  <Phone className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Direct Hotline</p>
                  <p className="text-white font-medium">+91 93115 94047</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Visit Us</p>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    Sector 53, Golf Course Road /<br />
                    Sector 78, Naurangpur, Gurugram
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-serif font-bold mb-8 italic">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#overview">Project Portfolio</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#units">Residences</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#pricing">Payment Plans</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#trust">Developer Legacy</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#terms">Legal & Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Legal */}
        <div className="border-t border-slate-900 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-[10px] text-slate-600 leading-relaxed italic uppercase tracking-tighter">
                RERA IDs: RC/REP/HARERA/GGM/976/708/2025/79 | RC/REP/HARERA/GGM/993/725/2025/96 | RC/REP/HARERA/GGM/917/649/2025/20 | 117 of 2025.
              </p>
              <p className="text-[10px] text-slate-600 leading-relaxed italic">
                Disclaimer: The information on this website is for informational purposes only. "Living Luxura" acts as a marketing partner for Godrej Properties, Emaar India, Conscient, and Ashiana Housing. All artistic impressions and layouts are subject to change as per approved plans.
              </p>
            </div>
            <div className="md:text-right">
              <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                © {currentYear} Living Luxura – Luxury Real Estate Marketing
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}