import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { Footer } from "../components/contact";
import { portfolioData } from "../data/portfolio";
import { Link } from "react-router-dom";
import { ChevronRight, Database, Ticket, Bot, Code } from "lucide-react";
import TechIcon from "../components/icon-provider";

const getProjectIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("microservices") || t.includes("kafka")) return <Database className="w-6 h-6 text-emerald-400" />;
  if (t.includes("ticket")) return <Ticket className="w-6 h-6 text-orange-400" />;
  if (t.includes("ai") || t.includes("recommendation")) return <Bot className="w-6 h-6 text-blue-400" />;
  return <Code className="w-6 h-6 text-primary" />;
};

export default function WorkPage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary font-body">
    
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-6 pt-32 pb-32">
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-display text-text-primary mb-3 tracking-wide">
            Projects
          </h1>
          <p className="text-base text-text-secondary">
            Showcase of My Frontend, Backend, and DevOps Projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {portfolioData.projects.map((project, index) => {
            const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return (
              <Link 
                to={`/project/${slug}`}
                key={index} 
                className="group relative flex items-start gap-4 p-6 rounded-2xl bg-[#0f0f18] border border-[#222238] hover:border-primary/70 transition-all duration-300 hover:bg-[#151523] shadow-lg shadow-black/20"
              >
                {/* Icon Wrapper */}
                <div className=" mt-1">
                  <TechIcon name={project.logo} className="w-8 h-8 text-2xl text-white bg-white py-1 rounded-lg" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 h-full">
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary-light transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary/80 leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#221f3a] text-primary-light text-xs font-semibold rounded-full group-hover:bg-primary group-hover:text-white transition-colors border border-primary/20">
                      Learn more <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
