# HTML Assembly Guide
## Converting Content Sections to Full HTML Pages

**Purpose**: Quick reference for assembling modular content into complete HTML pages
**Base Template**: Use `/personal/vital-records/birth/index.html` as structure reference

---

## ASSEMBLY CHECKLIST

### Pre-Assembly
- [ ] Content sections written and reviewed
- [ ] Word count verified (1,800-2,200 words)
- [ ] Voice compliance checked (no hype, no exclamation points)
- [ ] FAQ questions finalized (6-8 questions)
- [ ] Schema data prepared

### HTML Structure
- [ ] Copy base template HTML structure
- [ ] Update `<title>` tag
- [ ] Update meta description (150-160 chars)
- [ ] Update meta keywords
- [ ] Update canonical URL
- [ ] Update Open Graph tags
- [ ] Update breadcrumb schema
- [ ] Update service schema
- [ ] Update FAQ schema

### Content Insertion
- [ ] Replace H1 title
- [ ] Insert hero subtitle
- [ ] Insert service snapshot items
- [ ] Insert "Why Different" section
- [ ] Insert accordion sections (3-4)
- [ ] Insert service tiers
- [ ] Insert FAQ section
- [ ] Insert locations section
- [ ] Insert final CTA

### Navigation
- [ ] Update breadcrumb HTML
- [ ] Verify relative paths (../ depth)
- [ ] Update sidebar menu active state
- [ ] Test all internal links

### Validation
- [ ] Test page loads without errors
- [ ] Validate schema markup
- [ ] Test accordion functionality
- [ ] Verify mobile responsiveness
- [ ] Check WhatsApp/email links work
- [ ] Test search functionality

---

## SECTION-BY-SECTION MAPPING

### 1. HEAD SECTION

**Location**: Lines 1-120 in base template

**Replace These**:
```html
<title>[PAGE_TITLE] | OnlineTranslation.ae</title>
<meta name="description" content="[META_DESCRIPTION]">
<meta name="keywords" content="[KEYWORDS]">
<link rel="canonical" href="https://onlinetranslation.ae[CANONICAL_PATH]">
```

**Update Paths**:
```html
<!-- For /personal/ (1 level deep) -->
<link rel="stylesheet" href="../styles/porto-desktop.css">

<!-- For /legal/contracts/ (2 levels deep) -->
<link rel="stylesheet" href="../../styles/porto-desktop.css">

<!-- For /legal/contracts/spa/ (3 levels deep) -->
<link rel="stylesheet" href="../../../styles/porto-desktop.css">
```

---

### 2. SCHEMA MARKUP

**Location**: Lines 35-115 in base template

**Service Schema Template**:
```json
{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "[SERVICE_NAME]",
    "description": "[SERVICE_DESCRIPTION]",
    "provider": {
        "@type": "LocalBusiness",
        "name": "OnlineTranslation.ae",
        "image": "https://onlinetranslation.ae/images/logo/brand/emblem-256.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Palm Jumeirah",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
        },
        "telephone": "+971508620217",
        "email": "info@onlinetranslation.ae",
        "openingHours": "Mo-Su 08:00-22:00",
        "priceRange": "$$"
    },
    "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
    "serviceType": ["[SERVICE_TYPE_1]", "[SERVICE_TYPE_2]", "[SERVICE_TYPE_3]"]
}
```

**BreadcrumbList Schema Template**:
```json
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://onlinetranslation.ae/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "[PARENT_NAME]",
            "item": "https://onlinetranslation.ae[PARENT_PATH]"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "[PAGE_NAME]",
            "item": "https://onlinetranslation.ae[PAGE_PATH]"
        }
    ]
}
```

**FAQPage Schema Template**:
```json
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "[QUESTION_1]",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "[ANSWER_1]"
            }
        }
        // Repeat for all FAQ questions
    ]
}
```

---

### 3. HERO SECTION

**Location**: Lines 650-720 in base template

**Structure**:
```html
<section class="exodus-inner-hero">
    <div class="container">
        <nav class="exodus-breadcrumb" aria-label="Breadcrumb">
            <a href="[PATH_TO_ROOT]index.html">Home</a>
            <i class="fas fa-chevron-right"></i>
            <a href="[PARENT_PATH]">[PARENT_NAME]</a>
            <i class="fas fa-chevron-right"></i>
            <span>[PAGE_NAME]</span>
        </nav>

        <h1>
            [MAIN_TITLE]<br>
            <span class="text-coral">[SUBTITLE_ACCENT]</span>
        </h1>

        <p class="hero-subtitle">
            [HERO_SUBTITLE_PARAGRAPH]
        </p>

        <div class="service-snapshot">
            <div class="snapshot-item">
                <i class="fas fa-[ICON_1]"></i>
                <span><strong>[FEATURE_1_TITLE]</strong> [FEATURE_1_DESC]</span>
            </div>
            <!-- Repeat for 4 items -->
        </div>

        <div class="hero-actions">
            <a href="https://wa.me/971508620217" class="hero-btn hero-btn--primary">
                <i class="fab fa-whatsapp"></i> [CTA_TEXT]
            </a>
            <a href="mailto:info@onlinetranslation.ae" class="hero-btn hero-btn--ghost">
                <i class="fas fa-envelope"></i> Email your documents
            </a>
            <p class="hero-meta">
                Typical response time: <strong>15–30 minutes</strong> during working hours.
            </p>
        </div>
    </div>
</section>
```

---

### 4. HIGHLIGHTS SECTION (Why Different)

**Location**: Lines 720-800 in base template

**Structure**:
```html
<section class="exodus-highlights">
    <div class="container">
        <div class="section-header">
            <span class="section-label">[SECTION_LABEL]</span>
            <h2>[SECTION_TITLE]</h2>
        </div>

        <div class="highlights-grid">
            <div class="highlight-card">
                <div class="icon"><i class="fas fa-[ICON]"></i></div>
                <h4>[CARD_TITLE]</h4>
                <p>[CARD_CONTENT]</p>
            </div>
            <!-- Repeat for 3-4 cards -->
        </div>

        <!-- OR use prose format -->
        <div class="content-prose">
            [WHY_DIFFERENT_CONTENT]
        </div>
    </div>
</section>
```

---

### 5. ACCORDION SECTION

**Location**: Lines 800-1000 in base template

**Native HTML Structure** (Recommended):
```html
<section class="content-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">[SECTION_LABEL]</span>
            <h2>[SECTION_TITLE]</h2>
        </div>

        <div class="accordion-container">
            <details class="accordion-item">
                <summary class="accordion-header">
                    <span>[ACCORDION_TITLE_1]</span>
                    <i class="fas fa-chevron-down"></i>
                </summary>
                <div class="accordion-content">
                    [ACCORDION_CONTENT_1]
                </div>
            </details>

            <details class="accordion-item">
                <summary class="accordion-header">
                    <span>[ACCORDION_TITLE_2]</span>
                    <i class="fas fa-chevron-down"></i>
                </summary>
                <div class="accordion-content">
                    [ACCORDION_CONTENT_2]
                </div>
            </details>

            <!-- Repeat for 3-4 accordions -->
        </div>
    </div>
</section>
```

**JavaScript-Based Structure** (Alternative):
```html
<div class="accordion-item">
    <div class="accordion-header">
        <span>[ACCORDION_TITLE]</span>
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="accordion-content">
        [ACCORDION_CONTENT]
    </div>
</div>
```

---

### 6. SERVICE TIERS SECTION

**Location**: Lines 1000-1100 in base template

**Structure**:
```html
<section class="content-section bg-light">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Service Options</span>
            <h2>Three Service Tiers for Different Timelines</h2>
        </div>

        <div class="pricing-tiers">
            <div class="pricing-tier">
                <h3>Standard Service</h3>
                <div class="timeline">24 Hours</div>
                <p>[STANDARD_DESCRIPTION]</p>
                <ul>
                    <li>Digital draft within 24 hours</li>
                    <li>Physical copy within 48 hours</li>
                    <li>MOJ-certified translation</li>
                    <li>Courier delivery included</li>
                </ul>
            </div>

            <div class="pricing-tier featured">
                <h3>Express Service</h3>
                <div class="timeline">6 Hours</div>
                <p>[EXPRESS_DESCRIPTION]</p>
                <ul>
                    <li>Digital draft within 6 hours</li>
                    <li>Physical copy within 12 hours</li>
                    <li>Priority handling</li>
                    <li>Expedited courier delivery</li>
                </ul>
            </div>

            <div class="pricing-tier">
                <h3>VIP Concierge</h3>
                <div class="timeline">1 Hour</div>
                <p>[VIP_DESCRIPTION]</p>
                <ul>
                    <li>Digital draft within 1 hour</li>
                    <li>Immediate assignment</li>
                    <li>Direct consultant access</li>
                    <li>Hand delivery available</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

---

### 7. FAQ SECTION

**Location**: Lines 1100-1300 in base template

**Structure**:
```html
<section class="faq-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Common Questions</span>
            <h2>[DOCUMENT_TYPE] Translation FAQ</h2>
        </div>

        <div class="faq-grid">
            <details class="faq-item">
                <summary class="faq-question">
                    <span>[QUESTION_1]</span>
                    <i class="fas fa-plus"></i>
                </summary>
                <div class="faq-answer">
                    <p>[ANSWER_1]</p>
                </div>
            </details>

            <!-- Repeat for 6-8 questions -->
        </div>
    </div>
</section>
```

---

### 8. LOCATIONS SECTION

**Location**: Lines 1300-1400 in base template

**Structure**:
```html
<section class="content-section">
    <div class="container">
        <div class="section-header">
            <span class="section-label">Service Areas</span>
            <h2>[DOCUMENT_TYPE] Translation Across the UAE</h2>
        </div>

        <div class="content-prose">
            <p>[LOCATIONS_INTRO]</p>

            <h3>Dubai Coverage</h3>
            <p>[DUBAI_COVERAGE]</p>

            <h3>Abu Dhabi and Other Emirates</h3>
            <p>[OTHER_EMIRATES_COVERAGE]</p>

            <h3>Remote Consultation</h3>
            <p>[REMOTE_PROCESS]</p>
        </div>
    </div>
</section>
```

---

### 9. FINAL CTA SECTION

**Location**: Lines 1400-1500 in base template

**Structure**:
```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Start Your [DOCUMENT_TYPE] Translation Today</h2>
            <p>[CTA_PARAGRAPH]</p>

            <div class="cta-contact">
                <p><strong>Contact us today:</strong></p>
                <ul>
                    <li>WhatsApp: <a href="https://wa.me/971508620217">+971 50 862 0217</a></li>
                    <li>Email: <a href="mailto:info@onlinetranslation.ae">info@onlinetranslation.ae</a></li>
                    <li>Response time: 15-30 minutes during business hours (8 AM - 10 PM, 7 days)</li>
                </ul>
            </div>

            <div class="cta-actions">
                <a href="https://wa.me/971508620217" class="btn btn-primary">
                    <i class="fab fa-whatsapp"></i> Start on WhatsApp
                </a>
                <a href="mailto:info@onlinetranslation.ae" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Email Documents
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## PATH DEPTH REFERENCE

| Page Location | Depth | Path to Root | Example |
|--------------|-------|--------------|---------|
| /personal/ | 1 level | `../` | `<link href="../styles/porto-desktop.css">` |
| /legal/contracts/ | 2 levels | `../../` | `<link href="../../styles/porto-desktop.css">` |
| /legal/contracts/spa/ | 3 levels | `../../../` | `<link href="../../../styles/porto-desktop.css">` |
| /personal/vital-records/birth/ | 3 levels | `../../../` | `<link href="../../../styles/porto-desktop.css">` |

---

## BREADCRUMB EXAMPLES

### Hub Page (1 level):
```html
<a href="../index.html">Home</a>
<i class="fas fa-chevron-right"></i>
<span>Personal Documents</span>
```

### Cluster Page (2 levels):
```html
<a href="../../index.html">Home</a>
<i class="fas fa-chevron-right"></i>
<a href="../">Legal Documents</a>
<i class="fas fa-chevron-right"></i>
<span>Contracts</span>
```

### Detail Page (3 levels):
```html
<a href="../../../index.html">Home</a>
<i class="fas fa-chevron-right"></i>
<a href="../../">Legal Documents</a>
<i class="fas fa-chevron-right"></i>
<a href="../">Contracts</a>
<i class="fas fa-chevron-right"></i>
<span>SPA Translation</span>
```

---

## QUICK ASSEMBLY WORKFLOW

### Step 1: Prepare Content File
Create `[PAGE-NAME]-CONTENT.md` with all sections written

### Step 2: Copy Base Template
```bash
cp personal/vital-records/birth/index.html [destination]/index.html
```

### Step 3: Find & Replace
Use editor's find/replace for:
- Page title
- Meta description
- Canonical URL
- Path to root (../)
- Breadcrumb links
- Schema data

### Step 4: Insert Content
Copy/paste from content file:
- Hero subtitle
- Why Different section
- Accordion content (3-4 sections)
- FAQ questions/answers
- Locations content
- CTA paragraph

### Step 5: Validate
- Open in browser
- Test all links
- Test accordions
- Validate schema
- Check mobile view

### Step 6: Commit
```bash
git add [destination]/index.html
git commit -m "Add [page name] with [word count] words"
git push origin main
```

---

## COMMON ISSUES & FIXES

### Issue: Broken CSS/JS
**Cause**: Incorrect path depth
**Fix**: Count directory levels and adjust `../` accordingly

### Issue: Accordion not working
**Cause**: Missing JavaScript or incorrect class names
**Fix**: Ensure `<details>` elements have correct structure or JS is loaded

### Issue: Schema validation fails
**Cause**: Invalid JSON syntax
**Fix**: Validate JSON at jsonlint.com before inserting

### Issue: Breadcrumb links broken
**Cause**: Incorrect relative paths
**Fix**: Test each link in browser, adjust `../` depth

---

## EFFICIENCY TIPS

1. **Use text editor with multi-cursor**: Replace all instances of placeholders simultaneously
2. **Keep content file open**: Copy/paste sections without switching windows
3. **Validate as you go**: Test page after each major section insertion
4. **Reuse schema blocks**: Copy schema from similar pages and adjust values
5. **Batch similar pages**: Assemble all hub pages together, then all cluster pages

---

**STATUS**: Assembly guide complete and ready for use
**NEXT STEP**: Generate remaining hub page content, then begin HTML assembly
