# Phase 2-3 Content Creation Plan

## Status: Ready to Execute

### Completed
- ✅ Master blueprint reviewed
- ✅ CSS fixes applied (search visibility)
- ✅ Git commits pushed

### Current Situation
- **Existing pages**: 37 HTML pages already built
- **Token budget**: ~115k remaining
- **Estimated tokens per 3000-word page**: ~15-20k
- **Pages to create**: 4 hubs + 16 cluster pages = 20 pages

---

## Phase 2: Hub Pages (4 pages, ~3000 words each)

### 1. /personal/ Hub
**URL**: `/personal/index.html`  
**Title**: "Personal Document Translation in Dubai – The Expat's Guide to UAE Life"  
**Word Count**: 3,000+  
**Focus**: Family sponsorship, Golden Visa, expat life cycle  

**Sections**:
- Hero + intro (200 words)
- Why this is different (500 words)
- 3 Accordions:
  - Vital Records (Birth, Marriage, Divorce, Death)
  - Immigration (PCC, Bank, License)
  - Academic (Degree, Transcripts)
- Service tiers (200 words)
- After-care guide (800 words)
- FAQ (500 words)

**Links to**: 9 existing subcategory pages

---

### 2. /legal/contracts/ Hub
**URL**: `/legal/contracts/index.html`  
**Title**: "Contract Translation in Dubai – Risk Mitigation for Legal Texts"  
**Word Count**: 3,000+  
**Focus**: Commercial contracts, DLD compliance, legal accuracy  

**Sections**:
- Hero + intro
- UAE contract law overview
- 5 Accordions:
  - NDA (existing page)
  - SPA - Sales Purchase Agreement (NEW)
  - MOU - Memorandum of Understanding (NEW)
  - Lease - Commercial Leases (NEW)
  - General contracts
- DLD/Ejari requirements
- FAQ

**Links to**: 1 existing + 3 new pages

---

### 3. /legal/corporate/ Hub
**URL**: `/legal/corporate/index.html`  
**Title**: "Corporate Governance Translation – Business Setup in UAE"  
**Word Count**: 3,000+  
**Focus**: Company formation, mainland vs freezone, notary requirements  

**Sections**:
- Hero + intro
- Mainland vs Freezone guide
- 3 Accordions:
  - MOA (existing page)
  - POA (existing page)
  - Board Resolutions (NEW)
- Bank account opening requirements
- FAQ

**Links to**: 2 existing + 1 new page

---

### 4. /specialized/ Hub
**URL**: `/specialized/index.html`  
**Title**: "Specialized Translation Services – Technical Accuracy Over Speed"  
**Word Count**: 3,000+  
**Focus**: B2B procurement, industry-specific terminology  

**Sections**:
- Hero + intro
- Why specialized translation differs
- 4 Accordions:
  - Medical (existing page)
  - Technical Manuals (NEW)
  - Hospitality/Menu (NEW)
  - Website Localization (NEW)
- Industry compliance (DHA, ISO, etc.)
- FAQ

**Links to**: 1 existing + 3 new pages

---

## Phase 3: Cluster Pages (16 pages)

### 3A: Court Documents Cluster (3 pages)

**1. /legal/court/ Hub**
- Title: "Court Document Translation – Dubai Courts vs ADGM Courts"
- Word count: 2,500+
- Focus: Litigation, court filing standards

**2. /legal/court/verdicts/**
- Title: "Court Verdict Translation – Court of Cassation Filing Standards"
- Word count: 2,000+
- Focus: Judgment translation, appeal procedures

**3. /legal/court/arbitration/**
- Title: "Arbitration Award Translation – DIAC Enforcement Rules"
- Word count: 2,000+
- Focus: DIAC, international arbitration

---

### 3B: Contract Cluster (3 pages)

**1. /legal/contracts/spa/**
- Title: "SPA Translation – DLD Compliance for Property Investors"
- Word count: 2,000+
- Focus: Sales purchase agreements, property transactions

**2. /legal/contracts/mou/**
- Title: "MOU Translation – MOU vs MOA Legal Distinctions"
- Word count: 2,000+
- Focus: Memorandum of understanding, business partnerships

**3. /legal/contracts/lease/**
- Title: "Commercial Lease Translation – Ejari Registration Requirements"
- Word count: 2,000+
- Focus: Tenancy contracts, Ejari compliance

---

### 3C: Vital Records Cluster (4 pages)

**1. /personal/vital-records/ Hub**
- Title: "Vital Records Translation – Ministry of Foreign Affairs (MOFA) Guide"
- Word count: 2,500+
- Focus: MOFA attestation, family sponsorship

**2. /personal/immigration/ Hub**
- Title: "Immigration Document Translation – Golden Visa Checklist 2025"
- Word count: 2,500+
- Focus: Golden Visa, employment visa, residency

**3. /personal/vital-records/divorce/**
- Title: "Divorce Certificate Translation – Legal Implications for Custody"
- Word count: 2,000+
- Focus: Custody arrangements, visa status changes

**4. /personal/vital-records/death/**
- Title: "Death Certificate Translation – Repatriation & Inheritance Law"
- Word count: 2,000+
- Focus: Estate settlement, repatriation procedures

---

### 3D: Academic Cluster (2 pages)

**1. /personal/academic/ Hub**
- Title: "Academic Document Translation – Ministry of Education Equivalency"
- Word count: 2,500+
- Focus: Degree attestation, equivalency requirements

**2. /personal/academic/transcripts/**
- Title: "School Transcript Translation – Transferring Schools within Dubai"
- Word count: 2,000+
- Focus: School enrollment, KHDA requirements

---

### 3E: Specialized Cluster (3 pages)

**1. /specialized/technical/**
- Title: "Technical Manual Translation – Engineering & Safety Specs (ISO)"
- Word count: 2,000+
- Focus: ISO standards, engineering documentation

**2. /specialized/hospitality/**
- Title: "Menu Translation – Menu Engineering & Appetizing Copy"
- Word count: 2,000+
- Focus: Restaurant menus, hospitality industry

**3. /specialized/digital/**
- Title: "Website Localization – SEO Translation vs Direct Translation"
- Word count: 2,000+
- Focus: Digital content, SEO considerations

---

### 3F: Location Page (1 page)

**1. /locations/dubai/marina/**
- Title: "Translation Services Dubai Marina – Residential Services"
- Word count: 2,000+
- Focus: Tenancy contracts, residential community

---

## Final Tasks

### Navigation Updates
- Add "Personal Documents" dropdown to main nav
- Add "Legal Documents" dropdown with Contracts/Corporate/Court subcategories
- Add "Specialized" to main nav
- Add Dubai Marina to Locations dropdown

### Sitemap Updates
Add 20 new URLs to sitemap.xml with proper priority and changefreq

### Search Index Updates
Add all 20 new pages to search-index.js with:
- Title
- URL
- Category
- Keywords

### Service Worker Updates
Add all new page URLs to cache list in service-worker.js

---

## Execution Strategy

### Option 1: Create All Pages Now
- **Time**: 2-3 hours of AI generation
- **Token cost**: ~80-100k tokens
- **Pros**: Complete in one session
- **Cons**: High token usage, may hit limits

### Option 2: Phased Approach
- **Session 1**: Create 4 hub pages (Phase 2)
- **Session 2**: Create cluster pages 3A-3C (10 pages)
- **Session 3**: Create cluster pages 3D-3F + final tasks (6 pages + updates)
- **Pros**: Manageable token usage, can review between sessions
- **Cons**: Requires multiple sessions

### Option 3: Priority Pages Only
- Create 4 hub pages + high-traffic cluster pages
- Defer low-priority pages for later
- **Pros**: Fastest path to launch
- **Cons**: Incomplete content structure

---

## Recommendation

**Proceed with Option 2 (Phased Approach)**

**Today**: Create 4 hub pages (Phase 2)
- /personal/
- /legal/contracts/
- /legal/corporate/
- /specialized/

**Next session**: Create cluster pages
**Final session**: Navigation + sitemap + search updates

This ensures quality content while managing token budget effectively.

---

## Content Requirements (Per Master Blueprint)

### Voice & Tone
- **Boutique Concierge** voice (calm, honest, transparent)
- **No hype language** (no "best," "leading," "world-class")
- **No exclamation points**
- **Focus on service**, not translation quality
- **Radical transparency** about limitations

### Structure (Every Page)
1. Hero + intro (H1 + 150-200 words)
2. "Why this is different" section (400-600 words)
3. Accordion sections (native `<details>` elements)
4. Service tiers table (no specific prices)
5. Locations coverage
6. FAQ section (6-8 questions)
7. Final CTA

### Schema Markup (Every Page)
1. Service Schema
2. LocalBusiness Schema
3. FAQPage Schema
4. BreadcrumbList Schema

### Technical Requirements
- Mobile-first accordion components
- Lazy loading for images
- Sticky WhatsApp CTA
- All content in HTML DOM (not AJAX)
- WCAG 2.1 AA accessibility

---

## Ready to Proceed?

**Next step**: Confirm which option you prefer, and I'll begin creating the pages.

**Current status**: 
- Git: All changes committed and pushed
- CSS: Search visibility fixed
- Blueprint: Reviewed and understood
- Token budget: ~115k remaining
