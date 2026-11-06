/**
 * Google Analytics 4 (GA4) Integration Utility
 *
 * Safe, privacy-friendly, zero-dependency analytics for Vite + React SPAs.
 * Automatically no-ops when VITE_GA_MEASUREMENT_ID is missing or invalid.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();

let isInitialized = false;
let lastTrackedPath: string | null = null;

/**
 * Validates GA4 measurement ID format (e.g., G-XXXXXXXXXX)
 */
export function isValidMeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(id);
}

/**
 * Initializes Google Analytics 4 if a valid Measurement ID is configured.
 * Loads gtag.js asynchronously without blocking page rendering.
 */
export function initGA(): boolean {
  if (typeof window === "undefined") return false;
  if (isInitialized) return true;

  if (!GA_MEASUREMENT_ID || !isValidMeasurementId(GA_MEASUREMENT_ID)) {
    // Analytics is disabled (no ID or invalid format). Safe silent no-op.
    return false;
  }

  try {
    // 1. Initialize dataLayer & gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };

    window.gtag("js", new Date());

    // Disable automatic page_view to prevent duplicate events on SPA route changes
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });

    // 2. Inject async script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);

    isInitialized = true;
    return true;
  } catch {
    return false;
  }
}

/**
 * Tracks SPA route changes as page views.
 * Automatically deduplicates repeated calls to the same path.
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined") return;

  // Deduplicate consecutive identical page view calls
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;

  if (!isInitialized) {
    const initialized = initGA();
    if (!initialized) return;
  }

  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_title: pageTitle,
    page_location: pageLocation,
  });
}

/**
 * Generic custom event tracker
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (!isInitialized) {
    const initialized = initGA();
    if (!initialized) return;
  }

  window.gtag?.("event", eventName, params);
}

/**
 * Predefined Event Trackers
 */
export function trackResumeDownload(): void {
  trackEvent("resume_download", {
    file_name: "resume.pdf",
    download_time: new Date().toISOString(),
  });
}

export function trackSocialClick(platform: "github" | "linkedin" | string, url: string): void {
  const eventName =
    platform.toLowerCase() === "github"
      ? "github_click"
      : platform.toLowerCase() === "linkedin"
      ? "linkedin_click"
      : "social_click";

  trackEvent(eventName, {
    platform,
    url,
  });
}

export function trackContactClick(method = "email", destination = ""): void {
  trackEvent("contact_click", {
    contact_method: method,
    destination,
  });
}

export function trackProjectClick(projectTitle: string, destination?: string): void {
  trackEvent("project_click", {
    project_title: projectTitle,
    destination: destination || "",
  });
}

