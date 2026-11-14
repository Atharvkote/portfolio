<h1 >
 <img width="35" height="30" alt="Logo-T" src="https://github.com/user-attachments/assets/ec2296a8-5fae-490a-8d67-f4e68a91291f" />
 Portfolio
</h1>
  
  
<img width="1837" height="894" alt="Screenshot 2026-11-13 014912" src="https://github.com/user-attachments/assets/43b102b2-76db-42d2-9f28-be498ad1dff6" />

  <p>
    <strong>A high-performance personal portfolio and distributed systems showcase engineered with React 19, TypeScript, Vite 8, Tailwind CSS v4, OGL WebGL shaders, and Vercel Serverless Architecture.</strong>
  </p>
<div align="center">


  <p>
    <a href="https://atharvakote.vercel.app/"><strong>Explore the Live Website </strong></a>
  </p>

</div>


## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture & Design System](#architecture--design-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [Backend & Serverless API](#backend--serverless-api)
- [Security & Performance](#security--performance)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Author & License](#author--license)

---

## Overview

**v2-portfolio** is the digital identity and distributed software engineering showcase of **Atharva Kote**. Designed with an uncompromising dark-mode cyberpunk aesthetic, it features deep black canvases, electric teal neon accents, GPU-rendered fluid WebGL cursor simulations, trigonometric planetary glow horizons, and a command palette navigation system.

Beyond visual polish, the application implements a production-grade serverless architecture with cryptographically signed session tokens, atomic database counters via Upstash Redis, and server-side edge caching for live GitHub contribution activity.

---

## Key Features

### 1. Spotlight / Raycast Command Palette (`Cmd+K` / `Q`)
- **Fuzzy Search Across Entire Portfolio**: Real-time querying across featured projects, technical skill domains, internal routes, and quick actions.
- **Glassmorphism Floating Design**: Ultra-clean, transparent capsule interface (`backdrop-blur-2xl bg-[#0c0c0e]/50`) with no obtrusive container borders or input outlines.
- **Keyboard-First Navigation**: Full keyboard navigation (`↑` / `↓` cursor selection, `Enter` to execute, `Esc` or `Q` to dismiss).
- **Instant System Actions**: One-click resume download, direct email address clipboard copy with feedback toast notifications, and fast navigation pills.

### 2. GPU-Accelerated WebGL Fluid Cursor
- Powered by `OGL` (minimalist WebGL library).
- Multi-pass fragment shaders calculate Navier-Stokes fluid velocity, pressure, and vorticity around pointer movements in real time.
- Smoothly fades when pointer is idle to minimize GPU power consumption.

### 3. Planetary Glow Horizon & Kinetic UI
- Trigonometric orbital glow curves simulated in CSS and Canvas (`GlowHorizon`, `PlanetaryRing`).
- Inertial smooth scrolling driven by **Lenis** combined with Framer Motion spring physics.
- Custom interactive folder exploration components, hover glare effects, and live system clocks.

### 4. Atomic Serverless Visitor Counter
- **Stateless & Secure**: Backed by **Upstash Redis** REST API using atomic `INCR` operations.
- **Tamper-Proof Session Signing**: Issues HTTP-only, cryptographically signed cookies (`visitor_token`) using `HMAC-SHA256` with timing-safe validation.
- **Sliding-Window Rate Limiting**: Built-in 30 req/min IP-based rate limiting prevents distributed spam and denial-of-service abuse.

### 5. Live GitHub Contribution Calendar
- Real-time GitHub GraphQL integration fetching dynamic user contribution statistics.
- Serverless edge caching layer (`api/github-contributions.ts`) prevents GitHub API rate exhaustion and eliminates client-side personal access token leaks.
- Graceful deterministic mock fallback for local offline development.

### 6. Interactive Engineering Case Studies
- Dedicated deep-dive routes for each major engineering project (`/project/:slug`):
  - **JQube**: AI-Assisted DevSecOps Platform with continuous scanning pipelines.
  - **VenDex**: High-frequency decentralized asset & automated order matching engine.
  - **ConcertSync**: High-concurrency ticketing infrastructure with distributed lock orchestration.
  - **FoodDash AI**: Real-time fleet telemetry routing and order dispatch system.

### 7. Production-Ready Legal & Compliance Suite
- Dedicated legal documentation architecture (`LegalLayout`, `LegalTableOfContents`, `LegalSection`):
  - **Privacy Policy** (`/privacy-policy`): GDPR/CCPA disclosures, cookie storage explanations, and opt-out transparency.
  - **Terms of Use** (`/terms-of-use`): Intellectual property boundaries, open-source usage terms, and liability limits.
  - **License Page** (`/license`): Full verbatim MIT License terms, personal brand copyright reservations, and attribution requirements.
  - **Cookie Policy** (`/cookie-policy`): Detailed accounting of first-party HMAC tokens and local client preferences.
  - **Credits & Attributions** (`/credits`): Exhaustive open-source package catalog and asset attributions.

---

## Architecture & Design System

### Color Palette
- **Deep Black Background**: `#000000` / `#050505` / `#0a0a0c`
- **Surface Elevation**: `#0c0c0e` with translucent frosted glass (`rgba(255, 255, 255, 0.03)` to `0.08`)
- **Primary Accent**: Electric Teal (`#00f5c4` / `#14b8a6` / `#00df81`)
- **Primary Typography**: `#ffffff` (Pure White, high contrast)
- **Secondary Typography**: `#94a3b8` / `#64748b` (Muted Slate)
- **Borders & Dividers**: `rgba(255, 255, 255, 0.08)` and subtle teal glow gradients

### Typography Hierarchy
- **Headings**: Sans-serif geometric display font with tight tracking (`tracking-tight`)
- **Body**: High-legibility modern sans-serif optimized for dark theme reading comfort
- **Technical Badges & Code**: Monospaced font (`font-mono`) with uppercase micro-eyebrows (`tracking-wider text-xs`)

---

## Tech Stack

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `19.2.4` | Modern UI layer utilizing React 19 hooks and compiler optimizations |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `~6.0.2` | Strict end-to-end type safety and compile-time validation |
| **Build Tooling** | [Vite](https://vite.dev/) | `8.0.4` | Lightning-fast HMR and optimized production asset bundling |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `4.2.2` | Atomic utility-first CSS engine with `@tailwindcss/vite` |
| **Animations** | [Framer Motion](https://motion.dev/) | `12.38.0` | Declarative spring animations, gestures, and layout morphs |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) | `1.3.21` | Hardware-accelerated smooth inertial scrolling physics |
| **Graphics & Shaders** | [OGL](https://github.com/oframe/ogl) | `1.0.11` | Minimalist WebGL library for GPU fluid simulation fragment shaders |
| **Routing** | [React Router](https://reactrouter.com/) | `7.14.0` | Client-side routing with URL synchronization and scroll restoration |
| **Database & Cache** | [Upstash Redis](https://upstash.com/) | `1.41.0` | Serverless low-latency KV store for atomic visitor counting |
| **Serverless Runtime**| [Vercel Node](https://vercel.com/) | `30.0.0` | Node serverless functions for backend API endpoints |
| **Notifications** | [Sonner](https://sonner.emilkowal.ski/) | `2.0.7` | Minimalist dark-themed toast notifications |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | `1.8.0` / `5.6.0` | Scalable vector icon suites for developer tools and brand logos |

---

## Project Structure

```
v2-portfolio/
├── api/                                # Vercel Serverless Functions
│   ├── github-contributions.ts         # Edge caching GraphQL proxy for GitHub calendar
│   └── visit.ts                        # HMAC-SHA256 signed atomic visitor counter
├── public/                             # Static public assets
│   ├── favicon.ico                     # Brand favicon
│   ├── robots.txt                      # Search crawler index directives
│   └── sitemap.xml                     # Search engine XML sitemap
├── src/
│   ├── assets/                         # SVG icons, vector art, and frame templates
│   ├── components/
│   │   ├── layout/                     # Structural layout components
│   │   │   ├── footer.tsx              # Global footer with legal links & live status
│   │   │   ├── loader.tsx              # Initializing boot screen animation
│   │   │   ├── navbar.tsx              # Floating header navigation with active pills
│   │   │   ├── quick-access.tsx        # Raycast/Spotlight command palette (Cmd+K)
│   │   │   ├── scroll-indicator.tsx    # Page scroll progress monitor
│   │   │   ├── seo.tsx                 # Dynamic OpenGraph, Twitter, and meta tags
│   │   │   └── social-bar.tsx          # Vertical quick-link social icon dock
│   │   ├── legal/                      # Reusable legal page component architecture
│   │   │   ├── legal-header.tsx        # Eyebrow, title, last updated & reading time
│   │   │   ├── legal-layout.tsx        # Responsive two-column desktop / TOC layout
│   │   │   ├── legal-nav.tsx           # Previous / Next document pager & Home link
│   │   │   ├── legal-section.tsx       # Numbered sections with teal highlight anchors
│   │   │   └── legal-toc.tsx           # Sticky interactive Table of Contents
│   │   ├── sections/                   # Modular home page sections
│   │   │   ├── about.tsx               # Professional narrative & personal philosophy
│   │   │   ├── cards.tsx               # Interactive bento grid highlight cards
│   │   │   ├── contact.tsx             # Interactive contact form & direct reach-out
│   │   │   ├── education.tsx           # Academic background & credentials
│   │   │   ├── experience.tsx          # Career timeline & technical achievements
│   │   │   ├── github-contribution-calendar.tsx # Live GitHub activity grid
│   │   │   ├── hero.tsx                # Hero presentation & dynamic headline
│   │   │   ├── live-clock.tsx          # Local time clock component
│   │   │   ├── planetary-ring.tsx      # Trigonometric canvas orbit effect
│   │   │   ├── project-showcase.tsx    # Interactive project viewer with modal previews
│   │   │   ├── projects.tsx            # Featured engineering project showcase
│   │   │   ├── tech-stack.tsx          # Interactive tool & language grid
│   │   │   └── visitor-counter.tsx     # Live visitor badge with pulsing indicator
│   │   └── ui/                         # Atomic, standalone visual primitives
│   │       ├── circular-carousel.tsx   # 3D rotating carousel
│   │       ├── crystalized-ball.tsx    # Shimmering crystal orb canvas
│   │       ├── electric-logo.tsx       # Animated neon logo mark
│   │       ├── error-boundary.tsx      # Graceful crash handling fallback
│   │       ├── folder.tsx              # Interactive Mac OS-style expanding folder
│   │       ├── glow-cusor.tsx          # Ambient radial cursor follower
│   │       ├── glow-horizon.tsx        # Horizon glow shader illusion
│   │       ├── hover-glare.tsx         # 3D tilt glare card effect
│   │       └── splash-cusor.tsx        # WebGL fluid dynamics cursor integration
│   ├── data/
│   │   └── portfolio.ts                # Master portfolio content: projects, skills, links
│   ├── lib/
│   │   ├── analytics.ts                # Google Analytics 4 event helper
│   │   ├── seo.ts                      # Canonical URLs, sitemap, and metadata builder
│   │   ├── tech-icons.ts               # Dynamic icon mapping helper
│   │   ├── theme.ts                    # Design system color tokens
│   │   ├── toast.ts                    # Sonner notification dispatchers
│   │   ├── utils.ts                    # clsx + tailwind-merge helper
│   │   └── visitor.ts                  # Visitor API client service
│   ├── pages/                          # Primary application views
│   │   ├── contact-page.tsx            # Dedicated /contact route
│   │   ├── home-page.tsx               # Main showcase experience (/)
│   │   ├── links-page.tsx              # Developer Link-in-Bio (/links)
│   │   ├── project-details-page.tsx    # Dynamic project deep dive (/project/:slug)
│   │   ├── skills-page.tsx             # Comprehensive skill matrix (/skills)
│   │   ├── work-page.tsx               # Complete project archive (/work)
│   │   └── legal/                      # Compliance documentation routes
│   │       ├── cookie-policy-page.tsx  # /cookie-policy
│   │       ├── credits-page.tsx        # /credits
│   │       ├── license-page.tsx        # /license
│   │       ├── privacy-policy-page.tsx # /privacy-policy
│   │       └── terms-of-use-page.tsx   # /terms-of-use
│   ├── app.tsx                         # Root router & layout wrapper
│   ├── index.css                       # Global Tailwind v4 styling & CSS variables
│   └── main.tsx                        # Application DOM mount
├── .env.example                        # Template for environment variables
├── package.json                        # Project dependencies and script declarations
├── tsconfig.json                       # TypeScript compiler configuration
└── vite.config.ts                      # Vite 8 bundler configuration
```

---

## Available Routes

| Path | Purpose | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Interactive showcase: hero, WebGL cursor, featured work, skills, and visitor statistics |
| `/work` | **Work Portfolio** | Complete collection of production engineering projects and architectures |
| `/skills` | **Technical Skills** | Categorized technical breakdown: Systems, Backend, DevOps/Cloud, and Frontend |
| `/contact` | **Contact Hub** | Dedicated communication interface, direct email, and social reach-out channels |
| `/links` | **Social Hub** | Link-in-bio hub with quick access to GitHub, LinkedIn, Twitter/X, and LeetCode |
| `/project/:slug` | **Project Deep Dive**| Comprehensive case study breakdown (`jqube`, `vendex`, `concertsync`, `fooddash-ai`) |
| `/privacy-policy`| **Privacy Policy** | GDPR/CCPA privacy notice covering submitted forms, cookies, and data retention |
| `/terms-of-use` | **Terms of Use** | Conditions governing website usage, software demonstrations, and disclaimers |
| `/license` | **MIT License** | Official repository open-source license with explicit personal asset reservations |
| `/cookie-policy` | **Cookie Policy** | Transparent accounting of HTTP-only security tokens and client preferences |
| `/credits` | **Credits & Attributions**| Exhaustive attribution of third-party libraries, icons, fonts, and frameworks |

---

## Backend & Serverless API

The repository includes standalone **Vercel Serverless Functions** (`api/`) that operate independently from client code:

### 1. Visitor Counter (`api/visit.ts`)
- **Method**: `GET`, `POST`
- **Features**:
  - Increments unique visitor count via Upstash Redis atomic `INCR` command.
  - Validates and generates HMAC-SHA256 signed session cookies (`visitor_token`).
  - Limits duplicate requests using sliding-window rate limiters.
  - Returns current unique visitor count and session status.

### 2. GitHub Contributions (`api/github-contributions.ts`)
- **Method**: `GET`
- **Features**:
  - Connects securely to the GitHub GraphQL API using a server-side `GITHUB_TOKEN`.
  - Computes contribution calendar heatmaps across the preceding 52 weeks.
  - Caches edge responses (`s-maxage=3600, stale-while-revalidate=86400`) to maintain high speed.
  - Safeguards API secrets from exposure in client-side bundles.

---

## Security & Performance

- **Zero Client Secrets**: No database credentials, access tokens, or private keys are ever exposed to the browser.
- **HMAC-SHA256 Cookie Signing**: Prevents client-side manipulation or manual inflation of analytics counters.
- **Timing-Safe Equality Checks**: Cookie signatures are verified using `crypto.timingSafeEqual()` to eliminate side-channel timing attacks.
- **Content Security & CORS**: Serverless endpoints enforce strict origin validation against `SITE_ORIGINS`.
- **Sub-Second Performance**: Code-split routes, optimized SVG vector graphics, modern ES2022 bundle targeting, and zero cumulative layout shift (CLS < 0.01).

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `20.x` or later (LTS recommended)
- **pnpm**: `10.x` or later (recommended package manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Atharvkote/v2-portfolio.git
   cd v2-portfolio
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your credentials (see [Environment Variables](#environment-variables)).

4. **Start the local development server**:
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```ini
# Canonical Production URL of your portfolio
VITE_SITE_URL=https://atharvakote.vercel.app

# Google Analytics 4 Measurement ID (optional in development)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Server-side Upstash Redis (Serverless Functions only)
UPSTASH_REDIS_REST_URL=https://your-upstash-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_upstash_rest_token

# HMAC-SHA256 Secret for signing visitor cookies (generate a 64-char hex string)
VISITOR_COOKIE_SECRET=your_super_secret_hmac_key_64_characters_long

# Allowed CORS Origins (comma-separated)
SITE_ORIGINS=https://atharvakote.vercel.app,http://localhost:5173,http://localhost:3000

# GitHub Personal Access Token for Contribution Graph (server-side only)
GITHUB_TOKEN=ghp_your_github_personal_access_token
```

> **Note**: For local development without Upstash or GitHub credentials, the visitor counter and contribution graph automatically degrade gracefully with deterministic fallback simulations.

---

## Scripts

| Command | Action |
| :--- | :--- |
| `pnpm run dev` | Starts Vite local development server at `http://localhost:5173` |
| `pnpm run build` | Runs TypeScript compilation (`tsc -b`) and generates production bundles (`vite build`) |
| `pnpm run lint` | Runs ESLint across all TypeScript and React files |
| `pnpm run preview` | Serves the generated production build locally for verification |

---


## Website Quality

<!-- LIGHTHOUSE:START -->
### Mobile Lighthouse Scores

![Performance](https://img.shields.io/badge/Performance-38%25-red?style=flat-square) ![Accessibility](https://img.shields.io/badge/Accessibility-94%25-brightgreen?style=flat-square) ![Best Practices](https://img.shields.io/badge/Best%20Practices-100%25-brightgreen?style=flat-square) ![SEO](https://img.shields.io/badge/SEO-100%25-brightgreen?style=flat-square)

**Last audited:** 2026-11-14

[View website](https://atharvakote.vercel.app/) · [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
<!-- LIGHTHOUSE:END -->

Audited with Google Lighthouse CI across all 13 website routes.


## Author & License

### Author
**Atharva Kote**
- Website: [atharvakote.vercel.app](https://atharvakote.vercel.app/)
- GitHub: [@Atharvkote](https://github.com/Atharvkote)
- LinkedIn: [Atharva Kote](https://www.linkedin.com/in/atharva-kote/)

### License
This project is open-source under the terms of the **[MIT License](./LICENSE)**.

```
MIT License

Copyright (c) 2026 Atharva Kote

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

> [!NOTE]
> On Personal Branding,
> The MIT License applies to the source code and software architecture. Personal photographs, identity branding, custom project descriptions, and logos are proprietary and reserved by **Atharva Kote**.

