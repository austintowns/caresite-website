# Caresite.io SEO Strategy

Google review management platform for Skilled Nursing Facilities (SNFs).

---

## 1. Target Keywords

### Primary Keywords

| Keyword | Est. Monthly Volume | Difficulty | Intent |
|---------|-------------------|------------|--------|
| nursing home review management | 170 | Medium | Commercial |
| SNF reputation management | 90 | Low | Commercial |
| nursing home Google reviews | 320 | Medium | Informational/Commercial |
| skilled nursing facility reviews | 260 | Medium | Informational |
| nursing home reputation software | 110 | Low | Commercial |

### Secondary Keywords

| Keyword | Est. Monthly Volume | Difficulty | Intent |
|---------|-------------------|------------|--------|
| healthcare review management software | 210 | Medium-High | Commercial |
| senior care reputation management | 140 | Low-Medium | Commercial |
| nursing home star rating improvement | 90 | Low | Informational |
| long-term care facility reviews | 170 | Medium | Informational |
| post-acute care reputation | 50 | Low | Commercial |

### Long-Tail Keywords

| Keyword | Est. Monthly Volume | Difficulty | Intent |
|---------|-------------------|------------|--------|
| how to get more nursing home reviews | 110 | Low | Informational |
| HIPAA compliant review software | 140 | Low-Medium | Commercial |
| how to respond to negative nursing home reviews | 170 | Low | Informational |
| improve Google reviews for skilled nursing facilities | 70 | Low | Informational |
| automated review requests for healthcare | 90 | Low | Commercial |

---

## 2. Meta Tags

### Title Tag
```
Caresite.io | Google Review Management for SNFs
```
(53 characters)

### Meta Description
```
Boost your skilled nursing facility's Google reviews with HIPAA-compliant automation. Get more 5-star reviews, respond faster, and outrank competitors.
```
(152 characters)

### Open Graph Tags
```html
<meta property="og:title" content="Caresite.io - Review Management Built for Skilled Nursing" />
<meta property="og:description" content="The only Google review platform purpose-built for SNFs. HIPAA compliant. Automated review requests. Real-time alerts. Start free." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://caresite.io" />
<meta property="og:image" content="https://caresite.io/og-image.png" />
```

### Additional Meta Tags
```html
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://caresite.io" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Caresite.io - Review Management Built for Skilled Nursing" />
<meta name="twitter:description" content="The only Google review platform purpose-built for SNFs. HIPAA compliant. Automated review requests. Real-time alerts." />
```

---

## 3. Heading Structure

### H1
```
Google Review Management Built for Skilled Nursing Facilities
```

### H2s (one per site section)

| Section | H2 |
|---------|-----|
| Pain Points | Why SNFs Struggle with Online Reviews |
| Features | Everything You Need to Win More 5-Star Reviews |
| How It Works | Go Live in 3 Steps |
| Comparison | How Caresite Compares to Generic Review Platforms |
| Video | See Caresite in Action |
| Testimonials | Trusted by Skilled Nursing Operators Nationwide |
| Pricing | Simple Pricing, No Long-Term Contracts |
| FAQ | Frequently Asked Questions |
| Contact | Get Started Today |

### H3s (subsections within features/pain points)

**Under "Why SNFs Struggle":**
- Low Review Volume Hurts Census
- Negative Reviews Go Unanswered for Days
- Staff Has No Time for Manual Review Requests
- Generic Platforms Don't Understand HIPAA

**Under "Everything You Need":**
- Automated Review Requests via SMS and Email
- AI-Powered Response Drafts (HIPAA-Safe)
- Real-Time Review Alerts
- Multi-Location Dashboard
- Competitor Benchmarking
- CMS Star Rating Correlation

---

## 4. Schema Markup Plan

### SoftwareApplication Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Caresite.io",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Google review management platform built for skilled nursing facilities. HIPAA compliant, automated review requests, AI-powered responses.",
  "url": "https://caresite.io",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "99",
    "highPrice": "499",
    "priceCurrency": "USD",
    "offerCount": "3"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  },
  "featureList": [
    "Automated review requests",
    "AI-powered response drafts",
    "HIPAA compliant",
    "Multi-location dashboard",
    "Competitor benchmarking",
    "Real-time alerts"
  ]
}
```

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Caresite",
  "url": "https://caresite.io",
  "logo": "https://caresite.io/logo.png",
  "description": "Google review management platform for skilled nursing facilities.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hello@caresite.io"
  },
  "sameAs": [
    "https://linkedin.com/company/caresite",
    "https://twitter.com/caresiteio"
  ]
}
```

### FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Caresite HIPAA compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Caresite is fully HIPAA compliant. No patient health information is collected, stored, or transmitted through the platform. Review requests use only first names and facility-approved messaging."
      }
    },
    {
      "@type": "Question",
      "name": "How does Caresite help increase Google reviews for nursing homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caresite sends automated review requests to families and patients via SMS and email at the optimal time after discharge or visit. Our clients see an average 3x increase in monthly review volume within 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Can I manage multiple skilled nursing facility locations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Caresite includes a multi-location dashboard so operators can monitor reviews, response rates, and star ratings across all facilities from a single view."
      }
    },
    {
      "@type": "Question",
      "name": "How is Caresite different from generic review platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Caresite is purpose-built for skilled nursing. It understands HIPAA constraints, integrates with healthcare workflows, and benchmarks your reviews against CMS star ratings and local competitors."
      }
    },
    {
      "@type": "Question",
      "name": "What does Caresite cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plans start at $99/month per facility. Volume discounts are available for multi-location operators. No long-term contracts required."
      }
    }
  ]
}
```

### Pricing / Offer Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Caresite.io Review Management",
  "description": "Google review management for skilled nursing facilities",
  "brand": {
    "@type": "Brand",
    "name": "Caresite"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "99",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      },
      "description": "Single facility, automated review requests, basic dashboard"
    },
    {
      "@type": "Offer",
      "name": "Growth",
      "price": "249",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "249",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      },
      "description": "Up to 5 facilities, AI response drafts, competitor benchmarking"
    },
    {
      "@type": "Offer",
      "name": "Enterprise",
      "price": "499",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "499",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      },
      "description": "Unlimited facilities, dedicated account manager, custom integrations"
    }
  ]
}
```

---

## 5. Alt Text Strategy

### Principles
- Every image must have descriptive, keyword-relevant alt text
- No keyword stuffing -- describe what the image actually shows
- Include "skilled nursing" or "SNF" naturally where relevant
- Keep under 125 characters

### Alt Text by Image Type

| Image/Graphic | Alt Text |
|---------------|----------|
| Hero illustration | "Caresite dashboard showing Google review metrics for a skilled nursing facility" |
| Pain point icons | "Icon representing [specific pain point, e.g., low review volume for nursing homes]" |
| Feature screenshots | "Caresite automated review request being sent via SMS to a patient family member" |
| How-it-works steps | "Step [N]: [action, e.g., Connect your Google Business Profile in Caresite]" |
| Comparison table | "Feature comparison table showing Caresite vs generic review platforms for SNFs" |
| Video thumbnail | "Video walkthrough of Caresite review management platform for skilled nursing" |
| Testimonial headshots | "[Name], [Title] at [Facility Name], Caresite customer" |
| Pricing cards | "Caresite pricing plans for skilled nursing facility review management" |
| Logo | "Caresite.io logo" |
| Trust badges | "HIPAA compliant badge for Caresite review management platform" |
| Social proof stats | "Infographic showing 3x increase in Google reviews for SNF clients using Caresite" |

---

## 6. Internal Linking Opportunities

### Future Content Pages to Build

| Page | Target Keyword | Link From Section |
|------|---------------|-------------------|
| `/blog/nursing-home-google-reviews-guide` | how to get more nursing home reviews | Pain Points, FAQ |
| `/blog/hipaa-compliant-review-management` | HIPAA compliant review software | Features, FAQ |
| `/blog/respond-negative-nursing-home-reviews` | how to respond to negative nursing home reviews | Pain Points, Features |
| `/blog/snf-reputation-census-impact` | nursing home reputation and census | Pain Points |
| `/blog/cms-star-ratings-google-reviews` | CMS star ratings vs Google reviews | Features, Comparison |
| `/case-studies` | skilled nursing facility review case study | Testimonials |
| `/case-studies/[facility-name]` | [facility] Google reviews improvement | Testimonials |
| `/integrations` | SNF review management integrations | Features, How It Works |
| `/comparison/caresite-vs-podium` | Caresite vs Podium for healthcare | Comparison |
| `/comparison/caresite-vs-birdeye` | Caresite vs Birdeye for nursing homes | Comparison |
| `/resources/review-response-templates` | nursing home review response templates | Features, FAQ |
| `/glossary/snf-terms` | skilled nursing facility glossary | Footer |

### Anchor Text Strategy
- Use exact-match keywords sparingly (2-3 per page max)
- Prefer natural, descriptive anchor text: "learn how to respond to negative reviews" over "click here"
- Link FAQ answers to their corresponding deep-dive blog posts
- Link feature descriptions to relevant case studies once available

### Link Priority (implement first)
1. FAQ answers linking to blog posts (highest SEO value, answers user questions)
2. Pain point sections linking to data-backed blog content
3. Testimonials linking to full case studies
4. Comparison section linking to head-to-head pages
