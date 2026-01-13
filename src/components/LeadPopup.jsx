import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";
import X from "lucide-react/dist/esm/icons/x";
import Send from "lucide-react/dist/esm/icons/send";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";

import { trackEvent } from "../utils/analytics";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const validateIndianMobile = (input) => {
  const cleaned = input.replace(/[\s\-()+]/g, "");
  const tenDigit = cleaned.length > 10 ? cleaned.slice(-10) : cleaned;
  return /^[6-9]\d{9}$/.test(tenDigit) ? tenDigit : null;
};

export default function LeadPopup({ trigger = false, onClose }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showCloseButton, setShowCloseButton] = useState(false);

  // Design Constants based on your provided palette
  const COLORS = {
    tan: "#B68D40",
    cream: "#F4F1E1",
    charcoal: "#121C17",
    gold: "#D6AD60",
    white: "#FFFFFF",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const utms = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get("utm_source") || "Direct",
      medium: params.get("utm_medium") || "",
      campaign: params.get("utm_campaign") || "",
    };
  }, []);

  useEffect(() => {
    if (trigger && !submitted) {
      const timer = setTimeout(() => setShowCloseButton(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [trigger, submitted]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleNameChange = (value) => {
    const nameRegex = /^[A-Za-z\s'-]*$/;
    if (!nameRegex.test(value)) {
      setError("Name cannot contain numbers.");
    } else {
      setError("");
      setFormData((prev) => ({ ...prev, name: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return setError("Please enter your name.");
    if (/\d/.test(formData.name)) return setError("Name cannot contain numbers.");
    
    const validPhone = validateIndianMobile(formData.phone);
    if (!validPhone) return setError("Please enter a valid 10-digit mobile number.");
    
    if (!formData.location) return setError("Please select your location.");

    setLoading(true);

    try {
      const { data: existing } = await supabase
        .from("leads")
        .select("phone")
        .eq("phone", validPhone)
        .maybeSingle();

      if (existing) {
        setLoading(false);
        return setError("Number already registered.");
      }

      const payload = {
        name: formData.name.trim(),
        phone: validPhone,
        location: formData.location,
        utm_source: utms.source,
        utm_medium: utms.medium,
        utm_campaign: utms.campaign,
        status: "New"
      };

      const { error: insertError } = await supabase.from("leads").insert([payload]);
      if (insertError) throw insertError;

      trackEvent({ action: "lead_submit", category: "conversion", label: "whatsapp_popup" });

      const clientNumber = "919211522011";
      const message = `Hi, I am interested in the Ultra-Luxury Portfolio on livingluxura.com.%0A%0A*Lead Details:*%0A- Name: ${formData.name}%0A- Mobile: ${validPhone}%0A- Current Location: ${formData.location}%0A%0A*Project Interest:*%0A- Godrej SORA (Sector 53, Golf Course Rd)%0A- Emaar Serenity Hills (Sector 86)%0A- Conscient Elaira / Ashiana Aaroham (Sector 80)%0A%0APlease share brochures and payment plans.`;
      
      const whatsappUrl = `https://wa.me/${clientNumber}?text=${message}`;
      
      setSubmitted(true);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1000);

    } catch (err) {
      setError("System busy. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-[#121C17]/90">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full overflow-hidden relative"
      >
        {/* Header - Charcoal with Gold Accents */}
        <div className="p-8 text-center text-white relative" style={{ backgroundColor: COLORS.charcoal }}>
          {showCloseButton && (
            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-all">
              <X className="w-5 h-5" style={{ color: COLORS.tan }} />
            </button>
          )}
          <h2 className="text-2xl font-serif font-bold italic">Living Luxura</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] mt-2" style={{ color: COLORS.gold }}>Verified Developer Collection</p>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="space-y-5"
              >
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 text-center font-bold">
                    {error}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full p-4 border-2 rounded-2xl outline-none transition-all text-sm"
                    style={{ borderColor: COLORS.cream, color: COLORS.charcoal }}
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number *"
                    className="w-full p-4 border-2 rounded-2xl outline-none transition-all text-sm"
                    style={{ borderColor: COLORS.cream, color: COLORS.charcoal }}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 ml-1" style={{ color: COLORS.tan }}>Current City? *</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["Gurugram", "Delhi", "Other"].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleInputChange("location", loc)}
                        className={`py-3 text-[10px] border-2 rounded-xl font-bold transition-all ${
                          formData.location === loc ? "shadow-md" : ""
                        }`}
                        style={{ 
                          borderColor: formData.location === loc ? COLORS.gold : COLORS.cream,
                          backgroundColor: formData.location === loc ? COLORS.cream : "transparent",
                          color: COLORS.charcoal
                        }}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest"
                  style={{ backgroundColor: COLORS.gold, color: COLORS.charcoal }}
                >
                  {loading ? "Establishing Access..." : (
                    <>
                      Submit <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                <p className="text-[9px] text-center italic opacity-60" style={{ color: COLORS.charcoal }}>
                  * Instant priority access to payment plans & brochures
                </p>
              </motion.form>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: COLORS.cream }}>
                  <ShieldCheck className="w-10 h-10" style={{ color: COLORS.gold }} />
                </div>
                <h3 className="text-2xl font-serif font-bold italic" style={{ color: COLORS.charcoal }}>Submitted Successfully</h3>
                <p className="mt-4 text-sm font-light leading-relaxed" style={{ color: COLORS.charcoal }}>
                  Thank you <b>{formData.name}</b>. Redirection to WhatsApp for exclusive launch benefits...
                </p>
                <button 
                  onClick={onClose} 
                  className="mt-10 px-12 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
                  style={{ backgroundColor: COLORS.charcoal, color: COLORS.white }}
                >
                  Return to Site
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}