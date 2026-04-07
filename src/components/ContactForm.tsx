"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Button } from "./Button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Move focus to success message for screen readers
    setTimeout(() => successRef.current?.focus(), 100);
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-white to-primary-50/30">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See where your profile stands against nearby facilities
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;ll audit your Google profile, benchmark it against 3
            nearby competitors, and deliver a 90-day review growth plan —
            no commitment required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          {submitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-secondary-50 border border-secondary-200 focus:outline-none"
            >
              <CheckCircle size={48} className="text-secondary-500" />
              <h3 className="text-xl font-semibold text-slate-900">
                We&apos;ll be in touch!
              </h3>
              <p className="text-slate-600">
                A member of our team will reach out within one business day to
                get your facility set up.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-200/50"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    placeholder="jane@facility.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label
                    htmlFor="facility"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Facility name
                  </label>
                  <input
                    id="facility"
                    name="facility"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    placeholder="Sunrise Skilled Nursing"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Phone{" "}
                    <span className="text-slate-500 font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Your role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select your role</option>
                    <option value="administrator">Administrator</option>
                    <option value="don">Director of Nursing</option>
                    <option value="regional-ops">Regional Operations</option>
                    <option value="marketing">Marketing Director</option>
                    <option value="owner">Owner / CEO</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="text-left">
                  <label
                    htmlFor="locations"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Number of facilities
                  </label>
                  <select
                    id="locations"
                    name="locations"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors bg-white"
                  >
                    <option value="1">1 facility</option>
                    <option value="2-5">2-5 facilities</option>
                    <option value="6-15">6-15 facilities</option>
                    <option value="16-50">16-50 facilities</option>
                    <option value="50+">50+ facilities</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Book My Free Audit
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-slate-500 mt-1">
                We&apos;ll audit your Google profile and deliver a 90-day growth plan. No commitment, no spam. We never share your information.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
