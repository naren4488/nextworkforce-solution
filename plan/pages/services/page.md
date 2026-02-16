# Service Detail Pages Plan

> Service detail pages only — no dedicated Services listing page.  
> **Routes:** `/services/1` (Training), `/services/2` (Managed Services)  
> **Redirect:** `/services` → `/services/1`

---

## 1. Content Overview

### Service 1: UKG Workforce Management Training (`/services/1`)

- **Purpose:** To build globally relevant, project-ready UKG Workforce Management capability through structured, enterprise-aligned training programs.
- **Overview:** Designed for professionals on UKG, consultants transitioning, organizations upskilling; package-based, outcome-oriented.
- **Training Approach:** 4 bullets (structured curriculum, practical config, enterprise use cases, global alignment)
- **Functional Coverage:** 12 bullet points (timekeeping, accruals, security, etc.)
- **Outcomes:** 4 bullet points (configure, understand, operate, support)
- **Image:** From assets (`Service 1Training.png`)

### Service 2: UKG Workforce Optimization & Managed Services (`/services/2`)

- **Purpose:** To ensure stability, accuracy, and continuous improvement of live UKG Workforce Management environments.
- **Overview:** Designed for orgs post-implementation; 6 bullets (stabilization, support, optimization, etc.); extension of internal teams.
- **Engagement Model:**
  - **Principles:** 4 bullets
  - **Phases:** Stabilization, Optimization, Steady-State (each with bullets)
  - **Scope of Support:** 5 bullets
- **Image:** From assets (`Service 2.png`)

---

## 2. Layout & Structure

### 2.1 Page Structure (ServiceDetail.tsx)

```
Service Detail Page
├── Hero (secondary bg) — "Our Services", title, subtitle
├── Two-column layout
│   ├── Left (40%, sticky): Contact form ("Contact Us")
│   └── Right (60%): Service content
│       ├── Icon + title
│       ├── Service image (from assets, rounded, full-width)
│       ├── Purpose
│       ├── Overview (intro + bullets + closing)
│       └── Dynamic sections (Training Approach, Functional Coverage, Outcomes, or Engagement Model)
```

### 2.2 Routing & Nav

- **No Services item in navbar or footer** — users reach detail pages via Home "Learn More" or "Explore Our Services" (→ `/services/1`), or direct URL.
- Invalid `/services/:id` (e.g. `/services/99`) redirects to `/`.
- `/services` redirects to `/services/1`.

---

## 3. Dependencies

- Lucide React (icons: GraduationCap, SlidersHorizontal, Check)
- React Router (useParams, Navigate, Link)
- Shadcn Button
- ContactForm component (posts to `/api/contact`)
- Assets: `Service 1Training.png`, `Service 2.png` in `src/assets`

---

## 4. Section Padding

- All sections use consistent vertical padding: `py-16 md:py-20`.

---

## 5. Checklist

- [x] Service detail page layout (hero + two-column)
- [x] Contact form on left (sticky)
- [x] Service content on right (Purpose, Overview, dynamic sections)
- [x] Images from assets per service
- [x] Redirect `/services` → `/services/1`
- [x] Invalid id redirects to `/`
- [x] No Services listing page; `Services.tsx` removed
- [x] Responsive layout
