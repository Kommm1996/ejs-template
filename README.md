# ejs-template

[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](.nvmrc)
[![Pnpm](https://img.shields.io/badge/pnpm-%3E%3D8-F69220?logo=pnpm)](package.json)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](#contributing)

[中文](./README_CN.md)

> A modern template for compiling HTML using EJS — powered by Webpack 5, Tailwind CSS 3, GSAP, Swiper, and TypeScript.

---

## ✨ Features

- **EJS templating** — Modular HTML with layouts, includes, and data injection
- **Webpack 5** — Auto-discovers EJS pages, HMR dev server, asset bundling
- **Tailwind CSS 3** — Utility-first styling with dark mode support
- **GSAP** — Scroll-triggered animations and smooth scrolling
- **Swiper** — Touch-enabled carousels with breakpoint support
- **CountUp.js** — Animated number counters
- **Petite-Vue** — Lightweight reactivity (dark mode toggle, scroll-to-top)
- **TypeScript** — Type-safe JavaScript with esbuild for fast builds
- **Auto-deploy** — GitHub Actions CI/CD to GitHub Pages
- **Prettier + ESLint** — Consistent code formatting

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/Kommm1996/ejs-template.git
cd ejs-template

# 2. Install dependencies (pnpm recommended)
pnpm install
# or: npm install (remove "preinstall" script from package.json first)

# 3. Start dev server (HMR at http://localhost:8080)
pnpm dev

# 4. Build for production
pnpm build    # output goes to dist/
```

> **Note:** This template enforces pnpm via a `preinstall` hook. If you prefer npm or yarn, remove the `"preinstall"` line from `package.json` first.

---

## 📁 Project Structure

```
ejs-template/
├── .github/workflows/      # GitHub Actions — auto-deploy to Pages
├── public/                 # Static assets (served as-is)
│   └── img.jpg             # Placeholder image
├── src/
│   ├── ejs/                # EJS template files (.ejs)
│   │   ├── layout/         # Reusable layout partials
│   │   │   ├── html-start.ejs
│   │   │   ├── html-end.ejs
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── index.ejs       # Page template (add more as needed)
│   ├── js/                 # TypeScript entry and modules
│   │   ├── index.ts        # Main entry — imports all modules
│   │   ├── gsap.ts         # GSAP scroll animations
│   │   ├── swiper.ts       # Swiper carousel
│   │   ├── countup.ts      # CountUp number animations
│   │   └── utilities.ts    # IntersectionObserver helpers
│   ├── css/
│   │   └── input.css       # Tailwind entry + custom CSS variables
│   └── types/              # Type declarations
│       └── smoothscroll.d.ts
├── data-file.json          # Shared data injected into EJS templates
├── webpack.config.js       # Webpack configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── scripts/
    └── build-test.js       # Build verification test (pnpm test)
```

---

## 📄 Adding a New Page

1. Create a new `.ejs` file in `src/ejs/`:

```ejs
<%- include('./layout/header.ejs', {title: 'My Page'}) %>
<main>
  <section class="container mx-auto px-5 my-10">
    <h1 class="text-3xl font-bold">Hello, World!</h1>
  </section>
</main>
<%- include('./layout/footer.ejs') %>
```

2. Add your page title in `data-file.json`:

```json
{
  "indexTitle": "Home",
  "myPageTitle": "My Page"
}
```

3. Webpack automatically picks it up — just refresh!

---

## 🧪 Testing

```bash
# Run build verification (builds project + checks output files)
pnpm test

# Lint TypeScript files
pnpm lint

# Format code with Prettier
pnpm format
```

---

## 🌐 Previewing the Production Build

```bash
pnpm build
pnpm serve   # serves dist/ on http://localhost:8080
```

---

## 🎨 Customization

### Colors & Dark Mode

Edit CSS variables in `src/css/input.css`:

```css
:root {
  --background: 210 40% 98%;
  --primary: 199 89% 48%;
  /* ... */
}
html.dark {
  --background: 222 47% 11%;
  /* ... */
}
```

### Fonts & Tailwind Extensions

Edit `tailwind.config.js` to add custom fonts or extend the design system.

---

## 🤝 Contributing

PRs are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
