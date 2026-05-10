# Architecture

This project uses the Next.js pages router. Route files live in `src/pages`, while reusable UI is organized under `src/components`.

## Runtime Flow

1. `src/pages/_app.js` applies global styles with `styled-components`.
2. `src/pages/index.js` renders the storefront homepage.
3. Homepage sections compose layout, product, and UI components.
4. Product cards read catalogue data from `src/data/products.js`.
5. Static product assets are loaded from `public/Assets`.

## Main Areas

### Pages

- `src/pages/index.js` is the storefront landing page.
- `src/pages/cart.js` is a cart prototype.
- `src/pages/api/hello.js` is the default sample API route and can be removed if no API route is needed.

### Components

- `src/components/layout` contains shared page shell pieces such as the navbar, footer, and centered content wrapper.
- `src/components/home` contains homepage-specific sections.
- `src/components/product` contains product display components.
- `src/components/ui` contains generic UI primitives.

### Data

`src/data/products.js` exports the product catalogue used by product cards. Each product includes:

- `id`
- `name`
- `description`
- `price`
- `model`
- `images.frontView`
- `images.backView`

Image paths should match files under `public/Assets` exactly, including capitalization.

## Asset Notes

The repository contains many large product images. Keep new assets compressed before committing them, because oversized images make cloning and deployment slower.
