import Dashboard from "./components/dashboard";
import { ChartNoAxesCombined, BrainCircuit, Users } from "lucide-react";
import Navbar from "./components/Navbar";

export default function Home() {
   return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#1B1D2B]">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>

<section className="relative isolate overflow-hidden px-6 pb-20 pt-20 text-center md:pt-28">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-8 -z-10 h-[440px] w-[750px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(99,91,255,0.13),transparent_70%)]"
  />

  <div className="mx-auto max-w-5xl">
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-600 shadow-sm sm:text-sm">
      <span className="h-2 w-2 rounded-full bg-indigo-500" />
      THE FUTURE OF BUSINESS INTELLIGENCE
      <span aria-hidden="true">↗</span>
    </div>

    <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#1b1d2b] sm:text-6xl md:text-7xl lg:text-[86px]">
      Less noise.
      <br />
      <span className="bg-gradient-to-r from-[#635bff] to-[#7561d8] bg-clip-text text-transparent">
        More clarity.
      </span>
    </h1>

    <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
      All your business insights, finally in one place.
      Turn complex data into clear decisions and move forward
      with confidence.
    </p>

    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <a
        href="#dashboard"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#635bff] px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-[#5148e8]"
      >
        Explore the platform
        <span className="ml-3" aria-hidden="true">→</span>
      </a>

      <a
        href="#features"
        className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
      >
        Discover features
      </a>
    </div>

    <p className="mt-6 text-xs tracking-wide text-slate-600">
      INTERACTIVE DEMO · FICTIONAL PRODUCT & DATA
    </p>
  </div>
</section>

      <Dashboard />

     <section
  id="features"
  className="mx-auto max-w-7xl px-6 pb-32 pt-12 lg:px-10"
>
  <div className="mx-auto mb-14 max-w-2xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
      Built for better decisions
    </p>

    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1b1d2b] sm:text-5xl">
      Powerful insights.
      <br />
      Effortlessly simple.
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Everything your team needs to understand performance,
      recognize opportunities, and move with confidence.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        icon: ChartNoAxesCombined,
        title: "Everything in focus",
        description:
          "Bring your most important metrics together in one beautifully organized workspace.",
      },
      {
        icon: BrainCircuit,
        title: "Insights that matter",
        description:
          "Turn complex information into clear, actionable decisions without the noise.",
      },
      {
        icon: Users,
        title: "Built around your team",
        description:
          "Give everyone a clearer understanding of progress, priorities, and performance.",
      },
    ].map((feature) => {
      const Icon = feature.icon;

      return (
        <article
          key={feature.title}
          className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
            <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
          </div>

          <h3 className="mt-9 text-xl font-semibold tracking-tight text-[#1b1d2b]">
            {feature.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {feature.description}
          </p>

          <div className="mt-9 h-px w-full bg-slate-100" />

          <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Nexora Platform
          </p>
        </article>
      );
    })}
  </div>
</section>

      {/* Final Call to Action */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#171925] px-6 py-28 text-white"
>
  {/* Decorative background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] max-w-full -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[110px]"
  />

  <div className="relative mx-auto max-w-4xl text-center">
    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-300">
      <span className="h-2 w-2 rounded-full bg-indigo-400" />
      A CLEARER WAY FORWARD
    </div>

    <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
      Better insights.
      <br />
      <span className="text-[#a59cff]">
        Brighter possibilities.
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
      Great decisions start with clarity. Discover how
      a beautifully simple analytics experience
      can transform the way you see your business.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="#dashboard"
        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#635bff] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#5148e8]"
      >
        Explore the interactive demo
        <span className="ml-3" aria-hidden="true">
          →
        </span>
      </a>

      <a
        href="#features"
        className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-indigo-400 hover:bg-white/5"
      >
        Discover the platform
      </a>
    </div>

    <p className="mt-7 text-xs tracking-wide text-slate-400">
      FICTIONAL SAAS CONCEPT · INTERACTIVE PORTFOLIO DEMO
    </p>
  </div>
</section>

</main>
{/* Footer */}
<footer className="border-t border-white/10 bg-[#10121b] px-6 py-12 text-white">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-10 md:flex-row">
      <div className="max-w-sm">
        <a
          href="#top"
          className="text-3xl font-bold tracking-[-0.06em]"
          aria-label="Back to Nexora homepage"
        >
          nexora<span className="text-[#7770ff]">.</span>
        </a>

        <p className="mt-5 text-sm leading-7 text-slate-400">
          Business intelligence, beautifully simplified.
          A modern analytics experience designed
          around clarity and confident decisions.
        </p>
      </div>

      <div className="flex flex-wrap gap-14">
        <div>
          <h3 className="text-sm font-semibold">Explore</h3>

          <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
            <a href="#top" className="hover:text-white">
              Home
            </a>
            <a href="#dashboard" className="hover:text-white">
              Interactive demo
            </a>
            <a href="#features" className="hover:text-white">
              Features
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Project</h3>

          <div className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
            <span>Portfolio concept</span>
            <span>Fictional business</span>
            <span>Sample analytics data</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row">
      <p>© 2026 NEXORA. Portfolio demonstration.</p>

      <p>
        Designed to demonstrate premium SaaS web development.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}