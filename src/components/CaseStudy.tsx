"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { AnimatedCounter } from "./AnimatedCounter";
import { ArrowRight, Star, TrendingUp, Clock } from "lucide-react";

export function CaseStudy() {
  return (
    <Section id="case-study">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-200 mb-3">
              Pilot Results
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              From 2.8 stars to 4.4 in 90 days
            </h2>
            <p className="text-primary-100 max-w-xl mb-10">
              A 120-bed skilled nursing facility in the Pacific Northwest
              launched Caresite after years of declining ratings. Here&apos;s what
              happened in the first three months.
            </p>

            {/* Before / After metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <MetricCard
                icon={<Star size={20} />}
                label="Google Rating"
                before="2.8"
                after={4.4}
                decimal
              />
              <MetricCard
                icon={<TrendingUp size={20} />}
                label="Reviews / Month"
                before="0.1"
                after={14}
              />
              <MetricCard
                icon={<Clock size={20} />}
                label="Setup Time"
                before="—"
                after={15}
                suffix="min"
                noCounter
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-primary-100">
              <div className="flex items-center gap-2">
                <ArrowRight size={14} />
                <span>5 policy-violating reviews removed via AI dispute assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={14} />
                <span>92% of negative feedback captured privately</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function MetricCard({
  icon,
  label,
  before,
  after,
  decimal = false,
  suffix,
  noCounter = false,
}: {
  icon: React.ReactNode;
  label: string;
  before: string;
  after: number;
  decimal?: boolean;
  suffix?: string;
  noCounter?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-5"
    >
      <div className="flex items-center gap-2 text-primary-200 mb-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-lg text-primary-300 line-through">{before}</span>
        <ArrowRight size={16} className="text-primary-300" />
        <span className="flex items-baseline gap-1">
          {noCounter ? (
            <span className="text-3xl font-bold">{after}</span>
          ) : (
            <AnimatedCounter
              target={after}
              decimal={decimal}
              className="text-3xl font-bold"
            />
          )}
          {suffix && (
            <span className="text-sm font-medium text-primary-200">
              {suffix}
            </span>
          )}
        </span>
      </div>
    </motion.div>
  );
}
