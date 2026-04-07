"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Button } from "./Button";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "$149",
    period: "/mo per facility",
    tagline: "Start building your online reputation",
    features: [
      "SMS + email review campaigns",
      "Happy families to Google, concerns to private feedback",
      "Google review monitoring",
      "Basic analytics dashboard",
      "AI review responses (25/mo)",
      "Single location",
      "Email support",
      "HIPAA-safe architecture",
    ],
    cta: "Book Free Audit",
  },
  {
    name: "Standard",
    price: "$300",
    period: "/mo per facility",
    tagline: "The complete toolkit for growing facilities",
    features: [
      "Everything in Basic",
      "PointClickCare integration",
      "Unlimited SMS campaigns",
      "Advanced analytics & trending",
      "Multi-location dashboard (up to 10)",
      "Competitor analysis (3 competitors)",
      "Sentiment gating with private feedback",
      "AI dispute assistant",
      "Priority email & chat support",
    ],
    cta: "Book Free Audit",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$590",
    period: "/mo per facility",
    tagline: "Built for multi-facility operators and compliance-driven organizations",
    features: [
      "Everything in Standard",
      "Unlimited locations",
      "Priority EHR integration support",
      "F-tag & survey correlation reports",
      "Staff performance insights",
      "Custom KPI reporting",
      "Compliance badge for your website",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="No annual contracts. No setup fees. Cancel anytime."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative flex flex-col p-8 rounded-2xl border ${
              tier.popular
                ? "border-primary-500 shadow-xl shadow-primary-500/10 scale-[1.02]"
                : "border-slate-200 shadow-sm"
            } bg-white`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block px-4 py-1 rounded-full bg-primary-500 text-white text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                {tier.name}
              </h3>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                <span className="ml-1 text-sm text-slate-500">
                  {tier.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{tier.tagline}</p>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-0.5 text-secondary-500 shrink-0"
                  />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href="#contact"
              variant={tier.popular ? "primary" : "outline"}
              className="w-full text-center"
            >
              {tier.cta}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl mx-auto rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 text-center">
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-semibold text-slate-800">The math is simple:</span> the average SNF earns $8,000–$12,000 per admission. One additional resident per quarter from improved online reputation pays for a full year of Standard.
        </p>
      </div>
      <p className="mt-6 text-center text-sm text-slate-500">
        Multi-facility discounts available.{" "}
        <a href="#contact" className="text-primary-500 font-medium hover:underline">
          Contact us
        </a>{" "}
        for custom pricing.
      </p>
    </Section>
  );
}
