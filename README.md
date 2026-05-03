# Lockwood Website

Lockwood Technology Ltd marketing site, built on the Malipopay tech stack.

## Stack
- Next.js 16 (App Router)
- React 19, TypeScript 5
- Tailwind CSS v4 (`@theme inline`)
- Framer Motion 12
- Manrope (Google Fonts via `next/font`)
- Netlify deploy (`@netlify/plugin-nextjs`)

## Develop
```bash
yarn install
yarn dev
```
Site runs at http://localhost:3000.

## Build
```bash
yarn build
yarn start
```

## Pages
- `/` Home
- `/about` About Lockwood
- `/services` What we do
- `/work` Case studies
- `/careers` Careers
- `/contact` Contact form (Nodemailer via `/api/contact`)
- `/product-logos` Product brand reference
- `/products/{malipopay,wedding,link,housing,localhost,investors}`

## Environment
Copy `.env.example` to `.env.local` and fill SMTP credentials for the contact form.

## Brand
Source of truth for tokens: `src/app/globals.css` (`@theme inline`).
Primary `#1F49FF` (Lockwood Blue), font Manrope.
