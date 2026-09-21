# Digital Services Portfolio

A premium one-page portfolio and enquiry website for presenting digital marketing, Meta Ads, social media, web development, e-commerce and AI automation services.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/digital-services-portfolio/src/App.tsx` — page structure, editable service copy, contact form interaction, FAQ, portfolio filters and CTAs.
- `artifacts/digital-services-portfolio/src/index.css` — visual system, responsive layout and motion styles.
- `artifacts/digital-services-portfolio/.replit-artifact/artifact.toml` — app artifact and web workflow metadata.

## Architecture decisions

- This is a frontend-only presentation site; no database or API is needed for the first release.
- All personal proof points, projects, testimonials, pricing and contact details remain editable placeholders until the owner provides real information.
- The contact form currently provides an in-page success state and is ready to connect to a preferred form endpoint later.
- The WhatsApp CTA uses the requested placeholder number so replacing it is a single edit.

## Product

- Responsive personal services website for Pakistan and international clients.
- Presents Meta Ads, social media management, web development, digital marketing and AI automation services.
- Includes process, benefits, quote categories, portfolio placeholders, testimonial placeholders, FAQ and contact enquiry flow.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
