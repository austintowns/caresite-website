"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We went from two Google reviews in the past year to fourteen in our first month on Caresite. The sentiment gating is the key — families who had concerns got heard privately, and families who loved us left public reviews. Our rating went from 3.2 to 4.4 in 90 days.",
    name: "Rebecca T.",
    title: "Administrator",
    facility: "120-bed SNF, Ohio",
    stars: 5,
  },
  {
    quote:
      "We had a competitor posting fake one-star reviews for months and didn't know what to do. Caresite's dispute assistant flagged every policy violation and drafted the removal requests. Five of seven were taken down within two weeks. That alone paid for a year of the platform.",
    name: "David N.",
    title: "Regional Director of Operations",
    facility: "Multi-facility group, Texas",
    stars: 5,
  },
  {
    quote:
      "As a DON, I was worried about HIPAA exposure from responding to reviews. Other platforms gave us templates that could easily confirm a patient relationship. Caresite's AI responses are genuinely safe — our compliance officer approved the workflow on the first pass.",
    name: "Maria S.",
    title: "Director of Nursing",
    facility: "90-bed SNF, Florida",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" dark>
      <SectionHeader
        eyebrow="Testimonials"
        title="Results from the field"
        subtitle="SNF administrators on what changed after Caresite."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm"
          >
            <Quote
              size={32}
              className="absolute top-6 right-6 text-primary-100"
            />
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star
                  key={j}
                  size={16}
                  className="text-accent-500 fill-accent-500"
                />
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.title}</p>
              <p className="text-sm text-primary-500">{t.facility}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
