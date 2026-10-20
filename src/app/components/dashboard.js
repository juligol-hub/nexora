
"use client";

import { useState } from "react";

const monthlyData = [
  { month: "May", revenue: 24500, customers: 810 },
  { month: "Jun", revenue: 28800, customers: 925 },
  { month: "Jul", revenue: 31200, customers: 1012 },
  { month: "Aug", revenue: 37400, customers: 1098 },
  { month: "Sep", revenue: 42800, customers: 1187 },
  { month: "Oct", revenue: 48290, customers: 1284 },
];

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function Dashboard() {
  const [period, setPeriod] = useState(6);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const visibleData = monthlyData.slice(-period);
  const latest = visibleData[visibleData.length - 1];
  const previous = visibleData[0];

  const totalRevenue = visibleData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const revenueGrowth =
    ((latest.revenue - previous.revenue) /
      previous.revenue) *
    100;

  const maxRevenue = 55000;

  const metrics = [
    {
      label: "Revenue in period",
      value: money(totalRevenue),
      detail: `${period}-month total`,
      color: "text-indigo-300",
    },
    {
      label: "Active customers",
      value: latest.customers.toLocaleString("en-US"),
      detail: "Latest month",
      color: "text-emerald-300",
    },
    {
      label: "Revenue growth",
      value: `+${revenueGrowth.toFixed(1)}%`,
      detail: "First to last month",
      color: "text-violet-300",
    },
  ];

  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-title"
      className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 lg:px-10"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          The platform
        </p>

        <h2
          id="dashboard-title"
          className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Your business, at a glance.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Explore an interactive preview of the Nexora
          analytics workspace.
        </p>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-slate-700 bg-[#171925] text-white shadow-[0_30px_90px_-30px_rgba(25,25,60,0.35)]">
        <div className="flex min-h-[540px]">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 border-r border-white/10 bg-[#12141e] p-6 md:block">
            <div className="text-xl font-bold tracking-tight">
              nexora<span className="text-indigo-400">.</span>
            </div>

            <div className="mt-12 space-y-2 text-sm">
              <div className="rounded-xl bg-indigo-500/15 px-4 py-3 font-medium text-indigo-300">
                ◈ &nbsp; Overview
              </div>
              <div className="px-4 py-3 text-slate-400">
                ◷ &nbsp; Analytics
              </div>
              <div className="px-4 py-3 text-slate-400">
                ◇ &nbsp; Customers
              </div>
            </div>

            <div className="mt-24 border-t border-white/10 pt-5 text-xs leading-6 text-slate-400">
              Portfolio concept
              <div>Illustrative data only</div>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 p-5 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
                  Workspace / Overview
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Good morning.
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Here&apos;s how your business is performing.
                </p>
              </div>

              <div
                role="group"
                aria-label="Reporting period"
                className="flex rounded-xl border border-white/10 bg-white/5 p-1"
              >
                {[3, 6].map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => {
                      setPeriod(option);
                      setSelectedMonth(null);
                    }}
                    aria-pressed={period === option}
                    className={`min-h-11 rounded-lg px-4 py-2 text-xs font-medium transition ${
                      period === option
                        ? "bg-indigo-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {option} months
                  </button>
                ))}
              </div>
            </div>

            {/* Metric cards */}
            <div aria-live="polite" aria-atomic="true" className="mt-9 grid gap-4 lg:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-[#202331] p-5"
                >
                  <p className="text-sm text-slate-400">
                    {metric.label}
                  </p>

                  <p className="mt-4 break-words text-2xl font-semibold tracking-tight sm:text-3xl">
                    {metric.value}
                  </p>

                  <p className={`mt-3 text-xs ${metric.color}`}>
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue chart */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#202331] p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold">
                    Revenue analytics
                  </h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Monthly revenue performance
                  </p>
                </div>

                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Sample data
                </div>
              </div>

              <div className="relative mt-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-7 top-0 flex flex-col justify-between"
                >
                  {[0, 1, 2, 3].map((line) => (
                    <div
                      key={line}
                      className="border-t border-dashed border-white/10"
                    />
                  ))}
                </div>

                <div className="relative flex h-56 items-end gap-2 sm:gap-4">
                  {visibleData.map((item) => {
                    const active =
                      selectedMonth === item.month;

                    return (
                      <button
                        key={item.month}
                        type="button"
                        aria-pressed={active}
                        aria-label={`${item.month}: ${money(item.revenue)} revenue`}
                        onClick={() =>
                          setSelectedMonth(
                            active ? null : item.month
                          )
                        }
                        className="group flex h-full min-w-0 flex-1 flex-col justify-end gap-3"
                      >
                        <div className="relative flex h-[calc(100%-28px)] w-full items-end">
                          <div
                            className={`w-full rounded-t-lg transition-all duration-300 ${
                              active
                                ? "bg-violet-300"
                                : "bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-violet-300"
                            }`}
                            style={{
                              height: `${(item.revenue / maxRevenue) * 100}%`,
                            }}
                          />
                        </div>

                        <span className="h-4 text-center text-[11px] text-slate-400">
                          {item.month}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                aria-live="polite"
                className="mt-6 flex min-h-16 flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="text-xs text-slate-400">
                    {selectedMonth || latest.month} revenue
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    {money(
                      visibleData.find(
                        (item) => item.month === selectedMonth
                      )?.revenue ?? latest.revenue
                    )}
                  </p>
                </div>
                <p className="text-xs text-slate-400">
                  Select a bar to inspect
                </p>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-400">
              NEXORA is a fictional portfolio project.
              No live customer data is used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
