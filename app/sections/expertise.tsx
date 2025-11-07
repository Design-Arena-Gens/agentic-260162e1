"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const pillars = [
  {
    title: "Insight Architectures",
    description:
      "Integrated data frameworks that surface signal clusters from product analytics, market sentiment, and real-time behaviour stacks.",
    tags: ["Growth analytics", "Audience fractals", "Signal dashboards"],
    accent: "from-[#5E17EB]/70 via-[#9042FF]/60 to-[#C6A3FF]/40"
  },
  {
    title: "Experience Systems",
    description:
      "Immersive brand ecosystems engineered for continuity across product, marketing, and service environments.",
    tags: ["Adaptive CX", "Brand systems", "Service design"],
    accent: "from-[#1A1025]/80 via-[#2F1148]/70 to-[#5E17EB]/50"
  },
  {
    title: "Activation Labs",
    description:
      "Rapid experimentation programs that convert intelligence into market-ready campaigns, ventures, and prototypes.",
    tags: ["Campaign pods", "Venture incubation", "Performance choreography"],
    accent: "from-[#120425]/80 via-[#2D0E43]/70 to-[#9042FF]/50"
  }
] as const;

export default function Expertise() {
  return (
    <section id="capabilities" className="relative z-10 mx-auto mt-24 w-full max-w-[1200px] px-6 sm:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            A seamless fusion of intelligence, design, and go-to-market velocity.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Our teams blend strategists, designers, and technologists inside purpose-built pods. Each
          engagement fuses deep qualitative insight with engineered measurement frameworks to move
          beyond vanity metrics and into sustained business lift.
        </p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <div
              className={clsx(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                "bg-gradient-to-br",
                pillar.accent
              )}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Division</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm text-white/70">{pillar.description}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/70">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-1 uppercase tracking-[0.25em] transition group-hover:border-white/20 group-hover:bg-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
