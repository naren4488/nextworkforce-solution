# Navbar UI Plan

> Plan document for rebuilding the navbar to match the reference design.  
> Reference: two UI mockups (Techor-style navbar).

---

## 1. Understand

### 1.1 Layout Overview

The navbar is a full-width horizontal bar with **three distinct sections**:

| Section | Position | Content |
|---------|----------|---------|
| **Left** | Logo area | Brand icon + brand name |
| **Center** | Navigation | Primary nav links (some with dropdown chevrons) |
| **Right** | Utility / CTA | Search icon, hamburger menu, primary CTA button |

### 1.2 Visual Style

| Element | Specification |
|---------|---------------|
| **Background** | `#474F82` (secondary) — solid dark blue |
| **Top accent** | Thin line in lighter blue (`#2B4DFF` or variant) |
| **Text & icons** | White, high contrast |
| **Shape** | Optional subtle rounded corners (pill-like container) |
| **Overall** | Fixed header, full width, modern look |

### 1.3 Element Breakdown

**Logo (left):**
- Icon: White geometric/faceted icon in a circle (or similar)
- Text: Brand name in white, sans-serif, medium weight
- Aligned horizontally (icon + text)

**Navigation links (center):**
- Home | About Us | Contact (no Services — service detail pages are reached from Home or direct URL)
- White text, even spacing
- No dropdowns in current implementation

**Right section:**
- **Search**: Circular button with white border, transparent fill, magnifying glass icon
- **Hamburger**: Circular button, white border, transparent fill, 3-line menu icon
- **CTA button**: "Get A Quote" — pill-shaped, `#2B4DFF` background, white bold text

### 1.4 Project Mapping

| Reference | Our project |
|-----------|-------------|
| Techor | NextWorkforce |
| Home, About Us, Services, Pages, Blog, Contact | Home, About Us, Contact (no Services in nav; detail pages at /services/1, /services/2) |
| Get A Quote | Contact Us CTA |

---

## 2. Think

### 2.1 Component Strategy

- **Navbar** — Wrapper: full width, fixed, `bg-secondary`
- **Logo** — Link with icon + text
- **NavLinks** — Center section; some with dropdown indicators
- **IconButton** — Reusable for search/hamburger (circular, white border)
- **CTA Button** — Shadcn Button, primary variant, pill-shaped

### 2.2 Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Icons | Lucide React | Already in Shadcn ecosystem |
| Dropdowns | Phase 2 | Start as links; add dropdown content later |
| Search | Icon only for now | Full search UI can follow |
| Hamburger | Icon only (mobile menu) | Responsive behavior |
| CTA route | `/contact` or `#quote` | TBD per product needs |

### 2.3 Responsive Behavior

- **Desktop**: Full layout (logo | links | search + hamburger + CTA)
- **Tablet/Mobile**: Logo + hamburger; nav links in slide-out / dropdown

### 2.4 Dependencies

- Lucide React (icons)
- Shadcn Button (CTA)
- React Router (links)
- Optional: Shadcn DropdownMenu for nav dropdowns later

---

## 3. Plan

### Phase A: Structure & Layout

1. **Restructure Header.tsx**
   - Three-section flex layout: left | center | right
   - Full-width container, `max-w` as needed
   - Add top accent line (`border-t` or `box-shadow` in primary)

2. **Logo**
   - Add logo icon (Lucide `Gem` / `Diamond` or custom SVG)
   - Brand text "NextWorkforce"
   - Link to `/`

3. **Center nav**
   - Map routes: `/`, `/about`, `/contact` only (no Services link)
   - Service detail pages reached from Home section links or direct URL

### Phase B: Right Section

4. **Icon buttons**
   - Search: `Search` icon, circular, white border, transparent bg
   - Hamburger: `Menu` icon, same style
   - Wrapper: `IconButton` or plain `<button>` with consistent styling

5. **CTA button**
   - Text: "Get A Quote"
   - Shadcn Button, `variant="default"` (primary)
   - `rounded-full` for pill shape
   - Link to `/contact` (or `#quote`)

### Phase C: Visual Polish

6. **Styling**
   - Navbar: `bg-secondary`, white text
   - Top accent: thin line in primary color
   - Optional: `rounded-b-lg` for slight bottom rounding
   - Hover states: subtle opacity or underline for links

7. **Spacing**
   - `gap-6` or `gap-8` for nav links
   - Padding: `px-6 py-4` (or similar)
   - Space between right icons and CTA

### Phase D: Responsive (Future)

8. **Mobile**
   - Hide center nav on small screens
   - Show hamburger; toggle slide-out or dropdown menu
   - Stack or adjust layout for narrow viewports

---

## 4. Document (Spec)

### 4.1 Navbar HTML/Structure

```
<header>
  <nav> (full-width, flex, justify-between, items-center)
    <!-- Left -->
    <Link to="/" className="logo">
      <Icon />
      <span>NextWorkforce</span>
    </Link>

    <!-- Center -->
    <ul className="nav-links">
      <li><Link>Home</Link></li>
      <li><Link>About Us</Link></li>
      <li><Link>Contact</Link></li>
    </ul>

    <!-- Right -->
    <div className="flex items-center gap-2">
      <button aria-label="Search"><Search /></button>
      <button aria-label="Menu"><Menu /></button>
      <Button asChild><Link>Get A Quote</Link></Button>
    </div>
  </nav>
</header>
```

### 4.2 CSS/Tailwind Classes (Summary)

| Element | Classes |
|---------|---------|
| Header | `w-full bg-secondary border-t-2 border-primary` |
| Nav | `flex items-center justify-between max-w-7xl mx-auto px-6 py-4` |
| Logo link | `flex items-center gap-2 text-white font-medium hover:opacity-90` |
| Nav links | `flex items-center gap-6 text-white` |
| Nav link | `hover:opacity-90 transition-opacity flex items-center gap-1` |
| Icon button | `rounded-full border border-white/60 p-2 text-white hover:bg-white/10` |
| CTA | `rounded-full bg-primary text-primary-foreground px-6 py-2 font-semibold` |

### 4.3 Icons (Lucide)

- Logo: `Gem` or `Sparkles` or `Building2`
- Chevron: `ChevronDown`
- Search: `Search`
- Hamburger: `Menu`

### 4.4 Routes

| Label     | Route       |
|-----------|-------------|
| Home      | `/`         |
| About Us  | `/about`    |
| Contact   | `/contact`  |
| CTA       | `/contact` (Contact Us) |

Service detail pages: `/services/1`, `/services/2` (not in nav; linked from Home).

---

## 5. Checklist

- [x] Restructure Header with 3-section layout
- [x] Add logo icon + text
- [x] Add top accent line (primary color)
- [x] Center nav with links: Home, About Us, Contact (no Services)
- [x] Add search icon button (optional)
- [x] Add hamburger icon button
- [x] Add "Get A Quote" CTA button (pill-shaped)
- [x] Apply correct colors (#474F82 bg, #2B4DFF accent/CTA)
- [x] Responsive: hide nav on mobile, show hamburger

---

## 6. Notes

- Nav has 3 items: Home, About Us, Contact. No Services link; service detail pages are reached from Home ("Learn More", "Explore Our Services" → `/services/1`) or direct URL.
- Reference showed dropdowns; current implementation has no dropdowns.
- Search and hamburger can be non-functional initially; wire up in later iterations.
