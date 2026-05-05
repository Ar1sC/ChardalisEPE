# Chardalis EPE static website

Static multi-page website for `chardalisepe.gr`.

## Pages

- `index.html`
- `ypiresies.html`
- `anakyklosi-metallon.html`
- `anakyklosi-metallon-thessaloniki.html`
- `anakyklosi-xalkou-thessaloniki.html`
- `anakyklosi-sidirou-thessaloniki.html`
- `anakyklosi-alouminiou-thessaloniki.html`
- `skrap-thessaloniki.html`
- `aposyrsi-autokiniton.html`
- `aposyrsi-autokiniton-thessaloniki.html`
- `oristiki-diagrafi.html`
- `paralavi-scrap.html`
- `diadikasia.html`
- `etaireia.html`
- `faq.html`
- `epikoinonia.html`

## Replace before publishing

- Phone: `6944245218`
- Email: `chardalisepe@hotmail.gr`
- Location/service areas: currently `Θεσσαλονίκη`
- Company-specific proof: licenses, exact address, real facility photos, legal text
- Contact form: Web3Forms access key is configured in `epikoinonia.html`; verify delivery before production launch

## SEO included

- Unique title and meta description per page
- Canonical URLs for `https://chardalisepe.gr`
- `robots.txt`
- `sitemap.xml`
- LocalBusiness JSON-LD on homepage
- Service, FAQPage and BreadcrumbList JSON-LD on local SEO landing pages
- FAQPage JSON-LD on FAQ page
- Internal linking across service pages
- `llms.txt` and `llms-full.txt` for AI/search-agent factual summaries
- Privacy Policy page for contact-form data handling
- WebP image assets with PNG fallback and JPEG Open Graph image

## Local SEO launch checklist

See `LOCAL_SEO.md` for the off-site work that cannot be completed inside the static repo: Google Business Profile verification, citations, reviews, photos, Search Console, Bing Webmaster Tools and recurring content/review operations.

## Deployment

See `COOLIFY.md` for Coolify production settings.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.
