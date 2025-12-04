# OnlineTranslation.ae Website

## Overview
OnlineTranslation.ae is a hybrid static HTML website positioning itself as a "Boutique Digital Concierge" for Ministry of Justice certified legal translation services in Dubai. It targets high-net-worth individuals and businesses (Golden Visa applicants, property investors, corporate clients) with guaranteed court acceptance. The site features a Divi immigration-inspired design, a modern navy/coral color scheme, and smooth animations, aiming for a professional yet accessible online presence. The business vision is to provide specialized, high-quality legal translation services, leveraging Dubai's market potential for international residents and businesses.

## User Preferences
- Desktop: Corporate professional feel
- Mobile: Sticky bottom navigation exclusively
- Smooth, subtle animations
- Coral accent for CTAs
- Palm Jumeirah focus for SEO (signals High Net Worth)
- No banned words in any content
- WhatsApp as primary CTA on all devices
- Use user's own photos from OneDrive instead of stock images

## System Architecture
The project uses a hybrid static HTML architecture with a 4-Silo SEO structure for content organization.

### UI/UX Decisions
- **Design Inspiration**: Divi Exodus immigration-inspired layout.
- **Color Scheme**: Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c).
- **Typography**: Heading fonts (Montserrat/Jost, 700-800 weight, uppercase, 0.3em letter-spacing); Body fonts (Open Sans/Roboto, 400 weight, 1.8-1.9 line-height).
- **Animations**: Smooth hover transitions (0.3s), translateY(-8px) card hover, box-shadow effects.
- **Responsiveness**: Breakpoint at 992px; mobile features sticky bottom navigation and slide-out sidebar; desktop includes shrink header and animated cards.
- **Branding**: "Boutique Digital Concierge" with "Guaranteed Court Acceptance."
- **Communication Channels**: Tri-channel approach with WhatsApp (primary), Apple Messages for Business, and Corporate Email.

### Technical Implementations
- **PWA Support**: Installable and offline-capable using `manifest.webmanifest` and `service-worker.js`.
- **SEO Optimization**: Schema.org structured data (BreadcrumbList, Service, LocalBusiness), `sitemap.xml` with 4-silo structure, `robots.txt`, Open Graph.
- **OS Detection**: `os-detect.js` for OS-specific styling.
- **Static File Server**: `server.py` for local development.

### Feature Specifications
- **Unified Navigation**: Single hamburger menu and slide-out sidebar for both desktop and mobile.
- **Key Features**: MOJ-Certified Translators, White-Glove Digital Concierge, Document Tracking & Audit Trail.
- **Content Focus**: Solutions-focused services like Golden Visa Pack, DLD Property POA, DMCC Corporate Setup.

### System Design Choices
- **4-Silo SEO Structure**:
    1.  `/services/`: Legal, Golden Visa, Attestation, Certificate, Corporate Translation.
    2.  `/locations/`: Geographic targeting (Dubai - Palm Jumeirah, JLT, DIFC, Business Bay; Abu Dhabi; Sharjah).
    3.  `/industries/`: Industry-specific (Legal, Healthcare, Real Estate, E-commerce).
    4.  `/resources/`: Pricing Guide, FAQ, Document Checklist, Golden Visa Checklist 2025, Attestation Chain Guide.
- **Deployment**: Configured for Vercel with `vercel.json`, also compatible with Netlify/GitHub Pages.
- **CSS Architecture**: 6 CSS files separated for OS-specific conditional loading: `porto-desktop.css` (main), `sticky-mobile.css`, `dark-mode.css`, `mobile-ios.css`, `mobile-android.css`, `desktop-macos.css`.

## Recent Progress

### Phase 1A Complete (Dec 4, 2025)
Created 10 high-conversion "money pages" with 2,000+ words each:
- `/personal/vital-records/birth/` - Birth Certificate Translation
- `/personal/vital-records/marriage/` - Marriage Certificate Translation
- `/personal/immigration/pcc/` - Police Clearance Certificate
- `/personal/immigration/bank/` - Bank Statement Translation
- `/personal/immigration/license/` - Driving License Translation
- `/personal/academic/degree/` - University Degree Translation
- `/legal/corporate/poa/` - Power of Attorney Translation
- `/legal/corporate/moa/` - Memorandum of Association Translation
- `/legal/contracts/nda/` - NDA Translation
- `/specialized/medical/` - Medical Report Translation

**Total Pages: 39** (up from 29)

### Phase 1B In Progress (Dec 4, 2025)
Expanded key pages to 2,000+ words with comprehensive content:
- **Homepage (index.html)**: 4,402 words - Added "Popular Documents" section linking to 8 money pages
- **Golden Visa (services/golden-visa-translation/)**: 4,576 words - Added compliance checklist, category requirements (4 expandable sections), aftercare guide, 8 FAQs with FAQPage schema
- **Attestation (services/attestation/)**: 4,583 words - Added pre-validation section, document links grid (6 money pages), aftercare guide, 8 FAQs with FAQPage schema

**Internal Linking Improvements:**
- Homepage now links to 8 popular document pages in new "Popular Documents" section
- Golden Visa links to degree, bank statement, marriage certificate, MOA
- Attestation links to birth, marriage, degree, PCC, POA, MOA

**Navigation Updates:**
- Header Services dropdown now includes all 10 money pages organized by category (Personal Documents, Corporate Documents)
- Sidebar navigation now includes Personal Documents and Corporate Documents sections with all 10 money pages
- Service worker bumped to v104 for cache refresh

### UI/Styling Fixes (Dec 4, 2025)
- **Hero Buttons**: Added `.hero-btn`, `.hero-btn--primary`, `.hero-btn--ghost` styles in `porto-desktop.css` with dark mode overrides
- **Sidebar Accordion**: Converted sidebar section titles to collapsible accordions with chevron icons and smooth animations
- **Dark Mode Sidebar**: Fixed link contrast - white/light text on dark navy background with coral accent hover states
- **Dark Mode Links**: Excluded `.hero-btn` from blue link color override to maintain button styling

### Remaining Phases
- Phase 1B continued: Expand remaining service pages (Legal, Corporate, Certificate)
- Phase 2: Create 4 hub pages at 3,000 words each
- Phase 3: Complete remaining cluster pages
- Phase 4: Final word count expansion to reach 55+ pages

## External Dependencies
- **OneDrive**: Used for accessing user's images and brand assets from the `OtLegalTranslationcom` folder.
- **GitHub**: Connected for version control.
- **Google Docs**: Content accessed via manual sharing or document links (no direct integration).
- **Web3Forms**: Configured for contact form submissions to info@onlinetranslation.ae with WhatsApp redirect fallback.