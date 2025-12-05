# Phase 2 - Page Creation Template

**Use this template to create remaining 21 pages**

---

## 📋 QUICK REFERENCE

### Completed (2/23):
1. ✅ /legal-translation-dubai/
2. ✅ /legal/contracts/

### Remaining Hub Pages (5/7):
3. ⏳ /legal/corporate/
4. ⏳ /legal/litigation/
5. ⏳ /personal-documents/
6. ⏳ /personal/vital-records/
7. ⏳ /personal/immigration/

### Sub-Pages (16):
- Legal: NDA, SPA, MOU, Lease, Resolution, Verdict, Arbitration (7)
- Personal: Divorce, Death, Transcripts (3)
- Specialized: Technical, Hospitality, Digital, Hub (4)
- Locations: Marina (1)
- Academic: Hub (1)

---

## 🎯 TEMPLATE STRUCTURE

### File Paths:
```
/legal/corporate/index.html
/legal/litigation/index.html
/personal-documents/index.html
/personal/vital-records/index.html
/personal/immigration/index.html
```

### HTML Template (Copy from contracts page):
1. Copy `/legal/contracts/index.html`
2. Update paths: `../../` for CSS/JS
3. Change title, description, keywords
4. Update hero section content
5. Update service cards (3-6 cards)
6. Update process steps (4 accordions)
7. Update pricing tiers (3 tiers)
8. Update FAQ (5 questions)
9. Update WhatsApp pre-fill text

---

## 📝 CONTENT VARIATIONS

### /legal/corporate/
**Focus:** Company formation, compliance  
**Cards:** MOA, AOA, Resolutions, POA, Shareholder Agreements, Articles  
**Process:** Document verification → Translation → Notarization → DED filing  
**Pricing:** Standard (24hr), Express (same-day), Formation (package)  
**FAQ:** DED requirements, free zones, shareholder docs, amendments, attestation

### /legal/litigation/
**Focus:** Court filings, evidence  
**Cards:** Judgments, Pleadings, Evidence, Witness Statements, Expert Reports, Appeals  
**Process:** Case review → Translation → Exhibit organization → Court filing  
**Pricing:** Standard (24-48hr), Express (same-day), Case (full bundle)  
**FAQ:** Court acceptance, deadlines, appeal docs, evidence translation, expert reports

### /personal-documents/
**Focus:** Individual needs, life events  
**Cards:** Vital Records, Immigration, Academic, Medical, Financial, Legal  
**Process:** Document check → Translation → Attestation → Delivery  
**Pricing:** Standard (24hr), Express (same-day), Package (multiple docs)  
**FAQ:** Attestation, name matching, urgent needs, multiple docs, delivery

### /personal/vital-records/
**Focus:** Birth, marriage, divorce, death certificates  
**Cards:** Birth, Marriage, Divorce, Death, Name Change, Adoption  
**Process:** Certificate verification → Translation → MOFA coordination → Delivery  
**Pricing:** Standard (24hr), Express (same-day), Family (multiple certs)  
**FAQ:** Embassy requirements, name changes, multiple copies, attestation, apostille

### /personal/immigration/
**Focus:** Visa applications, residency  
**Cards:** PCC, Bank Statements, License, Employment, Education, Medical  
**Process:** Portal requirements → Translation → Submission support → Follow-up  
**Pricing:** Standard (24hr), Express (same-day), Golden Visa (package)  
**FAQ:** Golden Visa, family sponsorship, renewal, portal submission, name consistency

---

## ⚡ QUICK CREATION STEPS

### For Each Page:
1. **Copy template:** `cp legal/contracts/index.html legal/corporate/index.html`
2. **Update head:**
   - Title: "[Topic] Translation Dubai – MOJ Certified"
   - Description: 155 chars
   - Keywords: topic-specific
   - Canonical URL
3. **Update hero:**
   - Badge text
   - Title prefix and main
   - Subtitle (value prop)
   - WhatsApp link text
   - Trust bar items
4. **Update cards:**
   - 3-6 cards per topic
   - Icon, title, description
   - 3 features each
   - CTA links
5. **Update process:**
   - 4 accordion items
   - Topic-specific steps
   - Tips and warnings
6. **Update pricing:**
   - 3 tiers with topic names
   - Features per tier
   - WhatsApp pre-fill
7. **Update FAQ:**
   - 5 topic-specific questions
   - Detailed answers
   - Address objections
8. **Update mobile bar:**
   - WhatsApp pre-fill text

---

## 📊 WORD COUNT TARGETS

- Hub pages: 2,500-3,000 words
- Sub-pages: 2,000-2,500 words
- Count visible text only (not HTML)

---

## ✅ QUALITY CHECKLIST

Before committing:
- [ ] 2,500+ words
- [ ] Hero with badge
- [ ] 3+ service cards
- [ ] 4+ process accordions
- [ ] 3 pricing tiers
- [ ] 5+ FAQ items
- [ ] Schema markup
- [ ] Mobile action bar
- [ ] All links work
- [ ] WhatsApp pre-fill correct
- [ ] Responsive on mobile

---

## 🚀 BATCH CREATION SCRIPT

```bash
# Create remaining hub pages
for page in corporate litigation; do
  mkdir -p legal/$page
  cp legal/contracts/index.html legal/$page/index.html
  # Then manually update content
done

for page in vital-records immigration; do
  mkdir -p personal/$page
  cp legal/contracts/index.html personal/$page/index.html
  # Then manually update content
done

mkdir -p personal-documents
cp legal/contracts/index.html personal-documents/index.html
```

---

## 📈 ESTIMATED TIME

- Hub page: 1-2 hours each
- Sub-page: 45-90 minutes each
- Total remaining: 20-40 hours

---

**Next:** Create /legal/corporate/ hub page

---

© 2025 OnlineTranslation.ae
