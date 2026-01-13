import { useState, useEffect, Suspense, lazy } from "react";
import { pageView, trackEvent } from "./utils/analytics";

// Critical components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy-loaded sections
const ProjectOverview = lazy(() => import("./components/ProjectOverview"));
const WhyChoose = lazy(() => import("./components/WhyChoose"));
const UnitConfigurations = lazy(() =>
  import("./components/UnitConfigurations")
);
const Amenities = lazy(() => import("./components/Amenities"));
const Pricing = lazy(() => import("./components/Pricing"));
const Location = lazy(() => import("./components/Location"));
const Gallery = lazy(() => import("./components/Gallery"));
const DeveloperTrust = lazy(() => import("./components/DeveloperTrust"));
const FinalCTA = lazy(() => import("./components/FinalCTA"));
const LeadPopup = lazy(() => import("./components/LeadPopup"));
const TermsAndConditions = lazy(() =>
  import("./components/TermsAndConditions")
);
const ContactForm = lazy(() => import("./components/ContactForm"));

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    pageView(window.location.pathname);
  }, []);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#enquire-now") {
        setShowPopup(true);
        trackEvent({
          action: "popup_open",
          category: "lead",
          label: "url_hash",
        });
      }
      if (window.location.hash === "#terms") {
        setShowTerms(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    const timer = setTimeout(() => {
      setShowPopup((prev) => {
        if (!prev && !showTerms) {
          trackEvent({
            action: "popup_open",
            category: "lead",
            label: "auto_timer",
          });
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
    <div className="antialiased text-gray-900 bg-white">
      <Navbar openPopup={openPopup} />

      <main>
        <Hero openPopup={openPopup} />
        <Suspense
          fallback={
            <div className="h-20 flex items-center justify-center italic text-slate-400">
              Loading...
            </div>
          }
        >
          <article>
            <section id="overview" className="py-16">
              <ProjectOverview />
            </section>
            <section id="why-choose" className="py-16">
              <WhyChoose />
            </section>
            <section id="units" className="py-16 bg-gray-50">
              <UnitConfigurations openPopup={openPopup} />
            </section>
            <section id="amenities" className="py-16">
              <Amenities />
            </section>
            <section id="pricing" className="py-16 bg-gray-50">
              <Pricing openPopup={openPopup} />
            </section>
            <section id="location" className="py-16">
              <Location />
            </section>
            <section id="gallery" className="py-16">
              <Gallery />
            </section>

            {/* ✅ DeveloperTrust included here to build authority before the final CTA */}
            <section id="trust" className="py-16 bg-gray-50">
              <DeveloperTrust />
            </section>

            <section id="final-cta">
              <FinalCTA openPopup={openPopup} />
            </section>

            <section id="contact" className="py-24 bg-white">
              <ContactForm />
            </section>
          </article>
        </Suspense>
      </main>

      <Footer />

      {/* Overlays */}
      {showPopup && (
        <Suspense fallback={null}>
          <LeadPopup trigger={showPopup} onClose={closePopup} />
        </Suspense>
      )}

      {showTerms && (
        <Suspense fallback={null}>
          <TermsAndConditions isOpen={showTerms} onClose={closeTerms} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
