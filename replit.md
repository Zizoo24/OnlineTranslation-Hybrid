# OnlineTranslation.ae Website

## Overview
OnlineTranslation.ae is a hybrid static HTML website designed to position the brand as a "Boutique Digital Concierge" for Ministry of Justice certified legal translation services in Dubai. It targets high-net-worth individuals and businesses, including Golden Visa applicants, property investors, and corporate clients, offering audit-ready assurance and compliance-grade legal translation. The site features a Divi immigration-inspired design with a modern navy/coral color scheme and smooth animations, aiming for a professional yet accessible online presence.

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
- **Design Inspiration**: Divi immigration-inspired layout.
- **Color Scheme**: Primary Navy (#0E2B48), Accent Coral (#FF1654), Gold Highlight (#d4a54c).
- **Typography**: Heading fonts: Montserrat/Jost (700-800 weight, uppercase); Body fonts: Open Sans/Roboto (400 weight, 1.8 line-height).
- **Animations**: Smooth hover transitions (0.3s), translateY(-8px) card hover, box-shadow effects.
- **Responsiveness**: Breakpoint at 992px for desktop/mobile switch. Mobile features a sticky bottom navigation and slide-out sidebar. Desktop includes a shrink header and animated cards.
- **Branding**: Repositioned as "Boutique Digital Concierge" with "Audit-Ready Assurance."
- **Communication Channels**: Tri-channel approach with WhatsApp (primary), Apple Messages for Business, and Corporate Email.

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