"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    client: "Nebula Pay",
    category: "Fintech / Product Launch",
    headline: "Redesigned onboarding compressing activation from 12 days to under 48 hours.",
    metric: "↑ 76% activation",
    testimonial:
      "Atlaze turned fragmented data into a clear experimentation roadmap. The result was momentum we could feel in days, not quarters."
  },
  {
    client: "Fluxion Labs",
    category: "Climate SaaS / Series B",
    headline: "GTM system scaling to 9 markets with personalised live intelligence surfaces.",
    metric: "12x pipeline velocity",
    testimonial:
      "They choreographed our product and marketing to move together. Every touchpoint carried our story forward with quantifiable lift."
  },
  {
    client: "Mira Collective",
    category: "Retail Media / Venture Studio",
    headline: "Immersive brand OS + experience design for multi-brand omnichannel platform.",
    metric: "+32 NPS differential",
    testimonial:
      "Atlaze embeds like a partner, not a vendor. Their pods created a foundation we continue to scale on internally."
  }
] as const;

export default function Results() {
  return (
    <section className="relative z-10 mx-auto mt-28 w-full max-w-[1200px] px-6 sm:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Field Results</p>
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Proven transformation across venture stages.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          From venture studios building the next category to scaling SaaS teams finding new growth
          plateaus, our work finds clarity within complexity to move the metrics that matter.
        </p>
      </div>
      <div className="mt-14 space-y-6">
        {outcomes.map((outcome, index) => (
          <motion.article
            key={outcome.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 p-8 shadow-glow"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_top_right,rgba(144,66,255,0.35),transparent_55%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/45">{outcome.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{outcome.client}</h3>
                <p className="mt-3 max-w-2xl text-sm text-white/70">{outcome.headline}</p>
              </div>
              <div className="flex flex-col items-end gap-4 text-right">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                  {outcome.metric}
                </span>
                <blockquote className="max-w-sm text-sm italic text-white/60">
                  “{outcome.testimonial}”
                </blockquote>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
