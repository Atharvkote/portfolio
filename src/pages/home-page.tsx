import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { TechStack } from "../components/tech-stack";
import { Experience } from "../components/experience";
import { Education } from "../components/education";
import { Projects } from "../components/project-showcase";
import { Contact, Footer } from "../components/contact";
import { BackendDevops } from "../components/cards";

export function HomePage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-hidden">
      {/* Fixed Elements */}
      <Navbar />
      <SocialBar />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 md:px-6 lg:px-0">
        <Hero />
        <About />
        <TechStack />
        <BackendDevops/>
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
