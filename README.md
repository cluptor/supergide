# supergide.com

Marketing site for Supergide. React + Vite + Tailwind, pre-rendered to static HTML at build time so every page works without JavaScript.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/
npm run preview    # serve dist/ at http://localhost:4173
```

## Where things live

| Path | What |
|---|---|
| `src/pages/` | One file per page. Copy lives here. |
| `src/components/` | Nav, footer, section shell, email form, icons. |
| `src/components/mocks/` | The product mockups (hero frame, step cards, input modes). Pure HTML, no images. |
| `src/components/mocks/data.ts` | The example requests that rotate in the hero. |
| `src/routes.ts` | Page list with titles and descriptions, used for `<head>` and the sitemap. |
| `src/config.ts` | Form wiring: Tally form ids and the contact email. |
| `scripts/prerender.mjs` | Renders each route to `dist/<route>/index.html` and writes `sitemap.xml`. |
| `brand/` | Logo and moodboard files. Not shipped. |

## Before launch

- Set `FORMS.waitlist` and `FORMS.contact` in `src/config.ts` to the Tally form ids. Until then, forms open an email draft.
- Set `CONTACT_EMAIL` in `src/config.ts`.
- Replace the placeholder text on `/privacy` and `/terms`.
- Decide pricing tiers and update `src/pages/Pricing.tsx`.
