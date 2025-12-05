# Redirect Mapping Guide - How to Get Accurate WordPress URLs

## Problem

We need to know which WordPress URLs actually exist on your live site to create accurate 301 redirects.

---

## Solution: Extract URLs from Google Search Console

### Step 1: Export Your Current URLs from GSC

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select property: `onlinetranslation.ae`
3. Navigate to: **Performance** (left sidebar)
4. Click the **Pages** tab (top of report)
5. Click **Export** button (top right)
6. Download as **CSV** or **Google Sheets**

**This gives you:** All pages Google has indexed from your WordPress site

---

### Step 2: Review the URL List

Open the exported file. You'll see URLs like:
```
https://onlinetranslation.ae/
https://onlinetranslation.ae/about/
https://onlinetranslation.ae/services/
https://onlinetranslation.ae/contact/
https://onlinetranslation.ae/legal-translation-dubai/
```

**Filter for:**
- Pages with traffic (Clicks > 0)
- Pages with impressions (Impressions > 10)
- Ignore: `/wp-admin/`, `/wp-content/`, `?p=123` (WordPress internals)

---

### Step 3: Map WordPress URLs to New Static URLs

Create a mapping spreadsheet:

| Old WordPress URL | New Static URL | Priority |
|------------------|----------------|----------|
| `/about/` | `/` | High |
| `/services/` | `/services/` | High |
| `/contact/` | `/contact.html` | High |
| `/legal-translation-dubai/` | `/services/legal-translation/` | High |

**Priority levels:**
- **High:** Pages with clicks in last 90 days
- **Medium:** Pages with impressions but no clicks
- **Low:** Old pages with no traffic

---

### Step 4: Alternative - Check WordPress Sitemap

If you have a WordPress sitemap plugin (Yoast, RankMath, etc.):

1. Visit: `https://onlinetranslation.ae/sitemap.xml`
2. Or: `https://onlinetranslation.ae/sitemap_index.xml`
3. Copy all URLs listed

This shows all pages WordPress thinks should be indexed.

---

### Step 5: Alternative - Crawl Your Live Site

Use a free tool to crawl your WordPress site:

**Option A: Screaming Frog (Free up to 500 URLs)**
1. Download: [screamingfrog.co.uk](https://www.screamingfrog.co.uk/seo-spider/)
2. Enter: `https://onlinetranslation.ae`
3. Click **Start**
4. Export: **Internal HTML** URLs
5. Filter for 200 status codes

**Option B: Online Tool**
- [xml-sitemaps.com](https://www.xml-sitemaps.com/) - Free sitemap generator
- Enter your domain
- It will crawl and show all pages

---

## What to Do With the URL List

### Option 1: Send Me the List

Export your WordPress URLs and share them. I can:
1. Review the list
2. Map to new static URLs
3. Generate the `vercel.json` redirects

**How to share:**
- Paste URLs here in chat
- Or: Upload CSV/spreadsheet
- Or: Share Google Sheet link

### Option 2: Create Redirects Yourself

Use this template in `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-wordpress-slug",
      "destination": "/new-static-path/",
      "permanent": true
    }
  ]
}
```

**Rules:**
- Remove domain from `source` (use `/path` not `https://domain.com/path`)
- Include trailing slashes consistently
- Use exact WordPress slug (check case sensitivity)

---

## Common WordPress URL Patterns

### WordPress Default Patterns

**Posts:**
```
/2024/01/post-title/          → Map to relevant service/resource page
/category/legal-translation/   → /services/legal-translation/
```

**Pages:**
```
/about/                        → /
/services/                     → /services/
/contact/                      → /contact.html
```

**Custom Post Types:**
```
/portfolio/project-name/       → Decide case-by-case
```

---

## Testing Redirects Before Going Live

### Method 1: Vercel Preview Deployment

1. Deploy to Vercel (doesn't affect live site yet)
2. Get preview URL: `your-project.vercel.app`
3. Test redirects:
   ```bash
   curl -I https://your-project.vercel.app/old-wordpress-slug
   ```
4. Should return: `HTTP/2 308` or `301` with `Location:` header

### Method 2: Local Testing

1. Add redirects to `vercel.json`
2. Run: `vercel dev`
3. Test: `curl -I http://localhost:3000/old-wordpress-slug`

---

## Redirect Priority Strategy

### Phase 1: Essential Redirects (Do Now)
Already configured:
- Homepage variants
- Contact page
- Privacy/Terms pages

### Phase 2: High-Traffic Pages (Add Before Launch)
From Google Search Console:
- Pages with clicks in last 90 days
- Top 10-20 pages by impressions

### Phase 3: Long-Tail Pages (Add After Launch)
Monitor Google Search Console for 404 errors:
- Add redirects as you discover missing pages
- Focus on pages with traffic

---

## After DNS Switch: Monitor & Add Redirects

### Week 1-2 After Launch

1. **Check Google Search Console daily:**
   - Coverage → Errors → "Not found (404)"
   - Note which old URLs are being requested

2. **Add redirects incrementally:**
   - Edit `vercel.json`
   - Add new redirect
   - Commit and push (auto-deploys)

3. **Verify redirect works:**
   ```bash
   curl -I https://onlinetranslation.ae/old-url
   ```

### Example Workflow

**Day 3 after launch:**
- GSC shows: `/legal-translation-services/` → 404 (50 clicks lost)
- Add redirect:
  ```json
  {
    "source": "/legal-translation-services",
    "destination": "/services/legal-translation/",
    "permanent": true
  }
  ```
- Commit, push, verify

---

## Tools to Help

### Free Tools
- **Google Search Console** - Your indexed pages
- **Screaming Frog** - Crawl live site (free up to 500 URLs)
- **xml-sitemaps.com** - Generate sitemap from live site

### Paid Tools (Optional)
- **Ahrefs** - See all indexed pages + backlinks
- **SEMrush** - Site audit + URL list
- **Sitebulb** - Comprehensive crawl

---

## Quick Start: Get Your URL List Now

**Fastest method (5 minutes):**

1. Go to: `https://onlinetranslation.ae/sitemap.xml`
2. Copy all URLs you see
3. Paste them here or in a document
4. I'll help map them to your new static structure

**Most accurate method (15 minutes):**

1. Google Search Console → Performance → Pages → Export
2. Filter for pages with Clicks > 0
3. Share the list
4. We'll create comprehensive redirects

---

## What Happens If We Miss Some Redirects?

**Don't worry:**
- Google Search Console will show 404 errors
- You can add redirects anytime (takes 2 minutes)
- Vercel auto-deploys when you push changes
- No downtime or site rebuild needed

**Best practice:**
- Start with essential redirects (already done)
- Add high-traffic pages before launch
- Monitor and add more in first 2 weeks

---

## Next Step

**Choose one:**

1. **Share your WordPress sitemap URL** - I'll extract and map URLs
2. **Export from Google Search Console** - Share the CSV/list
3. **List your main WordPress pages** - Tell me what pages exist
4. **Deploy with minimal redirects** - Add more as you discover 404s

Which approach works best for you?
