# Phi Help

Help and FAQ for Phi Browser.

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

User-facing Help and FAQ content lives in `site/`.

Repository handoff notes and AI implementation documentation live in `docs/` so they do not conflict with the VitePress content tree.

## Validation

```sh
pnpm format:check
pnpm build
```

## License

This repository is dual-licensed; see [`LICENSE`](LICENSE) for the overview.

- **Documentation content** (`site/**/*.md`) is licensed under
  [CC BY-NC-SA 4.0](LICENSE-CONTENT). You may quote and adapt it as long as you
  credit Phinomenon Inc., keep it non-commercial, and share derivatives under
  the same license.
- **Site code** (the VitePress theme, configuration, and tooling) is licensed
  under the [MIT License](LICENSE-CODE).
- The **Phi** and **Phi Browser** names and logos are trademarks of
  Phinomenon Inc. and are not covered by either license.
