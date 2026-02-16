# Planning Documents

> Central index for all NextWorkforce project planning documents.

## Structure

```
plan/
├── README.md                 # This file — index of all plans
├── project-setup.md          # Project scaffolding, stack, phases
├── scroll-animations.md     # Minimal scroll-triggered animations (site-wide)
├── components/               # Shared component plans
│   ├── navbar.md             # Navbar/Header UI
│   └── footer.md             # Footer & layout (home vs other pages)
└── pages/                    # Page-specific plans
    ├── home/
    │   ├── hero-section.md       # Home page hero
    │   ├── below-hero-section.md # Service highlights
    │   ├── about-section.md      # About NexWorkforce
    │   ├── services-section.md   # Our Services overview
    │   └── why-section.md        # Why NexWorkforce Solution
    ├── about/
    │   └── page.md
    ├── services/
    │   └── page.md          # Service detail pages (no listing)
    └── contact/
        └── page.md
```

## Quick Links

| Document | Description |
|----------|-------------|
| [Project Setup](./project-setup.md) | Vite, React, Tailwind, Shadcn, structure |
| [Scroll Animations](./scroll-animations.md) | Minimal scroll-triggered animations (headings, CTAs) site-wide |
| [Navbar](./components/navbar.md) | Header/navbar UI, Services dropdown, layout |
| [Footer](./components/footer.md) | Footer layout, contact-in-footer on home only |
| [Hero Section](./pages/home/hero-section.md) | Home page hero content and layout |
| [Below Hero](./pages/home/below-hero-section.md) | Service highlights |
| [About Section](./pages/home/about-section.md) | About NexWorkforce |
| [Services Section](./pages/home/services-section.md) | Our Services overview |
| [Why Section](./pages/home/why-section.md) | Why NexWorkforce Solution |
| [About Page](./pages/about/page.md) | About Us page |
| [Service detail pages](./pages/services/page.md) | Service detail pages only (`/services/1`, `/services/2`); no listing page |
| [Contact Page](./pages/contact/page.md) | Contact page |

## Conventions

- One `.md` file per plan/section
- Use `pages/{page-name}/{section}.md` for page sections
- Use `components/{component}.md` for shared components
- Add new plans to this README index when created
- **Section padding:** All main sections use consistent vertical padding: `py-16 md:py-20`
