import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Camera from 'lucide-react/dist/esm/icons/camera';
import Play from 'lucide-react/dist/esm/icons/play';
import X from 'lucide-react/dist/esm/icons/x';
import Maximize from 'lucide-react/dist/esm/icons/maximize';

// Local Video Imports
import vd1 from '../Assets/VD1.mp4';

const galleryItems = [
  { 
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80", 
    alt: "Godrej SORA | Lake & Sky Horizons | Sector 53", 
    category: "View", 
    type: "image", 
    featured: true 
  },
  { 
    src: "WYWZvjNQ16w", 
    alt: "Serenity Hills | Official Walkthrough | Emaar India", 
    category: "Walkthrough", 
    type: "external_video", 
    featured: true 
  },
  { 
    src: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg", 
    alt: "4 BHK XL (Type 2) | Luxury Wellness Layout", 
    category: "Floor Plan", 
    type: "image", 
    featured: false 
  },
  { src: vd1, alt: "Suncity Monarch Cinematic Tour", category: "Video", type: "video", featured: false },
  { 
    src: "https://propertyingurugrams.com/wp-content/uploads/2025/12/Suncity-Monarch-Sector-78-Gurgaon.webp", 
    alt: "Portfolio Masterplan & Site Layout", 
    category: "Masterplan", 
    type: "image", 
    featured: true 
  },
  { 
    src: "https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon-1024x645.png", 
    alt: "3 BHK Premium 2771 sqft | Japanese-Inspired Design", 
    category: "Floor Plan", 
    type: "image", 
    featured: false 
  },
  { 
    src: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg", 
    alt: "75,000 Sq. Ft. Designer Clubhouse Collection", 
    category: "Clubhouse", 
    type: "image", 
    featured: true 
  },
  { 
    src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/8/Landmark-Skyvue-Sector-103_600_900.jpg.webp", 
    alt: "Cherry Blossom Flora & Zen Seating", 
    category: "Wellness", 
    type: "image", 
    featured: false 
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17", // Darker palette alignment
    midnight: "#0D2061",
    cream: "#F4F1E1",
    white: "#FFFFFF",
    bgCream: "#FDFCF7"
  };

  return (
    <section id="gallery" className="py-24 overflow-hidden" style={{ backgroundColor: COLORS.bgCream }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] mb-8 shadow-lg"
            style={{ backgroundColor: COLORS.charcoal }}
          >
            <Camera className="w-8 h-8" style={{ color: COLORS.gold }} />
          </motion.div>
          
          <motion.span 
            className="block text-xs uppercase tracking-[0.5em] font-bold mb-4"
            style={{ color: COLORS.gold }}
          >
            Visual Portfolio
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight" style={{ color: COLORS.charcoal }}>
            A Glimpse of <span className="italic font-light" style={{ color: COLORS.gold }}>Perfection</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed" style={{ color: COLORS.charcoal, opacity: 0.8 }}>
            Explore the Japanese-inspired Shibui life at Godrej SORA and the sustainable IGBC Platinum community at Serenity Hills.
          </p>
        </div>

        {/* Masonry Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => item.type === 'image' && setSelectedImg(item)}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-700 cursor-pointer ${
                item.featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              {item.type === "video" ? (
                <video src={item.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              ) : item.type === "external_video" ? (
                <div className="w-full h-full bg-black relative">
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${item.src}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
                    title={item.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; compute-pressure"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <>
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/40">
                    <Maximize className="w-4 h-4 text-white" />
                  </div>
                </>
              )}

              {/* Royal Hover Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end pointer-events-none"
                style={{ background: `linear-gradient(to top, ${COLORS.charcoal}F2, transparent)` }}
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ color: COLORS.gold }}>
                  {item.category}
                </span>
                <h4 className="font-serif text-sm md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 leading-tight" style={{ color: COLORS.cream }}>
                  {item.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox for Images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
            style={{ backgroundColor: 'rgba(18, 28, 23, 0.98)' }}
          >
            <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform">
                <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={selectedImg.src} className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border-4"
              style={{ borderColor: COLORS.gold }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}