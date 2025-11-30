# OnlineTranslation.ae Website

## Overview
OnlineTranslation.ae is a hybrid static HTML website designed to position the brand as a "Boutique Digital Concierge" for Ministry of Justice certified legal translation services in Dubai. It targets high-net-worth individuals and businesses, including Golden Visa applicants, property investors, and corporate clients, offering guaranteed court acceptance and professional legal translation. The site features a Divi immigration-inspired design with a modern navy/coral color scheme and smooth animations, aiming for a professional yet accessible online presence.

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
The project employs a hybrid static HTML architecture with a 4-Silo SEO structure for content organization.

### UI/UX Decisions
- **Design Inspiration**: Divi Exodus immigration-inspired layout with precise module measurements.
- **Color Scheme**: Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c).
- **Typography**: Heading fonts: Montserrat/Jost (700-800 weight, uppercase with 0.3em letter-spacing); Body fonts: Open Sans/Roboto (400 weight, 1.8-1.9 line-height).
- **Animations**: Smooth hover transitions (0.3s), translateY(-8px) card hover, box-shadow effects.
- **Responsiveness**: Breakpoint at 992px for desktop/mobile switch. Mobile features a sticky bottom navigation and slide-out sidebar. Desktop includes a shrink header and animated cards.
- **Branding**: Repositioned as "Boutique Digital Concierge" with "Guaranteed Court Acceptance."
- **Communication Channels**: Tri-channel approach with WhatsApp (primary), Apple Messages for Business, and Corporate Email.

### Exodus Module Specifications (Latest)
- **Hero Section**: Container max-width 1180px, 110px top/140px bottom padding, title 46px with 0.3em letter-spacing, description 15px at 1.9 line-height
- **Overlap Cards**: 320px width, -115px margin-top offset, 28px/22px padding, 60px outlined icons with 2px border
- **Process Steps**: 260px cards, 32px padding, 22px step index (01/02/03), 66px icons with accent border
- **Stats Bar**: #FF1654 gradient background, 36px vertical padding, 46px counter numbers, 12px uppercase labels with 0.3em letter-spacing
- **Why Choose Us**: 280px cards, 64px medallion icons with rgba background, 16px uppercase titles
- **Services Grid**: 360px cards, 220px image height, 24px content padding, 18px titles
- **About Section**: 420px image column, 50px gap, 36px/24px experience badge sizing

### Technical Implementations
- **PWA Support**: Installable and offline-capable using `manifest.webmanifest` and `service-worker.js`.
- **SEO Optimization**: Schema.org structured data (BreadcrumbList, Service, LocalBusiness), `sitemap.xml` with 4-silo structure, `robots.txt`, Open Graph.
- **OS Detection**: `os-detect.js` for iOS, Android, and macOS-specific styling.
- **Static File Server**: `server.py` for local development.

### Feature Specifications
- **Unified Navigation**: Single hamburger menu and slide-out sidebar for both desktop and mobile.
- **Key Features**: MOJ-Certified Translators, White-Glove Digital Concierge, Document Tracking & Audit Trail emphasized.
- **Content Focus**: Solutions-focused services like Golden Visa Pack, DLD Property POA, DMCC Corporate Setup.

### System Design Choices
- **4-Silo SEO Structure**:
    1.  `/services/`: Legal, Golden Visa, Attestation, Certificate, Corporate Translation.
    2.  `/locations/`: Geographic targeting (Dubai - Palm Jumeirah, JLT, DIFC, Business Bay; Abu Dhabi; Sharjah).
    3.  `/industries/`: Industry-specific (Legal, Healthcare, Real Estate, E-commerce).
    4.  `/resources/`: Pricing Guide, FAQ, Document Checklist.
- **Deployment**: Configured for Vercel with `vercel.json`, also compatible with Netlify/GitHub Pages.

## External Dependencies
- **OneDrive**: Used for accessing user's images and brand assets from the `OtLegalTranslationcom` folder.
- **GitHub**: Connected for version control.
- **Google Docs**: User declined direct integration; content access requires manual sharing or document links.

## Recent Changes (November 30, 2025)
- **3-Column Grid Enforcement**: All grids now capped at maximum 3 columns on desktop, 2 columns on tablet (@992px), 1 column on mobile (@768px)
  - Services grids (five-col, exodus-services-grid): 3 cols max
  - Languages grid: 3 cols max (was 6 columns)
  - Stats grid: 3 cols max (was 4 columns)
  - Why grid: 3 cols max (was 4 columns)
  - Process steps: 3 cols max (was 4 columns)
  - Reasons grid: 3 cols max (was 4 columns)
  - Package grid: 3 cols max (was 4 columns)
  - Attestation pricing: 3 cols max (was 4 columns)
  - Extras grid: 3 cols max (was 6 columns)
  - Footer grid: 3 cols max (was 4 columns)
- **Service Worker Cache**: Updated to v79

## Earlier Changes (November 2025)
- **Contact Form Integration**: Web3Forms configured to send to info@onlinetranslation.ae with WhatsApp redirect fallback (awaiting access key from user)
- **Overlap Cards Fix**: Full-width coral background using CSS `isolation: isolate` to prevent navy strip bleed
- **Why Choose Us Redesign**: Light background with white cards, 4px coral top border, gold icon circles (rgba(212, 165, 76, 0.12))
- **Stats Bar Enhancement**: Labels now use gold color for proper visual hierarchy
- **Header Overlap Fix**: Pages without breadcrumbs require 160px top padding to clear fixed header (~120px: 50px header-top + 70px header-main)
- **Footer Redesign**: Compact footer with 70px emblem logo (60px mobile), 50px padding, smaller typography
- **Navigation Spacing**: Fixed nav menu to prevent overlap (11px font, 8px padding, tighter gaps)
- **3-Column Grid**: Updated all services grids to max 3 columns (desktop), 2 columns (tablet @992px), 1 column (mobile @768px)
- **Unified Global Components**: All 25+ pages now have consistent Exodus-style header, full sidebar navigation, search overlay, and emblem footer
  - 5 services inner pages (legal-translation, attestation, golden-visa-translation, certificate-translation, corporate-translation)
  - 4 resources pages (index, faq, pricing-guide, document-checklist)
  - 5 industries pages (index, legal, healthcare, real-estate, e-commerce)
  - 7 locations pages (index, palm-jumeirah, jlt, difc, business-bay, abu-dhabi, sharjah)
- **Font Consistency**: All pages use Montserrat/Open Sans (replaced Poppins/Roboto)
- **OS-detect Stylesheets**: All inner pages include mobile-ios.css, mobile-android.css, desktop-macos.css, dark-mode.css

## Documentation
- **`docs/exodus-divi-modules.md`**: Reference document containing all Exodus Divi page templates, modules, and design patterns for building service/location/resource pages.