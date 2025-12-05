# WordPress to Static Site URL Mapping

## WordPress URLs from Sitemap (26 pages)

### Mapping Strategy

| # | Old WordPress URL | New Static URL | Priority |
|---|------------------|----------------|----------|
| 1 | `/` | `/` | Keep (homepage) |
| 2 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/dubai-marriage-certificate-translation-certified-translations-for-visa-and-legal-use-outside-the-uae/` | `/personal/vital-records/marriage/` | High |
| 3 | `/translation_agency_dubai/translation-services/website-localization-translation/` | `/specialized/digital/` | High |
| 4 | `/translation_agency_dubai/translation-services/legal-translation/urgent-translation-services/` | `/services/legal-translation/` | High |
| 5 | `/about-2/umm-al-sheif/medical-document-translation-services-for-jumeirah-street/` | `/specialized/medical/` | Medium |
| 6 | `/our-locations/` | `/locations/` | High |
| 7 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/swedish-arabic-official-translation/` | `/services/certificate-translation/` | Medium |
| 8 | `/about-2/umm-al-sheif/` | `/locations/dubai/` | Medium |
| 9 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/uk-birth-certificate-legal-translation-for-uae-visa-purposes/` | `/personal/vital-records/birth/` | High |
| 10 | `/translation_agency_dubai/translation-services/technical-translation/` | `/specialized/technical/` | High |
| 11 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/russian-to-arabic-translation-for-birth-certificates-visa-embassy-official/` | `/personal/vital-records/birth/` | Medium |
| 12 | `/refund_returns/` | `/terms.html` | Low |
| 13 | `/translation_agency_dubai/translator-in-pocket/` | `/` | Low |
| 14 | `/academic-translation/` | `/personal/academic/` | High |
| 15 | `/translation_agency_dubai/translation-services/medical-translation-services/` | `/specialized/medical/` | High |
| 16 | `/translation_agency_dubai/translation-services/media-translation/` | `/specialized/digital/` | Medium |
| 17 | `/translation_agency_dubai/translation-services/legal-translation/financial-translation-services/` | `/services/corporate-translation/` | Medium |
| 18 | `/translation_agency_dubai/translation-services/legal-translation/family-documents-translation/` | `/personal/vital-records/` | High |
| 19 | `/translation_agency_dubai/translation-services/legal-translation/` | `/services/legal-translation/` | High |
| 20 | `/translation_agency_dubai/translation-services/languages/` | `/services/` | Medium |
| 21 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/educational-certificate-translation/` | `/personal/academic/degree/` | High |
| 22 | `/dubai-birth-certificate-translation/` | `/personal/vital-records/birth/` | High |
| 23 | `/translation_agency_dubai/translation-services/certificate-translation-dxb/criminal-record-certificate-translation-dubai/` | `/personal/immigration/pcc/` | High |
| 24 | `/about-2/cookie-policy-br/` | `/privacy.html` | Low |
| 25 | `/contact-dxb-translator/` | `/contact.html` | High |
| 26 | `/to-arabic-translation-whatsapp-screenshots-english/` | `/services/` | Low |

## Summary

### High Priority Redirects (15)
- Marriage certificate → /personal/vital-records/marriage/
- Birth certificate (3 URLs) → /personal/vital-records/birth/
- Legal translation (2 URLs) → /services/legal-translation/
- Medical translation → /specialized/medical/
- Technical translation → /specialized/technical/
- Academic translation (2 URLs) → /personal/academic/
- Police clearance → /personal/immigration/pcc/
- Family documents → /personal/vital-records/
- Website localization → /specialized/digital/
- Locations → /locations/
- Contact → /contact.html

### Medium Priority Redirects (6)
- Swedish translation → /services/certificate-translation/
- Umm Al Sheif → /locations/dubai/
- Media translation → /specialized/digital/
- Financial translation → /services/corporate-translation/
- Languages → /services/

### Low Priority Redirects (4)
- Refund/returns → /terms.html
- Translator in pocket → /
- Cookie policy → /privacy.html
- WhatsApp screenshots → /services/

## Notes

1. **Multiple URLs to same destination**: Several WordPress URLs point to the same new page (e.g., 3 birth certificate URLs → 1 new page)
2. **Long WordPress URLs**: WordPress used very long, nested URL structure
3. **New structure is cleaner**: Static site has logical, hierarchical structure
4. **All 26 URLs mapped**: Every WordPress page has a redirect destination
