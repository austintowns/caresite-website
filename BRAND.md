# Caresight.io Brand Guidelines

> The only Google review platform built exclusively for skilled nursing facilities.

---

## 1. Brand Identity

### Name & Domain

| Element | Value |
|---------|-------|
| Brand name | **Caresight** |
| Full brand name | **Caresight.io** |
| Domain | `caresight.io` |
| Always write as | `Caresight.io` (capital C, lowercase everything else, `.io` included) |

**Never write:** Caresite, CAreSight, caresight, CARESIGHT

### Positioning Statement

> The only Google review management platform built exclusively for skilled nursing facilities — HIPAA-safe by architecture, PointClickCare-native, and built for how SNF administrators actually work.

### Brand Personality

| Trait | What it means in practice |
|-------|--------------------------|
| **Clinical confidence** | Precise, evidence-based, not salesy. Like a good physician, not a car dealer. |
| **Operationally fluent** | Speaks the language of census, discharges, F-tags, star ratings — not generic "reviews." |
| **Quietly authoritative** | Doesn't brag. Shows results. Lets data speak. |
| **Trustworthy, not stiff** | Warm enough to feel human; professional enough to sign a BAA. |

### Voice & Tone

**Do:**
- Use SNF/LTC vocabulary: census, discharge planners, F-tags, survey windows, DON, administrator
- Active voice, short sentences
- Outcome-first: lead with what changed, then explain how
- "You" and "your facility" — never "clients" or "users"

**Don't:**
- Use "audit" (CMS connotation — use "analysis")
- Use generic SaaS language: "leverage," "synergy," "seamless," "robust"
- Confirm or deny a patient relationship in any public-facing copy
- Overpromise: "guaranteed," "always," "every facility"

**Examples:**

| Don't | Do |
|-------|-----|
| "Leverage our robust review platform" | "Turn every discharge into a review request" |
| "Seamless EHR integration" | "Connects to PointClickCare — no manual work" |
| "Guaranteed 5-star results" | "On average, facilities go from 1 review every 10 months to 10+ per month" |
| "Submit your audit request" | "Get your free analysis" |

---

## 2. Logo

### Wordmark

The primary logo is a CSS/SVG wordmark — no icon required for most uses.

```
Care   +   sight   +   .io
[blue]   [slate-800]  [blue]
```

**Colors in the wordmark:**
- `Care` → `#1E6BB8` (Primary Blue)
- `sight` → `#1E293B` (Slate 800)
- `.io` → `#1E6BB8` (Primary Blue)

**Font:** Inter, `font-weight: 700` (Care + sight), `font-weight: 500` (.io)

**On dark backgrounds:** `sight` flips to `#FFFFFF`

### Icon Mark

Used for favicon, app icon, social avatar, video bumpers.

```svg
<svg viewBox="0 0 32 32">
  <!-- Blue rounded square -->
  <rect width="32" height="32" rx="8" fill="#1E6BB8"/>
  <!-- C-arc (open on right) -->
  <path d="M22.5 11.5C21.2 9.9 19.2 9 17 9C13.1 9 10 12.1 10 16C10 19.9 13.1 23 17 23C19.2 23 21.2 22.1 22.5 20.5"
        stroke="white" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Center dot -->
  <circle cx="17" cy="16" r="2" fill="white"/>
</svg>
```

The "C with a dot" mark combines:
- A C-arc representing care/clinical precision
- A center dot representing a focal point — the review, the moment, the signal

### Logo Files

| File | Location | Use |
|------|----------|-----|
| `icon.svg` | `src/app/icon.svg` | Favicon (auto-served by Next.js) |
| `Logo.tsx` | `src/components/Logo.tsx` | React wordmark component |
| `opengraph-image.tsx` | `src/app/opengraph-image.tsx` | OG/social preview image |

### Logo Don'ts

- Don't rearrange the Care / sight / .io segments
- Don't use the wordmark at less than 120px wide
- Don't place the icon on a busy background without sufficient contrast
- Don't change `sight` to a different color — the two-tone split is the mark

---

## 3. Color Palette

### Primary — Clinical Blue

The primary blue evokes trust, precision, and the healthcare environment. It's deep enough to signal seriousness, bright enough to signal modernity.

| Token | Hex | Use |
|-------|-----|-----|
| `primary-500` | `#1E6BB8` | **Brand color.** Buttons, links, logo, active states. |
| `primary-600` | `#1A5FA5` | Button hover states |
| `primary-700` | `#155089` | Dark mode accents |
| `primary-100` | `#DBEAFE` | Light backgrounds, info banners |
| `primary-50` | `#EFF6FF` | Section backgrounds, subtle tints |

**Accessibility:** `#1E6BB8` on white (`#FFFFFF`) passes WCAG AA for normal text and AAA for large text.

### Secondary — Deep Teal

The secondary color signals growth, outcomes, and positive change — check marks, success states, positive metrics.

| Token | Hex | Use |
|-------|-----|-----|
| `secondary-500` | `#0d7377` | Success states, check marks, positive indicators |
| `secondary-400` | `#2dada1` | Hover on secondary elements |
| `secondary-100` | `#ccf0ec` | Success backgrounds |
| `secondary-50` | `#f0faf9` | Success banners (e.g., form confirmation) |

### Accent — Amber

Reserved for urgency, warnings, and the single most important highlight element on a page. Use sparingly — maximum one instance per section.

| Token | Hex | Use |
|-------|-----|-----|
| `accent-500` | `#F59E0B` | Highlight badges, "Most Popular" label, single callout |
| `accent-400` | `#FBBF24` | Hover state |
| `accent-600` | `#D97706` | Active state |

### Neutrals — Slate

The full UI chrome. All text, borders, dividers, and backgrounds use the slate scale.

| Token | Hex | Use |
|-------|-----|-----|
| `slate-900` | `#0F172A` | Dark backgrounds (nav, footer) |
| `slate-800` | `#1E293B` | Primary body text, `sight` in wordmark |
| `slate-700` | `#334155` | Secondary headings |
| `slate-600` | `#475569` | Body copy |
| `slate-500` | `#64748B` | Captions, labels, metadata |
| `slate-400` | `#94A3B8` | Placeholder text |
| `slate-300` | `#CBD5E1` | Borders |
| `slate-200` | `#E2E8F0` | Dividers, card borders |
| `slate-100` | `#F1F5F9` | Subtle section backgrounds |
| `slate-50` | `#F8FAFC` | Page backgrounds |

### Color Usage Rules

- **Never** use primary blue as a large background color (it's for elements, not sections)
- **Never** use more than two accent amber elements per page
- Section backgrounds alternate: `white` → `slate-50` → `primary-50/30` → dark (`slate-900`)
- All interactive elements require a visible focus ring: `2px solid #1E6BB8` with `outline-offset: 2px`

---

## 4. Typography

### Font Stack

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Headings & UI | **Plus Jakarta Sans** | 600, 700, 800 | Google Fonts |
| Body & labels | **Inter** | 400, 500, 600 | Google Fonts |
| Fallback | system-ui, -apple-system, sans-serif | — | System |

**CSS variables:**
```css
--font-sans: var(--font-geist-sans);   /* Inter */
--font-mono: var(--font-geist-mono);   /* Plus Jakarta Sans */
```

### Type Scale

| Style | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| Display XL | `text-6xl` (60px) | 800 | 1.1 | Hero headlines (desktop) |
| Display L | `text-4xl` (36px) | 700 | 1.15 | Section headlines |
| Display M | `text-3xl` (30px) | 700 | 1.2 | Sub-section headlines |
| Heading | `text-xl` (20px) | 600 | 1.3 | Card titles, feature names |
| Body L | `text-lg` (18px) | 400 | 1.6 | Lead paragraphs, subtitles |
| Body | `text-base` (16px) | 400 | 1.5 | Standard body copy |
| Small | `text-sm` (14px) | 400–500 | 1.5 | Labels, captions, fine print |
| XS | `text-xs` (12px) | 400 | 1.4 | Legal text, footnotes |

### Mobile Type Scale

Hero headlines reduce: `text-3xl sm:text-4xl lg:text-6xl`

### Hierarchy Rules

- One H1 per page (the hero headline)
- Section headers use H2
- Feature/card titles use H3
- Never skip heading levels
- Eyebrow text (category label above headline): `text-sm font-semibold uppercase tracking-wider text-primary-600`

---

## 5. Spacing & Layout

### Container

```
max-w-7xl mx-auto px-6 lg:px-8
```

### Section Padding

```
py-16 lg:py-24
```

### Section Backgrounds (alternating)

```
white → slate-50 → white → primary-50/30 → white → slate-900 (dark)
```

### Grid System

| Use | Grid |
|-----|------|
| 3-column features | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` |
| 2-column side-by-side | `grid-cols-1 lg:grid-cols-2` |
| Pricing tiers | `grid-cols-1 md:grid-cols-3` |
| Form fields | `grid-cols-1 sm:grid-cols-2` |

---

## 6. Components

### Buttons

| Variant | Background | Text | Use |
|---------|------------|------|-----|
| `primary` | `#1E6BB8` | white | Primary CTA — one per section max |
| `outline` | transparent | `#1E6BB8` border | Secondary actions |
| `white` | white | `#1E6BB8` | On blue/dark backgrounds |
| `secondary` | `#0d7377` | white | Success/confirmation actions |

All buttons use `rounded-full` and `shadow-lg` with a colored shadow (`shadow-primary-500/25`).

### Primary CTA Copy

Consistent across the site — never change without updating all instances:
- Primary: **"Get Your Free Analysis"**
- Late-funnel: **"Schedule the 20-Minute Call"**
- FAQ bridge: **"Book a 20-Minute Call"**

### Cards

```
bg-white border border-slate-200 rounded-2xl shadow-sm p-8
```

Featured/highlighted card:
```
border-primary-500 shadow-xl shadow-primary-500/10 scale-[1.02]
```

### Section Headers

Pattern:
1. Eyebrow: `text-sm font-semibold uppercase tracking-wider text-primary-600`
2. Title: `text-3xl sm:text-4xl font-bold text-slate-900`
3. Subtitle: `text-lg text-slate-600 max-w-2xl mx-auto`

### Form Inputs

```
rounded-lg border border-slate-300 px-4 py-3
focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none
```

---

## 7. Motion & Animation

All animations use Framer Motion with `viewport={{ once: true }}`.

### Standard Entrance

```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

### Staggered Children

Each item adds `delay: index * 0.1` to the transition.

### Reduced Motion

All animations must respect `prefers-reduced-motion`. Counter animations skip to final value. Framer Motion `viewport` animations still fire but with `duration: 0`.

---

## 8. Imagery & Iconography

### Icons

Library: **Lucide React** — consistent, clean, 2px stroke weight.

Common icons and their usage:
| Icon | Use |
|------|-----|
| `CheckCircle` | Success states, feature confirmations |
| `ArrowRight` | CTA direction, "next step" |
- `ChevronDown` | Accordion expand |
| `Check` | Feature list items (in pricing, feature grid) |
| `Menu` / `X` | Mobile nav toggle |

Icon sizes: `size={16}` inline, `size={20}` UI elements, `size={48}` hero/feature icons.

### Photography & Illustration

- Avoid stock photos of generic "healthcare workers"
- If photography is used, it must feel authentic to SNF environments (not hospital/acute care)
- No images that could imply depicting a specific patient or resident
- Prefer data visualizations, dashboard screenshots, and UI mockups over lifestyle photography

---

## 9. Compliance Copy Rules

These rules apply to all marketing copy, social posts, emails, and ads:

1. **Never confirm or deny a patient/resident relationship** in public-facing copy — AI responses must be general
2. **Never use "audit"** — say "analysis" or "review"
3. **HIPAA claim:** Always say "HIPAA-safe by architecture" or "no PHI stored" — never "HIPAA compliant" (compliance is a process, not a state)
4. **Review solicitation:** Must be compliant with Google's policies — no incentivized reviews
5. **Testimonials:** All quotes are composite personas based on design partner feedback — never attribute to a named real facility without written consent
6. **Stats:** Always include the footnote: "Based on average results across design partner facilities. Individual results vary."

---

## 10. File Structure

```
caresite-website/
├── src/
│   ├── app/
│   │   ├── icon.svg              ← Favicon (the C-mark icon)
│   │   ├── opengraph-image.tsx   ← OG/social preview (1200×630)
│   │   ├── layout.tsx            ← Meta tags, fonts
│   │   └── globals.css           ← Full color/token system (Tailwind v4)
│   └── components/
│       ├── Logo.tsx              ← Wordmark component (Care + sight + .io)
│       ├── Button.tsx            ← Button variants (primary/outline/white/secondary)
│       └── Section.tsx           ← Section + SectionHeader layout primitives
└── public/
    ├── caresight-demo.mp4        ← Product demo video (Remotion-rendered)
    └── caresight-demo.vtt        ← Captions track
```

---

## 11. Domain & Product Naming

| Surface | Name to use |
|---------|-------------|
| Marketing site URL | `caresight.io` or `www.caresight.io` |
| Product dashboard | `pulse.caresight.io` |
| Email | `@caresight.io` |
| Social handles | `@caresightio` |
| GitHub repo | `austintowns/caresite-website` (legacy, leave as-is) |

---

*Last updated: April 2026 — v1.0*
