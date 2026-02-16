# Our Services Section Plan

> Home page — Our Services section.  
> **Page:** Home (`/`)  
> **Position:** Below About section (or as defined in page flow).

---

## 1. Understand (Reference UI)

### 1.1 Layout Overview

**Structure:**
- **Heading area:** Centered subtitle + main heading
- **Service cards:** 2–3 cards in a horizontal row
- **Carousel:** Optional dots for navigation (if more cards or slider)

### 1.2 Heading Area

| Element | Description |
|---------|-------------|
| **Subtitle** | Smaller, dark blue, centered — "Our Services" |
| **Main heading** | Large, bold, dark blue, centered, multi-line |

### 1.3 Service Card Structure

| Element | Description |
|---------|-------------|
| **Image** | Top of card, rounded top corners, full-width |
| **Icon** | Square icon, light blue fill, white outline, overlaps image/text boundary (centered) |
| **Title** | Bold, dark blue, centered |
| **Description** | Smaller, dark gray, centered; can include bullet list |

**Reference styling:**
- Card: White background, significantly rounded corners
- Card stands out from light gray section background
- Icon: Small square, blue fill, positioned at top of text area overlapping image

### 1.4 Carousel (Optional)

- Four circular dots below cards
- One solid (active), others outlined
- Indicates carousel/slider if more content

### 1.5 Colors & Style

| Element | Spec |
|---------|------|
| Section bg | Light gray |
| Card bg | White |
| Subtitle / Title | Dark blue |
| Description | Dark gray |
| Icon | Light blue fill, white outline |

---

## 2. Think (Content Strategy)

### 2.1 NextWorkforce Content

**Subtitle:**
> OUR SERVICES OVERVIEW

**Main heading:**
> We provide two integrated service offerings designed to support both people and platforms within the UKG ecosystem.

**Two services:**

**Service 1: UKG Workforce Management Training**
- Target audience / use cases (bullet list):
  - Professionals currently working on UKG
  - Consultants transitioning into UKG Workforce Management
  - Organizations seeking to upskill internal teams

**Service 2: UKG Workforce Optimization & Managed Services**
- Target audience / use cases (bullet list):
  - Post-go-live stabilization
  - Ongoing functional support
  - Continuous optimization as business needs evolve
  - Process and configuration enhancements
  - Performance and accuracy improvements
  - Best-practice alignment

### 2.2 Component Strategy

- **ServicesSection** — Wrapper with heading + cards grid
- **ServiceCard** — Reusable card: image, icon, title, description/list
- Two cards (no carousel initially); can add third or carousel later if needed

### 2.3 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Card count | 2 cards | Content specifies two services |
| Layout | Grid 2 cols (or 3 if spacing) | Responsive; stack on mobile |
| Icons | Lucide (GraduationCap, Settings/Sliders) | Training vs optimization |
| Carousel | Skip initially | Two cards fit without slider |
| Images | Placeholder or Unsplash | Until final assets |

---

## 3. Plan (Implementation Phases)

### Phase A: Layout & Content

1. Section with light gray background
2. Centered heading: subtitle + main heading
3. Two-card grid
4. Each card: image, icon, title, bullet list (description)

### Phase B: Card Styling

5. White cards, rounded corners
6. Image at top (rounded top corners)
7. Icon overlapping image/text boundary
8. Bullet list styling

### Phase C: Polish

9. Responsive: stack cards on mobile
10. Optional: Carousel dots if adding more services later
11. "Learn More" links to service detail pages (`/services/1`, `/services/2`); no Services listing page

---

## 4. Document (Spec)

### 4.1 Structure

```
Services Section
├── Heading
│   ├── Subtitle: OUR SERVICES OVERVIEW
│   └── Main heading (paragraph)
└── Cards grid
    ├── Card 1: UKG Workforce Management Training
    │   ├── Image
    │   ├── Icon (training/education)
    │   ├── Title
    │   └── Bullet list
    └── Card 2: UKG Workforce Optimization & Managed Services
        ├── Image
        ├── Icon (optimization/settings)
        ├── Title
        └── Bullet list
```

### 4.2 Content (Final)

| Element | Copy |
|---------|------|
| Subtitle | OUR SERVICES OVERVIEW |
| Main heading | We provide two integrated service offerings designed to support both people and platforms within the UKG ecosystem. |
| Service 1 title | UKG Workforce Management Training |
| Service 1 bullets | Professionals currently working on UKG; Consultants transitioning into UKG Workforce Management; Organizations seeking to upskill internal teams |
| Service 2 title | UKG Workforce Optimization & Managed Services |
| Service 2 bullets | Post-go-live stabilization; Ongoing functional support; Continuous optimization as business needs evolve; Process and configuration enhancements; Performance and accuracy improvements; Best-practice alignment |

### 4.3 Card Layout (Per Card)

```
+------------------+
|     [IMAGE]      |  <- Rounded top corners
|                  |
+--------+---------+
| [ICON] |         |  <- Icon overlaps boundary
+--------+---------+
|    TITLE         |
| • Bullet 1       |
| • Bullet 2       |
| • Bullet 3       |
+------------------+
```

### 4.4 Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Section | `bg-muted/50 py-16 md:py-24` |
| Container | `mx-auto max-w-7xl px-6` |
| Heading container | `text-center max-w-3xl mx-auto mb-12` |
| Subtitle | `text-sm font-medium uppercase tracking-wider text-primary` |
| Main heading | `text-2xl md:text-3xl font-bold text-foreground mt-2` |
| Cards grid | `grid grid-cols-1 md:grid-cols-2 gap-8` |
| Card | `rounded-2xl bg-white overflow-hidden shadow-sm` |
| Card image | `aspect-video w-full object-cover` |
| Card icon container | `relative -mt-6 mx-6 flex justify-center` or similar (overlap) |
| Card icon | `flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary` |
| Card content | `p-6 pt-8` |
| Card title | `text-lg font-bold text-foreground text-center` |
| Bullet list | `mt-4 space-y-2 text-sm text-muted-foreground` |

### 4.5 Icons (Lucide — Suggestions)

| Service | Icon | Rationale |
|---------|------|-----------|
| 1. Training | `GraduationCap`, `BookOpen`, `Users` | Education, learning |
| 2. Optimization & Managed Services | `Settings`, `SlidersHorizontal`, `Workflow` | Optimization, support |

---

## 5. Dependencies

- Lucide React (icons)
- Images (placeholder or assets)
- Optional: Shadcn Card component

---

## 6. Checklist

- [x] Create OurServicesSection component
- [x] Add heading (subtitle + main heading)
- [x] Add Service 1 card (Training)
- [x] Add Service 2 card (Optimization & Managed Services)
- [x] Add images to cards
- [x] Add icons (overlapping image boundary)
- [x] Add bullet lists to cards
- [x] Wire into Home page
- [x] Responsive layout
- [x] Cards link to `/services/1` and `/services/2` (Learn More). Both cards show "Engagement Focus:" before bullets.
