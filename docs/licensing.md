# Licensing

Added on 2026-06-25.

## Why

The repository shipped with no license declaration at all — no `LICENSE` file,
no `license` field in `package.json`, no mention in the README. With nothing
stated, the default is "all rights reserved", so others could not legally quote
or reuse the Help content even though that content is meant to be referenceable
(with attribution) by the community.

The goal was to let people quote and adapt the Help/FAQ content as long as they
credit the source, keep it non-commercial, and share alike — i.e. CC BY-NC-SA
4.0 — while keeping the brand and the small amount of site code on appropriate
terms.

## How

The repository mixes three kinds of material, so it is dual-licensed with a
trademark carve-out rather than placed under a single license:

| Material                                                   | License                         |
| ---------------------------------------------------------- | ------------------------------- |
| Documentation content (`site/**/*.md`, embedded prose/img) | CC BY-NC-SA 4.0                 |
| Site code (`site/.vitepress/`, root config, `docs/`)       | MIT                             |
| Phi names and logos (`site/public/`, "Phi"/"Phi Browser")  | Trademarks, all rights reserved |

CC licenses are not recommended by Creative Commons for software, which is why
the VitePress theme/config is MIT rather than CC. Trademarks are excluded from
both licenses because brand assets should not be sublicensed alongside content.

Files added/changed:

- `LICENSE` — top-level overview: the dual-license split plus the trademark
  carve-out, pointing to the two full texts.
- `LICENSE-CONTENT` — the verbatim official CC BY-NC-SA 4.0 legal code,
  fetched from `creativecommons.org/licenses/by-nc-sa/4.0/legalcode.txt`.
- `LICENSE-CODE` — the MIT License text.
- `package.json` — added `"license": "SEE LICENSE IN LICENSE"` (npm's
  recommended value for multi-file / non-SPDX dual licensing).
- `README.md` — a `## License` section summarizing the split.
- `.prettierignore` — added `LICENSE`, `LICENSE-CONTENT`, `LICENSE-CODE` so
  Prettier does not rewrite the verbatim legal texts.

Copyright/attribution holder: **Phinomenon Inc.**, year 2026.

## Open issues

None.
