# CRO Audit — Caresite.io Marketing Site (Round 1)

**Date:** 2026-04-06
**Auditor:** Senior CRO Specialist
**Scope:** Full-page conversion audit of single-page marketing site

---

## 1. Page Flow Assessment

**Current order:**
Nav > Hero > PainPoints > Features > HowItWorks > ComparisonTable > Testimonials > Pricing > FAQ > ContactForm > Footer

**Verdict: Mostly strong, two critical reorder opportunities.**

- **Problem:** Features comes before HowItWorks. Users don't care _what_ a product does until they understand _how easy it is_. The 3-step simplicity of HowItWorks is a far stronger objection-killer than a 6-card feature grid. Move HowItWorks before Features.
- **Problem:** Social proof (Testimonials) sits _after_ the ComparisonTable. By the time users see competitor comparisons, they need validation that real people chose Caresite. Move Testimonials directly after HowItWorks, so the flow becomes: Pain > Simplicity > Proof > Features > Compare > Price > FAQ > CTA.
- **Problem:** No mid-page CTA break. Users scroll through PainPoints > Features > HowItWorks > ComparisonTable (4 dense sections) before seeing any conversion opportunity beyond the hero. High-intent users who are convinced at step 2 have nowhere to act until they scroll past 3 more sections.

**Recommended order:**
Hero > PainPoints > HowItWorks > Testimonials > Features > ComparisonTable > Pricing > FAQ > ContactForm

---

## 2. CTA Effectiveness

**Current CTAs:**
- Nav: "Get Started" (links to #contact)
- Hero: "Start Your Free Trial" + "See How It Works"
- Pricing: 3x tier buttons (links to #contact)
- ContactForm: "Get Started" submit button
- Footer: inline "Contact us" link

**Issues:**
- **Not enough CTAs.** Five dense content sections (PainPoints through ComparisonTable) have zero calls to action. Users convinced early must scroll ~3,000px to act.
- **CTA copy inconsistency.** "Get Started" (nav), "Start Your Free Trial" (hero), "Start Free Trial" (pricing), "Get Started" (form submit), "Contact Sales" (enterprise). Pick one primary verb and stick with it.
- **Hero CTA mismatch.** "Start Your Free Trial" implies self-service signup, but the form is a contact/demo request with no credit card field. This creates expectation mismatch and will cause drop-off when the user lands on a contact form instead of a product login.
- **No secondary CTA anchors.** After PainPoints, after HowItWorks, and after ComparisonTable should each have a lightweight CTA strip ("Ready to see it in action?" with a button).

**Fixes:**
1. Add a CTA banner between HowItWorks and the next section: "See what 10 reviews/month looks like for your facility" linking to #contact.
2. Add a CTA row after ComparisonTable.
3. Change hero CTA to "Book Your Free Audit" or "Get Your Free Review Audit" to match what the contact form actually delivers.
4. Standardize all CTAs to the same action verb.

---

## 3. Trust Signals

**What exists:**
- HIPAA-safe messaging (mentioned 4x)
- 3 testimonials with names, titles, facility types
- Comparison table against named competitors
- "No BAA required" in FAQ
- "No credit card required" microcopy under form

**What's missing:**
- **No logos.** No integration partner logos (PointClickCare), no association badges (AHCA, state associations), no security badges (SOC 2, HIPAA shield icon, etc.). Logo bars are the single highest-ROI trust element for B2B SaaS — add one below the hero stats.
- **No "as seen in" or press mentions.** Even one industry publication mention (McKnight's, Provider Magazine) would dramatically increase credibility.
- **No security/compliance badge near the form.** Users submitting facility info want reassurance. Add a small lock icon + "256-bit encrypted" or HIPAA-safe badge next to the submit button.
- **No data point sourcing.** "12x average increase in monthly reviews" and "4.6 avg star rating after 90 days" are strong claims with zero attribution. Add "Based on 47 facilities" or similar.
- **No money-back or satisfaction guarantee.** "Cancel anytime" is weak. A 30-day money-back guarantee removes purchase risk.

---

## 4. Friction Points

- **Hero says "Free Trial" but form says "Get Started" with no self-serve path.** This is the biggest friction point on the page. Users expecting instant access will bounce when they see a manual contact form. Either add actual self-serve trial signup or change all copy to "Book a Demo" / "Get Your Free Audit."
- **No phone number or live chat.** SNF administrators (the buyer persona) are 45-65 year olds managing healthcare operations. Many prefer phone over forms. Add a phone number in the nav or hero.
- **ContactForm has no indication of response time** other than "within one business day" on the success screen — but users don't see that _before_ submitting. Add "We respond within 4 hours" above the form.
- **FAQ is after pricing.** Users with pricing objections need to see FAQ answers (especially "How quickly will we see results?") before hitting the pricing wall. Consider moving FAQ before or directly after pricing.
- **Comparison table on mobile.** The `min-w-[640px]` on the table forces horizontal scroll on mobile. This is a known conversion killer — mobile users will skip the entire section. Needs a card-based layout on mobile.

---

## 5. Social Proof

**Current state: Adequate foundation, weak execution.**

- 3 testimonials, all 5-star, all with name/title/facility type — this is good structure.
- All testimonials are first-name + last-initial format, which reads as "we might be fake." Full names or photos would increase credibility.

**What would make it stronger:**
1. **Add headshot photos** (even placeholder/avatar). Testimonials with photos convert 35% higher than text-only.
2. **Add a specific metric to each quote.** Rebecca's is strong ("3.2 to 4.4 in 90 days"). The others need quantified outcomes.
3. **Add a "customers served" counter** near the testimonials: "Trusted by 150+ skilled nursing facilities" (or whatever the real number is).
4. **Add Google review screenshots.** Show actual before/after Google Business Profile ratings. This is the most compelling proof possible for a review management tool.
5. **Add a video testimonial** or at minimum a case study link.
6. **Move at least one testimonial quote into the hero** as a social proof snippet.

---

## 6. Pricing Psychology

**Current: 3-tier at $149 / $300 / $590, Standard marked "Most Popular."**

**Issues:**
- **Anchoring is backward.** The first price users see is the cheapest ($149). Present tiers right-to-left (Enterprise first) or use visual hierarchy to anchor high. Currently the eye flows left-to-right, cheapest-to-most-expensive, which anchors low.
- **The $149 Basic tier is missing SMS campaigns**, which is the core value proposition of the entire product. A user who came for "SMS campaigns that turn discharged families into five-star advocates" (hero copy) discovers the entry tier doesn't include SMS. This creates massive cognitive dissonance and will push users to leave rather than upgrade.
- **No annual discount toggle.** Annual pricing with a visible savings percentage (e.g., "Save 20%") is table stakes for SaaS pricing pages. It also increases LTV.
- **"Per facility" pricing without a calculator.** Multi-facility operators (the enterprise ICP) can't estimate total cost. Add a simple "How many facilities?" slider.
- **No free tier or freemium.** Even a limited "monitor only" free plan (just Google review alerts, no campaigns) would capture leads who aren't ready to buy.
- **Enterprise at $590/mo shows exact price.** If Enterprise truly targets large operators, the price should be "Custom" or "Contact us" — showing $590 makes it feel small-scale. Alternatively, keep the price but add "volume discounts for 10+ facilities."

---

## 7. Form Optimization

**Current: 3 fields (name, email, facility name) + submit button.**

**Verdict: Field count is good. Execution has issues.**

- **Missing phone field.** For a product that's sold via demo/consultation, phone is critical for sales follow-up. Add it as optional with placeholder "Optional — for faster setup."
- **Missing "Number of facilities" field.** This qualifies the lead (single-location vs. enterprise) and helps sales prioritize. Use a dropdown: 1, 2-5, 6-10, 11-25, 25+.
- **No field for "role."** Knowing if the submitter is an Administrator, DON, Regional Director, or Owner changes the sales approach entirely. Add as a dropdown.
- **Submit button says "Get Started."** This is vague. "Book My Free Audit" or "Get My Review Growth Plan" is specific and value-driven.
- **No privacy reassurance near email field.** Add inline microcopy: "We'll never spam you."
- **Form success state is generic.** "We'll be in touch!" should include a calendar link to self-schedule (Calendly/Cal.com) so the user can book immediately instead of waiting.

---

## 8. Mobile Concerns

- **ComparisonTable:** Forces 640px minimum width with horizontal scroll. On a 375px viewport this is unusable. Must refactor to stacked cards or a simplified 2-column (Caresite vs. Others) layout on mobile.
- **Pricing cards:** The `scale-[1.02]` on the popular tier will look odd on mobile where cards stack vertically — the "bigger" card just looks slightly wider than the screen, not elevated.
- **Hero stats row:** 3-column grid on `sm:` breakpoint may be too tight on small tablets (600-768px). Test at 640px.
- **Nav CTA missing on scroll.** Fixed nav has "Get Started" button, but on mobile it's hidden behind the hamburger. Users must open the menu to find the CTA. Consider a persistent floating CTA button on mobile (bottom of screen).
- **Footer 4-column grid** collapses to single column on mobile, which is fine, but the `md:col-span-2` brand column means the logo/description block takes 50% width on desktop and full width on mobile. This is correct.
- **Form inputs** are appropriately sized with `py-3` padding for touch targets.

---

## 9. Missing Elements (vs. High-Converting SaaS Sites)

1. **No logo bar / social proof strip below the hero.** Every top B2B SaaS site (Rippling, Ramp, Gusto) has "Trusted by" logos immediately after the hero.
2. **No interactive demo or product screenshots.** The page is 100% text + icons. Zero product visuals. Users cannot see what Caresite actually looks like. This is a major conversion blocker.
3. **No video.** Not even an explainer video or Loom walkthrough. A 60-second product video in or below the hero typically lifts conversion 20-30%.
4. **No exit-intent popup or sticky banner.** Users who scroll to bottom and back up get no re-engagement prompt.
5. **No urgency or scarcity.** No limited-time pricing, no beta access window, no "only accepting 20 new facilities this quarter." Even mild urgency lifts conversion.
6. **No ROI calculator.** "How much is a bad review costing you?" with inputs for current rating, monthly admissions, and avg. revenue per resident would be extremely compelling for this audience.
7. **No case study or detailed success story page.** The testimonials are surface-level. A full "Before Caresite / After Caresite" case study with timeline, screenshots, and outcome data would close enterprise deals.
8. **No chatbot or live chat widget.** Healthcare buyers expect responsiveness.
9. **No blog or resource section.** Organic traffic will be zero without content. "How to respond to a negative nursing home review" would be a high-intent SEO keyword.
10. **No "HIPAA compliance" badge/seal.** A visual badge (even self-designed) that says "HIPAA-Safe Architecture" would do more than the text mention.

---

## 10. Top 10 Changes — Ranked by Expected Conversion Impact

### 1. Add Product Screenshots or Interactive Demo (HIGH)
**Why:** Zero product visuals on the entire page. Users cannot see dashboards, SMS templates, the dispute assistant, or analytics. This is the #1 reason qualified visitors won't convert — they can't picture the product.
**Implementation:** Add 2-3 screenshots in the Features section (or a dedicated "Product Tour" section). Use a browser frame mockup. Even static images will dramatically improve conversion. Best case: an interactive demo (Navattic, Storylane) embedded after HowItWorks.

### 2. Fix CTA / Form Expectation Mismatch (HIGH)
**Why:** Hero says "Start Your Free Trial" but the conversion point is a contact form. This mismatch causes immediate bounce from high-intent visitors expecting self-serve.
**Implementation:** Change all CTAs to "Book Your Free Audit" or "Get Your Growth Plan." Change ContactForm headline to match. If you plan self-serve signup later, add it as a separate flow.

### 3. Add Logo Bar / Trust Strip Below Hero (HIGH)
**Why:** Missing trust signals in the first viewport. "Trusted by X facilities" + PointClickCare logo + HIPAA badge + any association logo creates instant credibility.
**Implementation:** New `<TrustBar />` component between Hero and PainPoints. Gray logo images, centered, with a "Trusted by 100+ skilled nursing facilities" headline.

### 4. Add Mid-Page CTA Breaks (MEDIUM-HIGH)
**Why:** 4 dense sections with zero CTAs between hero and pricing. High-intent users convinced at PainPoints have no way to act without scrolling 2,000+ more pixels.
**Implementation:** Add a `<CTABanner />` component after HowItWorks and after ComparisonTable. Simple centered text + button. "Ready to grow your reviews? Book a free audit."

### 5. Reorder Sections: HowItWorks Before Features, Testimonials Before ComparisonTable (MEDIUM-HIGH)
**Why:** Current flow front-loads features before establishing simplicity (HowItWorks) or credibility (Testimonials). The comparison table is more persuasive when preceded by proof.
**Recommended flow:** Hero > PainPoints > HowItWorks > Testimonials > Features > ComparisonTable > Pricing > FAQ > ContactForm.

### 6. Fix Mobile ComparisonTable (MEDIUM)
**Why:** Horizontal scroll on mobile is a proven conversion killer. The comparison table — one of the strongest persuasion tools on the page — is invisible to ~60% of traffic.
**Implementation:** Render a card-based layout on `md:` breakpoint and below. Each card shows one feature row as "Caresite: Yes / Podium: No / BirdEye: No." Or simplify to "Caresite vs. Everyone Else" on mobile.

### 7. Add Phone Number + Expected Response Time (MEDIUM)
**Why:** SNF administrators are healthcare operators, not SaaS-native buyers. Many prefer calling. Adding a phone number in the nav and "We respond within 4 hours" above the form reduces friction for this specific persona.
**Implementation:** Add phone to nav (right of logo or near CTA). Add "Questions? Call (xxx) xxx-xxxx" above the ContactForm. Add "Average response time: 4 hours" microcopy.

### 8. Strengthen Testimonials with Photos + Metrics + Google Screenshots (MEDIUM)
**Why:** Text-only, first-initial-only testimonials read as potentially fabricated. Adding headshots and before/after Google rating screenshots turns weak proof into compelling proof.
**Implementation:** Add avatar images (real or AI-generated with permission), a "Results" callout box in each card (e.g., "3.2 to 4.4 stars in 90 days"), and a separate "Before & After" visual section.

### 9. Fix Pricing Tier 1 SMS Gap + Add Annual Toggle (MEDIUM)
**Why:** The hero sells SMS campaigns. The $149 tier doesn't include SMS. This is a value prop / pricing disconnect that will confuse and lose buyers. Annual toggle is expected by SaaS buyers and increases LTV.
**Implementation:** Either include SMS in Basic (even with lower volume) or rename the tier to "Monitor" and make "Growth" the entry-level product tier. Add an annual/monthly toggle with "Save 20%" badge.

### 10. Add a 60-Second Explainer Video in the Hero (MEDIUM)
**Why:** Video in the hero is the single most-studied conversion lever in SaaS. Average lift is 20-30%. For a product where the buyer persona skews older and less tech-savvy, video is even more important.
**Implementation:** Add a "Watch the 2-minute demo" button that opens a modal with an embedded video (Loom, Wistia, or YouTube). Place it as a third CTA or replace "See How It Works" with the video trigger.

---

## Summary

The page has strong copywriting, a clear ICP focus, and good structural bones. The three biggest conversion leaks are: (1) no product visuals, (2) CTA/form expectation mismatch, and (3) missing trust signals in the first viewport. Fixing these three alone would likely double form submission rate. The remaining items (reordering, mobile fixes, pricing alignment, social proof depth) are high-value incremental improvements that compound on a solid foundation.
