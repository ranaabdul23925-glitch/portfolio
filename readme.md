# Digital Services Portfolio Workspace

A multi-package TypeScript monorepo for a premium digital services portfolio website, supporting API infrastructure, shared schema generation, and database integration.

## Overview

This workspace combines:

- a Vite + React portfolio experience for a digital marketing and web development business
- an Express API server for backend services and future integrations
- generated API clients and Zod schemas from an OpenAPI spec
- a shared PostgreSQL/Drizzle data layer
- a pnpm workspace setup for coordinated development and type-checking

The main landing page is implemented in `artifacts/digital-services-portfolio`, and the backend services live under `artifacts/api-server`.

## Project Structure

```text
.
├── artifacts/
│   ├── api-server/                 # Express API server
│   ├── digital-services-portfolio/ # Main portfolio frontend
│   ├── mockup-sandbox/             # UI/mockup sandbox
│   └── ...
├── lib/
│   ├── api-client-react/           # Generated React API client
│   ├── api-spec/                   # OpenAPI source and generation config
│   ├── api-zod/                    # Shared Zod validation types
│   └── ...
├── db/                             # Drizzle ORM schema and DB config
├── scripts/                        # Workspace scripts
├── package.json                    # Root workspace config
├── pnpm-workspace.yaml              # pnpm workspace definition
├── tsconfig.base.json              # Shared TypeScript config
├── tsconfig.json                   # Root TS project references
├── readme.md                       # Project documentation
├── replit.md                       # Project notes / operational guide
└── ...
```

## Tech Stack

### Frontend
- React + TypeScript
- Vite
- Wouter routing
- Tailwind-inspired styling system
- shadcn/ui-style component primitives

### Backend
- Express 5
- Pino HTTP logging
- CORS and JSON parsing middleware

### Data and APIs
- PostgreSQL
- Drizzle ORM
- Zod validation
- OpenAPI specification with Orval code generation

### Tooling
- pnpm workspaces
- TypeScript 5.9
- esbuild for server bundling

## Main Application

The portfolio site presents services such as:

- Meta Ads management
- Social media management
- Web development
- E-commerce and landing pages
- Digital marketing strategy
- AI automation

It includes sections for about, services, process, portfolio, FAQ, and contact conversion flows.

## Prerequisites

Before running the project locally, make sure you have:

- Node.js 20+ (24 recommended based on the workspace setup)
- pnpm 10 or newer
- PostgreSQL access if you plan to use the database-backed features

## Installation

```bash
pnpm install
```

## Running the Project

### Start the frontend

```bash
pnpm --filter @workspace/digital-services-portfolio run dev
```

### Start the API server

```bash
pnpm --filter @workspace/api-server run dev
```

### Run the full type check

```bash
pnpm run typecheck
```

### Build the whole workspace

```bash
pnpm run build
```

## Regenerating API Types

If the OpenAPI spec changes, regenerate the client and schema artifacts:

```bash
pnpm --filter @workspace/api-spec run codegen
```

## Database Workflow

If database changes are being developed:

```bash
pnpm --filter @workspace/db run push
```

## Environment Variables

The project expects the following environment configuration for database-backed workflows:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

The API server also uses standard Node environment patterns such as `NODE_ENV` during local development.

## Development Notes

- Frontend content and conversion copy are primarily edited in `artifacts/digital-services-portfolio/src/App.tsx`
- Styling and layout are managed in `artifacts/digital-services-portfolio/src/index.css`
- API routes are defined in `artifacts/api-server/src/routes`
- Shared schemas and generated types are maintained under `lib/`
- Database models and migrations are configured in `db/`

## Notes

This project is structured as a reusable monorepo foundation for a client-facing digital services brand, with the frontend acting as the public-facing portfolio and the backend/data layers prepared for deeper integration over time.

## License

No explicit project license has been defined in the workspace yet.

