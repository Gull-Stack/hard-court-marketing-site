# Hard Court Marketing — Website Build Brief

## WHAT THIS IS
A marketing agency website for **Hard Court Marketing** — a vertical agency targeting sports surface contractors (court installers, turf companies, equipment manufacturers). Domain: hardcourtmarketing.com. 50/50 JV with AT Sports (Brad stays invisible — no mention of AT Sports anywhere).

## DESIGN REFERENCE
Copy the design style of https://enterdreamlab.com/ — specifically:
- Dark background (#0a0a0a or similar near-black)
- Big bold typography (use a bold geometric sans like "Syne" or "Space Grotesk" — NOT Inter, something with more personality like the reference)
- Smooth scroll animations (use CSS animations or minimal JS, no heavy libraries)
- Scroll-driven sections with large text reveals
- Clean grid layouts for projects/portfolio
- Prominent CTAs
- Professional but edgy — NOT Silicon Valley startup, NOT corporate. Think premium creative agency.
- Sections: hero → logos/trust bar → services → projects/portfolio → testimonials/quotes → CTA

## TECH STACK
- **11ty (Eleventy)** static site generator
- Plain CSS (no Tailwind, no frameworks)
- Minimal vanilla JS for animations (IntersectionObserver for scroll reveals)
- Dynamic sitemap using `collections.all`
- No emojis on the website — use SVG icons or nothing

## LOGO
Logo files are in the project root:
- `logo-full.png` — Full logo with "HARD COURT MARKETING" text (dark bg version, white text)
- `logo-wordmark.png` — Just "HARD COURT" wordmark (white on black)
- `logo-horizontal.png` — Horizontal version

Use the wordmark in the nav, full logo in footer. All logos are white on dark, so they work on the dark theme.

## COLOR SCHEME
- **Background:** #0a0a0a (near-black)
- **Card/Section BG:** #111111, #141414
- **Primary accent:** #ffffff (white for text and emphasis)
- **Secondary accent:** #00e87b (electric green for CTAs and highlights) OR a bold blue #3b82f6
- **Text:** #ffffff (primary), #a0a0a0 (secondary), #666 (muted)
- **Borders:** #222222

## PAGES TO BUILD (14 total)

### 1. HOMEPAGE (/)
**Hero:** Big bold headline: "Marketing That Plays Hard" or "Your Courts Deserve Better Marketing"
Subhead: "SEO, websites, and lead generation built specifically for sports surface contractors. We help court builders, turf companies, and equipment manufacturers get found, get leads, and grow."
CTA: "Get Your Free Marketing Audit" → links to /contact

**Trust bar:** "Trusted by court contractors across 12 states" (placeholder logos area)

**Services overview:** 3-4 cards:
- Website Development — SEO-optimized sites for contractors
- Search Engine Optimization — Get found when facility owners search
- Lead Generation — Automated systems that work while you build
- Google Business Profile — Dominate local search results

**Portfolio preview:** Grid of 3 project cards linking to /portfolio

**Stats bar:** "170+ court contractors in our network" / "$35K+ average job value for our clients" / "14:1 average ROI"

**Testimonial/Quote section:** 2-3 testimonial placeholders

**Final CTA:** "Ready to Stop Losing Leads to Your Competitors?" → /contact

### 2. PRICING (/pricing)
**Three tiers:**

**Starter — $5,000 setup + $100/mo**
- 8-12 page SEO-optimized website
- Google Business Profile setup
- BSS Premium listing
- 4 foundational blog posts
- Monthly GMB posts
- Quarterly reports

**Professional — $8,000 setup + $250/mo**
- Everything in Starter
- Advanced SEO (location pages, schema markup)
- Google Ads management
- Social media content
- Monthly ranking reports
- Dedicated account manager

**Enterprise — Custom**
- Multi-location contractors
- National SEO campaigns
- Full marketing automation
- Custom integrations
- White-label options

**ROI calculator section:** "One residential pickleball court = $35,000. One lead per month pays for 5+ years of marketing."

### 3. PORTFOLIO (/portfolio)
Grid of project showcases (use placeholder images with dark overlay and project names):
- Precision Pro Courts (Utah) — Website + SEO
- Desert Sport Courts (Arizona) — Complete rebrand
- Summit Surface Co (Colorado) — Lead generation
- Coastal Courts (Florida) — Website + Google Ads
- Pacific Athletic Surfaces (California) — Full stack marketing
- Heartland Courts (Iowa) — Website + GMB optimization

Each card: dark image placeholder, company name, location, services provided, brief result line

### 4. ABOUT (/about)
**Headline:** "Built by People Who Know the Sports Surface Industry"
Story about understanding the gap — every marketing agency targets clubs and facilities, nobody helps the contractors who BUILD the courts. We changed that.
- Industry expertise section
- Mission: "Elevate the businesses that build America's courts"
- Values: Results over reports, Contractor-friendly, Transparent pricing, Long-term partnerships
- NO specific team member bios (keep Brad invisible, keep it agency-focused)

### 5. CONTACT (/contact)
- Contact form (name, email, phone, company, message, dropdown for "How did you hear about us?")
- Email: hello@hardcourtmarketing.com
- Phone: placeholder
- "We respond within 24 hours" promise
- FAQ preview below form

### 6. FAQ (/faq)
10-12 questions covering:
- What types of contractors do you work with?
- How much does a website cost?
- How long until I see results from SEO?
- Do you work with suppliers/manufacturers too?
- What's included in the monthly maintenance?
- Can you help with Google Ads?
- Do I need to provide content?
- What's your contract length?
- How do you measure success?
- What makes you different from a regular web agency?

### INDUSTRY LANDING PAGES (8 pages):

### 7. Court Installers (/industries/court-installers) — PRIMARY
"Marketing Built for Court Installation Contractors"
Focus on: residential + commercial court builders, pain points (bad websites, no SEO, word-of-mouth only), our solution, case study preview, CTA

### 8. Court Paint/Surface Manufacturers (/industries/surface-manufacturers)
"Digital Marketing for Court Surface & Paint Manufacturers"
Focus on: brand visibility, dealer network support, product marketing

### 9. Turf Companies (/industries/turf-companies)
"Marketing Solutions for Artificial Turf Companies"
Focus on: residential + commercial turf installers, landscape competition

### 10. Installation Companies (/industries/installation-companies)
"Lead Generation for Sports Facility Installation Companies"
Focus on: multi-sport installers, commercial contracts, bid support

### 11. Pickleball Equipment (/industries/pickleball-equipment)
"Capitalize on the Pickleball Boom — Equipment Brand Marketing"
Focus on: e-commerce, brand awareness, social media, influencer connections

### 12. Tennis Equipment (/industries/tennis-equipment)
"Marketing for Tennis Equipment Brands & Retailers"
Focus on: established market, premium positioning, club partnerships

### 13. Basketball Equipment (/industries/basketball-equipment)
"Basketball Equipment Marketing That Scores"
Focus on: school/municipal contracts, recreational market

### 14. Lighting Manufacturers (/industries/lighting-manufacturers)
"Marketing for Sports Court Lighting Companies"
Focus on: B2B marketing, contractor partnerships, specification support

## EACH INDUSTRY PAGE TEMPLATE:
- Hero with industry-specific headline
- Problem section (3 pain points)
- Solution section (what we do)
- Services relevant to this industry
- Stats/social proof
- CTA with contact form embedded
- FAQ section (3-4 industry-specific questions with FAQPage schema)

## SEO REQUIREMENTS (AEO-first)
- Organization schema in `<head>` on every page
- FAQPage schema on FAQ page and every industry page
- BreadcrumbList schema on all pages
- Dynamic sitemap via `collections.all`
- Clean semantic HTML
- Meta titles and descriptions on every page
- Open Graph tags

## FOOTER
- Navigation links to all pages
- "Powered by GullStack technology" small credit
- Logo
- Copyright 2026

## PLACEHOLDER IMAGES
Use solid dark gradient rectangles or simple SVG placeholders. No broken image links. Make them look intentional (dark cards with subtle gradients work great with this design style).

## CRITICAL
- Mobile responsive (mobile-first)
- Fast loading (no heavy assets)
- Contact forms should use Netlify Forms or just be HTML forms with action="#" for now
- NO WordPress, NO React, NO Next.js — pure 11ty
- Commit everything when done
