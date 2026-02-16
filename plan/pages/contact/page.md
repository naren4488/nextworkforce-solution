# Contact Page Plan

> Dedicated Contact page.  
> **Route:** `/contact`

---

## 1. Content & Structure

### 1.1 Suggested Sections

- **Hero/Banner** — Page title, subline
- **Contact Form** — Name, Email, Subject, Message (required fields)
- **Contact Info** — Optional: email, phone, or “Get in touch” statement
- **CTA** — Submit button; form is client-side only (no backend; static site)

### 1.2 Form Fields

| Field   | Type     | Required |
|---------|----------|----------|
| Name    | text     | Yes      |
| Email   | email    | Yes      |
| Subject | text     | Yes      |
| Message | textarea | Yes      |

### 1.3 Static Site Note

- No backend → form submit can show a success message or open `mailto:` link
- Alternative: Use a third-party form service (Formspree, Netlify Forms, etc.) if needed later

---

## 2. Layout

### 2.1 Two-Column (Desktop)

- **Left:** Contact info / intro text
- **Right:** Contact form

### 2.2 Responsive

- Stack on mobile (form first or info first)

### 2.3 Layout note

- The dedicated Contact page has its own hero + form. On all non-home pages, **ContactFormSection** (same contact form + address block) also appears above the site footer; the footer then shows a single row (copyright, nav, scroll-to-top). See [Footer plan](../../components/footer.md).

---

## 3. Dependencies

- Shadcn Input, Label, Textarea
- Shadcn Button
- Lucide icons (optional: Mail, MapPin, Phone)

---

## 4. Checklist

- [x] Add form components (input, label, textarea)
- [x] Create Contact page layout
- [x] Add hero
- [x] Add contact form
- [x] Add contact info / intro
- [x] Form submit handler (client-side success message)
- [x] Responsive layout
