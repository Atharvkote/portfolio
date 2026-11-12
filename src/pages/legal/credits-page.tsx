import { LegalLayout } from "../../components/legal/legal-layout";
import { LegalSection } from "../../components/legal/legal-section";
import type { TOCItem } from "../../components/legal/legal-toc";
import { ExternalLink } from "lucide-react";

interface CreditItemProps {
  name: string;
  url: string;
  license: string;
  purpose: string;
}

function CreditItem({ name, url, license, purpose }: CreditItemProps) {
  return (
    <div className="py-3 sm:py-3.5 border-b border-white/[0.05] last:border-b-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-display font-semibold text-white hover:text-primary transition-colors text-[15px] inline-flex items-center gap-1.5"
          >
            <span>{name}</span>
            <ExternalLink size={12} className="opacity-60" aria-hidden="true" />
          </a>
          <span className="font-mono text-[10px] text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
            {license}
          </span>
        </div>
        <p className="text-text-secondary text-xs sm:text-[13px] mt-0.5 leading-normal">
          {purpose}
        </p>
      </div>
      <span className="font-mono text-[11px] text-text-dim shrink-0 truncate sm:text-right">
        {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
      </span>
    </div>
  );
}

const TOC_ITEMS: TOCItem[] = [
  { id: "core-frameworks", number: "01", label: "Core & Frameworks" },
  { id: "ui-styling", number: "02", label: "UI & Styling" },
  { id: "animation-smooth-scroll", number: "03", label: "Animation & Smooth Scroll" },
  { id: "webgl-canvas", number: "04", label: "WebGL & Visual Effects" },
  { id: "icons-assets", number: "05", label: "Icons & Graphic Assets" },
  { id: "typography", number: "06", label: "Typography & Web Fonts" },
  { id: "infrastructure", number: "07", label: "Hosting & Infrastructure" },
  { id: "acknowledgements", number: "08", label: "Acknowledgements" },
];

export function CreditsPage() {
  return (
    <LegalLayout
      title="Credits & Attributions | Atharva Kote"
      description="Comprehensive credits and attributions acknowledging the open-source libraries, design frameworks, WebGL tools, and infrastructure powering Atharva Kote's developer portfolio."
      path="/credits"
      headerTitle="Credits & Attributions"
      headerDescription="This page acknowledges the extraordinary open-source software, design systems, WebGL tooling, and cloud infrastructure that power atharvakote.vercel.app."
      lastUpdated="November 13, 2026"
      readingTime="4 min read"
      tocItems={TOC_ITEMS}
      prev={{ title: "Cookie Policy", href: "/cookie-policy" }}
      next={{ title: "Privacy Policy", href: "/privacy-policy" }}
    >
      <LegalSection id="core-frameworks" number="01" title="Core & Frameworks">
        <p>
          The architecture of this portfolio is built upon modern, high-performance web standards and runtime foundations:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="React 19"
            url="https://react.dev"
            license="MIT"
            purpose="Declarative component architecture, Suspense boundaries, and modern rendering lifecycle."
          />
          <CreditItem
            name="TypeScript"
            url="https://www.typescriptlang.org"
            license="Apache 2.0"
            purpose="End-to-end static type safety, strict compiler enforcement, and interface contracts."
          />
          <CreditItem
            name="Vite 8"
            url="https://vite.dev"
            license="MIT"
            purpose="Next-generation frontend tooling, lightning-fast HMR, and optimized Rollup production bundling."
          />
          <CreditItem
            name="React Router 7"
            url="https://reactrouter.com"
            license="MIT"
            purpose="Client-side routing, route transitions, and URL state synchronization."
          />
        </div>
      </LegalSection>

      <LegalSection id="ui-styling" number="02" title="UI & Styling">
        <p>
          Design tokens, dark aesthetic surfaces, and responsive utility layouts are structured with:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="Tailwind CSS v4"
            url="https://tailwindcss.com"
            license="MIT"
            purpose="Modern CSS engine with custom theme tokens, OKLCH color palettes, and responsive primitives."
          />
          <CreditItem
            name="Sonner"
            url="https://sonner.emilkowal.ski"
            license="MIT"
            purpose="An opinionated, accessible toast notification component for React."
          />
          <CreditItem
            name="clsx & tailwind-merge"
            url="https://github.com/lukeed/clsx"
            license="MIT"
            purpose="Utility for conditionally joining classNames without Tailwind class conflicts."
          />
        </div>
      </LegalSection>

      <LegalSection id="animation-smooth-scroll" number="03" title="Animation & Smooth Scroll">
        <p>
          Fluid motion, choreography, and hardware-accelerated momentum scrolling are powered by:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="Framer Motion"
            url="https://www.framer.com/motion"
            license="MIT"
            purpose="Production-ready motion engine for spring physics, layout animations, and gesture tracking."
          />
          <CreditItem
            name="Lenis"
            url="https://lenis.darkroom.engineering"
            license="MIT"
            purpose="High-performance, lightweight smooth scrolling library optimized for modern browsers."
          />
        </div>
      </LegalSection>

      <LegalSection id="webgl-canvas" number="04" title="WebGL & Visual Effects">
        <p>
          Custom GPU-accelerated interactive canvas effects and shaders utilize:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="OGL"
            url="https://github.com/oframe/ogl"
            license="MIT"
            purpose="Minimal WebGL library by oframe powering the interactive fluid splash cursor and shader passes."
          />
        </div>
      </LegalSection>

      <LegalSection id="icons-assets" number="05" title="Icons & Graphic Assets">
        <p>
          Clean, uniform iconography and brandmarks are provided by:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="Lucide React"
            url="https://lucide.dev"
            license="ISC"
            purpose="Beautiful, consistent icon toolkit for modern UI navigation and system indicators."
          />
          <CreditItem
            name="React Icons"
            url="https://react-icons.github.io/react-icons"
            license="MIT"
            purpose="Comprehensive icon set including Simple Icons and Devicons for programming languages."
          />
        </div>
      </LegalSection>

      <LegalSection id="typography" number="06" title="Typography & Web Fonts">
        <p>
          The portfolio pairs contemporary geometric sans-serif type with technical monospace and classical display accents:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="Manrope"
            url="https://fonts.google.com/specimen/Manrope"
            license="OFL 1.1"
            purpose="Primary display typography designed by Michael Sharanda. Modern semi-geometric grotesque."
          />
          <CreditItem
            name="JetBrains Mono"
            url="https://www.jetbrains.com/lp/mono"
            license="Apache 2.0"
            purpose="Monospace typeface optimized for code readability, technical badges, and numbers."
          />
          <CreditItem
            name="Bodoni Moda"
            url="https://fonts.google.com/specimen/Bodoni+Moda"
            license="OFL 1.1"
            purpose="High-contrast serif display typeface used for stylized heading emphasis."
          />
          <CreditItem
            name="Bonheur Royale & Allura"
            url="https://fonts.google.com/specimen/Bonheur+Royale"
            license="OFL 1.1"
            purpose="Expressive calligraphic script fonts for signature accents and brand typography."
          />
        </div>
      </LegalSection>

      <LegalSection id="infrastructure" number="07" title="Hosting & Infrastructure">
        <p>
          Continuous delivery, global CDN caching, and distributed storage are provided by:
        </p>
        <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 p-4 sm:p-5 divide-y divide-white/[0.05] my-4">
          <CreditItem
            name="Vercel"
            url="https://vercel.com"
            license="Proprietary / Platform"
            purpose="Global Edge Network, automatic deployment pipeline, and serverless Node.js function execution."
          />
          <CreditItem
            name="Upstash Redis"
            url="https://upstash.com"
            license="Proprietary / Platform"
            purpose="Serverless Redis database powering low-latency atomic visitor counting and rate limiting."
          />
          <CreditItem
            name="GitHub"
            url="https://github.com"
            license="Proprietary / Platform"
            purpose="Source control management, CI/CD integration, and contribution calendar GraphQL telemetry."
          />
        </div>
      </LegalSection>

      <LegalSection id="acknowledgements" number="08" title="Acknowledgements">
        <p>
          Heartfelt gratitude to the open-source maintainers, web standard committees, and design engineers whose public tools and creative libraries made this portfolio possible.
        </p>
        <p>
          If you notice any attribution omission or require licensing clarification, please submit an issue on GitHub or reach out to{" "}
          <a
            href="mailto:atharvkote3@gmail.com"
            className="text-primary hover:underline underline-offset-4 font-mono text-[14px]"
          >
            atharvkote3@gmail.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

export default CreditsPage;

