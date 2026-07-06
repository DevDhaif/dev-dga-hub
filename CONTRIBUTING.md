# Contributing

The component library (`@dev-dga/*`) is developed in a private repo and
published to npm. This public repo holds the docs site and the issue tracker
for both.

## Bugs

Use the bug report template. Include the package version, minimal steps to
reproduce, and what you expected. For RTL or Arabic bugs, say which language
and direction you were using.

## Feature requests

Use the feature request template. For new components, link the DGA Platforms
Code spec or add a screenshot.

## Pull requests

PRs here can change the docs site only: component docs in
`content/components/*.md`, Arabic in `content/i18n/*.ar.md`, and site fixes.
Keep them small. Run `pnpm build`, `pnpm typecheck`, and `pnpm lint` first.

There are no library code PRs here (the source is private). Report library
problems as issues; fixes land in the next npm release.

## Style

Plain English, short sentences, no em dashes. Arabic should read naturally.

## Security

Do not open a public issue. See [SECURITY.md](SECURITY.md).
