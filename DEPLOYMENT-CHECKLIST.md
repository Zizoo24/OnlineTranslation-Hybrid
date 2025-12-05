# Deployment Checklist - OnlineTranslation.ae

## Pre-Deployment Tasks

### 1. Get WordPress URL List
**Choose one method:**

**Option A: Google Search Console (Recommended)**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Performance → Pages → Export
3. Filter for pages with Clicks > 0
4. Share the list to map redirects

**Option B: WordPress Sitemap**
1. Visit: `https://onlinetranslation.ae/sitemap.xml`
2. Copy all URLs
3. Share to map redirects

**Option C: List Main Pages**
- Tell me what pages exist on your WordPress site
- I'll help create redirect mappings

**See:** `REDIRECT-MAPPING-GUIDE.md` for detailed instructions

### 2. Backup WordPress (Critical)
```
At Bluehost:
1. cPanel → Backup → Download Full Backup
2. Or use plugin: UpdraftPlus
3. Download: Database + Files
4. Store safely (external drive or cloud)
```

**This is your rollback safety net.**

### 3. Add High-Traffic Redirects
After getting URL list:
1. Edit `vercel.json`
2. Add redirects for pages with traffic
3. Commit changes

### 4. Clean Up Development Files
```bash
# Remove development assets (54MB)
rm -rf attached_assets/

# Remove development server files
rm server.py .replit replit.md

# Remove OneDrive utility scripts
rm browse-onedrive.js download-onedrive-images.js
```

### 5. Test Locally (Optional)
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Run local preview
vercel dev
```

---

## Vercel Deployment Steps

### 1. Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `Zizoo24/OnlineTranslation-Hybrid`
4. Configure project:
   - **Framework Preset:** Other (static site)
   - **Root Directory:** `./` (repository root)
   - **Build Command:** (leave empty)
   - **Output Directory:** `./` (repository root)
   - **Install Command:** (leave empty)

### 2. Deploy to Preview & Test Thoroughly
1. Vercel will auto-deploy on import
2. Get preview URL (e.g., `onlinetranslation-hybrid.vercel.app`)
3. **Test everything on preview URL:**
   - All pages load correctly
   - Forms work (contact form)
   - WhatsApp/phone links work
   - Images display
   - Mobile responsive
   - Dark mode toggle
   - Test redirects: `curl -I https://your-preview.vercel.app/home`

**Do not proceed until preview is perfect.**

### 3. Add Custom Domain (Don't Apply DNS Yet)
1. In Vercel project settings → Domains
2. Add domain: `onlinetranslation.ae`
3. Add www redirect: `www.onlinetranslation.ae` → `onlinetranslation.ae`
4. Vercel will show DNS records needed
5. **Copy these records but don't apply yet**

---

## WordPress Migration Decision

**See:** `WORDPRESS-MIGRATION-STRATEGY.md` for full details

### Option 1: Direct Cutover (Recommended - Simpler)
- Point DNS directly from WordPress to Vercel
- WordPress becomes inaccessible
- Keep backup for rollback
- **Timeline:** 1-2 hours

### Option 2: Subdomain Staging (More Cautious)
- Move WordPress to `old.onlinetranslation.ae` first
- Point main domain to Vercel
- Keep WordPress accessible on subdomain
- **Timeline:** 3-4 hours

**Most people choose Option 1.** It's simpler and you have backups for rollback.

---

## DNS Configuration (The Switch)

**⚠️ This makes your static site live and WordPress inaccessible**

### At Bluehost (or your DNS provider):

**Current DNS (WordPress):**
```
A Record: @ → [Bluehost IP, e.g., 162.241.xxx.xxx]
```

**New DNS (Vercel Static Site):**
```
A Record:     @ → 76.76.21.21
CNAME Record: www → cname.vercel-dns.com
```

**How to change:**
1. Log into Bluehost
2. Domains → DNS Zone Editor
3. Find A record for `@` (apex domain)
4. Edit: Change IP to `76.76.21.21`
5. Add CNAME: `www` → `cname.vercel-dns.com`
6. Save changes

**DNS propagation:** 5 minutes to 48 hours (usually < 1 hour)

**Check propagation:**
```bash
dig onlinetranslation.ae
# Should show: 76.76.21.21
```

---

## Post-Deployment Verification

### 1. Test Core Pages
- [ ] Homepage: [https://onlinetranslation.ae](https://onlinetranslation.ae)
- [ ] Services: [https://onlinetranslation.ae/services/](https://onlinetranslation.ae/services/)
- [ ] Contact: [https://onlinetranslation.ae/contact.html](https://onlinetranslation.ae/contact.html)
- [ ] Legal Translation: [https://onlinetranslation.ae/services/legal-translation/](https://onlinetranslation.ae/services/legal-translation/)

### 2. Test 301 Redirects
Test these common WordPress URLs redirect correctly:

```bash
# Should redirect to homepage
curl -I https://onlinetranslation.ae/home
curl -I https://onlinetranslation.ae/about

# Should redirect to contact
curl -I https://onlinetranslation.ae/contact-us

# Should redirect to legal pages
curl -I https://onlinetranslation.ae/privacy-policy
curl -I https://onlinetranslation.ae/terms-and-conditions
```

**Expected response:** `HTTP/2 308` (permanent redirect) or `HTTP/2 301`

**Note:** Add more redirects to `vercel.json` as you discover old WordPress URLs in Google Search Console.

### 3. Test Mobile Responsiveness
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test on iPad
- [ ] Verify mobile navigation works
- [ ] Check dark mode toggle

### 4. Test Forms
- [ ] Contact form submits correctly
- [ ] WhatsApp links work: `+971508620217`
- [ ] Phone links work: `tel:+971508620217`
- [ ] Email links work: `info@onlinetranslation.ae`

### 5. SEO Verification
- [ ] Submit new sitemap to Google Search Console: `https://onlinetranslation.ae/sitemap.xml`
- [ ] Verify robots.txt accessible: `https://onlinetranslation.ae/robots.txt`
- [ ] Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify canonical URLs point to correct pages

### 6. Performance Check
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Target: 90+ on mobile, 95+ on desktop
- [ ] Check Core Web Vitals

---

## Google Search Console Setup

### 1. Add Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `onlinetranslation.ae`
3. Verify ownership (Vercel provides verification methods)

### 2. Submit Sitemap
1. In GSC, go to Sitemaps
2. Submit: `https://onlinetranslation.ae/sitemap.xml`

### 3. Monitor Old URLs
1. In GSC, check "Coverage" report
2. Monitor for 404 errors from old WordPress URLs
3. Add additional redirects in `vercel.json` if needed

### 4. Request Indexing (Optional)
For high-priority pages, use "URL Inspection" tool to request immediate indexing:
- Homepage
- Main service pages
- High-traffic location pages

---

## WordPress Decommissioning

### ⚠️ DO NOT DELETE WORDPRESS IMMEDIATELY

**After DNS switch, WordPress is inaccessible but still exists at Bluehost.**

**Recommended timeline:**
1. **Days 1-7:** Monitor closely
   - Check Google Search Console daily
   - Add redirects as you find 404 errors
   - Verify traffic patterns

2. **Days 8-30:** Continue monitoring
   - Weekly GSC checks
   - Ensure traffic stable/increased
   - Verify no major issues

3. **Day 30+:** Decommission WordPress
   - Verify everything stable
   - Cancel WordPress hosting at Bluehost
   - Keep domain registration (or transfer to Vercel)
   - Keep final backup forever

**Why wait 30 days:**
- Catch any missed redirects
- Verify all traffic successfully migrated
- Ensure no SEO ranking drops
- Have rollback option (change DNS back)

**Rollback if needed:**
```
Change DNS A record back to old Bluehost IP
Wait 5-60 minutes for propagation
WordPress is live again
```

---

## Rollback Plan (Emergency)

If critical issues occur after DNS switch:

1. **Immediate rollback (< 5 minutes):**
   ```
   Change DNS A record back to old Bluehost IP
   Wait for DNS propagation (5-60 minutes)
   ```

2. **Vercel rollback:**
   - In Vercel dashboard → Deployments
   - Find previous working deployment
   - Click "..." → "Promote to Production"

---

## Monitoring & Maintenance

### Weekly (First Month)
- [ ] Check Google Search Console for errors
- [ ] Monitor Vercel analytics for traffic patterns
- [ ] Check for broken links
- [ ] Verify forms still working

### Monthly (Ongoing)
- [ ] Review and update content
- [ ] Check for new redirect needs
- [ ] Update sitemap if new pages added
- [ ] Review performance metrics

---

## Common WordPress → Static Redirect Patterns

Already configured in `vercel.json`:

| Old WordPress URL | New Static URL |
|------------------|----------------|
| `/home` | `/` |
| `/about` | `/` |
| `/about-us` | `/` |
| `/contact-us` | `/contact.html` |
| `/privacy-policy` | `/privacy.html` |
| `/terms-and-conditions` | `/terms.html` |

**Total redirects configured:** 8 essential patterns

**To add more redirects:**
1. Check Google Search Console after launch for 404 errors
2. Add specific redirects to `vercel.json` as needed
3. Redeploy to Vercel

---

## Support Contacts

- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **DNS Provider:** Bluehost support
- **Domain Registrar:** (verify current registrar)

---

## Success Metrics

After 30 days, verify:
- [ ] Zero 404 errors in GSC
- [ ] Traffic maintained or increased
- [ ] All redirects working (< 1% redirect errors)
- [ ] Page load time < 2 seconds
- [ ] Mobile usability score 100/100
- [ ] Core Web Vitals all green

---

## Notes

- Site is fully static (HTML/CSS/JS only)
- No build process required
- No server-side code
- PWA enabled (service worker configured)
- All assets optimized for production
