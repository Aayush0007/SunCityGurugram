import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Share2,
  MapPin,
  ShieldCheck,
  Info,
  DollarSign,
  Image as ImageIcon,
  Star,
  List,
  HelpCircle,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Play,
  Camera,
  Maximize,
  Mail,
  Copy,
  Check,
} from "lucide-react";

export default function PropertyDetailView({ property, onBack, openPopup }) {
  const [showShare, setShowShare] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [copied, setCopied] = useState(false);

  // Property-specific deep link
  const propertyUrl = `${window.location.origin}/#${property.id}`;
  const shareTitle = `Explore ${property.name} - Luxury Residences via Living Luxura`;

  // Sync Popup with URL Hash
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#enquire-now") openPopup();
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    const interval = setInterval(handleHash, 500);
    return () => {
      window.removeEventListener("hashchange", handleHash);
      clearInterval(interval);
    };
  }, [openPopup]);

  if (!property) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.name,
          text: shareTitle,
          url: propertyUrl,
        });
      } catch (err) {
        console.log("Cancelled");
      }
    } else {
      setShowShare(!showShare);
    }
  };

  const quickLinks = [
    { name: "Details", id: "p-details", icon: <Info size={14} /> },
    { name: "Pricing", id: "p-pricing", icon: <DollarSign size={14} /> },
    { name: "Amenities", id: "p-amenities", icon: <ShieldCheck size={14} /> },
    { name: "Gallery", id: "p-gallery", icon: <ImageIcon size={14} /> },
    { name: "Location", id: "p-location", icon: <MapPin size={14} /> },
    { name: "Specs", id: "p-specs", icon: <List size={14} /> },
    { name: "RERA", id: "p-rera", icon: <ShieldCheck size={14} /> },
    { name: "FAQs", id: "p-faqs", icon: <HelpCircle size={14} /> },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="fixed inset-0 z-[150] bg-white overflow-y-auto selection:bg-[#D6AD60] selection:text-[#121C17]"
    >
      {/* NAVBAR */}
      <nav className="sticky top-0 z-[160] bg-[#121C17] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-all text-[#D6AD60]">
            <X size={24} />
          </button>
          <div className="hidden md:block">
            <h2 className="font-serif italic text-lg leading-tight">{property.name}</h2>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#D6AD60]">{property.developer}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <div className="relative">
            <button onClick={handleNativeShare} className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-[#D6AD60] transition-colors">
              <Share2 size={16} /> <span className="hidden sm:inline">Share</span>
            </button>
            <AnimatePresence>
              {showShare && (
                <>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowShare(false)} className="fixed inset-0 bg-black/60 z-[165] lg:hidden backdrop-blur-sm" />
                  <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="fixed bottom-0 left-0 right-0 lg:absolute lg:bottom-auto lg:top-full lg:right-0 lg:left-auto mt-4 bg-white shadow-2xl rounded-t-[2.5rem] lg:rounded-3xl p-8 lg:p-6 flex flex-col gap-6 border-t lg:border border-[#D6AD60]/20 text-[#121C17] z-[170] w-full lg:min-w-[320px]">
                    <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto lg:hidden mb-2" />
                    <p className="text-[10px] uppercase tracking-widest font-black text-slate-400 border-b pb-2">Share Project</p>
                    <div className="flex justify-between items-center gap-2">
                      <a href={`https://wa.me/?text=${encodeURIComponent(shareTitle + " " + propertyUrl)}`} target="_blank" rel="noreferrer" className="p-4 bg-green-50 rounded-2xl text-green-600 hover:bg-green-600 hover:text-white transition-all"><MessageCircle size={22} /></a>
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`} target="_blank" rel="noreferrer" className="p-4 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={22} /></a>
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(propertyUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noreferrer" className="p-4 bg-sky-50 rounded-2xl text-sky-500 hover:bg-sky-500 hover:text-white transition-all"><Twitter size={22} /></a>
                      <a href={`mailto:?subject=${property.name}&body=${shareTitle} ${propertyUrl}`} className="p-4 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-600 hover:text-white transition-all"><Mail size={22} /></a>
                    </div>
                    <button onClick={handleCopy} className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#D6AD60] transition-all group">
                      <span className="text-[11px] font-mono truncate w-40 text-left text-slate-500">{propertyUrl}</span>
                      {copied ? <span className="text-[10px] font-bold text-green-600 uppercase flex items-center gap-1"><Check size={14} /> Copied</span> : <Copy size={14} className="text-[#D6AD60]" />}
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
          <button onClick={openPopup} className="bg-[#D6AD60] text-[#121C17] px-6 md:px-10 py-3 rounded-full text-[10px] uppercase font-black tracking-[0.2em] hover:bg-white transition-all shadow-lg active:scale-95">Enquire Now</button>
        </div>
      </nav>

      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-72 h-[calc(100vh-80px)] sticky top-20 border-r border-[#D6AD60]/10 p-10 bg-[#FDFCF7]">
          <p className="text-[10px] uppercase tracking-[0.4em] font-black text-[#B68D40] mb-10">Navigation</p>
          <div className="space-y-5">
            {quickLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-[#121C17] hover:text-[#D6AD60] transition-all w-full text-left group">
                <span className="p-2.5 bg-white rounded-xl shadow-sm border border-transparent group-hover:border-[#D6AD60]/20 transition-all">{link.icon}</span>
                {link.name}
              </button>
            ))}
          </div>
        </aside>

        {/* MAIN PANELS */}
        <main className="flex-1 p-6 md:p-20 space-y-32 max-w-[1100px]">
          
          {/* 1. OVERVIEW */}
          <section id="p-details" className="scroll-mt-32">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#D6AD60] font-black mb-6">Introduction</h3>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 text-[#121C17] leading-tight">{property.tagline}</h2>
            <p className="text-gray-600 leading-relaxed text-xl font-light max-w-3xl">{property.overview}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {property.specifications && Object.entries(property.specifications).slice(0,4).map(([key, val]) => (
                <div key={key} className="p-6 rounded-[2rem] bg-[#FDFCF7] border border-[#D6AD60]/20 flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-widest font-black text-[#B68D40] mb-2">{key}</p>
                  <p className="text-sm text-[#121C17] font-bold">{val}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. PRICING */}
          <section id="p-pricing" className="bg-[#121C17] text-white p-10 md:p-16 rounded-[4rem] shadow-2xl scroll-mt-32">
            <h3 className="text-3xl font-serif italic mb-12 text-[#D6AD60]">Investment Options</h3>
            <div className="space-y-8">
              {property.configurations?.map((conf, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">{conf.type}</p>
                    <p className="text-2xl font-bold">{conf.layout}</p>
                  </div>
                  <span className="text-2xl font-serif text-[#D6AD60]">{conf.size}</span>
                </div>
              ))}
            </div>
            <button onClick={openPopup} className="mt-16 w-full py-6 bg-[#D6AD60] text-[#121C17] rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-xl">Request Full Cost Sheet</button>
          </section>

          {/* 3. AMENITIES */}
          <section id="p-amenities" className="scroll-mt-32">
            <h2 className="text-4xl font-serif italic mb-16 text-[#121C17]">The Lifestyle Suite</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {property.amenities && Object.entries(property.amenities).map(([cat, list]) => (
                <div key={cat} className="p-10 rounded-[3rem] border border-[#D6AD60]/10 bg-[#FDFCF7] hover:shadow-xl transition-all">
                  <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#B68D40] mb-8">{cat}</h4>
                  <ul className="space-y-4">
                    {list.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D6AD60] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 4. GALLERY - CINEMATIC AUTOPLAY */}
          <section id="p-gallery" className="scroll-mt-32">
            <div className="flex items-center gap-5 mb-12">
              <div className="p-4 rounded-3xl bg-[#121C17] text-[#D6AD60]"><Camera size={28} /></div>
              <h2 className="text-4xl font-serif italic">Visual Portfolio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[350px]">
              {property.gallery?.videos?.map((vid, i) => (
                <motion.div key={`vid-${i}`} className="md:col-span-2 relative group overflow-hidden rounded-[3.5rem] shadow-2xl bg-[#121C17]">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] group-hover:scale-105">
                    <source src={vid} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#121C17]/60 pointer-events-none" />
                  <div className="absolute top-8 left-8"><span className="bg-[#D6AD60] text-[#121C17] text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest shadow-2xl flex items-center gap-2"><span className="w-2 h-2 bg-[#121C17] rounded-full animate-pulse" />Cinematic Tour</span></div>
                </motion.div>
              ))}
              {property.gallery?.images?.map((img, i) => (
                <motion.div key={`img-${i}`} onClick={() => setSelectedImg(img)} className="relative group overflow-hidden rounded-[3rem] shadow-xl cursor-pointer border border-[#D6AD60]/10 bg-white">
                  <img src={img} alt="Detail" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121C17] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-700 flex flex-col justify-end p-10">
                    <div className="flex items-center justify-between"><div><p className="text-[#D6AD60] text-[9px] font-black uppercase tracking-[0.4em] mb-2">High Precision Detail</p><p className="text-white font-serif italic text-2xl leading-tight">View Gallery</p></div><div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20"><Maximize size={22} className="text-white" /></div></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5. LOCATION - INTEGRATED GOOGLE MAP */}
          <section id="p-location" className="scroll-mt-32">
            <div className="bg-[#121C17] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[600px]">
              <div className="lg:w-2/5 p-12 md:p-20 flex flex-col justify-center text-white">
                <MapPin className="text-[#D6AD60] mb-8" size={48} />
                <h3 className="text-4xl font-serif italic mb-8 leading-tight">Prime Location</h3>
                <p className="text-xl opacity-80 leading-relaxed mb-10 font-light">{property.location}</p>
                <div className="space-y-8">
                  <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#D6AD60]">Micro-Market Landmarks</p>
                  <div className="flex flex-wrap gap-3">
                    {property.landmarks?.map((l, i) => (
                      <span key={i} className="text-[11px] border border-white/20 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md">{l}</span>
                    ))}
                  </div>
                </div>
                <button onClick={openPopup} className="mt-16 w-fit px-12 py-5 bg-[#D6AD60] text-[#121C17] rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get Site Coordinates</button>
              </div>
              <div className="lg:w-3/5 h-[450px] lg:h-auto relative">
                {property.mapUrl ? (
                  <iframe src={property.mapUrl} className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-1000" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                ) : (
                  <div className="w-full h-full bg-[#1A2621] flex items-center justify-center font-serif italic text-[#D6AD60]">Map Visualisation Unavailable</div>
                )}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#121C17] to-transparent hidden lg:block pointer-events-none" />
              </div>
            </div>
          </section>

          {/* 6. DETAILED SPECS */}
          <section id="p-specs" className="scroll-mt-32">
             <h3 className="text-3xl font-serif italic mb-12 text-[#121C17]">Technical Specifications</h3>
             <div className="grid md:grid-cols-2 gap-5">
                {property.specifications && Object.entries(property.specifications).map(([key, val]) => (
                  <div key={key} className="p-8 border rounded-[2rem] border-[#D6AD60]/10 flex justify-between items-center hover:bg-[#FDFCF7] transition-all group">
                    <span className="text-[10px] uppercase font-black text-[#D6AD60] tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">{key}</span>
                    <span className="text-sm text-[#121C17] font-bold text-right max-w-[60%] leading-tight">{val}</span>
                  </div>
                ))}
             </div>
          </section>

          {/* 7. FAQs */}
          <section id="p-faqs" className="pt-24 border-t scroll-mt-32">
            <h2 className="text-4xl font-serif italic mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5 max-w-4xl mx-auto">
              {property.faqs?.map((faq, i) => (
                <details key={i} className="group border-b border-[#D6AD60]/20 pb-6 cursor-pointer">
                  <summary className="list-none font-black text-xs uppercase tracking-[0.2em] flex justify-between items-center transition-all group-open:text-[#D6AD60]">
                    {faq.q} <span className="group-open:rotate-180 transition-transform text-xl">↓</span>
                  </summary>
                  <p className="mt-6 text-base text-gray-500 leading-relaxed font-light">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* FULL SCREEN LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[300] bg-[#121C17]/98 backdrop-blur-3xl flex flex-col items-center justify-center p-6" onClick={() => setSelectedImg(null)}>
            <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-all hover:rotate-90"><X size={56} strokeWidth={1} /></button>
            <motion.img initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} src={selectedImg} className="max-w-6xl w-full h-auto max-h-[85vh] rounded-[3rem] object-contain shadow-[0_0_100px_rgba(214,173,96,0.15)] border border-white/5" />
            <p className="mt-10 text-[#D6AD60] font-serif italic text-2xl tracking-widest">{property.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}