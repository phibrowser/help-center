# Initial setup notes

## Original requirement

Create a public GitHub repository under the `phibrowser` organization for a Help, FAQ, and Docs site. The site must use VitePress with pnpm, Prettier, Husky, and lint-staged. User-facing site content must live under `site/` so repository-level AI and handoff documentation can use `docs/` without colliding with the VitePress content tree.

The requested toolchain policy is minimum Node.js 24 and minimum pnpm 11, without maximum version caps or patch-level locks.

## Implementation

The project was initialized as `help-center`.

Key implementation details:

- VitePress content and configuration live under `site/`.
- `pnpm dev` runs `vitepress dev site --port ${PORT:-3000}`, so the default port is `3000` and the `PORT` environment variable can override it.
- Prettier is configured with an intentionally empty `.prettierrc` containing `{}`.
- Husky runs lint-staged from `.husky/pre-commit`.
- lint-staged formats staged files with `prettier --write --ignore-unknown`.
- `.npmrc` enables `engine-strict=true` so pnpm enforces the declared minimum engines.
- `.node-version` contains `24` as the baseline local Node.js major version.
- `package.json` declares `node >=24` and `pnpm >=11` as minimum-only engine ranges.
- Corepack-based package-manager pinning is intentionally not used.

During dependency installation, pnpm required approval for the `esbuild` build script used by the VitePress dependency chain. The approval is recorded in `pnpm-workspace.yaml` with `allowBuilds.esbuild: true`.

## Validation

The project should be validated with:

```sh
pnpm format:check
pnpm build
```

## Open issues

No open implementation issues are known at initial setup time. Future content structure can be expanded once Phi has finalized the Help, FAQ, and Docs information architecture.

## Future updates

When raising the minimum Node.js or pnpm major version, update all of these together:

- `.node-version`
- `package.json` `engines.node`
- `package.json` `engines.pnpm`
- This setup note, if the policy changes materially
