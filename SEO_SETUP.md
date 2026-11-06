# Portfolio SEO & Post-Deployment Setup Guide

This guide documents all Technical SEO, Google Search Console (GSC), Google Analytics 4 (GA4), Structured Data (JSON-LD), and deployment configurations implemented for Atharva Kote's portfolio.


## 1. Files Created and Modified

### Newly Created Files
| File | Purpose |
| :--- | :--- |
| [`public/robots.txt`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/robots.txt) | Crawl instructions for Googlebot and other web crawlers; points to sitemap. |
| [`public/sitemap.xml`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/sitemap.xml) | XML sitemap listing all canonical public routes with priority and change frequencies. |
| [`public/site.webmanifest`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/site.webmanifest) | Progressive Web App (PWA) manifest for app icons, theme color, and mobile installation. |
| [`public/favicon.svg`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/favicon.svg) | High-resolution scalable vector favicon matching the `/ atharva .` branding. |
| [`public/favicon.ico`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/favicon.ico) | Multi-resolution fallback icon for legacy browsers and search engine crawlers. |
| [`public/og-image.png`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/public/og-image.png) | 1200x630 Open Graph & Twitter summary card preview image. |
| [`.env.example`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/.env.example) | Template for environment variables (`VITE_GA_MEASUREMENT_ID`, `VITE_SITE_URL`). |
| [`src/lib/analytics.ts`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/lib/analytics.ts) | Reusable, zero-dependency GA4 utility with route & event tracking and silent fallback. |
| [`src/lib/seo.ts`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/lib/seo.ts) | Zero-dependency dynamic meta tag, title, canonical URL, and Open Graph updater. |
| [`src/components/seo.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/seo.tsx) | React wrapper component for declarative page-level SEO metadata. |
| [`SEO_SETUP.md`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/SEO_SETUP.md) | Technical SEO documentation and setup manual. |

### Modified Files
| File | Modifications |
| :--- | :--- |
| [`index.html`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/index.html) | SEO title, meta description, keywords, Open Graph, Twitter card, canonical tag, GSC tag, and JSON-LD structured data. |
| [`vercel.json`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/vercel.json) | Enhanced routing to serve `sitemap.xml`, `robots.txt`, and assets correctly, plus added modern HTTP security headers. |
| [`.gitignore`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/.gitignore) | Explicitly prevents accidental exposure of `.env` and `.env.*` files. |
| [`src/App.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/App.tsx) | Integrated `RouteAnalyticsTracker` for SPA route-change tracking and GA initialization. |
| [`src/pages/home-page.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/pages/home-page.tsx) | Injected route-level SEO metadata. |
| [`src/pages/skills-page.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/pages/skills-page.tsx) | Injected route-level SEO metadata. |
| [`src/pages/work-page.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/pages/work-page.tsx) | Injected route-level SEO metadata; added `project_click` event tracking. |
| [`src/pages/project-details-page.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/pages/project-details-page.tsx) | Dynamic project SEO tags; image dimensions and `loading="lazy"`; code and live demo click tracking. |
| [`src/pages/links-page.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/pages/links-page.tsx) | Injected route-level SEO metadata; added `social_click` tracking and image optimization. |
| [`src/components/hero.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/hero.tsx) | Added `resume_download` event tracking. |
| [`src/components/contact.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/contact.tsx) | Added `contact_click` and footer social link tracking. |
| [`src/components/social-bar.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/social-bar.tsx) | Added `social_click` and email click tracking. |
| [`src/components/navbar.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/navbar.tsx) | Added mobile menu `social_click` tracking. |
| [`src/components/project-showcase.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/project-showcase.tsx) | Connected dynamic project URLs; added lazy loading and click tracking. |
| [`src/components/about.tsx`](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/src/components/about.tsx) | Added explicit image dimensions (`300x300`) and descriptive alt tag for CLS prevention. |


## 2. Technical SEO Specifications

### Identity & Targeting
- **Target Role**: Java Backend Developer
- **Target Tech Stack**: Java, Spring Boot, Microservices, Apache Kafka, Redis, PostgreSQL, Docker, DevOps, Cybersecurity.
- **Production URL**: `https://atharvakote.vercel.app` (or custom domain `https://atharvakote.dev`)

### Metadata Hierarchy
- **Home**: `Atharva Kote | Java Backend Developer & Distributed Systems Engineer`
- **Skills**: `Technical Skills & Architecture | Atharva Kote`
- **Work**: `Featured Engineering Projects | Atharva Kote`
- **Project Detail**: `[Project Title] | Atharva Kote`
- **Links**: `Connect & Social Profiles | Atharva Kote`

### Structured Data (JSON-LD)
A composite schema is rendered on the homepage:
1. `Person` schema: Professional identity, email, education, core skills, and linked social profiles (`sameAs`: GitHub, LinkedIn, Twitter, LeetCode, Stack Overflow, Instagram).
2. `WebSite` schema: Publisher, author reference, and site description.
3. `ProfilePage` schema: Declares the page as the canonical profile for Atharva Kote.


## 3. Google Search Console (GSC) Setup

### Step 1: Open Search Console
Navigate to [search.google.com/search-console](https://search.google.com/search-console).

### Step 2: Add Property
Choose **URL prefix** and enter your production URL:
```
https://atharvakote.vercel.app
```
*(If using a custom domain like `atharvakote.dev`, you can also verify via DNS Domain property).*

### Step 3: Verification
Your verification token is already embedded in [index.html](file:///c:/Users/athar/OneDrive/Documents/GitHub/v2-portfolio/index.html#L55):
```html
<meta name="google-site-verification" content="xGJA1BEp98tX5UsFy8THAFzilxylGSGy_CCNjPpOiw4" />
```
Select **HTML tag** as your verification method and click **Verify**.

> [!NOTE]
> If Google assigns a new or different verification token in the future, replace the `content` attribute value in `index.html` line 55 and deploy.


## 4. Sitemap Submission Instructions

Once your property is verified in Google Search Console:

1. In the left navigation menu, click **Sitemaps** (under Indexing).
2. In the "Add a new sitemap" input field, enter:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. Google will queue `https://atharvakote.vercel.app/sitemap.xml` for crawling. You should see a green status: **Success**.

### Sitemap URL Index:
- `https://atharvakote.vercel.app/`
- `https://atharvakote.vercel.app/skills`
- `https://atharvakote.vercel.app/work`
- `https://atharvakote.vercel.app/links`
- `https://atharvakote.vercel.app/project/distributed-microservices-architecture-with-apache-kafka`
- `https://atharvakote.vercel.app/project/ticket-booking-platform-for-live-concerts`
- `https://atharvakote.vercel.app/project/ai-powered-contactless-ordering-recommendation-system`


## 5. Google Analytics 4 (GA4) Integration

### Step 1: Create a GA4 Property
1. Go to [analytics.google.com](https://analytics.google.com/).
2. Create or select an account $\rightarrow$ Create Property: `Atharva Kote Portfolio`.
3. Select your reporting time zone and currency.
4. Under Data Streams, select **Web** and enter your URL:
   - Stream URL: `https://atharvakote.vercel.app`
   - Stream Name: `Portfolio Web Stream`
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).

### Step 2: Configure Environment Variables
Locally, create a `.env` file (which is git-ignored):
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://atharvakote.vercel.app
```

On Vercel (Production):
1. Go to your project dashboard on [vercel.com](https://vercel.com).
2. Navigate to **Settings** $\rightarrow$ **Environment Variables**.
3. Add:
   - Key: `VITE_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Environment: `Production`, `Preview`, `Development`
4. Redeploy your project.

### Step 3: Verified Event Tracking
The analytics utility tracks:
- `page_view`: Fired on initial load and every SPA route transition (deduplicated).
- `resume_download`: Fired when the resume download button is clicked.
- `github_click`: Fired on GitHub links (navbar, social bar, footer, project cards).
- `linkedin_click`: Fired on LinkedIn links.
- `contact_click`: Fired on email / "Say Hello" buttons.
- `project_click`: Fired when selecting or opening project cards.

> [!TIP]
> If `VITE_GA_MEASUREMENT_ID` is not set or empty, all analytics functions automatically no-op without errors or console warnings.


## 6. Security Headers Configured in `vercel.json`

The following headers are automatically applied across all responses on Vercel:

| Header | Value | Purpose |
| :--- | :--- | :--- |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing. |
| `X-Frame-Options` | `DENY` | Prevents clickjacking by blocking iframe embedding. |
| `X-XSS-Protection` | `1; mode=block` | Enables legacy browser XSS filters. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Protects user privacy while providing referrer data for analytics. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Disables unnecessary browser capabilities. |


## 7. How to Test Indexing Readiness & Validate

### 1. Test Robots.txt & Sitemap
Visit these URLs in your browser or with `curl`:
- `https://atharvakote.vercel.app/robots.txt` $\rightarrow$ Must return plain text with `Allow: /` and sitemap link.
- `https://atharvakote.vercel.app/sitemap.xml` $\rightarrow$ Must return valid XML with 7 routes.

### 2. Validate Structured Data (JSON-LD)
1. Open [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Enter your live URL or paste the code snippet from `index.html`.
3. Confirm that `Person`, `WebSite`, and `ProfilePage` items are parsed without errors.
4. Also verify at [validator.schema.org](https://validator.schema.org/).

### 3. Validate Social Share Previews
- **Open Graph**: Test at [opengraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fatharvakote.vercel.app) to verify the card image, title, and description.
- **Twitter / X Card**: Test on Twitter / X composer or [cards-dev.twitter.com](https://cards-dev.twitter.com/validator).

### 4. Core Web Vitals & Performance
Run [PageSpeed Insights](https://pagespeed.web.dev/) to verify:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS) $\rightarrow$ Optimized with explicit image widths and heights.

