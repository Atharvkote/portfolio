import { LegalLayout } from "../../components/legal/legal-layout";
import { LegalSection } from "../../components/legal/legal-section";
import type { TOCItem } from "../../components/legal/legal-toc";

const TOC_ITEMS: TOCItem[] = [
  { id: "intro", number: "01", label: "Introduction" },
  { id: "what-are-cookies", number: "02", label: "What Are Cookies?" },
  { id: "technologies-used", number: "03", label: "Cookies & Similar Technologies" },
  { id: "essential-cookies", number: "04", label: "Essential Security Tokens" },
  { id: "analytics-cookies", number: "05", label: "Analytics & Telemetry" },
  { id: "third-party-cookies", number: "06", label: "Third-Party Technologies" },
  { id: "managing-preferences", number: "07", label: "Managing Preferences" },
  { id: "browser-controls", number: "08", label: "Browser Cookie Controls" },
  { id: "policy-updates", number: "09", label: "Changes to This Policy" },
  { id: "contact-info", number: "10", label: "Contact Information" },
];

export function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy | Atharva Kote"
      description="Official Cookie Policy for Atharva Kote's developer portfolio (atharvakote.vercel.app). Understand the essential anti-abuse tokens, analytics cookies, and local storage mechanisms used."
      path="/cookie-policy"
      headerTitle="Cookie Policy"
      headerDescription="This Cookie Policy provides transparent disclosure regarding HTTP cookies, local storage mechanisms, and cryptographic anti-abuse tokens utilized across atharvakote.vercel.app."
      lastUpdated="November 13, 2026"
      readingTime="5 min read"
      tocItems={TOC_ITEMS}
      prev={{ title: "License & IP", href: "/license" }}
      next={{ title: "Credits & Attributions", href: "/credits" }}
    >
      <LegalSection id="intro" number="01" title="Introduction">
        <p>
          This Cookie Policy explains how Atharva Kote (&ldquo;we&rdquo;, &ldquo;us&rdquo;) uses cookies and similar storage technologies on the developer portfolio website accessible at{" "}
          <a
            href="https://atharvakote.vercel.app"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            https://atharvakote.vercel.app
          </a>
          .
        </p>
        <p>
          Our technical philosophy is grounded in minimal data footprint. We do not use advertising networks, behavioral tracking pixels, or cross-site profiling cookies.
        </p>
      </LegalSection>

      <LegalSection id="what-are-cookies" number="02" title="What Are Cookies?">
        <p>
          Cookies are small text files placed on your computer or mobile device by websites that you visit. They are widely used to make websites work properly, improve browsing efficiency, safeguard against automated attacks, and provide aggregate reporting.
        </p>
        <p>
          Cookies can be &ldquo;session&rdquo; cookies (which expire when you close your browser) or &ldquo;persistent&rdquo; cookies (which remain stored on your device until they reach a specified expiration date or are manually deleted).
        </p>
      </LegalSection>

      <LegalSection id="technologies-used" number="03" title="Cookies & Similar Technologies">
        <p>
          Beyond standard HTTP cookies, modern web applications may utilize browser storage APIs:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">HTTP Cookies:</strong> Sent automatically between your browser and our serverless edge functions on HTTP requests.
          </li>
          <li>
            <strong className="text-white">HTML5 LocalStorage:</strong> Client-side browser storage that does not transmit data over the network with each HTTP request. In this application, LocalStorage is used exclusively to persist UI preferences, specifically:
            <div className="mt-2 p-3 rounded-xl border border-white/[0.08] bg-bg-card/40 font-mono text-xs">
              <span className="text-primary font-bold">Key:</span> <span className="text-white">&quot;theme&quot;</span> |{" "}
              <span className="text-primary font-bold">Value:</span> <span className="text-white">&quot;dark&quot;</span> |{" "}
              <span className="text-text-dim">Purpose: Enforcing dark mode consistency without layout flashes</span>
            </div>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="essential-cookies" number="04" title="Essential Security & Anti-Abuse Tokens">
        <p>
          Our application implements a real-time global visitor counter backed by Upstash Redis and serverless edge functions (<code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">api/visit.ts</code>).
        </p>
        <p>
          To prevent counter inflation from page refreshes and safeguard against automated scraping, the following strictly essential cookie is issued:
        </p>

        <div className="rounded-xl border border-white/[0.08] bg-bg-card/50 overflow-hidden my-4">
          <div className="p-4 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-primary">visitor_token</span>
              <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider">Strictly Essential</span>
            </div>
          </div>
          <div className="p-4 space-y-2 font-mono text-xs text-text-secondary">
            <p><strong className="text-white">Type:</strong> HTTP-Only Cookie</p>
            <p><strong className="text-white">Provider:</strong> atharvakote.vercel.app (/api/visit)</p>
            <p><strong className="text-white">Duration:</strong> 365 days (1 year)</p>
            <p><strong className="text-white">Flags:</strong> HttpOnly; Secure; SameSite=Lax</p>
            <p><strong className="text-white">Content:</strong> Cryptographically signed UUID (HMAC-SHA256 signature). Zero personal data.</p>
            <p><strong className="text-white">Function:</strong> Allows the server to recognize repeat visits within 24 hours, ensuring each unique visitor increments the public counter only once per day.</p>
          </div>
        </div>

        <p>
          Because this cookie is strictly necessary for anti-abuse and security integrity, it does not require prior consent under GDPR Article 5(3) of the ePrivacy Directive.
        </p>
      </LegalSection>

      <LegalSection id="analytics-cookies" number="05" title="Analytics & Telemetry (Google Analytics 4)">
        <p>
          If enabled via the production environment configuration (<code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">VITE_GA_MEASUREMENT_ID</code>), Google Analytics 4 may set first-party telemetry cookies:
        </p>

        <div className="rounded-xl border border-white/[0.08] bg-bg-card/50 overflow-hidden my-4">
          <div className="p-4 border-b border-white/[0.08] bg-white/[0.02]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-primary">_ga, _ga_*</span>
              <span className="font-mono text-[11px] text-text-dim uppercase tracking-wider">Performance / Analytics</span>
            </div>
          </div>
          <div className="p-4 space-y-2 font-mono text-xs text-text-secondary">
            <p><strong className="text-white">Provider:</strong> Google LLC (gtag.js)</p>
            <p><strong className="text-white">Duration:</strong> Up to 2 years</p>
            <p><strong className="text-white">Function:</strong> Distinguishes unique sessions and aggregates anonymized page navigation stats.</p>
            <p><strong className="text-white">IP Anonymization:</strong> Enforced by default; complete IP addresses are never written to disk by Google Analytics.</p>
          </div>
        </div>

        <p>
          If Google Analytics is not configured or is blocked by your browser extensions, the portfolio continues to function with zero performance loss.
        </p>
      </LegalSection>

      <LegalSection id="third-party-cookies" number="06" title="Third-Party Technologies">
        <p>
          We do not embed third-party advertising cookies, social media tracking pixels (such as Meta Pixel or TikTok Pixel), or commercial retargeting beacons.
        </p>
        <p>
          When you follow links to external platforms (such as GitHub, LinkedIn, or LeetCode), those external domains may place their own cookies according to their policies.
        </p>
      </LegalSection>

      <LegalSection id="managing-preferences" number="07" title="Managing Cookie Preferences">
        <p>
          You have full control over cookie storage on your device. You can choose to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Block or delete all cookies via your web browser settings.</li>
          <li>Block only third-party cookies while retaining first-party essential cookies.</li>
          <li>Browse using Private Browsing or Incognito mode, which automatically purges all cookies and storage items when the session ends.</li>
          <li>Utilize privacy-focused extensions (such as uBlock Origin or Privacy Badger) to block telemetry scripts.</li>
        </ul>
      </LegalSection>

      <LegalSection id="browser-controls" number="08" title="Browser Cookie Controls">
        <p>
          Most web browsers allow you to manage cookie preferences through their settings menus. Here are direct instructions for major browsers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies &gt; See all site data and permissions.
          </li>
          <li>
            <strong className="text-white">Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection &gt; Cookies and Site Data.
          </li>
          <li>
            <strong className="text-white">Apple Safari:</strong> Settings &gt; Privacy &gt; Manage Website Data &gt; Block all cookies.
          </li>
          <li>
            <strong className="text-white">Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies and site data.
          </li>
          <li>
            <strong className="text-white">Brave:</strong> Settings &gt; Shields &gt; Content filtering &gt; Block cross-site cookies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="policy-updates" number="09" title="Changes to This Policy">
        <p>
          This Cookie Policy may be updated occasionally to reflect technological enhancements, architectural changes, or evolving data protection regulations. The date of the latest update is always reflected at the top of this page.
        </p>
      </LegalSection>

      <LegalSection id="contact-info" number="10" title="Contact Information">
        <p>
          If you have any questions or require further clarification regarding our cookie practices, please contact:
        </p>
        <div className="p-5 rounded-xl border border-white/[0.08] bg-bg-card/40 font-mono text-xs sm:text-[13px] space-y-1.5 text-text-secondary">
          <p className="text-white font-semibold">Atharva Kote</p>
          <p>
            Email:{" "}
            <a
              href="mailto:atharvkote3@gmail.com?subject=Cookie%20Policy%20Question"
              className="text-primary hover:underline"
            >
              atharvkote3@gmail.com
            </a>
          </p>
          <p>Website: https://atharvakote.vercel.app</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

export default CookiePolicyPage;

