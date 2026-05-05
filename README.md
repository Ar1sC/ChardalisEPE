# Chardalis EPE static website

Static multi-page website for `chardalisepe.gr`.

## Pages

- `index.html`
- `ypiresies.html`
- `anakyklosi-metallon.html`
- `aposyrsi-autokiniton.html`
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
- FAQPage JSON-LD on FAQ page
- Internal linking across service pages
- Privacy Policy page for contact-form data handling
- WebP image assets with PNG fallback and JPEG Open Graph image

## Deployment

See `COOLIFY.md` for Coolify production settings.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173/`.
