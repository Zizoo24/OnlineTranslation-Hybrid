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

## Project Architecture (4-Silo SEO Structure)

### Directory Structure
```
/
├── index.html                    # Homepage with schema markup
├── contact.html                  # Contact page with form
├── privacy.html                  # Privacy policy
├── terms.html                    # Terms of service
├── server.py                     # Python static file server
├── manifest.webmanifest          # PWA manifest
├── service-worker.js             # Service worker for offline
├── sitemap.xml                   # SEO sitemap (4-silo structure)
├── robots.txt                    # Search engine directives
├── vercel.json                   # Vercel deployment config
│
├── services/                     # SILO 1: Services
│   ├── index.html                # Services landing page
│   ├── legal-translation/
│   │   └── index.html            # Legal translation service
│   ├── golden-visa-translation/
│   │   └── index.html            # Golden Visa packages
│   ├── attestation/
│   │   └── index.html            # Attestation & MOFAIC
│   ├── certificate-translation/
│   │   └── index.html            # Birth, marriage, degrees
│   └── corporate-translation/
│       └── index.html            # DMCC, Mainland business
│
├── locations/                    # SILO 2: Locations
│   ├── index.html                # Locations landing page
│   ├── dubai/
│   │   ├── palm-jumeirah/
│   │   │   └── index.html        # Palm Jumeirah translation
│   │   ├── jlt/                  # JLT (coming soon)
│   │   ├── difc/                 # DIFC (coming soon)
│   │   └── business-bay/         # Business Bay (coming soon)
│   ├── abu-dhabi/                # Abu Dhabi (coming soon)
│   └── sharjah/                  # Sharjah (coming soon)
│
├── industries/                   # SILO 3: Industries
│   ├── index.html                # Industries landing page
│   ├── legal/                    # Legal industry (coming soon)
│   ├── healthcare/               # Healthcare (coming soon)
│   ├── real-estate/              # Real Estate (coming soon)
│   └── e-commerce/               # E-commerce (coming soon)
│
├── resources/                    # SILO 4: Resources
│   ├── index.html                # Resources landing page
│   ├── pricing-guide/
│   │   └── index.html            # Pricing information
│   └── faq/
│       └── index.html            # FAQ page
│
├── styles/
│   ├── porto-desktop.css         # Desktop styles + page components
│   ├── sticky-mobile.css         # Mobile PWA styles
│   ├── mobile-ios.css            # iOS-specific styles
│   ├── mobile-android.css        # Android Material Design styles
│   ├── desktop-macos.css         # macOS-specific styles
│   ├── dark-mode.css             # Comprehensive dark mode theme
│   └── main.css                  # Utilities and animations
│
├── scripts/
│   ├── main.js                   # Interactive functionality
│   └── os-detect.js              # OS/device detection
│
└── images/
    ├── logo/                     # Logo variants
    └── icons/                    # PWA icons (72px to 512px)
```

### 4-Silo Architecture (SEO Optimized)
1. **Services Silo** (`/services/`): All translation service pages
2. **Locations Silo** (`/locations/`): Geographic targeting pages (Dubai, Abu Dhabi, etc.)
3. **Industries Silo** (`/industries/`): Industry-specific pages (Legal, Healthcare, etc.)
4. **Resources Silo** (`/resources/`): FAQ, Pricing, Guides

### Key Features
1. **Unified Navigation**: Single hamburger menu + slide-out sidebar for both desktop and mobile
2. **Desktop (>992px)**: Divi-inspired design, shrink header, hamburger menu toggle, animated cards
3. **Mobile (<992px)**: Sticky bottom navigation, slide-out sidebar
4. **PWA Support**: Installable, offline-capable
5. **SEO Optimized**: Schema.org, 4-silo sitemap, Open Graph, breadcrumbs
6. **OS Detection**: iOS, Android, macOS-specific styling

### Design System (Divi Exodus Palette)
- **Primary Color**: #0a1f44 (Deep Navy Blue)
- **Accent Color**: #e31e24 (Vivid Red)
- **Gold Highlight**: #d4a54c
- **Text Dark**: #000000 (Pure Black)
- **Background**: #ffffff (White)
- **Fonts**: Poppins (headings), Roboto (body)
- **Breakpoint**: 992px for desktop/mobile switch
- **Effects**: Smooth hover transitions (0.2s)

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
- **4-Silo SEO Restructure**: Implemented complete 4-silo architecture per Gemini guidelines
  - Created /services/, /locations/, /industries/, /resources/ silos
  - Moved all service pages to /services/ subfolder structure
  - Created silo landing pages for each category
  - Updated all internal navigation links
  - Updated sitemap.xml with new silo URLs
- **Brand Name Display**: Added "OnlineTranslation.ae" brand text consistently across all pages
- **Unified Navigation**: Hamburger menu + sidebar for both desktop and mobile
- **OS-Specific Styling**: Device detection for iOS, Android, macOS
- **Performance Optimized**: Reduced transition times (0.4s → 0.2s), removed heavy animations
- **Dark Mode**: Comprehensive dark theme with improved contrast

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
- WhatsApp as primary CTA on all devices
