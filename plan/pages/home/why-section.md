# Why NexWorkforce Solution Section Plan

> Home page — "Why Choose Us" style section.  
> **Page:** Home (`/`)  
> **Position:** Below Our Services section (or as defined in page flow).

---

## 1. Understand (Reference UI)

### 1.1 Layout Overview

**Structure:**
- **Top:** Two-column — large image (left) | content block (right)
- **Center:** Metric badge + smaller image (overlapping/adjacent)
- **Bottom:** Three horizontal blocks (icons + headings + paragraphs)

### 1.2 Top Section

| Element | Description |
|---------|-------------|
| **Left image** | Large, rounded rectangular image — office/professional setting |
| **Right content** | Section label, headline, supporting paragraph |

**Right content block:**
- **Section label:** Smaller, vibrant blue
- **Main headline:** Large, bold, dark blue
- **Supporting paragraph:** Smaller, dark grey, multi-line

### 1.3 Center Section (Metric Badge + Image)

| Element | Description |
|---------|-------------|
| **Metric badge** | Circular, solid blue, overlaps content area; number "25" + circular text |
| **Smaller image** | Rounded rectangle, placed right/below badge — collaborative setting |
| **Badge content** | Large number centered; text in circular path around it |

### 1.4 Lower Three Blocks

| Element | Description |
|---------|-------------|
| **Layout** | Three blocks horizontally, rounded corners |
| **Per block** | Icon (light blue circle) + heading + paragraph |
| **Reference headings** | "Our Mission", "Our Vision", "Our Awards" (placeholders) |
| **Reference icons** | Target/bullseye, gears/interconnected, star/award |

### 1.5 Visual Elements

| Element | Spec |
|---------|------|
| Section bg | Light grey/off-white, subtle curved shapes (top-left, top-right) |
| Images | Rounded rectangles |
| Label | Vibrant blue |
| Headline | Dark blue, bold |
| Paragraph | Dark grey |
| Badge | Solid blue circle, white text |
| Block icons | Light blue circle background |

---

## 2. Think (Content Strategy)

### 2.1 NextWorkforce Content

**Section label:**
> Why NexWorkforce Solution

**Main headline:**
> UKG Expertise That Protects and Extends Enterprise Performance

**Supporting paragraph:**
> UKG implementation is only the beginning. Sustained workforce performance requires governance, capability, and disciplined optimization. NexWorkforce Solution delivers focused UKG advisory services that strengthen system control, reduce production risk, and ensure long-term operational integrity.

**Center metric badge:**
- **Number:** 25+
- **Primary text:** Years
- **Secondary text:** Collective Workforce Management Expertise
- **Tertiary text:** Supporting workforces exceeding 1M+ employees globally

**Lower three blocks:**

| Block | Heading | Paragraph |
|-------|---------|-----------|
| 1 | Our Focus | We operate exclusively within UKG Workforce Management — no dilution, no generic IT services. |
| 2 | Our Model | Structured capability development combined with post-go-live stabilization and managed support. |
| 3 | Our Commitment | Enterprise-grade governance, measurable outcomes, and long-term workforce system resilience. |

### 2.2 Component Strategy

- **WhySection** — Wrapper
- **Top:** Two-column (image + content)
- **Center:** Metric badge + smaller image
- **Bottom:** Three-block grid (icon + heading + paragraph per block)

### 2.3 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Metric badge | Circular div/SVG with text | Custom layout; number + circular/stacked text |
| Icons | Lucide (Target, Workflow, Award) | Focus, model, commitment |
| Layout | CSS Grid / Flex | Responsive; stack on mobile |
| Images | Placeholder or Unsplash | Until final assets |

---

## 3. Plan (Implementation Phases)

### Phase A: Top Section

1. Two-column grid: large image (left), content (right)
2. Section label, headline, paragraph
3. Rounded image styling

### Phase B: Center Metric Badge

4. Circular badge with primary blue background
5. Large "25+" number, white
6. Secondary text: "Years" / "Collective Workforce Management Expertise"
7. Tertiary text: "Supporting workforces exceeding 1M+ employees globally"
8. Position badge to overlap/adjacent to content
9. Smaller image beside/under badge

### Phase C: Lower Three Blocks

10. Three-block grid
11. Each block: icon (blue circle), heading, paragraph
12. Icons: Target (Focus), Workflow/Gears (Model), Award (Commitment)

### Phase D: Polish

13. Optional: Subtle curved background shapes
14. Responsive: stack columns on mobile
15. Typography and spacing

---

## 4. Document (Spec)

### 4.1 Structure

```
Why Section
├── Top (two-column)
│   ├── Left: Large image (office)
│   └── Right: Content
│       ├── Section label
│       ├── Main headline
│       ├── Supporting paragraph
│       └── Metric badge (overlaps into center)
├── Center
│   ├── Metric badge (circular, blue)
│   │   ├── "25+" (large)
│   │   ├── "Years"
│   │   ├── "Collective Workforce Management Expertise"
│   │   └── "Supporting workforces exceeding 1M+ employees globally"
│   └── Smaller image (collaborative)
└── Bottom: Three blocks
    ├── Block 1: Our Focus
    ├── Block 2: Our Model
    └── Block 3: Our Commitment
```

### 4.2 Content (Final)

| Element | Copy |
|---------|------|
| Label | Why NexWorkforce Solution |
| Headline | UKG Expertise That Protects and Extends Enterprise Performance |
| Paragraph | UKG implementation is only the beginning. Sustained workforce performance requires governance, capability, and disciplined optimization. NexWorkforce Solution delivers focused UKG advisory services that strengthen system control, reduce production risk, and ensure long-term operational integrity. |
| Badge number | 25+ |
| Badge line 1 | Years |
| Badge line 2 | Collective Workforce Management Expertise |
| Badge line 3 | Supporting workforces exceeding 1M+ employees globally |
| Block 1 heading | Our Focus |
| Block 1 text | We operate exclusively within UKG Workforce Management — no dilution, no generic IT services. |
| Block 2 heading | Our Model |
| Block 2 text | Structured capability development combined with post-go-live stabilization and managed support. |
| Block 3 heading | Our Commitment |
| Block 3 text | Enterprise-grade governance, measurable outcomes, and long-term workforce system resilience. |

### 4.3 Metric Badge Layout

```
     +------------------------+
     |       25+              |
     |       Years            |
     |  Collective Workforce  |
     |  Management Expertise  |
     |                        |
     | Supporting workforces  |
     | exceeding 1M+          |
     | employees globally     |
     +------------------------+
```

*Circular or rounded rectangle; blue bg, white text; centered.*

### 4.4 Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Section | `bg-muted/30 py-16 md:py-24` (optional curved shapes) |
| Container | `mx-auto max-w-7xl px-6` |
| Top grid | `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center` |
| Large image | `rounded-2xl overflow-hidden aspect-[4/3]` |
| Label | `text-sm font-medium text-primary` |
| Headline | `text-2xl md:text-3xl font-bold text-foreground` |
| Paragraph | `mt-4 text-muted-foreground` |
| Metric badge | `rounded-full bg-primary text-primary-foreground p-8 text-center` |
| Badge number | `text-4xl md:text-5xl font-bold` |
| Badge text | `text-sm mt-1` |
| Blocks grid | `grid grid-cols-1 md:grid-cols-3 gap-8 mt-12` |
| Block | `rounded-xl bg-white p-6 shadow-sm` |
| Block icon | `flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary` |
| Block heading | `mt-4 font-bold text-foreground` |
| Block text | `mt-2 text-sm text-muted-foreground` |

### 4.5 Icons (Lucide — Suggestions)

| Block | Icon | Rationale |
|-------|------|-----------|
| Our Focus | `Target` | Focused, exclusive focus |
| Our Model | `Workflow`, `Layers` | Structured, combined approach |
| Our Commitment | `Award`, `ShieldCheck` | Governance, resilience |

---

## 5. Dependencies

- Lucide React (Target, Workflow/Layers, Award/ShieldCheck)
- Images (placeholder or assets)

---

## 6. Checklist

- [x] Create WhySection component
- [x] Add top: large image + content block
- [x] Add section label, headline, paragraph
- [x] Add metric badge (25+, years, expertise, 1M+ employees)
- [x] Add smaller image beside/below badge
- [x] Add three lower blocks (Our Focus, Our Model, Our Commitment)
- [x] Add icons to blocks
- [x] Wire into Home page
- [x] Responsive layout
- [ ] Optional: Curved background shapes
