"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Decode",
    subtitle: "Insight Sprints",
    description:
      "We map the signal terrain using qualitative immersions, behavioural data indexing, and market anomalies to frame the opportunity zone.",
    artifacts: ["Signal atlas", "Causality map", "Momentum thesis"]
  },
  {
    title: "Design",
    subtitle: "Experience Orchestration",
    description:
      "Designers and technologists co-build modular systems that adapt to user states, delivering continuity across touchpoints and channels.",
    artifacts: ["Adaptive blueprint", "Design language OS", "Experiment stack"]
  },
  {
    title: "Deploy",
    subtitle: "Runway to Market",
    description:
      "We launch with intelligence baked-in, operating cross-functional pods that iterate in-market to accelerate traction and retention.",
    artifacts: ["Activation pipeline", "Live telemetry", "Iterative roadmap"]
  }
] as const;

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-10 mx-auto mt-28 w-full max-w-[1200px] overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 px-6 py-16 sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Methodology</p>
        <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
          Precision workflows that translate insight into measurable action.
        </h2>
      </motion.div>
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-[#5E17EB]/10"
          >
            <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-atlaze-primary/90 text-2xl font-semibold text-white shadow-glow">
              {index + 1}
            </div>
            <div className="pt-10">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{step.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm text-white/70">{step.description}</p>
              <div className="mt-6 space-y-3">
                {step.artifacts.map((artifact) => (
                  <div
                    key={artifact}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"
                  >
                    {artifact}
                    <span className="text-white/40">→</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
