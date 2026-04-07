"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Upload, Send, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Upload size={28} />,
    title: "Upload your discharge list",
    description:
      "Export a CSV from PointClickCare, MatrixCare, or any EHR. Your data is cleaned on your own computer before anything is sent to us — no diagnoses, insurance, or patient IDs ever leave your machine.",
  },
  {
    number: "02",
    icon: <Send size={28} />,
    title: "We reach out to families",
    description:
      "Personalized SMS messages are sent to responsible parties during appropriate hours. Quiet hours, TCPA opt-out, and follow-up timing are all handled automatically.",
  },
  {
    number: "03",
    icon: <Star size={28} />,
    title: "Reviews flow to Google",
    description:
      "Happy families are guided to your Google Business Profile. Unhappy ones share feedback privately — giving you improvement data without public damage.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" dark>
      <SectionHeader
        eyebrow="How It Works"
        title="Three steps to transform your reviews"
        subtitle="From discharge list to 5-star Google review in under a minute of setup time."
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400" />

        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Step circle */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/25 mb-6">
              {step.icon}
            </div>
            {/* Step number */}
            <span className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-2">
              Step {step.number}
            </span>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {step.title}
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
