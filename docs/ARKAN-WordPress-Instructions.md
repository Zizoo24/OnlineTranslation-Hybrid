# WordPress Instructions for Arkan Legal Translation

**From:** OnlineTranslation.ae  
**Re:** How to add the partnership content to your WordPress site

---

## OPTION A: Simple Widget (Easiest - 2 minutes)

### Step 1: Go to Appearance > Widgets
In your WordPress dashboard, navigate to **Appearance > Widgets**

### Step 2: Add a Custom HTML Widget
1. Find **"Custom HTML"** in the available widgets
2. Drag it to your **Sidebar** or **Footer** area
3. Give it a title like "Digital Partner" (optional)

### Step 3: Paste This Code

```html
<div style="background: linear-gradient(135deg, #0E2B48, #1a4570); padding: 24px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
    <span style="display: block; color: #d4a54c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 12px; font-weight: 600;">Digital Concierge Partner</span>
    <p style="color: #fff; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">Submit documents via WhatsApp for court-ready translations</p>
    <a href="https://onlinetranslation.ae" target="_blank" style="display: inline-block; background: #FF1654; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Visit OnlineTranslation.ae</a>
</div>
```

### Step 4: Save
Click **Save** - Done!

---

## OPTION B: Full Partner Page (5-10 minutes)

### Step 1: Create a New Page
Go to **Pages > Add New**

### Step 2: Set the Title
Enter: `Strategic Partnership with OnlineTranslation.ae`

### Step 3: Add Content
If using **Gutenberg** (block editor):
1. Add a **Paragraph** block and paste the text below
2. For the link, highlight "OnlineTranslation.ae" and add link: `https://onlinetranslation.ae`

If using **Classic Editor**:
1. Paste the text in Visual mode
2. Highlight "OnlineTranslation.ae" and click the link button
3. Add URL: `https://onlinetranslation.ae`

### Content to Paste:

---

Arkan Legal Translation is proud to announce our strategic partnership with OnlineTranslation.ae, Dubai's premier digital concierge for legal translation services.

This collaboration combines Arkan's 15+ years of Ministry of Justice certified translation expertise with OnlineTranslation.ae's innovative WhatsApp-first service model. The result is a seamless experience for clients who demand both convenience and court-ready quality.

**How It Works:**
- Clients submit documents via WhatsApp to OnlineTranslation.ae
- Documents are securely transferred to Arkan's sworn translators
- Translations are certified by Arkan's MOJ-registered staff
- Finished work is delivered digitally and by courier

**Who Benefits:**
- Golden Visa applicants needing fast turnaround
- Property investors requiring DLD-ready POAs
- Law firms with urgent court deadlines
- Corporate clients across DIFC, DMCC, and free zones

This partnership ensures every translation carries full legal validity while providing the modern, mobile-first experience today's clients expect.

**Contact:** For translations via our digital concierge, visit [OnlineTranslation.ae](https://onlinetranslation.ae)

---

### Step 4: Publish
Click **Publish** - Done!

---

## OPTION C: Homepage Banner (Using Elementor/Divi)

If Arkan uses **Elementor**:
1. Edit Homepage with Elementor
2. Add **HTML Widget** where you want the badge
3. Paste the code from Option A

If Arkan uses **Divi**:
1. Edit Homepage with Divi Builder
2. Add **Code Module**
3. Paste the code from Option A

---

## IMPORTANT: Verify the Backlink is Dofollow

After publishing:

1. Visit the page you created
2. Right-click > **View Page Source** (Ctrl+U)
3. Search for `onlinetranslation.ae` (Ctrl+F)
4. Look at the link - it should look like:
   ```html
   <a href="https://onlinetranslation.ae">OnlineTranslation.ae</a>
   ```
5. If it has `rel="nofollow"`, the link won't pass SEO value

**Good (dofollow):**
```html
<a href="https://onlinetranslation.ae">text</a>
```

**Bad (nofollow - needs fixing):**
```html
<a href="https://onlinetranslation.ae" rel="nofollow">text</a>
```

### If Links are Nofollow by Default:
Some WordPress themes/plugins add nofollow to external links. To fix:
1. Check Settings > Reading or your SEO plugin settings
2. Look for "Add nofollow to external links" and disable it
3. Or manually edit the link in HTML mode and remove `rel="nofollow"`

---

## WHERE TO PLACE THE CONTENT

**Best locations for SEO:**

1. **Partners/About page** - Add full 300-word partnership text
2. **Footer widget** - Add compact badge (Option A)
3. **Sidebar widget** - Add compact badge (Option A)
4. **Homepage** - Add badge in prominent location

**Minimum for backlink value:**
Just one dofollow link on any public page

---

## ASSETS WE CAN PROVIDE

Need any of these? Just ask:
- OnlineTranslation.ae logo (PNG, SVG)
- Partnership announcement graphics
- Co-branded social media images

---

## QUESTIONS?

Contact: info@onlinetranslation.ae  
WhatsApp: +971 50 862 0217

---

**Thank you for the partnership!**
