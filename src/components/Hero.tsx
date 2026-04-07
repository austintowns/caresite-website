"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { AnimatedCounter } from "./AnimatedCounter";
import { Shield, Star, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-primary-50/50 to-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1E6BB8 1px, transparent 1px), linear-gradient(90deg, #1E6BB8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-secondary-50 border border-secondary-200 px-4 py-1.5 text-sm font-medium text-secondary-700 mb-6"
          >
            <Shield size={14} />
            Built exclusively for skilled nursing facilities
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Your facility deserves{" "}
            <span className="text-primary-500">better reviews</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed sm:text-xl max-w-2xl mx-auto"
          >
            The only review management platform built exclusively for skilled
            nursing. HIPAA-safe architecture, EHR integration, and automated
            outreach that turns discharged families into five-star advocates.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#contact" size="lg">
              Book Your Free Audit
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <StatCard
            icon={<TrendingUp size={20} className="text-secondary-500" />}
            value={12}
            suffix="x"
            label="Average increase in monthly reviews"
          />
          <StatCard
            icon={<Star size={20} className="text-accent-500" />}
            value={4.6}
            suffix="avg"
            label="Star rating after 90 days"
            decimal
          />
          <StatCard
            icon={<Shield size={20} className="text-primary-500" />}
            value={100}
            suffix="%"
            label="HIPAA compliant by architecture"
          />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  suffix,
  label,
  decimal = false,
}: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
      <div className="mb-2">{icon}</div>
      <div className="flex items-baseline gap-0.5">
        <AnimatedCounter target={value} decimal={decimal} className="text-3xl font-bold text-slate-900" />
        <span className="text-xl font-semibold text-primary-500">{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}
