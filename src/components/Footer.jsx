import { motion } from 'framer-motion';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Building2 from 'lucide-react/dist/esm/icons/building-2';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-tight">Suncity Projects</h3>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              A legacy of crafting architectural marvels across India. Our Sector 78 project represents the next evolution of ultra-luxury living, combining wellness, sports, and low-density serenity.
            </p>
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5" />
              Fully RERA Compliant Development
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-serif font-bold mb-8 italic">Contact Sales</h4>
            <div className="space-y-6">
              <a href="tel:+919311594047" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all">
                  <Phone className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Direct Hotline</p>
                  <p className="text-white font-medium">+91 92115 22011</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Project Site</p>
                  <p className="text-white font-medium text-sm">Sector 78, Naurangpur, Gurugram, HR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-serif font-bold mb-8 italic">Experience</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#overview">Project Overview</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#units">Configuration</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#pricing">Price List</a></li>
              <li className="hover:text-emerald-500 transition-colors cursor-pointer"><a href="#location">Connectivity</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-slate-900 pt-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-slate-600 max-w-3xl leading-relaxed italic">
              Disclaimer: All images, sizes, and specifications are indicative and subject to change. This is not an official offer for sale. The project will be marketed in strict accordance with the Real Estate (Regulation and Development) Act, 2016.
            </p>
            <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest whitespace-nowrap">
              © {currentYear} Suncity Projects Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}