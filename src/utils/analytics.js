export const GA_MEASUREMENT_ID = "G-QN425VL1Y1";

// Safety check (important)
const isGAReady = () =>
  typeof window !== "undefined" && typeof window.gtag === "function";

// Page view (SPA support)
export const pageView = (url = window.location.pathname) => {
  if (!isGAReady()) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Custom events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}) => {
  if (!isGAReady()) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
