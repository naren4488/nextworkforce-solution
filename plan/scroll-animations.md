# Scroll Animations Plan (Site-Wide)

> Very minimal, scroll-triggered animations across the whole website.  
> **Principle:** Subtle and short; avoid distracting or slow motion.

---

## 1. Design Principles

| Principle | Rule |
|-----------|------|
| **Minimal** | Animations are short (≈300–400ms), small movement (e.g. 8–12px), low visual weight. |
| **Scroll-triggered** | Run when the element enters the viewport (e.g. once, when ~10–15% visible). |
| **Consistent** | Same animation types used the same way site-wide. |
| **Accessibility** | Respect `prefers-reduced-motion` (disable or simplify when set). |

---

## 2. Animation Types

### 2.1 Heading reveal (letter-by-letter or word-by-word)

- **Effect:** Headings appear progressively. Choose one approach for the site:
  - **Option A — Letter-by-letter:** Each character fades in (or opacity 0→1) with a small stagger (e.g. 20–40ms). Best for short headings (e.g. hero titles).
  - **Option B — Word-by-word:** Each word gets a tiny stagger. Fewer DOM nodes, still feels “reveal”. Good for longer headings.
  - **Option C — Single reveal:** Whole heading fades in or does a very short slide (e.g. 6–8px) + fade. Simplest and most minimal.
- **Trigger:** When heading enters viewport.
- **Duration:** Total reveal ≈0.4–0.8s (letter) or ≈0.3–0.5s (word/whole).
- **Easing:** `ease-out`.

**Recommendation for “very minimal”:** Prefer **Option C** (single fade/slide) for most headings; reserve letter/word reveal only for **hero h1** on Home (and optionally one hero per other page).

### 2.2 CTA / button slide-up

- **Effect:** Button (or small CTA block) starts slightly below final position (e.g. `translateY(10px)`) with `opacity: 0`, and moves to final position with `opacity: 1`.
- **Trigger:** When the CTA (or its section) enters viewport.
- **Duration:** ≈300–400ms.
- **Easing:** `ease-out`.
- **Distance:** 8–12px (subtle).

### 2.3 Optional: section heading / block fade-in

- **Effect:** Section title (e.g. h2) or card title fades in (and optionally a tiny upward move, same as CTA).
- **Use sparingly:** Only where it doesn’t compete with hero/CTA; keep duration short (≈300ms).

---

## 3. Where to Apply (Site Map)

### 3.1 Home page

| Section | Element | Animation type |
|---------|---------|----------------|
| **HeroSection** | Hero h1 | Heading reveal (letter-by-letter for hero only, or single fade/slide) |
| **HeroSection** | Supporting paragraph | Optional: short fade-in after heading |
| **HeroSection** | Primary CTA (“Explore Our Services”) | CTA slide-up |
| **HeroSection** | Secondary CTA (“Contact Us”) | CTA slide-up (same or slight stagger) |
| **ServiceHighlights** | No section title in current design | Optional: card titles or cards fade-in (very subtle) |
| **AboutSection** | “ABOUT US” label + h2 | Section heading fade-in (or single reveal for h2) |
| **AboutSection** | CTA / Watch video button | CTA slide-up |
| **OurServicesSection** | “OUR SERVICES OVERVIEW” + main heading | Section heading fade-in |
| **OurServicesSection** | “Learn More” buttons | CTA slide-up |
| **WhySection** | “Why Choose Us” + h2 | Section heading fade-in |
| **WhySection** | Block headings / cards | Optional: very subtle fade-in |

### 3.2 About Us page

| Section | Element | Animation type |
|---------|---------|----------------|
| Hero | “ABOUT NEXWORKFORCE SOLUTION” + h1 “Who We Are” | Heading reveal (single or word-by-word) |
| Who We Are | — | Optional: block fade-in |
| Vision + Mission | Section titles (Our Vision, Our Mission) | Section heading fade-in |
| What We Do | “What We Do” h2 | Section heading fade-in |
| Our Differentiation | h2 | Section heading fade-in |
| Enterprise Experience | h2 + badge image | Section heading fade-in |
| Closing CTA | “Contact Us” button | CTA slide-up |

### 3.3 Contact page

| Section | Element | Animation type |
|---------|---------|----------------|
| Hero | “Contact Us” + h1 “Get in Touch” | Heading reveal (single) |
| Form section | h2 “Let’s Start a Conversation” | Section heading fade-in |
| Form section | Submit button | CTA slide-up |

### 3.4 Service detail page (/services/1, /services/2)

| Section | Element | Animation type |
|---------|---------|----------------|
| Hero | “Our Services” + h1 (title) | Heading reveal (single) |
| Content column | h2 (service title) | Section heading fade-in |
| Content column | “Contact Us” form container or main CTA | CTA slide-up (one primary CTA in view) |

### 3.5 Global / other

| Area | Note |
|------|------|
| **Header / Nav** | No scroll animation (always visible). |
| **Footer** | No scroll animation, or one optional subtle fade for the whole footer when it enters view (low priority). |
| **ContactFormSection** (above footer) | Optional: form heading or submit button CTA slide-up if in view. |

---

## 4. Technical Approach

### 4.1 Trigger: Intersection Observer

- One small hook or utility: `useInView(options)` that sets a class (e.g. `in-view`) or data attribute when the element intersects the viewport.
- **Options:** `rootMargin: "0% 0% -10% 0%"` (or similar) so animation starts when the element is a bit inside the viewport; `threshold: 0.1`; trigger **once** (no re-run on scroll back).

### 4.2 Animation: CSS

- **Default state:** e.g. `opacity: 0`, optional `transform: translateY(8px)`.
- **In-view state:** `opacity: 1`, `transform: translateY(0)`.
- Use `transition` (e.g. `transition: opacity 0.35s ease-out, transform 0.35s ease-out`).
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` → instant or no transform, opacity only and short duration.

### 4.3 Letter-by-letter (hero only, if used)

- **Option A:** Split hero h1 into spans (one per letter or per word), each with `animation-delay` (e.g. `calc(var(--i) * 30ms)`). CSS-only possible with many elements.
- **Option B:** Small utility component `<AnimateHeading text="..." />` that renders wrapped letters/words and applies delay.
- Prefer **word-by-word** or **single reveal** to keep DOM and logic minimal.

### 4.4 Shared classes / components

- **Class:** e.g. `animate-on-scroll`, `animate-heading`, `animate-cta`.
- Optional **wrapper component:** `<AnimateIn type="heading" | "cta">` that uses `useInView` and applies the right class to children.
- Reuse the same classes across Home, About, Contact, Service detail so behavior is consistent.

### 4.5 Dependencies

- No heavy animation library required; **CSS + Intersection Observer** is enough.
- Optional: a tiny `useInView` hook (or from a small lib like `react-intersection-observer`) to keep JS minimal.

---

## 5. Implementation Checklist (High Level)

- [x] Add `useInView` (or equivalent) and ensure it respects `prefers-reduced-motion`.
- [x] Add global CSS for `.animate-scroll-heading`, `.animate-scroll-cta`, `.animate-scroll-block` (and reduced-motion overrides).
- [x] Hero (Home): h1 reveal + paragraph block + CTA buttons slide-up.
- [x] Home: AboutSection, OurServicesSection, WhySection, ServiceHighlights — section headings + CTAs / blocks.
- [x] About Us: hero heading + What We Do heading + closing CTA.
- [x] Contact: hero heading + form section heading + submit CTA.
- [x] Service detail: hero heading + content heading.
- [ ] Test with `prefers-reduced-motion: reduce` and on slow devices; keep animations minimal and short.

---

## 6. Summary

| Type | Use for | Duration | Distance (if any) |
|------|---------|----------|-------------------|
| **Heading reveal** | Hero h1 (letter/word or single), section h2s | ~0.3–0.5s (single), ~0.5–0.8s (letter) | 0 or 6–8px |
| **CTA slide-up** | Primary/secondary buttons, “Learn More”, “Contact Us”, Submit | ~0.3–0.4s | 8–12px |
| **Section / block** | Optional: h2, card titles | ~0.3s | 0 or 6px |

All animations are **scroll-triggered once** and **minimal** in distance and time.
