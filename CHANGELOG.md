# bedrock-did-context ChangeLog

## 5.0.0 - 2023-09-19

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- Use peer `@bedrock/jsonld-document-loader@4`. This version requires
  Node.js 18+.

## 4.0.0 - 2022-04-29

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`.

## 3.0.1 - 2022-04-03

### Fixed
- Fix main entry point in `package.json`.

## 3.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/did-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

### Removed
- **BREAKING**: Remove adding any constants to bedrock config system. If
  constants are needed, import them from `constants`.

## 2.1.0 - 2022-03-28

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.
- Update internals to use esm style and use `esm.js` to
  transpile to CommonJS.

## 2.0.3 - 2022-01-21

### Added
- Setup tests.

## 2.0.2 - 2021-09-15

### Changed
- Refactor constant and context import.

## 2.0.1 - 2021-09-15

### Fixed
- Restrict constant import to constants containing 'URL'.

## 2.0.0 - 2021-03-31

### Changed
- **BREAKING**: Use [did-context@3](https://github.com/digitalbazaar/did-context/blob/main/CHANGELOG.md#300---2021-03-30).

## 1.0.0 - 2020-02-25

- See git history for changes.
