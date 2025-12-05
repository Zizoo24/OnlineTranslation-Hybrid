
# Design Decisions & Conflict Resolution
**Date:** December 5, 2025
**Version:** 1.0

This document serves as the single source of truth for all UI/UX design and technical implementation decisions for the OnlineTranslation.ae website refresh. It overrides any conflicting instructions found in `MASTER_STRATEGIC_BLUEPRINT_v7.0_UPDATED.md`, the `HANDBOOK`, or other markdown files.

---

## 1. CSS Strategy: Single Authoritative Stylesheet

**Decision:** We will use a **single CSS file** for the entire website to ensure consistency and maintainability.

- **Authoritative File:** `styles/porto-desktop.css`
- **Action:** All new CSS for components (navigation, heroes, cards, accordions, etc.) will be added directly to `styles/porto-desktop.css`. Existing conflicting or legacy styles within this file (e.g., "Exodus" theme styles) will be removed or overridden.
- **Deprecation:** All other `.css` files within the `styles/` directory (e.g., `navigation-glassmorphism.css`, `mobile-action-bar.css`, etc.) are considered deprecated and will be removed from the HTML `<head>` as we consolidate.

---

## 2. Navigation Bar: Dark Glassmorphism

**Conflict:** The `HANDBOOK` suggested a light glass effect, but this conflicts with the logo design.
**Decision:** We will implement a **dark glassmorphism** navigation bar.

- **Rationale:** The primary logo file (`emblem-64.png`) uses white text. A dark, blurred background is essential for logo legibility and a premium aesthetic.
- **Implementation:** The styles for the dark glass navigation bar will be merged into `styles/porto-desktop.css`, replacing the existing header styles.

---

## 3. Mobile Call-to-Action: Bottom Action Bar

**Conflict:** Some documents mention a "floating WhatsApp button," while others specify a "bottom action bar."
**Decision:** We will exclusively use the **Bottom Action Bar** for mobile.

- **Rationale:** The bottom action bar is more modern, less intrusive, and aligns better with the "Digital Concierge" identity than a floating button. It also provides space for multiple clear actions (WhatsApp, Call, Upload).
- **Implementation:** The CSS for the bottom action bar will be added to `styles/porto-desktop.css`. All instances of a floating CTA will be removed.

---

## 4. Page Structure and Content

**Decision:** The content and HTML structure for all new and updated pages will follow the detailed modular hierarchy outlined in the `HANDBOOK_UI_UX_Implementation_Digital_Concierge.md`.

- **Source of Truth for HTML:** `HANDBOOK_UI_UX_Implementation_Digital_Concierge.md`
- **Action:** When building pages like `legal/contracts/index.html`, we will use the HTML templates provided in the handbook for hero sections, accordions, pricing tiers, and other modules.

---
