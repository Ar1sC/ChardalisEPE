# Coolify deployment

Use these settings for `chardalisepe.gr`.

## Source

- Repository: `git@github.com:Ar1sC/ChardalisEPE.git`
- Branch: `main`
- Base directory: `/`

## Build

- Build pack: `Static`
- Publish directory: `/`
- Build command: leave empty
- Start command: leave empty
- Server: Nginx/static

## Domain

- Primary domain: `chardalisepe.gr`
- Add `www.chardalisepe.gr` only if DNS will point it to Coolify too
- Enable HTTPS / Let's Encrypt
- Force HTTPS redirect

## Required before production deploy

- Replace `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` in `epikoinonia.html`
- Replace placeholder phone/email/address/service areas in all pages and JSON-LD
- Confirm DNS A/AAAA or CNAME records point to the Coolify server
- Submit `https://chardalisepe.gr/sitemap.xml` in Google Search Console
