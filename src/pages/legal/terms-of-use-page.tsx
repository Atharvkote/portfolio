import { LegalLayout } from "../../components/legal/legal-layout";
import { LegalSection } from "../../components/legal/legal-section";
import type { TOCItem } from "../../components/legal/legal-toc";

const TOC_ITEMS: TOCItem[] = [
  { id: "acceptance", number: "01", label: "Acceptance of Terms" },
  { id: "purpose", number: "02", label: "Website Purpose" },
  { id: "intellectual-property", number: "03", label: "Intellectual Property" },
  { id: "permitted-use", number: "04", label: "Permitted Use" },
  { id: "prohibited-activities", number: "05", label: "Prohibited Activities" },
  { id: "project-demos", number: "06", label: "Project Demonstrations" },
  { id: "open-source", number: "07", label: "Open-Source Codebase" },
  { id: "third-party-links", number: "08", label: "Third-Party Services" },
  { id: "disclaimer", number: "09", label: "Disclaimer of Warranties" },
  { id: "liability-limitation", number: "10", label: "Limitation of Liability" },
  { id: "terms-changes", number: "11", label: "Changes to These Terms" },
  { id: "contact-info", number: "12", label: "Contact Information" },
];

export function TermsOfUsePage() {
  return (
    <LegalLayout
      title="Terms of Use | Atharva Kote"
      description="Terms of Use governing the access, viewing, and technical interaction with Atharva Kote's developer portfolio (atharvakote.vercel.app)."
      path="/terms-of-use"
      headerTitle="Terms of Use"
      headerDescription="These Terms of Use govern your access to and interaction with atharvakote.vercel.app, its architectural demonstrations, technical documentation, and serverless APIs."
      lastUpdated="November 13, 2026"
      readingTime="6 min read"
      tocItems={TOC_ITEMS}
      prev={{ title: "Privacy Policy", href: "/privacy-policy" }}
      next={{ title: "License & IP", href: "/license" }}
    >
      <LegalSection id="acceptance" number="01" title="Acceptance of Terms">
        <p>
          By accessing, browsing, or interacting with the website located at{" "}
          <a
            href="https://atharvakote.vercel.app"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            https://atharvakote.vercel.app
          </a>{" "}
          (the &ldquo;Website&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and all applicable regional, national, and international laws.
        </p>
        <p>
          If you do not agree with any of these terms, you are prohibited from using or accessing this Website.
        </p>
      </LegalSection>

      <LegalSection id="purpose" number="02" title="Website Purpose">
        <p>
          This Website is owned, designed, and operated by Atharva Kote as a personal engineering portfolio. The primary purposes of this platform are to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            Showcase professional background, technical competencies, and engineering philosophies in Java backend architecture, distributed systems, Spring Boot, Kafka, and Redis.
          </li>
          <li>
            Provide case studies, architectural breakdowns, benchmark metrics, and source code references for personal and open-source software projects.
          </li>
          <li>
            Facilitate professional recruiting communications, engineering discussions, and collaborative opportunities.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="intellectual-property" number="03" title="Intellectual Property">
        <p>
          A clear distinction is maintained between the open-source web application code and proprietary personal assets:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong className="text-white">Open-Source Framework:</strong> The frontend application code of this portfolio is licensed under the MIT License as documented in our{" "}
            <a href="/license" className="text-primary hover:underline underline-offset-4">
              License Page
            </a>
            .
          </li>
          <li>
            <strong className="text-white">Proprietary Personal Assets:</strong> All personal photographs, likeness, custom biographical writings, personal monogram logos (&ldquo;A&rdquo; electric identity), proprietary project case study narratives, and distinct personal branding elements are the exclusive intellectual property of Atharva Kote and are protected under copyright, trademark, and unfair competition laws.
          </li>
          <li>
            <strong className="text-white">No Endorsement or Impersonation:</strong> You may not use Atharva Kote&rsquo;s name, likeness, or personal branding in any manner that implies endorsement, sponsorship, or association without prior express written consent.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="permitted-use" number="04" title="Permitted Use">
        <p>You are granted a limited, revocable, non-exclusive license to:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            Access, view, and read content on this Website via standard web browsers for personal, educational, recruiting, or evaluation purposes.
          </li>
          <li>
            Fork or reference open-source code snippets in accordance with the MIT License terms, provided you replace all personal branding and identity elements with your own.
          </li>
          <li>
            Link to pages or articles on this Website, provided the link presents the content in its original context and does not frame or distort the materials.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="prohibited-activities" number="05" title="Prohibited Activities">
        <p>When interacting with this Website and its backend services, you agree NOT to:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            Engage in denial-of-service (DoS) attacks, flood requests, or automated scraping that disrupts serverless function availability.
          </li>
          <li>
            Attempt to forge, bypass, or tamper with cryptographically signed cookies (such as <code className="font-mono text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">visitor_token</code>) or circumvent API rate limiting.
          </li>
          <li>
            Probe, scan, or test the vulnerability of serverless endpoints without explicit authorization.
          </li>
          <li>
            Impersonate Atharva Kote or falsely represent an affiliation with Atharva Kote.
          </li>
          <li>
            Deploy automated bots, spiders, or headless crawlers in a manner that exceeds normal human browsing velocity or violates robots.txt directives.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="project-demos" number="06" title="Project Demonstrations & Technical Information">
        <p>
          The projects, benchmarks, and architectural designs featured on this Website (including Distributed Microservices with Apache Kafka, Ticket Booking Platform for Live Concerts, and AI-Powered Contactless Ordering) are presented for educational and demonstration purposes.
        </p>
        <p>
          While every effort is made to provide accurate architecture descriptions, system benchmarks, and code snippets, they are provided &ldquo;as is&rdquo;. Production deployments in external environments require independent validation, performance tuning, and security review.
        </p>
      </LegalSection>

      <LegalSection id="open-source" number="07" title="Open-Source Software">
        <p>
          The source code powering this portfolio website is publicly hosted on GitHub at{" "}
          <a
            href="https://github.com/Atharvkote/v2-portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            github.com/Atharvkote/v2-portfolio
          </a>
          .
        </p>
        <p>
          Each independent project showcased may be hosted in a separate repository governed by its own open-source license (such as Apache 2.0 or MIT). Visitors should consult the specific repository&rsquo;s <code className="font-mono text-xs text-white bg-white/[0.06] px-1.5 py-0.5 rounded">LICENSE</code> file for project-specific terms.
        </p>
      </LegalSection>

      <LegalSection id="third-party-links" number="08" title="Third-Party Services & Links">
        <p>
          This Website references third-party platforms, open-source repositories, and developer tools (including Vercel, Upstash, Google, GitHub, LinkedIn, and LeetCode).
        </p>
        <p>
          Atharva Kote does not control or endorse the content, uptime, privacy practices, or legal compliance of external sites. Accessing third-party resources is done entirely at your own risk.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" number="09" title="Disclaimer of Warranties">
        <p className="uppercase tracking-wider font-mono text-xs text-text-dim">
          Statutory Disclaimer
        </p>
        <p>
          THE WEBSITE, ITS CONTENT, TECHNICAL DEMONSTRATIONS, AND SERVERLESS APIS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, ATHARVA KOTE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          ATHARVA KOTE DOES NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR FREE OF DEFECTS OR SYSTEM COMPONENT ANOMALIES.
        </p>
      </LegalSection>

      <LegalSection id="liability-limitation" number="10" title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ATHARVA KOTE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA, GOODWILL, REVENUE, PROFITS, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO, USE OF, OR INABILITY TO USE THIS WEBSITE OR ITS CONTENTS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </LegalSection>

      <LegalSection id="terms-changes" number="11" title="Changes to These Terms">
        <p>
          Atharva Kote reserves the right, at sole discretion, to modify or replace these Terms of Use at any time. When modifications occur, the &ldquo;Last updated&rdquo; timestamp at the top of this document will be updated.
        </p>
        <p>
          Your continued use of the Website following the posting of changes constitutes binding acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="contact-info" number="12" title="Contact Information">
        <p>
          If you have questions, legal inquiries, or notices regarding these Terms of Use, please reach out via email:
        </p>
        <div className="p-5 rounded-xl border border-white/[0.08] bg-bg-card/40 font-mono text-xs sm:text-[13px] space-y-1.5 text-text-secondary">
          <p className="text-white font-semibold">Atharva Kote</p>
          <p>Software Engineer & Systems Developer</p>
          <p>
            Email:{" "}
            <a
              href="mailto:atharvkote3@gmail.com?subject=Terms%20of%20Use%20Inquiry"
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

export default TermsOfUsePage;

