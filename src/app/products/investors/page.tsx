import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Track. Analyse. Grow. Investors.co.tz is your wealth-building companion, a private, considered space to track every position across the Dar es Salaam Stock Exchange and beyond.",
};

const DEEP = "#0D1B2A";
const FOREST = "#1B3A55";
const BRASS = "#7CB518";
const BRASS2 = "#5A8A0F";
const IVORY = "#F4F1EA";
const IVORY2 = "#EAE4D2";
const INK = "#0A1422";

const HOLDINGS: [string, string, string, string][] = [
  ["CRDB", "CRDB Bank", "5,420", "+29.7%"],
  ["NMB", "NMB Bank", "8,900", "+18.2%"],
  ["TBL", "Tanzania Brew.", "13,800", "+8.4%"],
  ["VODA", "Vodacom TZ", "700", "−2.1%"],
];

const FEATURES: [string, string][] = [
  ["Portfolio Tracking", "Every holding, every transaction, every cost basis, across DSE, fixed income, mutual funds, and cash."],
  ["Live & Historical Pricing", "Real-time DSE quotes, multi-year price history, and dividend records, all at your fingertips."],
  ["Performance Analytics", "IRR, time-weighted returns, sector exposure, concentration risk, measured properly, explained clearly."],
  ["Watchlists & Alerts", "Curate the tickers you follow. Get alerts on price moves, earnings releases, and corporate actions."],
  ["Tax & Cost Basis", "Lots tracked, gains computed, capital gains reports exported, ready for your accountant."],
  ["Editorial Research", "Considered, locally written notes on every listed company. Long-form, where it matters."],
];

const GROUPS: [string, string][] = [
  [
    "Retail Investors",
    "Anyone holding a TSCD account on the Dar es Salaam Stock Exchange who wants clarity, calm, and proper records.",
  ],
  [
    "Diaspora Investors",
    "East Africans abroad investing back home, who need real-time visibility from London, Dubai, or Toronto.",
  ],
  [
    "Institutions",
    "Fund managers, pension trustees, and family offices needing reporting-grade portfolio infrastructure for African markets.",
  ],
];

export default function InvestorsPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-20 sm:py-[120px] sm:pb-[130px]"
        style={{
          background: `linear-gradient(135deg, ${FOREST} 0%, ${DEEP} 100%)`,
          color: IVORY,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(201,162,79,0.5), transparent 50%), radial-gradient(circle at 75% 80%, rgba(74,150,132,0.6), transparent 50%)",
          }}
        />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
              style={{ color: BRASS }}
            >
              investors.co.tz · WealthTech
            </div>
            <h1
              className="mt-6 tracking-[-0.025em] leading-[0.98]"
              style={{ fontSize: "clamp(60px, 8vw, 104px)" }}
            >
              Track. Analyse.
              <br />
              <em className="not-italic" style={{ fontStyle: "italic", color: BRASS }}>
                Grow.
              </em>
            </h1>
            <p
              className="mt-8 max-w-[540px]"
              style={{ fontSize: 19, lineHeight: 1.65, color: "rgba(244,241,234,0.82)" }}
            >
              Investors.co.tz is your wealth-building companion, a private, considered space to track every position across the Dar es Salaam Stock Exchange and beyond. Built for the long horizon, by people who watch the same tickers.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.investors.co.tz"
                className="inline-flex items-center font-semibold text-base px-7 py-4 rounded transition-all hover:opacity-90"
                style={{ background: BRASS, color: DEEP }}
              >
                Visit investors.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent border font-semibold text-base px-7 py-4 rounded transition-all hover:bg-white/10"
                style={{ color: IVORY, borderColor: "rgba(255,255,255,0.35)" }}
              >
                Open an account
              </a>
            </div>
          </div>

          <div
            className="rounded p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden"
            style={{ background: IVORY, color: INK, border: `1px solid ${IVORY2}` }}
          >
            <div
              className="flex justify-between items-baseline pb-4"
              style={{ borderBottom: `1px solid ${IVORY2}` }}
            >
              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold"
                  style={{ color: "#5C6B62" }}
                >
                  Portfolio Statement
                </div>
                <div className="text-[13px] mt-1 italic" style={{ color: "#5C6B62" }}>
                  As at 28 April 2026
                </div>
              </div>
              <div
                className="font-mono text-[10px] tracking-[0.1em]"
                style={{ color: "#5C6B62" }}
              >
                FOLIO 04127
              </div>
            </div>

            <div className="mt-5">
              <div
                className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold"
                style={{ color: FOREST }}
              >
                Net Asset Value
              </div>
              <div
                className="font-normal text-[56px] tracking-[-0.02em] leading-none mt-1.5"
                style={{ color: DEEP }}
              >
                TSh 48,720,400
              </div>
              <div className="flex items-baseline gap-3 mt-2">
                <span
                  className="text-lg italic"
                  style={{ color: FOREST, fontFeatureSettings: "'tnum' 1" }}
                >
                  +12.4%
                </span>
                <span
                  className="font-mono text-[11px]"
                  style={{ color: "#5C6B62" }}
                >
                  YTD · vs DSEI +5.8%
                </span>
              </div>
            </div>

            <div
              className="mt-5 pt-4.5"
              style={{ borderTop: `1px solid ${IVORY2}` }}
            >
              <div
                className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold mb-2.5"
                style={{ color: "#5C6B62" }}
              >
                Top holdings
              </div>
              {HOLDINGS.map(([t, n, p, ch]) => {
                const up = !ch.startsWith("−");
                return (
                  <div
                    key={t}
                    className="grid grid-cols-[60px_1fr_80px_70px] gap-3 py-2.5 items-baseline"
                    style={{ borderBottom: `1px dashed ${IVORY2}` }}
                  >
                    <span className="font-mono text-xs font-bold" style={{ color: DEEP }}>
                      {t}
                    </span>
                    <span className="text-sm" style={{ color: INK }}>
                      {n}
                    </span>
                    <span className="text-[13px] text-right" style={{ fontFeatureSettings: "'tnum' 1" }}>
                      {p}
                    </span>
                    <span
                      className="text-[13px] italic text-right"
                      style={{ color: up ? FOREST : "#9A2A2A", fontFeatureSettings: "'tnum' 1" }}
                    >
                      {ch}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ background: IVORY }}>
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
              style={{ color: BRASS2 }}
            >
              The problem
            </div>
            <h2
              className="mt-3.5 tracking-[-0.025em] leading-[1.02]"
              style={{ fontSize: "clamp(40px, 4.5vw, 64px)", color: DEEP }}
            >
              Investing here still{" "}
              <em className="italic" style={{ color: FOREST }}>
                feels like the 1980s.
              </em>
            </h2>
          </div>
          <div className="text-lg leading-[1.7]" style={{ color: "#28332D" }}>
            <p className="m-0">
              Tanzania&apos;s capital market is real and growing, yet the everyday experience of being an investor is fragmented across broker WhatsApp groups, paper statements, and end-of-month PDF emails. There is no calm, structured place to see your full position, your real performance, and the news that moves it.
            </p>
            <p className="mt-5">
              Investors.co.tz is built for the long-horizon investor, local, diaspora, or institutional, who deserves the same clarity and considered tooling that global wealth platforms have offered for decades.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
            <div>
              <div
                className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
                style={{ color: BRASS2 }}
              >
                What&apos;s included
              </div>
              <h2
                className="mt-3.5 max-w-[760px] tracking-[-0.025em] leading-[1.04]"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", color: DEEP }}
              >
                Everything a serious investor needs.{" "}
                <em className="italic" style={{ color: FOREST }}>
                  Nothing they don&apos;t.
                </em>
              </h2>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
            style={{ borderTop: `1px solid ${IVORY2}` }}
          >
            {FEATURES.map(([t, b], i) => (
              <div
                key={t}
                className="grid grid-cols-[70px_1fr] gap-6 py-9 pr-8"
                style={{
                  borderBottom: `1px solid ${IVORY2}`,
                  borderRight:
                    i % 2 === 0 ? `1px solid ${IVORY2}` : "none",
                  paddingLeft: i % 2 === 0 ? 0 : 32,
                }}
              >
                <div
                  className="text-[32px] italic leading-none pt-1"
                  style={{ color: BRASS2, fontFeatureSettings: "'tnum' 1" }}
                >
                  0{i + 1}
                </div>
                <div>
                  <div
                    className="font-medium text-2xl tracking-[-0.015em]"
                    style={{ color: DEEP }}
                  >
                    {t}
                  </div>
                  <div
                    className="text-[15px] leading-[1.65] mt-2.5 max-w-[460px]"
                    style={{ color: "#3A4A42" }}
                  >
                    {b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ background: IVORY }}>
        <Container className="max-w-[880px] text-center relative">
          <div
            className="text-[96px] leading-none italic"
            style={{ color: BRASS, opacity: 0.6 }}
          >
            &ldquo;
          </div>
          <p
            className="italic mt-[-20px] tracking-[-0.015em] leading-[1.25]"
            style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              color: DEEP,
            }}
          >
            The market doesn&apos;t reward speed.
            <br />
            <span style={{ color: FOREST }}>
              It rewards patience, observation, and well-kept records.
            </span>
          </p>
          <div
            className="font-mono text-[11px] tracking-[0.16em] font-semibold uppercase mt-9"
            style={{ color: BRASS2 }}
          >
            — A house view
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div
            className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
            style={{ color: BRASS2 }}
          >
            Who it&apos;s for
          </div>
          <h2
            className="mt-3.5 max-w-[820px] tracking-[-0.025em] leading-[1.05]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", color: DEEP }}
          >
            For the patient,{" "}
            <em className="italic" style={{ color: FOREST }}>
              the curious,
            </em>{" "}
            and the institutional.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {GROUPS.map(([t, b]) => (
              <div
                key={t}
                className="p-8 rounded"
                style={{ background: IVORY, border: `1px solid ${IVORY2}` }}
              >
                <div className="font-medium text-[22px] tracking-[-0.01em]" style={{ color: DEEP }}>
                  {t}
                </div>
                <div className="text-sm leading-[1.6] mt-2.5" style={{ color: "#3A4A42" }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-20 sm:py-[140px] relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${DEEP} 0%, ${INK} 100%)`,
          color: IVORY,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(201,162,79,0.6), transparent 60%)",
          }}
        />
        <Container className="relative text-center">
          <div
            className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
            style={{ color: BRASS }}
          >
            Begin
          </div>
          <h2
            className="mt-3.5 mx-auto tracking-[-0.025em] leading-[1.02] max-w-[980px] text-white"
            style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}
          >
            Your portfolio,{" "}
            <em className="italic" style={{ color: BRASS }}>
              at last in one place.
            </em>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.investors.co.tz"
              className="inline-flex items-center font-semibold text-base px-7 py-4 rounded transition-all hover:opacity-90"
              style={{ background: BRASS, color: DEEP }}
            >
              Visit investors.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent border font-semibold text-base px-7 py-4 rounded transition-all hover:bg-white/10"
              style={{ color: IVORY, borderColor: "rgba(255,255,255,0.35)" }}
            >
              Open an account
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
