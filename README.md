# Muhammad Arsalan, personal profile site, v2

A custom Next.js portfolio/profile site built from the supplied LinkedIn profile PDF.

## Positioning
The site centers the strongest supported story in the source material: Industrial Engineering applied to operational performance, reliability, process optimization, ERP workflows and data-driven improvement.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy

The project is designed for Vercel or another Node-compatible host. Next.js App Router is used.

## Content maintenance

Profile data is currently kept in structured constants in `app/page.tsx`. For a longer-term setup, move these into `data/profile.ts` or JSON files so an AI coding assistant can update content with less risk.

## Source basis
Content is based on the supplied four-page LinkedIn profile PDF. Unsupported employers, dates, achievements and credentials were not added.
