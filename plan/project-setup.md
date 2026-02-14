# Project Setup Plan

## NextWorkforce — Static Website

**Stack:** Vite · React · Shadcn UI · Tailwind CSS  
**Type:** Static website  
**Pages:** Home, About Us, Services, Contact

---

## Phase 1: Initial Project Scaffolding — ✅ DONE

### 1.1 Create Vite + React + TypeScript project
```bash
npm create vite@latest . -- --template react-ts
```
- Use `.` to scaffold in current directory (or specify project name)
- Choose **React** and **TypeScript** when prompted

### 1.2 Install dependencies
```bash
npm install
```

---

## Phase 2: Tailwind CSS Setup — ✅ DONE

### 2.1 Install Tailwind (v4)
- Tailwind v4 + autoprefixer + postcss installed
- `@tailwindcss/vite` plugin installed

### 2.2 Configure Vite
- `@tailwindcss/vite` plugin added to `vite.config.ts`
- Path alias `@` → `./src` configured

### 2.3 Add Tailwind to CSS
- `src/index.css` uses `@import "tailwindcss"`

---

## Phase 3: Shadcn UI Setup — ✅ DONE

### 3.1 Install Shadcn
```bash
npx shadcn@latest init -d -y
```

### 3.2 Configured
- **Style:** New York
- **Base color:** Neutral
- **CSS variables:** Yes
- **components.json:** ✅
- **src/lib/utils.ts:** ✅
- **index.css:** Shadcn CSS variables, theme, base styles added

### 3.3 Install components (as needed)
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add navigation-menu
# Add more components when building pages
```

---

## Phase 4: Project Structure — ✅ DONE

### 4.1 Folder structure
```
src/
├── components/
│   ├── ui/           # Shadcn components
│   ├── layout/       # Header, Footer, etc.
│   └── sections/     # Page-specific sections
├── pages/
│   ├── Home.tsx
│   ├── AboutUs.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── lib/
│   └── utils.ts
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

### 4.2 Routing (client-side) — ✅ DONE
- **React Router** installed and configured
- Layout with nested routes (Header + Footer wrap all pages)

---

## Phase 5: Pages & Content

### 5.1 Pages to implement

| Page      | Route    | Purpose                          |
|----------|----------|----------------------------------|
| Home     | `/`      | Landing, hero, featured content  |
| About Us | `/about` | Company info, mission, team      |
| Services | `/services` | Offerings, packages           |
| Contact  | `/contact`  | Form, address, map link      |

### 5.2 Shared layout
- **Header:** Logo, navigation links, optional CTA
- **Footer:** Links, social, copyright
- Wrap all pages in a common layout component

---

## Phase 6: Configuration Checklist

- [ ] `vite.config.ts` — base path if deploying to subpath
- [x] `tsconfig.json` — path alias `@/*` for cleaner imports ✅
- [ ] `index.html` — meta tags, title, favicon
- [x] ESLint (included) for code quality

---

## Phase 7: Build & Deploy

### 7.1 Local dev
```bash
npm run dev
```

### 7.2 Production build
```bash
npm run build
```
- Output: `dist/` folder (static files)

### 7.3 Deploy options (static)
- Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.
- No server required — upload `dist/` contents

---

## Order of Execution (Recommended)

1. **Vite + React + TS** — base project
2. **Tailwind** — styling foundation
3. **Shadcn init** — component system
4. **Project structure** — folders, layout, routing
5. **Shared layout** — Header + Footer
6. **Pages** — Home → About → Services → Contact
7. **Shadcn components** — add per page needs
8. **Polish** — responsiveness, copy, assets

---

## Notes

- Keep the site static; no backend or API calls unless needed later
- Use Shadcn components sparingly to keep bundle size low
- Consider lazy loading routes if using React Router
- Plan favicon and basic SEO meta tags from the start
