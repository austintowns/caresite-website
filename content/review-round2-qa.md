# QA / Accessibility Audit -- Round 2

**Date:** 2026-04-06
**Scope:** All 20 source files (page, layout, globals, 17 components)
**Standard:** WCAG 2.1 AA
**Baseline:** Round 1 audit (same date, earlier revision)

---

## 1. Fixed Items from Round 1

| Round 1 Issue | Status | Detail |
|---------------|--------|--------|
| **No visible focus indicators** (R1 #1, CRITICAL) | FIXED | `globals.css` now has a global `focus-visible` rule targeting `a`, `button`, `select`, `input`, `textarea` with a 2px solid `primary-500` outline. This covers all interactive elements site-wide. |
| **Missing `autocomplete` on form inputs** (R1 #4, HIGH) | FIXED | `ContactForm.tsx` now includes `autoComplete="name"`, `autoComplete="email"`, and `autoComplete="tel"` on the appropriate fields. |
| **Missing phone field on form** (R1 UX gap) | FIXED | A phone input (`type="tel"`) with `autoComplete="tel"` has been added. |
| **Form submit button missing focus ring** (R1 #1, HIGH) | FIXED | Submit button now has `focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`. |
| **ComparisonTable icons missing accessible text** (R1 #2, CRITICAL) | PARTIALLY FIXED | `aria-label` attributes added to `<Check>`, `<X>`, and `<Minus>` icons directly. See remaining issues below -- the approach is incomplete. |

**Summary:** 4 of 10 Round 1 top-priority fixes are fully resolved. 1 is partially resolved. 5 remain open.

---

## 2. Remaining Accessibility Issues

### 2.1 Still Open from Round 1

| Issue | WCAG | Severity | File(s) |
|-------|------|----------|---------|
| **FAQ accordion missing `aria-expanded`** | 4.1.2 Name, Role, Value | CRITICAL | `FAQ.tsx` |
| **FAQ panel has no `id`/`aria-controls`/`role="region"`** | 4.1.2 | HIGH | `FAQ.tsx` |
| **ComparisonTable icon `aria-label` on SVG, not wrapper** | 1.1.1 Non-text Content | HIGH | `ComparisonTable.tsx` |
| **No skip-to-content link** | 2.4.1 Bypass Blocks | HIGH | `page.tsx` / `layout.tsx` |
| **Mobile nav toggle missing `aria-expanded`** | 4.1.2 | MEDIUM | `Nav.tsx` |
| **No Escape key handler for mobile menu** | 2.1.1 Keyboard | MEDIUM | `Nav.tsx` |
| **No focus trap in mobile menu** | 2.1.1 Keyboard | MEDIUM | `Nav.tsx` |
| **Testimonials star ratings not accessible** | 1.1.1 | MEDIUM | `Testimonials.tsx` |
| **Footer heading skip (`<h4>` without `<h3>`)** | 1.3.1 Info and Relationships | LOW | `Footer.tsx` |
| **Nav not wrapped in `<header>`** | 1.3.1 | LOW | `Nav.tsx` / `page.tsx` |
| **Missing OG image / canonical URL** | N/A (SEO) | MEDIUM | `layout.tsx` |
| **No FAQPage structured data** | N/A (SEO) | MEDIUM | `page.tsx` |

### 2.2 New Issues Found in Round 2

| Issue | WCAG | Severity | File(s) | Detail |
|-------|------|----------|---------|--------|
| **Color contrast: `text-slate-400` on white** | 1.4.3 Contrast (Minimum) | HIGH | `ContactForm.tsx` (line 181), `Hero.tsx` (line 125), `TrustBar.tsx` | `#94A3B8` on `#FFFFFF` = 3.3:1. The helper text below the form submit ("We'll audit your current Google profile...") and stat suffixes still use `text-slate-400`. |
| **Color contrast: `text-primary-400` on white** | 1.4.3 | HIGH | `Logo.tsx` (line 6), `HowItWorks.tsx` (line 58) | `#60A5FA` on `#FFFFFF` = 2.6:1. The ".io" in the Logo and "Step 01/02/03" labels fail. |
| **Color contrast: `text-slate-500` on white (borderline)** | 1.4.3 | MEDIUM | `Pricing.tsx`, `Hero.tsx`, `Features.tsx` | `#64748B` on `#FFFFFF` = 4.4:1. Just under the 4.5:1 threshold for body text. Used for pricing taglines, stat labels, feature subtitles. |
| **`select` element missing `autoComplete` where applicable** | 1.3.5 Identify Input Purpose | LOW | `ContactForm.tsx` (role, locations) | Not standard autocomplete fields, so lower severity than R1 name/email. |
| **Form success state does not receive focus** | 4.1.3 Status Messages | MEDIUM | `ContactForm.tsx` | When form submits, success div replaces the form but focus stays at the old button position. Screen reader users get no indication of success. |
| **`Button` component always renders `<a>`, never `<button>`** | 4.1.2 | LOW | `Button.tsx` | Semantic issue. Anchors used for actions lack `role="button"` -- but since all current usages have `href`, this is a low-priority concern. |

---

## 3. Top 5 Remaining Fixes (Ranked by Severity)

### Fix 1: CRITICAL -- FAQ accordion missing `aria-expanded` and panel ARIA

**WCAG:** 4.1.2 (Name, Role, Value)
**Impact:** Screen readers cannot determine whether a FAQ answer is expanded or collapsed. This is the single highest-severity remaining WCAG failure.

**File:** `src/components/FAQ.tsx`

```tsx
// In AccordionItem, replace the current <button> (lines 62-74):
<button
  type="button"
  onClick={() => setOpen(!open)}
  aria-expanded={open}
  aria-controls={`faq-panel-${index}`}
  id={`faq-heading-${index}`}
  className="flex w-full items-center justify-between py-5 text-left"
>
  <span className="text-base font-medium text-slate-900 pr-4">{q}</span>
  <ChevronDown
    size={20}
    className={`shrink-0 text-slate-400 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    aria-hidden="true"
  />
</button>

// Wrap the panel content (line 77 motion.div) with:
<motion.div
  id={`faq-panel-${index}`}
  role="region"
  aria-labelledby={`faq-heading-${index}`}
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.2 }}
  className="overflow-hidden"
>
```

---

### Fix 2: HIGH -- ComparisonTable icons: `aria-label` on SVG not exposed to all screen readers

**WCAG:** 1.1.1 (Non-text Content)
**Impact:** Lucide SVG icons do not reliably pass `aria-label` through to the rendered `<svg>` element in all screen reader/browser combos. The Round 1 fix placed `aria-label` directly on the icon component, but the standard pattern is a wrapping `<span>` with `role="img"` and a visually-hidden text.

**File:** `src/components/ComparisonTable.tsx`

```tsx
function CellIcon({ value }: { value: CellValue }) {
  if (value === true)
    return (
      <span role="img" aria-label="Yes">
        <Check size={18} className="text-secondary-500" aria-hidden="true" />
      </span>
    );
  if (value === false)
    return (
      <span role="img" aria-label="No">
        <X size={18} className="text-red-400" aria-hidden="true" />
      </span>
    );
  if (value === "partial")
    return (
      <span role="img" aria-label="Partial">
        <Minus size={18} className="text-amber-400" aria-hidden="true" />
      </span>
    );
  return (
    <span className="text-sm font-semibold text-slate-700">{value}</span>
  );
}
```

The key change: the SVG icon gets `aria-hidden="true"` (so screen readers skip the raw SVG), and the wrapping `<span role="img">` carries the accessible name.

---

### Fix 3: HIGH -- Color contrast failures on small text

**WCAG:** 1.4.3 (Contrast Minimum -- 4.5:1 for normal text)
**Impact:** Low-vision users cannot read secondary text. Multiple components affected.

**Files and fixes:**

| Current Class | Color | Ratio | Replacement | New Ratio |
|---------------|-------|-------|-------------|-----------|
| `text-slate-400` | `#94A3B8` | 3.3:1 | `text-slate-500` | 4.4:1 (borderline) or `text-slate-600` | 7.0:1 |
| `text-primary-400` | `#60A5FA` | 2.6:1 | `text-primary-500` | 4.9:1 |
| `text-slate-500` | `#64748B` | 4.4:1 | `text-slate-600` | 7.0:1 |

Specific lines to change:

```
Logo.tsx:6         text-primary-400 -> text-primary-500
HowItWorks.tsx:58  text-primary-400 -> text-primary-500
ContactForm.tsx:181 text-slate-400 -> text-slate-500
ContactForm.tsx:120 text-slate-400 -> text-slate-500 (the "(optional)" label)
Hero.tsx:124       text-primary-500 (suffix) -- this one passes at 4.9:1, OK
Hero.tsx:125       text-slate-500 -> text-slate-600 (stat label)
Pricing.tsx:112    text-slate-500 -> text-slate-600 (period)
Pricing.tsx:116    text-slate-500 -> text-slate-600 (tagline)
```

Note: `text-slate-400` on the dark `bg-slate-900` footer background passes (5.7:1) and does not need to change.

---

### Fix 4: HIGH -- No skip-to-content link

**WCAG:** 2.4.1 (Bypass Blocks)
**Impact:** Keyboard and screen reader users must tab through the entire nav on every page section they navigate to. Critical for keyboard-only users.

**File:** `src/app/page.tsx`

```tsx
export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <TrustBar />
        {/* ... rest of sections ... */}
      </main>
      <Footer />
    </>
  );
}
```

Note: `<main>` already exists but lacks an `id`. Adding `id="main-content"` is the only change needed on that element.

---

### Fix 5: MEDIUM -- Mobile nav missing `aria-expanded` and Escape key handler

**WCAG:** 4.1.2 (Name, Role, Value), 2.1.1 (Keyboard)
**Impact:** Screen reader users cannot determine menu state. Keyboard users cannot dismiss the mobile overlay without clicking.

**File:** `src/components/Nav.tsx`

```tsx
// 1. Add aria-expanded to the toggle button (line 44-51):
<button
  type="button"
  className="md:hidden p-2 text-slate-600"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileOpen}
>
  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
</button>

// 2. Add Escape key handler inside the Nav component:
useEffect(() => {
  function handleEscape(e: KeyboardEvent) {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
    }
  }
  document.addEventListener("keydown", handleEscape);
  return () => document.removeEventListener("keydown", handleEscape);
}, [mobileOpen]);
```

Import `useEffect` alongside `useState` at the top of the file.

---

## 4. Summary Scoreboard (Round 1 vs Round 2)

| Category | R1 Score | R2 Score | Change | Notes |
|----------|----------|----------|--------|-------|
| WCAG 2.1 AA | 4/10 | **5/10** | +1 | Focus indicators fixed globally. FAQ and contrast still open. |
| Semantic HTML | 7/10 | **7/10** | -- | No changes to heading hierarchy or landmarks. |
| Keyboard Nav | 3/10 | **5/10** | +2 | Global focus-visible rule is a major improvement. Escape handler and skip link still missing. |
| Form A11y | 6/10 | **8/10** | +2 | Autocomplete added. Phone field added. Success focus still missing. |
| Responsive | 8/10 | **8/10** | -- | No changes. |
| Performance | 7/10 | **7/10** | -- | No changes. |
| SEO | 7/10 | **7/10** | -- | OG image, canonical, structured data still missing. |
| Code Quality | 7/10 | **7/10** | -- | Font var naming, Button-as-anchor, no error boundary still present. |

**Overall: 5 critical/high fixes remain before WCAG 2.1 AA compliance. The global focus-visible rule and form autocomplete additions are solid improvements. The top 5 fixes above should be the next implementation priority.**
