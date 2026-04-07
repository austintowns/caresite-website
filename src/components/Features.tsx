"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  MessageSquare,
  ShieldCheck,
  Scale,
  BarChart3,
  Zap,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare size={24} />,
    title: "Automated SMS Outreach",
    description:
      "Reach discharged residents' families with a single, well-timed text. Happy responders are guided to Google to leave a review. Unhappy responders go to a private form — so you capture stars publicly and resolve concerns privately.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "HIPAA-Safe by Architecture",
    description:
      "Caresite never stores or transmits PHI. Designed from day one around skilled nursing compliance — not retrofitted from a generic review tool. No BAA required.",
  },
  {
    icon: <Zap size={24} />,
    title: "AI Review Responses",
    description:
      "Generate professional, HIPAA-safe replies to every Google review in seconds. Each response acknowledges feedback without confirming or denying any patient relationship.",
  },
  {
    icon: <Scale size={24} />,
    title: "AI Dispute Assistant",
    description:
      "Scans negative reviews for Google policy violations — fake reviews, competitor sabotage, HIPAA-violating content. Drafts dispute submissions so your team can flag removals in minutes.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Review Volume Analytics",
    description:
      "Track how many reviews you receive, your average rating, and response time across every location. Benchmark against nearby competitors and see exactly how your reputation trends week over week.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "F-Tag & Survey Integration",
    description:
      "Connect review sentiment data with F-tag history and state survey outcomes. Surface patterns between resident feedback and compliance findings before your next survey window.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Features"
        title="Everything your facility needs to own its reputation"
        subtitle="Purpose-built tools that understand SNF compliance, workflows, and the families you serve."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group p-8 rounded-2xl border border-slate-200/60 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 mb-5">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
