"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, Building2, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <Section id="about" dark>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 mb-3">
          Who We Are
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
          Built by SNF operators, for SNF operators
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Caresite was founded by a team that has managed skilled nursing
          facilities firsthand. We built this platform because we lived the
          problem — watching great care go unrecognized while unfair reviews
          drove families to competitors. Every feature was designed alongside
          real SNF administrators, compliance officers, and directors of nursing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200/60">
            <Users size={24} className="text-primary-500 mb-3" />
            <p className="text-2xl font-bold text-slate-900">2</p>
            <p className="text-sm text-slate-500">Co-founders with SNF experience</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200/60">
            <Building2 size={24} className="text-secondary-500 mb-3" />
            <p className="text-2xl font-bold text-slate-900">12+</p>
            <p className="text-sm text-slate-500">SNF design partners across 5 states</p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-slate-200/60">
            <ShieldCheck size={24} className="text-primary-500 mb-3" />
            <p className="text-2xl font-bold text-slate-900">Zero</p>
            <p className="text-sm text-slate-500">PHI stored on our servers — ever</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
