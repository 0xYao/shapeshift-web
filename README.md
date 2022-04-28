# ShapeShift DAO Web Client

[![ShapeShift](https://img.shields.io/badge/ShapeShift%20DAO-Web-386ff9?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTdweCIgaGVpZ2h0PSI2MnB4IiB2aWV3Qm94PSIwIDAgNTcgNjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5NYXJrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ik1vY2stVXBzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTGFuZGluZy1QYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzY5LjAwMDAwMCwgLTc2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkUiPgogICAgICAgICAgICA8ZyBpZD0iTmF2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OS4wMDAwMDAsIDY5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlNTX2hvcml6b250YWxfV2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5MC4wNTY4MDAsIDcuNTgxNDUxKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hcmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNDM0Mzk1LCAwLjM1NjgwOCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTEuNjY5Njg1Myw1LjEwMzg0NDE5IEw0OC45Njk3MzM5LDIxLjI5OTQ3NzkgTDM5LjM3MDY4MjcsOS45OTYyMTIxMiBMNTEuNjY5Njg1Myw1LjEwMzg0NDE5IFogTTQ5LjAyNzkzMjYsMjguMjY1MTUxNSBMNTEuNDMwODM4MSwzNy4xNDE1NjQzIEwzMy4wNTcyOTQxLDQyLjIwNDQxNzUgTDQ5LjAyNzkzMjYsMjguMjY1MTUxNSBaIE05LjAzMTAzMjQzLDIzLjgwNDEyMDYgTDE4Ljg4MTk2NzMsMTAuOTI3ODI1NiBMMzUuOTg5MTA4OSwxMC45Mjc4MjU2IEw0Ni45MjM0Njk3LDIzLjgwNDEyMDYgTDkuMDMxMDMyNDMsMjMuODA0MTIwNiBaIE00NS42NTcwNjcyLDI2Ljk4NTU4MDUgTDI3Ljg0NTAyMzcsNDIuNTMwOTQ4IEw5LjcwMjg3NzU1LDI2Ljk4NTU4MDUgTDQ1LjY1NzA2NzIsMjYuOTg1NTgwNSBaIE0xNS41ODMyNjgzLDEwLjAwNTUyODMgTDYuNzgwODQwMTUsMjEuNTEwOTU0MSBMNC4wNzc2Mjk2Myw1LjE2NjI2MjI5IEwxNS41ODMyNjgzLDEwLjAwNTUyODMgWiBNMjIuNTY5NDMzMyw0Mi4xOTkyOTM2IEw0LjAyMDgyNzc2LDM3LjE0NTc1NjYgTDYuNTYyNDc4ODQsMjguNDg0MDgwNyBMMjIuNTY5NDMzMyw0Mi4xOTkyOTM2IFogTTI1Ljk5NDMwNjksNDYuNDI5NzUwMiBMMjIuNDkyNjExMSw1MC4yODQzMDA4IEMxOS41MjU0MTE1LDQ3LjQ2NDc3MjcgMTYuMjYzMDI4NCw0NC45NjEwNjE2IDEyLjc4MDQyMTcsNDIuODI5NTMwMSBMMjUuOTk0MzA2OSw0Ni40Mjk3NTAyIFogTTQyLjk3ODA2NzQsNDIuNzcwODM4NSBDMzkuNDk1NDYwNiw0NC45MzY4Mzk3IDM2LjI0MDk5MjYsNDcuNDczMTU3MiAzMy4yOTI0MTY2LDUwLjMxOTcwMjEgTDI5LjcxNjY5MjEsNDYuNDI0NjI2MyBMNDIuOTc4MDY3NCw0Mi43NzA4Mzg1IFogTTU1LjczNDI3ODQsMC4wNjI4ODM5MDY2IEwzNi40MTk3Nzg4LDcuNzQ2MzY1NjggTDE4LjQxNzc3NSw3Ljc0NjM2NTY4IEw5Ljk0NzU5ODNlLTE0LC04LjE3MTI0MTQ2ZS0xNCBMNC4xODM3ODM5NiwyNS4yOTU2MzM3IEwwLjE2NjIxNTMyMSwzOC45ODgwMjIxIEwxMC42NDgwMjM1LDQ1LjI1NzMxNDcgQzE1LjYxMDczODEsNDguMjI1OTAwOSAyMC4wNTYxODMxLDUxLjk0MDI0MzcgMjMuODYwNTExOSw1Ni4yOTY0NjgxIEwyNy45NDE4NjYzLDYwLjk2OTkwNjggTDMyLjIyNTI4NjMsNTYuMDU1MTgwMiBDMzUuOTAwNjQ2OSw1MS44Mzc3NjYyIDQwLjE4MDgwNzgsNDguMjE3NTE2NCA0NC45NDY1NzgyLDQ1LjI5NDU3OTIgTDU1LjIyNTg1NTEsMzguOTg4MDIyMSBMNTEuNTIzOTU1OSwyNS4zMTQyNjYgTDU1LjczNDI3ODQsMC4wNjI4ODM5MDY2IEw1NS43MzQyNzg0LDAuMDYyODgzOTA2NiBaIiBpZD0iRmlsbC0xNiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)](https://shapeshift.com) [![ShapeShift](https://img.shields.io/badge/License-MIT-brightgreen)](https://github.com/shapeshift/web/blob/develop/LICENSE.md) [![ShapeShift](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/shapeshift/web/pulls) [![gitlocalized ShapeShift](https://gitlocalize.com/repo/7212/whole_project/badge.svg)](https://gitlocalize.com/repo/7212/whole_project?utm_source=badge)
[![ShapeShift](https://img.shields.io/discord/539606376339734558.svg?label=discord&logo=discord&logoColor=white)](https://discord.gg/shapeshift)

## Table Of Contents

- [Helpful Docs](#helpful-docs)
- [Resources](#resources)
- [Dependencies](#dependencies)
- [Developer Onboarding](#developer-onboarding)
- [Commands](#commands)
- [Linking local dependencies](#linking)

## Helpful Docs

- [Architecture](docs/architecture.md)
- [File Structure](docs/file-structure.md)
- [Folder Structure](docs/folder-structure.md)
- [Globally Shared Code](docs/globally-shared-code.md)
- [State Management](docs/state-management.md)
- [Styles](docs/styles.md)
- [Testing](docs/testing.md)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Docs repo

- [ShapeShift Docs](https://docs.shapeshift.com/)

## Recommended tooling
- [hdwallet](https://github.com/shapeshift/hdwallet)
- [lib](https://github.com/shapeshift/lib)
- [unchained](https://github.com/shapeshift/unchained)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended)
- [gh](https://cli.github.com/) GitHub CLI (recommended)

## Quick Start

[WSL](https://docs.microsoft.com/en-us/windows/wsl/install) is recommended for Windows. Linux and macOS work out of the box.

```
gh repo clone shapeshift/web # clone using GitHub CLI
nvm use # optional - uses recommended Node version from .nvmrc
yarn # install dependencies
cp sample.env .env # add required environment variables
yarn dev # run the dev server on localhost:3000
```

## Commands

```
yarn dev
```
Runs the app in the development mode with hot reloading on [http://localhost:3000](http://localhost:3000) - optionally `yarn dev:silent` runs without automatically launching a browser.

```
yarn test:dev
```
Launches the test runner in the interactive watch mode.

```
yarn test
```
Runs the unit test suite and generates a test coverage report, available at `coverage/lcov-report/index.html`

```
yarn test:cypress
```
Starts Cypress E2E testing with GUI.

```
yarn test:cypress:headless
```
Headless version of Cypress E2E tests.

```
yarn build
```
Builds the app for production to the `build` folder.

```
yarn local-ci
```
Runs `yarn lint && yarn type-check && yarn test && yarn build` which covers most of the things that will fail in CI.

```
yarn storybook
```
Runs [Storybook](https://storybook.js.org/) on [localhost:6006](http://localhost:6006) (requires `yarn dev:silent` running at the same time).

## Advanced

Many contributions will require local development on dependent repos. Depending on your contribution you may require one or more of the following.

### Dependencies
- [lib](https://github.com/shapeshift/lib)
- [hdwallet](https://github.com/shapeshift/hdwallet)
- [unchained](https://github.com/shapeshift/unchained)

### Linking

If you're developing locally in this `web` repository, and need to make changes affecting packages in `lib`
or `unchained` (backend), use the following steps to link packages locally for developing.
If your changes only touch `web` these steps are not necessary.

**Initial, one-off setup:**

1. Clone the `lib` repo, `cd` into it, and run `yarn build`
1. From `lib`, run `yarn link`
1. Clone `unchained`, `cd` into it, and run `yarn build`
1. From `unchained`, `cd packages/client` and `yarn link`, then do the same from `packages/parser`

**When working in `web`, and using local changes in `lib` or `unchained`:**

1. Run `yarn link-packages` in `web` to use local versions of `lib` and `unchained` - now your `web`'s chain-adapters have a symlink to your `lib`'s.
1. `yarn show-linked-packages` will show what's currently linked
1. Once you're done developing locally, run `yarn unlink-packages` to use published upstream versions

## Contributing

1. [Fork the repo](https://github.com/shapeshift/web/fork) and create a PR.
2. Ensure you've followed the guidelines in [CONTRIBUTING.md](https://github.com/shapeshift/web/blob/main/CONTRIBUTING.md); in particular, make sure that the title of your PR conforms to the Conventional Commits format.
3. Optional - ping `@W-Engineering` in `#engineering-prs` in [Discord](https://discord.gg/shapeshift) for a more expedient review.

## Releases

See [the release process docs](https://docs.shapeshift.com/general-information/release) for full guidance on how to release a version of the app.
