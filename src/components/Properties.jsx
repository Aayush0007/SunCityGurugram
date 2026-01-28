import { useState, useMemo } from 'react'; // Added useMemo for efficiency
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/propertyData';
import PropertyDetailView from './PropertyDetailView';

export default function Properties({ openPopup }) {
  const [activeDev, setActiveDev] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Dynamically fetch unique developer names from propertyData
  const developers = useMemo(() => {
    const uniqueDevelopers = [
      "All", 
      ...new Set(properties.map(p => p.developer))
    ];
    return uniqueDevelopers;
  }, []);

  const filtered = activeDev === "All" 
    ? properties 
    : properties.filter(p => p.developer === activeDev);

  if (selectedProperty) {
    return <PropertyDetailView 
             property={selectedProperty} 
             onBack={() => setSelectedProperty(null)} 
             openPopup={openPopup} 
           />;
  }

  return (
    <section id="properties" className="py-20 bg-[#FDFCF7]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#121C17] mb-12 text-center italic">Featured Portfolio</h2>
        
        {/* Dynamic Developer Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {developers.map(dev => (
            <button
              key={dev}
              onClick={() => setActiveDev(dev)}
              className={`px-8 py-2 rounded-full border text-xs uppercase tracking-widest transition-all ${
                activeDev === dev 
                  ? "bg-[#121C17] text-white" 
                  : "border-[#D6AD60] text-[#121C17] hover:bg-[#D6AD60]/10"
              }`}
            >
              {dev}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map((prop) => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#D6AD60]/10 flex flex-col"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={prop.image} 
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={prop.name} 
                  />
                  <div className="absolute top-4 left-4 bg-[#121C17]/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-[9px] text-white uppercase tracking-widest font-bold">
                      {prop.developer}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-serif text-[#121C17]">{prop.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 italic">{prop.location}</p>
                  
                  <div className="mt-6 pt-6 border-t border-[#D6AD60]/10 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#B68D40] font-bold">Starting from</span>
                      <span className="font-bold text-[#121C17]">{prop.price}</span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProperty(prop)}
                      className="text-xs uppercase font-bold tracking-tighter text-[#D6AD60] border-b-2 border-[#D6AD60] pb-1 hover:text-[#121C17] hover:border-[#121C17] transition-all"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        
      </div>
    </section>
  );
}