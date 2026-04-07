"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string | "partial";

interface Row {
  label: string;
  caresite: CellValue;
  podium: CellValue;
  birdeye: CellValue;
  reputation: CellValue;
}

const rows: Row[] = [
  {
    label: "Built for skilled nursing",
    caresite: true,
    podium: false,
    birdeye: false,
    reputation: false,
  },
  {
    label: "HIPAA-safe architecture",
    caresite: true,
    podium: "partial",
    birdeye: "partial",
    reputation: "partial",
  },
  {
    label: "PointClickCare integration",
    caresite: true,
    podium: false,
    birdeye: false,
    reputation: false,
  },
  {
    label: "Sentiment gating",
    caresite: true,
    podium: false,
    birdeye: true,
    reputation: true,
  },
  {
    label: "AI dispute assistant",
    caresite: true,
    podium: false,
    birdeye: false,
    reputation: false,
  },
  {
    label: "F-tag & survey integration",
    caresite: true,
    podium: false,
    birdeye: false,
    reputation: false,
  },
  {
    label: "SMS review campaigns",
    caresite: true,
    podium: true,
    birdeye: true,
    reputation: true,
  },
  {
    label: "AI review responses",
    caresite: true,
    podium: true,
    birdeye: true,
    reputation: true,
  },
  {
    label: "Competitor tracking",
    caresite: true,
    podium: false,
    birdeye: true,
    reputation: true,
  },
  {
    label: "SNF compliance training",
    caresite: true,
    podium: false,
    birdeye: false,
    reputation: false,
  },
  {
    label: "Pricing transparency",
    caresite: "$149/mo",
    podium: "Custom quote",
    birdeye: "Custom quote",
    reputation: "Custom quote",
  },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === true)
    return <Check size={18} className="text-secondary-500" aria-label="Yes" />;
  if (value === false)
    return <X size={18} className="text-red-400" aria-label="No" />;
  if (value === "partial")
    return <Minus size={18} className="text-amber-400" aria-label="Partial" />;
  return (
    <span className="text-sm font-semibold text-slate-700">{value}</span>
  );
}

export function ComparisonTable() {
  return (
    <Section id="comparison">
      <SectionHeader
        eyebrow="Compare"
        title="See why SNFs choose Caresite"
        subtitle="The only platform that combines healthcare compliance with purpose-built review management."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[640px] border-collapse">
          <thead>
            <tr>
              <th className="text-left py-4 px-4 text-sm font-medium text-slate-500 w-[30%]">
                Feature
              </th>
              <th className="py-4 px-4 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500 text-white text-sm font-semibold">
                  Caresite.io
                </span>
              </th>
              <th className="py-4 px-4 text-center text-sm font-medium text-slate-500">
                Podium
              </th>
              <th className="py-4 px-4 text-center text-sm font-medium text-slate-500">
                BirdEye
              </th>
              <th className="py-4 px-4 text-center text-sm font-medium text-slate-500">
                Reputation.com
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}
              >
                <td className="py-4 px-4 text-sm font-medium text-slate-700">
                  {row.label}
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.caresite} />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.podium} />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.birdeye} />
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex justify-center">
                    <CellIcon value={row.reputation} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Section>
  );
}
