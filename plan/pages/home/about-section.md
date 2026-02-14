# About Section Plan

> Home page — About section below hero (after Service Highlights).  
> **Page:** Home (`/`)  
> **Position:** Below Service Highlights section.

---

## 1. Understand (Reference UI)

### 1.1 Layout Overview

**Two-column layout:**
- **Left:** Text block (label, headline, paragraph, feature list, CTA)
- **Right:** Image collage (3 overlapping images)

### 1.2 Left Content Block

| Element | Description |
|---------|-------------|
| **Label** | Blue, smaller font, above headline (e.g. "About Your Company") |
| **Headline** | Large, bold, dark blue/black, multi-line |
| **Paragraph** | Body text, dark/black font |
| **Feature list** | 3 items, each with circular blue icon + white checkmark |
| **CTA button** | Solid blue, rounded corners, white text |

**Reference feature items:**
- Each item: circular blue icon with white checkmark + text
- Text is dark, left-aligned

### 1.3 Right Visual Block (Image Collage)

| Element | Description |
|---------|-------------|
| **Layout** | 3 overlapping images with rounded corners |
| **Top image** | Group in office, collaborative setting |
| **Middle-left image** | Darker office, large circular blue play button overlay (video thumbnail) |
| **Bottom-right image** | Group around laptop on desk |
| **Background** | Subtle light gray/green dotted pattern (top-right) |

### 1.4 Colors & Style

| Element | Spec |
|---------|------|
| Label | Blue (primary `#2B4DFF`) |
| Headline | Dark blue/black |
| Paragraph | Black/dark |
| Checkmark icons | Blue circle, white checkmark |
| CTA button | Solid blue (primary), white text |
| Section bg | White |
| Decorative pattern | Light gray/green dots |

---

## 2. Think (Content Strategy)

### 2.1 NextWorkforce Content

**Label:**
> ABOUT NexWorkforce Solution

**Headline (suggested):**
> Dedicated to UKG Workforce Management Excellence.

*Or derive from paragraph; confirm with stakeholder.*

**Paragraph:**
> NexWorkforce Solution is a specialist advisory firm dedicated exclusively to UKG Workforce Management. We support enterprise organizations in strengthening workforce capability and enhancing the performance of their live UKG environments.

**Feature list (3 items):**
1. UKG-focused workforce specialists
2. Enterprise-grade training and managed services delivery
3. Post-go-live optimization and long-term system stability

**CTA:**
> More About Us

**Link:** `/about` (About Us page)

### 2.2 Component Strategy

- **AboutSection** — Wrapper with two-column grid
- **Left:** Label, headline, paragraph, feature list (checkmark items), CTA button
- **Right:** Image collage (3 images, overlapping, one with play overlay)

### 2.3 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Icons | Lucide `Check` | Checkmark for feature items |
| Layout | CSS Grid (2 cols) | Responsive; stack on mobile |
| Images | Placeholder or Unsplash | Until final assets |
| CTA | React Router `Link` | Navigate to `/about` |
| Play overlay | Optional (video thumbnail) | Can add later |

---

## 3. Plan (Implementation Phases)

### Phase A: Layout & Content

1. Two-column grid: text left, image right
2. Add label, headline, paragraph
3. Add feature list with checkmark icons
4. Add "More About Us" CTA button (link to `/about`)

### Phase B: Right Visual

5. Add image collage (3 overlapping images)
6. Optional: Play button overlay on one image (video thumbnail)
7. Optional: Dotted background pattern

### Phase C: Polish

8. Responsive: stack columns on mobile
9. Typography and spacing
10. Hover states on CTA

---

## 4. Document (Spec)

### 4.1 Structure

```
About Section
├── Left: Content
│   ├── Label (blue)
│   ├── Headline
│   ├── Paragraph
│   ├── Feature list
│   │   ├── Item 1 (check icon + text)
│   │   ├── Item 2 (check icon + text)
│   │   └── Item 3 (check icon + text)
│   └── CTA: "More About Us"
└── Right: Image Collage
    ├── Top image
    ├── Middle image (optional play overlay)
    └── Bottom image
```

### 4.2 Content (Final)

| Element | Copy |
|---------|------|
| Label | ABOUT NexWorkforce Solution |
| Headline | Dedicated to UKG Workforce Management Excellence. |
| Paragraph | NexWorkforce Solution is a specialist advisory firm dedicated exclusively to UKG Workforce Management. We support enterprise organizations in strengthening workforce capability and enhancing the performance of their live UKG environments. |
| Feature 1 | UKG-focused workforce specialists |
| Feature 2 | Enterprise-grade training and managed services delivery |
| Feature 3 | Post-go-live optimization and long-term system stability |
| CTA | More About Us → `/about` |

### 4.3 Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Section | `bg-background py-16 md:py-24` |
| Container | `mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 items-center` |
| Label | `text-sm font-medium uppercase tracking-wider text-primary` |
| Headline | `text-3xl md:text-4xl font-bold text-foreground leading-tight` |
| Paragraph | `text-muted-foreground mt-4` |
| Feature list | `mt-6 space-y-3` |
| Feature item | `flex items-center gap-3` |
| Check icon | `flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground` |
| CTA | `mt-8 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold` |
| Image collage | `relative` (overlapping images) |

### 4.4 Icons

- Feature items: Lucide `Check` inside circular primary background

---

## 5. Dependencies

- Lucide React (Check icon)
- Shadcn Button (optional, or plain Link styled as button)
- React Router (Link to `/about`)
- Images (placeholder or assets)

---

## 6. Checklist

- [x] Create AboutSection component
- [x] Add label, headline, paragraph
- [x] Add feature list with checkmark icons
- [x] Add "More About Us" CTA → `/about`
- [x] Add image collage (3 overlapping images)
- [x] Play button overlay on middle image
- [x] Dotted background pattern
- [x] Wire into Home page (below ServiceHighlights)
- [x] Responsive layout
- [ ] Confirm headline copy
