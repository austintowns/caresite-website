"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-12 bg-primary-500">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-white">
            Book your free Google profile audit.
          </p>
          <p className="text-primary-100 text-sm mt-1">
            Competitor comparison + 90-day roadmap — no commitment, no sales pressure.
          </p>
        </div>
        <Button
          href="#contact"
          variant="secondary"
          size="lg"
          className="shrink-0 gap-2"
        >
          Book Your Free Audit
          <ArrowRight size={18} />
        </Button>
      </motion.div>
    </section>
  );
}
