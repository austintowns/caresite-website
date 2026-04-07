"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

export function VideoSection() {
  return (
    <Section id="demo">
      <SectionHeader
        eyebrow="See It In Action"
        title="From discharge to 5-star review"
        subtitle="Watch how Caresite automatically turns discharged families into Google reviewers — without touching PHI."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/60">
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-label="Caresite.io product demonstration"
            className="w-full h-auto"
            poster="/caresite-demo-poster.jpg"
          >
            <source src="/caresite-demo.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/caresite-demo.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>
        </div>
      </motion.div>
    </Section>
  );
}
