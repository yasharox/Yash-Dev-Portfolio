# Dev Portfolio

A minimal, editorial black & white developer portfolio built with React + Vite.

## Features

- Custom cursor with blend mode
- Scroll-triggered fade-in animations
- Animated marquee ticker
- Hover-fill stack grid
- Smooth scroll navigation
- Sticky nav with blur backdrop
- Fully responsive

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool
- **Google Fonts** — Bebas Neue, JetBrains Mono, Fraunces
- **CSS** — Pure CSS animations, no UI framework

## Getting Started

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to vercel.com → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

## Customisation

Edit `src/App.jsx` to update:
- Your name in `<Nav>` and `<Hero>`
- Projects in the `PROJECTS` array
- Work history in the `EXPERIENCE` array
- Tech stack in the `STACK` array
- Contact links in the `Contact` component
