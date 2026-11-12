import { LegalLayout } from "../../components/legal/legal-layout";
import { LegalSection } from "../../components/legal/legal-section";
import type { TOCItem } from "../../components/legal/legal-toc";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";

const TOC_ITEMS: TOCItem[] = [
  { id: "source-code", number: "01", label: "Portfolio Source Code" },
  { id: "mit-license-text", number: "02", label: "MIT License (Verbatim)" },
  { id: "attribution-obligations", number: "03", label: "Copyright & Attribution" },
  { id: "personal-branding-assets", number: "04", label: "Personal Assets & Likeness" },
  { id: "third-party-libraries", number: "05", label: "Third-Party Components" },
  { id: "project-specific-licenses", number: "06", label: "Showcased Project Licenses" },
  { id: "licensing-inquiries", number: "07", label: "Contact & Permissions" },
];

const MIT_LICENSE_TEXT = `MIT License

Copyright (c) 2026 Atharva Kote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export function LicensePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MIT_LICENSE_TEXT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <LegalLayout
      title="License & IP | Atharva Kote"
      description="Official MIT License and Intellectual Property documentation for Atharva Kote's developer portfolio (atharvakote.vercel.app)."
      path="/license"
      headerTitle="License & IP"
      headerDescription="Comprehensive licensing documentation for the v2-portfolio codebase, detailing terms of the MIT License, personal asset exclusions, and third-party library attributions."
      lastUpdated="November 13, 2026"
      readingTime="4 min read"
      tocItems={TOC_ITEMS}
      prev={{ title: "Terms of Use", href: "/terms-of-use" }}
      next={{ title: "Cookie Policy", href: "/cookie-policy" }}
    >
      <LegalSection id="source-code" number="01" title="Portfolio Source Code">
        <p>
          The underlying source code of this personal developer portfolio is published as an open-source project and is publicly accessible on GitHub:
        </p>
        <div className="flex flex-wrap items-center gap-3 my-4">
          <a
            href="https://github.com/Atharvkote/v2-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-semibold hover:bg-primary/20 transition-all duration-200"
          >
            <span>GitHub: Atharvkote/v2-portfolio</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/Atharvkote/v2-portfolio/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-bg-card/40 text-text-secondary hover:text-white hover:border-white/20 font-mono text-xs transition-all duration-200"
          >
            <span>View LICENSE on GitHub</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
        <p>
          The software is licensed under the standard, permissive MIT License, enabling developers worldwide to learn from, fork, and adapt its architectural patterns, animation setups, and WebGL techniques.
        </p>
      </LegalSection>

      <LegalSection id="mit-license-text" number="02" title="MIT License (Verbatim Full Text)">
        <p>
          The complete, official text of the MIT License applying to the repository codebase is reproduced below:
        </p>

        <div className="relative rounded-2xl border border-white/[0.1] bg-bg-card/80 p-5 sm:p-6 overflow-hidden my-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
              LICENSE — MIT
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-text-muted hover:text-white hover:border-white/20 transition-colors"
              aria-label="Copy MIT License text to clipboard"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-primary" />
                  <span className="text-primary">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy License</span>
                </>
              )}
            </button>
          </div>

          <pre className="font-mono text-xs sm:text-[13px] text-text-secondary leading-relaxed whitespace-pre-wrap select-all">
            {MIT_LICENSE_TEXT}
          </pre>
        </div>
      </LegalSection>

      <LegalSection id="attribution-obligations" number="03" title="Copyright & Attribution">
        <p>
          Under the terms of the MIT License, you are granted extensive freedom to inspect, fork, modify, merge, publish, distribute, sublicense, and commercially reuse the source code.
        </p>
        <p>
          In exchange, you are legally obligated to retain the original copyright notice:
        </p>
        <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] font-mono text-xs sm:text-[13px] text-white">
          Copyright (c) 2026 Atharva Kote
        </div>
        <p>
          This notice and the permission notice must accompany all substantial portions of the software in any derivative distribution or fork.
        </p>
      </LegalSection>

      <LegalSection id="personal-branding-assets" number="04" title="Personal Assets & Likeness (Excluded from MIT)">
        <p>
          <strong className="text-white">Important Distinction:</strong> The MIT License applies strictly to the source code files and component implementations. It does NOT apply to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Personal Identity & Likeness:</strong> Personal photographs, portraits, avatar renders, and biography text of Atharva Kote.
          </li>
          <li>
            <strong className="text-white">Custom Brand Monogram:</strong> The &ldquo;A&rdquo; electric logo, custom monogram typography, and associated vector brandmarks.
          </li>
          <li>
            <strong className="text-white">Case Study Written Content:</strong> Original project descriptions, architectural breakdown text, career timeline write-ups, and resume documents.
          </li>
        </ul>
        <p>
          If you fork or adapt this portfolio to build your own personal website, you <strong className="text-white">must replace</strong> all personal images, logos, names, domain URLs, social media links, and biographical content with your own identity.
        </p>
      </LegalSection>

      <LegalSection id="third-party-libraries" number="05" title="Third-Party Components">
        <p>
          This application integrates various open-source packages, runtime libraries, and developer utilities. Each dependency retains its original copyright and license:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>React, Vite, Framer Motion, Lenis, and Tailwind CSS v4 are licensed under the MIT License.</li>
          <li>TypeScript is licensed under the Apache License 2.0.</li>
          <li>Lucide React is licensed under the ISC License.</li>
          <li>Web fonts (Manrope, Bodoni Moda, Bonheur Royale) are licensed under the SIL Open Font License 1.1.</li>
        </ul>
        <p>
          For a comprehensive directory of third-party software and author attributions, consult the{" "}
          <a href="/credits" className="text-primary hover:underline underline-offset-4">
            Credits & Attributions Page
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection id="project-specific-licenses" number="06" title="Showcased Project Licenses">
        <p>
          The software projects featured in the portfolio showcases (such as Distributed Microservices Architecture with Apache Kafka, Ticket Booking Platform, and AI-Powered Contactless Ordering) are hosted in standalone repositories.
        </p>
        <p>
          Each independent project maintains its own license file, which may be MIT, Apache 2.0, or proprietary. Refer to the respective GitHub repository of each project for governing terms.
        </p>
      </LegalSection>

      <LegalSection id="licensing-inquiries" number="07" title="Contact & Permissions">
        <p>
          For inquiries regarding commercial licensing of proprietary case studies, special permissions, or questions concerning the MIT License, contact:
        </p>
        <div className="p-5 rounded-xl border border-white/[0.08] bg-bg-card/40 font-mono text-xs sm:text-[13px] space-y-1.5 text-text-secondary">
          <p className="text-white font-semibold">Atharva Kote</p>
          <p>
            Email:{" "}
            <a
              href="mailto:atharvkote3@gmail.com?subject=Licensing%20Inquiry"
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

export default LicensePage;

