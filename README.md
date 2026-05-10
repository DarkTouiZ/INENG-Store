# iNeng Store

iNeng Store is a simple e-commerce frontend prototype for showcasing iNeng shirt collections. The application is built with Next.js, React, and styled-components, and is deployed on Vercel.

Live site: [https://ineng-store.vercel.app](https://ineng-store.vercel.app)

## Features

- Home page with featured products and promotional sections
- New-arrival product cards backed by shared product data
- Cart page prototype with quantity and checkout controls
- Reusable layout, product, and UI components
- Static product imagery served from `public/Assets`

## Tech Stack

- Next.js 14
- React 18
- styled-components
- Tailwind/PostCSS config available for future utility styling
- Vercel hosting

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Start the production build:

```bash
npm start
```

## Project Structure

```text
.
├── docs/                     # Project documentation
├── public/                   # Static images and SVG assets
│   └── Assets/               # Product image collections
├── src/
│   ├── components/
│   │   ├── home/             # Homepage sections
│   │   ├── layout/           # Page layout and navigation
│   │   ├── product/          # Product display controls
│   │   └── ui/               # Shared UI primitives
│   ├── data/                 # Product catalogue data
│   └── pages/                # Next.js pages-router routes
├── next.config.js
├── package.json
└── tailwind.config.js
```

See [docs/repository-structure.md](docs/repository-structure.md) for more detail.

## Documentation

- [Architecture](docs/architecture.md)
- [Development Guide](docs/development.md)
- [Repository Structure](docs/repository-structure.md)
- [Deployment](docs/deployment.md)

## Team

- 66070501041 Phubordin Ramsiri
- 66070501060 Adisorn Parama
- 66070501063 Ingkasurat Thapin
- 66070501080 Monsicha Konteing
