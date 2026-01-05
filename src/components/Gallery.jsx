import { motion } from 'framer-motion';
import Camera from 'lucide-react/dist/esm/icons/camera';

// Local Video Imports
import vd1 from '../Assets/VD1.mp4';
import vd2 from '../Assets/VD2.mp4';

const galleryItems = [
  // Video Items added as featured content
  { src: vd1, alt: "Suncity Monarch Cinematic Tour", category: "Video", type: "video", featured: true },
  { src: vd2, alt: "Lifestyle & Sports Arena Walkthrough", category: "Video", type: "video", featured: true },
  
  // Existing Image Items
  { src: "https://propertyingurugrams.com/wp-content/uploads/2025/12/Suncity-Monarch-Sector-78-Gurgaon.webp", alt: "Suncity Monarch Aerial View", category: "Masterplan", type: "image", featured: true },
  { src: "https://imgcdn.houssed.com/assets/Files/Projects/4373/Project%20Image/39f679252d745fe5fd002fab88e57cc4.webp", alt: "Modern Towers Architecture", category: "Masterplan", type: "image", featured: false },
  { src: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg", alt: "Grand Clubhouse Lounge", category: "Clubhouse", type: "image", featured: false },
  { src: "https://assets.architecturaldigest.in/photos/61d81c6a72d576bd83b83926/3:2/w_1620,h_1080,c_limit/DLF%20Camellias%20Gurugram-1.jpg", alt: "Premium Social Spaces", category: "Clubhouse", type: "image", featured: true },
  { src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/8/Landmark-Skyvue-Sector-103_600_900.jpg.webp", alt: "Infinity Edge Pool", category: "Amenities", type: "image", featured: false },
  { src: "https://www.affordablehomesgurgaon.in/wp-content/uploads/2023/01/M3M-Antalya-Hills-Multiple-Courts-1024x576.jpg", alt: "Multi-Sport Arena", category: "Sports Arena", type: "image", featured: false },
  { src: "https://assets.savills.com/properties/IN3101053305/Trump-Tower-Gurgaon-Front-View-livingroom2-1024x724_l_gal.jpg", alt: "Ultra-Luxury Living Room", category: "Interiors", type: "image", featured: true },
  { src: "https://dalcore.in/wp-content/uploads/2025/09/Inside-falcon-1024x645.png", alt: "Master Bedroom View", category: "Interiors", type: "image", featured: false },
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
            Visualise your life at Suncity Monarch. From the 1.5L sq. ft. clubhouse to the expansive sports arena.
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
              {/* Conditional Rendering for Image or Video */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
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
                <h4 className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
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