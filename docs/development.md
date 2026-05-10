# Development Guide

## Requirements

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Useful Commands

```bash
npm run dev
npm run build
npm start
npm run lint
```

## Development Workflow

1. Add route-level pages in `src/pages`.
2. Add reusable UI in the appropriate `src/components` subfolder.
3. Add or update product records in `src/data/products.js`.
4. Put static images in `public/Assets`.
5. Run `npm run build` before deployment.

## Product Data Guidelines

- Keep product IDs unique.
- Keep model names consistent with image naming where possible.
- Use exact image capitalization.
- Store public image paths as `/Assets/...`.

## Styling Guidelines

The project currently uses `styled-components` for component styles. Prefer colocated styled components for new UI so the codebase stays consistent.

Tailwind is configured but not actively used in the current components. If Tailwind is adopted later, document the convention and avoid mixing both approaches within the same component.
