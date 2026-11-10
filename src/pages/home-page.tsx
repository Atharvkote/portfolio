import { lazy, Suspense } from "react";
import { Navbar } from "../components/layout/navbar";
import { SocialBar } from "../components/layout/social-bar";
import { QuickAccess } from "../components/layout/quick-access";
import { SEO } from "../components/layout/seo";
import { Hero } from "../components/sections/hero";

// Lazy loaded below-the-fold components for optimized initial load
const About = lazy(() => import("../components/sections/about").then((m) => ({ default: m.About })));
const TechStack = lazy(() => import("../components/sections/tech-stack").then((m) => ({ default: m.TechStack })));
const Experience = lazy(() => import("../components/sections/experience").then((m) => ({ default: m.Experience })));
const Education = lazy(() => import("../components/sections/education").then((m) => ({ default: m.Education })));
const Projects = lazy(() => import("../components/sections/project-showcase").then((m) => ({ default: m.Projects })));
const GitHubContributionCalendar = lazy(() => import("../components/sections/github-contribution-calendar").then((m) => ({ default: m.GitHubContributionCalendar })));
const Contact = lazy(() => import("../components/layout/contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("../components/layout/contact").then((m) => ({ default: m.Footer })));
const BackendDevops = lazy(() => import("../components/sections/cards").then((m) => ({ default: m.BackendDevops })));

export function HomePage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-clip">
      <SEO path="/" />
      {/* Fixed Elements */}
      <Navbar />
      <SocialBar />
      <QuickAccess />

      {/* Hero Section — Full Viewport Width */}
      <Hero />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 md:px-6 lg:px-0">
        <Suspense fallback={null}>
          <About />
          <BackendDevops />
          <Experience />
          <TechStack />
          <Projects />
          <GitHubContributionCalendar />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
