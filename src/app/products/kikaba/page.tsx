import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Kikaba",
  description:
    "Group savings, in the open. Modern digital chama for groups that save together. Contributions, loans, and clear records, fully transparent.",
};

const ORANGE = "#F0762E";
const ORANGE_DARK = "#B84A0E";
const CREAM = "#FFF6EC";
const CREAM_2 = "#FBE5CE";
const INK = "#1B1409";

const FEATURES: [string, string][] = [
  ["Member register", "Every member, contact details, role, and balance, in one organised place."],
  ["Contributions", "Schedule weekly or monthly contributions. Track who has paid, who is late, and who is owed back."],
  ["Loans & repayments", "Member loan applications, group approvals, repayment schedules, interest tracked automatically."],
  ["Mobile money in/out", "Pay contributions and receive disbursements via TigoPesa, M-Pesa, Airtel Money, Halopesa, and bank transfer, powered by Malipopay."],
  ["Open ledger", "Every transaction visible to every member. No more `did you receive my contribution?` arguments."],
  ["Group meetings", "Minutes, votes, and decisions captured against the group record, accessible from any phone."],
];

const GROUPS: [string, string][] = [
  ["VICOBAs", "Village community banks running rotating savings and credit, fully digital, fully transparent."],
  ["Workplace chamas", "Office groups saving together, getting structure without the spreadsheet maintenance."],
  ["SACCOs", "Larger savings and credit cooperatives needing reporting-grade member and loan management."],
  ["Family savings circles", "Families pooling money for school fees, weddings, or land, in a place every member can trust."],
];

export default function KikabaPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, ${ORANGE_DARK} 100%)` }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow text-white/85">kikaba.app · VICOBA / SACCOS</div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Group savings,
              <br />
              <span style={{ color: CREAM }}>in the open.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              Kikaba is a modern digital chama for groups that save together. Contributions, loans, meetings, and member records, all in one transparent ledger every member can trust.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.kikaba.app"
                className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ color: ORANGE_DARK }}
              >
                Visit kikaba.app →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Start a group
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["100%", "Open ledger"],
                ["TZS", "Local currency"],
                ["7", "Mobile money + bank rails"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[36px] tracking-[-0.025em] leading-none">{n}</div>
                  <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[22px] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            style={{ background: CREAM, color: INK }}
          >
            <div className="flex justify-between items-baseline">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold" style={{ color: ORANGE_DARK }}>
                  Mama Lishe Chama · Apr cycle
                </div>
                <div className="font-extrabold text-[36px] tracking-[-0.025em] mt-1.5">
                  TSh 4,820,000
                </div>
                <div className="text-xs mt-1" style={{ color: "#7A5536" }}>
                  pooled this month · 24 of 28 paid
                </div>
              </div>
              <span className="text-[11px] font-bold py-1 px-2.5 rounded-full" style={{ background: "#E8F5EE", color: "#1F6B3D" }}>
                86% paid
              </span>
            </div>

            <div
              className="mt-5 pt-4.5"
              style={{ borderTop: `1px solid ${CREAM_2}` }}
            >
              {[
                ["Asha N.", "Paid · 14 Apr", "TSh 200,000", "ok"],
                ["Frank M.", "Paid · 13 Apr", "TSh 200,000", "ok"],
                ["Joyce K.", "Pending", "TSh 200,000", "pending"],
                ["Hassan B.", "Loan · repayment 3/6", "TSh 80,000", "loan"],
                ["Neema P.", "Paid · 11 Apr", "TSh 200,000", "ok"],
              ].map(([name, status, amt, kind]) => {
                const tone =
                  kind === "ok"
                    ? ["#E8F5EE", "#1F6B3D"]
                    : kind === "pending"
                      ? [CREAM_2, ORANGE_DARK]
                      : ["#FFF0E0", ORANGE_DARK];
                return (
                  <div
                    key={name}
                    className="grid grid-cols-[1fr_auto] items-center gap-3.5 py-3"
                    style={{ borderBottom: `1px dashed ${CREAM_2}` }}
                  >
                    <div>
                      <div className="font-semibold text-sm">{name}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: "#7A5536" }}>
                        {status}
                      </div>
                    </div>
                    <span
                      className="text-[12px] font-bold py-0.5 px-2 rounded"
                      style={{ background: tone[0], color: tone[1] }}
                    >
                      {amt}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-3.5 p-3.5 rounded-xl text-xs font-semibold text-center"
              style={{ background: ORANGE, color: "#fff" }}
            >
              Open ledger · viewable by all 28 members
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          <div>
            <div className="eyebrow" style={{ color: ORANGE_DARK }}>
              The problem
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Trust is the bottleneck. <span className="text-ink-500">Not the saving.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600 font-light">
            <p className="m-0">
              Across Tanzania and East Africa, millions of people save together in chamas, VICOBAs, and SACCOs. Notebooks track contributions. WhatsApp groups confirm payments. The treasurer&apos;s memory is the source of truth, and groups break apart when the records and the trust diverge.
            </p>
            <p className="mt-5">
              Kikaba puts every contribution, loan, and disbursement in one place every member can see, on their phone, in their language. The treasurer keeps the books. The group keeps the trust.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ background: CREAM }}>
        <Container>
          <div className="eyebrow" style={{ color: ORANGE_DARK }}>
            What&apos;s inside
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Built for the way chamas actually run.{" "}
            <span className="text-ink-500">Not a watered-down banking app.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(([t, b], i) => (
              <div
                key={t}
                className="p-7 rounded-2xl bg-white flex flex-col gap-2.5"
                style={{ border: `1px solid ${CREAM_2}` }}
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center text-white text-sm font-bold font-mono"
                  style={{ background: ORANGE }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="font-bold text-xl tracking-[-0.015em]" style={{ color: INK }}>
                  {t}
                </div>
                <div className="text-sm leading-[1.55]" style={{ color: "#5A4733" }}>
                  {b}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: ORANGE_DARK }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Every group that saves together.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GROUPS.map(([t, b]) => (
              <div
                key={t}
                className="p-7 rounded-2xl"
                style={{ background: CREAM, border: `1px solid ${CREAM_2}` }}
              >
                <div className="font-bold text-xl tracking-[-0.01em]" style={{ color: INK }}>
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
        style={{ background: `linear-gradient(135deg, ${ORANGE} 0%, ${ORANGE_DARK} 100%)` }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen" />
        <Container className="relative text-center">
          <div className="eyebrow text-white/75">Start a group</div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto text-white font-light tracking-[-0.03em]">
            One ledger, every member sees.{" "}
            <span style={{ color: CREAM }}>That&apos;s how trust scales.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.kikaba.app"
              className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ color: ORANGE_DARK }}
            >
              Visit kikaba.app →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
