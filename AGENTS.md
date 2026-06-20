# clientKashyap

A client website project built with Next.js 14 and Tailwind CSS. The application lives inside the `kashyap_website/` subdirectory.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** yarn

## Setup

```bash
cd kashyap_website
yarn install
# or
npm install
```

## Build / Run / Test

```bash
# Development server
yarn dev
# or
npm run dev

# Production build
yarn build

# Start production server
yarn start

# Lint
yarn lint
```

## Project Structure

```
kashyap_website/      # Main application root
  src/
    app/              # Next.js App Router pages and layouts
  public/             # Static assets
  next.config.mjs     # Next.js configuration
  tailwind.config.ts  # Tailwind CSS configuration
  tsconfig.json       # TypeScript configuration
```

## Architecture & Key Files

- Entry point: `kashyap_website/src/app/` (App Router structure).
- All commands must be run from inside the `kashyap_website/` subdirectory.

## Conventions & Notes for Agents

- The repo root contains only `kashyap_website/`, `node_modules/`, `yarn.lock`, and a `README.md` — all app code is under `kashyap_website/`.
- No test suite is present.
- No backend API routes are configured.
- Tailwind CSS is used for all styling; avoid adding external CSS frameworks.
