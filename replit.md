# OnlineTranslation.ae Website

## Overview
A hybrid static HTML website for OnlineTranslation.ae featuring a Divi immigration-inspired design with smooth hover effects. The site positions the brand as a "Boutique Digital Concierge" (NOT a "Translation Factory"), providing Ministry of Justice certified legal translation services in Dubai with a modern navy/coral color scheme.

## Brand Strategy

### Brand Voice
- **Persona**: "Senior Legal Consultant" - authoritative but accessible, proactive guidance, digital fluency
- **Tone**: Professional, consultative, reassuring
- **Banned Words**: "Premier", "Best", "Leading", "Cheap"
- **Preferred Terms**: "MOJ-Licensed", "Court-Ready", "Compliance-Grade"

### Target Personas
1. **Golden Visa Applicants**: High-skill professionals, investors, specialists
2. **Palm Jumeirah Property Investors**: Remote investors, property handovers
3. **DMCC/Mainland Business Starters**: Entrepreneurs, corporate clients
4. **Families**: Visa sponsorship, school admissions, personal documents

### Tri-Channel Communication
- **WhatsApp**: Speed and convenience (primary)
- **Apple Messages for Business**: VIP clients
- **Corporate Email**: Trust and formal communication

## Project Architecture

### Directory Structure
```
/
├── index.html                    # Homepage with schema markup
├── services.html                 # All services overview
├── golden-visa-translation.html  # Golden Visa document packages
├── attestation.html              # Attestation & MOFAIC services
├── certificate-translation.html  # Birth, marriage, degree certificates
├── corporate-translation.html    # DMCC, Mainland business documents
├── palm-jumeirah-translation.html # Property translation for investors
├── legal-translation.html        # General legal translation
├── pricing.html                  # Transparent pricing tables
├── contact.html                  # Contact page with form
├── faq.html                      # FAQ with accordion
├── privacy.html                  # Privacy policy
├── terms.html                    # Terms of service
├── server.py                     # Python static file server
├── manifest.webmanifest          # PWA manifest
├── service-worker.js             # Service worker for offline
├── sitemap.xml                   # SEO sitemap (13 pages)
├── robots.txt                    # Search engine directives
├── vercel.json                   # Vercel deployment config
├── styles/
│   ├── porto-desktop.css         # Desktop styles + page components
│   ├── sticky-mobile.css         # Mobile PWA styles
│   └── main.css                  # Utilities and animations
├── scripts/
│   └── main.js                   # Interactive functionality
└── images/
    ├── logo/
    │   ├── logo-transparent.png  # Logo (no background)
    │   └── logo-glow.png         # Logo with glow effect
    └── icons/                    # PWA icons (72px to 512px)
```

### Page Architecture (Topical Silos)
1. **Pillar Page**: services.html
2. **Cluster Pages**:
   - Golden Visa Translation (high priority)
   - Attestation & MOFAIC
   - Certificate Translation
   - Corporate Translation
   - Palm Jumeirah Property (SEO focus for HNW)
   - Legal Translation

### Key Features
1. **Desktop (>992px)**: Divi-inspired design, shrink header, animated cards, sticky quote sidebar
2. **Mobile (<992px)**: Sticky bottom navigation, slide-out sidebar
3. **PWA Support**: Installable, offline-capable
4. **SEO Optimized**: Schema.org, sitemap, Open Graph, breadcrumbs

### Design System
- **Primary Color**: #1a2b5f (Deep Navy)
- **Accent Color**: #e84e36 (Coral/Red)
- **Gold Highlight**: #d4a54c
- **Fonts**: Poppins (headings), Roboto (body)
- **Breakpoint**: 992px for desktop/mobile switch
- **Effects**: Smooth hover transitions (0.4s cubic-bezier)

## Content
- **Brand**: OnlineTranslation.ae (short: OT.ae)
- **Services**: Golden Visa, Attestation, Certificates, Corporate, Property, Legal Translation
- **Contact**: +971 50 862 0217 (WhatsApp/Call), info@onlinetranslation.ae
- **Location**: Palm Jumeirah, Dubai, UAE
- **Working Hours**: Daily 8:00 AM - 10:00 PM

## Running the Project
- Development: `python server.py`
- Access: http://0.0.0.0:5000

## Recent Changes (Nov 2024)
- Created comprehensive service pages for each persona
- Added Golden Visa Translation page with Equivalency Pack
- Added Palm Jumeirah Property Translation for remote investors
- Added Corporate/DMCC Translation page
- Added Certificate Translation page
- Added Attestation & MOFAIC page with chain visualization
- Created Pricing page with transparent rates
- Added Privacy Policy and Terms of Service pages
- Integrated logo images into header and footer
- Extended CSS with new page component styles
- Updated sitemap.xml with all 13 pages
- Enhanced brand voice alignment across all content

## Deployment
Static site ready for deployment:
- **Vercel**: vercel.json configured
- **Netlify/GitHub Pages**: All files in root
- **PWA Ready**: Install prompts on mobile

## User Preferences
- Desktop: Corporate professional feel
- Mobile: Sticky bottom navigation exclusively
- Smooth, subtle animations
- Coral accent for CTAs
- Palm Jumeirah focus for SEO (signals High Net Worth)
- No banned words in any content
