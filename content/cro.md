# Caresite.io CRO Strategy

Single-page marketing site for SNF Google review management. Light, clinical aesthetic. Target buyer: SNF administrators and multi-facility operators.

---

## 1. Page Flow Blueprint

### Section Order (top to bottom)

| # | Section | Purpose | Est. Scroll Depth |
|---|---------|---------|-------------------|
| 1 | **Sticky Nav** | Logo + "Get Started" CTA, always visible | 0% (fixed) |
| 2 | **Hero** | Problem statement + primary CTA | 0-8% |
| 3 | **Pain Agitation** | "What bad reviews actually cost you" — CMS star ratings, occupancy loss, family trust erosion | 8-18% |
| 4 | **Product Overview** | 3-column feature grid with icons — Review Monitoring, Review Response AI, Review Generation (SMS/QR) | 18-30% |
| 5 | **Social Proof Strip** | Logo bar of SNF groups + aggregate stat ("400+ facilities trust Caresite") | 30-33% |
| 6 | **How It Works** | 3-step numbered flow: Connect Google Profile > Configure Automations > Watch Reviews Grow | 33-42% |
| 7 | **Results / ROI** | Before/after metrics visualization, review velocity chart, star rating lift | 42-55% |
| 8 | **SNF-Specific Messaging** | "Built for Skilled Nursing, Not Generic SaaS" — HIPAA compliance, CMS Five-Star tie-in, multi-facility dashboard | 55-65% |
| 9 | **Pricing** | 3 tiers ($149/$300/$590+) with feature comparison | 65-78% |
| 10 | **Testimonials** | 2-3 named quotes from administrators with facility name, title, headshot | 78-85% |
| 11 | **FAQ** | 5-7 objection-handling questions | 85-92% |
| 12 | **Final CTA** | Contact form with reinforcing headline | 92-100% |
| 13 | **Footer** | Legal, compliance badges, contact info | 100% |

### Why This Order

- **Hero > Pain > Product** follows Problem-Agitation-Solution (PAS). SNF admins are problem-aware — they know reviews hurt them. Lead with their pain, not your features.
- **Social proof at 30%** catches the first major drop-off point. Users who scroll past the feature grid need validation before going deeper.
- **ROI before pricing** pre-anchors value. By the time they see $149/mo, they have already seen "facilities using Caresite average 1.2 more stars within 6 months."
- **SNF-specific section is its own block** because differentiation from generic review tools (Birdeye, Podium) is the #1 purchase driver for this audience. Burying it in features wastes it.

### Drop-off Prevention

| Drop-off Risk | Location | Mitigation |
|---------------|----------|------------|
| **Bounce at hero** | 0-5% | Hero must state the problem in their language: "Your Google reviews are costing you admissions." Not product jargon. |
| **Feature fatigue** | 18-30% | Keep feature grid to exactly 3 items. No feature walls. Each card: icon + 6-word heading + 1-sentence description. |
| **Mid-page abandonment** | 40-55% | Social proof strip and ROI section use visual contrast (light blue or sage green background) to re-engage scanners. |
| **Pricing sticker shock** | 65-78% | Anchor with per-admission ROI before showing price. "$149/mo = the cost of losing one admission per quarter." |
| **Form abandonment** | 92-100% | 3 fields maximum. No phone number field. No "message" textarea. Submit button uses action language, not "Submit." |

---

## 2. CTA Strategy

### Primary CTA

**Text:** "Get Your Free Review Audit"

**Rationale:** "Free audit" outperforms "Demo" or "Contact Us" for healthcare B2B. Admins want to know their current state before committing to a call. It implies value delivery before a sales conversation.

**Placement (5 instances):**

1. **Sticky nav** — right-aligned button, always visible
2. **Hero section** — large button below hero copy
3. **After ROI section** — inline CTA with supporting line: "See what your facility's reviews look like to families searching right now."
4. **Below pricing table** — "Not sure which plan? Start with a free review audit."
5. **Final section** — full contact form with headline

### Secondary CTAs

- **"See Pricing"** — text link in hero (scroll-to anchor), for visitors who want to qualify on budget immediately
- **"Watch 2-Min Demo"** — ghost button next to primary CTA in hero (plays embedded video or opens modal). Video converts the "I need to see it" segment without requiring form fill.

### Sticky Nav CTA Behavior

- **Desktop:** Button visible at all times in nav. When user scrolls past the hero CTA, the sticky nav CTA gets a subtle pulse animation (one time only, not repeating) to draw attention.
- **Mobile:** Nav collapses to hamburger. CTA button remains visible outside the hamburger — it never hides behind the menu. On scroll past hero, a slim bottom bar appears with "Get Your Free Review Audit" spanning full width, 56px tall, fixed to bottom.
- **Near pricing section:** Sticky CTA text changes to "Start Free Audit" (shorter, more direct) — signals progression.

### Contact Form Design

**Headline above form:** "See How Your Reviews Compare"

**Fields (in order):**

| # | Field | Type | Required | Why |
|---|-------|------|----------|-----|
| 1 | Full Name | text input | Yes | Personal — starts low friction |
| 2 | Work Email | email input | Yes | Qualification signal (filters gmail/yahoo) |
| 3 | Facility Name | text input | Yes | Shows you understand their world. Also lets sales pre-research before outreach. |
| 4 | Number of Facilities | dropdown (1, 2-5, 6-20, 20+) | No | Qualifies deal size without feeling invasive. Optional reduces friction. |

**Field UX details:**
- Placeholder text in each field (not floating labels — accessibility risk)
- Labels above fields, not inside
- Single column layout, never side-by-side fields on mobile
- No CAPTCHA visible — use honeypot field instead (hidden CSS field)

**Submit button:**
- Text: **"Get My Free Audit"**
- Color: Primary brand color (teal/sage green), full-width on mobile, right-aligned on desktop
- Size: 48px height minimum, 16px font
- Hover state: darken 10%, subtle shadow lift

**Success message:**
- Replace form with confirmation block (do not navigate away or show a modal)
- Heading: "You're in. We'll review your facility's online presence and send your audit within 24 hours."
- Subtext: "Check your inbox at [submitted email] — and check spam, just in case."
- Include a subtle checkmark icon (lucide-react `CheckCircle2`)
- Below confirmation: "While you wait, here's what we typically find:" + link to a case study or blog post (keeps them on-site, builds trust)

---

## 3. Trust Signals

### Social Proof Placement

| Location | Type | Format |
|----------|------|--------|
| **Below hero** (section 3 border) | Aggregate stat | "Trusted by 400+ skilled nursing facilities" — single line, centered, muted text |
| **Section 5 (Social Proof Strip)** | Logo bar | 6-8 SNF group/chain logos in grayscale, auto-scrolling on mobile |
| **Section 7 (ROI)** | Data callouts | 3 metric cards: "1.2 avg star increase", "3x review volume", "47% response rate improvement" |
| **Section 10 (Testimonials)** | Named quotes | Photo + Name + Title + Facility Name. Never anonymous. |
| **Pricing cards** | Micro-proof | "Most popular" badge on mid-tier. "Used by 200+ facilities" on starter tier. |
| **Contact form** | Reassurance | Small text below submit: "No credit card required. No obligation." |

### Compliance Badges

Display in two locations:

1. **SNF-Specific section (Section 8):** HIPAA Compliant badge + "SOC 2 Type II" badge + "TCPA Compliant" badge. These go inside the SNF-specific messaging section because compliance is a differentiator for this audience, not a footer afterthought.

2. **Footer:** Repeat all badges in smaller format. Add "Google Business Partner" if applicable.

**Badge design:** Simple outlined icons with text labels. Do NOT use stock "seal" graphics — they look cheap to enterprise buyers. Clean SVG icons with the compliance name beside them.

### "Built for SNFs" Angle

This is the single most important trust signal. Dedicate an entire section (Section 8) to it. Structure:

**Headline:** "Built Exclusively for Skilled Nursing Facilities"

**3-column layout:**

| Column | Content |
|--------|---------|
| **CMS Five-Star Integration** | "Your Google reviews directly impact your CMS star ratings and family decision-making. Caresite understands the SNF regulatory landscape." |
| **HIPAA-Compliant by Default** | "Review responses never expose PHI. Our AI is trained on healthcare communication guidelines — not generic templates." |
| **Multi-Facility Dashboard** | "Manage 5 or 500 facilities from one login. Roll up metrics by region, brand, or individual building." |

**Key copy principle:** Every claim must contrast against generic alternatives. Not "We help businesses get reviews" but "We help SNFs turn satisfied families into Google advocates — without risking HIPAA violations."

### Review Velocity Visualization

In Section 7 (Results/ROI):

- **Line chart** showing review count over time — "before Caresite" flat line vs "after Caresite" upward curve
- Use real-looking but anonymized data. X-axis: months. Y-axis: cumulative reviews.
- Below chart: star rating distribution bar (1-5 stars) showing shift from mixed to predominantly 4-5 star
- **Animation:** Chart draws on scroll-into-view (framer-motion `useInView` + path animation). One-time animation, no looping.
- Color: use brand teal for the "after" line, gray for "before"

---

## 4. Urgency & Motivation

### What Drives SNF Admins to Act

Understanding the buyer psychology:

| Trigger | Urgency Level | Copy Angle |
|---------|---------------|------------|
| **Bad review just posted** | Highest | "Every day without a response, 50+ families see that unanswered complaint." |
| **Competitor gaining reviews** | High | "The facility down the road has 120 more reviews than you. Families notice." |
| **CMS survey coming up** | Medium-High | "Online reputation is now part of the family decision matrix. CMS knows it." |
| **Census is down** | High | "73% of families check Google reviews before touring a facility." |
| **New ownership/management** | Medium | "New leadership. Fresh reputation. Start building it now." |
| **Corporate mandate** | Medium | "Your regional VP asked about online reviews. Have an answer." |

### Loss Aversion Messaging

Place these throughout the page — not as a dedicated section, but woven into existing sections:

- **Hero subhead:** "Every month without review management costs you 2-3 admissions you'll never know about."
- **Pain section:** "Families don't call facilities with 3.2 stars. They call the one with 4.4 stars and 200 reviews. Which one are you?"
- **ROI section:** "The average SNF loses $180,000/year in revenue from preventable review damage."
- **Pricing section anchor text:** "$149/month protects $15,000/month in potential admissions revenue."

**Tone:** Clinical and factual, never fear-mongering. This audience is sophisticated — they respond to data, not hype. Every loss claim should be supportable with a source or methodology note.

### ROI Calculator Concept

**Location:** Section 7, interactive element alongside the review velocity chart.

**Inputs (3 sliders or dropdowns):**

| Input | Options | Default |
|-------|---------|---------|
| Number of facilities | 1, 2-5, 6-20, 20+ | 1 |
| Current Google star rating | 1.0 - 5.0 (0.5 increments) | 3.5 |
| Current monthly admissions | 5, 10, 15, 20, 25+ | 10 |

**Outputs (calculated live):**

- "Estimated monthly admissions you're missing: **X**"
- "Estimated annual revenue impact: **$X**"
- "Caresite ROI: **X:1** return on investment"

**Calculation logic (simplified):**
- Each 0.5 star increase = ~8% admission lift (cite study or industry benchmark)
- Average SNF admission revenue = $8,000-$12,000/month (use $10,000 midpoint)
- Show Caresite cost vs. recovered revenue

**Design:** Clean card with light background. Sliders use brand color for the filled track. Output numbers animate on change (countUp effect). Include small "How we calculate this" expandable text for credibility.

---

## 5. Visual Hierarchy

### CTA Color Contrast

- **Primary CTA buttons:** Solid teal/sage green (#2A9D8F or similar healthcare-appropriate green-blue). White text. This color should appear ONLY on CTAs and critical action elements — nowhere else on the page as a background or decorative element.
- **Secondary CTA buttons:** White background, teal border, teal text. On hover, fill with teal at 10% opacity.
- **Ghost CTAs (tertiary):** No border, teal text with underline on hover. Used for "See Pricing" scroll links.
- **Contrast ratio:** All CTA text must meet WCAG AA (4.5:1 minimum). Test teal against white — if it fails, darken the teal.

### Section Background Alternation

| Section | Background | Reasoning |
|---------|------------|-----------|
| Nav | White, slight bottom shadow on scroll | Clean, recedes |
| Hero | White | Clean start, lets copy breathe |
| Pain Agitation | Very light warm gray (#F9FAFB) | Subtle shift signals new content block |
| Product Overview | White | Features need clean canvas |
| Social Proof Strip | Light teal/sage tint (#F0FDFA) | Visual break, draws eye to logos |
| How It Works | White | Step-by-step needs clarity |
| Results/ROI | Light warm gray (#F9FAFB) | Data section needs contained feel |
| SNF-Specific | White | Important content, clean background |
| Pricing | Very light teal (#F0FDFA) | Pricing needs its own visual zone |
| Testimonials | White | Faces need clean background |
| FAQ | Light warm gray (#F9FAFB) | Utility section, recede slightly |
| Final CTA | Teal/dark brand color (#1A5653 or dark teal) | **Contrast flip** — dark background with white text. Signals finality and urgency. Only dark section on page. |
| Footer | Dark charcoal (#1F2937) | Standard footer treatment |

**Pattern:** White > Gray > White > Tint > White > Gray > White > Tint > White > Gray > **Dark** > Dark. Never two identical backgrounds adjacent.

### Typography Hierarchy

| Element | Size (desktop) | Size (mobile) | Weight | Color |
|---------|---------------|---------------|--------|-------|
| H1 (hero only) | 48-56px | 32-36px | 700 (bold) | Near-black (#111827) |
| H2 (section headings) | 36-40px | 28-32px | 600 (semibold) | Near-black |
| H3 (subsection/card headings) | 24px | 20px | 600 | Near-black |
| Body (paragraphs) | 18px | 16px | 400 (regular) | Dark gray (#374151) |
| Body small (captions, badges) | 14px | 14px | 400-500 | Medium gray (#6B7280) |
| CTA button text | 16-18px | 16px | 600 | White (on teal) |
| Nav links | 15px | 16px | 500 | Dark gray |
| Stat numbers (ROI section) | 48-60px | 36-40px | 700 | Teal brand color |

**Scanning rules:**
- Max line width: 680px for body text (readability)
- Section headings always have a 1-line subtitle in body color below them (explains what the section covers for scanners)
- Use ALL CAPS only for eyebrow labels above section headings ("RESULTS", "PRICING") — 12px, letterspaced, medium gray
- Bold key phrases within body paragraphs for scan-readers. No more than one bold phrase per paragraph.

---

## 6. Mobile Optimization

### Key Layout Differences

| Element | Desktop | Mobile |
|---------|---------|--------|
| **Nav** | Horizontal links + CTA button | Hamburger menu + exposed CTA button (never hidden) |
| **Hero** | Text left, illustration/screenshot right (60/40 split) | Stack: text top, image bottom (or hide image entirely) |
| **Feature grid** | 3 columns | Stack to single column, icon left + text right (not centered cards) |
| **Social proof logos** | Static row of 6-8 | Auto-scrolling marquee of logos, 3 visible at a time |
| **How It Works** | Horizontal 3-step flow with connecting lines | Vertical numbered list, no connecting lines |
| **ROI Calculator** | Sliders inline with outputs | Sliders full-width, outputs below in card |
| **Pricing** | 3 columns side-by-side | Single column, swipeable carousel OR stacked with the recommended tier expanded by default, others collapsed |
| **Testimonials** | 2-3 side by side | Single testimonial with swipe/pagination dots |
| **FAQ** | Full accordion | Same accordion (works well on mobile natively) |
| **Final CTA form** | 2-column: copy left, form right | Stack: copy top, form below |
| **Bottom sticky CTA** | None (nav CTA suffices) | Fixed bottom bar: "Get Your Free Review Audit" button, 56px, full-width. Appears after scrolling past hero. Dismiss-able with X. |

### Touch-Friendly CTA Sizing

- **Minimum touch target:** 48x48px (Apple HIG / Material guidelines)
- **Primary CTA buttons:** 56px height, full-width on mobile (no side margins that shrink the button)
- **Secondary buttons:** 48px height minimum
- **Dropdown/select fields:** 48px height, large chevron icon
- **Form inputs:** 48px height, 16px font (prevents iOS auto-zoom on focus)
- **FAQ accordion triggers:** Full-width tap zone, 56px minimum row height
- **Spacing between tappable elements:** 8px minimum gap to prevent mis-taps

### Accordion vs Expanded Content

| Section | Decision | Reasoning |
|---------|----------|-----------|
| **FAQ** | Accordion | Standard pattern, expected by users, saves vertical space |
| **Features** | Expanded (stacked cards) | Features are the product pitch — hiding them behind taps loses 60%+ of mobile readers |
| **Pricing tiers** | Hybrid — recommended tier expanded, others collapsed with "See details" | Prevents overwhelming scroll on 3 full pricing cards. Leads with the most common choice. |
| **How It Works** | Expanded | Only 3 steps — short enough to show all. Collapsing adds unnecessary friction. |
| **SNF-Specific columns** | Expanded (stacked) | Core differentiator content. Never hide behind a tap. |
| **Testimonials** | Carousel with swipe | Shows one at a time, swipe is natural on mobile, dots show more exist |
| **Compliance badges** | Expanded (horizontal scroll) | Badges are trust signals — they must be visible without tapping |

### Mobile-Specific Micro-Interactions

- **Scroll progress indicator:** Thin colored bar at top of viewport showing page progress (optional but effective for long pages)
- **"Back to top" button:** Appears after 50% scroll, small floating circle in bottom-right (above the sticky CTA bar), tap scrolls to hero
- **Phone number in footer:** Use `tel:` link so it's tappable to call
- **Form field focus:** When a form field gets focus, smooth-scroll so the field sits 40% from the top of the viewport (prevents keyboard overlap issues)
