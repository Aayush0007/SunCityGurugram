import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left";
import { trackEvent } from "../utils/analytics";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const validateIndianMobile = (input) => {
  const cleaned = input.replace(/[\s\-()+]/g, "");
  const tenDigit = cleaned.length > 10 ? cleaned.slice(-10) : cleaned;
  return /^[6-9]\d{9}$/.test(tenDigit) ? tenDigit : null;
};

const validateName = (name) => {
  return /^[a-zA-Z\s]*$/.test(name) && name.trim().length > 0;
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "", phone: "", location: "", intent: "", 
    timeline: "", consent: false
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleNext = async () => {
    if (step === 1) {
      if (!validateName(formData.name)) {
        return setError("Please enter a valid Name (no numbers or special characters).");
      }
      const validPhone = validateIndianMobile(formData.phone);
      if (!validPhone) {
        return setError("Please enter a valid 10-digit Indian Mobile Number.");
        
      }

      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from("leads")
        .select("phone")
        .eq("phone", validPhone)
        .maybeSingle();
      setLoading(false);

      if (data) {
        return setError("This phone number is already registered. Please use a different number.");
      }
    }

    if (step === 2) {
      if (!formData.location) return setError("Please select your current residency.");
      if (!formData.intent) return setError("Please specify your purchase intent.");
    }
    
    setError("");
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setError("");
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.timeline) return setError("Please select your planned timeline.");
    if (!formData.consent) return setError("You must authorize us to provide project details.");

    setLoading(true);
    try {
      // FIX: Removed 'consent' from payload as it's missing in your DB schema leads table
      // Added 'utm_source' to match your schema requirements
      const { error: dbError } = await supabase.from("leads").insert([{
        name: formData.name.trim(),
        phone: validateIndianMobile(formData.phone),
        location: formData.location,
        intent: formData.intent,
        timeline: formData.timeline,
        utm_source: "contact_section" // Mapping 'source' logic to utm_source
      }]);

      if (dbError) throw dbError;
      
      setSubmitted(true);
      trackEvent({ action: "form_submit", category: "contact", label: "contact_section" });
    } catch (err) {
      console.error(err);
      setError("System busy. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
      <div className="bg-slate-900 pt-8 pb-6 px-8 text-center text-white relative">
        <h3 className="text-2xl font-serif font-bold italic">Contact Sales Expert</h3>
        <p className="text-[10px] text-emerald-400 uppercase tracking-widest mt-1 mb-4">Official Response Desk</p>
        <div className="w-full bg-slate-800 h-1 rounded-full mt-4">
            <motion.div 
                className="bg-emerald-500 h-1 rounded-full"
                animate={{ width: `${(step / 3) * 100}%` }}
            />
        </div>
      </div>
      
      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
                key={step} 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >
              {error && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 font-bold text-center">
                  {error}
                </div>
              )}
              
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="e.g. Rahul Sharma" 
                        className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all" 
                        value={formData.name} 
                        onChange={(e) => handleInputChange("name", e.target.value)} 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mobile Number</label>
                    <input 
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX" 
                        className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all" 
                        value={formData.phone} 
                        onChange={(e) => handleInputChange("phone", e.target.value)} 
                    />
                  </div>
                  <button 
                    disabled={loading}
                    onClick={handleNext} 
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all disabled:opacity-50"
                  >
                    {loading ? "Verifying..." : "Verify Eligibility"} <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-700 mb-3">Current Residency? *</p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Gurugram", "Outside"].map(l => (
                        <button 
                            key={l} 
                            onClick={() => handleInputChange("location", l)} 
                            className={`p-4 text-xs border-2 rounded-xl font-bold transition-all ${formData.location === l ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
                        >
                            {l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700 mb-3">Purchase Intent? *</p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Self Use", "Investment"].map(i => (
                        <button 
                            key={i} 
                            onClick={() => handleInputChange("intent", i)} 
                            className={`p-4 text-xs border-2 rounded-xl font-bold transition-all ${formData.intent === i ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
                        >
                            {i}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={handleBack} className="flex-1 border-2 border-slate-100 py-4 rounded-xl font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50">
                        <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button onClick={handleNext} className="flex-[2] bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-emerald-700">Continue</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-700 mb-1">Expected Purchase Timeline? *</p>
                  <select 
                    className="w-full p-4 border-2 border-slate-100 rounded-xl font-bold text-sm bg-slate-50 outline-none focus:border-emerald-500" 
                    onChange={(e) => handleInputChange("timeline", e.target.value)}
                  >
                    <option value="">Select Timeline...</option>
                    <option value="Immediate">Immediate / 1 Month</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="Exploring">Just Exploring</option>
                  </select>
                  <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 accent-emerald-600" 
                        checked={formData.consent} 
                        onChange={(e) => handleInputChange("consent", e.target.checked)} 
                    />
                    <span className="text-[10px] text-slate-500 font-medium italic leading-relaxed">
                        I authorize the developer to share price lists, payment plans, and floor plans via Call/WhatsApp/SMS.
                    </span>
                  </label>
                  <div className="flex gap-3">
                    <button onClick={handleBack} className="flex-1 border-2 border-slate-100 py-4 rounded-xl font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-slate-50">
                        <ChevronLeft className="w-5 h-5" /> Back
                    </button>
                    <button 
                        disabled={loading} 
                        onClick={handleSubmit} 
                        className="flex-[2] bg-slate-900 text-white py-4 rounded-xl font-bold shadow-xl disabled:opacity-50 hover:bg-black transition-colors"
                    >
                        {loading ? "Registering..." : "Submit Inquiry"}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <ShieldCheck className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">Priority Access Secured</h3>
              <p className="text-slate-500 mt-2 text-sm">Thank you <b>{formData.name}</b>. An executive will contact you on <b>{formData.phone}</b> within 24 hours.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}