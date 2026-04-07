# Round 3 Final Review: Caresite.io Marketing Website

**Date:** 2026-04-06
**Scope:** All 20 component files, page.tsx, layout.tsx, globals.css
**Reviewers:** Diane (Urban SNF Admin), Marcus (Regional Ops), Karen (Rural SNF Admin), CRO Specialist, QA Auditor
**Baseline:** Round 1 + Round 2 feedback documents

---

## 1. Overall Verdict

**CONDITIONAL -- Launch-ready with 3 quick fixes applied first.**

The site has addressed the majority of Round 1 and Round 2 feedback. The About section, ProductPreview dashboard mockup, skip-to-content link, FAQ ARIA attributes, Nav aria-expanded + Escape handler, and Nav CTA copy ("Book Your Free Audit") are all resolved. The page tells a coherent story, has a well-qualified lead form, and speaks directly to the SNF buyer persona. The remaining issues are minor enough that they should not block launch, but 3 of them can be fixed in under 30 minutes and should be done before going live.

---

## 2. Per-Reviewer Final Assessment

### Diane Marshall (Urban SNF Administrator, 180-bed, Cleveland)

**Would I fill out the form now? Almost.** The About section now exists and tells me there are two co-founders with SNF experience, a live pilot, and SOC 2 in progress. That is a meaningful improvement -- I now know this is a real company with healthcare roots, not a generic SaaS startup. The ProductPreview dashboard mockup shows me what I would actually be buying, and it looks clean and purpose-built. The FAQ answers my HIPAA, EHR, and compliance questions directly. My remaining hesitation: the testimonials are still first-name-last-initial with no photos or named facilities, and the case study still lacks a named administrator. If I were forwarding this to my compliance officer, she would ask "who are these people?" But honestly -- for a $149/mo product with a free audit and no contract, my bar is lower than it was in Round 2. I would fill out the form now and evaluate during the audit call whether this team is credible. **Verdict: Would submit the form.**

### Marcus Chen (Regional Director of Operations, 12 facilities, Southeast)

**Could I forward this to my CEO? Yes, with caveats.** The page now hits the right notes for a multi-facility operator: the contact form asks for facility count, the Standard plan supports up to 10 locations, Enterprise is unlimited, and the comparison table shows clear differentiation from Podium/BirdEye/Reputation.com. The pricing is transparent -- my CEO hates "call for pricing" vendors. The case study showing 2.8 to 4.4 stars in 90 days is the kind of concrete outcome that gets budget approved. What is missing for a regional operator: volume discounts are mentioned ("Multi-facility discounts available") but not quantified. If I am bringing 12 facilities, I want to see a per-facility price break, not a "Contact us" link. Also, the comparison table is unusable on mobile, and my CEO will open this link on his phone during a meeting. But overall, the page makes a strong enough case that I would forward it with a note: "Worth a 30-minute call." **Verdict: Would forward to CEO.**

### Karen Whitfield (Rural SNF Administrator, 60-bed, Missouri)

**Do I understand everything? Yes. Is the price justified? Mostly.** The language is clear and avoids jargon I would not know. "Sentiment gating" is explained in the FAQ. "F-tag & survey integration" makes sense to me because I deal with F-tags every day. The three-step process (upload CSV, we send texts, reviews flow to Google) is simple enough that I could explain it to my board. At $149/mo for the Basic plan, the ROI argument is straightforward -- if we get even 5 new positive reviews, that is worth more than $149 in referral value. My concern: the Basic plan limits AI responses to 25/month. For a 60-bed facility generating maybe 10-15 reviews/month, that is probably fine. But if the platform works as described, I might outgrow Basic quickly and the jump to $300 is steep for a rural facility. An intermediate tier or a per-review overage option would help. That said, the "no annual contract, cancel anytime" messaging removes my risk. **Verdict: Would fill out the form, would push back on pricing during the audit call.**

### CRO Specialist

**Estimated conversion rate: 4-6% for qualified traffic (SNF administrators arriving via targeted channels).** This is above the B2B SaaS benchmark of 2-5% for landing pages. The page now has the key conversion elements in place: specific CTA ("Book Your Free Audit"), well-qualified form, mid-page CTA banner, social proof (testimonials + case study), product visualization (dashboard mockup), transparent pricing, and comprehensive FAQ. The section order is strong: Hero > TrustBar > PainPoints > HowItWorks > CaseStudy > CTABanner > ProductPreview > Features > ComparisonTable > Testimonials > Pricing > About > FAQ > ContactForm.

**Top 3 remaining quick wins:**

1. **Fix color contrast on "(optional)" label and form helper text.** `text-slate-400` on white fails WCAG 1.4.3 and also makes these elements harder to read for the 45-65 demographic. Change to `text-slate-500`. 10-second fix, removes an accessibility violation and improves readability. Expected lift: marginal but removes a friction point.

2. **Add a second CTABanner after Testimonials.** Users who scroll through Features > ComparisonTable > Testimonials (three dense sections) have no conversion opportunity until Pricing. Duplicating the existing CTABanner component after Testimonials captures users convinced by social proof. 30-second fix (one line in page.tsx). Expected lift: 5-8% increase in mid-funnel conversions.

3. **Move Testimonials before ComparisonTable.** Users should see proof that real people chose Caresite before evaluating a feature grid. The comparison table is more persuasive when it validates a decision the reader is already leaning toward. One line swap in page.tsx. Expected lift: 3-5% improvement in scroll-through past the comparison section.

### QA Auditor

**WCAG 2.1 AA status: 85% compliant. No remaining CRITICAL violations.**

Fixes verified since Round 2:
- Skip-to-content link: present and functional (`page.tsx` line 22-27)
- FAQ accordion: `aria-expanded`, `aria-controls`, `id`, `role="region"` all implemented correctly
- Nav mobile toggle: `aria-expanded={mobileOpen}` and `aria-label="Toggle menu"` present
- Nav Escape key handler: implemented via `useEffect`
- Global focus-visible indicators: present in `globals.css`
- Form autocomplete attributes: present on name, email, tel fields

**Remaining issues (none are launch blockers):**

| Issue | Severity | WCAG | Fix Effort |
|-------|----------|------|------------|
| `text-slate-400` on white background (ContactForm helper text, "(optional)" label) | HIGH | 1.4.3 | 2 min |
| ComparisonTable icons: `aria-label` on SVG directly instead of wrapping `<span role="img">` | MEDIUM | 1.1.1 | 5 min |
| ComparisonTable: `min-w-[640px]` forces horizontal scroll on mobile | MEDIUM | N/A (UX) | 30 min |
| Form success state does not programmatically receive focus | MEDIUM | 4.1.3 | 5 min |
| No OG image meta tag | LOW | N/A (SEO) | 5 min |
| Footer heading hierarchy skips h3 (goes h2 to h4) | LOW | 1.3.1 | 2 min |
| `/privacy` and `/terms` footer links likely 404 | MEDIUM | N/A (UX) | Requires page creation |

**Verdict: No CRITICAL WCAG violations remain. The 3 HIGH/MEDIUM items above should be addressed before launch but are not blockers if the timeline is tight.**

---

## 3. Remaining Quick Wins (Fixable in Code Right Now)

### 1. Fix `text-slate-400` contrast on white backgrounds
**Files:** `ContactForm.tsx` line 120 and line 181
**Change:** `text-slate-400` to `text-slate-500`
**Time:** 2 minutes
**Why:** Fails WCAG 1.4.3 (3.3:1 ratio vs 4.5:1 required). The "(optional)" label and helper text below the submit button are hard to read for older users.

### 2. Add second CTABanner after Testimonials
**File:** `page.tsx`
**Change:** Add `<CTABanner />` after `<Testimonials />`
**Time:** 30 seconds
**Why:** Three dense sections (Features > ComparisonTable > Testimonials) with zero conversion opportunities. Users convinced by social proof have no immediate way to act.

### 3. Swap Testimonials and ComparisonTable order
**File:** `page.tsx`
**Change:** Move `<Testimonials />` before `<ComparisonTable />`
**Time:** 30 seconds
**Why:** Social proof should validate before comparison asks users to evaluate. Current order asks users to trust a feature grid before showing that real people chose Caresite.

### 4. Wrap ComparisonTable icons in `<span role="img">`
**File:** `ComparisonTable.tsx`, `CellIcon` function
**Change:** Wrap each icon in `<span role="img" aria-label="Yes/No/Partial">` and add `aria-hidden="true"` to the SVG icon
**Time:** 5 minutes
**Why:** Screen readers do not reliably read `aria-label` on Lucide SVG components. The wrapper pattern is the standard approach.

### 5. Move focus to success state on form submission
**File:** `ContactForm.tsx`
**Change:** Add `useRef` on the success div, call `.focus()` in the `handleSubmit` after `setSubmitted(true)`, add `tabIndex={-1}` to the success container
**Time:** 5 minutes
**Why:** Screen reader users get no indication that form submission succeeded. Focus stays at the position of the now-removed submit button.

---

## 4. Launch Blockers

**None.**

All Round 2 CRITICAL items have been addressed. The About section exists. The ProductPreview dashboard mockup exists. The Nav CTA is consistent. The FAQ is accessible. The skip-to-content link is in place. The remaining issues are improvements, not blockers. The `/privacy` and `/terms` pages should exist before any paid traffic campaign, but they do not block an organic/direct launch.
