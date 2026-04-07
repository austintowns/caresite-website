# CRO Audit — Caresite.io Marketing Site (Round 2)

**Date:** 2026-04-06
**Auditor:** Senior CRO Specialist
**Scope:** Follow-up review against Round 1 findings

---

## 1. Conversion Improvements (What Got Better)

### Section order is now correct
Round 1 recommended: Hero > PainPoints > HowItWorks > Testimonials > Features > ComparisonTable > Pricing > FAQ > ContactForm. The current order is Hero > TrustBar > PainPoints > HowItWorks > CaseStudy > CTABanner > Features > ComparisonTable > Testimonials > Pricing > FAQ > ContactForm. HowItWorks now comes before Features. The TrustBar and CaseStudy are strong additions. CTABanner exists as a mid-page break. This is materially better than Round 1.

### CTA / form expectation mismatch is fixed
Round 1 flagged "Start Your Free Trial" in the hero linking to a contact form. Hero now says "Book Your Free Audit." The form submit says "Book My Free Audit." The CTABanner says "Book Your Free Audit." Pricing tiers say "Book Free Audit" and "Contact Sales." This is consistent and matches what the form actually delivers. Well done — this was the second-highest-priority issue.

### TrustBar exists
Round 1 said "No trust strip below the hero." A TrustBar now sits directly under the hero with HIPAA-safe, TCPA compliant, EHR integration, and a phone number. This addresses two Round 1 items: missing trust signals in the first viewport and missing phone number.

### Mid-page CTA break exists
Round 1 said 4 dense sections had zero CTAs. A CTABanner component now sits between CaseStudy and Features. The copy ("Ready to see your facility's growth plan?") is specific and the button links to #contact. This captures high-intent users who are convinced early.

### Form fields are dramatically improved
Round 1 flagged: missing phone field, missing role field, missing facility count field, vague submit button. The form now has: name, email, facility name, phone (optional), role dropdown (Administrator, DON, Regional Ops, Marketing Director, Owner, Other), and facility count dropdown (1, 2-5, 6-15, 16-50, 50+). Submit button says "Book My Free Audit" with an arrow icon. This is a well-qualified lead form now.

### Phone number is present
Round 1 said "No phone number or live chat." The phone number (435) 210-6111 now appears in the TrustBar and Footer. SNF administrators who prefer calling have a direct path.

### CaseStudy section adds depth
Round 1 flagged weak social proof and no case study. The CaseStudy component shows a real before/after (2.8 to 4.4 stars, 0.1 to 14 reviews/month, 15-min setup) with animated counters. This is the single most persuasive section on the page.

### Pricing: Basic tier now includes SMS
Round 1 flagged that the $149 Basic tier excluded SMS campaigns despite SMS being the core value proposition. Basic now includes "SMS + email review campaigns." This eliminates the cognitive dissonance where the hero sells SMS but the entry tier didn't include it.

---

## 2. Still Hurting Conversion

### Nav CTA still says "Get Started" while everything else says "Book Your Free Audit"
The Nav button (desktop and mobile) says "Get Started." Every other CTA on the page says "Book Your Free Audit" or "Book My Free Audit." This is the last remaining CTA consistency gap. "Get Started" is vague and implies self-service. "Book Your Free Audit" is specific and sets the right expectation. One mismatch is enough to create hesitation.

### Still zero product screenshots or visuals
This was the #1 issue in Round 1 and it remains unfixed. The page is 100% text, icons, and animated counters. No dashboard screenshot, no SMS template preview, no dispute assistant UI, no analytics view. Users cannot picture the product. For a SaaS product selling to 45-65 year old healthcare operators, showing what the tool actually looks like is non-negotiable. This is still the single biggest conversion leak on the page.

### Testimonials still use first-name-last-initial format with no photos
Round 1 flagged that "Rebecca T.", "David N.", "Maria S." reads as potentially fabricated. No headshots have been added. No avatar images, no facility logos, no Google review screenshots. The testimonial content is strong — Rebecca's 3.2-to-4.4 metric, David's dispute story, Maria's compliance angle — but the presentation undermines credibility.

### Testimonials are still positioned after ComparisonTable, not before
Round 1 recommended placing Testimonials before ComparisonTable so users see proof before being asked to evaluate competitors. The current order still has ComparisonTable > Testimonials. The comparison table is more persuasive when users already trust that real people chose Caresite.

### ComparisonTable still forces horizontal scroll on mobile
The table still uses `min-w-[640px]` which forces horizontal scroll on any viewport under 640px. This means roughly 60% of traffic (mobile) cannot meaningfully engage with one of the strongest persuasion sections on the page. No responsive card layout has been added.

### Hero stat claims still have no attribution
"12x average increase in monthly reviews" and "4.6 avg star rating after 90 days" still show no source. "Based on X facilities" or "Pilot data, 2025" would prevent skeptical buyers from dismissing these as made-up numbers. The CaseStudy section partially addresses this with "A 120-bed skilled nursing facility in the Pacific Northwest" but the hero stats stand alone with no grounding.

### Form success state is still generic
After submission, users see "We'll be in touch!" and "A member of our team will reach out within one business day." Round 1 recommended a self-scheduling calendar link (Calendly/Cal.com) so users can book immediately. The one-business-day language is also weaker than "within 4 hours." Users who just committed to filling out a form want immediate next steps, not an undefined wait.

### No second CTABanner after ComparisonTable
Round 1 recommended CTA breaks after HowItWorks AND after ComparisonTable. Only one CTABanner exists (after CaseStudy). Users who scroll through Features > ComparisonTable > Testimonials (three dense sections) still have no conversion opportunity until Pricing. A second CTA strip after Testimonials or ComparisonTable would capture users who are convinced by the comparison or social proof but don't want to evaluate pricing.

### Pricing still lacks annual toggle
No annual/monthly pricing toggle exists. Annual pricing with a visible savings percentage ("Save 20%") is standard for SaaS and increases LTV. The current "No annual contracts" messaging is fine, but offering a discounted annual option for buyers who are ready to commit leaves money on the table.

### No "response time" or urgency microcopy near the form
Round 1 suggested "We respond within 4 hours" above the form and privacy reassurance near the email field. Neither exists. The only microcopy is "We'll audit your current Google profile and deliver a 90-day growth plan" below the submit button, which is good but doesn't address speed or privacy.

---

## 3. Top 5 Remaining Changes (Ranked by Expected Conversion Impact)

### 1. Add Product Screenshots or Interactive Demo (HIGH)
**Why it matters:** This was #1 in Round 1 and it remains #1. Every section on the page describes what Caresite does in words. Zero sections show what Caresite looks like. Healthcare administrators making a buying decision need to see a dashboard, an SMS template, the dispute assistant interface, or an analytics view. Without visuals, the page reads as a pitch deck for a product that might not exist yet. Even 2-3 static browser-frame mockups in the Features section or a dedicated "Product Tour" section after HowItWorks would materially increase conversions.
**Expected lift:** 20-40% increase in form submissions.

### 2. Fix Nav CTA Copy: "Get Started" to "Book Your Free Audit" (HIGH — trivial effort)
**Why it matters:** The Nav CTA is the most persistent element on the page (fixed position, visible on every scroll). It is also the only CTA that still says "Get Started" instead of "Book Your Free Audit." This is a 10-second code change with outsized impact. Every time a user glances at the nav, they should see the same specific, value-driven action as the rest of the page. "Get Started" is a leftover from Round 1 and creates subtle friction.
**Expected lift:** 3-5% reduction in nav-to-form drop-off.

### 3. Move Testimonials Before ComparisonTable and Add Headshots (MEDIUM-HIGH)
**Why it matters:** Two related issues. First, the section order: users should see that real people trust Caresite before being asked to evaluate a feature comparison. Social proof validates the comparison; comparison without proof feels like marketing claims. Second, the testimonials still use first-initial surnames with no photos. Adding headshot images (or even styled avatar placeholders with full names) and moving this section one position up would meaningfully strengthen the proof layer. Rebecca's "3.2 to 4.4 in 90 days" is a strong quote that deserves better presentation.
**Expected lift:** 10-15% increase in scroll-through rate past ComparisonTable.

### 4. Add Mobile-Responsive ComparisonTable (MEDIUM)
**Why it matters:** The `min-w-[640px]` table is invisible to mobile users. On a 375px iPhone, this section requires 265px of horizontal scroll — users will skip it entirely. The comparison table is one of the most persuasive sections on the page (Caresite wins 10 of 11 rows). Replacing it with stacked cards or a simplified "Caresite vs. Others" two-column layout on viewports under 768px would unlock this persuasion for the majority of traffic.
**Expected lift:** 8-12% increase in mobile conversion rate.

### 5. Add Self-Scheduling Link to Form Success State (MEDIUM)
**Why it matters:** The form success state currently says "We'll be in touch" with a one-business-day timeline. This is the lowest-energy moment on the page — the user just committed, and the response is "wait." Embedding a Calendly/Cal.com link that says "Skip the wait — book your audit now" would convert a percentage of form submitters into scheduled meetings immediately. Scheduled meetings have a dramatically higher show rate than "we'll call you" outbound. This also replaces the vague "one business day" with a concrete next step.
**Expected lift:** 15-25% increase in form-to-meeting conversion rate.

---

## Summary

Round 1 flagged 10 critical issues. Six have been meaningfully addressed: section reordering, CTA/form mismatch, trust bar, mid-page CTA, form fields, and phone number. The CaseStudy and TrustBar additions were not in the original recommendations but are strong improvements. The pricing SMS gap fix and phone number addition show attention to the specific buyer persona.

The remaining gap is concentrated in two areas: **visual proof** (no product screenshots, no headshots, no Google review screenshots) and **last-mile conversion friction** (nav CTA copy, mobile table, form success state). Fixing product screenshots alone would likely have more impact than all other remaining changes combined. The site's copy and structure are now strong — the bottleneck is that users cannot see the product they're being asked to buy.
