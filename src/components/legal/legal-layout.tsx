import { useState, useEffect } from "react";
import { Navbar } from "../layout/navbar";
import { SocialBar } from "../layout/social-bar";
import { QuickAccess } from "../layout/quick-access";
import { Footer } from "../layout/footer";
import { SEO } from "../layout/seo";
import { LegalHeader } from "./legal-header";
import { LegalTableOfContents, MobileLegalTableOfContents, type TOCItem } from "./legal-toc";
import { LegalNavigation } from "./legal-nav";

interface LegalLayoutProps {
  title: string;
  description: string;
  path: string;
  headerTitle: string;
  headerDescription: string;
  lastUpdated?: string;
  readingTime?: string;
  tocItems: TOCItem[];
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  description,
  path,
  headerTitle,
  headerDescription,
  lastUpdated = "November 13, 2026",
  readingTime = "5 min read",
  tocItems,
  prev,
  next,
  children,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((e) => e.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-primary/20 selection:text-primary relative overflow-x-clip">
      {/* Background glow matching the dark aesthetic */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-primary/[0.03] rounded-full blur-[140px] -z-10"
        aria-hidden="true"
      />

      <SEO title={title} description={description} path={path} />
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        <LegalHeader
          title={headerTitle}
          description={headerDescription}
          lastUpdated={lastUpdated}
          readingTime={readingTime}
        />

        <div className="lg:grid lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">
          <div className="min-w-0 max-w-3xl">
            <MobileLegalTableOfContents items={tocItems} activeId={activeId} />
            <article className="legal-article">{children}</article>
            <LegalNavigation prev={prev} next={next} />
          </div>

          <div className="hidden lg:block">
            <LegalTableOfContents items={tocItems} activeId={activeId} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

