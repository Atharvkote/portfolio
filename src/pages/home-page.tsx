import { lazy, Suspense } from "react";
import { Navbar } from "../components/layout/navbar";
import { SocialBar } from "../components/layout/social-bar";
import { QuickAccess } from "../components/layout/quick-access";
import { SEO } from "../components/layout/seo";
import { Hero } from "../components/sections/hero";

const About = lazy(() => import("../components/sections/about").then((m) => ({ default: m.About })));
const TechStack = lazy(() => import("../components/sections/tech-stack").then((m) => ({ default: m.TechStack })));
const Experience = lazy(() => import("../components/sections/experience").then((m) => ({ default: m.Experience })));
const Education = lazy(() => import("../components/sections/education").then((m) => ({ default: m.Education })));
const Projects = lazy(() => import("../components/sections/project-showcase").then((m) => ({ default: m.Projects })));
const GitHubContributionCalendar = lazy(() => import("../components/sections/github-contribution-calendar").then((m) => ({ default: m.GitHubContributionCalendar })));
const Contact = lazy(() => import("../components/sections/contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("../components/layout/footer").then((m) => ({ default: m.Footer })));
const BackendDevops = lazy(() => import("../components/sections/cards").then((m) => ({ default: m.BackendDevops })));

function SectionFallback({ minHeight = "min-h-[200px]" }: { minHeight?: string }) {
  return <div className={`w-full ${minHeight}`} aria-hidden="true" />;
}

export function HomePage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-clip">
      <SEO path="/" />
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <Hero />

      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 md:px-6 lg:px-0">
        <Suspense fallback={<SectionFallback minHeight="min-h-[320px]" />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
          <BackendDevops />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[250px]" />}>
          <GitHubContributionCalendar />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[250px]" />}>
          <Education />
        </Suspense>

        <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback minHeight="min-h-[120px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
