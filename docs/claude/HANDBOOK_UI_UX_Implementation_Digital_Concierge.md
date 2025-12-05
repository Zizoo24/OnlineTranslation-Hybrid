# THE DIGITAL CONCIERGE UI/UX HANDBOOK
## Complete Implementation Guide for OnlineTranslation.ae

**Version:** 1.0  
**Date:** December 5, 2025  
**Alignment:** Master Strategic Blueprint v6.0  
**Target:** Production-Ready Implementation

---

## CRITICAL DESIGN PRINCIPLES

### The "Digital Concierge" Visual Language

Your website is NOT a translation factory. Every visual element must communicate:
- **Premium Simplicity** - Boutique service, not corporate bureaucracy
- **Instant Clarity** - What we do, in 3 seconds
- **Mobile Dominance** - 70%+ of UAE traffic is mobile
- **WhatsApp Integration** - Seamless transition from site to conversation

### What This Means in Practice:
❌ **NO floating CTAs everywhere** (desperate, cheap)  
❌ **NO generic card layouts** (boring, forgettable)  
❌ **NO walls of text** (overwhelming, confusing)  
❌ **NO transparent nav on light backgrounds** (unreadable)

✅ **YES to glassmorphism effects** (premium, modern)  
✅ **YES to accordion-based content** (SEO-friendly, scannable)  
✅ **YES to sticky bottom action bar** (mobile-optimized)  
✅ **YES to visual hierarchy** (guide the eye deliberately)

---

## PART I: NAVIGATION ARCHITECTURE

### 1.1 Top Navigation Bar - The Glassmorphism Solution

**PROBLEM IDENTIFIED:**  
Current transparent nav bar becomes unreadable on light backgrounds.

**SOLUTION:**  
Implement liquid glass effect with dynamic backdrop blur and subtle tint.

#### HTML Structure:
```html
<header class="site-header" id="mainHeader">
  <div class="header-container">
    <!-- Logo -->
    <div class="header-logo">
      <a href="../index.html">
        <img src="../images/logo/brand/emblem-64.png" alt="OnlineTranslation.ae" width="48" height="48">
        <span class="logo-text">
          <span class="logo-main">OnlineTranslation.ae</span>
          <span class="logo-tagline">Boutique Legal Translation</span>
        </span>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="header-nav" aria-label="Main navigation">
      <ul class="nav-list">
        <li><a href="../index.html">Home</a></li>
        <li class="has-dropdown">
          <button class="nav-trigger" aria-expanded="false" aria-controls="services-menu">
            Services <span class="arrow">▼</span>
          </button>
          <ul class="nav-dropdown" id="services-menu">
            <li><a href="../services/legal-translation/">Legal Translation</a></li>
            <li><a href="../services/golden-visa-translation/">Golden Visa</a></li>
            <li><a href="../services/attestation/">Attestation & MOFAIC</a></li>
            <li><a href="../services/certificate-translation/">Certificate Translation</a></li>
            <li><a href="../services/corporate-translation/">Corporate Translation</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <button class="nav-trigger" aria-expanded="false" aria-controls="locations-menu">
            Locations <span class="arrow">▼</span>
          </button>
          <ul class="nav-dropdown" id="locations-menu">
            <li><a href="../locations/dubai/">Dubai (All Areas)</a></li>
            <li><a href="../locations/dubai/palm-jumeirah/">Palm Jumeirah</a></li>
            <li><a href="../locations/dubai/jlt/">JLT & DMCC</a></li>
            <li><a href="../locations/dubai/difc/">DIFC</a></li>
            <li><a href="../locations/abu-dhabi/">Abu Dhabi</a></li>
            <li><a href="../locations/sharjah/">Sharjah</a></li>
          </ul>
        </li>
        <li><a href="../resources/faq/">FAQ</a></li>
      </ul>
    </nav>

    <!-- Action Buttons -->
    <div class="header-actions">
      <a href="https://wa.me/971508620217" class="btn-whatsapp" aria-label="Contact us on WhatsApp">
        <span class="btn-icon">💬</span>
        <span class="btn-text">WhatsApp</span>
      </a>
      <a href="tel:+971508620217" class="btn-call" aria-label="Call us now">
        <span class="btn-icon">📞</span>
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <!-- Mobile menu content -->
  </div>
</header>
```

#### CSS - Glassmorphism Navigation:
```css
/* ========================================
   LIQUID GLASS NAVIGATION BAR
   ======================================== */

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Initial state - subtle glass */
.site-header {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
}

/* Scrolled state - stronger glass */
.site-header.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
}

/* Dark mode variant (if needed) */
@media (prefers-color-scheme: dark) {
  .site-header {
    background: rgba(26, 26, 26, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .site-header.scrolled {
    background: rgba(26, 26, 26, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }
}

/* Container */
.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo styling */
.header-logo a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.header-logo a:hover {
  opacity: 0.8;
}

.header-logo img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.logo-main {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.2;
}

.logo-tagline {
  font-size: 0.7rem;
  font-weight: 500;
  color: #666;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Desktop Navigation */
.header-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-list > li > a,
.nav-list > li > button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.6rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
  position: relative;
}

.nav-list > li > a:hover,
.nav-list > li > button:hover {
  background: rgba(26, 95, 122, 0.08);
  color: #1a5f7a;
}

/* Dropdown indicator */
.arrow {
  font-size: 0.7rem;
  transition: transform 0.2s;
}

.nav-trigger[aria-expanded="true"] .arrow {
  transform: rotate(-180deg);
}

/* Dropdown menu */
.nav-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  min-width: 220px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(200%);
  -webkit-backdrop-filter: blur(20px) saturate(200%);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.3);
  list-style: none;
  padding: 0.5rem;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
}

.has-dropdown:hover .nav-dropdown,
.nav-trigger[aria-expanded="true"] + .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-dropdown li a {
  display: block;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: #1a1a1a;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s;
}

.nav-dropdown li a:hover {
  background: rgba(26, 95, 122, 0.1);
  color: #1a5f7a;
  padding-left: 1.25rem;
}

/* Action buttons */
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-whatsapp {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(37, 211, 102, 0.2);
}

.btn-whatsapp:hover {
  background: #22c55e;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.btn-call {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-call:hover {
  background: #3B82F6;
  color: white;
}

.btn-icon {
  font-size: 1.1rem;
  line-height: 1;
}

/* Mobile menu toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 42px;
  height: 42px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.mobile-menu-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: #1a1a1a;
  border-radius: 2px;
  transition: all 0.3s;
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* ========================================
   MOBILE RESPONSIVE
   ======================================== */

@media (max-width: 1024px) {
  /* Hide desktop nav */
  .header-nav {
    display: none;
  }
  
  /* Show mobile toggle */
  .mobile-menu-toggle {
    display: flex;
  }
  
  /* Adjust logo on mobile */
  .logo-text {
    display: none;
  }
  
  .header-logo img {
    width: 40px;
    height: 40px;
  }
  
  /* Adjust action buttons on mobile */
  .btn-text {
    display: none;
  }
  
  .btn-whatsapp {
    width: 42px;
    padding: 0;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0.5rem 1rem;
  }
  
  /* Even more compact on small mobile */
  .btn-call {
    display: none; /* Use bottom action bar instead */
  }
}

/* ========================================
   JAVASCRIPT SCROLL DETECTION
   ======================================== */
```

#### JavaScript for Navigation:
```javascript
// Navigation scroll effect
(function() {
  const header = document.getElementById('mainHeader');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Dropdown toggles (for keyboard accessibility)
  document.querySelectorAll('.nav-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all other dropdowns
      document.querySelectorAll('.nav-trigger').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });
      
      // Toggle this dropdown
      this.setAttribute('aria-expanded', !expanded);
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.nav-trigger').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
  
  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      mobileMenu.setAttribute('aria-hidden', expanded);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = expanded ? '' : 'hidden';
    });
  }
})();
```

### 1.2 Mobile Bottom Action Bar (Replaces Floating CTAs)

**STRATEGIC RATIONALE:**  
- Thumb-friendly zone (bottom 1/3 of screen)
- Always accessible without obscuring content
- Replaces desperate "floating WhatsApp button"
- Aligns with "Sticky Mobile" pattern from Master Blueprint

#### HTML:
```html
<!-- Add before closing </body> tag -->
<div class="mobile-action-bar" role="navigation" aria-label="Quick actions">
  <a href="https://wa.me/971508620217?text=I%20need%20translation%20service" 
     class="action-btn action-whatsapp"
     aria-label="Start WhatsApp conversation">
    <span class="action-icon">💬</span>
    <span class="action-label">WhatsApp</span>
  </a>
  
  <a href="tel:+971508620217" 
     class="action-btn action-call"
     aria-label="Call us now">
    <span class="action-icon">📞</span>
    <span class="action-label">Call</span>
  </a>
  
  <button class="action-btn action-upload"
          onclick="window.location.href='https://wa.me/971508620217?text=I%20want%20to%20send%20documents'"
          aria-label="Upload documents">
    <span class="action-icon">📄</span>
    <span class="action-label">Send Docs</span>
  </button>
</div>
```

#### CSS:
```css
/* ========================================
   MOBILE BOTTOM ACTION BAR
   (Shows only on mobile, replaces floating CTAs)
   ======================================== */

.mobile-action-bar {
  display: none; /* Hidden on desktop */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);
  padding: 0.5rem;
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom)); /* iPhone notch */
}

@media (max-width: 768px) {
  .mobile-action-bar {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
  }
}

.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 0.5rem;
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s;
  min-height: 64px; /* Touch-friendly */
}

.action-btn:active {
  transform: scale(0.95);
}

/* WhatsApp button */
.action-whatsapp {
  background: linear-gradient(135deg, #25D366 0%, #22c55e 100%);
  color: white;
  box-shadow: 0 2px 12px rgba(37, 211, 102, 0.3);
}

.action-whatsapp:hover {
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
}

/* Call button */
.action-call {
  background: linear-gradient(135deg, #3B82F6 0%, #2563eb 100%);
  color: white;
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.3);
}

.action-call:hover {
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
}

/* Upload button */
.action-upload {
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%);
  color: white;
  box-shadow: 0 2px 12px rgba(139, 92, 246, 0.3);
}

.action-upload:hover {
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
}

.action-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.action-label {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
}

/* Add bottom padding to page content so it doesn't hide behind bar */
@media (max-width: 768px) {
  body {
    padding-bottom: 80px; /* Height of action bar + buffer */
  }
}
```

---

## PART II: SERVICE PAGES ARCHITECTURE

### 2.1 Hero Section - The "Human Hook"

Aligns with Master Blueprint Section 3.1 - "Above the Fold"

#### HTML Template:
```html
<section class="service-hero">
  <div class="hero-container">
    <!-- Service Badge -->
    <div class="hero-badge">
      <span class="badge-icon">✓</span>
      MOJ-Licensed • Ready in 60 Minutes
    </div>
    
    <!-- H1 Title (SEO Optimized) -->
    <h1 class="hero-title">
      <span class="title-category">[Document Type]</span>
      <span class="title-main">Translation in Dubai – MOJ Certified & Urgent</span>
    </h1>
    
    <!-- Concierge Intro -->
    <p class="hero-intro">
      Don't let a typo reject your application. We provide 100% compliant translations 
      accepted by <strong>[Relevant Entity]</strong> on the first submission.
    </p>
    
    <!-- Service Snapshot (Bullet Points) -->
    <ul class="hero-checklist">
      <li>
        <span class="check-icon">✅</span>
        <span class="check-text"><strong>Ready in 60 Minutes</strong> for standard documents</span>
      </li>
      <li>
        <span class="check-icon">✅</span>
        <span class="check-text"><strong>100% Digital Workflow</strong> via WhatsApp</span>
      </li>
      <li>
        <span class="check-icon">✅</span>
        <span class="check-text"><strong>Accepted by [Entity]</strong> first time, guaranteed</span>
      </li>
    </ul>
    
    <!-- Primary CTA -->
    <div class="hero-cta-group">
      <a href="https://wa.me/971508620217?text=I%20need%20[document]%20translation" 
         class="cta-primary">
        <span class="cta-icon">💬</span>
        Check Document Eligibility
      </a>
      <button class="cta-secondary" onclick="document.getElementById('how-it-works').scrollIntoView({behavior: 'smooth'})">
        How It Works ↓
      </button>
    </div>
  </div>
</section>
```

#### CSS:
```css
/* ========================================
   SERVICE HERO SECTION
   ======================================== */

.service-hero {
  padding: 8rem 1.5rem 4rem; /* Extra top padding for fixed nav */
  background: linear-gradient(180deg, #f8f9fa 0%, white 50%);
  position: relative;
  overflow: hidden;
}

/* Subtle background pattern */
.service-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(26, 95, 122, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(26, 95, 122, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.hero-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Service Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #1a5f7a 0%, #2d8fb8 100%);
  color: white;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.2);
}

.badge-icon {
  font-size: 1rem;
}

/* Hero Title */
.hero-title {
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.title-category {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #1a5f7a;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
}

.title-main {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .title-main {
    font-size: 1.8rem;
  }
}

/* Hero Intro */
.hero-intro {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.hero-intro strong {
  color: #1a5f7a;
  font-weight: 700;
}

/* Hero Checklist */
.hero-checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.hero-checklist li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.check-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.check-text {
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.5;
}

.check-text strong {
  font-weight: 700;
  color: #1a5f7a;
}

/* CTA Group */
.hero-cta-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.1rem 2.5rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  border: none;
  cursor: pointer;
}

.cta-primary:hover {
  background: #22c55e;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.4);
}

.cta-primary:active {
  transform: translateY(0);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.1rem 2rem;
  background: white;
  color: #1a5f7a;
  text-decoration: none;
  border: 2px solid #1a5f7a;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  transition: all 0.2s;
  cursor: pointer;
}

.cta-secondary:hover {
  background: #1a5f7a;
  color: white;
}

.cta-icon {
  font-size: 1.3rem;
  line-height: 1;
}

@media (max-width: 768px) {
  .service-hero {
    padding: 6rem 1rem 3rem;
  }
  
  .hero-cta-group {
    flex-direction: column;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}
```

### 2.2 Accordion-Based Content Modules

Implements Master Blueprint Part III (Modular Hierarchy) + Part VI (Sticky Mobile Pattern)

**CRITICAL:** All content must be in DOM at page load (SEO requirement per Blueprint Section 7.2)

#### Module Structure:
```html
<section class="content-modules">
  <!-- Module A: Compliance Checklist -->
  <div class="content-module" id="compliance-checklist">
    <h2 class="module-heading">Prerequisites for Translation</h2>
    <p class="module-intro">Before we start, ensure your document meets these requirements:</p>
    
    <div class="accordion-group">
      <details class="accordion-item" name="compliance">
        <summary class="accordion-header">
          <span class="accordion-icon">📋</span>
          <span class="accordion-title">Document Legibility</span>
          <span class="accordion-arrow">▼</span>
        </summary>
        <div class="accordion-content">
          <p>Your scan or photo must show:</p>
          <ul>
            <li>All four corners visible</li>
            <li>No glare or shadows obscuring text</li>
            <li>All stamps and seals clearly readable</li>
            <li>Minimum 300 DPI resolution (for scans)</li>
          </ul>
          <div class="checklist-tip">
            <strong>💡 Pro Tip:</strong> Take the photo in natural daylight, not under fluorescent lights.
          </div>
        </div>
      </details>

      <details class="accordion-item" name="compliance">
        <summary class="accordion-header">
          <span class="accordion-icon">✓</span>
          <span class="accordion-title">Required Attestations</span>
          <span class="accordion-arrow">▼</span>
        </summary>
        <div class="accordion-content">
          <p>Depending on your document type and destination:</p>
          
          <div class="attestation-grid">
            <div class="attestation-path">
              <h4>For UAE Government Use:</h4>
              <ol>
                <li>Home country notary/government seal</li>
                <li>Ministry of Foreign Affairs (MOFA) stamp</li>
                <li>UAE Embassy attestation (if from abroad)</li>
              </ol>
            </div>
            
            <div class="attestation-path">
              <h4>For Free Zone Companies:</h4>
              <ol>
                <li>Notary seal (often sufficient)</li>
                <li>MOFA may not be required</li>
                <li>Check with your free zone authority</li>
              </ol>
            </div>
          </div>
          
          <a href="../resources/attestation-guide/" class="inline-cta">
            → Complete Attestation Guide
          </a>
        </div>
      </details>

      <details class="accordion-item" name="compliance">
        <summary class="accordion-header">
          <span class="accordion-icon">👤</span>
          <span class="accordion-title">Name Consistency</span>
          <span class="accordion-arrow">▼</span>
        </summary>
        <div class="accordion-content">
          <p><strong>Critical for immigration and legal documents:</strong></p>
          <p>The name on your document must match <em>exactly</em> as it appears on your passport. Common issues:</p>
          <ul>
            <li><strong>Middle names:</strong> If your passport shows "John Paul Smith" but certificate shows "John Smith," this can cause rejections</li>
            <li><strong>Spelling variants:</strong> "Mohammed" vs "Muhammad"</li>
            <li><strong>Maiden names:</strong> Marriage certificates must show both names</li>
          </ul>
          <div class="warning-box">
            <strong>⚠️ Warning:</strong> GDRFA and immigration portals have automated name-matching. Even one letter difference will reject your application.
          </div>
        </div>
      </details>
    </div>
  </div>

  <!-- Module B: Step-by-Step Process -->
  <div class="content-module" id="process">
    <h2 class="module-heading">How We Process Your [Document Name]</h2>
    <p class="module-intro">Our 4-step system ensures acceptance on first submission:</p>
    
    <div class="process-timeline">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3 class="step-title">Digital Scan Review</h3>
          <p class="step-description">
            You send clear photos or PDFs via WhatsApp. We check for legibility, 
            stamps, and common rejection reasons <em>before</em> charging you.
          </p>
          <div class="step-time">⏱ Within 10 minutes</div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3 class="step-title">Legal Translation</h3>
          <p class="step-description">
            Our licensed partner (Arkan Legal Translation) executes the translation 
            using MOJ-approved terminology and formatting standards.
          </p>
          <div class="step-time">⏱ 30-60 minutes (standard docs)</div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3 class="step-title">Draft Approval</h3>
          <p class="step-description">
            We send a PDF proof on WhatsApp. You review for accuracy. 
            Minor corrections (typos, formatting) are free.
          </p>
          <div class="step-time">⏱ Instant delivery</div>
        </div>
      </div>

      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3 class="step-title">Final Stamping & Delivery</h3>
          <p class="step-description">
            Once approved, we apply the official legal stamp and QR code. 
            Digital copy sent immediately, physical copy couriered if needed.
          </p>
          <div class="step-time">⏱ Same day</div>
        </div>
      </div>
    </div>

    <div class="process-cta">
      <p><strong>Ready to start?</strong> Send us your document now for a free eligibility check.</p>
      <a href="https://wa.me/971508620217?text=I%20have%20a%20[document]%20for%20translation" 
         class="btn-process-start">
        Start Process on WhatsApp →
      </a>
    </div>
  </div>

  <!-- Module C: After-Care Guide (Value Add) -->
  <div class="content-module" id="aftercare">
    <h2 class="module-heading">What to Do After You Get Your Translation</h2>
    <p class="module-intro">
      Getting the translation is just the first step. Here's your complete guide 
      to using it with [Relevant Authority]:
    </p>
    
    <div class="aftercare-guide">
      <div class="guide-section">
        <h3>📤 For GDRFA Portal Submission</h3>
        <ol>
          <li>Create account at <a href="https://smartservices.ica.gov.ae/" target="_blank" rel="noopener">smartservices.ica.gov.ae</a></li>
          <li>Select "Family/New Born Residence Permit" (or relevant service)</li>
          <li>Upload translated document as PDF (max 2MB)</li>
          <li>Ensure file name matches document type (e.g., "Marriage_Certificate_Translated.pdf")</li>
          <li>Submit and wait for SMS confirmation (usually 24-48 hours)</li>
        </ol>
        <div class="guide-tip">
          <strong>💡 Common Mistake:</strong> Don't upload both original and translation as separate files. 
          GDRFA expects one file for translated documents.
        </div>
      </div>

      <div class="guide-section">
        <h3>🏢 For Typing Center/PRO Submission</h3>
        <p>
          If you're using a typing center (Al Ansari, Tasheel, etc.), provide them with:
        </p>
        <ul>
          <li>Original document</li>
          <li>Translated copy (physical, with stamp)</li>
          <li>Your passport copy</li>
          <li>Emirates ID (if applicable)</li>
        </ul>
        <p>
          <strong>They handle:</strong> Portal upload, fee payment, status tracking, 
          and document collection from GDRFA/Tasheel.
        </p>
      </div>

      <div class="guide-section">
        <h3>📧 For Email Submission to Authorities</h3>
        <p>Some entities (DIFC, certain free zones) accept email submissions:</p>
        <ul>
          <li>Scan translated document at 300 DPI minimum</li>
          <li>Save as PDF (not JPG/PNG)</li>
          <li>Use clear subject line: "[Your Company Name] - Translated [Document Type]"</li>
          <li>Include reference number if you have one</li>
          <li>Request read receipt to confirm delivery</li>
        </ul>
      </div>
    </div>

    <div class="aftercare-support">
      <p>
        <strong>Still confused?</strong> We guide you through the next steps. 
        That's part of the "Concierge" service.
      </p>
      <a href="https://wa.me/971508620217?text=I%20received%20my%20translation.%20What%27s%20next%3F" 
         class="btn-support">
        Get Post-Translation Support
      </a>
    </div>
  </div>

  <!-- Module D: Pricing & Timelines -->
  <div class="content-module" id="pricing">
    <h2 class="module-heading">Service Tiers & Turnaround Times</h2>
    <p class="module-intro">
      Choose the service level that matches your deadline. All tiers include 
      the same quality and MOJ-licensed stamp.
    </p>
    
    <div class="pricing-grid">
      <div class="pricing-card tier-standard">
        <div class="tier-label">Standard</div>
        <div class="tier-timing">
          <div class="timing-hours">24 Hours</div>
          <div class="timing-desc">Comfortable deadlines</div>
        </div>
        <ul class="tier-features">
          <li>Perfect for planned submissions</li>
          <li>Full quality checks</li>
          <li>Digital + physical copy</li>
          <li>Email & WhatsApp support</li>
          <li>Minor corrections free</li>
        </ul>
        <div class="tier-pricing">
          <span class="price-from">From</span>
          <span class="price-amount">AED 50</span>
          <span class="price-note">per page</span>
        </div>
        <a href="https://wa.me/971508620217?text=Quote%20for%20standard%20[document]%20translation" 
           class="tier-cta tier-cta-standard">
          Get Quote
        </a>
      </div>

      <div class="pricing-card tier-express featured">
        <div class="featured-badge">Most Popular</div>
        <div class="tier-label">Express</div>
        <div class="tier-timing">
          <div class="timing-hours">6 Hours</div>
          <div class="timing-desc">Time-sensitive matters</div>
        </div>
        <ul class="tier-features">
          <li>For urgent deadlines</li>
          <li>Priority queue placement</li>
          <li>Rapid digital delivery</li>
          <li>Direct WhatsApp support</li>
          <li>Rush physical delivery available</li>
        </ul>
        <div class="tier-pricing">
          <span class="price-from">From</span>
          <span class="price-amount">AED 100</span>
          <span class="price-note">per page</span>
        </div>
        <a href="https://wa.me/971508620217?text=Quote%20for%20express%20[document]%20translation" 
           class="tier-cta tier-cta-express">
          Get Quote
        </a>
      </div>

      <div class="pricing-card tier-vip">
        <div class="tier-label">VIP Concierge</div>
        <div class="tier-timing">
          <div class="timing-hours">1 Hour</div>
          <div class="timing-desc">Same-day emergencies</div>
        </div>
        <ul class="tier-features">
          <li>Immediate agent assignment</li>
          <li>Dedicated coordinator</li>
          <li>Real-time progress updates</li>
          <li>Direct phone line</li>
          <li>Courier to your location</li>
        </ul>
        <div class="tier-pricing">
          <span class="price-from">Custom</span>
          <span class="price-amount">Pricing</span>
          <span class="price-note">based on urgency</span>
        </div>
        <a href="https://wa.me/971508620217?text=I%20need%20VIP%20concierge%20service" 
           class="tier-cta tier-cta-vip">
          Discuss Needs
        </a>
      </div>
    </div>

    <div class="pricing-notes">
      <h4>What Affects Final Price:</h4>
      <ul>
        <li><strong>Page count:</strong> Calculated by word count (250 words = 1 page)</li>
        <li><strong>Document complexity:</strong> Legal contracts require more care than birth certificates</li>
        <li><strong>Attestation level:</strong> If document needs additional stamps before translation</li>
        <li><strong>Language pair:</strong> Arabic↔English is standard; other languages may vary</li>
        <li><strong>Physical delivery:</strong> Courier within Dubai is AED 20-30 extra</li>
      </ul>
      <p class="pricing-guarantee">
        <strong>💯 Price Guarantee:</strong> We quote before starting. No hidden fees. 
        If we quote AED 150, you pay AED 150 — even if translation takes longer than expected.
      </p>
    </div>
  </div>

  <!-- Module E: FAQ (Schema Optimized) -->
  <div class="content-module" id="faq">
    <h2 class="module-heading">Frequently Asked Questions</h2>
    <p class="module-intro">
      Quick answers to common questions. Can't find what you need? 
      <a href="https://wa.me/971508620217">Ask us directly</a>.
    </p>
    
    <div class="faq-accordion">
      <details class="faq-item" name="faq" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary class="faq-question" itemprop="name">
          Can I use a photo from my phone instead of a scan?
          <span class="faq-arrow">▼</span>
        </summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>
              <strong>Yes, absolutely.</strong> Most of our clients send phone photos via WhatsApp. 
              Just ensure:
            </p>
            <ul>
              <li>All four corners of the document are visible</li>
              <li>Take the photo in good lighting (natural daylight works best)</li>
              <li>Hold the phone directly above the document (not at an angle)</li>
              <li>Make sure all text and stamps are in focus</li>
            </ul>
            <p>
              We'll review it within 10 minutes and let you know if we need a clearer image.
            </p>
          </div>
        </div>
      </details>

      <details class="faq-item" name="faq" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary class="faq-question" itemprop="name">
          Do you deliver to Abu Dhabi?
          <span class="faq-arrow">▼</span>
        </summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>
              <strong>Yes.</strong> Digital delivery is instant (via WhatsApp/email). 
              For physical copies:
            </p>
            <ul>
              <li><strong>Abu Dhabi:</strong> Next-day courier (AED 30-50 depending on area)</li>
              <li><strong>Sharjah:</strong> Same-day or next-day (AED 20-30)</li>
              <li><strong>Other Emirates:</strong> 1-2 days via courier</li>
            </ul>
            <p>
              Most clients only need the digital copy for portal uploads. Physical copies 
              are usually only needed if your typing center/PRO specifically requests one.
            </p>
          </div>
        </div>
      </details>

      <details class="faq-item" name="faq" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary class="faq-question" itemprop="name">
          Is this accepted for Golden Visa applications?
          <span class="faq-arrow">▼</span>
        </summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>
              <strong>Yes, fully compliant.</strong> Golden Visa applications 
              require MOJ-licensed translation, which is what we provide through our partner Arkan.
            </p>
            <p>
              We translate Golden Visa documents daily:
            </p>
            <ul>
              <li>University degrees</li>
              <li>Marriage certificates (for family sponsorship)</li>
              <li>Birth certificates (for children)</li>
              <li>Employment contracts</li>
              <li>Bank statements</li>
              <li>Property ownership documents</li>
            </ul>
            <p>
              The translated documents upload directly to the ICP Smart Services portal. 
              We can guide you through the upload process if needed.
            </p>
          </div>
        </div>
      </details>

      <details class="faq-item" name="faq" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary class="faq-question" itemprop="name">
          What if there's a mistake in the translation?
          <span class="faq-arrow">▼</span>
        </summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>
              <strong>We fix it immediately at no cost.</strong> Here's how we handle errors:
            </p>
            <h4>Our Mistake (typo, wrong term, formatting):</h4>
            <ul>
              <li>We correct and reissue within 1 hour</li>
              <li>New stamped copy provided free</li>
              <li>Physical redelivery if needed (free)</li>
            </ul>
            <h4>Original Document Issue (name misspelled on source document):</h4>
            <ul>
              <li>We translate it as written on original</li>
              <li>If you need it changed, you'll need to get a corrected original first</li>
              <li>We can then retranslate at 50% discount</li>
            </ul>
            <p>
              <strong>Prevention:</strong> We send a draft PDF for your approval <em>before</em> 
              applying the final stamp. 99% of issues are caught at this stage.
            </p>
          </div>
        </div>
      </details>

      <details class="faq-item" name="faq" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <summary class="faq-question" itemprop="name">
          Can you translate documents in other languages (not just Arabic/English)?
          <span class="faq-arrow">▼</span>
        </summary>
        <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <p>
              <strong>Yes, through our network.</strong> Our core service is Arabic ↔ English, 
              but we coordinate translations for:
            </p>
            <div class="language-grid">
              <div class="lang-column">
                <h5>European:</h5>
                <ul>
                  <li>French</li>
                  <li>German</li>
                  <li>Italian</li>
                  <li>Spanish</li>
                  <li>Russian</li>
                </ul>
              </div>
              <div class="lang-column">
                <h5>Asian:</h5>
                <ul>
                  <li>Hindi</li>
                  <li>Urdu</li>
                  <li>Chinese (Mandarin)</li>
                  <li>Tagalog</li>
                  <li>Malayalam</li>
                </ul>
              </div>
              <div class="lang-column">
                <h5>Others:</h5>
                <ul>
                  <li>Turkish</li>
                  <li>Farsi</li>
                  <li>Japanese</li>
                  <li>Korean</li>
                  <li>+ more</li>
                </ul>
              </div>
            </div>
            <p>
              <strong>Process:</strong> Send us the document. We'll confirm if we can handle 
              the language pair, provide a quote, and typical turnaround (usually 48-72 hours 
              for non-Arabic languages).
            </p>
          </div>
        </div>
      </details>
    </div>

    <div class="faq-cta">
      <p><strong>Don't see your question?</strong> We're happy to clarify anything.</p>
      <a href="../resources/faq/" class="btn-faq-more">View All FAQs →</a>
      <a href="https://wa.me/971508620217?text=I%20have%20a%20question%20about..." class="btn-ask">
        Ask on WhatsApp
      </a>
    </div>
  </div>
</section>
```

#### CSS for Modules:
```css
/* ========================================
   CONTENT MODULES (ACCORDION-BASED)
   ======================================== */

.content-modules {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.content-module {
  margin-bottom: 5rem;
  scroll-margin-top: 100px; /* Account for fixed nav */
}

.content-module:last-child {
  margin-bottom: 3rem;
}

/* Module Headings */
.module-heading {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.module-intro {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 2.5rem;
}

/* ========================================
   ACCORDION COMPONENT (HTML5 details/summary)
   ======================================== */

.accordion-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.accordion-item {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
}

.accordion-item[open] {
  border-color: #1a5f7a;
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.08);
}

.accordion-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background 0.2s;
}

.accordion-header::-webkit-details-marker {
  display: none;
}

.accordion-header:hover {
  background: rgba(26, 95, 122, 0.03);
}

.accordion-icon {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.accordion-title {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
}

.accordion-arrow {
  font-size: 0.8rem;
  color: #666;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.accordion-item[open] .accordion-arrow {
  transform: rotate(-180deg);
}

.accordion-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
  animation: accordionOpen 0.3s ease-out;
}

@keyframes accordionOpen {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.accordion-content p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #444;
}

.accordion-content ul,
.accordion-content ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.accordion-content li {
  margin-bottom: 0.5rem;
  line-height: 1.7;
  color: #444;
}

/* Checklist Tip */
.checklist-tip {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-left: 4px solid #3B82F6;
  border-radius: 8px;
}

.checklist-tip strong {
  color: #1a5f7a;
}

/* Warning Box */
.warning-box {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 4px solid #F59E0B;
  border-radius: 8px;
}

.warning-box strong {
  color: #92400e;
}

/* Attestation Grid */
.attestation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.attestation-path {
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.attestation-path h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #1a5f7a;
  margin-bottom: 1rem;
}

.attestation-path ol {
  margin-left: 1.25rem;
}

.attestation-path li {
  margin-bottom: 0.5rem;
  color: #444;
  line-height: 1.6;
}

/* Inline CTA */
.inline-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  color: #1a5f7a;
  text-decoration: none;
  border: 2px solid #1a5f7a;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  margin-top: 1rem;
}

.inline-cta:hover {
  background: #1a5f7a;
  color: white;
}

/* ========================================
   PROCESS TIMELINE
   ======================================== */

.process-timeline {
  position: relative;
  padding-left: 3rem;
  margin: 2.5rem 0;
}

/* Vertical line */
.process-timeline::before {
  content: '';
  position: absolute;
  left: 1.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #1a5f7a 0%, #2d8fb8 100%);
}

.process-step {
  position: relative;
  margin-bottom: 3rem;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-number {
  position: absolute;
  left: -3rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #1a5f7a 0%, #2d8fb8 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.3);
  z-index: 1;
}

.step-content {
  padding-left: 1.5rem;
}

.step-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.step-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 0.75rem;
}

.step-time {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  background: rgba(26, 95, 122, 0.1);
  color: #1a5f7a;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Process CTA */
.process-cta {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  text-align: center;
}

.process-cta p {
  font-size: 1.05rem;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
}

.btn-process-start {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.btn-process-start:hover {
  background: #22c55e;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

/* ========================================
   AFTER-CARE GUIDE
   ======================================== */

.aftercare-guide {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2.5rem 0;
}

.guide-section {
  padding: 2rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
}

.guide-section h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
}

.guide-section ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.guide-section li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
  color: #444;
}

.guide-section ul {
  margin-left: 1.5rem;
}

.guide-tip {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background: #fef3c7;
  border-left: 4px solid #F59E0B;
  border-radius: 8px;
}

.guide-tip strong {
  color: #92400e;
}

.aftercare-support {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 12px;
  text-align: center;
}

.aftercare-support p {
  font-size: 1.05rem;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
}

.btn-support {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #3B82F6;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
}

.btn-support:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

/* ========================================
   PRICING GRID
   ======================================== */

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.pricing-card {
  position: relative;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.pricing-card.featured {
  border-color: #1a5f7a;
  border-width: 3px;
  box-shadow: 0 4px 16px rgba(26, 95, 122, 0.12);
}

.featured-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #1a5f7a;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tier-label {
  font-size: 1.4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
}

.tier-timing {
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.timing-hours {
  font-size: 2rem;
  font-weight: 800;
  color: #1a5f7a;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.timing-desc {
  font-size: 0.9rem;
  color: #666;
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.tier-features li {
  padding: 0.6rem 0;
  padding-left: 1.75rem;
  position: relative;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}

.tier-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10B981;
  font-weight: 700;
  font-size: 1.1rem;
}

.tier-pricing {
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.price-from {
  display: block;
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.price-amount {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.price-note {
  display: block;
  font-size: 0.85rem;
  color: #666;
}

.tier-cta {
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
}

.tier-cta-standard {
  background: #f3f4f6;
  color: #1a1a1a;
  border: 2px solid #d1d5db;
}

.tier-cta-standard:hover {
  background: #e5e7eb;
}

.tier-cta-express {
  background: #1a5f7a;
  color: white;
}

.tier-cta-express:hover {
  background: #144757;
  transform: translateY(-2px);
}

.tier-cta-vip {
  background: #8B5CF6;
  color: white;
}

.tier-cta-vip:hover {
  background: #7C3AED;
  transform: translateY(-2px);
}

/* Pricing Notes */
.pricing-notes {
  margin-top: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.pricing-notes h4 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.pricing-notes ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.pricing-notes li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
  color: #444;
}

.pricing-guarantee {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: white;
  border-left: 4px solid #10B981;
  border-radius: 8px;
}

.pricing-guarantee strong {
  color: #059669;
}

/* ========================================
   FAQ COMPONENT (Schema Optimized)
   ======================================== */

.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0;
}

.faq-item {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
}

.faq-item[open] {
  border-color: #1a5f7a;
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.08);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1a1a1a;
  transition: background 0.2s;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question:hover {
  background: rgba(26, 95, 122, 0.03);
}

.faq-arrow {
  font-size: 0.8rem;
  color: #666;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.faq-item[open] .faq-arrow {
  transform: rotate(-180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  animation: accordionOpen 0.3s ease-out;
}

.faq-answer p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #444;
}

.faq-answer ul,
.faq-answer ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
  line-height: 1.7;
  color: #444;
}

.faq-answer h4,
.faq-answer h5 {
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1a5f7a;
  font-weight: 700;
}

/* Language Grid (for multilingual FAQ) */
.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.lang-column h5 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a5f7a;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lang-column ul {
  margin-left: 0;
  list-style: none;
  padding: 0;
}

.lang-column li {
  padding: 0.35rem 0;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.9rem;
}

.lang-column li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1a5f7a;
  font-weight: 700;
}

/* FAQ CTA */
.faq-cta {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  text-align: center;
}

.faq-cta p {
  font-size: 1.05rem;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
}

.btn-faq-more,
.btn-ask {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
  margin: 0 0.5rem;
}

.btn-faq-more {
  background: white;
  color: #1a5f7a;
  border: 2px solid #1a5f7a;
}

.btn-faq-more:hover {
  background: #1a5f7a;
  color: white;
}

.btn-ask {
  background: #25D366;
  color: white;
}

.btn-ask:hover {
  background: #22c55e;
  transform: translateY(-2px);
}

/* ========================================
   MOBILE RESPONSIVE
   ======================================== */

@media (max-width: 768px) {
  .content-modules {
    padding: 2rem 1rem;
  }
  
  .module-heading {
    font-size: 1.6rem;
  }
  
  .module-intro {
    font-size: 1rem;
  }
  
  /* Process timeline on mobile */
  .process-timeline {
    padding-left: 2.5rem;
  }
  
  .process-timeline::before {
    left: 1.25rem;
  }
  
  .step-number {
    left: -2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.1rem;
  }
  
  .step-content {
    padding-left: 1rem;
  }
  
  /* Pricing grid stacks on mobile */
  .pricing-grid {
    grid-template-columns: 1fr;
  }
  
  /* Aftercare guide sections on mobile */
  .guide-section {
    padding: 1.5rem;
  }
  
  /* Language grid on mobile */
  .language-grid {
    grid-template-columns: 1fr;
  }
}

/* ========================================
   PRINT STYLES (for users who print pages)
   ======================================== */

@media print {
  .mobile-action-bar,
  .site-header,
  .cta-primary,
  .cta-secondary,
  .btn-whatsapp,
  .btn-call {
    display: none !important;
  }
  
  .accordion-item {
    border: 1px solid #ccc;
    page-break-inside: avoid;
  }
  
  .accordion-content {
    display: block !important;
  }
}
```

---

## PART III: SEO & TECHNICAL IMPLEMENTATION

### 3.1 Schema Markup (Per Master Blueprint Section 4.1)

Every FAQ accordion must have corresponding FAQPage schema:

```javascript
// Generate FAQ Schema automatically
function generateFAQSchema() {
  const faqItems = document.querySelectorAll('.faq-item');
  const faqEntities = [];
  
  faqItems.forEach(item => {
    const question = item.querySelector('[itemprop="name"]').textContent.trim();
    const answer = item.querySelector('[itemprop="text"]').textContent.trim();
    
    faqEntities.push({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    });
  });
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqEntities
  };
  
  // Inject into page
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Run on page load
window.addEventListener('DOMContentLoaded', generateFAQSchema);
```

### 3.2 Service Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Document Type] Translation",
  "provider": {
    "@type": "ProfessionalService",
    "name": "OnlineTranslation.ae",
    "image": "https://onlinetranslation.ae/images/logo/brand/emblem-256.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
      "streetAddress": "Palm Jumeirah"
    },
    "telephone": "+971508620217",
    "url": "https://onlinetranslation.ae"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Translation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Translation",
          "description": "24-hour turnaround for standard documents"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Express Translation",
          "description": "6-hour priority handling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VIP Concierge",
          "description": "1-hour immediate service"
        }
      }
    ]
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Aggregate Customer Reviews"
    }
  }
}
</script>
```

---

## PART IV: WORKFLOW & DEPLOYMENT

### 4.1 Development Workflow

**DO NOT make floating CTAs. NO MORE floating WhatsApp buttons.**

#### Local Development Setup:
```bash
# 1. Clone repository
git clone https://github.com/Zizoo24/OnlineTranslation-Hybrid.git
cd OnlineTranslation-Hybrid

# 2. Create new branch for UI updates
git checkout -b ui-enhancement-glassmorphism

# 3. Install dependencies (if any)
npm install  # or yarn install

# 4. Start local server
python3 server.py
# OR
python -m http.server 8000

# Access at: http://localhost:8000
```

#### File Organization:
```
OnlineTranslation-Hybrid/
├── index.html
├── services/
│   ├── index.html (main services page - UPDATE THIS)
│   ├── legal-translation/
│   │   └── index.html
│   ├── golden-visa-translation/
│   │   └── index.html
│   ├── certificate-translation/
│   │   └── index.html
│   └── corporate-translation/
│       └── index.html
├── styles/
│   ├── main.css (base styles)
│   ├── navigation.css (NEW - glassmorphism nav)
│   ├── service-pages.css (NEW - accordion modules)
│   └── mobile-action-bar.css (NEW - bottom bar)
├── scripts/
│   ├── navigation.js (NEW - nav interactions)
│   ├── accordions.js (NEW - accordion behavior)
│   └── schema-generator.js (NEW - FAQ schema)
└── vercel.json (deployment config)
```

#### Implementation Order:
1. **Day 1:** Navigation bar (glassmorphism + mobile menu)
2. **Day 2:** Mobile action bar (remove floating CTAs)
3. **Day 3:** Hero section + service cards
4. **Day 4:** Accordion modules (compliance, process, FAQ)
5. **Day 5:** Pricing tiers + aftercare guide
6. **Day 6:** Testing + bug fixes
7. **Day 7:** Deploy to Vercel

### 4.2 Git Workflow

```bash
# Make changes to files
git add styles/navigation.css scripts/navigation.js services/index.html

# Commit with descriptive message
git commit -m "feat(nav): implement glassmorphism navigation bar

- Add backdrop blur and subtle tint
- Fix transparent nav readability on light backgrounds
- Implement scrolled state with stronger glass effect
- Add keyboard-accessible dropdowns
- Mobile-responsive with hamburger menu

Closes #[issue-number]"

# Push to remote
git push origin ui-enhancement-glassmorphism

# Vercel auto-deploys preview at:
# https://online-translation-hybrid-[hash].vercel.app
```

### 4.3 Vercel Deployment

Your `vercel.json` should include:
```json
{
  "rewrites": [
    { "source": "/services", "destination": "/services/index.html" },
    { "source": "/services/legal-translation", "destination": "/services/legal-translation/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## PART V: QUALITY CHECKLIST

### Before Launching ANY Page:

#### Visual QA:
- [ ] Glassmorphism nav is readable on both light and dark backgrounds
- [ ] NO floating WhatsApp CTAs (only bottom action bar on mobile)
- [ ] Hero section displays properly on all screen sizes
- [ ] Service cards have consistent spacing and alignment
- [ ] Accordion animations are smooth (no jank)
- [ ] Pricing tiers are clearly differentiated
- [ ] Mobile action bar doesn't overlap content
- [ ] All emoji/icons display correctly across devices

#### Technical QA:
- [ ] All accordion content is in DOM at page load (not lazy-loaded)
- [ ] FAQ schema is generated and valid (test in Google Rich Results)
- [ ] Service schema is present on every service page
- [ ] No JavaScript console errors
- [ ] Page loads in under 3 seconds (test on 3G)
- [ ] Images are optimized (WebP with fallback)
- [ ] All links work (no 404s)

#### Accessibility:
- [ ] All interactive elements have visible focus rings
- [ ] Accordions work with keyboard (Enter/Space to toggle)
- [ ] Screen reader announces expanded/collapsed state
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Touch targets are minimum 44px × 44px
- [ ] Skip-to-content link present for keyboard users

#### SEO:
- [ ] H1 tag present and optimized
- [ ] Meta description under 160 characters
- [ ] Open Graph tags for social sharing
- [ ] Canonical URL set correctly
- [ ] Alt text on all images
- [ ] Sitemap includes new pages

#### Mobile:
- [ ] Bottom action bar visible and functional
- [ ] Navigation menu opens/closes smoothly
- [ ] Text is readable without zooming (16px minimum)
- [ ] No horizontal scroll
- [ ] Touch targets don't overlap
- [ ] Forms work properly (if any)

---

## PART VI: MAINTENANCE & ITERATION

### Monthly Tasks:
- Review Google Search Console for crawl errors
- Check Core Web Vitals scores
- Update FAQ based on new common questions
- Refresh testimonials/reviews
- Update pricing if changed

### Quarterly Tasks:
- Refresh service descriptions based on customer feedback
- Update process screenshots if workflow changes
- Review competitor sites for new features
- A/B test CTA button text/colors
- Audit broken links

### Annually:
- Complete site redesign review
- Update brand assets if rebranding
- Review and update Master Blueprint document
- Migrate to new tech stack if needed

---

## PART VII: TROUBLESHOOTING

### Common Issues:

**Issue:** Glassmorphism nav looks blurry/weird on Safari  
**Fix:** Ensure `-webkit-backdrop-filter` is present alongside `backdrop-filter`

**Issue:** Accordions not working on older browsers  
**Fix:** The `<details>` element is supported in all modern browsers. For IE11 (if needed), use polyfill or jQuery fallback

**Issue:** Mobile action bar covers content  
**Fix:** Add `padding-bottom: 80px` to `<body>` element

**Issue:** FAQ schema not appearing in Google results  
**Fix:** Validate with [Google Rich Results Test](https://search.google.com/test/rich-results), ensure all required fields present

**Issue:** Page load is slow  
**Fix:** Optimize images with [Squoosh](https://squoosh.app), lazy-load images below fold, minify CSS/JS

---

## APPENDIX A: COMPLETE FILE CHECKLIST

When implementing this handbook, you'll create/update:

### New CSS Files:
- [ ] `/styles/navigation.css` (glassmorphism nav)
- [ ] `/styles/mobile-action-bar.css` (bottom bar)
- [ ] `/styles/service-pages.css` (hero, accordions, pricing)

### New JavaScript Files:
- [ ] `/scripts/navigation.js` (nav interactions)
- [ ] `/scripts/schema-generator.js` (FAQ schema)

### Updated HTML Files:
- [ ] `/services/index.html` (main services gateway)
- [ ] `/services/legal-translation/index.html`
- [ ] `/services/golden-visa-translation/index.html`
- [ ] `/services/certificate-translation/index.html`
- [ ] `/services/corporate-translation/index.html`

### Updated Master Files:
- [ ] `MASTER_STRATEGIC_BLUEPRINT_v7.0.docx` (with UI/UX section)

---

## APPENDIX B: PERFORMANCE BUDGET

To maintain "Digital Concierge" speed standards:

| Metric | Target | Critical |
|--------|--------|----------|
| First Contentful Paint (FCP) | < 1.0s | < 1.8s |
| Largest Contentful Paint (LCP) | < 2.0s | < 2.5s |
| Time to Interactive (TTI) | < 2.5s | < 3.5s |
| Cumulative Layout Shift (CLS) | < 0.05 | < 0.1 |
| First Input Delay (FID) | < 50ms | < 100ms |
| Total Page Size | < 1.5MB | < 2.5MB |
| Total Requests | < 40 | < 60 |

**Monitor with:** Google PageSpeed Insights, WebPageTest, Chrome DevTools Lighthouse

---

## APPENDIX C: CONTACT FOR IMPLEMENTATION SUPPORT

If you encounter issues during implementation, reference:
- **Master Blueprint:** MASTER_STRATEGIC_BLUEPRINT_v6.0.docx
- **This Handbook:** HANDBOOK_UI_UX_Implementation_Digital_Concierge.md
- **Quick Reference:** Implementation checklist from previous outputs

---

**END OF HANDBOOK**

**Version:** 1.0  
**Last Updated:** December 5, 2025  
**Next Review:** January 2026

---

© 2025 OnlineTranslation.ae - Boutique Legal Translation Services
