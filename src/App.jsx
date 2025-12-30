import { useState, useEffect, Suspense, lazy } from "react";
import { pageView, trackEvent } from "./utils/analytics";

// Critical components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Lazy-loaded sections
const ProjectOverview = lazy(() => import("./components/ProjectOverview"));
const UnitConfigurations = lazy(() => import("./components/UnitConfigurations"));
const Amenities = lazy(() => import("./components/Amenities"));
const Pricing = lazy(() => import("./components/Pricing"));
const Location = lazy(() => import("./components/Location"));
const Gallery = lazy(() => import("./components/Gallery"));
const LeadPopup = lazy(() => import("./components/LeadPopup"));

function App() {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ GA4 Page View (ONLY ONCE)
  useEffect(() => {
    pageView(window.location.pathname);
  }, []);

  // ✅ Auto popup after 10 seconds + GA event
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);

      trackEvent({
        action: "popup_open",
        category: "lead",
        label: "auto_popup_1s",
      });
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => {
    setShowPopup(true);

    trackEvent({
      action: "popup_open",
      category: "lead",
      label: "manual_open",
    });
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="antialiased text-gray-900 bg-white">
      <Navbar openPopup={openPopup} />

      <main>
        {/* Above the fold */}
        <Hero openPopup={openPopup} />

        <Suspense
          fallback={
            <div className="h-20 flex items-center justify-center">
              Loading luxury experience...
            </div>
          }
        >
          <article>
            <section id="overview" className="py-16">
              <ProjectOverview />
            </section>
            <section id="units" className="py-16 bg-gray-50">
              <UnitConfigurations />
            </section>
            <section id="amenities" className="py-16">
              <Amenities />
            </section>
            <section id="pricing" className="py-16 bg-gray-50">
              <Pricing />
            </section>
            <section id="location" className="py-16">
              <Location />
            </section>
            <section id="gallery" className="py-16">
              <Gallery />
            </section>
          </article>
        </Suspense>
      </main>

      <Footer />

      {/* Lead Popup */}
      {showPopup && (
        <Suspense fallback={null}>
          <LeadPopup trigger={showPopup} onClose={closePopup} />
        </Suspense>
      )}

      {/* Floating WhatsApp */}
      {/* <a
        href="https://wa.me/919211522011?text=Hi,%20I'm%20interested%20in%20Suncity%20Project%20Sector-78%20Gurgaon"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
        onClick={() =>
          trackEvent({
            action: "whatsapp_click",
            category: "engagement",
            label: "floating_whatsapp",
          })
        }
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487z" />
        </svg>
      </a> */}
    </div>
  );
}

export default App;
