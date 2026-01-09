import { motion } from 'framer-motion';
import Camera from 'lucide-react/dist/esm/icons/camera';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';

// Local Video Imports
import vd1 from '../Assets/VD1.mp4';
import vd2 from '../Assets/VD2.mp4';

const galleryItems = [
  // FEATURED: New Serenity Hills Walkthrough (YouTube Link Support)
  { 
    src: "https://youtu.be/WYWZvjNQ16w", 
    alt: "Serenity Hills | Official Walkthrough | Emaar India", 
    category: "Walkthrough", 
    type: "external_video", 
    featured: true 
  },

  // FEATURED: Ashiana Aaroham Masterplan
  { 
    src: "https://propertyingurugrams.com/wp-content/uploads/2025/12/Suncity-Monarch-Sector-78-Gurgaon.webp", 
    alt: "Ashiana Aaroham Site Map & Masterplan [cite: 13]", 
    category: "Masterplan", 
    type: "image", 
    featured: true 
  },

  // Local Video Items
  { src: vd1, alt: "Suncity Monarch Cinematic Tour", category: "Video", type: "video", featured: false },
  { src: vd2, alt: "Lifestyle & Sports Arena Walkthrough", category: "Video", type: "video", featured: false },
  
  // Floor Plans & Internal Layouts
  { 
    src: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg", 
    alt: "4 BHK + 4 Toilet (Type-1) 1521 sqft Layout [cite: 289, 292]", 
    category: "Floor Plan", 
    type: "image", 
    featured: true 
  },
  { 
    src: "https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon-1024x645.png", 
    alt: "3 BHK + 3 Toilet (Type-3) 1259 sqft Layout [cite: 327, 330]", 
    category: "Floor Plan", 
    type: "image", 
    featured: false 
  },

  // Lifestyle & Amenities
  { src: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg", alt: "75,000 Sq. Ft. Designer Clubhouse", category: "Clubhouse", type: "image", featured: false },
  { src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/8/Landmark-Skyvue-Sector-103_600_900.jpg.webp", alt: "Infinity Edge Pool & Kids Pool [cite: 98]", category: "Amenities", type: "image", featured: false },
  { src: "https://www.affordablehomesgurgaon.in/wp-content/uploads/2023/01/M3M-Antalya-Hills-Multiple-Courts-1024x576.jpg", alt: "International Standard Sports Arena [cite: 30]", category: "Sports", type: "image", featured: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl mb-6 shadow-sm"
          >
            <Camera className="w-8 h-8 text-emerald-600" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            A Glimpse of <span className="italic text-emerald-700">Perfection</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Explore the curated Kid-Centric residences at Aaroham and the sustainable IGBC Platinum community at Serenity Hills.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`relative group overflow-hidden rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-700 ${
                item.featured ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              {/* Conditional Rendering for Image, Local Video, or External Link */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : item.type === "external_video" ? (
                <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                  <img 
                    src="https://img.youtube.com/vi/WYWZvjNQ16w/maxresdefault.jpg" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    alt="Video Thumbnail"
                  />
                  <a 
                    href={item.src} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10 bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 hover:bg-emerald-600 transition-colors group/btn"
                  >
                    <ExternalLink className="w-8 h-8 text-white group-hover/btn:scale-110 transition-transform" />
                  </a>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h4 className="text-white font-serif text-sm md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700 leading-tight">
                  {item.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}