# OnlineTranslation.ae Website

## Overview
A hybrid static HTML website for OnlineTranslation.ae featuring a Divi immigration-inspired design with smooth hover effects. The site provides Ministry of Justice certified legal translation services in Dubai with a modern navy/coral color scheme.

## Project Architecture

### Directory Structure
```
/
├── index.html              # Main HTML file with schema markup
├── services.html           # All services overview page
├── contact.html            # Contact page with form
├── faq.html                # FAQ with accordion functionality
├── legal-translation.html  # Legal translation service page
├── server.py               # Python static file server
├── manifest.webmanifest    # PWA manifest for installability
├── service-worker.js       # Service worker for offline capability
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── vercel.json             # Vercel deployment configuration
├── styles/
│   ├── porto-desktop.css   # Desktop styling with Divi-inspired effects
│   ├── sticky-mobile.css   # Mobile PWA sticky navigation styles
│   └── main.css            # Responsive utilities and animations
├── scripts/
│   └── main.js             # Interactive functionality & animations
└── images/
    └── icons/              # PWA icons (72px to 512px)
```

### Key Features
1. **Desktop Experience (>992px)**: Divi-inspired design with smooth hover effects, shrink header, animated cards
2. **Mobile Experience (<992px)**: Sticky bottom navigation bar, slide-out sidebar, mobile-optimized layout
3. **PWA Support**: Manifest for installation, service worker for offline caching
4. **SEO Optimized**: Schema.org structured data, sitemap, robots.txt, Open Graph tags

### Design System (Divi Immigration-Inspired)
- **Primary Color**: #1a2b5f (Deep Navy)
- **Accent Color**: #e84e36 (Coral/Red)
- **Gold Highlight**: #d4a54c
- **Fonts**: Poppins (headings), Roboto (body)
- **Breakpoint**: 992px for desktop/mobile switch
- **Effects**: Smooth hover transitions (0.4s cubic-bezier), card lift effects, gradient overlays

## Content
- **Brand**: OnlineTranslation.ae (short: OT.ae)
- **Services**: Legal Translation, Attestation & MOFAIC, Corporate Translation, Certificates, Court Documents, Visa & Immigration
- **Contact**: +971 50 862 0217 (WhatsApp/Call), info@onlinetranslation.ae
- **Location**: Palm Jumeirah, Dubai, UAE
- **Working Hours**: Daily 8:00 AM - 10:00 PM

## Running the Project
The website is served by a Python static file server on port 5000.
- Development: `python server.py`
- Access: http://0.0.0.0:5000

## Recent Changes
- Nov 2024: Redesigned with Divi immigration template inspiration
- Added smooth hover effects and animations to all cards
- Implemented coral (#e84e36) accent color with deep navy (#1a2b5f) primary
- Created SEO infrastructure: sitemap.xml, robots.txt, comprehensive Schema.org markup
- Added additional pages: services.html, contact.html, faq.html, legal-translation.html
- Enhanced back-to-top button, counter animations, intersection observers
- Mobile sticky navigation remains exclusively for <992px breakpoint
- Updated manifest.webmanifest with new theme color

## Deployment
Static site ready for deployment:
- **Vercel**: vercel.json configured for static deployment
- **Netlify/GitHub Pages**: All files in root, no build required
- **PWA Ready**: Install prompts on mobile devices

## User Preferences
- Desktop design should show corporate professional feel
- Mobile must use sticky bottom navigation exclusively
- Smooth, subtle animations preferred over jarring transitions
- Coral accent for CTAs and interactive elements
