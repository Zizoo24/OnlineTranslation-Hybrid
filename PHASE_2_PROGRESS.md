# Phase 2 Progress - Missing Pages Creation

**Started:** December 5, 2025  
**Status:** In Progress (1/23 pages complete)

---

## ✅ COMPLETED PAGES

### Hub Pages (4/7)
1. ✅ **/legal-translation-dubai/** - Legal Translation Hub (2,800+ words)
   - Commit: 34ed04e
   - Structure: Hero + 3 service cards + 4-step process + 3 pricing tiers + 5 FAQ
   - Schema: Service markup included
   - Mobile: Action bar with legal-specific CTAs

2. ✅ **/legal/contracts/** - Contracts Hub (2,600+ words)
   - Commit: 9843a7c
   - Structure: Hero + 6 contract cards + 4-step process + 3 pricing tiers + 5 FAQ
   - Schema: Service markup included
   - Mobile: Action bar with contract-specific CTAs

3. ✅ **/legal/corporate/** - Corporate Documents Hub (2,500+ words)
   - Commit: 3af02e3
   - Structure: Hero + 6 document cards + 4-step process + 3 pricing tiers + 5 FAQ
   - Schema: Service markup included
   - Mobile: Action bar with corporate-specific CTAs

4. ⏳ **/legal/litigation/** - Litigation Hub (in progress)

---

## 📋 REMAINING HUB PAGES (6/7)

### Week 2 Priority:
2. ⏳ /legal/contracts/ (2,500 words)
3. ⏳ /legal/corporate/ (2,500 words)
4. ⏳ /legal/litigation/ (2,500 words)
5. ⏳ /personal-documents/ (2,500 words)
6. ⏳ /personal/vital-records/ (2,500 words)
7. ⏳ /personal/immigration/ (2,500 words)

---

## 📝 TEMPLATE STRUCTURE

All hub pages follow this structure (based on legal-translation-dubai):

### 1. Head Section
- Title: [Topic] Translation Dubai – MOJ Certified
- Meta description: 155 characters max
- Keywords: topic-specific
- Canonical URL
- Schema.org Service markup

### 2. Hero Section
```html
<section class="services-hero">
    <div class="hero-badge">[Badge Text]</div>
    <h1 class="hero-title">
        <span class="title-prefix">[Topic] Translation Dubai</span>
        <span class="title-main">[Compelling Headline]</span>
    </h1>
    <p class="hero-subtitle">[Value proposition]</p>
    <div class="hero-cta-group">
        <a href="[WhatsApp]" class="btn-primary">Send Documents</a>
        <a href="#how-it-works" class="btn-secondary">See Process</a>
    </div>
    <div class="trust-bar">
        [3 trust indicators]
    </div>
</section>
```

### 3. Service Cards Section
- 3-6 cards depending on topic
- Each card: icon, title, description, 3 features, CTA
- Links to sub-pages

### 4. How It Works (Accordions)
- 4 steps minimum
- Each accordion: icon, title, detailed content
- Include tips and warnings where relevant

### 5. Pricing Tiers
- 3 tiers: Standard, Express (featured), Custom/Concierge
- Each tier: name, tagline, time, features list, CTA
- Pricing note at bottom

### 6. FAQ (Accordions)
- 5-7 questions minimum
- Each: icon, question, detailed answer
- Cover common objections and concerns

### 7. Mobile Action Bar
- 3 buttons: WhatsApp, Call, Send Docs
- Topic-specific WhatsApp pre-fill text

---

## 🎯 CONTENT GUIDELINES

### Word Count:
- Hub pages: 2,500-3,000 words
- Sub-pages: 2,000-2,500 words
- Count includes all visible text (excluding HTML tags)

### Tone (Brand Codex):
- Understated confidence (not hype)
- Radical transparency (honest about process)
- Human warmth (helpful, not robotic)
- No exclamation points (except CTAs)
- No superlatives (best, leading, etc.)

### Structure:
- H1: One per page (in hero)
- H2: Section headings
- H3: Card titles, accordion titles
- H4: Pricing tier names
- Lists: Use for features, steps, requirements
- Paragraphs: 2-3 sentences max

### CTAs:
- Primary: WhatsApp with pre-filled text
- Secondary: Internal links, phone
- Text: Action-oriented (Send, Get, View, Discuss)

---

## 🔄 NEXT PAGES TO CREATE

### Priority Order:
1. /legal/contracts/ - Contracts hub (links to NDA, SPA, MOU, lease)
2. /legal/corporate/ - Corporate hub (links to MOA, resolution, POA)
3. /legal/litigation/ - Litigation hub (links to verdict, arbitration)
4. /personal-documents/ - Personal hub (overview of all personal docs)
5. /personal/vital-records/ - Vital records hub (birth, marriage, divorce, death)
6. /personal/immigration/ - Immigration hub (PCC, bank, license)

### Content Variations by Topic:

**Contracts Hub:**
- Focus: Business agreements, enforceability
- Service cards: NDA, SPA, MOU, Lease
- Process: Contract review, translation, legal QC, execution
- FAQ: Enforceability, bilingual contracts, amendments

**Corporate Hub:**
- Focus: Company formation, compliance
- Service cards: MOA, AOA, Resolutions, POA
- Process: Document verification, translation, notarization, filing
- FAQ: DED requirements, free zones, shareholder docs

**Litigation Hub:**
- Focus: Court filings, evidence
- Service cards: Judgments, Pleadings, Evidence, Witness statements
- Process: Case file review, translation, exhibit organization, filing
- FAQ: Court acceptance, deadlines, appeal documents

**Personal Documents Hub:**
- Focus: Individual needs, life events
- Service cards: Vital records, Immigration, Academic, Medical
- Process: Document check, translation, attestation, delivery
- FAQ: Attestation, name matching, urgent needs

**Vital Records Hub:**
- Focus: Birth, marriage, divorce, death certificates
- Service cards: Each certificate type
- Process: Certificate verification, translation, MOFA coordination
- FAQ: Embassy requirements, name changes, multiple copies

**Immigration Hub:**
- Focus: Visa applications, residency
- Service cards: PCC, Bank statements, License, Employment
- Process: Portal requirements, translation, submission support
- FAQ: Golden Visa, family sponsorship, renewal

---

## 📊 PROGRESS TRACKING

### Week 2 Goal: 7 hub pages
- Day 1: ✅ Legal translation hub (complete)
- Day 2: ⏳ Contracts + Corporate hubs
- Day 3: ⏳ Litigation + Personal hubs
- Day 4: ⏳ Vital records + Immigration hubs
- Day 5: ⏳ Testing and refinement

### Metrics:
- Pages created: 1/7 (14%)
- Words written: ~2,800
- Accordions: 9 (4 process + 5 FAQ)
- Service cards: 3
- Schema markup: 1 page

---

## 🛠️ TECHNICAL NOTES

### File Structure:
```
/legal-translation-dubai/index.html
/legal/contracts/index.html
/legal/corporate/index.html
/legal/litigation/index.html
/personal-documents/index.html
/personal/vital-records/index.html
/personal/immigration/index.html
```

### CSS/JS Dependencies:
All pages use same stylesheets:
- porto-desktop.css
- sticky-mobile.css
- navigation-glassmorphism.css
- mobile-action-bar.css
- services-enhanced.css
- visibility-fixes.css
- mobile-ios/android/macos.css
- dark-mode.css

Scripts:
- os-detect.js
- navigation.js
- main.js

### Schema Markup:
Each page needs:
- Service schema (in head)
- FAQPage schema (if FAQ present)
- LocalBusiness schema (optional)
- BreadcrumbList schema (optional)

---

## ✅ QUALITY CHECKLIST

Before committing each page:
- [ ] 2,500+ words of content
- [ ] Hero section with badge
- [ ] 3+ service cards
- [ ] 4+ accordion items (process)
- [ ] 3 pricing tiers
- [ ] 5+ FAQ items
- [ ] Schema markup validates
- [ ] Mobile action bar present
- [ ] All links work
- [ ] WhatsApp pre-fill text correct
- [ ] No console errors
- [ ] Responsive on mobile

---

## 📈 EXPECTED TIMELINE

### Realistic:
- Hub pages: 2-3 per day = 3-4 days
- Sub-pages: 3-4 per day = 5-7 days
- Testing: 1-2 days
- **Total:** 9-13 days for all 23 pages

### Optimistic:
- Hub pages: 3-4 per day = 2 days
- Sub-pages: 5-6 per day = 4 days
- Testing: 1 day
- **Total:** 7 days for all 23 pages

### Current Pace:
- 1 hub page in ~2 hours
- Projected: 14 hours for 7 hub pages
- Projected: 30-40 hours for all 23 pages

---

## 🎯 SUCCESS CRITERIA

### Phase 2 Complete When:
- ✅ All 23 pages created
- ✅ All pages 2,000+ words
- ✅ All pages have accordions
- ✅ All pages have Schema markup
- ✅ All pages mobile-optimized
- ✅ All internal links work
- ✅ Sitemap updated
- ✅ All pages indexed by Google

---

**Status:** 1/23 pages complete (4%)  
**Next:** Create contracts hub page  
**Updated:** December 5, 2025

---

© 2025 OnlineTranslation.ae - Phase 2 Implementation
