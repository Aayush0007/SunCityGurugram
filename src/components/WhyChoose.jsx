import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, MapPin, Sparkles, Leaf, ArrowUpRight, GraduationCap } from 'lucide-react';

const reasons = [
  {
    icon: <Leaf className="w-8 h-8 text-[#D6AD60]" />,
    title: "Eco-Conscious Luxury",
    desc: "Our portfolio features IGBC Platinum Pre-Certified communities, ensuring sustainable environments that reduce energy costs while protecting your family's future.",
    img: "https://www.green-valley.site/assets/img/g8.webp",
    category: "Sustainability"
  },
  {
    icon: <Trophy className="w-8 h-8 text-[#B68D40]" />,
    title: "Global Design Standards",
    desc: "Partnerships with world-renowned architects like Benoy, HK ensure your home is an international masterpiece of engineering and aesthetics.",
    img: "https://www.commercialdesignindia.com/cloud/2025/08/26/6mO1ncrX-24-12-17-IAAD-ELIVATE-%C2%A9-NOUGHTS-AND-CROSSES-001-1200x800.jpg",
    category: "Architecture"
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#D6AD60]" />,
    title: "Kid-Centric Ecosystems",
    desc: "We prioritize residences with professional sports academies and dedicated learning hubs, nurturing growth and creativity within your community.",
    img: "https://www.hiranandaniparks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffitness-luxury-club-de-royale-hiranandani-parks2.3b9ba817.jpg&w=2048&q=75",
    category: "Family Growth"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#B68D40]" />,
    title: "Uncompromising Trust",
    desc: "A 100% RERA-certified portfolio. We only curate projects from India's top-tier developers with proven track records of timely delivery.",
    img: "https://www.mvn.in/uploads/blog/1756198427957.webp",
    category: "Compliance"
  }
];

export default function WhyChoose() {
  const COLORS = {
    gold: "#D6AD60",
    charcoal: "#121C17",
    bgCream: "#FDFCF7"
  };

  return (
    <section id="why-choose" className="py-24 bg-[#FDFCF7] overflow-hidden">
      
        {/* Closing Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl md:text-2xl italic font-serif text-slate-700">
            Investing in a future that prioritizes <br className="hidden md:block" />
            <span className="font-bold not-italic" style={{ color: COLORS.gold }}>Global Excellence & Sustainable Wellness.</span>
          </p>
        </motion.div>
      
    </section>
  );
}