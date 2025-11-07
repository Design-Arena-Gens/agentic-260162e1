"use client";

import { motion } from "framer-motion";
import { AuroraLine, ArrowUpRight } from "./icons";

const insights = [
  {
    headline: "Signal-Informed Brand Systems",
    summary:
      "How we engineered an adaptive brand operating system for a fintech challenger, aligning product telemetry with storytelling cadence.",
    link: "#",
    impact: "+48% conversion velocity",
    theme: "from-[#120425]/80 via-[#381162]/60 to-[#9042FF]/40"
  },
  {
    headline: "Designing For Experiment Velocity",
    summary:
      "Cross-disciplinary pods, unified measurement frameworks, and automation scripts that cut decision latency by 64%.",
    link: "#",
    impact: "4.5x experiment throughput",
    theme: "from-[#1A1025]/80 via-[#2B0F49]/60 to-[#5E17EB]/40"
  },
  {
    headline: "The Resilience Index",
    summary:
      "Our proprietary scoring matrix that calibrates brand and product resilience across economic cycles, informed by 12 markets.",
    link: "#",
    impact: "Index launch Q3 2024",
    theme: "from-[#0B0711]/90 via-[#28103D]/60 to-[#6F2FEE]/40"
  }
] as const;

export default function Insights() {
  return (
    <section id="insights" className="relative z-10 mx-auto mt-28 w-full max-w-[1200px] px-6 sm:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Intelligence</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Atlaze Insight Capsules
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Structured, data-backed narratives that distill what&apos;s next. Access mindset shifts,
          growth levers, and design plays observed across Atlaze partner ecosystems.
        </p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {insights.map((item, index) => (
          <motion.article
            key={item.headline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${item.theme}`} />
            <div className="relative flex h-full flex-col justify-between">
              <AuroraLine className="h-20 w-full opacity-80" />
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/45">Insight Capsule</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.headline}</h3>
                <p className="mt-3 text-sm text-white/70">{item.summary}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
                <span>{item.impact}</span>
                <a
                  href={item.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-white/30 hover:bg-white/20"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
