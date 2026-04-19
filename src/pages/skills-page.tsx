import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { Footer } from "../components/contact";
import { BsCursorFill } from "react-icons/bs";
import { GiInfinity } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { GiReactor } from "react-icons/gi";

export function SkillsPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative bg-bg min-h-screen text-text-primary font-body overflow-x-clip">
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-6 pt-32 pb-20 flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Content Area */}
        <div className="flex-1 max-w-[750px]">
          <div className="mb-5">
            <span className="font-mono text-primary text-sm font-bold uppercase tracking-widest mb-1 block">Work</span>
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold font-display text-text-primary tracking-tight">
              Skills and Tools
            </h1>
            <p className="text-md text-text-secondary leading-relaxed">
              A look at all the programming languages, libraries, and tools I've worked with.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Introduction */}
            <div className="space-y-6 text-text-secondary leading-relaxed text-[14px] px-4 pl-0 md:pl-4 border-l-0 md:border-l border-border/50 relative">
              <p>
                I started my journey exploring the vast world of software development. I've tried many programming languages and tech stacks, across Front-End, Back-End, and Infrastructure.
              </p>
              <p>
                Even though the scope of software engineering is broad, I am deeply interested and focused on <span className="text-text-primary font-bold">Front-End Development</span>, <span className="text-text-primary font-bold">Back-End Development</span>, and <span className="text-text-primary font-bold">DevOps</span>.
              </p>
            </div>

            <hr className="border-border/30" />

            {/* Front-End Section */}
            <section id="frontend" className="space-y-2">
              <h2 className="text-2xl font-display font-bold text-text-primary flex items-center gap-2"> <GiReactor className="text-primary text-2xl" /> Front-End Developer</h2>
              
              <div className="space-y-1 mb-6 text-text-secondary text-[14px] px-4 leading-relaxed">
                <p>I love creating something that is clean and minimalistic, attractive and has value, and of course, easy to use.</p>
                <p>I really enjoy creating websites with <strong className="text-text-primary">rich UI components</strong>, including:</p>
                <ul className="list-none space-y-1 pl-2">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-text-primary rounded-sm"></span> <strong className="text-text-primary">Web application,</strong></li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-text-primary rounded-sm"></span> <strong className="text-text-primary">Documentation pages,</strong></li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-text-primary rounded-sm"></span> <strong className="text-text-primary">CMS contents layout,</strong></li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-text-primary rounded-sm"></span> <strong className="text-text-primary">Dashboard layout,</strong></li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 bg-text-primary rounded-sm"></span> and others.</li>
                </ul>
                <p>But I still like to make simple website pages like <strong className="text-text-primary">landing pages</strong>. So, what tools did I feel comfortable using during the website creation?</p>
              </div>

              {/* Sub-skills */}
              <div className="space-y-5">
                <div id="frontend-typescript">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> TypeScript</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    First of all, the programming language. I'm very used to using <strong className="text-text-primary">TypeScript</strong>, although website creation can be done using PHP, Python, etc.
                  </p>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed">
                    The JavaScript superset — TypeScript — has accompanied me for <strong className="text-text-primary">years</strong>.
                  </p>
                </div>
                
                <div id="frontend-react">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> React</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    I really enjoy building single page application websites and React is my go-to library.
                  </p>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed">
                    I've been using it <strong className="text-text-primary">extensively</strong> and have become quite proficient with it.
                  </p>
                </div>


                <div id="frontend-tailwind">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Tailwind CSS</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    For now, I love using Tailwind CSS for styling, even though I've been using plain CSS and SCSS for a longer time.
                  </p>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed">
                    <strong className="text-text-primary">I'm really comfortable</strong> using it and I think it's a great tool.
                  </p>
                </div>

                <div id="frontend-framer">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Framer Motion</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed">
                    For animations, I am more comfortable using Framer Motion. Creating animations using JavaScript has <strong className="text-text-primary">never been as easy as using Framer Motion</strong>.
                  </p>
                </div>

                <div id="frontend-nextjs">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Next.js</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed">
                    I've been using React for a few years, but since discovering Next.js, I don't think I would want to use any other web framework. <strong className="text-text-primary">It's just that good!</strong>
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border/30" />

            {/* Back-End Section */}
            <section id="backend" className="space-y-5">
              <h2 className="text-2xl font-display font-bold text-text-primary  flex items-center gap-2"><FaServer className="text-primary text-2xl" />Backend-End Developer</h2>
              <div className="space-y-6 text-text-secondary text-[14px] px-4 leading-relaxed">
                <p>I love building systems that are robust, scalable, secure, and efficient — always with clean architecture and developer-friendly APIs in mind.</p>
              </div>

              <div className="space-y-5">
                <div id="backend-python">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Python</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Python is incredibly versatile. I use it for scripting, automation, building APIs, and data processing.
                  </p>
                </div>

                <div id="backend-fastapi">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> FastAPI</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    FastAPI enables incredibly fast API development with automatic Swagger documentation. It's the standard for modern Python backend applications.
                  </p>
                </div>

                <div id="backend-express">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Node.js & Express</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    For JavaScript-heavy stacks, Node.js remains the golden standard. Coupled with Express or native HTTP, it handles asynchronous operations perfectly.
                  </p>
                </div>

                <div id="backend-django">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Django</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    When I need a robust architecture with a built-in admin panel and ORM right out of the box, Django is the framework of choice for rapid full-stack delivery.
                  </p>
                </div>

                <div id="backend-flask">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Flask</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    For highly customized, microservice architecture Python applications where I need finite control over dependencies and routing, Flask is perfect.
                  </p>
                </div>

                <div id="backend-postgresql">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> PostgreSQL</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    My primary relational database. It is incredibly robust, fully ACID compliant, and handles large complex relational workloads with ease.
                  </p>
                </div>

                <div id="backend-mongodb">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> MongoDB</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    When documents have varying structures and fast JSON-based iteration is necessary for full-stack JavaScript applications, MongoDB is fantastic.
                  </p>
                </div>

                <div id="backend-redis">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Redis</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Crucial for in-memory caching mechanisms, task queue management with Celery or Bull, and dramatically improving backend API response times.
                  </p>
                </div>

                <div id="backend-docker">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Docker</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Containerizing my application environments ensures "it works on my machine" translates perfectly to production deployments.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-border/30" />

            {/* DevOps Section */}
            <section id="devops" className="space-y-5">
              <h2 className="text-2xl font-display font-bold text-text-primary  flex items-center gap-2"> <GiInfinity className="text-primary text-2xl" /> DevOps</h2>
              <div className="space-y-6 text-text-secondary text-[14px] px-4 leading-relaxed">
                <p>Ensuring system stability, zero-downtime deployments, and highly scalable cloud architectures.</p>
              </div>

              <div className="space-y-5">
                <div id="devops-docker">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Docker</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    At the core of all modern cloud-native architectures. I rely on it for consistent service isolation, testing, and production builds.
                  </p>
                </div>

                <div id="devops-kubernetes">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Kubernetes</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Orchestrating containerized applications dynamically. From auto-scaling, fault-tolerance, to managing complex microservices networking.
                  </p>
                </div>

                <div id="devops-aws">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> AWS</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Using EC2, S3, RDS, Lambda, and IAM to provision comprehensive infrastructure networks natively in the cloud.
                  </p>
                </div>

                <div id="devops-terraform">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> Terraform</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Infrastructure as Code. Defining and managing precise, reproducible cloud resources directly via declarative configuration files.
                  </p>
                </div>

                <div id="devops-github">
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1 flex items-center gap-2"><BsCursorFill className="text-primary rotate-45 text-xs"/> GitHub Actions</h3>
                  <p className="text-text-secondary text-[14px] px-4 leading-relaxed mb-1">
                    Automating entire CI/CD pipelines natively to handle linting, building, testing, and pushing code autonomously.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Right Sidebar - Sticky Table of Contents */}
        <aside className="hidden lg:block w-[320px] shrink-0 relative mt-16 text-[14px]" >
          <div className="sticky top-24 bg-bg-card/80 backdrop-blur-md rounded-xl border border-border p-5 no-scrollbar shadow-2xl">
            <h3 className="font-bold text-text-primary mb-1">Table of Contents</h3>
            
            <div className="space-y-1">
              <div className="font-bold text-primary mb-2 mt-4 cursor-pointer hover:underline" onClick={() => scrollTo('frontend')}>Front-End Developer</div>
              
              <ul className="pl-4 space-y-2 border-l border-border/50 ml-1 text-text-secondary">
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('frontend-typescript')}>TypeScript</li>
                <li className="cursor-pointer text-primary bg-primary/10 px-2 py-1 -ml-2 rounded w-fit" onClick={() => scrollTo('frontend-react')}>React</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('frontend-tailwind')}>Tailwind CSS</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('frontend-framer')}>Framer Motion</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('frontend-nextjs')}>Next.js</li>
              </ul>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-primary mb-2 mt-6 cursor-pointer hover:underline" onClick={() => scrollTo('backend')}>Backend-End Developer</div>
              
              <ul className="pl-4 space-y-2 border-l border-border/50 ml-1 text-text-secondary">
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-python')}>Python</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-fastapi')}>FastAPI</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-express')}>Node/Express</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-django')}>Django</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-flask')}>Flask</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-postgresql')}>PostgreSQL</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-mongodb')}>MongoDB</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-redis')}>Redis</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('backend-docker')}>Docker</li>
              </ul>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-primary mb-2 mt-6 cursor-pointer hover:underline" onClick={() => scrollTo('devops')}>DevOps Engineer</div>
              
              <ul className="pl-4 space-y-2 border-l border-border/50 ml-1 text-text-secondary mb-6">
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('devops-docker')}>Docker</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('devops-kubernetes')}>Kubernetes</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('devops-aws')}>AWS</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('devops-terraform')}>Terraform</li>
                <li className="cursor-pointer hover:text-text-primary transition-colors hover:pl-1" onClick={() => scrollTo('devops-github')}>GitHub Actions</li>
              </ul>
            </div>

          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
