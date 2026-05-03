import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mchango",
  description:
    "Mchango is a community fundraising and harambee platform for Tanzania and East Africa. Create campaigns, share, collect via mobile money, transparently.",
};

const CORAL = "#E63946";
const CORAL_DARK = "#A8232E";
const AMBER = "#FFB703";
const CREAM = "#FFF8EE";

const FEATURES: { t: string; b: string }[] = [
  {
    t: "Create a campaign",
    b: "Title, story, photo, target amount, deadline, and category. Live in two minutes, share-ready instantly.",
  },
  {
    t: "WhatsApp share",
    b: "Optimised previews on WhatsApp, Instagram, and TikTok. Friends and family see the campaign before they tap.",
  },
  {
    t: "Mobile money contribution",
    b: "M-Pesa, Airtel Money, TigoPesa, Halopesa, and card. No registration needed for one-time gifts.",
  },
  {
    t: "Real-time progress",
    b: "Live amount-raised bar, contributor wall with names and messages, and a tally that updates as gifts come in.",
  },
  {
    t: "Auto disbursement",
    b: "Withdraw to mobile money or bank instantly when the campaign closes, or in tranches if you prefer.",
  },
  {
    t: "Group pools (upatu)",
    b: "Recurring chama and merry-go-round contributions. Schedule rounds, track who has paid, who is owed.",
  },
];

const ORG_STEPS: [string, string][] = [
  ["Create", "Story, photo, goal, deadline, category. Done in two minutes."],
  ["Share", "Send the link via WhatsApp, post on Instagram, drop in family group chats."],
  ["Collect", "Contributions land in real time. Withdraw anytime to mobile money or bank."],
];

const CONTRIB_STEPS: [string, string][] = [
  ["Find", "Tap a friend's link or search a campaign you want to support."],
  ["Give", "Mobile money prompt or card. No registration required."],
];

const CATEGORIES = [
  "Wedding",
  "Funeral",
  "Medical",
  "School fees",
  "Community project",
  "Emergency",
];

const AUDIENCES: [string, string][] = [
  [
    "Campaign organisers",
    "Individuals or groups raising funds for a wedding, funeral, medical bill, school fees, or community project.",
  ],
  [
    "Contributors",
    "Anyone who wants to give to a friend's cause or a community campaign, in seconds, with full transparency.",
  ],
  [
    "Group admins",
    "Chama leaders, church committees, and community groups managing recurring contribution pools and upatu.",
  ],
];

export default function MchangoPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{
          background: `linear-gradient(135deg, ${CORAL} 0%, #C8232E 60%, ${CORAL_DARK} 100%)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow text-white/85">mchango.co.tz · Community fundraising</div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Pamoja
              <br />
              <span style={{ color: AMBER }}>tunaweza.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              Together we can. Group fundraising and harambee for the moments that matter, with mobile money built in and full transparency on every shilling.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.mchango.co.tz"
                className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: AMBER, color: CORAL_DARK }}
              >
                Start a campaign →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Talk to us
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["TSh 2B+", "Raised to date"],
                ["8K+", "Campaigns"],
                ["100K+", "Contributors"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[36px] tracking-[-0.025em] leading-none" style={{ color: AMBER }}>
                    {n}
                  </div>
                  <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign card */}
          <div
            className="rounded-[22px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] hidden lg:block max-w-[360px] mx-auto"
            style={{ background: "#fff", color: "#1A0E0E" }}
          >
            <div
              className="h-32 grid place-items-center text-white"
              style={{ background: `linear-gradient(135deg, ${CORAL}, ${AMBER})` }}
            >
              <div className="text-3xl">💝</div>
            </div>
            <div className="p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold" style={{ color: CORAL_DARK }}>
                Medical · Active
              </div>
              <div className="font-bold text-lg mt-1 leading-snug">
                Help baby Aisha&apos;s heart surgery
              </div>
              <div className="text-[11px] mt-1" style={{ color: "#7A4A4A" }}>
                Started by Mama Aisha · Dar es Salaam
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-[12px] mb-2">
                  <span className="font-bold">TSh 8.4M</span>
                  <span style={{ color: "#7A4A4A" }}>of TSh 12M</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: "#FCE4E4" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: "70%", background: `linear-gradient(90deg, ${CORAL}, ${AMBER})` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] mt-1.5" style={{ color: "#7A4A4A" }}>
                  <span>70% funded</span>
                  <span>247 contributors</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-ink-100">
                <div className="text-[10px] uppercase tracking-[0.08em] font-bold mb-2" style={{ color: "#7A4A4A" }}>
                  Recent contributors
                </div>
                {[
                  ["Asha N.", "TSh 50,000", "🙏 Pole sana"],
                  ["Frank M.", "TSh 100,000", "Get well soon"],
                  ["Joyce K.", "TSh 25,000", "Strength to the family"],
                ].map(([name, amt, msg]) => (
                  <div key={name} className="flex justify-between items-baseline py-1.5 text-[11px]">
                    <div>
                      <span className="font-bold">{name}</span>
                      <span className="ml-2 italic" style={{ color: "#7A4A4A" }}>
                        {msg}
                      </span>
                    </div>
                    <span className="font-mono font-bold" style={{ color: CORAL }}>
                      {amt}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full mt-4 py-3 rounded-xl font-bold text-white text-[14px]"
                style={{ background: CORAL }}
              >
                Contribute →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <div className="eyebrow" style={{ color: CORAL_DARK }}>
              Campaign categories
            </div>
            <h2 className="h-section mt-3.5 max-w-[820px] mx-auto font-light tracking-[-0.03em] text-ink-950">
              Every cause that matters. <span className="text-ink-500">Every shilling tracked.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {CATEGORIES.map((c) => (
              <div
                key={c}
                className="p-5 rounded-2xl border border-ink-200 bg-white text-center hover:border-ink-400 transition-colors"
              >
                <div className="font-bold text-sm text-ink-950">{c}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24" style={{ background: CREAM }}>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="eyebrow" style={{ color: CORAL_DARK }}>
              For organisers
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Three steps. Money in your account.
            </h2>
            <div className="mt-8 space-y-3">
              {ORG_STEPS.map(([t, b], i) => (
                <div
                  key={t}
                  className="p-5 rounded-2xl bg-white border border-ink-200"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-white text-sm font-bold font-mono shrink-0"
                      style={{ background: CORAL }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-base text-ink-950">{t}</div>
                      <div className="text-sm text-ink-600 mt-0.5 font-light">{b}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow" style={{ color: CORAL_DARK }}>
              For contributors
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Two taps. Gift sent.
            </h2>
            <div className="mt-8 space-y-3">
              {CONTRIB_STEPS.map(([t, b], i) => (
                <div
                  key={t}
                  className="p-5 rounded-2xl bg-white border border-ink-200"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full grid place-items-center text-ink-950 text-sm font-bold font-mono shrink-0"
                      style={{ background: AMBER }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
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
          <div className="eyebrow" style={{ color: CORAL_DARK }}>
            Why Mchango
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Trust, speed, transparency. <span className="text-ink-500">From the first shilling to the last.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="p-6 rounded-2xl bg-white border border-ink-200 flex flex-col gap-2.5"
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center text-white text-sm font-bold font-mono"
                  style={{ background: CORAL }}
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

      {/* Audiences */}
      <section className="py-20 sm:py-24" style={{ background: CREAM }}>
        <Container>
          <div className="eyebrow" style={{ color: CORAL_DARK }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Three audiences. <span className="text-ink-500">One transparent ledger.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {AUDIENCES.map(([t, b]) => (
              <div
                key={t}
                className="p-8 bg-white border border-ink-200 rounded-2xl"
              >
                <div className="font-bold text-[22px] tracking-[-0.01em] text-ink-950">{t}</div>
                <div className="text-sm text-ink-600 leading-[1.55] mt-2.5 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${CORAL} 0%, ${AMBER} 100%)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen" />
        <Container className="relative text-center">
          <div className="eyebrow text-white/85">Start a campaign</div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto text-white font-light tracking-[-0.03em]">
            Pamoja tunaweza. <span className="text-white/80">Together we lift the moment.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.mchango.co.tz"
              className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ background: "#fff", color: CORAL_DARK }}
            >
              Start a campaign →
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
