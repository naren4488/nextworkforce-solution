# Services Page Plan

> Dedicated Services page.  
> **Route:** `/services`

---

## 1. Content Overview

### Service 1: UKG Workforce Management Training

- **Purpose:** To build globally relevant, project-ready UKG Workforce Management capability through structured, enterprise-aligned training programs.
- **Overview:** Designed for professionals on UKG, consultants transitioning, organizations upskilling; package-based, outcome-oriented.
- **Training Approach:** 4 bullets (structured curriculum, practical config, enterprise use cases, global alignment)
- **Functional Coverage:** 12 bullet points (timekeeping, accruals, security, etc.)
- **Outcomes:** 4 bullet points (configure, understand, operate, support)

### Service 2: UKG Workforce Optimization & Managed Services

- **Purpose:** To ensure stability, accuracy, and continuous improvement of live UKG Workforce Management environments.
- **Overview:** Designed for orgs post-implementation; 6 bullets (stabilization, support, optimization, etc.); extension of internal teams.
- **Engagement Model:**
  - **Principles:** 4 bullets
  - **Phases:** Stabilization, Optimization, Steady-State (each with bullets)
  - **Scope of Support:** 5 bullets

---

## 2. Layout & Structure

### 2.1 Suggested Structure

```
Services Page
├── Hero/Banner
├── Service 1: UKG Training
│   ├── Purpose (statement)
│   ├── Overview (paragraph + bullets)
│   ├── Training Approach (bullets)
│   ├── Functional Coverage (bullets, possibly collapsible or grid)
│   └── Outcomes (bullets)
├── Service 2: UKG Optimization & Managed Services
│   ├── Purpose (statement)
│   ├── Overview (paragraph + bullets)
│   ├── Engagement Model
│   │   ├── Principles (bullets)
│   │   ├── Phases (Stabilization, Optimization, Steady-State)
│   │   └── Scope of Support (bullets)
└── CTA (Contact Us)
```

### 2.2 Creative Approach

- Hero: Secondary bg, page title
- Each service: Full-width section with max-w content
- Use cards/accordions for sub-sections (Functional Coverage, Phases) to reduce visual overwhelm
- Alternating section backgrounds (white / muted)
- Icons: GraduationCap (Training), SlidersHorizontal (Managed Services)
- CTA at bottom

---

## 3. Dependencies

- Lucide React (icons)
- React Router (Link to /contact)
- Shadcn Button (CTA)

---

## 4. Checklist

- [x] Create Services page layout
- [x] Add hero
- [x] Add Service 1 (Training) with all sections
- [x] Add Service 2 (Optimization & Managed Services) with all sections
- [x] Add CTA
- [x] Responsive layout
