
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim();

let isInitialized = false;
let lastTrackedPath: string | null = null;

export function isValidMeasurementId(id: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(id);
}

export function initGA(): boolean {
  if (typeof window === "undefined") return false;
  if (isInitialized) return true;

  if (!GA_MEASUREMENT_ID || !isValidMeasurementId(GA_MEASUREMENT_ID)) {
    return false;
  }

  try {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag("js", new Date());

    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });

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

export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined") return;

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

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  if (!isInitialized) {
    const initialized = initGA();
    if (!initialized) return;
  }

  window.gtag?.("event", eventName, params);
}

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

