# OnlineTranslation.ae Website

## Overview
A hybrid static HTML website for OnlineTranslation.ae that combines Porto's elegant corporate desktop design with sticky mobile PWA features. The site provides Ministry of Justice certified legal translation services in Dubai.

## Project Architecture

### Directory Structure
```
/
├── index.html              # Main HTML file with all sections
├── server.py               # Python static file server
├── manifest.webmanifest    # PWA manifest for installability
├── service-worker.js       # Service worker for offline capability
├── styles/
│   ├── porto-desktop.css   # Porto-inspired desktop styling
│   ├── sticky-mobile.css   # Mobile PWA sticky navigation styles
│   └── main.css            # Responsive utilities and animations
├── scripts/
│   └── main.js             # All interactive functionality
└── images/
    └── icons/              # PWA icons (72px to 512px)
```

### Key Features
1. **Desktop Experience (>992px)**: Porto corporate design with shrink header, parallax hero, service cards
2. **Mobile Experience (<992px)**: Sticky bottom navigation bar, slide-out sidebar, mobile-optimized layout
3. **PWA Support**: Manifest for installation, service worker for offline caching
4. **Device Detection**: Automatic UI switching based on viewport width

### Design System
- **Primary Color**: #2a3f98 (Porto blue)
- **Accent Color**: #c9a227 (Gold highlights)
- **Fonts**: Poppins (headings), Roboto (body)
- **Breakpoint**: 992px for desktop/mobile switch

## Content
- **Brand**: OnlineTranslation.ae
- **Services**: Legal Translation, Attestation & MOFAIC, Corporate Translation, Certificates, Court Documents, Immigration
- **Contact**: +971 50 862 0217 (WhatsApp/Call), info@onlinetranslation.ae
- **Location**: Palm Jumeirah, Dubai, UAE

## Running the Project
The website is served by a Python static file server on port 5000.
- Development: `python server.py`
- Access: http://0.0.0.0:5000

## Recent Changes
- Nov 2024: Initial build combining Porto desktop + sticky mobile PWA themes
- All content from OnlineTranslation.ae integrated
- PWA manifest and service worker configured

## Deployment
Static site ready for deployment to any static hosting:
- Vercel, Netlify, GitHub Pages
- All files in root directory, no build step required
