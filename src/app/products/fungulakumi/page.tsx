import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FungulaKumi",
  description:
    "FungulaKumi is digital sadaka, tithe, and congregation management for East African churches. Toa kwa moyo, give with heart.",
};

const PURPLE = "#4A1C6F";
const PURPLE_DARK = "#2E0F4D";
const GOLD = "#FFD700";
const IVORY = "#FBF8F3";

const FEATURES: { t: string; b: string }[] = [
  {
    t: "Digital Sadaka",
    b: "Members give to the offering plate from any pew, any wallet. M-Pesa, Airtel Money, TigoPesa, in seconds.",
  },
  {
    t: "Tithe Tracking",
    b: "Recurring tithe set up once, runs every payday. Members see their giving history, treasurers see it all.",
  },
  {
    t: "Pledge Campaigns",
    b: "Building fund, missions, anniversary drives. Track pledges, fulfilment, and gentle reminders to honour them.",
  },
  {
    t: "Member Directory",
    b: "Every member, every household, with attendance and pastoral notes. The treasurer's directory, finally digital.",
  },
  {
    t: "Giving Statements",
    b: "Annual giving statements per member, automatic. Monthly, weekly, and yearly summaries for treasurers.",
  },
  {
    t: "Multi-branch Support",
    b: "Denominations and church networks. Central oversight, branch-level admin, consolidated financial reporting.",
  },
];

const MEMBER_STEPS: [string, string][] = [
  ["Download", "Download FungulaKumi from the app store. Sign up with your phone number."],
  ["Link phone", "Connect your church with the church code. Give to your home church from anywhere."],
  ["Give anywhere", "Sadaka, tithe, or special offering, from your pew or from London."],
];

const CHURCH_STEPS: [string, string][] = [
  ["Register", "Add your church, denomination, location, and leadership. Upload verification docs."],
  ["Configure", "Set giving categories, branches, leadership roles, and treasurer access."],
  ["Go live", "Give your members the church code. Watch giving land in your account, in real time."],
];

const AUDIENCES: [string, string][] = [
  [
    "Members",
    "Anyone who gives, members at home, members abroad, and visitors who want to support a Sunday service.",
  ],
  [
    "Pastors & church leaders",
    "Oversight on giving, member care, attendance, and pastoral records, all in one app.",
  ],
  [
    "Treasurers",
    "Daily reconciliation, monthly summaries, annual giving statements, audit-grade trail. End the cash-handling stress.",
  ],
  [
    "Multi-branch networks",
    "Denominations and church networks running 5, 50, or 500 branches with one consolidated platform.",
  ],
];

export default function FungulaKumiPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{
          background: `linear-gradient(135deg, ${PURPLE} 0%, #3A165A 60%, ${PURPLE_DARK} 100%)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <svg
          className="absolute opacity-[0.08]"
          style={{ top: -40, right: -40, width: 320, height: 320 }}
          viewBox="0 0 100 100"
          aria-hidden
        >
          <path
            d="M50 10 L50 90 M30 30 L70 30"
            stroke="#fff"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow" style={{ color: GOLD }}>
              fungulakumi.co.tz · Faith tech
            </div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Toa kwa moyo,
              <br />
              <span style={{ color: GOLD }}>give with heart.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              Digital sadaka, tithe, pledges, and congregation management for East African churches. Built reverently, accountably, and with the treasurer's trust in mind.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.fungulakumi.co.tz"
                className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: GOLD, color: PURPLE_DARK }}
              >
                Register your church →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Give now
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["300+", "Churches"],
                ["25K+", "Members"],
                ["TSh 500M+", "Tracked"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[36px] tracking-[-0.025em] leading-none" style={{ color: GOLD }}>
                    {n}
                  </div>
                  <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Giving statement card */}
          <div
            className="rounded-[22px] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.4)] hidden lg:block max-w-[380px] mx-auto"
            style={{ background: IVORY, color: PURPLE_DARK }}
          >
            <div className="flex justify-between items-baseline pb-4 border-b" style={{ borderColor: "#E8DAC0" }}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold" style={{ color: "#7A6651" }}>
                  Giving statement
                </div>
                <div className="text-[12px] mt-1" style={{ color: "#7A6651" }}>
                  Pamoja Pentecostal · Apr 2026
                </div>
              </div>
              <div
                className="text-[10px] font-bold py-1 px-2 rounded-full"
                style={{ background: PURPLE, color: GOLD }}
              >
                Member
              </div>
            </div>

            <div className="mt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] font-bold" style={{ color: "#7A6651" }}>
                Total this month
              </div>
              <div className="font-bold text-[40px] tracking-[-0.025em] mt-1" style={{ color: PURPLE }}>
                TSh 240,000
              </div>
            </div>

            <div className="mt-5 pt-4 border-t space-y-2.5" style={{ borderColor: "#E8DAC0" }}>
              {[
                ["Sadaka · Sunday service", "TSh 50,000", "07 Apr"],
                ["Zaka · monthly tithe", "TSh 150,000", "01 Apr"],
                ["Building fund pledge", "TSh 40,000", "01 Apr"],
              ].map(([cat, amt, date]) => (
                <div key={cat} className="flex justify-between items-baseline text-[13px]">
                  <div>
                    <div className="font-bold">{cat}</div>
                    <div className="text-[10px] mt-0.5" style={{ color: "#7A6651" }}>
                      {date}
                    </div>
                  </div>
                  <span className="font-mono font-bold" style={{ color: PURPLE }}>
                    {amt}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-5 p-3 rounded-xl text-[11px] font-semibold text-center"
              style={{ background: PURPLE, color: GOLD }}
            >
              ✓ Annual statement ready in December
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <div className="eyebrow" style={{ color: PURPLE }}>
              The problem
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Millions of shillings.{" "}
              <span className="text-ink-500">In offering bowls. With no record.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600 font-light">
            <p className="m-0">
              Most East African churches still run their finances on paper, in cash, or in someone&apos;s memory. Sadaka counted twice. Tithe records lost. Pledges forgotten. Members can&apos;t prove they gave. Treasurers can&apos;t prove they received.
            </p>
            <p className="mt-5">
              FungulaKumi is the digital infrastructure that East African churches deserve, reverent, accountable, and easy enough that the treasurer&apos;s grandmother can use it.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works (split) */}
      <section className="py-20 sm:py-24" style={{ background: IVORY }}>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow" style={{ color: PURPLE }}>
              For members
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Three steps. Give from any pew.
            </h2>
            <div className="mt-8 space-y-3">
              {MEMBER_STEPS.map(([t, b], i) => (
                <div key={t} className="p-5 rounded-2xl bg-white border border-ink-200">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-white text-sm font-bold font-mono shrink-0"
                      style={{ background: PURPLE }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-base text-ink-950">{t}</div>
                      <div className="text-sm text-ink-600 mt-0.5 font-light">{b}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: PURPLE }}>
              For churches
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Three steps. Books in order.
            </h2>
            <div className="mt-8 space-y-3">
              {CHURCH_STEPS.map(([t, b], i) => (
                <div key={t} className="p-5 rounded-2xl bg-white border border-ink-200">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-ink-950 text-sm font-bold font-mono shrink-0"
                      style={{ background: GOLD }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-base text-ink-950">{t}</div>
                      <div className="text-sm text-ink-600 mt-0.5 font-light">{b}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: PURPLE }}>
            Key features
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Six tools. <span className="text-ink-500">Built for the way East African churches actually run.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="p-6 rounded-2xl bg-white border border-ink-200 flex flex-col gap-2.5"
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center text-white text-sm font-bold font-mono"
                  style={{ background: PURPLE }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="font-bold text-lg tracking-[-0.015em] text-ink-950">{f.t}</div>
                <div className="text-sm leading-[1.55] text-ink-600 font-light">{f.b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust pillars */}
      <section className="py-20 sm:py-24" style={{ background: PURPLE_DARK, color: "#fff" }}>
        <Container>
          <div className="eyebrow" style={{ color: GOLD }}>
            Trust & transparency
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em]">
            Every shilling tracked. <span className="text-white/55">Every giver receipted.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              ["Every shilling tracked", "Every contribution logged with timestamp, member, category, and amount. No gaps, no surprises."],
              ["Receipts to every giver", "SMS receipt within seconds of giving. Annual giving statement at the end of the year."],
              ["Full treasurer reports", "Daily, weekly, monthly, annual. Reconcile in seconds. Audit-ready by default."],
            ].map(([t, b]) => (
              <div
                key={t}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="font-bold text-lg tracking-[-0.015em]" style={{ color: GOLD }}>
                  {t}
                </div>
                <div className="text-sm leading-[1.55] mt-2 text-white/75 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Audiences */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: PURPLE }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            From small parish to multi-branch denomination.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUDIENCES.map(([t, b]) => (
              <div
                key={t}
                className="p-7 rounded-2xl"
                style={{ background: IVORY, border: "1px solid #E8DAC0" }}
              >
                <div className="font-bold text-xl tracking-[-0.01em] text-ink-950">{t}</div>
                <div className="text-sm text-ink-600 leading-[1.55] mt-2.5 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-20 sm:py-[140px] relative overflow-hidden"
        style={{ background: GOLD, color: PURPLE_DARK }}
      >
        <Container className="relative text-center">
          <div
            className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
            style={{ color: PURPLE_DARK }}
          >
            Register your church
          </div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto font-light tracking-[-0.03em]" style={{ color: PURPLE_DARK }}>
            Toa kwa moyo. <span style={{ color: PURPLE }}>The treasurer can sleep tonight.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.fungulakumi.co.tz"
              className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90 text-white"
              style={{ background: PURPLE }}
            >
              Register your church →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent border font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:bg-white/40"
              style={{ color: PURPLE_DARK, borderColor: PURPLE }}
            >
              Talk to us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
