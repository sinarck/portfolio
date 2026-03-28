# Portfolio

A TanStack Start portfolio with static prerendering and local TypeScript-backed content.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Development

```bash
pnpm install
pnpm dev
```

Content lives in `src/config/` and domain types live in `src/types/`.

Required public env vars:

```bash
VITE_CONTACT_EMAIL="you@example.com"
VITE_SITE_URL="https://your-domain.com"
```

## Build

```bash
pnpm build
pnpm preview
```

`pnpm build` prerenders the static routes discovered by TanStack Start.
