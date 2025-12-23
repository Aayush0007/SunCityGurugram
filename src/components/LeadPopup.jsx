import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Download from 'lucide-react/dist/esm/icons/download';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOGtcOhtDcGdhj3y9dyafjfLX8OGgdGSgetTtS_FHeWEcRsYyo7E7lOc2DGR_0RK2lLw/exec';

const validateIndianMobile = (input) => {
  const cleaned = input.replace(/[\s\-()+]/g, '');
  const tenDigit = cleaned.length > 10 ? cleaned.slice(-10) : cleaned;
  return /^[6-9]\d{9}$/.test(tenDigit) ? tenDigit : null;
};

export default function LeadPopup({ trigger = false, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showCloseButton, setShowCloseButton] = useState(false);

  const [formData, setFormData] = useState({
    name: '', phone: '', location: '', intent: '',
    configuration: '', budget: '', timeline: '',
    siteVisit: '', contactMethod: '', consent: false
  });

  const utms = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get('utm_source') || 'Direct',
      medium: params.get('utm_medium') || '',
      campaign: params.get('utm_campaign') || '',
      term: params.get('utm_term') || '',
      content: params.get('utm_content') || ''
    };
  }, []);

  useEffect(() => {
    if (trigger && !submitted) {
      const timer = setTimeout(() => setShowCloseButton(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [trigger, submitted]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  // New: Name validation - no numbers allowed
  const handleNameChange = (value) => {
    // Allow only letters, spaces, hyphens, apostrophes
    const nameRegex = /^[A-Za-z\s'-]*$/;
    if (!nameRegex.test(value)) {
      setError('Name cannot contain numbers.');
    } else {
      setError('');
    }
    setFormData(prev => ({ ...prev, name: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name.trim()) return setError('Please enter your full name.');
      
      // Check for numbers in name
      if (/\d/.test(formData.name)) {
        return setError('Name cannot contain numbers.');
      }

      if (!validateIndianMobile(formData.phone)) return setError('Valid mobile number is mandatory.');
    }
    if (step === 2) {
      if (!formData.location) return setError('Please select your current location.');
      if (!formData.intent) return setError('Please select your purchase intent.');
    }
    if (step === 3) {
      if (!formData.configuration || formData.configuration === 'Select Configuration...')
        return setError('Please select your preferred configuration.');
      if (!formData.budget || formData.budget === 'Select Budget...')
        return setError('Please select your approximate budget range.');
    }
    if (step === 4) {
      if (!formData.timeline || formData.timeline === 'Planning to purchase?')
        return setError('Please select your purchase timeline.');
      if (!formData.siteVisit || formData.siteVisit === 'Schedule a site visit?')
        return setError('Please select if you want a site visit.');
      if (!formData.contactMethod || formData.contactMethod === 'Preferred contact method?')
        return setError('Please select your preferred contact method.');
    }
    setError('');
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.timeline || formData.timeline === 'Planning to purchase?')
      return setError('Please select your purchase timeline.');
    if (!formData.siteVisit || formData.siteVisit === 'Schedule a site visit?')
      return setError('Please select if you want a site visit.');
    if (!formData.contactMethod || formData.contactMethod === 'Preferred contact method?')
      return setError('Please select your preferred contact method.');
    if (!formData.consent) return setError('Please provide consent to proceed.');
   
    setLoading(true);
    const validPhone = validateIndianMobile(formData.phone);

    const payload = {
      Timestamp: new Date().toLocaleString('en-IN'),
      Name: formData.name.trim(),
      Phone: validPhone,
      Location: formData.location,
      Intent: formData.intent,
      Configuration: formData.configuration,
      Budget: formData.budget,
      Timeline: formData.timeline,
      SiteVisit: formData.siteVisit,
      ContactMethod: formData.contactMethod,
      UTM_Source: utms.source,
      UTM_Medium: utms.medium,
      UTM_Campaign: utms.campaign,
      UTM_Term: utms.term,
      UTM_Content: utms.content
    };

    localStorage.setItem(`lead_${Date.now()}`, JSON.stringify(payload));

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        priority: 'high'
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/90 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
      <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden relative">
        
        <div className="flex h-1.5 w-full bg-slate-100">
          <motion.div className="h-full bg-emerald-500" animate={{ width: `${(step / 4) * 100}%` }} />
        </div>

        <div className="bg-slate-900 p-6 text-center text-white relative">
          {showCloseButton && (
            <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-all">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          )}
          <h2 className="text-xl font-serif font-bold italic tracking-wide">Suncity Monarch</h2>
          <p className="text-[9px] text-emerald-400 uppercase tracking-[0.3em]">Sector 78, Gurugram</p>
        </div>

        <div className="p-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                {error && <div className="mb-4 p-2 bg-red-50 text-red-600 text-[11px] rounded-lg border border-red-100 text-center font-bold">{error}</div>}
                
                {step === 1 && (
                  <div className="space-y-4">
                    <p className="text-center font-bold text-slate-700">Let's get started</p>
                    <input 
                      type="text" 
                      placeholder="Your Full Name *" 
                      className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all" 
                      value={formData.name} 
                      onChange={(e) => handleNameChange(e.target.value)} 
                    />
                    <input 
                      type="tel" 
                      placeholder="10-Digit Mobile Number *" 
                      className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-emerald-500 transition-all" 
                      value={formData.phone} 
                      onChange={(e) => handleInputChange('phone', e.target.value)} 
                    />
                    <button onClick={handleNext} className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                      View Exclusive Details <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Rest of the steps remain exactly the same */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-bold text-slate-600 mb-3">You are currently living in?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Gurugram, Haryana', 'Outside Gurugram'].map(loc => (
                          <button key={loc} onClick={() => handleInputChange('location', loc)} className={`p-3 text-xs border-2 rounded-xl font-semibold transition-all ${formData.location === loc ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 text-slate-500'}`}>{loc}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-600 mb-3">What is your purpose to buy this property?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Self Use(Own Living)', 'Investment(Future Return)'].map(int => (
                          <button key={int} onClick={() => handleInputChange('intent', int)} className={`p-3 text-xs border-2 rounded-xl font-semibold transition-all ${formData.intent === int ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-100 text-slate-500'}`}>{int}</button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setStep(1)} className="flex-1 py-4 text-slate-400 font-bold">Back</button>
                      <button onClick={handleNext} className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold">Continue</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm font-bold text-slate-600 mb-3">Which configuration interests you?</p>
                      <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none font-medium text-sm" onChange={(e) => handleInputChange('configuration', e.target.value)}>
                        <option>Select Configuration...</option>
                        <option>3 BHK + Study</option>
                      </select>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-600 mb-3">Approximate Budget Range?</p>
                      <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none font-medium text-sm" onChange={(e) => handleInputChange('budget', e.target.value)}>
                        <option>Select Budget...</option>
                        <option>₹2.5 Cr – ₹3 Cr</option>
                        <option>₹3 Cr – ₹3.75 Cr</option>
                        <option>Would like to discuss</option>
                      </select>
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button onClick={() => setStep(2)} className="flex-1 py-4 text-slate-400 font-bold">Back</button>
                      <button onClick={handleNext} className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold">Next</button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none font-medium text-sm" onChange={(e) => handleInputChange('timeline', e.target.value)}>
                      <option>Planning to purchase?</option>
                      <option>Immediately / Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Just exploring</option>
                    </select>
                    <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none font-medium text-sm" onChange={(e) => handleInputChange('siteVisit', e.target.value)}>
                      <option>Schedule a site visit?</option>
                      <option>Yes, site visit</option>
                      <option>Not at the moment</option>
                    </select>
                    <select className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none font-medium text-sm" onChange={(e) => handleInputChange('contactMethod', e.target.value)}>
                      <option>Preferred contact method?</option>
                      <option>Call</option>
                      <option>WhatsApp</option>
                    </select>

                    <label className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <input type="checkbox" className="mt-1 accent-emerald-600" checked={formData.consent} onChange={(e) => handleInputChange('consent', e.target.checked)} />
                      <span className="text-[10px] text-slate-500 font-medium italic">I authorize Suncity and partners to contact me via Call, WhatsApp, or SMS regarding this project.</span>
                    </label>

                    <div className="flex gap-3">
                      <button onClick={() => setStep(3)} className="px-4 py-4 text-slate-400 font-bold">Back</button>
                      <button disabled={loading} onClick={handleSubmit} className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50">
                        {loading ? 'Processing...' : <><Download className="w-4 h-4" /> Download Brochure</>}
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Brochure Sent!</h3>
                <p className="text-slate-500 mt-2 text-sm px-2">Thank you <b>{formData.name}</b>. We have sent the project kit to <b>{formData.phone}</b> via {formData.contactMethod || 'WhatsApp'}.</p>
                <button onClick={onClose} className="mt-6 px-10 py-3 bg-slate-900 text-white rounded-full font-bold text-sm">Close</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}