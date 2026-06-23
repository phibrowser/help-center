# Help Center

Help, FAQ, and documentation site for Phinomenon.

## Requirements

- Node.js 24 or newer
- pnpm 11 or newer

The project intentionally uses minimum engine ranges and does not set maximum versions or patch-level locks.

## Development

Install dependencies:

```sh
pnpm install
```

Start the VitePress dev server:

```sh
pnpm dev
```

The dev server uses port `3000` by default. Set `PORT` to override it:

```sh
PORT=4000 pnpm dev
```

## Site content

User-facing Help, FAQ, and Docs content lives in `site/`.

Repository handoff notes and AI implementation documentation live in `docs/` so they do not conflict with the VitePress content tree.

## Validation

```sh
pnpm format:check
pnpm build
```
