import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Housing",
  description:
    "Every door. One dashboard. A property management platform built for the way East African landlords, agents, and tenants actually work.",
};

const INK = "#0F2A1F";
const CLAY = "#1B4332";
const AMBER = "#F4A716";
const SAND = "#FFF8E7";
const SAND2 = "#F0E2BC";
const DEEP = "#0A2A1B";

const PROPERTIES: { name: string; units: string; status: "paid" | "pending" | "overdue"; amt: string }[] = [
  { name: "Mikocheni Apartments", units: "12 / 12", status: "paid", amt: "TSh 4.8M" },
  { name: "Masaki Towers · Block A", units: "14 / 16", status: "paid", amt: "TSh 5.2M" },
  { name: "Sinza Family Houses", units: "6 / 6", status: "pending", amt: "TSh 1.8M" },
  { name: "Upanga Studio Suites", units: "13 / 13", status: "overdue", amt: "TSh 2.4M" },
];

const FEATURES: { t: string; b: string }[] = [
  {
    t: "Property & Unit Register",
    b: "Every property, every unit, every tenant, organised, searchable, photo-documented.",
  },
  {
    t: "Rent Collection",
    b: "Automated invoices, mobile money & card payments, receipts issued instantly. Powered by Malipopay.",
  },
  {
    t: "Lease Management",
    b: "Digital leases, signed and stored. Auto-reminders for renewals, rent reviews, and end-of-term.",
  },
  {
    t: "Tenant Portal",
    b: "Tenants log in to view balance, download receipts, and submit maintenance requests.",
  },
  {
    t: "Maintenance Workflow",
    b: "Requests routed to the right contractor, with photo upload, status tracking, and cost capture.",
  },
  {
    t: "Owner Statements",
    b: "Monthly statements per property, collected, deducted, remitted, auto-generated and e-mailed.",
  },
];

const STEPS: [string, string][] = [
  ["Tenant signs digital lease", "Generated, signed, and stored, referenced from every transaction"],
  ["Invoice issued automatically", "On the 1st, every month, to phone, email, and the tenant portal"],
  ["Tenant pays via mobile money or card", "M-Pesa, TigoPesa, Airtel Money, or Visa, receipt issued in 4 seconds"],
  ["Owner statement auto-compiled", "Collected · platform fee · maintenance · net remittance, at month-end"],
];

const GROUPS: [string, string][] = [
  [
    "Individual landlords",
    "Owners managing 1, 10 units who want clear records, on-time rent, and zero spreadsheet maintenance.",
  ],
  [
    "Property managers & agents",
    "Firms managing dozens to hundreds of units across multiple owners, with reporting and remittance built in.",
  ],
  [
    "Tenants",
    'A single portal for receipts, balances, lease renewals, and maintenance requests. No more "did you receive my rent?" calls.',
  ],
];

const TONE: Record<string, [string, string]> = {
  paid: ["#E8F5EE", "#1F6B3D"],
  pending: [SAND, DEEP],
  overdue: ["#FCE4E4", "#9A2A2A"],
};

export default function HousingPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{ background: `linear-gradient(135deg, ${AMBER} 0%, ${CLAY} 55%, ${DEEP} 100%)` }}
      >
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.16]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <defs>
            <pattern id="hg-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 0L80 0M0 0L0 80" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#hg-grid)" />
        </svg>

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow text-white/85">housing.co.tz · PropTech</div>
            <h1
              className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02]"
              style={{ fontSize: "clamp(56px, 7vw, 88px)" }}
            >
              Every door.
              <br />
              <span style={{ color: SAND }}>One dashboard.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px]">
              Manage every property. Serve every tenant. From anywhere. A property management platform built for the way East African landlords, agents, and tenants actually work.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.housing.co.tz"
                className="inline-flex items-center bg-white text-ink-950 hover:bg-ink-50 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Visit housing.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                List your property
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["12", "Properties tracked"],
                ["47", "Active units"],
                ["94%", "Occupancy rate"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-bold text-[36px] tracking-[-0.025em] leading-none">{n}</div>
                  <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[22px] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            style={{ background: "#fff", color: INK }}
          >
            <div className="flex justify-between items-baseline">
              <div>
                <div className="text-[11px] uppercase tracking-[0.08em] font-bold" style={{ color: "#7A6651" }}>
                  Portfolio · Apr 2026
                </div>
                <div className="font-bold text-[36px] tracking-[-0.025em] mt-1.5">
                  TSh 14.2M{" "}
                  <span className="text-[18px] font-medium" style={{ color: "#7A6651" }}>
                    / mo
                  </span>
                </div>
              </div>
              <span
                className="text-[11px] font-bold py-1 px-2.5 rounded-full"
                style={{ background: "#E8F5EE", color: "#1F6B3D" }}
              >
                94% occupied
              </span>
            </div>

            <div
              className="mt-5 pt-4.5"
              style={{ borderTop: `1px solid ${SAND2}` }}
            >
              {PROPERTIES.map((p) => {
                const tone = TONE[p.status];
                return (
                  <div
                    key={p.name}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-3.5 py-3"
                    style={{ borderBottom: `1px dashed ${SAND2}` }}
                  >
                    <div>
                      <div className="font-semibold text-sm">{p.name}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#7A6651" }}>
                        {p.units} units
                      </div>
                    </div>
                    <span
                      className="text-[10px] font-bold py-0.5 px-2 rounded-full uppercase tracking-[0.06em]"
                      style={{ background: tone[0], color: tone[1] }}
                    >
                      {p.status}
                    </span>
                    <span className="text-[13px] font-bold">{p.amt}</span>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-3.5 p-3.5 rounded-xl text-xs font-semibold text-center"
              style={{ background: SAND, color: DEEP }}
            >
              Auto-reconciled · Receipts issued · 14 Apr 11:42
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ background: SAND }}>
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          <div>
            <div className="eyebrow" style={{ color: CLAY }}>
              The problem
            </div>
            <h2
              className="mt-3.5 font-semibold tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", color: INK }}
            >
              A massive rental market{" "}
              <span style={{ color: "#7A6651" }}>still run on paper.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65]" style={{ color: "#3D2E1F" }}>
            <p className="m-0">
              Across Tanzania, landlords manage portfolios of 5, 50, or 500 units with paper ledgers, M-Pesa screenshots, and WhatsApp threads. Rent collection drifts. Lease renewals get missed. Maintenance requests live in a notebook on someone&apos;s desk.
            </p>
            <p className="mt-5">
              For tenants it&apos;s no better, chasing receipts, querying balances by phone, and wondering whether last month&apos;s rent was even recorded. There has never been a purpose-built system for the way East African property actually trades.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: CLAY }}>
            What&apos;s inside
          </div>
          <h2
            className="mt-3.5 font-semibold tracking-[-0.03em] leading-[1.05] max-w-[760px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", color: INK }}
          >
            Built for East African landlords,{" "}
            <span style={{ color: "#7A6651" }}>not adapted from a US template.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="p-7 rounded-2xl flex flex-col gap-2.5"
                style={{ background: SAND, border: `1px solid ${SAND2}` }}
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center text-sm font-bold font-mono"
                  style={{ background: CLAY, color: SAND }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="font-semibold text-xl tracking-[-0.015em]" style={{ color: INK }}>
                  {f.t}
                </div>
                <div className="text-sm leading-[1.55]" style={{ color: "#5A4733" }}>
                  {f.b}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 text-white" style={{ background: INK }}>
        <Container>
          <div className="eyebrow" style={{ color: AMBER }}>
            How a month flows
          </div>
          <h2
            className="mt-3.5 font-semibold tracking-[-0.03em] leading-[1.05] max-w-[820px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            From signed lease to owner statement,{" "}
            <span className="text-white/55">without anyone touching a spreadsheet.</span>
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-0">
            {STEPS.map(([t, b], i) => (
              <div
                key={t}
                className="py-8 pr-6"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.16)",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.10)" : "none",
                  paddingLeft: i === 0 ? 0 : 24,
                }}
              >
                <div
                  className="font-mono text-[11px] tracking-[0.1em] font-bold"
                  style={{ color: AMBER }}
                >
                  STEP 0{i + 1}
                </div>
                <div className="font-semibold text-xl tracking-[-0.015em] mt-3.5">{t}</div>
                <div className="text-[13px] text-white/70 leading-[1.55] mt-2.5">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: CLAY }}>
            Who it&apos;s for
          </div>
          <h2
            className="mt-3.5 font-semibold tracking-[-0.03em] leading-[1.05] max-w-[820px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", color: INK }}
          >
            Three sides of the same building.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {GROUPS.map(([t, b]) => (
              <div
                key={t}
                className="p-8 rounded-2xl"
                style={{ background: SAND, border: `1px solid ${SAND2}` }}
              >
                <div
                  className="font-semibold text-[22px] tracking-[-0.01em]"
                  style={{ color: INK }}
                >
                  {t}
                </div>
                <div className="text-sm leading-[1.55] mt-2.5" style={{ color: "#5A4733" }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, ${CLAY} 0%, ${DEEP} 100%)` }}
      >
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
        >
          <defs>
            <pattern id="hg-grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 0L60 0M0 0L0 60" stroke="#fff" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#hg-grid2)" />
        </svg>
        <Container className="relative text-center">
          <div className="eyebrow text-white/75">Start collecting better</div>
          <h2
            className="mt-3.5 mx-auto font-semibold tracking-[-0.03em] leading-[1.05] max-w-[980px]"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Less paper. Fewer phone calls.{" "}
            <span style={{ color: SAND }}>Every shilling accounted for.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.housing.co.tz"
              className="inline-flex items-center bg-white text-ink-950 hover:bg-ink-50 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Visit housing.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to sales
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
