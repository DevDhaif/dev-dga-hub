# dev-dga

[![npm](https://img.shields.io/npm/v/@dev-dga/react?label=%40dev-dga%2Freact)](https://www.npmjs.com/package/@dev-dga/react)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

React components for Saudi Arabia's DGA "Platforms Code" design system.
Bilingual (Arabic / English), RTL-native, dark-ready. MIT-licensed, free to use.

**Docs and live demos: [dev-dga-hub.vercel.app](https://dev-dga-hub.vercel.app)** ·
Storybook: [dev-dga.vercel.app](https://dev-dga.vercel.app)

> Independent implementation. Not affiliated with, nor endorsed by, the Saudi
> Digital Government Authority (DGA).

## Install

```bash
pnpm add @dev-dga/react @dev-dga/css @dev-dga/tokens
```

Setup guide: [dev-dga-hub.vercel.app/installation](https://dev-dga-hub.vercel.app/installation)

## Explore

- **Components** - the full gallery, live and themeable: [/components](https://dev-dga-hub.vercel.app/components)
- **Compliance** - every component mapped to the official DGA Platforms Code, with a coverage status: [/compliance](https://dev-dga-hub.vercel.app/compliance)
- **Accessibility** - the WCAG 2.2 AA conformance statement (self-assessed): [/accessibility](https://dev-dga-hub.vercel.app/accessibility) · [full statement](ACCESSIBILITY.md)
- **Arabic & RTL** - RTL as a first language, with live demos: [/rtl](https://dev-dga-hub.vercel.app/rtl)
- **Storybook** - [dev-dga.vercel.app](https://dev-dga.vercel.app)

## This repo

This is the docs site and the public issue tracker. The library source is
private; the packages ship on npm.

- Bugs and feature requests: [open an issue](https://github.com/DevDhaif/dev-dga-hub/issues)
- Docs, examples, and translation fixes: PRs welcome, see [CONTRIBUTING.md](CONTRIBUTING.md)
- Security reports: [SECURITY.md](SECURITY.md)

## Run the site locally

```bash
pnpm install
pnpm dev        # http://localhost:3100
pnpm build
pnpm typecheck
pnpm lint
```

Component docs live in `content/components/<slug>.md`, Arabic in
`content/i18n/<slug>.ar.md`. Examples are compiled and type-checked, so the
preview runs the same code it shows.

## License

MIT. See [LICENSE](LICENSE).
