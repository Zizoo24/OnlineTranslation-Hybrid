# WordPress to Vercel Migration Strategy

## The Big Picture

You have two options for migrating from WordPress to your new static site on Vercel.

---

## Option 1: Direct Cutover (Recommended - Simpler)

**What happens:**
1. Deploy static site to Vercel
2. Point DNS directly to Vercel
3. WordPress becomes inaccessible
4. Keep WordPress backup for 30 days (rollback option)

**Pros:**
- Simpler (fewer steps)
- No subdomain confusion
- Clean cutover
- Faster to execute

**Cons:**
- No side-by-side comparison after launch
- Must be confident in redirects

**Timeline:** 1-2 hours

---

## Option 2: Subdomain Staging (More Cautious)

**What happens:**
1. Move WordPress to subdomain first (`old.onlinetranslation.ae`)
2. Deploy static site to Vercel
3. Point main domain to Vercel
4. Keep WordPress accessible on subdomain for 30 days
5. Decommission WordPress subdomain

**Pros:**
- WordPress stays accessible after launch
- Can reference old site if needed
- Easier rollback (just change DNS)
- Side-by-side comparison

**Cons:**
- More complex setup
- Extra DNS configuration
- Subdomain might get indexed by Google (need robots.txt)

**Timeline:** 2-4 hours

---

## Detailed Steps: Option 1 (Direct Cutover)

### Phase 1: Preparation (Before DNS Change)

**1. Backup WordPress (Critical)**
```
At Bluehost:
- cPanel → Backup → Download Full Backup
- Or use plugin: UpdraftPlus, BackupBuddy
- Download: Database + Files
- Store safely (external drive or cloud)
```

**2. Deploy to Vercel**
```
1. Connect GitHub repo to Vercel
2. Deploy (gets preview URL: your-project.vercel.app)
3. Test thoroughly on preview URL
4. Add custom domain in Vercel: onlinetranslation.ae
5. Vercel provides DNS records (don't apply yet)
```

**3. Test Everything on Vercel Preview**
```
- All pages load correctly
- Forms work (contact form)
- WhatsApp/phone links work
- Images display
- Mobile responsive
- Dark mode toggle
- Test redirects: curl -I https://your-project.vercel.app/home
```

### Phase 2: DNS Cutover (The Switch)

**4. Update DNS at Bluehost**

**Current DNS (WordPress on Bluehost):**
```
A Record:  @ → [Bluehost IP, e.g., 162.241.xxx.xxx]
```

**New DNS (Static site on Vercel):**
```
A Record:     @ → 76.76.21.21
CNAME Record: www → cname.vercel-dns.com
```

**How to change:**
1. Log into Bluehost
2. Go to: Domains → DNS Zone Editor
3. Find A record for `@` (apex domain)
4. Edit: Change IP to `76.76.21.21`
5. Add CNAME: `www` → `cname.vercel-dns.com`
6. Save changes

**DNS propagation:** 5 minutes to 48 hours (usually < 1 hour)

### Phase 3: Verification (After DNS Change)

**5. Test Live Site**
```bash
# Check DNS has propagated
dig onlinetranslation.ae

# Should show: 76.76.21.21

# Test site loads
curl -I https://onlinetranslation.ae

# Test redirects
curl -I https://onlinetranslation.ae/home
curl -I https://onlinetranslation.ae/contact-us
```

**6. Monitor Google Search Console**
```
- Check for 404 errors daily (first week)
- Add redirects as needed
- Submit new sitemap: https://onlinetranslation.ae/sitemap.xml
```

### Phase 4: WordPress Cleanup (After 30 Days)

**7. Decommission WordPress**
```
Only after:
- 30 days of stable traffic
- No major issues
- All redirects working
- Traffic maintained/increased

Then:
- Cancel WordPress hosting at Bluehost
- Keep domain registration at Bluehost (or transfer)
- Keep final backup forever
```

---

## Detailed Steps: Option 2 (Subdomain Staging)

### Phase 1: Move WordPress to Subdomain

**1. Create Subdomain at Bluehost**
```
1. Bluehost cPanel → Subdomains
2. Create: old.onlinetranslation.ae
3. Point to same WordPress directory (or clone it)
```

**2. Update WordPress URLs**
```
Option A: WordPress Admin
- Settings → General
- WordPress Address: https://old.onlinetranslation.ae
- Site Address: https://old.onlinetranslation.ae
- Save

Option B: Database (if locked out)
- phpMyAdmin → wp_options table
- Update: siteurl and home to https://old.onlinetranslation.ae
```

**3. Add Robots.txt to Subdomain**
```
Create: old.onlinetranslation.ae/robots.txt

Content:
User-agent: *
Disallow: /

# Prevent Google from indexing old subdomain
```

**4. Test Subdomain**
```
Visit: https://old.onlinetranslation.ae
- Should load WordPress site
- All pages should work
- Images should display
```

### Phase 2: Deploy Static Site to Main Domain

**5. Deploy to Vercel**
```
Same as Option 1, steps 2-3
```

**6. Update DNS**
```
Main domain DNS:
A Record:     @ → 76.76.21.21
CNAME Record: www → cname.vercel-dns.com

Subdomain DNS (already set by Bluehost):
CNAME Record: old → [Bluehost server]
```

**7. Verify Both Sites Work**
```
Main domain: https://onlinetranslation.ae (Vercel static site)
Subdomain: https://old.onlinetranslation.ae (WordPress)
```

### Phase 3: Monitor & Cleanup

**8. Monitor for 30 Days**
```
- Reference old WordPress site if needed
- Compare layouts/content
- Add redirects as you discover missing pages
```

**9. Decommission Subdomain**
```
After 30 days:
- Delete subdomain at Bluehost
- Or keep as private archive (password protect)
```

---

## Which Option Should You Choose?

### Choose Option 1 (Direct Cutover) If:
- ✅ You're confident in your static site
- ✅ You've tested thoroughly on Vercel preview
- ✅ You have good backups
- ✅ You want simpler process
- ✅ You're comfortable with quick rollback via DNS

### Choose Option 2 (Subdomain) If:
- ✅ You want to reference old site after launch
- ✅ You're less confident about redirects
- ✅ You want easier rollback
- ✅ You have complex WordPress content to verify
- ✅ You don't mind extra setup time

---

## Rollback Plan (If Something Goes Wrong)

### Option 1 Rollback:
```
1. Change DNS back to Bluehost IP
   A Record: @ → [old Bluehost IP]
2. Wait 5-60 minutes for DNS propagation
3. WordPress site is live again
```

### Option 2 Rollback:
```
1. Change DNS back to Bluehost IP
   A Record: @ → [old Bluehost IP]
2. Update WordPress URLs back to main domain
   Settings → General → Change URLs
3. WordPress site is live on main domain again
```

---

## Timeline Comparison

### Option 1: Direct Cutover
```
Preparation:     1 hour
DNS Change:      5 minutes
Verification:    30 minutes
Total:           ~2 hours
```

### Option 2: Subdomain Staging
```
Subdomain Setup: 1 hour
WordPress Config: 30 minutes
Vercel Deploy:   1 hour
DNS Changes:     15 minutes
Verification:    30 minutes
Total:           ~3-4 hours
```

---

## My Recommendation

**Start with Option 1 (Direct Cutover)**

**Why:**
1. Your static site is well-built and tested
2. You have minimal redirects to start (can add more)
3. Simpler = fewer things to go wrong
4. You have backups for rollback
5. Vercel preview lets you test everything first

**Safety nets:**
- Test thoroughly on Vercel preview URL first
- Keep WordPress backup for 30 days
- DNS rollback takes < 1 hour if needed
- Can add redirects anytime without downtime

---

## Step-by-Step: Recommended Approach

### Today (Preparation)
1. ✅ Clean up repo (remove dev files)
2. ✅ Get WordPress URL list (GSC or sitemap)
3. ✅ Add high-traffic redirects to `vercel.json`
4. ✅ Backup WordPress (full backup)

### Tomorrow (Deployment)
1. Connect GitHub to Vercel
2. Deploy to preview
3. Test everything on preview URL
4. Add custom domain in Vercel
5. Get DNS records from Vercel

### Launch Day (DNS Switch)
1. Update DNS at Bluehost (A record + CNAME)
2. Wait for propagation (check with `dig`)
3. Test live site
4. Monitor Google Search Console

### Week 1-2 (Monitoring)
1. Check GSC daily for 404 errors
2. Add redirects as needed
3. Monitor traffic in Vercel Analytics
4. Keep WordPress backup safe

### Day 30 (Cleanup)
1. Verify traffic stable
2. Cancel WordPress hosting
3. Keep final backup

---

## Common Questions

**Q: What if I find a missing page after launch?**
A: Add redirect to `vercel.json`, commit, push. Vercel auto-deploys in 30 seconds.

**Q: Can I test without affecting live site?**
A: Yes! Vercel preview URL lets you test everything before DNS change.

**Q: How long is downtime?**
A: Zero downtime. DNS change is seamless (old site → new site).

**Q: What if something breaks?**
A: Change DNS back to Bluehost IP. Site rolls back in < 1 hour.

**Q: Do I need to move WordPress to subdomain first?**
A: No. Only if you want to keep it accessible after launch (Option 2).

**Q: When do I cancel WordPress hosting?**
A: After 30 days of stable traffic on Vercel.

---

## Next Steps

1. **Decide:** Option 1 (direct) or Option 2 (subdomain)?
2. **Get URL list:** Export from GSC or share sitemap
3. **Add redirects:** I'll help map WordPress URLs
4. **Backup WordPress:** Full backup before any changes
5. **Deploy to Vercel:** Test on preview URL first

**Ready to proceed?** Let me know:
- Which option you prefer
- Your WordPress sitemap URL or GSC export
- Any specific concerns about the migration
