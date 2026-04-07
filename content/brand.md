# Caresite.io Brand Guide

> Google review management built exclusively for Skilled Nursing Facilities.

---

## 1. Color Palette

### Primary — Medical Blue
Conveys trust, professionalism, and clinical credibility. Used for headers, nav, primary UI elements.

| Token | Hex | Tailwind Config Key | Usage |
|-------|-----|---------------------|-------|
| `primary-50` | `#EFF6FF` | `colors.primary.50` | Tinted backgrounds |
| `primary-100` | `#DBEAFE` | `colors.primary.100` | Hover states, cards |
| `primary-200` | `#BFDBFE` | `colors.primary.200` | Borders, dividers |
| `primary-300` | `#93C5FD` | `colors.primary.300` | Icons, secondary text |
| `primary-500` | `#2563EB` | `colors.primary.500` | **Primary brand color** |
| `primary-600` | `#1D4ED8` | `colors.primary.600` | Hover on primary |
| `primary-700` | `#1E40AF` | `colors.primary.700` | Active/pressed state |
| `primary-900` | `#1E3A5F` | `colors.primary.900` | Dark headings on light bg |

### Secondary — Calming Green
Communicates growth, health outcomes, and positive reputation trajectory.

| Token | Hex | Tailwind Config Key | Usage |
|-------|-----|---------------------|-------|
| `secondary-50` | `#F0FDF4` | `colors.secondary.50` | Success backgrounds |
| `secondary-100` | `#DCFCE7` | `colors.secondary.100` | Stat cards, badges |
| `secondary-200` | `#BBF7D0` | `colors.secondary.200` | Chart positive zones |
| `secondary-500` | `#16A34A` | `colors.secondary.500` | **Secondary brand color** |
| `secondary-600` | `#15803D` | `colors.secondary.600` | Hover on secondary |
| `secondary-700` | `#166534` | `colors.secondary.700` | Active/pressed state |

### Accent — Warm Amber
Used sparingly for CTAs, alerts, and conversion-critical elements. Warm enough to stand out against the blue/green clinical palette without feeling aggressive.

| Token | Hex | Tailwind Config Key | Usage |
|-------|-----|---------------------|-------|
| `accent-50` | `#FFFBEB` | `colors.accent.50` | Warning backgrounds |
| `accent-100` | `#FEF3C7` | `colors.accent.100` | Highlight badges |
| `accent-500` | `#F59E0B` | `colors.accent.500` | **Star ratings, CTA buttons** |
| `accent-600` | `#D97706` | `colors.accent.600` | CTA hover |
| `accent-700` | `#B45309` | `colors.accent.700` | CTA active |

### Neutrals
Light, clinical feel. No dark-mode defaults. White-forward design.

| Token | Hex | Tailwind Config Key | Usage |
|-------|-----|---------------------|-------|
| `neutral-white` | `#FFFFFF` | `colors.neutral.white` | Page backgrounds |
| `neutral-50` | `#F8FAFC` | `colors.neutral.50` | Section alternating bg |
| `neutral-100` | `#F1F5F9` | `colors.neutral.100` | Card backgrounds |
| `neutral-200` | `#E2E8F0` | `colors.neutral.200` | Borders, dividers |
| `neutral-300` | `#CBD5E1` | `colors.neutral.300` | Disabled states |
| `neutral-400` | `#94A3B8` | `colors.neutral.400` | Placeholder text |
| `neutral-500` | `#64748B` | `colors.neutral.500` | Secondary body text |
| `neutral-700` | `#334155` | `colors.neutral.700` | Body text |
| `neutral-900` | `#0F172A` | `colors.neutral.900` | Headings, high-emphasis text |

### Semantic Colors

| Purpose | Hex | Notes |
|---------|-----|-------|
| Success | `#16A34A` | Mirrors secondary-500 |
| Warning | `#F59E0B` | Mirrors accent-500 |
| Error | `#DC2626` | Red — used for alerts only |
| Info | `#2563EB` | Mirrors primary-500 |

---

## 2. Typography

### Font Stack

| Role | Font | Google Fonts | Weight Range | Fallback |
|------|------|-------------|--------------|----------|
| **Headings** | Inter | `Inter:wght@500;600;700` | 500-700 | `system-ui, -apple-system, sans-serif` |
| **Body** | Inter | `Inter:wght@400;500` | 400-500 | `system-ui, -apple-system, sans-serif` |
| **Monospace** | JetBrains Mono | `JetBrains+Mono:wght@400` | 400 | `ui-monospace, monospace` |

Inter is chosen for its clarity at small sizes, medical-grade readability, and extensive weight range. A single-family approach keeps the design cohesive and loading fast.

### Type Scale

| Level | Size (rem) | Line Height | Weight | Tracking | Usage |
|-------|-----------|-------------|--------|----------|-------|
| `display` | 3.5rem (56px) | 1.1 | 700 | -0.02em | Hero headlines |
| `h1` | 2.25rem (36px) | 1.2 | 700 | -0.015em | Page titles |
| `h2` | 1.75rem (28px) | 1.25 | 600 | -0.01em | Section headings |
| `h3` | 1.375rem (22px) | 1.3 | 600 | -0.005em | Card headings |
| `h4` | 1.125rem (18px) | 1.35 | 600 | 0 | Subsection headings |
| `body-lg` | 1.125rem (18px) | 1.6 | 400 | 0 | Lead paragraphs |
| `body` | 1rem (16px) | 1.6 | 400 | 0 | Default body |
| `body-sm` | 0.875rem (14px) | 1.5 | 400 | 0 | Captions, metadata |
| `overline` | 0.75rem (12px) | 1.5 | 500 | 0.05em | Labels, overlines (uppercase) |

---

## 3. Voice & Tone

### Principles

1. **Credible, not clinical.** We speak with authority on SNF reputation but avoid sounding like a medical journal.
2. **Direct, not pushy.** We respect that administrators are busy. Get to the point.
3. **Supportive, not patronizing.** SNF staff do hard work. Acknowledge it without over-explaining.
4. **Specific, not generic.** Always reference skilled nursing — never "businesses" or "companies."

### Writing Rules

- Use "facility" or "community," not "business" or "company"
- Use "residents" and "families," not "customers" or "clients"
- Use "your team," not "your staff" (team feels collaborative, staff feels hierarchical)
- Use active voice: "Caresite captures reviews" not "Reviews are captured by Caresite"
- Numbers are persuasive — use them: "4.2 to 4.7 stars in 90 days"
- One CTA per section. Never compete for attention.

### Do / Don't Examples

| Do | Don't |
|----|-------|
| "Families check Google before choosing a facility." | "In today's digital landscape, online reputation matters." |
| "Caresite helps your facility earn more 5-star reviews." | "Our cutting-edge platform leverages AI to optimize your digital presence." |
| "Built for skilled nursing. Nothing else." | "A versatile solution for healthcare organizations of all types." |
| "See how Pacific Care went from 3.8 to 4.6 stars." | "Join thousands of satisfied customers!" |
| "Your facility deserves the reviews your care earns." | "Don't let negative reviews destroy your business!" |
| "Set up in 15 minutes. No IT team needed." | "Our seamless onboarding experience ensures rapid deployment." |
| "We know CMS ratings matter. Reviews do too." | "Enhance your multi-channel reputation management strategy." |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Homepage hero | Confident, clear | "The review platform built for skilled nursing." |
| Feature pages | Informative, specific | "Automated review requests go out after discharge, timed to when families feel most grateful." |
| Case studies | Proof-driven, warm | "Pacific Care's team was skeptical. Their 4.6-star rating changed that." |
| Error/empty states | Helpful, calm | "No reviews this week. That's okay — we'll help you change that." |
| Email sequences | Personal, actionable | "Your facility got 3 new reviews this week. Here's how to keep the momentum." |

---

## 4. Taglines

### Top 3

1. **"Better reviews for better care."**
   Connects reputation to mission. Implies that good care deserves good reviews.

2. **"The review platform built for skilled nursing."**
   Positions clearly: SNF-specific, review-focused, purpose-built.

3. **"Your care deserves to be seen."**
   Emotional hook. Speaks to the frustration that great facilities get overlooked.

### Runners-up (for campaign/ad variation)

- "From care to stars." (punchy, campaign-ready)
- "Reputation management for SNFs." (search/SEO-friendly, literal)
- "Reviews that reflect your care." (softer, trust-building)

---

## 5. Logo Concept

### Mark Description

Text-based wordmark: **Caresite.io**

```
Caresite.io
^^^^^^^^ ^^^
|        |
|        +-- ".io" in a lighter weight and secondary-500 green (#16A34A)
|
+----------- "Caresite" in primary-900 (#1E3A5F), font-weight 700
```

### Specifications

- **Font:** Inter, customized letterspacing at -0.02em
- **"Caresite"** — `#1E3A5F` (primary-900), weight 700
- **".io"** — `#16A34A` (secondary-500), weight 400
- **Sizing ratio:** The ".io" is set at the same font-size as "Caresite" but the lighter weight and color shift creates visual hierarchy
- **Minimum size:** 120px wide for digital, 1 inch for print
- **Clear space:** Maintain padding equal to the height of the lowercase "e" on all sides

### Icon Element (Optional Favicon/App Icon)

A simplified "C" letterform inside a rounded square:
- Background: `#2563EB` (primary-500)
- Letter: `#FFFFFF` (white)
- Border radius: 22% of width (matching iOS icon spec)
- The "C" is set in Inter Bold, vertically and horizontally centered

### SVG Reference

```svg
<!-- Wordmark -->
<svg viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="24" font-family="Inter, system-ui, sans-serif" font-size="28" letter-spacing="-0.56">
    <tspan fill="#1E3A5F" font-weight="700">Caresite</tspan>
    <tspan fill="#16A34A" font-weight="400">.io</tspan>
  </text>
</svg>

<!-- Favicon -->
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="7" fill="#2563EB"/>
  <text x="16" y="23" text-anchor="middle" font-family="Inter, system-ui, sans-serif"
        font-size="22" font-weight="700" fill="white">C</text>
</svg>
```

### Usage Rules

- Always use the full "Caresite.io" wordmark on first reference per page
- Never rotate, stretch, or add effects (drop shadows, gradients)
- On dark backgrounds (rare — this is a light-design brand), use white for "Caresite" and `secondary-300` (`#86EFAC`) for ".io"
- Never separate "Caresite" from ".io" — they are one unit

---

## 6. Tailwind Config Reference

```js
// tailwind.config.js (partial)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          900: '#1E3A5F',
        },
        secondary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#16A34A',
          600: '#15803D',
          700: '#166534',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        neutral: {
          white: '#FFFFFF',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          700: '#334155',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
};
```
