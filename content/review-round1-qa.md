# QA / Accessibility Audit -- Round 1

**Date:** 2026-04-06
**Scope:** All 18 source files (page, layout, globals, 14 components)
**Standard:** WCAG 2.1 AA

---

## 1. WCAG 2.1 AA Compliance

### Color Contrast

| Issue | Location | Detail |
|-------|----------|--------|
| **FAIL** -- `text-slate-400` on white bg | Footer copyright, stat suffix, pricing period, form helper text | `#94A3B8` on `#FFFFFF` = **3.3:1** (needs 4.5:1 for small text) |
| **FAIL** -- `text-primary-400` on white bg | Logo ".io" span, HowItWorks step number | `#60A5FA` on `#FFFFFF` = **2.6:1** |
| **FAIL** -- `text-slate-500` on white bg | Feature subtitles, stat labels, pricing taglines | `#64748B` on `#FFFFFF` = **4.4:1** (fails 4.5:1 threshold for body-size text) |
| **WARN** -- `text-slate-400` on `bg-slate-900` | Footer links default state | `#94A3B8` on `#0F172A` = **5.7:1** passes, but hover state `text-white` on `#0F172A` = **17:1** -- OK |
| **WARN** -- `text-amber-400` icons | ComparisonTable "partial" indicator | Icon-only indicator with no text fallback -- see screen reader section |

### Focus States

| Issue | Severity | Detail |
|-------|----------|--------|
| **No visible focus ring on `<a>` links** | HIGH | Nav links, footer links, pricing "Contact us" link have no `focus:` or `focus-visible:` classes. Keyboard users cannot see where they are. |
| **Button component (`<a>`) has no focus style** | HIGH | `Button.tsx` -- no `focus:ring` or `focus-visible:outline`. Every CTA on the page is invisible to keyboard focus. |
| **FAQ accordion button missing focus ring** | MEDIUM | `FAQ.tsx` button has no focus indicator beyond browser default (which `outline-none` may suppress via Tailwind reset). |
| **Form inputs have focus styles** | PASS | ContactForm inputs use `focus:border-primary-500 focus:ring-2` -- good. |
| **Form submit button missing focus ring** | HIGH | ContactForm submit `<button>` has no `focus:` classes. |

### Screen Reader / ARIA

| Issue | Severity | Detail |
|-------|----------|--------|
| **ComparisonTable icons have no accessible text** | HIGH | `CellIcon` renders `<Check>`, `<X>`, `<Minus>` SVGs with no `aria-label`, `title`, or `<span className="sr-only">`. Screen readers announce nothing. |
| **Star icons in Testimonials have no alt text** | MEDIUM | `<Star>` icons convey "5 stars" visually but have no `aria-label` on the container. Add `aria-label="5 out of 5 stars"`. |
| **FAQ accordion missing `aria-expanded`** | HIGH | FAQ button does not set `aria-expanded={open}`. Screen readers cannot determine accordion state. |
| **FAQ panel missing `role="region"` or `aria-controls`** | MEDIUM | No ARIA relationship between trigger button and content panel. |
| **Mobile nav toggle missing `aria-expanded`** | MEDIUM | Nav.tsx toggle button has `aria-label="Toggle menu"` but no `aria-expanded={mobileOpen}`. |
| **Animated counters inaccessible** | LOW | AnimatedCounter content changes are not announced. Consider `aria-live="polite"` or provide static `aria-label` with final value. |
| **No skip-to-content link** | MEDIUM | No skip navigation link for keyboard users to bypass the nav. |

---

## 2. Semantic HTML

### Heading Hierarchy

```
page.tsx
  Hero.tsx          -> <h1> "Your facility deserves better reviews"     OK (single h1)
  PainPoints.tsx    -> <h2> via SectionHeader, <h3> per card             OK
  Features.tsx      -> <h2> via SectionHeader, <h3> per card             OK
  HowItWorks.tsx    -> <h2> via SectionHeader, <h3> per step             OK
  ComparisonTable   -> <h2> via SectionHeader                            OK
  Testimonials      -> <h2> via SectionHeader                            OK
  Pricing.tsx       -> <h2> via SectionHeader, <h3> per tier             OK
  FAQ.tsx           -> <h2> via SectionHeader                            OK
  ContactForm.tsx   -> <h2> (hard-coded, not SectionHeader)              OK
  Footer.tsx        -> <h4> column headers                               WARN -- skips h3
```

**Issues:**
- Footer uses `<h4>` without preceding `<h3>` -- heading level skip. Use a styled `<p>` or `<h3>` instead.
- ContactForm success state uses `<h3>` correctly.

### Landmark Regions

| Landmark | Present | Detail |
|----------|---------|--------|
| `<nav>` | YES | Nav.tsx |
| `<main>` | YES | page.tsx wraps all sections |
| `<footer>` | YES | Footer.tsx |
| `<header>` | NO | Nav acts as header but is not wrapped in `<header>`. Consider adding `<header>` around the nav or using `role="banner"`. |

### Lists

- Feature lists in Pricing use `<ul>/<li>` -- correct.
- Footer link groups use `<ul>/<li>` -- correct.
- Nav links are rendered as individual `<a>` tags, not a `<nav><ul><li>` list. Minor semantic improvement available.

---

## 3. Keyboard Navigation

| Test | Result |
|------|--------|
| Tab through nav links | PARTIAL -- links are focusable `<a>` tags but have no visible focus indicator |
| Tab to mobile menu toggle | OK -- `<button>` is focusable |
| Tab through FAQ items | OK -- `<button>` elements are focusable, but no `aria-expanded` |
| Tab to form fields | OK |
| Tab to form submit | OK -- `<button>` is focusable |
| Escape to close mobile menu | FAIL -- no `onKeyDown` handler to close mobile menu on Escape |
| Focus trap in mobile menu | FAIL -- when mobile menu opens, focus is not trapped; user can tab to elements behind the overlay |
| CTA buttons (Button.tsx) | FAIL -- rendered as `<a>` tags. Anchor tags with `href="#contact"` are keyboard accessible, but no focus ring visible. |

---

## 4. Form Accessibility

### ContactForm.tsx

| Check | Status | Detail |
|-------|--------|--------|
| `<label>` with `htmlFor` | PASS | All 3 fields have proper label associations |
| `required` attribute | PASS | All 3 inputs are `required` |
| `type` attributes | PASS | `text`, `email`, `text` -- appropriate |
| `autocomplete` attributes | FAIL | Missing `autocomplete="name"`, `autocomplete="email"`, `autocomplete="organization"` |
| Error state messaging | FAIL | No custom error messages. Browser defaults only. No `aria-describedby` for error hints. |
| Success state | WARN | Success message appears but focus is not moved to it. Screen reader users won't know submission succeeded. |
| Phone number field | MISSING | No phone field -- may want one for SMS-based product. Not an a11y bug but a UX gap. |

---

## 5. Responsive Design Concerns

| Section | Issue | Severity |
|---------|-------|----------|
| **ComparisonTable** | `min-w-[640px]` forces horizontal scroll on mobile. Table has 5 columns -- will be cramped even at 640px. | MEDIUM |
| **Pricing cards** | `scale-[1.02]` on "popular" card may cause clipping or overlap on narrow viewports | LOW |
| **Nav** | Mobile menu animation works but does not prevent body scroll while open | LOW |
| **Hero stats** | `grid-cols-1 sm:grid-cols-3` -- good responsive behavior | PASS |
| **Footer** | `grid-cols-1 md:grid-cols-4` with `md:col-span-2` -- correct | PASS |
| **ContactForm** | `grid-cols-1 sm:grid-cols-2` -- correct | PASS |
| **HowItWorks connector line** | `hidden md:block` -- correctly hidden on mobile | PASS |
| **Feature cards** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` -- good progressive grid | PASS |

---

## 6. Performance

| Issue | Severity | Detail |
|-------|----------|--------|
| **Every section wrapped in `motion.div` with `whileInView`** | MEDIUM | 20+ Intersection Observer instances. Each Framer Motion animated element creates its own observer. On low-end devices this can cause jank during scroll. Consider using a single observer or `will-change` hints. |
| **AnimatedCounter uses `requestAnimationFrame` loop** | LOW | Well-implemented with `once: true` guard. No issue. |
| **Icons instantiated in array constants** | MEDIUM | `PainPoints`, `Features`, `HowItWorks` define JSX elements (`<AlertTriangle>`, etc.) in module-level arrays. These are recreated on every import. Move icon references to render-time or use component references instead of instances. |
| **No `loading="lazy"` images** | N/A | No images on the page currently. |
| **Framer Motion bundle** | MEDIUM | `framer-motion` is imported in 10 components. Tree-shaking helps, but the base bundle (~30-40KB gzip) is loaded for animations that could mostly be done with CSS `@keyframes` + Intersection Observer. |
| **Font variable naming mismatch** | LOW | `Inter` is assigned `--font-geist-sans` and `Plus_Jakarta_Sans` is assigned `--font-geist-mono`. These names are misleading (not Geist fonts). Not a perf issue but a maintenance trap. |

---

## 7. SEO

| Check | Status | Detail |
|-------|--------|--------|
| `<title>` | PASS | Descriptive, keyword-rich |
| `meta description` | PASS | 160 chars, includes CTA and pricing |
| `og:title`, `og:description`, `og:type`, `og:url` | PASS | Present |
| `twitter:card`, `twitter:title`, `twitter:description` | PASS | Present |
| `og:image` / `twitter:image` | FAIL | Missing. Social shares will have no preview image. |
| `robots` | PASS | `index, follow` |
| `<html lang="en">` | PASS | |
| `canonical` URL | FAIL | No `<link rel="canonical">`. |
| Heading hierarchy | PASS | Single `<h1>`, logical `<h2>`/`<h3>` structure |
| Structured data (JSON-LD) | FAIL | No `Organization`, `Product`, `FAQPage`, or `SoftwareApplication` schema. FAQ section is a prime candidate for `FAQPage` schema to get rich snippets. |
| Alt text | N/A | No images present |
| Internal linking | PASS | Nav + footer link to all sections |

---

## 8. Code Quality

| Issue | File | Detail |
|-------|------|--------|
| **Font variable naming mismatch** | `layout.tsx` | `Inter` -> `--font-geist-sans`, `Plus_Jakarta_Sans` -> `--font-geist-mono`. These CSS variables suggest Geist fonts but actually load Inter and Jakarta. Confusing for maintainers. |
| **Button is an `<a>`, not a `<button>`** | `Button.tsx` | The `Button` component always renders an `<a>` tag. This is semantically incorrect when used for actions (like form submissions). The ContactForm works around this by using a raw `<button>` instead. Consider supporting both `<a>` and `<button>` via an `as` prop or `href` detection. |
| **Unused import** | `Section.tsx` | `motion` is imported from `framer-motion` but `Section` itself doesn't use it -- only `SectionHeader` does. Not a build issue (tree-shaken) but noisy. |
| **No error boundary** | Global | No React error boundary wrapping the page. A single component crash takes down the entire page. |
| **Form has no backend** | `ContactForm.tsx` | `handleSubmit` just sets `submitted = true`. The TODO is noted in code but the form silently discards all data. |
| **Copyright year is runtime-computed** | `Footer.tsx` | `new Date().getFullYear()` is fine in client components but since Footer is a server component (no "use client"), this runs at build time in static export. For a marketing site this is acceptable, just be aware it won't auto-update without rebuild. |
| **`ArrowRight` imported but only used once** | `ContactForm.tsx` | Minor -- not an issue, just noting low reuse. |

---

## 9. Top 10 Fixes (Ranked by Severity)

### 1. CRITICAL -- Button/link focus indicators missing

**Impact:** Keyboard users cannot navigate the site. WCAG 2.4.7 violation.

**Files:** `Button.tsx`, `Nav.tsx`, `Footer.tsx`, `ContactForm.tsx`, `Pricing.tsx`

```tsx
// Button.tsx -- add focus-visible ring
<a
  className={`... focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${variants[variant]} ...`}
  {...props}
>
```

```tsx
// Nav.tsx desktop links -- add focus style
className="text-sm font-medium text-slate-600 hover:text-primary-500 focus-visible:text-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded transition-colors"
```

```tsx
// ContactForm.tsx submit button -- add focus style
className="... focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
```

---

### 2. CRITICAL -- ComparisonTable icons have no accessible text

**Impact:** Screen readers cannot interpret the comparison table. WCAG 1.1.1 violation.

**File:** `ComparisonTable.tsx`

```tsx
function CellIcon({ value }: { value: CellValue }) {
  if (value === true)
    return (
      <span role="img" aria-label="Yes">
        <Check size={18} className="text-secondary-500" />
      </span>
    );
  if (value === false)
    return (
      <span role="img" aria-label="No">
        <X size={18} className="text-red-400" />
      </span>
    );
  if (value === "partial")
    return (
      <span role="img" aria-label="Partial">
        <Minus size={18} className="text-amber-400" />
      </span>
    );
  return (
    <span className="text-sm font-semibold text-slate-700">{value}</span>
  );
}
```

---

### 3. CRITICAL -- FAQ accordion missing `aria-expanded`

**Impact:** Screen readers cannot determine open/closed state. WCAG 4.1.2 violation.

**File:** `FAQ.tsx`

```tsx
<button
  type="button"
  onClick={() => setOpen(!open)}
  aria-expanded={open}
  aria-controls={`faq-panel-${index}`}
  className="flex w-full items-center justify-between py-5 text-left"
>
  <span className="text-base font-medium text-slate-900 pr-4">{q}</span>
  ...
</button>
<AnimatePresence>
  {open && (
    <motion.div
      id={`faq-panel-${index}`}
      role="region"
      aria-labelledby={`faq-heading-${index}`}
      ...
    >
```

---

### 4. HIGH -- Missing `autocomplete` attributes on form

**Impact:** Assistive tech and browsers cannot auto-fill. WCAG 1.3.5 violation.

**File:** `ContactForm.tsx`

```tsx
<input id="name" name="name" type="text" required autoComplete="name" ... />
<input id="email" name="email" type="email" required autoComplete="email" ... />
<input id="facility" name="facility" type="text" required autoComplete="organization" ... />
```

---

### 5. HIGH -- Color contrast failures on small text

**Impact:** Low-vision users cannot read secondary text. WCAG 1.4.3 violation.

**Files:** Multiple -- `Logo.tsx`, `HowItWorks.tsx`, `Pricing.tsx`, `Hero.tsx`, `ContactForm.tsx`

```
text-slate-400 (#94A3B8) on white -> 3.3:1  FAIL
text-primary-400 (#60A5FA) on white -> 2.6:1  FAIL
text-slate-500 (#64748B) on white -> 4.4:1  BORDERLINE FAIL

Fix: Replace text-slate-400 with text-slate-500 (4.4:1 -- borderline)
     or text-slate-600 (#475569 on white = 7.0:1 -- solid pass)
Fix: Replace text-primary-400 with text-primary-500 (#1E6BB8 on white = 4.9:1 -- passes)
```

---

### 6. HIGH -- No skip navigation link

**Impact:** Keyboard and screen reader users must tab through entire nav on every page load. WCAG 2.4.1 violation.

**File:** `page.tsx` or `layout.tsx`

```tsx
// Add as first child of <body> or before <Nav>
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg"
>
  Skip to main content
</a>

// Then on <main>:
<main id="main-content">
```

---

### 7. HIGH -- Mobile nav has no Escape key handler and no focus trap

**Impact:** Keyboard users cannot close mobile menu without clicking. Partial WCAG 2.1.1 violation.

**File:** `Nav.tsx`

```tsx
// Add to the Nav component:
useEffect(() => {
  function handleEscape(e: KeyboardEvent) {
    if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
  }
  document.addEventListener("keydown", handleEscape);
  return () => document.removeEventListener("keydown", handleEscape);
}, [mobileOpen]);

// Also add aria-expanded to toggle button:
<button
  type="button"
  className="md:hidden p-2 text-slate-600"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileOpen}
>
```

---

### 8. MEDIUM -- Missing OG image and canonical URL

**Impact:** Social shares render without preview image. Duplicate content risk without canonical.

**File:** `layout.tsx`

```tsx
export const metadata: Metadata = {
  // ...existing...
  metadataBase: new URL("https://caresite.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    // ...existing...
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Caresite.io" }],
  },
  twitter: {
    // ...existing...
    images: ["/og-image.png"],
  },
};
```

---

### 9. MEDIUM -- No FAQPage structured data

**Impact:** Missing Google rich snippet opportunity. FAQ section is perfectly suited for `FAQPage` JSON-LD.

**File:** `layout.tsx` or `page.tsx`

```tsx
// Add to page.tsx or as a <script> in layout
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};
```

---

### 10. MEDIUM -- Testimonials star ratings not accessible

**Impact:** Screen readers cannot determine rating. WCAG 1.1.1 violation.

**File:** `Testimonials.tsx`

```tsx
<div className="flex gap-1 mb-4" role="img" aria-label={`${t.stars} out of 5 stars`}>
  {Array.from({ length: t.stars }).map((_, j) => (
    <Star key={j} size={16} className="text-accent-500 fill-accent-500" aria-hidden="true" />
  ))}
</div>
```

---

## Summary Scoreboard

| Category | Score | Notes |
|----------|-------|-------|
| WCAG 2.1 AA | **4/10** | 3 critical violations, 4 high, several medium |
| Semantic HTML | **7/10** | Good heading hierarchy, minor landmark gaps |
| Keyboard Nav | **3/10** | No focus indicators, no escape handler, no skip link |
| Form A11y | **6/10** | Labels correct, missing autocomplete + error states |
| Responsive | **8/10** | Solid responsive grid, minor table scroll issue |
| Performance | **7/10** | Framer Motion overhead, otherwise clean |
| SEO | **7/10** | Good metadata, missing OG image, canonical, and structured data |
| Code Quality | **7/10** | Clean TypeScript, misleading font vars, no error boundary |

**Overall: 13 issues to fix before launch, 6 of which are WCAG failures.**
