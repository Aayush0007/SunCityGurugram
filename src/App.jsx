import { useState, useEffect, Suspense, lazy } from "react";
// Added missing motion import to fix the ReferenceError
import { motion } from "framer-motion"; 
import { pageView, trackEvent } from "./utils/analytics";

// Critical components loaded immediately for First Contentful Paint (FCP)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy-loaded sections to reduce initial bundle size and improve speed
const ProjectOverview = lazy(() => import("./components/ProjectOverview"));
const WhyChoose = lazy(() => import("./components/WhyChoose"));
const UnitConfigurations = lazy(() => import("./components/UnitConfigurations"));
const Amenities = lazy(() => import("./components/Amenities"));
const Pricing = lazy(() => import("./components/Pricing"));
const Location = lazy(() => import("./components/Location"));
const Gallery = lazy(() => import("./components/Gallery"));
const DeveloperTrust = lazy(() => import("./components/DeveloperTrust"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const LeadPopup = lazy(() => import("./components/LeadPopup"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));
const ContactForm = lazy(() => import("./components/ContactForm"));

// High-UX Royal Loader Component using the brand palette
const RoyalLoader = () => (
  <div className="w-full py-32 flex flex-col items-center justify-center bg-[#FDFCF7]">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      className="w-10 h-10 border-2 rounded-full mb-6"
      style={{ borderTopColor: "#D6AD60", borderColor: "#F4F1E1" }}
    />
    <p 
      className="text-[10px] uppercase tracking-[0.5em] font-bold animate-pulse" 
      style={{ color: "#B68D40" }}
    >
      Curating Excellence
    </p>
  </div>
);

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Brand Palette Constants
  const COLORS = {
    charcoal: "#121C17",
    gold: "#D6AD60",
    bgCream: "#FDFCF7"
  };

  useEffect(() => {
    pageView(window.location.pathname);
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#enquire-now") {
        setShowPopup(true);
        trackEvent({ action: "popup_open", category: "lead", label: "url_hash" });
      }
      if (window.location.hash === "#terms") {
        setShowTerms(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    // Smart Timer for Lead Capture (10s)
    const timer = setTimeout(() => {
      setShowPopup((prev) => {
        if (!prev && !showTerms) {
          trackEvent({ action: "popup_open", category: "lead", label: "auto_timer" });
          return true;
        }
        return prev;
      });
    }, 10000);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      clearTimeout(timer);
    };
  }, [showTerms]);

  const openPopup = () => {
    setShowPopup(true);
    trackEvent({ action: "popup_open", category: "lead", label: "manual" });
  };

  const closePopup = () => {
    setShowPopup(false);
    window.history.replaceState(null, null, " ");
  };

  const closeTerms = () => {
    setShowTerms(false);
    window.history.replaceState(null, null, " ");
  };

  return (
    <div className="antialiased selection:bg-[#D6AD60] selection:text-[#121C17]" style={{ backgroundColor: COLORS.bgCream }}>
      <Navbar openPopup={openPopup} />

      <main>
        {/* Hero loads immediately */}
        <Hero openPopup={openPopup} />
        
        {/* Suspense with RoyalLoader for all lazy components */}
        <Suspense fallback={<RoyalLoader />}>
          <article>
            <section id="overview" className="py-4"><ProjectOverview /></section>
            <section id="why-choose" className="py-4"><WhyChoose /></section>
            
            <section id="units" className="py-12 bg-white/50">
              <UnitConfigurations openPopup={openPopup} />
            </section>
            
            <section id="amenities" className="py-4"><Amenities /></section>
            
            <section id="pricing" className="py-12 bg-white/50">
              <Pricing openPopup={openPopup} />
            </section>
            
            <section id="location" className="py-4"><Location /></section>
            <section id="gallery" className="py-4"><Gallery /></section>

            <section id="trust" className="py-12 bg-white/50">
              <DeveloperTrust />
            </section>

            {/* <section id="final-cta">
              <FinalCTA openPopup={openPopup} />
            </section> */}

            <section id="contact" className="py-24 bg-white">
              <ContactForm />
            </section>
          </article>
        </Suspense>
      </main>

      <Footer />

      {/* Overlays with immediate zero-flicker suspense */}
      <Suspense fallback={null}>
        {showPopup && <LeadPopup trigger={showPopup} onClose={closePopup} />}
        {showTerms && <TermsAndConditions isOpen={showTerms} onClose={closeTerms} />}
      </Suspense>
    </div>
  );
}

export default App;