# Services Page UI/UX Fixes - OnlineTranslation.ae

## 🎯 IMMEDIATE PRIORITY FIXES (Week 1)

### 1. Hero Section Transformation
**Current Problem:** Generic text intro
**Fix:**
```html
<!-- Replace opening section with -->
<section class="services-hero">
  <div class="hero-badge">MOJ-Licensed • 43+ Languages</div>
  <h1 class="hero-title">
    <span class="title-prefix">Translation Services</span>
    <span class="title-main">Built for Documents That Can't Fail</span>
  </h1>
  <p class="hero-subtitle">From Palm Jumeirah, we coordinate Ministry of Justice-licensed legal translation for courts, immigration, and corporate matters—without you leaving WhatsApp.</p>
  
  <div class="hero-cta-group">
    <a href="https://wa.me/971508620217" class="btn-primary">
      <span class="btn-icon">💬</span>
      Send Your Documents
    </a>
    <a href="#how-it-works" class="btn-secondary">See How It Works ↓</a>
  </div>
  
  <!-- Trust indicators -->
  <div class="trust-bar">
    <div class="trust-item">
      <strong>24hr</strong> Standard
    </div>
    <div class="trust-item">
      <strong>Same-Day</strong> Express
    </div>
    <div class="trust-item">
      <strong>100%</strong> Acceptance
    </div>
  </div>
</section>
```

**CSS Additions:**
```css
.services-hero {
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, #1a5f7a 0%, #2d8fb8 100%);
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-prefix {
  display: block;
  font-size: 1rem;
  color: #666;
  font-weight: 400;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title-main {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;
}

.hero-cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25D366; /* WhatsApp green */
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: #1a5f7a;
  padding: 1rem 2rem;
  border: 2px solid #1a5f7a;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: background 0.2s, color 0.2s;
}

.btn-secondary:hover {
  background: #1a5f7a;
  color: white;
}

.trust-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  flex-wrap: wrap;
}

.trust-item {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.trust-item strong {
  display: block;
  font-size: 1.5rem;
  color: #1a5f7a;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
  .title-main {
    font-size: 1.8rem;
  }
  
  .hero-cta-group {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
```

### 2. Service Cards - Visual Overhaul
**Current Problem:** Plain text links, no visual hierarchy
**Fix:**

```html
<!-- Replace each service link section with cards -->
<section class="services-grid">
  <div class="service-card service-card-legal">
    <div class="card-icon">⚖️</div>
    <h3 class="card-title">Legal Translation</h3>
    <p class="card-description">Court documents, contracts, pleadings, powers of attorney—prepared for Dubai Courts, DIFC, ADGM, and UAE forums.</p>
    <ul class="card-features">
      <li>✓ Court-ready formatting</li>
      <li>✓ Dual-language alignment</li>
      <li>✓ MOJ-certified</li>
    </ul>
    <a href="legal-translation/" class="card-cta">
      View Service →
    </a>
  </div>

  <div class="service-card service-card-visa">
    <div class="card-icon">🛂</div>
    <h3 class="card-title">Golden Visa & Immigration</h3>
    <p class="card-description">Birth, marriage, education certificates for Golden Visa, residency renewals, family sponsorship—aligned with portal requirements.</p>
    <ul class="card-features">
      <li>✓ Free zone compliant</li>
      <li>✓ Name consistency checks</li>
      <li>✓ Portal-ready formats</li>
    </ul>
    <a href="golden-visa-translation/" class="card-cta">
      View Service →
    </a>
  </div>

  <div class="service-card service-card-certificate">
    <div class="card-icon">📜</div>
    <h3 class="card-title">Certificate Translation</h3>
    <p class="card-description">Birth, marriage, degree, medical certificates—translated with attention to names, dates, and stamps for HR, embassies, schools.</p>
    <ul class="card-features">
      <li>✓ Exact stamp replication</li>
      <li>✓ Embassy accepted</li>
      <li>✓ Fast turnaround</li>
    </ul>
    <a href="certificate-translation/" class="card-cta">
      View Service →
    </a>
  </div>

  <div class="service-card service-card-corporate">
    <div class="card-icon">🏢</div>
    <h3 class="card-title">Corporate Translation</h3>
    <p class="card-description">MOAs, resolutions, financial statements, KYC packs—prepared so Arabic and English versions stay aligned as one file.</p>
    <ul class="card-features">
      <li>✓ Bilingual consistency</li>
      <li>✓ Bank-ready KYC</li>
      <li>✓ Regulatory compliance</li>
    </ul>
    <a href="corporate-translation/" class="card-cta">
      View Service →
    </a>
  </div>
</section>
```

**CSS:**
```css
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid transparent;
  position: relative;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.service-card-legal {
  border-top-color: #8B5CF6;
}

.service-card-visa {
  border-top-color: #10B981;
}

.service-card-certificate {
  border-top-color: #F59E0B;
}

.service-card-corporate {
  border-top-color: #3B82F6;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.card-features li {
  font-size: 0.9rem;
  color: #444;
  padding: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: #f8f9fa;
  color: #1a5f7a;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s, color 0.2s;
  margin-top: auto;
}

.card-cta:hover {
  background: #1a5f7a;
  color: white;
}
```

### 3. Service Tiers Table - Visual Redesign
**Current Problem:** Text-based table, hard to compare
**Fix:**

```html
<section class="pricing-tiers">
  <h2 class="section-title">Choose Your Timeline</h2>
  <p class="section-subtitle">Transparent pricing based on your deadline, not document type</p>
  
  <div class="tiers-container">
    <!-- Standard Tier -->
    <div class="tier-card">
      <div class="tier-header tier-standard">
        <h3>Standard</h3>
        <div class="tier-price">From AED 50</div>
      </div>
      <div class="tier-body">
        <div class="tier-timing">
          <strong>24-48 hours</strong>
          <span>Comfortable deadlines</span>
        </div>
        <ul class="tier-features">
          <li>Perfect for planned submissions</li>
          <li>Full quality checks</li>
          <li>Digital delivery</li>
          <li>Email support</li>
        </ul>
        <a href="https://wa.me/971508620217?text=I need standard translation" class="tier-cta tier-cta-standard">
          Get Quote
        </a>
      </div>
    </div>

    <!-- Express Tier -->
    <div class="tier-card tier-featured">
      <div class="tier-badge">Most Popular</div>
      <div class="tier-header tier-express">
        <h3>Express</h3>
        <div class="tier-price">From AED 100</div>
      </div>
      <div class="tier-body">
        <div class="tier-timing">
          <strong>Same Day</strong>
          <span>Time-sensitive matters</span>
        </div>
        <ul class="tier-features">
          <li>For urgent deadlines</li>
          <li>Priority queue</li>
          <li>Rapid digital delivery</li>
          <li>WhatsApp support</li>
        </ul>
        <a href="https://wa.me/971508620217?text=I need express translation" class="tier-cta tier-cta-express">
          Get Quote
        </a>
      </div>
    </div>

    <!-- Concierge Tier -->
    <div class="tier-card">
      <div class="tier-header tier-concierge">
        <h3>Concierge</h3>
        <div class="tier-price">Custom</div>
      </div>
      <div class="tier-body">
        <div class="tier-timing">
          <strong>Managed Service</strong>
          <span>Complex multi-step matters</span>
        </div>
        <ul class="tier-features">
          <li>Dedicated coordinator</li>
          <li>Attestation guidance</li>
          <li>Courier arrangement</li>
          <li>Direct phone line</li>
        </ul>
        <a href="https://wa.me/971508620217?text=I need concierge service" class="tier-cta tier-cta-concierge">
          Discuss Needs
        </a>
      </div>
    </div>
  </div>
</section>
```

**CSS:**
```css
.pricing-tiers {
  padding: 4rem 1.5rem;
  background: linear-gradient(to bottom, #f8f9fa 0%, white 100%);
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

.tiers-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.tier-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.tier-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.tier-featured {
  border: 2px solid #1a5f7a;
}

.tier-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #1a5f7a;
  color: white;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
}

.tier-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.tier-standard {
  background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
}

.tier-express {
  background: linear-gradient(135deg, #1a5f7a 0%, #2d8fb8 100%);
}

.tier-concierge {
  background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
}

.tier-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.tier-price {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.tier-body {
  padding: 2rem;
}

.tier-timing {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.tier-timing strong {
  display: block;
  font-size: 1.2rem;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.tier-timing span {
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
  font-size: 0.95rem;
  color: #444;
  position: relative;
  padding-left: 1.5rem;
}

.tier-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #10B981;
  font-weight: 700;
}

.tier-cta {
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
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
  box-shadow: 0 4px 12px rgba(26, 95, 122, 0.3);
}

.tier-cta-concierge {
  background: #7C3AED;
  color: white;
}

.tier-cta-concierge:hover {
  background: #6D28D9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}
```

### 4. "Services by Situation" - Tabbed Interface
**Current Problem:** Long accordion-style sections, hard to navigate
**Fix:**

```html
<section class="situations-section">
  <h2 class="section-title">Find Your Situation</h2>
  <p class="section-subtitle">Most conversations start with "I have this document—what should I do?"</p>

  <!-- Situation Tabs -->
  <div class="situation-tabs">
    <button class="tab-btn active" data-tab="legal">
      <span class="tab-icon">⚖️</span>
      Legal & Court
    </button>
    <button class="tab-btn" data-tab="personal">
      <span class="tab-icon">👤</span>
      Personal & Immigration
    </button>
    <button class="tab-btn" data-tab="corporate">
      <span class="tab-icon">🏢</span>
      Corporate & Banking
    </button>
    <button class="tab-btn" data-tab="everyday">
      <span class="tab-icon">📄</span>
      Everyday Paperwork
    </button>
  </div>

  <!-- Tab Content -->
  <div class="tab-content active" id="tab-legal">
    <div class="situation-grid">
      <div class="situation-info">
        <h3>Legal & Court Documents</h3>
        <p class="situation-description">For law firms, in-house teams, and individuals working with lawyers or facing proceedings.</p>
        
        <h4>Typical Files</h4>
        <div class="file-tags">
          <span class="tag">Statements of claim</span>
          <span class="tag">Contracts & NDAs</span>
          <span class="tag">Powers of attorney</span>
          <span class="tag">Judgments</span>
          <span class="tag">Exhibit bundles</span>
        </div>

        <h4>Where They Go</h4>
        <ul class="destination-list">
          <li>Dubai Courts and other UAE onshore courts</li>
          <li>DIFC and ADGM for English-language proceedings</li>
          <li>Police, prosecution, and notary public offices</li>
          <li>Arbitration centres and regulatory bodies</li>
        </ul>

        <div class="approach-box">
          <h5>Our Approach</h5>
          <p>We preserve the structure of your file so judges, clerks, and opposing counsel can clearly see how Arabic and English versions correspond. Defined terms, clause numbering, and references handled with precision.</p>
        </div>
      </div>

      <div class="situation-cta-box">
        <div class="cta-box-inner">
          <h4>Ready to proceed?</h4>
          <p>Send your documents and we'll confirm requirements before starting.</p>
          <a href="https://wa.me/971508620217?text=I have legal documents" class="cta-button">
            💬 Share Legal Documents
          </a>
          <a href="legal-translation/" class="cta-link">
            Read Full Legal Translation Guide →
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Repeat for other tabs: personal, corporate, everyday -->
  <!-- ... -->
</section>
```

**CSS:**
```css
.situations-section {
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.situation-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: thin;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 1.5rem;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  transition: all 0.2s;
  white-space: nowrap;
}

.tab-btn:hover {
  border-color: #1a5f7a;
  color: #1a5f7a;
}

.tab-btn.active {
  background: #1a5f7a;
  border-color: #1a5f7a;
  color: white;
}

.tab-icon {
  font-size: 1.3rem;
}

.tab-content {
  display: none;
  animation: fadeIn 0.3s;
}

.tab-content.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.situation-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}

.situation-info h3 {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
}

.situation-description {
  font-size: 1.05rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.situation-info h4 {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.75rem;
  color: #1a1a1a;
}

.file-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #f1f5f9;
  color: #1a5f7a;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}

.destination-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.destination-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #444;
  font-size: 0.95rem;
}

.destination-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #1a5f7a;
  font-weight: 700;
}

.approach-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #1a5f7a;
}

.approach-box h5 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1a5f7a;
}

.approach-box p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
}

.situation-cta-box {
  display: flex;
  align-items: flex-start;
}

.cta-box-inner {
  background: linear-gradient(135deg, #1a5f7a 0%, #2d8fb8 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  position: sticky;
  top: 20px;
}

.cta-box-inner h4 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.cta-box-inner p {
  font-size: 0.95rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.cta-button {
  display: block;
  width: 100%;
  padding: 1rem;
  background: white;
  color: #1a5f7a;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255,255,255,0.3);
}

.cta-link {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.cta-link:hover {
  opacity: 1;
  text-decoration: underline;
}

@media (max-width: 968px) {
  .situation-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box-inner {
    position: static;
  }
}
```

### 5. Mobile Menu & Sticky CTAs
**Add sticky mobile action bar:**

```html
<!-- Add to bottom of body, before closing </body> -->
<div class="mobile-action-bar">
  <a href="https://wa.me/971508620217" class="mobile-action-btn mobile-whatsapp">
    <span class="action-icon">💬</span>
    <span class="action-text">WhatsApp</span>
  </a>
  <a href="tel:+971508620217" class="mobile-action-btn mobile-call">
    <span class="action-icon">📞</span>
    <span class="action-text">Call Now</span>
  </a>
  <a href="../contact.html" class="mobile-action-btn mobile-form">
    <span class="action-icon">✉️</span>
    <span class="action-text">Contact</span>
  </a>
</div>
```

**CSS:**
```css
.mobile-action-bar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
  padding: 0.75rem;
  z-index: 1000;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .mobile-action-bar {
    display: flex;
  }
}

.mobile-action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: transform 0.2s;
}

.mobile-action-btn:active {
  transform: scale(0.95);
}

.mobile-whatsapp {
  background: #25D366;
  color: white;
}

.mobile-call {
  background: #3B82F6;
  color: white;
}

.mobile-form {
  background: #f3f4f6;
  color: #1a1a1a;
  border: 1px solid #d1d5db;
}

.action-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.action-text {
  font-size: 0.75rem;
}
```

### 6. JavaScript for Tab Functionality
**Add this script before closing </body>:**

```html
<script>
// Tab switching
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active to clicked tab
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(`tab-${tabId}`).classList.add('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
</script>
```
