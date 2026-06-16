# Oshanodes Agro

A small Next.js (App Router) site for Oshanodes Agro — an agricultural service and product showcase. Built with TypeScript and Tailwind CSS, and using Framer Motion for UI micro-interactions.

## Features

- Next.js App Router with TypeScript
- Tailwind CSS for styling
- Reusable components for products, blog, and contact form
- Simple content data in `src/data`

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting started

Prerequisites: Node.js 18+ and npm

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Run the linter:

```bash
npm run lint
```

## Project structure (key files)

- `src/app/` — Next.js route pages (home, about, blog, contact, etc.)
- `src/components/` — UI components (ContactForm, Navbar, ProductCard, blog components)
- `src/data/` — Simple content data (articles, products)
- `src/styles/` — Global CSS and Tailwind setup
- `public/` — Static assets (images, icons)

## Notes

- Contact page uses `ContactForm` component at `src/components/ContactForm.tsx` and displays site contact details on `src/app/contact/page.tsx`.
- Edit content in `src/data/articles.ts` for blog articles and in components under `src/components/blog` for blog UI.

## Next steps

- Review this README and tell me if you'd like a short deploy guide or badges added.

---

Updated to reflect the current project layout and dev scripts.
