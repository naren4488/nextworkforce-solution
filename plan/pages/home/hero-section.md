# Hero Section Plan

> Home page hero section — content, layout, and UI.  
> **Page:** Home (`/`)

---

## 1. Understand (Reference UI)

### 1.1 Layout Overview

**Two-column layout:**
- **Left:** Visual/graphic area (central figure, avatars, network motif)
- **Right:** Text content (label, headline, paragraph, CTAs)

### 1.2 Left Side (Visual Elements)

| Element | Description |
|---------|-------------|
| Central figure | Person in bright electric blue circular frame (primary color) — prominent focal point |
| Surrounding avatars | 4 smaller circular profile images around the center |
| Connection lines | Faint dotted white lines from avatars to center — network/collaboration motif |
| Concentric circles | Faint white concentric circles emanating from center |
| Background | Subtle geometric patterns (circuits, lines, shapes) — digital/tech feel |

### 1.3 Right Side (Text Content)

| Element | Reference styling |
|---------|-------------------|
| Top label | Preceded by thin horizontal white line; uppercase; white; smaller font |
| Headline | Very large, bold, white; two lines |
| Paragraph | Smaller, white, left-aligned; 2+ lines |
| Primary CTA | Solid blue (primary), rounded corners, white text; prominent |
| Secondary CTA | Outline or secondary style (reference shows one CTA; we have two) |

### 1.4 Background & Colors

| Element | Spec |
|---------|------|
| Section background | Deep dark blue (secondary #474F82 or darker) with subtle geometric patterns |
| Text | White (high contrast) |
| CTA button | Primary #2B4DFF, white text |
| Central circle | Electric blue (#2B4DFF) |
| Decorative line | Thin white horizontal line before top label |

### 1.5 Z-Index & Stacking

- Navbar overlays hero (z-50)
- Hero graphical elements and text in foreground
- Geometric background patterns in back layer

---

## 2. Content (NextWorkforce)

### 2.1 Small Top Label (Above Headline)

**Copy:**
> UKG Workforce Management Specialists

**Purpose:** Category badge / tagline above headline.

**Styling:** Uppercase (or mixed case); thin decorative line before; white; small.

---

### 2.2 Headline

**Copy:**
> UKG Training and Optimization.  
> Delivered with Enterprise Precision.

**Purpose:** Main value proposition; two-line headline.

**Styling:** Very large, bold, white; line break between the two phrases.

---

### 2.3 Supporting Paragraph

**Copy:**
> Nex Workforce Advisory delivers structured UKG Workforce Management training and enterprise-grade managed services. We build workforce capability while ensuring live UKG environments remain stable, compliant, and performance-driven across global markets.

**Purpose:** Brief description of services and benefits.

**Note:** Confirm "Nex" vs "Next" (Next Workforce Advisory) with stakeholder.

---

### 2.4 CTAs

| CTA Type | Label | Action / Route |
|----------|-------|----------------|
| Primary | Explore Our Services | `/services/1` (first service detail page) |
| Secondary | Contact Us | `/contact` |

**Styling:** Primary = solid blue; Secondary = outline or ghost (white border).

---

## 3. Think (Component Strategy)

### 3.1 Structure

```
Hero Section (two-column grid)
├── Left: HeroVisual
│   ├── Background (geometric patterns)
│   ├── Concentric circles (decorative)
│   ├── Central figure (person in blue circle)
│   ├── Avatar ring (4 smaller avatars)
│   └── Dotted connection lines
└── Right: HeroContent
    ├── Decorative line
    ├── Top label
    ├── Headline
    ├── Paragraph
    └── CTA group (primary + secondary)
```

### 3.2 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Layout | CSS Grid or Flex | Two columns; stack on mobile (content above visual) |
| Left visual | Placeholder + SVG/IMG | Use placeholder image or illustration; avatars can be placeholder circles |
| Background | CSS pattern or image | Geometric/circuit pattern; SVG or CSS gradients |
| Central circle | Absolute positioning | Overlay on visual area |
| Responsive | Stack vertically on mobile | Content first, then visual |

### 3.3 Assets Needed

- Hero image(s): Central figure, or placeholder
- Avatar images: 4 placeholder circular images (or initials/icons)
- Background: Geometric pattern (CSS/SVG or image)
- Optional: Large faint text overlay ("HOSTAN"-style) — low priority

---

## 4. Plan (Implementation Phases)

### Phase A: Layout & Content

1. Two-column grid: `grid-cols-1 lg:grid-cols-2`, `items-center`, `gap-8`
2. Right column: Top label, headline, paragraph, CTAs
3. Left column: Placeholder for visual (colored block or simple image initially)

### Phase B: Visual Styling

4. Add decorative line before top label (`border-l-2` or `div` with `bg-white`)
5. Apply colors: dark blue bg, white text, primary CTA
6. Typography: large headline, smaller paragraph

### Phase C: Left Visual

7. Add central circular frame (primary color)
8. Add placeholder for central figure (image or avatar)
9. Add 4 avatar circles around center
10. Add dotted connection lines (SVG or CSS)
11. Add concentric circles (SVG or CSS)
12. Add geometric background pattern

### Phase D: Polish

13. Responsive: stack columns on mobile
14. Z-index and layering
15. Hover states on CTAs

---

## 5. Document (Spec)

### 5.1 HTML/JSX Structure

```jsx
<section className="hero relative overflow-hidden bg-secondary">
  <div className="hero-pattern" /> {/* Geometric background */}
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
    {/* Left: Visual */}
    <div className="hero-visual relative order-2 lg:order-1">
      <div className="concentric-circles" />
      <div className="central-figure">
        <div className="blue-circle">
          <img src="..." alt="..." />
        </div>
      </div>
      <div className="avatar-ring">
        {avatars.map(a => <div key={a.id} className="avatar" />)}
      </div>
      <svg className="connection-lines">...</svg>
    </div>

    {/* Right: Content */}
    <div className="hero-content order-1 lg:order-2">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-white" />
        <p className="top-label">UKG WORKFORCE MANAGEMENT SPECIALISTS</p>
      </div>
      <h1 className="headline">...</h1>
      <p className="supporting-text">...</p>
      <div className="cta-group">
        <Button asChild><Link to="/services/1">Explore Our Services</Link></Button>
        <Button variant="outline" asChild><Link to="/contact">Contact Us</Link></Button>
      </div>
    </div>
  </div>
</section>
```

### 5.2 Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Section | `relative overflow-hidden bg-secondary min-h-[80vh]` |
| Container | `mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 py-16 lg:py-24` |
| Decorative line | `h-px w-8 bg-white` or `border-l-2 border-primary pl-4` |
| Top label | `text-sm font-medium uppercase tracking-wider text-white` |
| Headline | `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight` |
| Paragraph | `text-lg text-white/90 mt-6 max-w-xl` |
| CTA group | `flex flex-wrap gap-4 mt-8` |
| Primary CTA | `rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold` |
| Secondary CTA | `rounded-lg border border-white/60 text-white hover:bg-white/10` |
| Central circle | `rounded-full bg-primary p-1 ring-4 ring-primary/30` |
| Avatar | `rounded-full border-2 border-white/60 size-12 md:size-16` |

### 5.3 Routes

| CTA Label | Route |
|-----------|-------|
| Explore Our Services | `/services/1` |
| Contact Us | `/contact` |

---

## 6. Dependencies

- Shadcn `Button` (primary, outline)
- React Router `Link`
- Lucide icons (optional)
- Hero/avatar images or placeholders

---

## 7. Checklist

- [x] Create `HeroSection.tsx`
- [x] Two-column layout (grid)
- [x] Add decorative line before top label
- [x] Top label (uppercase)
- [x] Two-line headline
- [x] Supporting paragraph
- [x] Primary CTA (Explore Our Services → `/services/1`)
- [x] Secondary CTA (Contact Us → `/contact`)
- [x] Left visual: central figure in blue circle
- [x] Left visual: avatar ring (4 avatars)
- [x] Left visual: dotted connection lines
- [x] Left visual: concentric circles
- [x] Background: geometric pattern
- [x] Wire into Home page
- [x] Responsive (stack on mobile)
- [ ] Confirm copy: "Nex" vs "Next", "Contact US" vs "Contact Us"
