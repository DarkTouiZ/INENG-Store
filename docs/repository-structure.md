# Repository Structure

The repository is organized around source code, static assets, and documentation.

```text
.
├── docs/
│   ├── architecture.md
│   ├── deployment.md
│   ├── development.md
│   └── repository-structure.md
├── public/
│   ├── Assets/
│   ├── BlackFriday.svg
│   ├── HolidayPic.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── BestSeller.js
│   │   │   ├── Featured.js
│   │   │   └── NewArrival.js
│   │   ├── layout/
│   │   │   ├── Center.js
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── product/
│   │   │   ├── ModelSelect.js
│   │   │   └── ProductCard.js
│   │   └── ui/
│   │       └── Button.js
│   ├── data/
│   │   └── products.js
│   └── pages/
│       ├── _app.js
│       ├── _document.js
│       ├── cart.js
│       ├── index.js
│       └── api/
│           └── hello.js
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

## Naming Conventions

- Component files use PascalCase, such as `ProductCard.js`.
- Data modules use descriptive lower-case names, such as `products.js`.
- Public asset paths should be stable because product data references them directly.

## Legacy Folders

The original repository also includes standalone static prototype folders such as `Junoir` and `ing`. They are not part of the Next.js runtime path. If they are still useful, consider moving them under a documented `legacy/` folder in a separate cleanup after large image assets are reviewed.
