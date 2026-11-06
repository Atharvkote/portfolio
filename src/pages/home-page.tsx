import { lazy, Suspense } from "react";
import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { SEO } from "../components/seo";
import { Hero } from "../components/hero";

// Lazy loaded below-the-fold components for optimized initial load
const About = lazy(() => import("../components/about").then((m) => ({ default: m.About })));
const TechStack = lazy(() => import("../components/tech-stack").then((m) => ({ default: m.TechStack })));
const Experience = lazy(() => import("../components/experience").then((m) => ({ default: m.Experience })));
const Education = lazy(() => import("../components/education").then((m) => ({ default: m.Education })));
const Projects = lazy(() => import("../components/project-showcase").then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import("../components/contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("../components/contact").then((m) => ({ default: m.Footer })));
const BackendDevops = lazy(() => import("../components/cards").then((m) => ({ default: m.BackendDevops })));

export function HomePage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-hidden">
      <SEO path="/" />
      {/* Fixed Elements */}
      <Navbar />
      <SocialBar />
      <QuickAccess />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 md:px-6 lg:px-0">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <TechStack />
          <BackendDevops/>
          <Experience />
          <Projects />
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
