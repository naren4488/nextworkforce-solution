# Footer & Layout Plan

> Footer behavior and layout conditional logic (home vs other pages).

---

## 1. Footer Component

### 1.1 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `includeContactSection` | boolean | `false` | When `true`, render Contact form + address block above the footer row (home page only). |

### 1.2 Structure

**When `includeContactSection === false` (About, Contact, Service detail pages):**
- Single row: **Copyright** (left) | **Nav links** (Home, About, Contact) + **Scroll to top** (right)
- Compact vertical padding: `py-8 md:py-10`
- One copyright line: `© {year} NexWorkforce Solution. All rights reserved.`

**When `includeContactSection === true` (Home page only):**
- **ContactFormAndAddress** (two-column: company info + address, contact form)
- Divider (`border-t`)
- Same single row: Copyright | Nav + Scroll to top
- Full vertical padding: `py-16 md:py-20`

### 1.3 No Duplicate Copyright

- **ContactFormSection** (used on non-home pages above the footer) does **not** render its own copyright or scroll-to-top strip; only the Footer shows copyright.
- Scroll-to-top button appears in the footer on **all** pages.

### 1.4 Dependencies

- `ContactFormAndAddress` (contact form + address UI)
- React Router `Link`
- Lucide `ChevronUp` for scroll-to-top

---

## 2. Layout Conditional Logic

### 2.1 Home page (`pathname === '/'`)

- **No** `ContactFormSection` in layout
- **One** footer: `<Footer includeContactSection />`
- Result: Main content → Footer (contact form + address, then copyright row)

### 2.2 Other pages (About, Contact, Service detail)

- **ContactFormSection** (contact form + address only, no copyright strip)
- **Footer** (no contact section): `<Footer />`
- Result: Main content → ContactFormSection → Footer (copyright row only)

---

## 3. ContactFormAndAddress

- Reusable block: left column = logo, tagline, description, phone, email, address; right column = contact form (name, phone, email, message).
- Used in: **ContactFormSection** (non-home), **Footer** (home, when `includeContactSection`).
- Accepts `idPrefix` for form field IDs (e.g. `contact`, `footer-contact`).

---

## 4. Checklist

- [x] Footer: single copyright row + nav + scroll to top
- [x] No "Statement + CTA" block in footer (removed)
- [x] No duplicate copyright (removed from ContactFormSection)
- [x] Scroll to top in footer on all pages
- [x] Home: contact form + address inside footer only
- [x] Other pages: ContactFormSection (form only) then Footer
- [x] Compact footer padding when no contact section
