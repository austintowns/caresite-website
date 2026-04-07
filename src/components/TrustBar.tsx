"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Building2, Phone } from "lucide-react";

export function TrustBar() {
  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-secondary-500" />
            <span>HIPAA-safe architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-primary-500" />
            <span>Text message compliance (TCPA) built in</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-slate-400" />
            <span>Works with PointClickCare, MatrixCare & all EHRs</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-slate-400" />
            <span className="font-medium text-slate-700">
              (435) 210-6111
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
