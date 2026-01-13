import { useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";
import X from "lucide-react/dist/esm/icons/x";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    consent: false,
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

    // 1. Validations
    if (!formData.name.trim()) return setError("Please enter your name.");
    if (/\d/.test(formData.name)) return setError("Name cannot contain numbers.");
    
    const validPhone = validateIndianMobile(formData.phone);
    if (!validPhone) return setError("Please enter a valid 10-digit mobile number.");
    
    if (!formData.location) return setError("Please select your location.");
    // if (!formData.consent) return setError("Please authorize to proceed.");

    setLoading(true);

    try {
      // 2. Check Duplicate in Supabase
      const { data: existing } = await supabase
        .from("leads")
        .select("phone")
        .eq("phone", validPhone)
        .maybeSingle();

      if (existing) {
        setLoading(false);
        return setError("This number is already registered. Please use a different number.");
      }

      // 3. Database Insertion (Payload matches your schema columns exactly)
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

      // 4. Analytics
      trackEvent({ action: "lead_submit", category: "conversion", label: "whatsapp_popup" });

      // 5. WhatsApp Redirection
      const clientNumber = "919211522011";
      const message = `Hi, I am interested in the Ultra-Luxury Portfolio on livingluxura.com.%0A%0A*Lead Details:*%0A- Name: ${formData.name}%0A- Mobile: ${validPhone}%0A- Current Location: ${formData.location}%0A%0A*Project Interest:*%0A- Godrej SORA (Sector 53, Golf Course Rd)%0A- Emaar Serenity Hills (Sector 86)%0A- Conscient Elaira / Ashiana Aaroham (Sector 80)%0A%0APlease share the master brochure, milestone payment plans, and details regarding the new launch benefits.`;
      
      const whatsappUrl = `https://wa.me/${clientNumber}?text=${message}`;
      
      setSubmitted(true);
      
      // Delay redirect slightly so user sees success state
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1000);

    } catch (err) {
      console.error(err);
      setError("System busy. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
      >
        <div className="bg-slate-900 p-6 text-center text-white relative">
          {showCloseButton && (
            <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-all">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          )}
          <h2 className="text-xl font-serif font-bold italic">Suncity Monarch</h2>
          <p className="text-[9px] text-emerald-400 uppercase tracking-[0.3em]">Sector 78, Gurugram</p>
        </div>

        <div className="p-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="space-y-4"
              >
                {error && (
                  <div className="p-2 bg-red-50 text-red-600 text-[11px] rounded-lg border border-red-100 text-center font-bold">
                    {error}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="10-Digit Mobile Number *"
                    className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all text-sm"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 mb-2 ml-1">Where are you currently living? *</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Gurugram", "Delhi", "Other"].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => handleInputChange("location", loc)}
                        className={`p-2.5 text-xs border-2 rounded-xl font-semibold transition-all ${
                          formData.location === loc
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                            : "border-slate-100 text-slate-500 hover:border-slate-200"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* <label className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 accent-emerald-600"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange("consent", e.target.checked)}
                  />
                  <span className="text-[10px] text-slate-500 font-medium leading-tight">
                    I authorize Suncity Monarch and partners to contact me via Call, WhatsApp, or SMS.
                  </span>
                </label> */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg disabled:opacity-70"
                >
                  {loading ? "Verifying..." : (
                    <>
                      Submit <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Request Received</h3>
                <p className="text-slate-500 mt-2 text-sm px-2">
                  Thank you <b>{formData.name}</b>. Redirection to WhatsApp for priority brochure...
                </p>
                <button onClick={onClose} className="mt-6 px-10 py-3 bg-slate-900 text-white rounded-full font-bold text-sm transition-all hover:bg-slate-800">
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}