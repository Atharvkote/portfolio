import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Loader } from "./components/layout/loader";
import { ErrorBoundary } from "./components/ui/error-boundary";
import Option from "./lib/toast";
import { Toaster } from "sonner";
import { initGA, trackPageView } from "./lib/analytics";
import SplashCursor from "./components/ui/splash-cusor";

const HomePage = lazy(() => import("./pages/home-page").then(m => ({ default: m.HomePage })));
const SkillsPage = lazy(() => import("./pages/skills-page").then(m => ({ default: m.SkillsPage })));
const WorkPage = lazy(() => import("./pages/work-page"));
const ProjectDetailsPage = lazy(() => import("./pages/project-details-page"));
const LinksPage = lazy(() => import("./pages/links-page").then(m => ({ default: m.LinksPage })));

function RouteAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function AppContent() {
  useEffect(() => {
    initGA();

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
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-clip">
      <div className="grain-overlay" />

      <SplashCursor
        rainbow={false}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        colors={["#01d8b4", "#0d0d0d"]}
        clickSplash={false}
        colorSpeed={1}
        intensity={1}
        momentum={1}
        shading={0.5}
        glow={0}
        quality="high"
        intro
        contained={false}
      />
      <RouteAnalyticsTracker />

      <Suspense
        fallback={
          <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-3 select-none">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </div>
            <span className="font-mono text-[11px] text-primary/70 tracking-widest uppercase">Loading route...</span>
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
