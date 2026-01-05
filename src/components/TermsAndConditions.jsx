import { motion } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';

export default function TermsAndConditions({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/95 z-[100] overflow-y-auto backdrop-blur-md">
      <div className="min-h-screen flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full relative overflow-hidden"
        >
          {/* Header */}
          <div className="bg-slate-900 p-6 md:p-8 text-white flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl md:text-2xl font-serif font-bold">Terms & Conditions</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-all">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-12 text-slate-600 leading-relaxed space-y-8 max-h-[70vh] overflow-y-auto">
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Usage Agreement</h3>
              <p>By accessing livingluxura.com, you agree to provide accurate, current, and complete information during the registration process. This website serves as an informational digital portal for Suncity Monarch, Sector 78, Gurugram. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>
            </section>
            
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Data Privacy & Communication Consent</h3>
              <p>By submitting your personal details (including but not limited to Name and Phone Number), you expressly authorize Suncity Projects, its subsidiaries, employees, and authorized channel partners to contact you via Phone Call, SMS, WhatsApp, or Email. This consent overrides any registration on the National Do Not Call (NDNC) registry or DND lists. You may opt-out of these communications at any time by contacting our support team.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Accuracy of Representations</h3>
              <p>All images, 3D renders, floor plans, and specifications displayed are artistic impressions and indicative in nature. They are intended to provide a general idea of the project and do not constitute a legal offering. The final product, including color schemes, landscaping, and fittings, may vary. Official sales and binding agreements will only be executed based on the sanctioned plans and documents registered with the Real Estate Regulatory Authority (RERA).</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Financials & Pricing</h3>
              <p>The indicative price of ₹16,000/sq. ft. is subject to revision without prior notice at the sole discretion of the developer. Total project cost will include additional charges such as Preferential Location Charges (PLC), GST, IFMS, Stamp Duty, and Registration Fees, which will be detailed in the official cost sheet provided during the booking process.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">5. Intellectual Property</h3>
              <p>The content, design, layout, look, appearance, and graphics of this website are owned by or licensed to us. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">6. Limitation of Liability</h3>
              <p>While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the website. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage arising from the use of this website.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">7. Governing Law & Jurisdiction</h3>
              <p>Your use of this website and any dispute arising out of such use is subject to the laws of India. Any legal action or proceedings related to this website shall be settled exclusively in the courts of Gurugram, Haryana.</p>
            </section>

            <div className="pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-400 mb-6 italic">Last Updated: January 2026</p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/20"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}