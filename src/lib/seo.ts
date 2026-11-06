/**
 * SEO & Dynamic Meta Tag Management Utility
 * Updates head metadata, canonical URLs, and Open Graph tags across client-side routes.
 */

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://atharvakote.vercel.app"
).replace(/\/$/, "");

export const DEFAULT_SEO = {
  title: "Atharva Kote | Java Backend Developer & Distributed Systems Engineer",
  description:
    "Atharva Kote is a Java Backend Developer specializing in Spring Boot, Microservices Architecture, Kafka, Redis, PostgreSQL, DevOps, and Cybersecurity.",
  author: "Atharva Kote",
  ogImage: `${SITE_URL}/og-image.png`,
  twitterHandle: "@ImAtharva81",
  siteName: "Atharva Kote Portfolio",
};

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

function setMetaTag(attrName: "name" | "property", attrValue: string, content: string): void {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string): void {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

/**
 * Updates document head for SPA navigation without dependencies.
 */
export function updateSEO({
  title,
  description = DEFAULT_SEO.description,
  path = "/",
  ogImage = DEFAULT_SEO.ogImage,
  noIndex = false,
}: SEOOptions = {}): void {
  if (typeof document === "undefined") return;

  const fullTitle = title
    ? `${title} | Atharva Kote`
    : DEFAULT_SEO.title;
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  // 1. Document title
  document.title = fullTitle;

  // 2. Standard Meta
  setMetaTag("name", "description", description);
  setMetaTag("name", "author", DEFAULT_SEO.author);
  setMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

  // 3. Canonical URL
  setCanonical(canonicalUrl);

  // 4. Open Graph
  setMetaTag("property", "og:title", fullTitle);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", canonicalUrl);
  setMetaTag("property", "og:image", ogImage);
  setMetaTag("property", "og:site_name", DEFAULT_SEO.siteName);
  setMetaTag("property", "og:type", "website");

  // 5. Twitter Card
  setMetaTag("name", "twitter:title", fullTitle);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", ogImage);
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:site", DEFAULT_SEO.twitterHandle);
  setMetaTag("name", "twitter:creator", DEFAULT_SEO.twitterHandle);
}

