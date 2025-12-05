# Placeholder Template Usage Guide

## Overview

This guide explains how to use `PLACEHOLDER-TEMPLATE.html` to quickly create 20 minimal placeholder pages for Phase 2-3 content. The template is based on the existing birth certificate page but stripped down to essentials.

---

## Template Features

✅ **Complete HTML structure** (header, footer, navigation)  
✅ **SEO meta tags** (title, description, keywords, Open Graph)  
✅ **Schema markup** (Service, LocalBusiness, BreadcrumbList)  
✅ **Breadcrumb navigation**  
✅ **Hero section** with H1 and intro paragraph  
✅ **"Content Coming Soon" message** with CTA  
✅ **Mobile-responsive** (sticky footer bar, sidebar menu)  
✅ **All existing CSS/JS** (no new dependencies)  

---

## Quick Start: 3-Step Process

### Step 1: Copy the Template
```bash
cp PLACEHOLDER-TEMPLATE.html [destination-path]/index.html
```

### Step 2: Replace Placeholders
Use find-and-replace to customize these tokens:

| Placeholder | Description | Example |
|------------|-------------|---------|
| `[PAGE_TITLE]` | Full page title | `SPA Translation – DLD Compliance for Property Investors` |
| `[META_DESCRIPTION]` | SEO description (150-160 chars) | `Sales Purchase Agreement translation for Dubai Land Department. MOJ-certified, DLD-compliant translations for property transactions.` |
| `[KEYWORDS]` | SEO keywords (comma-separated) | `SPA translation Dubai, sales purchase agreement, DLD translation, property transaction UAE` |
| `[CANONICAL_PATH]` | URL path from root | `/legal/contracts/spa/` |
| `[PATH_TO_ROOT]` | Relative path to root | `../../../` (3 levels deep) or `../../` (2 levels) |
| `[SERVICE_NAME]` | Schema service name | `SPA Translation Dubai` |
| `[SERVICE_DESCRIPTION]` | Schema description | `MOJ-certified Sales Purchase Agreement translation for Dubai Land Department compliance` |
| `[SERVICE_TYPE]` | Schema service type | `Legal Translation, Contract Translation` |
| `[BREADCRUMB_JSON]` | JSON breadcrumb array | See examples below |
| `[BREADCRUMB_HTML]` | HTML breadcrumb links | See examples below |
| `[H1_TITLE]` | Main heading (can use `<br>` and `<span>`) | `SPA Translation in Dubai<br><span class="text-coral">DLD Compliance for Property Investors</span>` |
| `[HERO_INTRO_PARAGRAPH]` | Hero subtitle (150-200 words) | See examples below |

### Step 3: Test the Page
```bash
# Open in browser
open [destination-path]/index.html

# Or use Python server
python3 server.py
```

---

## Detailed Examples

### Example 1: /legal/contracts/spa/

**File location**: `/legal/contracts/spa/index.html`

**Replacements**:
```
[PAGE_TITLE] → SPA Translation – DLD Compliance for Property Investors
[META_DESCRIPTION] → Sales Purchase Agreement translation for Dubai Land Department. MOJ-certified, DLD-compliant translations for property transactions in Dubai and UAE.
[KEYWORDS] → SPA translation Dubai, sales purchase agreement translation, DLD translation, property transaction UAE, real estate contract translation
[CANONICAL_PATH] → /legal/contracts/spa/
[PATH_TO_ROOT] → ../../../
[SERVICE_NAME] → SPA Translation Dubai
[SERVICE_DESCRIPTION] → MOJ-certified Sales Purchase Agreement translation for Dubai Land Department compliance and property transactions
[SERVICE_TYPE] → Legal Translation, Contract Translation, Real Estate Translation
[H1_TITLE] → SPA Translation in Dubai<br><span class="text-coral">DLD Compliance for Property Investors</span>
[HERO_INTRO_PARAGRAPH] → Sales Purchase Agreements in Dubai require precise legal translation for Dubai Land Department (DLD) registration. Our MOJ-certified translators ensure your property transaction documents meet DLD compliance standards, preventing delays in property transfer and registration. We handle SPAs for off-plan purchases, secondary market transactions, and developer contracts across Dubai, Abu Dhabi, and the UAE.
```

**Breadcrumb JSON**:
```json
[
    {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://onlinetranslation.ae/"
    },
    {
        "@type": "ListItem",
        "position": 2,
        "name": "Legal Documents",
        "item": "https://onlinetranslation.ae/legal/"
    },
    {
        "@type": "ListItem",
        "position": 3,
        "name": "Contracts",
        "item": "https://onlinetranslation.ae/legal/contracts/"
    },
    {
        "@type": "ListItem",
        "position": 4,
        "name": "SPA Translation",
        "item": "https://onlinetranslation.ae/legal/contracts/spa/"
    }
]
```

**Breadcrumb HTML**:
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

### Example 2: /personal/vital-records/divorce/

**File location**: `/personal/vital-records/divorce/index.html`

**Replacements**:
```
[PAGE_TITLE] → Divorce Certificate Translation – Legal Implications for Custody
[META_DESCRIPTION] → Divorce certificate translation in Dubai for custody arrangements, visa status changes, and family court proceedings. MOJ-certified translations accepted by UAE courts.
[KEYWORDS] → divorce certificate translation Dubai, divorce decree translation UAE, custody document translation, family court translation Dubai
[CANONICAL_PATH] → /personal/vital-records/divorce/
[PATH_TO_ROOT] → ../../../
[SERVICE_NAME] → Divorce Certificate Translation Dubai
[SERVICE_DESCRIPTION] → MOJ-certified divorce certificate translation for custody arrangements, visa status changes, and UAE family court proceedings
[SERVICE_TYPE] → Legal Translation, Document Translation, Vital Records Translation
[H1_TITLE] → Divorce Certificate Translation in Dubai<br><span class="text-coral">Legal Implications for Custody</span>
[HERO_INTRO_PARAGRAPH] → Divorce certificates require careful translation for UAE family court proceedings, custody arrangements, and visa status changes. Our MOJ-certified translators understand the legal implications of divorce documentation in the UAE, ensuring accurate translation of custody terms, alimony provisions, and property settlements. We handle divorce decrees from all countries for GDRFA, ICP, and family court submissions.
```

**Breadcrumb JSON**:
```json
[
    {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://onlinetranslation.ae/"
    },
    {
        "@type": "ListItem",
        "position": 2,
        "name": "Personal Documents",
        "item": "https://onlinetranslation.ae/personal/"
    },
    {
        "@type": "ListItem",
        "position": 3,
        "name": "Vital Records",
        "item": "https://onlinetranslation.ae/personal/vital-records/"
    },
    {
        "@type": "ListItem",
        "position": 4,
        "name": "Divorce Certificate Translation",
        "item": "https://onlinetranslation.ae/personal/vital-records/divorce/"
    }
]
```

**Breadcrumb HTML**:
```html
<a href="../../../index.html">Home</a>
<i class="fas fa-chevron-right"></i>
<a href="../../">Personal Documents</a>
<i class="fas fa-chevron-right"></i>
<a href="../">Vital Records</a>
<i class="fas fa-chevron-right"></i>
<span>Divorce Certificate Translation</span>
```

---

### Example 3: /specialized/technical/

**File location**: `/specialized/technical/index.html`

**Replacements**:
```
[PAGE_TITLE] → Technical Manual Translation – Engineering & Safety Specs (ISO)
[META_DESCRIPTION] → Technical manual translation for engineering documentation, safety specifications, and ISO compliance. Specialized translators for industrial, manufacturing, and construction sectors.
[KEYWORDS] → technical manual translation Dubai, engineering document translation, ISO translation UAE, safety specification translation, industrial translation Dubai
[CANONICAL_PATH] → /specialized/technical/
[PATH_TO_ROOT] → ../../
[SERVICE_NAME] → Technical Manual Translation Dubai
[SERVICE_DESCRIPTION] → Specialized technical manual translation for engineering documentation, safety specifications, and ISO compliance in UAE
[SERVICE_TYPE] → Technical Translation, Engineering Translation, Industrial Translation
[H1_TITLE] → Technical Manual Translation in Dubai<br><span class="text-coral">Engineering & Safety Specs (ISO)</span>
[HERO_INTRO_PARAGRAPH] → Technical manuals require specialized translators with engineering knowledge and industry-specific terminology. Our technical translation team handles user manuals, safety specifications, maintenance guides, and ISO documentation for manufacturing, construction, and industrial sectors. We ensure compliance with UAE safety standards and international ISO requirements for technical documentation.
```

**Breadcrumb JSON**:
```json
[
    {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://onlinetranslation.ae/"
    },
    {
        "@type": "ListItem",
        "position": 2,
        "name": "Specialized Services",
        "item": "https://onlinetranslation.ae/specialized/"
    },
    {
        "@type": "ListItem",
        "position": 3,
        "name": "Technical Manual Translation",
        "item": "https://onlinetranslation.ae/specialized/technical/"
    }
]
```

**Breadcrumb HTML**:
```html
<a href="../../index.html">Home</a>
<i class="fas fa-chevron-right"></i>
<a href="../">Specialized Services</a>
<i class="fas fa-chevron-right"></i>
<span>Technical Manual Translation</span>
```

---

## Path Depth Reference

| Page Depth | Example Path | `[PATH_TO_ROOT]` |
|-----------|--------------|------------------|
| Root | `/index.html` | `./` |
| 1 level | `/services/index.html` | `../` |
| 2 levels | `/services/legal-translation/index.html` | `../../` |
| 3 levels | `/legal/contracts/spa/index.html` | `../../../` |
| 4 levels | `/personal/vital-records/birth/index.html` | `../../../../` |

---

## All 20 Pages to Create

### Phase 2: Hub Pages (4 pages)

1. **`/personal/index.html`**
   - Title: Personal Document Translation in Dubai – The Expat's Guide to UAE Life
   - Path depth: 1 level (`../`)

2. **`/legal/contracts/index.html`**
   - Title: Contract Translation in Dubai – Risk Mitigation for Legal Texts
   - Path depth: 2 levels (`../../`)

3. **`/legal/corporate/index.html`**
   - Title: Corporate Governance Translation – Business Setup in UAE
   - Path depth: 2 levels (`../../`)

4. **`/specialized/index.html`**
   - Title: Specialized Translation Services – Technical Accuracy Over Speed
   - Path depth: 1 level (`../`)

### Phase 3: Cluster Pages (16 pages)

#### Court Documents (3 pages)
5. **`/legal/court/index.html`**
6. **`/legal/court/verdicts/index.html`**
7. **`/legal/court/arbitration/index.html`**

#### Contracts (3 pages)
8. **`/legal/contracts/spa/index.html`**
9. **`/legal/contracts/mou/index.html`**
10. **`/legal/contracts/lease/index.html`**

#### Vital Records (4 pages)
11. **`/personal/vital-records/index.html`**
12. **`/personal/immigration/index.html`**
13. **`/personal/vital-records/divorce/index.html`**
14. **`/personal/vital-records/death/index.html`**

#### Academic (2 pages)
15. **`/personal/academic/index.html`**
16. **`/personal/academic/transcripts/index.html`**

#### Specialized (3 pages)
17. **`/specialized/technical/index.html`**
18. **`/specialized/hospitality/index.html`**
19. **`/specialized/digital/index.html`**

#### Location (1 page)
20. **`/locations/dubai/marina/index.html`**

---

## Automation Script (Optional)

Create a bash script to generate all pages quickly:

```bash
#!/bin/bash
# generate-placeholders.sh

# Function to create page from template
create_page() {
    local dest_path=$1
    local page_title=$2
    local meta_desc=$3
    local keywords=$4
    local canonical=$5
    local path_to_root=$6
    local service_name=$7
    local service_desc=$8
    local service_type=$9
    local h1_title=${10}
    local hero_intro=${11}
    local breadcrumb_json=${12}
    local breadcrumb_html=${13}
    
    # Create directory if it doesn't exist
    mkdir -p "$(dirname "$dest_path")"
    
    # Copy template
    cp PLACEHOLDER-TEMPLATE.html "$dest_path"
    
    # Replace placeholders (macOS uses sed -i '', Linux uses sed -i)
    sed -i '' "s|\[PAGE_TITLE\]|$page_title|g" "$dest_path"
    sed -i '' "s|\[META_DESCRIPTION\]|$meta_desc|g" "$dest_path"
    sed -i '' "s|\[KEYWORDS\]|$keywords|g" "$dest_path"
    sed -i '' "s|\[CANONICAL_PATH\]|$canonical|g" "$dest_path"
    sed -i '' "s|\[PATH_TO_ROOT\]|$path_to_root|g" "$dest_path"
    sed -i '' "s|\[SERVICE_NAME\]|$service_name|g" "$dest_path"
    sed -i '' "s|\[SERVICE_DESCRIPTION\]|$service_desc|g" "$dest_path"
    sed -i '' "s|\[SERVICE_TYPE\]|$service_type|g" "$dest_path"
    sed -i '' "s|\[H1_TITLE\]|$h1_title|g" "$dest_path"
    sed -i '' "s|\[HERO_INTRO_PARAGRAPH\]|$hero_intro|g" "$dest_path"
    sed -i '' "s|\[BREADCRUMB_JSON\]|$breadcrumb_json|g" "$dest_path"
    sed -i '' "s|\[BREADCRUMB_HTML\]|$breadcrumb_html|g" "$dest_path"
    
    echo "✅ Created: $dest_path"
}

# Example: Create SPA page
create_page \
    "legal/contracts/spa/index.html" \
    "SPA Translation – DLD Compliance for Property Investors" \
    "Sales Purchase Agreement translation for Dubai Land Department. MOJ-certified, DLD-compliant translations." \
    "SPA translation Dubai, sales purchase agreement, DLD translation" \
    "/legal/contracts/spa/" \
    "../../../" \
    "SPA Translation Dubai" \
    "MOJ-certified Sales Purchase Agreement translation for DLD compliance" \
    "Legal Translation, Contract Translation" \
    "SPA Translation in Dubai<br><span class=\"text-coral\">DLD Compliance</span>" \
    "Sales Purchase Agreements require precise legal translation for DLD registration..." \
    '[{"@type":"ListItem","position":1,"name":"Home","item":"https://onlinetranslation.ae/"}]' \
    '<a href="../../../index.html">Home</a><i class="fas fa-chevron-right"></i><span>SPA</span>'

# Add more create_page calls for other pages...
```

---

## Content Writing Tips

### Hero Intro Paragraph (150-200 words)
- Start with the document type and its purpose
- Mention specific UAE authorities (DLD, GDRFA, ICP, MOFA, etc.)
- Highlight compliance requirements
- End with service coverage (Dubai, Abu Dhabi, UAE)

**Template**:
```
[Document type] in Dubai require [specific requirement] for [authority/purpose]. 
Our MOJ-certified translators ensure your [document type] meet [compliance standard], 
preventing [common problem]. We handle [specific use cases] across Dubai, Abu Dhabi, 
and the UAE.
```

### Keywords Strategy
- Primary keyword: `[document type] translation Dubai`
- Secondary: `[document type] translation UAE`
- Authority-specific: `[authority name] [document type]`
- Use case: `[specific use case] UAE`
- 5-8 keywords total

### Service Type (Schema)
Choose 2-3 from:
- Legal Translation
- Document Translation
- Contract Translation
- Certificate Translation
- Corporate Translation
- Technical Translation
- Vital Records Translation
- Immigration Translation
- Academic Translation

---

## Quality Checklist

Before committing each page, verify:

- [ ] All `[PLACEHOLDER]` tokens replaced
- [ ] Breadcrumb JSON is valid (no syntax errors)
- [ ] Breadcrumb HTML matches page hierarchy
- [ ] `[PATH_TO_ROOT]` matches directory depth
- [ ] Canonical URL starts with `/` and ends with `/`
- [ ] Meta description is 150-160 characters
- [ ] H1 uses `<br>` and `<span class="text-coral">` for styling
- [ ] Hero intro is 150-200 words
- [ ] All links work (test in browser)
- [ ] Page loads without console errors
- [ ] Mobile responsive (test footer bar)

---

## Next Steps After Creating Pages

### 1. Update Sitemap
Add new URLs to `sitemap.xml`:
```xml
<url>
    <loc>https://onlinetranslation.ae/legal/contracts/spa/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
</url>
```

### 2. Update Search Index
Add entries to `scripts/search-index.js`:
```javascript
{
    title: "SPA Translation",
    url: "/legal/contracts/spa/",
    category: "Legal Documents",
    keywords: ["SPA", "sales purchase agreement", "DLD", "property"]
}
```

### 3. Update Navigation
Add dropdown items to header navigation (if needed).

### 4. Git Commit
```bash
git add .
git commit -m "Add 20 placeholder pages for Phase 2-3"
git push origin main
```

---

## Troubleshooting

### Issue: Broken CSS/JS
**Solution**: Check `[PATH_TO_ROOT]` matches directory depth.

### Issue: Breadcrumb JSON error
**Solution**: Validate JSON at jsonlint.com before inserting.

### Issue: Links don't work
**Solution**: Ensure all relative paths use correct `../` depth.

### Issue: Schema validation fails
**Solution**: Test at schema.org/validator after deployment.

---

## Time Estimate

- **Per page (manual)**: 5-10 minutes
- **20 pages total**: 2-3 hours
- **With automation script**: 30-60 minutes

---

## Support

For questions or issues:
- Review existing pages: `/personal/vital-records/birth/index.html`
- Check PHASE-2-3-PLAN.md for content requirements
- Test locally before committing: `python3 server.py`

---

**Last Updated**: 2024-01-15  
**Template Version**: 1.0  
**Compatible with**: OnlineTranslation.ae static site (Vercel deployment)
