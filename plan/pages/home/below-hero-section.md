# Below-Hero Section Plan

> Home page — section(s) immediately below the hero.  
> **Page:** Home (`/`)  
> **Position:** Directly under hero section.

---

## 1. Understand (Reference UI)

### 1.1 Overview

The reference shows **two adjacent sections** below the hero:

1. **Service Highlights** — Three feature cards on light grey background
2. **About Your Company** — Label, headline, image on white background

---

### 1.2 Service Highlights Section (Top)

| Element | Description |
|---------|-------------|
| **Background** | Light grey (e.g. `#F6F7F9`) |
| **Layout** | Three cards horizontally, evenly distributed, centered |
| **Spacing** | Large vertical padding above and below |
| **Card structure** | Icon container → Title → Description |

**Per card:**
- **Icon container:** White square, slightly rounded, subtle shadow
- **Icon:** Blue outline icon (varies per card)
- **Title:** Bold, dark blue/black
- **Description:** Smaller, medium grey, multi-line placeholder

**Reference cards:**
1. Highly Expert Team — icon: person + checkmark (expertise/verification)
2. Competitive Pricing — icon: headset + speech bubbles (support)
3. 24/7 Customer Service — icon: document + dollar sign (pricing/billing)

---

### 1.3 About Your Company Section (Bottom)

| Element | Description |
|---------|-------------|
| **Background** | White |
| **Transition** | Clear margin from service highlights above |
| **Label** | "About Your Company" — blue, smaller font, above headline |
| **Headline** | Large, bold, dark — "We Execute Ideas From..." |
| **Layout** | Two-column: text left, image right |
| **Decorative** | Grey dotted grid pattern (left of image) |
| **Image** | Professional photo, rounded corner (left edge), overlay with white dots (top-right) |

---

### 1.4 Colors (Reference)

| Use | Color |
|-----|-------|
| Titles / Headlines | Dark blue/black (`#2C3E50`) |
| Icons / Label | Blue (e.g. `#3F51B5` or primary `#2B4DFF`) |
| Service section bg | Light grey (`#F6F7F9`) |
| Icon container | White |
| Description text | Medium grey (`#6B7280`) |
| About section bg | White |

---

## 2. Think (Content Strategy)

### 2.1 NextWorkforce Mapping

**Service Highlights (3 cards):**

| Reference | NextWorkforce | Icon concept |
|-----------|---------------|--------------|
| Highly Expert Team | UKG Certified Experts | Certification / expertise |
| Competitive Pricing | Enterprise-Grade Support | Support / reliability |
| 24/7 Customer Service | Managed Services | Services / delivery |

**Or alternative titles:**
- UKG-Certified Specialists
- Structured Training & Optimization
- Compliance & Performance Assurance

**About section:**
- **Label:** "About Nex Workforce" or "About Us"
- **Headline:** UKG-focused value proposition (e.g. "We Deliver UKG Excellence Across Global Workforces.")
- **Image:** Team/office placeholder or professional photo

### 2.2 Component Strategy

- **ServiceHighlights** — Wrapper + 3 feature cards
- **AboutSection** — Two-column: text block + image block
- Could be one component with two sub-sections, or two separate components

### 2.3 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Icons | Lucide React | Consistent with project |
| Layout | CSS Grid (3 cols) for cards | Responsive, even distribution |
| Image | Placeholder or Unsplash | Until final asset |
| Dotted pattern | CSS or SVG | Lightweight, decorative |

---

## 3. Plan (Implementation Phases)

### Phase A: Service Highlights

1. Create section with light grey background
2. Three-card grid: `grid-cols-1 md:grid-cols-3`
3. Each card: icon container (white, shadow), title, description
4. Icons: `Award` / `ShieldCheck` / `Headphones` or similar
5. Responsive: stack on mobile

### Phase B: About Section

6. Create section with white background
7. Two-column: text (label, headline, paragraph) | image
8. Add blue label "About Nex Workforce"
9. Add headline and supporting text
10. Add image with rounded corner and optional overlay
11. Add dotted grid decorative element

### Phase C: Polish

12. Vertical spacing between sections
13. Responsive: stack About columns on mobile
14. Hover states on cards (optional)

---

## 4. Document (Spec)

### 4.1 Structure

```
Below Hero (wrapper or two sections)
├── Service Highlights Section
│   └── Card 1 | Card 2 | Card 3
│       ├── Icon container (white, rounded)
│       ├── Icon (primary/blue)
│       ├── Title
│       └── Description
└── About Section
    ├── Label (blue)
    ├── Headline
    ├── Paragraph
    ├── Decorative (dotted grid)
    └── Image (rounded, overlay)
```

### 4.2 Service Highlights — Content ✅

| Card | Title | Description |
|------|-------|-------------|
| 1 | 25+ Years of Collective Experience | Delivering enterprise Workforce Management solutions supporting 1M+ employees globally. |
| 2 | Cross-Industry Expertise | Proven deployments across Retail, Manufacturing, Logistics, Hospitality, Healthcare, and Warehouse operations. |
| 3 | Global Multi-Country Delivery | Experience supporting workforce environments across APAC, EMEA, and North America. |

### 4.3 About Section — Content (Draft)

- **Label:** About Nex Workforce
- **Headline:** We Deliver UKG Excellence Across Global Workforces.
- **Paragraph:** Nex Workforce Advisory specializes in UKG Workforce Management training and managed services. We build workforce capability while ensuring stability, compliance, and performance.

*Confirm final copy with stakeholder.*

### 4.4 Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Service section | `bg-muted/50 py-16 md:py-24` |
| Cards container | `mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6` |
| Card | `flex flex-col gap-4` |
| Icon container | `rounded-lg bg-white p-4 shadow-sm w-fit` |
| Icon | `size-8 text-primary` |
| Card title | `text-lg font-bold text-foreground` |
| Card description | `text-sm text-muted-foreground` |
| About section | `bg-background py-16 md:py-24` |
| About container | `mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center` |
| About label | `text-sm font-medium text-primary` |
| About headline | `text-3xl md:text-4xl font-bold text-foreground` |
| Image | `rounded-l-2xl overflow-hidden` |

### 4.5 Icons (Lucide — Selected)

| Card | Icon | Rationale |
|------|------|-----------|
| 1 | `Clock` or `Award` | Years of experience |
| 2 | `Building2` or `Layers` | Cross-industry, multi-sector |
| 3 | `Globe` | Global, multi-country |

---

## 5. Dependencies

- Lucide React (icons)
- Shadcn (optional: Card component)
- React Router (optional: links in cards)

---

## 6. Checklist

- [x] Create Service Highlights section
- [x] Add 3 feature cards with icons
- [x] Add card titles and descriptions
- [ ] Create About section
- [ ] Add label, headline, paragraph
- [ ] Add image (placeholder or asset)
- [ ] Add dotted grid decorative element
- [ ] Wire into Home page (below HeroSection)
- [ ] Responsive layout
- [ ] Confirm copy for both sections
