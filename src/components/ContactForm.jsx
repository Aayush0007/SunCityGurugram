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
    name: "", phone: "", location: ""
  });

  const COLORS = {
    tan: "#B68D40",
    cream: "#F4F1E1",
    charcoal: "#121C17",
    gold: "#D6AD60",
    white: "#FFFFFF"
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleNext = async () => {
    if (step === 1) {
      if (!validateName(formData.name)) return setError("Please enter a valid Name.");
      const validPhone = validateIndianMobile(formData.phone);
      if (!validPhone) return setError("Please enter a valid 10-digit Mobile Number.");

      setLoading(true);
      const { data } = await supabase.from("leads").select("phone").eq("phone", validPhone).maybeSingle();
      setLoading(false);
      if (data) return setError("This phone number is already registered.");
      
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!formData.location) return setError("Please select your current residency.");

    setLoading(true);
    try {
      const { error: dbError } = await supabase.from("leads").insert([{
        name: formData.name.trim(),
        phone: validateIndianMobile(formData.phone),
        location: formData.location,
        intent: "Inquiry", // Default internal value
        timeline: "Immediate", // Default internal value
        utm_source: "short_contact_form"
      }]);

      if (dbError) throw dbError;
      setSubmitted(true);
      trackEvent({ action: "form_submit", category: "contact", label: "short_form" });
    } catch (err) {
      setError("System busy. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
      <div className="pt-10 pb-8 px-8 text-center" style={{ backgroundColor: COLORS.charcoal }}>
        <h3 className="text-2xl font-serif font-bold italic text-white">Contact Us</h3>
        <p className="text-[10px] uppercase tracking-[0.4em] mt-2" style={{ color: COLORS.gold }}>Official Response Desk</p>
      </div>
      
      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              {error && <div className="mb-6 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-100 font-bold text-center">{error}</div>}
              
              {step === 1 ? (
                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 mb-1 block" style={{ color: COLORS.tan }}>Full Name</label>
                    <input type="text" className="w-full p-4 border-2 rounded-xl outline-none text-sm" style={{ borderColor: COLORS.cream, color: COLORS.charcoal }} value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest ml-1 mb-1 block" style={{ color: COLORS.tan }}>Mobile Number</label>
                    <input type="tel" className="w-full p-4 border-2 rounded-xl outline-none text-sm" style={{ borderColor: COLORS.cream, color: COLORS.charcoal }} value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <button disabled={loading} onClick={handleNext} className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95 text-sm transition-all" style={{ backgroundColor: COLORS.gold, color: COLORS.charcoal }}>
                    {loading ? "Verifying..." : "Continue"} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4 text-center" style={{ color: COLORS.tan }}>Current Residency? *</p>
                  <div className="grid grid-cols-2 gap-4">
                    {["Gurugram", "Outside"].map(l => (
                      <button key={l} onClick={() => handleInputChange("location", l)} className={`p-5 text-xs rounded-2xl font-bold transition-all border-2 ${formData.location === l ? "shadow-md" : ""}`} style={{ borderColor: formData.location === l ? COLORS.gold : COLORS.cream, backgroundColor: formData.location === l ? COLORS.cream : COLORS.white, color: COLORS.charcoal }}>{l}</button>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 border-2 py-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2" style={{ borderColor: COLORS.cream, color: COLORS.tan }}><ChevronLeft className="w-4 h-4" /> Back</button>
                    <button disabled={loading} onClick={handleSubmit} className="flex-[2] py-4 rounded-xl font-bold shadow-xl active:scale-95 text-xs text-white" style={{ backgroundColor: COLORS.charcoal }}>{loading ? "Submitting..." : "Submit"}</button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: COLORS.cream }}>
                <ShieldCheck className="w-10 h-10" style={{ color: COLORS.gold }} />
              </div>
              <h3 className="text-xl font-serif font-bold" style={{ color: COLORS.charcoal }}>Submitted Successfully</h3>
              <p className="mt-3 text-xs font-light" style={{ color: COLORS.charcoal }}>A concierge will contact you shortly.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}