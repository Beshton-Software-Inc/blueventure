# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server at http://localhost:3000
npm run build    # Production build
npm start        # Run the production build
npm run lint     # next lint (ESLint via eslint-config-next)
```

There is no test runner configured.

## Stack

Next.js 14 (App Router) + TypeScript (strict) + Tailwind CSS. Fonts: Plus Jakarta Sans (`font-sans`) / Sora (`font-display`). TS path alias `@/*` → repo root.

## Routing & content layout

Each marketing page is a single self-contained `page.tsx` under `app/<route>/`. Page copy is currently embedded in JSX rather than sourced from `data/` or a CMS — when editing content, edit the page file directly. The global chrome (`Navbar`, `Footer`) is mounted in `app/layout.tsx`.

Note the route names: the "OPC" page lives at `/one-person-company` (the README's `/opc` is stale), and the nav's "Join Us" CTA links to `/ai-workshop-spring-2026#register`.

### `/program-v2` is a chrome-less sub-site

`app/program-v2/layout.tsx` injects CSS that hides `#global-header` / `#global-footer` so this route can render its own `NavV2` and registration UI standalone. If you rename or restructure the global chrome, the override there may need updating.

## Registration links

All Luma registration URLs are centralized in `lib/links.ts` (`lumaLinks`, `defaultRegisterLink`). Update event URLs there rather than inline in pages — multiple CTAs across the site read from this module.

## Forms → Google Sheets pipeline

Two forms (`ContactForm`, `NewsletterForm`) submit to the Next.js API route `app/api/submit-form/route.ts`, which:

1. Rate-limits per IP (5 requests / 60s) using an in-memory `Map` — this resets on every cold start and does not work across serverless instances. Treat it as best-effort.
2. Validates `type` ∈ {`Contact Forms`, `Newsletter`}, email format, and (for contact) name/message/interest. `interest` must be one of `general | student | mentor | volunteer | sponsor | school` — keep `ContactForm.tsx` options aligned with `VALID_INTERESTS` in the route.
3. Forwards the JSON to a Google Apps Script web app whose URL is read from `process.env.GOOGLE_SHEETS_URL` (server-only, **not** `NEXT_PUBLIC_*`). The legacy docs (`README.md`, `QUICK_START.md`, `VERCEL_DEPLOYMENT.md`) still mention `NEXT_PUBLIC_GOOGLE_SHEETS_URL` — that name is wrong for the current code.

Client code calls `lib/submitToSheets.ts`, which only knows about `/api/submit-form`; never have client components hit the Apps Script URL directly.

The Apps Script setup (sheet tabs, headers, deployment) is documented in `GOOGLE_SHEETS_SETUP.md`.

## Styling conventions

Tailwind theme extensions live in `tailwind.config.ts`: `primary` (blue), `electric`, and `teal` palettes plus four named animations (`fade-in`, `slide-up`, `slide-in-right`, `float`). The recurring "Tech Optimism" gradient is `from-primary-600 to-electric-500`. `components/Section.tsx` is the standard `<section>` wrapper and supports optional `pattern` (dot pattern) and `gradient` (mesh) backgrounds whose CSS lives in `app/globals.css`.
