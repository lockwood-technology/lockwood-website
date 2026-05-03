import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Malipopay",
  description:
    "One platform. Every payment. Tanzania's unified payments platform: mobile money, cards, bank transfers, POS, and EFD-ready invoicing from a single dashboard.",
};

const FEATURES: [string, string][] = [
  [
    "Mobile money collection & disbursement",
    "Collect and send across all major Tanzanian networks from a single API.",
  ],
  [
    "Card payments & hosted payment pages",
    "PCI-compliant checkout, hosted or embedded, built for conversion.",
  ],
  [
    "POS & inventory tools",
    "Point-of-sale and inventory management that keep online and offline in sync.",
  ],
  [
    "EFD-ready invoicing",
    "Compliant with Tanzania Revenue Authority requirements, issued, tracked, synced.",
  ],
  [
    "Customer & transaction tracking",
    "Every payment, every customer, every dispute, one reconcilable ledger.",
  ],
  [
    "Recurring & subscription billing",
    "Scheduled collections, retries, and smart dunning on mobile money and cards.",
  ],
];

const RAIL_GROUPS: [string, string][] = [
  ["Mobile Money", "TigoPesa · M-Pesa · Airtel Money · Halopesa · T-Pesa"],
  ["Banks", "CRDB · NMB"],
  ["Cards", "Visa · Mastercard"],
  ["Compliance", "EFD · TRA-ready · PCI-scoped"],
];

const RAIL_LOGOS: [string, string, number][] = [
  ["Tigo Pesa", "/partners/Tigo Pesa.svg", 26],
  ["M-Pesa", "/partners/MPesa.svg", 26],
  ["Airtel Money", "/partners/AirtelMoney.svg", 24],
  ["Halopesa", "/partners/Halopesa.svg", 22],
  ["T-Pesa", "/partners/T-Pesa.svg", 22],
  ["CRDB", "/partners/Crdb Bank Plc.svg", 24],
  ["NMB", "/partners/National Microfinance Bank.svg", 26],
  ["Visa", "/partners/visa.svg", 18],
  ["Mastercard", "/partners/mastercard.svg", 24],
];

const SETTLEMENT: [string, string, string][] = [
  ["TigoPesa", "TSh 1,820,000", "#FFD100"],
  ["M-Pesa", "TSh 1,240,000", "#39B54A"],
  ["CRDB", "TSh 980,000", "#1F49FF"],
  ["Visa", "TSh 460,000", "#1A1F71"],
  ["NMB", "TSh 320,000", "#F39200"],
];

export default function MalipopayPage() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-24 lg:pt-[100px] lg:pb-[120px] bg-primary-500">
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow text-white/75">malipopay.co.tz · Payments & FinTech</div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              One platform.
              <br />
              <span className="text-white/60">Every payment.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              Tanzania&apos;s unified payments platform. Mobile money, cards, bank transfers, POS, and EFD-ready invoicing, from a single dashboard, with reconciliation built in.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.malipopay.co.tz"
                className="inline-flex items-center bg-white text-primary-500 hover:bg-ink-50 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Visit malipopay.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Talk to sales
              </a>
            </div>
          </div>
          <div className="bg-white text-ink-950 rounded-[22px] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.08em] font-semibold">
              Today · Live settlement
            </div>
            <div className="flex justify-between items-baseline mt-2.5">
              <div className="font-extrabold text-[40px] tracking-[-0.025em]">TSh 4.82M</div>
              <span className="text-xs font-bold py-1 px-2.5 rounded-full bg-[#E8F8F1] text-[#0B6B4A]">
                ▲ 8.4%
              </span>
            </div>
            <div className="h-px bg-ink-200 my-5" />
            {SETTLEMENT.map(([p, v, c]) => (
              <div
                key={p}
                className="flex items-center gap-3 py-2.5 border-b border-dashed border-ink-200 last:border-b-0"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                <span className="text-sm font-semibold flex-1">{p}</span>
                <span className="font-mono text-[13px]">{v}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="eyebrow">What&apos;s inside</div>
          <h2 className="h-section mt-3.5 max-w-[820px] text-ink-950">
            One integration.{" "}
            <span className="text-ink-500">Every payment rail that matters in Tanzania.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(([t, b]) => (
              <div
                key={t}
                className="p-7 bg-white border border-ink-200 rounded-[20px]"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-lilac grid place-items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-500"
                  >
                    <path d="M20 7L9 18l-5-5" />
                  </svg>
                </div>
                <h3 className="font-bold text-[19px] tracking-[-0.015em] mt-5 mb-2 text-ink-950">
                  {t}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-ink-600 m-0">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ink-50">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow">Payment rails</div>
            <h2 className="h-section mt-3.5 text-ink-950">
              All the networks. <span className="text-primary-500">None of the plumbing.</span>
            </h2>
            <p className="text-[17px] leading-[1.6] text-ink-600 mt-5 max-w-[480px]">
              Accept mobile money, card payments, and bank transfers from a single integration. Transactions are fast, auditable, and easy to reconcile.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              {RAIL_GROUPS.map(([t, b]) => (
                <div key={t}>
                  <div className="font-mono text-[11px] text-primary-500 font-bold uppercase tracking-[0.08em]">
                    {t}
                  </div>
                  <div className="text-[15px] text-ink-950 mt-1.5 font-medium">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-ink-200 rounded-[22px] p-8">
            <div className="font-mono text-[11px] text-ink-500 uppercase tracking-[0.08em] font-semibold">
              Connected rails
            </div>
            <div className="grid grid-cols-3 gap-2.5 mt-4">
              {RAIL_LOGOS.map(([n, src, h]) => (
                <div
                  key={n}
                  title={n}
                  className="h-16 p-2.5 grid place-items-center border border-ink-200 rounded-xl bg-white"
                >
                  <Image
                    src={src}
                    alt={n}
                    width={140}
                    height={h}
                    style={{ height: h, maxWidth: "90%" }}
                    className="object-contain w-auto"
                    unoptimized
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 p-3.5 bg-surface-lilac rounded-xl text-[13px] text-primary-500 font-semibold text-center">
              One API · One dashboard · One reconciled ledger
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="text-center">
          <div className="eyebrow">Built for SMEs · Utilities · Government</div>
          <h2 className="h-section mt-3.5 max-w-[900px] mx-auto text-ink-950">
            Automation, transparency, and easy reconciliation,{" "}
            <span className="text-primary-500">for every payment you collect.</span>
          </h2>
          <div className="flex gap-3 mt-8 justify-center flex-wrap">
            <a
              href="https://www.malipopay.co.tz"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Visit malipopay.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to sales
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
