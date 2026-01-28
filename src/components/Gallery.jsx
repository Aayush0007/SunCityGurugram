import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Camera from 'lucide-react/dist/esm/icons/camera';
import X from 'lucide-react/dist/esm/icons/x';
import Maximize from 'lucide-react/dist/esm/icons/maximize';

// Local Asset Import
const vd1 = '../Assets/VD1.mp4';
// import imgMain from '../Assets/Img.png';

const galleryItems = [
  { 
    src: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg", 
    alt: "1.25 Lakh Sq. Ft. Signature Clubhouse | Suncity Monarch", 
    category: "Architecture", 
    type: "image", 
    featured: true 
  },
  { 
    src: "WYWZvjNQ16w", 
    alt: "Serenity Hills | 8-Acre Central Greens Walkthrough", 
    category: "Walkthrough", 
    type: "external_video", 
    featured: true 
  },
  // { 
  //   src: imgMain, 
  //   alt: "Bespoke Interiors | The Gold Corridor Collection", 
  //   category: "Interiors", 
  //   type: "image", 
  //   featured: false 
  // },
  { 
    src: vd1, 
    alt: "Suncity Monarch | Cinematic Site Progress", 
    category: "Progress", 
    type: "video", 
    featured: false 
  },
  { 
    src: "https://www.green-valley.site/assets/img/g8.webp", 
    alt: "IGBC Platinum Sustainable Landscape | Emaar India", 
    category: "Wellness", 
    type: "image", 
    featured: true 
  },
  { 
    src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/17/full/20240617124554.jpg", 
    alt: "3.15 Acre Mega Sports Complex | Championship Courts", 
    category: "Lifestyle", 
    type: "image", 
    featured: false 
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    cream: "#F4F1E1",
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
            style={{ backgroundColor: COLORS.charcoal }}
          >
            <Camera className="w-6 h-6" style={{ color: COLORS.gold }} />
          </motion.div>
          
          <motion.span 
            className="block text-[10px] uppercase tracking-[0.5em] font-bold mb-4"
            style={{ color: COLORS.gold }}
          >
            Visual Portfolio
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" style={{ color: COLORS.charcoal }}>
            A Glimpse of <span className="italic font-light" style={{ color: COLORS.gold }}>Perfection</span>
          </h2>
          <p className="max-w-xl mx-auto text-base font-light text-slate-500">
            From the sprawling central greens of Emaar to the record-breaking sports infrastructure of Suncity Monarch.
          </p>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => item.type === 'image' && setSelectedImg(item)}
              className={`relative group overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-700 ${
                item.type === 'image' ? 'cursor-pointer' : ''
              } ${
                item.featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              {/* Media Types */}
              {item.type === "video" ? (
                <video src={item.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
              ) : item.type === "external_video" ? (
                <div className="w-full h-full bg-black relative">
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${item.src}?autoplay=1&mute=1&loop=1&playlist=${item.src}&controls=0&modestbranding=1`}
                    title={item.alt}
                    allow="autoplay; encrypted-media"
                  ></iframe>
                  <div className="absolute inset-0 bg-transparent z-10" /> {/* Click overlay shield */}
                </div>
              ) : (
                <>
                  <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/40">
                    <Maximize className="w-4 h-4 text-white" />
                  </div>
                </>
              )}

              {/* Hover Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end pointer-events-none"
                style={{ background: `linear-gradient(to top, ${COLORS.charcoal}E6, transparent)` }}
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: COLORS.gold }}>
                  {item.category}
                </span>
                <h4 className="font-serif text-base text-white leading-tight">
                  {item.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-[#121C17]/98 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              src={selectedImg.src} 
              className="max-w-full max-h-[80vh] rounded-[2rem] shadow-2xl border-2 border-[#D6AD60]/30"
            />
            <p className="absolute bottom-10 text-white font-serif italic text-lg">{selectedImg.alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}