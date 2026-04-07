"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { AlertTriangle, ShieldOff, DollarSign } from "lucide-react";

const pains = [
  {
    icon: <AlertTriangle size={28} />,
    title: "You're invisible online",
    description:
      "Most SNFs receive one Google review every 10 months. Families are choosing competitors with higher ratings and more recent feedback — even when your care is better.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: <ShieldOff size={28} />,
    title: "Negative reviews go unchallenged",
    description:
      "A single 1-star review can define your facility for years. Without a structured dispute process, policy-violating reviews sit on your profile unchecked, driving away referrals.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Generic tools don't understand compliance",
    description:
      "Platforms built for restaurants and retail don't account for HIPAA, F-tags, or survey readiness. One wrong auto-reply can create a compliance incident that costs far more than a bad review.",
    color: "text-slate-500",
    bg: "bg-slate-100",
  },
];

export function PainPoints() {
  return (
    <Section id="pain-points" dark>
      <SectionHeader
        eyebrow="The Problem"
        title="Your reputation is being shaped without you"
        subtitle="Skilled nursing facilities face unique reputation challenges that generic tools can't solve."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pains.map((pain, i) => (
          <motion.div
            key={pain.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pain.bg} ${pain.color} mb-5`}
            >
              {pain.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {pain.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{pain.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
