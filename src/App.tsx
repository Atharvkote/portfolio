import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Loader } from "./components/loader";
import Option from "./lib/toast";
import { Toaster } from "sonner";
import { initGA, trackPageView } from "./lib/analytics";

// Lazy load pages for performance
const HomePage = lazy(() => import("./pages/home-page").then(m => ({ default: m.HomePage })));
const SkillsPage = lazy(() => import("./pages/skills-page").then(m => ({ default: m.SkillsPage })));
const WorkPage = lazy(() => import("./pages/work-page"));
const ProjectDetailsPage = lazy(() => import("./pages/project-details-page"));
const LinksPage = lazy(() => import("./pages/links-page").then(m => ({ default: m.LinksPage })));

function RouteAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Track SPA route change in Google Analytics
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function AppContent() {
  useEffect(() => {
    // Initialize Google Analytics safely if measurement ID is present
    initGA();

    // Optimize main-thread performance on touch/mobile devices
    // Mobile browsers have hardware-accelerated native compositor scrolling;
    // disabling Lenis on touch devices eliminates long main-thread tasks.
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (!isTouch) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    return () => {
      if (!isTouch) {
        if (rafId !== null) cancelAnimationFrame(rafId);
        lenis?.destroy();
      }
    };
  }, []);

  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-hidden">
      {/* Background Effects */}
      <div className="grain-overlay" />

      {/* Route & Analytics Tracker */}
      <RouteAnalyticsTracker />

      <Suspense
        fallback={
          <div className="min-h-screen bg-bg flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project/:slug" element={<ProjectDetailsPage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Loader>
        <Toaster
          position="top-right"
          richColors
          expand={true}
          toastOptions={Option}
        />
        <AppContent />
      </Loader>
    </BrowserRouter>
  );
}

export default App;
