import { motion } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';

export default function TermsAndConditions({ isOpen, onClose }) {
  // Brand Color Palette from provided source
  const COLORS = {
    tan: "#B68D40",      // Tan
    cream: "#F4F1E1",    // Cream
    charcoal: "#121C17", // Charcoal
    gold: "#D6AD60",     // Gold
    white: "#FFFFFF"
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      style={{ backgroundColor: `${COLORS.charcoal}F2` }} // Charcoal with 95% opacity
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] shadow-2xl max-w-4xl w-full relative overflow-hidden border border-white/10"
      >
        {/* Header - Charcoal with Gold Accents */}
        <div 
          className="p-6 md:p-8 text-white flex justify-between items-center sticky top-0 z-10"
          style={{ backgroundColor: COLORS.charcoal }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6" style={{ color: COLORS.gold }} />
            <h2 className="text-xl md:text-2xl font-serif font-bold italic tracking-tight">Terms & Conditions</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-6 h-6" style={{ color: COLORS.tan }} />
          </button>
        </div>

        {/* Content - Using Charcoal for text and Gold for highlights */}
        <div className="p-6 md:p-12 leading-relaxed space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar" style={{ color: COLORS.charcoal }}>
          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.tan }}>1. Usage Agreement</h3>
            <p className="font-light">By accessing livingluxura.com, you agree to provide accurate, current, and complete information. This portal serves as an informational digital curation for Gurugram's premium residential enclaves. Unauthorized use of this website may give rise to a claim for damages.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.tan }}>2. Data Privacy & Communication Consent</h3>
            <p className="font-light">By submitting your details, you expressly authorize our curation desk and authorized developer partners to contact you via <span className="font-bold" style={{ color: COLORS.gold }}>Phone Call, SMS, or WhatsApp</span>. This consent overrides any registration on DND lists. You may opt-out at any time.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.tan }}>3. Accuracy of Representations</h3>
            <p className="font-light">All artistic renders, floor plans, and specifications are indicative impressions. They are intended to provide a general design philosophy and do not constitute a legal offering. Final products will be executed based on sanctioned plans and RERA-registered documents.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.tan }}>4. Financials & Pricing</h3>
            <p className="font-light">Indicative pricing is subject to revision without prior notice at the sole discretion of the developer. Total cost will include additional charges such as GST, Stamp Duty, and Registration Fees as per the official cost sheet.</p>
          </section>

          <section>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.tan }}>5. Intellectual Property</h3>
            <p className="font-light">The look, layout, graphics, and curated content of this website are owned by or licensed to us. Reproduction is strictly prohibited except in accordance with the copyright notice.</p>
          </section>

          <div className="pt-10 border-t text-center" style={{ borderColor: COLORS.cream }}>
            <p className="text-xs uppercase tracking-widest mb-8 font-bold opacity-40" style={{ color: COLORS.charcoal }}>
              Last Updated: January 2026
            </p>
            <button 
              onClick={onClose}
              className="px-12 py-5 rounded-full font-bold shadow-xl transition-all active:scale-95 uppercase tracking-widest text-xs"
              style={{ backgroundColor: COLORS.charcoal, color: COLORS.white }}
              onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.gold}
              onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.charcoal}
            >
              Accept & Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 