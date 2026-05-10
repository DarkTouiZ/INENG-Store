# Deployment

The app is designed for Vercel, which supports Next.js without custom server configuration.

## Vercel Settings

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: managed by Next.js

## Production Checklist

- Run `npm run build`.
- Confirm all product images referenced in `src/data/products.js` exist under `public/Assets`.
- Check that external product-detail links still point to the correct deployed apps.
- Review large image sizes before pushing new assets.

## Environment Variables

No environment variables are required for the current frontend prototype.

Add environment variables only when the app starts using external APIs, authentication, or server-side secrets.
