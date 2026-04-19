import { useParams, Navigate } from "react-router-dom";
import { portfolioData } from "../data/portfolio";
import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { Footer } from "../components/contact";
import { Code, ExternalLink, CheckCircle } from "lucide-react";
import { getTechIcon } from "../lib/tech-icons";

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find corresponding project
  const project = portfolioData.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === slug
  );

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-clip font-body">
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-6 pt-32 pb-32">
        <div className="mb-6">
         
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold font-display text-text-primary mb-8 leading-tight tracking-tight max-w-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-2 border border-primary/50 bg-primary/5 transition-all rounded-md font-semibold text-xs group">
                <Code size={18} className="group-hover:text-primary transition-colors" /> View Source Code
              </a>
            )}
            {project.link && project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-bg-elevated text-text-primary border border-border hover:border-primary/50 hover:bg-primary/5 transition-all rounded-xl font-semibold text-sm group">
                <ExternalLink size={18} className="group-hover:text-primary transition-colors" /> Live Application
              </a>
            )}
          </div>
        </div>

        {/* Featured Images Grid */}
        <div className={`grid grid-cols-1 ${project.imageTwo ? 'md:grid-cols-2' : ''} gap-6 mb-20`}>
          {project.imageOne && (
            <div className={`w-full ${project.imageTwo ? 'aspect-video' : 'aspect-video md:aspect-[21/9]'} rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/5 bg-bg-card flex items-center justify-center relative group`}>
              <img 
                src={project.imageOne} 
                alt={`${project.title} Preview`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
          {project.imageTwo && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/5 bg-bg-card flex items-center justify-center relative group">
              <img 
                src={project.imageTwo} 
                alt={`${project.title} Interface`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Main Content Info */}
          <div className="flex-1 max-w-[800px] flex flex-col gap-16">
            <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-4 text-text-primary">
                Extensive Overview
              </h2>
              <p className="text-base text-text-secondary leading-relaxed space-y-6">
                {project.description}
                <br /><br />
                This project represents a critical engineering effort to solve complex scalability and networking challenges securely, implementing bleeding-edge technologies at scale.
              </p>
            </section>

            {project.highlights && project.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-4 text-text-primary">
                  Key Highlights & Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-4 bg-bg p-6 rounded-2xl border border-border transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <CheckCircle className="text-primary" size={20} />
                      </div>
                      <span className="text-text-primary text-sm leading-relaxed pt-2">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Info */}
          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="sticky top-32 bg-bg-primary/30 backdrop-blur-xl border border-border p-6 rounded-3xl shadow-2xl">
              <h3 className="text-lg font-bold font-display mb-6 border-b border-border-subtle pb-4 flex items-center gap-3">
                <Code className="text-primary shrink-0" size={20} />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => {
                  const techIcon = getTechIcon(tech);
                  const IconComponent = techIcon?.icon;
                  const iconColor = techIcon?.color;
                  
                  return (
                    <div key={i} className="flex items-center gap-2 bg-bg border border-border px-3 py-2 rounded-lg hover:border-primary/50 transition-all group">
                      {IconComponent && (
                        <IconComponent size={14} style={{ color: iconColor }} className="shrink-0 group-hover:drop-shadow-[0_0_6px_var(--tw-shadow-color)] transition-all" />
                      )}
                      <span className="font-mono text-xs text-text-primary">
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
