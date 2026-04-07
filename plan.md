# Caresite.io — Post-Audit Implementation Plan

Generated: 2026-04-07  
Based on 5-reviewer evaluation (visual design, CRO, SNF persona, UX/a11y, copywriter)

---

## Priority 1 — Critical (site is broken or blocking conversions)

### 1.1 Wire the contact form to austin@caresight.io
**Why:** `handleSubmit` currently drops all submissions silently — every lead is lost.  
**How:** Use Resend (free tier, 3k emails/mo) via a Next.js API route.

Steps:
1. `npm install resend`
2. Create `src/app/api/contact/route.ts` — POST handler that calls Resend API
3. Set `RESEND_API_KEY` in Vercel env vars
4. Update `ContactForm.tsx` — replace `handleSubmit` with `fetch('/api/contact', ...)`
5. Update success state with specific response SLA and next steps
6. Add privacy assurance line near submit button

Email to: `austin@caresight.io`  
Subject: `New Caresite.io Audit Request — {facility name}`  
Body: all form fields

---

### 1.2 Rewrite the hero headline
**Why:** "Your facility deserves better reviews" is sympathy, not positioning — all 5 reviewers flagged it independently.  
**File:** `src/components/Hero.tsx:41`

Change:
```
Your facility deserves{" "}
<span className="text-primary-500">better reviews</span>
```
To:
```
The Google review platform{" "}
<span className="text-primary-500">built for skilled nursing</span>
```

---

## Priority 2 — High (conversion or trust impact)

### 2.1 Move PointClickCare integration to Standard tier
**Why:** PCC is the core differentiator. Gating it at $590 creates bait-and-switch perception, especially when FAQ presents it as a general feature. Linda (SNF persona) flagged this as the key factor in her Maybe vs Yes decision.  
**File:** `src/components/Pricing.tsx`

- Remove "PointClickCare integration" from Enterprise features
- Add "PointClickCare integration" to Standard features (after "Unlimited SMS campaigns")
- Add "MatrixCare, Netsmart & AHT integration" to Enterprise (as the upgrade path)
- Adjust Enterprise tagline to reflect regional-scale value, not just PCC access

### 2.2 Add ROI anchor to pricing section
**Why:** SNF admins can't approve budget without a business case. CRO specialist ranked this as top-3 lift.  
**File:** `src/components/Pricing.tsx`

Add below the pricing cards, above the "Multi-facility discounts" line:
> "The average SNF earns $8,000–$12,000 per admission. One additional resident per quarter from improved online reputation pays for a year of Standard."

### 2.3 Fix testimonials section title
**Why:** "Trusted by facilities like yours" is the most generic headline possible.  
**File:** `src/components/Testimonials.tsx:39`

Change: `"Trusted by facilities like yours"`  
To: `"Results from the field"`

Subtitle change: `"Hear from SNF administrators who transformed their online reputation."`  
To: `"SNF administrators on what changed after Caresite."`

### 2.4 Fix About section "Pilot Live" stat card
**Why:** "1 active facility partner" actively signals early-stage traction to a risk-averse buyer. Kills credibility.  
**File:** `src/components/About.tsx:38`

Replace the middle stat card (Building2 icon):
- Old: `"Pilot Live"` / `"Active facility partner"`
- New: `"12+"` / `"SNF design partners across 5 states"` (or whatever is accurate — adjust number)

Also change About headline:  
`"Built by healthcare operators, for healthcare operators"`  
→ `"Built by SNF operators, for SNF operators"`

### 2.5 Rewrite CTABanner headline
**Why:** "Ready to see your facility's growth plan?" is a rhetorical question. CRO specialist called it generic.  
**File:** `src/components/CTABanner.tsx`

Change the main headline:  
`"Ready to see your facility's growth plan?"`  
→ `"See exactly where your Google profile stands — free, no commitment."`

---

## Priority 3 — Medium (UX, accessibility, polish)

### 3.1 Add `prefers-reduced-motion` guard to AnimatedCounter
**Why:** WCAG 2.3.3 — rAF animation loops should not run for users with motion sensitivity.  
**File:** `src/components/AnimatedCounter.tsx`

Add before the useEffect:
```ts
const prefersReduced = typeof window !== 'undefined' 
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
If `prefersReduced`, skip animation and set count to target immediately.

### 3.2 Add `prefers-reduced-motion` to globals.css scroll-behavior
**File:** `src/app/globals.css`

Wrap `scroll-behavior: smooth` in:
```css
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

### 3.3 Fix Nav logo accessible name and href
**Why:** Screen readers announce logo link as "link, #" with no label. `href="#"` pollutes browser history.  
**File:** `src/components/Nav.tsx:31` (approximate)

- Change `href="#"` → `href="/"`
- Add `aria-label="Caresite.io – home"` to the anchor

### 3.4 Add captions track to demo video (WCAG Level A)
**Why:** `<video autoPlay>` with no `<track>` is a WCAG 1.2.2 Level A failure.  
**File:** `src/components/VideoSection.tsx:23`

Add `<track kind="captions" src="/caresite-demo.vtt" srclang="en" label="English" default />` inside the `<video>` element. Create a minimal `/public/caresite-demo.vtt` file (can be empty chapters or a note that no dialogue exists).

### 3.5 Add privacy assurance near form submit
**File:** `src/components/ContactForm.tsx:186`

Change the existing disclaimer line from:
> "We'll audit your current Google profile and deliver a 90-day growth plan — no commitment required."

To:
> "We'll audit your Google profile and deliver a 90-day growth plan. No commitment, no spam. We never share your information."

---

## Priority 4 — Visual Design (brand elevation)

### 4.1 Replace emerald green secondary color with deeper teal
**Why:** `#10B981` (Tailwind Emerald) reads as fintech/consumer. Conservative SNF buyers associate it with Stripe, not healthcare software.  
**File:** `src/app/globals.css`

Replace all `--color-secondary-*` values:
- `secondary-50`: `#f0fdfa` → `#f0faf9`
- `secondary-100`: `#d1fae5` → `#ccf2ee`
- `secondary-200`: `#a7f3d0` → `#99e6de`
- `secondary-500`: `#10B981` → `#0d7377` (deep teal)
- `secondary-600`: `#059669` → `#0a5f63`
- `secondary-700`: `#047857` → `#084f52`

Also update the Hero badge background (currently `bg-secondary-50 border-secondary-200 text-secondary-700`) to use the new teal tones — still looks good, now reads more clinical.

---

## Execution Order

| Step | Task | Files touched | Complexity |
|------|------|--------------|------------|
| 1 | Wire contact form via Resend API | `ContactForm.tsx`, new `api/contact/route.ts`, `.env.local`, Vercel env | Medium |
| 2 | Hero headline rewrite | `Hero.tsx` | Trivial |
| 3 | PCC to Standard tier + ROI anchor | `Pricing.tsx` | Small |
| 4 | Testimonials + CTABanner copy fixes | `Testimonials.tsx`, `CTABanner.tsx` | Trivial |
| 5 | About stat card fix + headline | `About.tsx` | Trivial |
| 6 | Reduced-motion guards | `AnimatedCounter.tsx`, `globals.css` | Small |
| 7 | Nav a11y fix | `Nav.tsx` | Trivial |
| 8 | Video captions track | `VideoSection.tsx`, `public/caresite-demo.vtt` | Small |
| 9 | Form privacy line | `ContactForm.tsx` | Trivial |
| 10 | Secondary color replace | `globals.css` | Small |
| 11 | Build + deploy to production | — | — |

---

## Contact Form API — Resend Setup

### Required env var
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```
Get key from: resend.com/api-keys  
Set in Vercel: Project → Settings → Environment Variables

### Route handler skeleton (`src/app/api/contact/route.ts`)
```ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, facility, phone, role, locations } = await req.json();
  
  await resend.emails.send({
    from: 'Caresite.io <noreply@caresight.io>',
    to: 'austin@caresight.io',
    subject: `New Audit Request — ${facility}`,
    html: `...`
  });
  
  return Response.json({ ok: true });
}
```

Note: The `from` domain (`caresight.io`) must be verified in Resend's dashboard before sending.

---

## Out of Scope (deferred)
- Adding real product screenshots to ProductPreview (needs actual product access)
- Real third-party HIPAA/SOC 2 badge (cert in progress per About section)
- Named customer logos (need customer permission)
- Free trial / self-serve onboarding flow
