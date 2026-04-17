import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  BriefcaseBusiness,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Company valuation", value: "$300B post-money" },
  { label: "Capital raise", value: "$30B for 10%" },
  { label: "Assets managed", value: "$24.8T" },
  { label: "Annual revenue", value: "$78.4B" },
  { label: "Annual profit", value: "$28.9B" },
  { label: "Current employees", value: "18,600" },
  { label: "Planned employees", value: "41,900" },
  { label: "Office network after expansion", value: "17 offices" },
];

const packages = [
  {
    title: "Institutional Platform",
    price: "Custom mandate pricing",
    description:
      "Built for pension funds, endowments, foundations, and large capital pools seeking long-horizon allocation, advisory, and portfolio construction.",
    points: [
      "Dedicated relationship team",
      "Multi-sector private market access",
      "Advisory and direct investment support",
      "Reporting dashboard and review cadence",
    ],
  },
  {
    title: "Corporate Treasury + Strategic Capital",
    price: "Custom engagement structure",
    description:
      "Designed for corporations with cash reserves, strategic expansion goals, acquisition plans, or special-situation capital deployment.",
    points: [
      "Treasury deployment strategy",
      "Co-investment and deal sourcing",
      "Capital planning and transaction support",
      "Cross-border expansion advisory",
    ],
  },
  {
    title: "Private Wealth + Founder Office",
    price: "Application-based",
    description:
      "For high-net-worth individuals, founders, business owners, and family offices looking for concentrated strategy with institutional discipline.",
    points: [
      "Custom portfolio design",
      "Direct access opportunities",
      "Liquidity and succession planning",
      "Private market exposure",
    ],
  },
];

const audience = [
  { label: "High-net-worth individuals", value: 31 },
  { label: "Founders & business owners", value: 22 },
  { label: "Family offices", value: 17 },
  { label: "Pension funds", value: 14 },
  { label: "Corporations with cash reserves", value: 10 },
  { label: "Endowments & foundations", value: 6 },
];

const marketing = [
  { label: "Referrals & relationship network", value: 34 },
  { label: "Advisor / consultant partnerships", value: 24 },
  { label: "Website & investor portal", value: 16 },
  { label: "Thought leadership reports", value: 12 },
  { label: "Private events & investor dinners", value: 8 },
  { label: "LinkedIn & digital presence", value: 6 },
];

const offices = [
  { city: "New York City", tag: "Flagship hub", detail: "Primary headquarters, investor relations, executive leadership, flagship deal desk" },
  { city: "Dallas", tag: "Core U.S. office", detail: "Operations, business development, client servicing, national middle-market coverage" },
  { city: "Los Angeles", tag: "West Coast office", detail: "Media, consumer, entertainment, growth equity, founder network" },
  { city: "Chicago", tag: "Midwest office", detail: "Industrial, logistics, manufacturing, corporate finance relationships" },
];

const expansion = [
  ["United Kingdom", "London"],
  ["Canada", "Toronto"],
  ["France", "Paris"],
  ["Germany", "Frankfurt"],
  ["Switzerland", "Zurich"],
  ["UAE", "Dubai"],
  ["Singapore", "Singapore"],
  ["Japan", "Tokyo"],
  ["Hong Kong", "Hong Kong"],
  ["India", "Mumbai"],
  ["Australia", "Sydney"],
  ["Brazil", "São Paulo"],
  ["South Africa", "Johannesburg"],
];

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-20 items-end justify-between border-b-4 border-t-4 border-neutral-900 px-1 py-1">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex h-full w-3 flex-col items-center justify-between">
            <div className="h-1 w-3 rounded-sm bg-neutral-900" />
            <div className="h-full w-2 border-x-2 border-neutral-900" />
            <div className="h-1 w-3 rounded-sm bg-neutral-900" />
          </div>
        ))}
      </div>
      <div>
        <div className="font-serif text-2xl tracking-wide text-neutral-950 sm:text-3xl">
          THOMAS EQUITY
        </div>
        <div className="text-xs uppercase tracking-[0.35em] text-neutral-700 sm:text-sm">
          Firm + Buyouts
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-serif text-3xl text-neutral-950 sm:text-5xl">{title}</h2>
      {subtitle ? <p className="text-base leading-7 text-neutral-700 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function BarRow({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm text-neutral-700">
        <span>{label}</span>
        <span className="font-semibold text-neutral-950">{value}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-neutral-300/60">
        <div className="h-2.5 rounded-full bg-neutral-900" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export default function ThomasEquityWebsite() {
  return (
    <div className="min-h-screen bg-[#ece8e4] text-neutral-900">
      <header className="border-b border-neutral-400/70 bg-[#ece8e4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-5 text-sm text-neutral-700">
            <a href="#overview" className="hover:text-neutral-950">Overview</a>
            <a href="#platform" className="hover:text-neutral-950">Platform</a>
            <a href="#audience" className="hover:text-neutral-950">Audience</a>
            <a href="#expansion" className="hover:text-neutral-950">Expansion</a>
            <a href="#contact" className="hover:text-neutral-950">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                <Landmark className="h-4 w-4" />
                Global private equity platform
              </div>
              <h1 className="max-w-4xl font-serif text-5xl leading-none text-neutral-950 sm:text-7xl">
                Build steady. Grow strong.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-neutral-700 sm:text-xl">
                Thomas Equity is a fictional investment firm built as a high-scale private equity and capital platform with a flagship office in New York City and core operations in Dallas, Los Angeles, and Chicago.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-neutral-400 bg-white/35 p-5">
                <div className="text-sm text-neutral-600">Raise</div>
                <div className="mt-1 text-3xl font-bold">$30B</div>
                <div className="mt-1 text-sm text-neutral-700">For 10% equity</div>
              </div>
              <div className="rounded-3xl border border-neutral-400 bg-white/35 p-5">
                <div className="text-sm text-neutral-600">Post-money value</div>
                <div className="mt-1 text-3xl font-bold">$300B</div>
                <div className="mt-1 text-sm text-neutral-700">Scaled platform target</div>
              </div>
              <div className="rounded-3xl border border-neutral-400 bg-white/35 p-5">
                <div className="text-sm text-neutral-600">Projected Year 3 revenue</div>
                <div className="mt-1 text-3xl font-bold">$126.8B</div>
                <div className="mt-1 text-sm text-neutral-700">With 17-office network</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[2rem] border border-neutral-400 bg-white/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-600">
                <TrendingUp className="h-4 w-4" />
                Investment summary
              </div>
              <div className="grid gap-3">
                {[
                  "No single-revenue dependency. The platform earns from management fees, performance fees, advisory mandates, direct equity ownership, and portfolio appreciation.",
                  "The New York office serves as the flagship headquarters and lead investor-facing hub.",
                  "Expansion capital is allocated to 13 additional countries to deepen deal flow, talent access, and cross-border reach.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-neutral-300 bg-[#f5f2ef] p-4 text-sm leading-6 text-neutral-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-8 lg:py-14">
          <SectionTitle
            eyebrow="Company overview"
            title="A scaled platform built for capital, ownership, and expansion"
            subtitle="The model combines asset management economics with private equity upside. The result is a business that earns recurring fees while also participating directly in the growth of the companies it helps scale."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-neutral-400 bg-white/30 p-5 shadow-sm">
                <div className="text-sm text-neutral-600">{stat.label}</div>
                <div className="mt-3 text-2xl font-bold text-neutral-950">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <div className="mb-5 flex items-center gap-3">
                <BarChart3 className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Revenue engine</h3>
              </div>
              <div className="space-y-4 text-neutral-700">
                {[
                  "Management fees on assets under management",
                  "Performance fees on profitable mandates and growth vehicles",
                  "Advisory fees on large transactions and company deals",
                  "Direct equity ownership in companies Thomas Equity helps scale",
                  "Dividend and appreciation income from portfolio holdings",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-neutral-300 bg-[#f5f2ef] px-4 py-3 text-base leading-7">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <div className="mb-5 flex items-center gap-3">
                <Shield className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Use of the $30B raise</h3>
              </div>
              <div className="space-y-4">
                {[
                  ["$11B", "New international headquarters, licensing, compliance, and launch costs"],
                  ["$7B", "Strategic acquisitions, co-investments, and regional market entry"],
                  ["$5B", "Talent hiring, compensation, and leadership placement"],
                  ["$4B", "Technology stack, research systems, and investor portal expansion"],
                  ["$3B", "Working capital, reserves, and execution buffer"],
                ].map(([amount, text]) => (
                  <div key={amount} className="grid grid-cols-[72px_1fr] gap-4 rounded-2xl border border-neutral-300 bg-[#f5f2ef] px-4 py-3">
                    <div className="text-2xl font-bold">{amount}</div>
                    <div className="text-base leading-7 text-neutral-700">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="audience" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <SectionTitle
                eyebrow="Target audience"
                title="Who the platform is built for"
                subtitle="Client acquisition is intentionally selective. Every prospect goes through a thorough application and review process before Thomas Equity takes on a mandate."
              />
              <div className="mt-8 space-y-4">
                {audience.map((item) => (
                  <BarRow key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <SectionTitle
                eyebrow="Packages"
                title="Application-based engagement models"
                subtitle="Pricing is custom because every institution, company, and capital pool is different. Before engagement, the firm reviews background, financial position, objectives, complexity, and operational fit."
              />
              <div className="mt-8 space-y-4">
                {packages.map((pkg) => (
                  <div key={pkg.title} className="rounded-[1.5rem] border border-neutral-300 bg-[#f5f2ef] p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-bold">{pkg.title}</h3>
                      <div className="text-sm font-semibold text-neutral-600">{pkg.price}</div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-neutral-700">{pkg.description}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {pkg.points.map((point) => (
                        <div key={point} className="rounded-xl border border-neutral-300 bg-white/50 px-3 py-2 text-sm text-neutral-700">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <SectionTitle
                eyebrow="Marketing"
                title="Low-noise, high-credibility growth strategy"
                subtitle="The brand does not rely on heavy mass marketing. The core model mirrors institutional finance: trust, relationships, controlled visibility, and a credible digital front door through the website and investor portal."
              />
              <div className="mt-8 space-y-4">
                {marketing.map((item) => (
                  <BarRow key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <SectionTitle
                eyebrow="Core offices"
                title="Built around a New York flagship"
                subtitle="New York City operates as the main office hub and investor-facing center. The remaining U.S. offices strengthen sector coverage, operating depth, and nationwide deal origination."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.city} className="rounded-[1.5rem] border border-neutral-300 bg-[#f5f2ef] p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xl font-bold">{office.city}</div>
                        <div className="mt-1 text-sm font-semibold text-neutral-600">{office.tag}</div>
                      </div>
                      <Building2 className="h-5 w-5 text-neutral-700" />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-neutral-700">{office.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expansion" className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="rounded-[2.2rem] border border-neutral-400 bg-white/30 p-7 sm:p-10">
            <SectionTitle
              eyebrow="Global expansion"
              title="13 additional countries in the next phase"
              subtitle="The $30B raise is used to move Thomas Equity from a U.S.-anchored platform into a global operating network. New headquarters are selected for financial relevance, regulatory importance, regional access, and long-term deal flow."
            />
            <div className="mt-8 rounded-[1.5rem] border border-neutral-300 bg-[#f5f2ef] p-5 text-base leading-7 text-neutral-700">
              Current core offices: <span className="font-semibold text-neutral-950">NYC flagship hub, Dallas, Los Angeles, and Chicago.</span> Planned network after expansion: <span className="font-semibold text-neutral-950">17 total offices.</span> Current employees: <span className="font-semibold text-neutral-950">18,600.</span> Planned employees after rollout: <span className="font-semibold text-neutral-950">41,900.</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {expansion.map(([country, hq]) => (
                <div key={country} className="rounded-[1.4rem] border border-neutral-300 bg-white/45 px-4 py-4">
                  <div className="text-lg font-bold">{country}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-neutral-700">
                    <MapPin className="h-4 w-4" />
                    {hq}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7 lg:col-span-2">
              <SectionTitle
                eyebrow="ROI outlook"
                title="Why the capital story works"
                subtitle="At a $300B post-money valuation, a $30B investment represents 10% equity. With projected Year 3 platform revenue of $126.8B and profit of $46.7B, the return case is tied to platform scale, cross-border expansion, and higher ownership participation across portfolio companies."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Current", "$78.4B revenue / $28.9B profit"],
                  ["Year 1", "$92.6B revenue / $33.4B profit"],
                  ["Year 2", "$109.2B revenue / $39.8B profit"],
                  ["Year 3", "$126.8B revenue / $46.7B profit"],
                  ["Investor ownership", "10%"],
                  ["Implied Year 3 share of profit", "$4.67B"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-[1.4rem] border border-neutral-300 bg-[#f5f2ef] p-4">
                    <div className="text-sm text-neutral-600">{k}</div>
                    <div className="mt-2 text-xl font-bold text-neutral-950">{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-neutral-400 bg-white/30 p-7">
              <div className="mb-5 flex items-center gap-3">
                <Globe2 className="h-5 w-5" />
                <h3 className="text-2xl font-bold">Sectors covered</h3>
              </div>
              <div className="grid gap-3">
                {[
                  "Technology",
                  "Healthcare",
                  "Retail",
                  "Energy",
                  "Media",
                  "Finance",
                  "Logistics",
                  "Real estate",
                  "Consumer goods",
                  "Manufacturing",
                ].map((sector) => (
                  <div key={sector} className="rounded-xl border border-neutral-300 bg-[#f5f2ef] px-4 py-3 text-neutral-700">
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:pb-24">
          <div className="rounded-[2.4rem] border border-neutral-400 bg-neutral-950 px-7 py-10 text-neutral-100 sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  Digital front door
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl">Thomas Equity online</h2>
                <p className="max-w-2xl text-base leading-7 text-neutral-300">
                  This site functions as the company overview, investor-facing brand surface, and credibility layer for the firm. It supports the same packet, pitch, and platform story across digital format.
                </p>
              </div>
              <div className="grid gap-3 rounded-[1.8rem] border border-neutral-700 bg-neutral-900/60 p-5">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Mail className="h-4 w-4" /> info@thomasequity.com
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Phone className="h-4 w-4" /> (212) 555-0130
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <MapPin className="h-4 w-4" /> NYC Flagship Headquarters
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <BriefcaseBusiness className="h-4 w-4" /> thomasequity.com
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#ece8e4] px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:translate-y-[-1px]">
                View platform summary <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-neutral-600 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:bg-neutral-800">
                Investor portal preview
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
