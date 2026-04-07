"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import {
  Star,
  TrendingUp,
  MessageSquare,
  Shield,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
} from "lucide-react";

export function ProductPreview() {
  return (
    <Section id="product-preview">
      <SectionHeader
        eyebrow="See It In Action"
        title="A dashboard built for your workflow"
        subtitle="Everything you need to manage your facility's reputation — in one clean view."
      />

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white"
      >
        {/* Mock browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md border border-slate-200 px-3 py-1 text-xs text-slate-400 max-w-xs">
              pulse.caresite.io/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 md:p-8">
          {/* Top stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <MockStat
              icon={<Star size={16} className="text-accent-500" />}
              label="Google Rating"
              value="4.4"
              change="+1.6"
              positive
            />
            <MockStat
              icon={<TrendingUp size={16} className="text-secondary-500" />}
              label="Reviews This Month"
              value="14"
              change="+1,200%"
              positive
            />
            <MockStat
              icon={<MessageSquare size={16} className="text-primary-500" />}
              label="SMS Sent"
              value="127"
              change="92% delivered"
            />
            <MockStat
              icon={<Shield size={16} className="text-primary-500" />}
              label="Disputes Filed"
              value="3"
              change="2 removed"
              positive
            />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review flow visualization */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h4 className="text-sm font-semibold text-slate-700 mb-4">
                Review Flow — Last 30 Days
              </h4>
              <div className="space-y-3">
                <FlowRow
                  label="SMS Sent"
                  count={127}
                  max={127}
                  color="bg-primary-500"
                />
                <FlowRow
                  label="Clicked"
                  count={89}
                  max={127}
                  color="bg-primary-400"
                />
                <div className="flex gap-3 pl-4">
                  <div className="flex-1 flex items-center gap-2">
                    <ThumbsUp size={14} className="text-secondary-500" />
                    <FlowRow
                      label="Positive"
                      count={72}
                      max={89}
                      color="bg-secondary-500"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <ThumbsDown size={14} className="text-red-400" />
                    <FlowRow
                      label="Private"
                      count={17}
                      max={89}
                      color="bg-red-300"
                    />
                  </div>
                </div>
                <FlowRow
                  label="Google Reviews"
                  count={14}
                  max={127}
                  color="bg-accent-500"
                />
              </div>
            </div>

            {/* Recent reviews */}
            <div className="rounded-xl border border-slate-200 p-5">
              <h4 className="text-sm font-semibold text-slate-700 mb-4">
                Recent Google Reviews
              </h4>
              <div className="space-y-3">
                <MockReview
                  stars={5}
                  text="The staff was incredibly caring during my mother's recovery..."
                  time="2 hours ago"
                  hasResponse
                />
                <MockReview
                  stars={5}
                  text="Best rehabilitation experience. Clean facility, friendly team."
                  time="1 day ago"
                  hasResponse
                />
                <MockReview
                  stars={2}
                  text="Communication could be better regarding discharge..."
                  time="3 days ago"
                  dispute
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-sm text-slate-500 mt-6">
        Dashboard preview — actual product interface
      </p>
    </Section>
  );
}

function MockStat({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-4">
      <div className="flex items-center gap-1.5 mb-2">{icon}<span className="text-xs text-slate-500">{label}</span></div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className={`text-xs mt-1 ${positive ? "text-secondary-600" : "text-slate-500"}`}>
        {positive && <ArrowRight size={10} className="inline -rotate-45 mr-0.5" />}
        {change}
      </p>
    </div>
  );
}

function FlowRow({
  label,
  count,
  max,
  color,
}: {
  label: string;
  count: number;
  max: number;
  color: string;
}) {
  const pct = Math.round((count / max) * 100);
  return (
    <div className="flex-1">
      <div className="flex justify-between text-xs text-slate-600 mb-1">
        <span>{label}</span>
        <span className="font-medium">{count}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}

function MockReview({
  stars,
  text,
  time,
  hasResponse,
  dispute,
}: {
  stars: number;
  text: string;
  time: string;
  hasResponse?: boolean;
  dispute?: boolean;
}) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < stars ? "text-accent-500 fill-accent-500" : "text-slate-300"}
            />
          ))}
        </div>
        <span className="text-[10px] text-slate-400">{time}</span>
      </div>
      <p className="text-xs text-slate-600 line-clamp-2">{text}</p>
      <div className="flex gap-2 mt-2">
        {hasResponse && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary-50 text-secondary-600 font-medium">
            AI Response Sent
          </span>
        )}
        {dispute && (
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium">
            Policy Violation Detected
          </span>
        )}
      </div>
    </div>
  );
}
