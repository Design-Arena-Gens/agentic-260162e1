"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Waves } from "./sections/icons";
import Expertise from "./sections/expertise";
import Insights from "./sections/insights";
import Process from "./sections/process";
import Results from "./sections/results";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="orbital orbital-primary -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 blur-3xl" />
      <div className="orbital orbital-secondary top-72 right-[-120px] h-[420px] w-[420px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,60,255,0.4),transparent_55%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 pt-10 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 shadow-glow">
            <span className="text-lg font-semibold text-atlaze-highlight">A</span>
          </div>
          <div>
            <p className="text-xl font-semibold tracking-wide">Atlaze</p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Analyse • Act • Achieve</p>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/70 md:flex">
          <a className="transition hover:text-white" href="#capabilities">
            Capabilities
          </a>
          <a className="transition hover:text-white" href="#process">
            Method
          </a>
          <a className="transition hover:text-white" href="#insights">
            Insights
          </a>
          <a className="transition hover:text-white" href="#contact">
            Engage
          </a>
        </nav>
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:border-white/30 hover:bg-white/20 md:flex"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </header>

      <section className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-6 pb-20 pt-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
          >
            <Sparkles className="h-4 w-4 text-atlaze-highlight" />
            <span>Digital intelligence for brands that refuse average</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-4xl font-semibold leading-[1.1] text-white sm:text-6xl"
          >
            We transform raw signals into market-shaping experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg text-white/75"
          >
            Atlaze is the agency for teams that move at the speed of data. We architect adaptive
            brand systems, immersive digital products, and actionable intelligence that cut through
            the noise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-atlaze-primary px-6 py-3 text-sm font-semibold text-white shadow-glow-strong transition hover:scale-[1.02] hover:bg-[#7028ff]"
            >
              Book a discovery sprint
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#insights"
              className="flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              View our playbook
              <Waves className="h-5 w-5 text-atlaze-highlight" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-4 shadow-glow">
                <p className="text-2xl font-semibold text-atlaze-highlight">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-12 w-full max-w-[420px]"
        >
          <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-tr from-[#130B1F] via-[#2B0F49] to-[#120425] opacity-70 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/40">
              Live Diagnostics
              <span>ATL-9284</span>
            </div>
            <div className="mt-6 space-y-6">
              {diagnostics.map((diag) => (
                <div key={diag.title} className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center justify-between text-xs tracking-[0.3em] text-white/45">
                    {diag.cluster}
                    <span>{diag.variance}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">{diag.title}</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-atlaze-primary via-atlaze-accent to-atlaze-highlight"
                      style={{ width: `${diag.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">Next Action</p>
                <p className="mt-1 text-sm font-semibold text-white">Prototype Insight Capsule</p>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-atlaze-primary text-white shadow-glow">
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Expertise />
      <Process />
      <Insights />
      <Results />

      <footer id="contact" className="relative z-10 mx-auto mt-24 w-full max-w-[1200px] px-6 pb-20 sm:px-10">
        <div className="glass-panel overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="tagline-shimmer inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
                Analyse • Act • Achieve
              </p>
              <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
                Ready to surface your next market advantage?
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                We run immersive, data-fuelled sprints to uncover high-conviction opportunities and
                design the products, stories, and systems that bring them to life.
              </p>
            </div>
            <div className="space-y-5">
              <a
                href="mailto:hello@atlaze.com"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:border-white/30 hover:bg-white/20"
              >
                hello@atlaze.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-atlaze-primary via-atlaze-accent to-atlaze-highlight px-6 py-4 text-sm font-semibold text-white shadow-glow-strong transition hover:scale-[1.01]"
              >
                Download Capabilities Deck
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            {contactHighlights.map((item) => (
              <div key={item.label} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.label}</p>
                <p className="text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Atlaze Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white/80" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white/80" href="#">
              Terms
            </a>
            <a className="transition hover:text-white/80" href="#">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const stats = [
  { value: "34%", label: "Avg. Conversion Lift" },
  { value: "12x", label: "Faster GTM Cycles" },
  { value: "94", label: "Markets Activated" },
  { value: "∞", label: "Experiment Velocity" }
] as const;

const diagnostics = [
  {
    cluster: "Signal Cluster 07",
    title: "Audience momentum in emerging fintech corridors",
    variance: "+18% YoY",
    progress: 82
  },
  {
    cluster: "Signal Cluster 11",
    title: "Engagement delta vs. category benchmark",
    variance: "+24.5%",
    progress: 70
  },
  {
    cluster: "Signal Cluster 15",
    title: "Product resonance: Adaptive experience layer",
    variance: "+31.8%",
    progress: 92
  }
] as const;

const contactHighlights = [
  { label: "HQ", value: "Remote-first / Global collective" },
  { label: "ENGAGEMENT", value: "Strategy sprints, venture labs, retained innovation pods" },
  { label: "RESPONSE TIME", value: "< 24h for new partnership requests" }
] as const;
