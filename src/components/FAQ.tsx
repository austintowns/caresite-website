"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Caresite HIPAA compliant?",
    a: "Caresite is HIPAA-safe by architecture. Our platform never stores, processes, or transmits protected health information. Discharge timing data is used only to trigger outreach — no clinical data, diagnoses, or patient identifiers flow through our system. Because no PHI is handled, no Business Associate Agreement is required.",
  },
  {
    q: "How does sentiment gating work?",
    a: "When a family member clicks the review link in their SMS, they first answer a brief satisfaction question. If positive, they're directed to your Google Business Profile to leave a public review. If negative, they're routed to a private feedback form your team reviews internally. This protects your public rating while ensuring every voice is heard.",
  },
  {
    q: "What is the AI dispute assistant?",
    a: "It automatically scans your incoming negative reviews against Google's review policies. It identifies violations such as fake reviews, conflict-of-interest posts, reviews containing PHI posted by the reviewer, and off-topic content. It then generates a pre-written dispute submission your team can file directly with Google.",
  },
  {
    q: "Does Caresite work with my EHR?",
    a: "Yes. Caresite works with PointClickCare, MatrixCare, Netsmart, AHT, and any EHR that can export a CSV discharge list. Our Enterprise plan includes a direct PCC integration for automatic discharge notifications. For all other EHRs, a simple CSV upload takes under a minute — our parser handles the rest.",
  },
  {
    q: "How quickly will we see results?",
    a: "Most facilities see a measurable increase in review volume within the first 30 days. On average, customers move from approximately one review every 10 months to 10 or more per month. Star rating improvements typically follow within 60 to 90 days as new positive reviews dilute older negative ones.",
  },
  {
    q: "Can I use Caresite across multiple facilities?",
    a: "Yes. The Standard plan supports up to 10 locations on a single dashboard, and the Enterprise plan supports unlimited locations. Each facility maintains its own campaign settings, analytics, and Google Business Profile connection. Regional users can view aggregate reporting across all locations.",
  },
  {
    q: "Will AI review responses expose us to HIPAA risk?",
    a: "No. Caresite's AI response engine never confirms or denies a patient or resident relationship. Every generated response acknowledges feedback in general terms and invites offline follow-up. Our responses have been reviewed by healthcare compliance attorneys and meet CMS and OCR guidance on public communications.",
  },
  {
    q: "How is Caresite different from Podium or BirdEye?",
    a: "Those platforms serve restaurants, dentists, auto dealers, and dozens of other industries. Caresite is built exclusively for skilled nursing. That means HIPAA-safe architecture from day one, PointClickCare integration, F-tag and survey correlation, SNF-specific AI response training, and a dispute assistant that understands healthcare review patterns.",
  },
];

function AccordionItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-slate-200"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
      >
        <span className="text-base font-medium text-slate-900 pr-4">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <Section id="faq" dark>
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about getting started with Caresite."
      />

      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </Section>
  );
}
