import { LegalLayout } from "../../components/legal/legal-layout";
import { LegalSection } from "../../components/legal/legal-section";
import type { TOCItem } from "../../components/legal/legal-toc";

const TOC_ITEMS: TOCItem[] = [
  { id: "introduction", number: "01", label: "Introduction & Scope" },
  { id: "information-collected", number: "02", label: "Information We Collect" },
  { id: "automatic-telemetry", number: "03", label: "Automated Data & Telemetry" },
  { id: "purpose-of-processing", number: "04", label: "How We Use Information" },
  { id: "direct-communications", number: "05", label: "Inquiries & Communications" },
  { id: "third-party-services", number: "06", label: "Third-Party Services" },
  { id: "storage-and-retention", number: "07", label: "Storage & Retention" },
  { id: "data-security", number: "08", label: "Security & Safeguards" },
  { id: "privacy-rights", number: "09", label: "Your Privacy Rights" },
  { id: "external-links", number: "10", label: "External Links & Repositories" },
  { id: "policy-updates", number: "11", label: "Changes to This Policy" },
  { id: "contact-info", number: "12", label: "Contact & Data Inquiries" },
];

export function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy | Atharva Kote"
      description="Official Privacy Policy for Atharva Kote's developer portfolio (atharvakote.vercel.app). Understand how visitor analytics, cookies, and communication data are protected."
      path="/privacy-policy"
      headerTitle="Privacy Policy"
      headerDescription="This Privacy Policy outlines how Atharva Kote collects, uses, and protects your information when you visit atharvakote.vercel.app, interact with engineering case studies, or initiate direct professional correspondence."
      lastUpdated="November 13, 2026"
      readingTime="6 min read"
      tocItems={TOC_ITEMS}
      next={{ title: "Terms of Use", href: "/terms-of-use" }}
    >
      <LegalSection id="introduction" number="01" title="Introduction & Scope">
        <p>
          Welcome to the personal developer portfolio of Atharva Kote, accessible at{" "}
          <a
            href="https://atharvakote.vercel.app"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            https://atharvakote.vercel.app
          </a>
          . As a software engineer specializing in backend engineering and distributed systems, I hold user privacy, data minimization, and technical transparency to the highest professional standard.
        </p>
        <p>
          This Privacy Policy governs your use of this website, its serverless APIs, and any direct electronic communications initiated through the platform. By accessing or using this website, you acknowledge the terms outlined herein.
        </p>
      </LegalSection>

      <LegalSection id="information-collected" number="02" title="Information We Collect">
        <p>
          This website operates under a strict principle of data minimization. We do not require account registration, do not maintain public commenting databases, and do not harvest personal details for marketing or commercial redistribution.
        </p>
        <p>Information you may provide directly includes:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Professional Correspondence:</strong> When you contact me via email (e.g., for recruiting, engineering inquiries, or technical collaborations), you voluntarily provide your name, email address, company affiliation, and the contents of your message.
          </li>
          <li>
            <strong className="text-white">Voluntary Inquiries:</strong> Any additional technical questions, feedback, or scheduling details transmitted directly to my inbox.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="automatic-telemetry" number="03" title="Automated Data & Telemetry">
        <p>
          When you navigate this website, certain technical diagnostic data is processed automatically by our hosting platform and serverless edge functions:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">HTTP Request Metadata:</strong> Edge routing nodes log standard connection parameters, including your anonymized IP address, user-agent string, operating system, browser version, referring URL, and timestamp.
          </li>
          <li>
            <strong className="text-white">Unique Visitor Anti-Abuse Token:</strong> To operate our real-time global visitor counter while preventing bot inflation and rate-limit circumvention, our serverless function (<code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">/api/visit</code>) issues an HMAC-SHA256 cryptographically signed cookie (<code className="font-mono text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">visitor_token</code>). This token contains a randomized UUIDv4 and signature; it contains zero personally identifiable information (PII).
          </li>
          <li>
            <strong className="text-white">Client-Side Analytics (Optional):</strong> If enabled in the application build, Google Analytics 4 tracks aggregated, pseudonymized usage patterns (such as page views, navigation paths, and device viewport categories) with IP anonymization enabled.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="purpose-of-processing" number="04" title="How We Use Your Information">
        <p>Information processed by this website is used solely for the following legitimate purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Direct Communication:</strong> Responding to professional inquiries, job opportunities, contract discussions, and open-source project collaborations.
          </li>
          <li>
            <strong className="text-white">Infrastructure Integrity & Security:</strong> Preventing brute-force attacks, DDoS attempts, and abusive scraping of serverless API endpoints using sliding-window rate limiting.
          </li>
          <li>
            <strong className="text-white">Operational Analytics:</strong> Monitoring aggregated visitor counts, popular project case studies, and rendering performance across browsers and devices.
          </li>
        </ul>
        <p>
          Under no circumstances is your personal information sold, leased, rented, or monetized through third-party data brokers or advertising networks.
        </p>
      </LegalSection>

      <LegalSection id="direct-communications" number="05" title="Contact Form & Direct Inquiries">
        <p>
          This portfolio does not utilize opaque third-party contact form brokers or intermediary relay services (such as Formspree or EmailJS). Contact actions directly launch your native email client or webmail interface to compose an email to{" "}
          <a
            href="mailto:atharvkote3@gmail.com"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            atharvkote3@gmail.com
          </a>
          .
        </p>
        <p>
          All communications are delivered directly into Atharva Kote's secure Google Workspace / Gmail inbox and are protected by Google's industry-standard TLS encryption and zero-trust security infrastructure.
        </p>
      </LegalSection>

      <LegalSection id="third-party-services" number="06" title="Third-Party Infrastructure & Services">
        <p>
          To maintain reliable, zero-latency global deployment and real-time backend state, this website integrates with the following trusted third-party providers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Vercel Inc. (Hosting & Edge Compute):</strong> Hosts the static web application and executes serverless API routes. Vercel processes standard web access logs and IP routing data in compliance with SOC 2 Type 2 and ISO 27001 standards.
          </li>
          <li>
            <strong className="text-white">Upstash Inc. (Serverless Redis):</strong> Provides serverless Redis database storage for our atomic visitor counter and distributed rate limiter (<code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">api/visit.ts</code>). Redis only stores an aggregated counter and ephemeral hashed IP rate-limit keys with 60-second TTLs. No personal profiles are retained.
          </li>
          <li>
            <strong className="text-white">Google LLC (Google Analytics 4):</strong> When configured, Google Analytics collects anonymous event telemetry using cookies (<code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">_ga</code>). IP anonymization is enforced by default.
          </li>
          <li>
            <strong className="text-white">GitHub Inc. (GraphQL API):</strong> The portfolio queries GitHub's public GraphQL API to fetch public contribution counts for the username <code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">Atharvkote</code>. No visitor GitHub data or credentials are ever requested or accessed.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="storage-and-retention" number="07" title="Data Storage & Retention Schedules">
        <p>Data retention is governed by strict operational necessity:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Server Access Logs:</strong> Vercel operational edge logs are retained for a maximum of 30 days for debugging, availability monitoring, and threat detection, after which they are permanently purged.
          </li>
          <li>
            <strong className="text-white">Rate-Limiting Keys:</strong> IP-based request throttles stored in Upstash Redis expire automatically after 60 seconds.
          </li>
          <li>
            <strong className="text-white">Visitor Counter:</strong> The global visitor count is an anonymous integer incremented in Redis. It does not contain or link to visitor identity.
          </li>
          <li>
            <strong className="text-white">Direct Email Correspondence:</strong> Inquiries sent via email are retained for the duration of the professional exchange and archived according to standard email hygiene practices.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="data-security" number="08" title="Security Architecture & Safeguards">
        <p>
          Security is built into the core engineering of this portfolio:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">TLS/HTTPS Everywhere:</strong> All traffic between your browser and Vercel edge nodes is encrypted in transit using TLS 1.3 with modern cipher suites and HTTP Strict Transport Security (HSTS).
          </li>
          <li>
            <strong className="text-white">Cryptographic Cookie Signing:</strong> Visitor tracking cookies are signed on the server with HMAC-SHA256. Tampered or unsigned cookies are rejected immediately using timing-safe comparisons to eliminate side-channel vulnerabilities.
          </li>
          <li>
            <strong className="text-white">Environment Secret Isolation:</strong> Redis tokens, cookie secrets, and API credentials are kept exclusively on the serverless backend. Zero API keys or secrets are exposed in client bundles.
          </li>
          <li>
            <strong className="text-white">Sliding-Window Rate Limiting:</strong> Serverless endpoints enforce IP-based rate limiting (30 requests per minute) to protect infrastructure from automated denial-of-service attempts.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="privacy-rights" number="09" title="Your Privacy Rights">
        <p>
          Depending on your location (including the European Economic Area under GDPR and California under CCPA/CPRA), you possess specific legal rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Right to Access:</strong> You may request confirmation of whether any personal data concerning you is processed.
          </li>
          <li>
            <strong className="text-white">Right to Rectification & Deletion:</strong> You may request the correction or permanent deletion of any direct email correspondence you have sent me.
          </li>
          <li>
            <strong className="text-white">Right to Restrict or Object:</strong> You may object to the processing of your communication data at any time.
          </li>
          <li>
            <strong className="text-white">Right to Opt-Out of Analytics:</strong> You can block Google Analytics tracking by enabling the "Do Not Track" (DNT) or Global Privacy Control (GPC) setting in your browser, or by using content-blocking extensions.
          </li>
        </ul>
        <p>
          To exercise any of these rights, simply email{" "}
          <a
            href="mailto:atharvkote3@gmail.com?subject=Privacy%20Data%20Request"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            atharvkote3@gmail.com
          </a>
          . All verified requests will be addressed promptly within 30 days.
        </p>
      </LegalSection>

      <LegalSection id="external-links" number="10" title="External Links & Repositories">
        <p>
          This website contains hyperlinks to external platforms, including GitHub (<a href="https://github.com/Atharvkote" target="_blank" rel="noreferrer" className="text-primary hover:underline">github.com/Atharvkote</a>), LinkedIn, X (Twitter), LeetCode, and third-party demonstration URLs.
        </p>
        <p>
          These external platforms operate under their own independent privacy notices. Atharva Kote does not exercise control over third-party practices and accepts no responsibility for their content or data collection policies.
        </p>
      </LegalSection>

      <LegalSection id="policy-updates" number="11" title="Changes to This Policy">
        <p>
          I may periodically update this Privacy Policy to reflect modifications to infrastructure, technical implementations, or regulatory obligations. Any changes will be published directly on this page with an updated "Last updated" date.
        </p>
        <p>
          Substantial changes affecting how visitor data is handled will be documented transparently in this section.
        </p>
      </LegalSection>

      <LegalSection id="contact-info" number="12" title="Contact & Data Inquiries">
        <p>
          If you have questions, feedback, or data privacy requests concerning this Privacy Policy or the security practices of this website, please contact:
        </p>
        <div className="p-5 rounded-xl border border-white/[0.08] bg-bg-card/40 font-mono text-xs sm:text-[13px] space-y-1.5 text-text-secondary">
          <p className="text-white font-semibold">Atharva Kote</p>
          <p>Software Engineer & Distributed Systems Developer</p>
          <p>
            Email:{" "}
            <a
              href="mailto:atharvkote3@gmail.com"
              className="text-primary hover:underline"
            >
              atharvkote3@gmail.com
            </a>
          </p>
          <p>Website: https://atharvakote.vercel.app</p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}

export default PrivacyPolicyPage;

