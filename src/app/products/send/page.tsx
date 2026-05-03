import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Send",
  description:
    "Messages that land, systems that scale. SMS, WhatsApp, and email from a single API — transactional alerts, OTPs, marketing broadcasts, and two-way conversations on one delivery pipeline.",
};

// Send design system — Signal Teal
const SEND_500 = "#0EA789"; // primary
const SEND_600 = "#00876F"; // gradient stop / hover
const SEND_700 = "#00604F";
const SEND_800 = "#00403A";
const SEND_900 = "#04241F"; // ink
const SEND_300 = "#5FD4BC"; // accent
const SEND_100 = "#CCF3EA";
const SEND_50 = "#EAFBF7";
const SEND_BORDER = "#D8E7E2";
const INK_2 = "#27463E";
const INK_3 = "#5C766F";

// Signal accents — strictly reserved for delivery state
const SIGNAL_LIME = "#7FD48A"; // ok
const SIGNAL_LEMON = "#FFD447"; // warn
const SIGNAL_PEACH = "#FF9E6D"; // alert

const PRINCIPLES: { n: string; t: string; b: string }[] = [
  {
    n: "01",
    t: "Deliverability first",
    b: "Every component surfaces status. Never hide a failed send behind a success screen.",
  },
  {
    n: "02",
    t: "Dense, not cramped",
    b: "8px base, 12px row gutter. Tabular numbers everywhere throughput is shown.",
  },
  {
    n: "03",
    t: "Quiet motion",
    b: "Signals pulse; content doesn't. Reserve motion for live state — sending, delivered, failed.",
  },
  {
    n: "04",
    t: "Receipt-grade copy",
    b: "Plain verbs. Specific numbers. Never “optimised”, always “sent to 2,482”.",
  },
];

const CHANNELS: { name: string; tag: string; desc: string }[] = [
  {
    name: "SMS",
    tag: "Reach anyone, instantly",
    desc: "Direct routes to every Tanzanian and East African MNO. OTPs, transactional alerts, payment confirmations, and emergency broadcasts. Sender ID supported, fast throughput.",
  },
  {
    name: "WhatsApp",
    tag: "Conversations that convert",
    desc: "Send template messages and conversation flows on WhatsApp Cloud API. Approved templates, two-way replies, media support, on the channel your customers already use.",
  },
  {
    name: "Email",
    tag: "Transactional & marketing",
    desc: "Receipts, password resets, account alerts, newsletters, lifecycle campaigns. Custom domains, DKIM/SPF, per-message analytics.",
  },
];

const FEATURES: { t: string; b: string }[] = [
  {
    t: "One API, every channel",
    b: "A single REST API to send across SMS, WhatsApp, and email. Same payload, smart channel routing, automatic fallback when a channel fails.",
  },
  {
    t: "Templates & campaigns",
    b: "Reusable templates with variables, scheduled broadcasts, contact lists, segments, and A/B tests. Built for marketing and ops in equal measure.",
  },
  {
    t: "Delivery analytics",
    b: "Real-time delivery, open, and click reports per channel. p50 API latency under 200ms. Webhooks deliver status updates straight into your stack.",
  },
  {
    t: "Compliant by default",
    b: "Sender ID approval, opt-out keywords, DPA-grade logging, GDPR-aligned data residency. Built for regulated senders and serious volume.",
  },
  {
    t: "Two-way conversations",
    b: "WhatsApp inbox with team assignment, canned replies, and webhook routing. Hand off to your support tool or chatbot, or reply right inside the dashboard.",
  },
  {
    t: "SDKs & docs",
    b: "Node, Python, PHP, Go SDKs. OpenAPI spec, postman collection, and runnable examples. Get to your first send in under five minutes.",
  },
];

const AUDIENCES: [string, string][] = [
  [
    "Product & engineering",
    "Drop-in REST API and SDKs for SMS OTPs, transactional alerts, and webhooks. Stop juggling three different gateways.",
  ],
  [
    "Marketing & growth",
    "Run multi-channel campaigns from one dashboard. Build lists, test templates, measure delivery and clicks.",
  ],
  [
    "Operations & support",
    "Reach customers where they are. Send order updates over WhatsApp, escalate to email, fall back to SMS.",
  ],
];

export default function SendPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{
          background: `linear-gradient(180deg, ${SEND_900} 0%, ${SEND_800} 100%)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(41,190,161,0.20), transparent 40%), radial-gradient(circle at 80% 70%, rgba(14,167,137,0.15), transparent 50%)`,
          }}
        />

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase"
              style={{ color: SEND_300, letterSpacing: "0.18em" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#29BEA1",
                  boxShadow: "0 0 0 4px rgba(41,190,161,0.2)",
                }}
              />
              send.co.tz · Messaging platform
            </div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.035em]">
              Messages that <span className="font-bold" style={{ color: SEND_300 }}>land</span>,<br />
              systems that <span className="font-bold" style={{ color: SEND_300 }}>scale</span>.
            </h1>
            <p className="text-xl leading-[1.55] text-white/75 mt-7 max-w-[560px] font-light">
              SMS, WhatsApp, and email from a single API. Transactional messages, marketing broadcasts, and two-way conversations, on one delivery pipeline that reports back in under 200ms.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.send.co.tz"
                className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ color: SEND_700 }}
              >
                Start a campaign →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-white/[0.05] text-white border border-white/25 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                API docs
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-14 max-w-md font-mono">
              {[
                ["2.4M", "Messages this month"],
                ["99.2%", "Delivery rate"],
                ["148ms", "p50 API latency"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl sm:text-4xl font-light tracking-[-0.03em] text-white">{n}</div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-white/55 mt-2 font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Live delivery card mockup */}
          <div className="hidden lg:block">
            <div
              className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-white/55 uppercase tracking-[0.12em]">
                <span>Live · last 60s</span>
                <span className="inline-flex items-center gap-1.5" style={{ color: SIGNAL_LIME }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: SIGNAL_LIME, boxShadow: `0 0 0 3px rgba(127,212,138,0.25)` }} />
                  delivered
                </span>
              </div>

              {/* SMS row */}
              <div className="mt-5 rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-white/55">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/85">SMS</span>
                  <span>+255 7•• ••• 482</span>
                </div>
                <div className="mt-2.5 text-[13.5px] leading-[1.5] text-white/90">
                  Your Malipopay code is <span className="font-bold text-white">428 715</span>. Valid 5 minutes.
                </div>
                <div className="mt-2 text-[10px] font-mono text-white/45">delivered · 1.4s</div>
              </div>

              {/* WhatsApp row */}
              <div className="mt-3 rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-white/55">
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(37, 211, 102, 0.18)", color: "#25D366" }}
                  >
                    WhatsApp
                  </span>
                  <span>+255 6•• ••• 901</span>
                </div>
                <div className="mt-2.5 text-[13.5px] leading-[1.5] text-white/90">
                  Karibu Maya 👋 your order <span className="font-bold text-white">#4482</span> ships Monday.
                </div>
                <div className="mt-2 text-[10px] font-mono text-white/45">delivered · read · 2.8s</div>
              </div>

              {/* Email row */}
              <div className="mt-3 rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.1em] text-white/55">
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(95,212,188,0.18)", color: SEND_300 }}
                  >
                    Email
                  </span>
                  <span>maya@example.co.tz</span>
                </div>
                <div className="mt-2.5 text-[13.5px] leading-[1.5] text-white/90">
                  Receipt for TSh 18,400. Open to view details.
                </div>
                <div className="mt-2 text-[10px] font-mono text-white/45">delivered · opened · 4.1s</div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="rounded-xl bg-white/[0.04] py-2.5">
                  <div className="text-[10px] uppercase text-white/45">Sent</div>
                  <div className="text-lg font-light tracking-[-0.02em] text-white mt-0.5">12,481</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] py-2.5">
                  <div className="text-[10px] uppercase text-white/45">Delivered</div>
                  <div className="text-lg font-light tracking-[-0.02em] text-white mt-0.5" style={{ color: SIGNAL_LIME }}>12,409</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] py-2.5">
                  <div className="text-[10px] uppercase text-white/45">Failed</div>
                  <div className="text-lg font-light tracking-[-0.02em] mt-0.5" style={{ color: SIGNAL_PEACH }}>72</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPLES — four principles, one delivery standard */}
      <section className="py-20 bg-white">
        <Container>
          <div
            className="font-mono text-[11px] font-semibold uppercase"
            style={{ color: SEND_600, letterSpacing: "0.18em" }}
          >
            Principles
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.025em] text-ink-950">
            Four principles. <span className="font-bold">One delivery standard.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="rounded-3xl bg-white p-7"
                style={{ border: `1px solid ${SEND_BORDER}`, boxShadow: "0 1px 2px rgba(0,64,58,0.05)" }}
              >
                <div className="font-mono text-xs font-semibold" style={{ color: SEND_500 }}>
                  {p.n}
                </div>
                <div className="font-bold text-lg tracking-[-0.015em] mt-3 text-ink-950">{p.t}</div>
                <p className="text-[14px] leading-[1.55] mt-2.5" style={{ color: INK_3 }}>
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CHANNELS */}
      <section className="py-20" style={{ background: "#F4FAF8" }}>
        <Container>
          <div
            className="font-mono text-[11px] font-semibold uppercase"
            style={{ color: SEND_600, letterSpacing: "0.18em" }}
          >
            Channels
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.025em] text-ink-950">
            Three channels. <span className="font-bold">One unified developer experience.</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {CHANNELS.map((c) => (
              <div
                key={c.name}
                className="rounded-3xl bg-white p-7"
                style={{ border: `1px solid ${SEND_BORDER}` }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: INK_3 }}>
                  {c.tag}
                </div>
                <div className="font-extrabold text-3xl tracking-[-0.02em] mt-3 text-ink-950">
                  {c.name}
                </div>
                <p className="text-[15px] leading-[1.55] mt-3" style={{ color: INK_2 }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <Container>
          <div
            className="font-mono text-[11px] font-semibold uppercase"
            style={{ color: SEND_600, letterSpacing: "0.18em" }}
          >
            Platform
          </div>
          <h2 className="h-section mt-3.5 max-w-[860px] font-light tracking-[-0.025em] text-ink-950">
            Everything you need to message{" "}
            <span className="font-bold">customers, securely and reliably.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="rounded-3xl bg-white p-7"
                style={{ border: `1px solid ${SEND_BORDER}` }}
              >
                <div
                  className="font-mono text-[12px] font-semibold tracking-[0.1em] uppercase"
                  style={{ color: SEND_500 }}
                >
                  {String(i + 1).padStart(2, "0")} / 06
                </div>
                <div className="font-bold text-xl tracking-[-0.015em] mt-4 text-ink-950">{f.t}</div>
                <p className="text-[14.5px] leading-[1.55] mt-2.5" style={{ color: INK_3 }}>
                  {f.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONVERSATION + COMPOSE — surfacing the design system primitives */}
      <section className="py-20" style={{ background: "#F4FAF8" }}>
        <Container>
          <div
            className="font-mono text-[11px] font-semibold uppercase"
            style={{ color: SEND_600, letterSpacing: "0.18em" }}
          >
            Built for throughput
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.025em] text-ink-950">
            Compose, send, follow up.{" "}
            <span className="font-bold">Without leaving the thread.</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Conversation thread */}
            <div
              className="rounded-3xl bg-white p-7"
              style={{ border: `1px solid ${SEND_BORDER}` }}
            >
              <div
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: INK_3 }}
              >
                Conversation thread
              </div>
              <div className="flex flex-col gap-2.5 mt-5">
                <div
                  className="px-4 py-3 text-[14px] leading-[1.5] max-w-[420px]"
                  style={{
                    background: "#F4FAF8",
                    borderRadius: "18px 18px 18px 4px",
                    border: `1px solid ${SEND_BORDER}`,
                    color: SEND_900,
                  }}
                >
                  Hi Maya — your seedling kit ships Monday. Track it at lockwd.co/trk/4482.
                </div>
                <div
                  className="px-4 py-3 text-[14px] leading-[1.5] max-w-[420px] ml-auto text-white"
                  style={{
                    background: SEND_500,
                    borderRadius: "18px 18px 4px 18px",
                  }}
                >
                  Perfect — can I get a second kit sent to my mum&apos;s address?
                </div>
                <div
                  className="px-4 py-3 text-[14px] leading-[1.5] max-w-[420px]"
                  style={{
                    background: "#F4FAF8",
                    borderRadius: "18px 18px 18px 4px",
                    border: `1px solid ${SEND_BORDER}`,
                    color: SEND_900,
                  }}
                >
                  Done — second kit on the way. Confirmation sent to +255 658 ••• 291.
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: SEND_100, color: SEND_700 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: SEND_500 }} />
                  Live
                </span>
                <span
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: "#FFF2E6", color: "#9C4A1E" }}
                >
                  Queued
                </span>
                <span
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: SEND_50, color: SEND_700 }}
                >
                  Delivered · 2,412
                </span>
                <span
                  className="px-3 py-1.5 rounded-full text-[12px] font-semibold"
                  style={{ background: "#FFE6E6", color: "#8A1717" }}
                >
                  Failed · 12
                </span>
              </div>
            </div>

            {/* Compose */}
            <div
              className="rounded-3xl bg-white p-7"
              style={{ border: `1px solid ${SEND_BORDER}` }}
            >
              <div
                className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: INK_3 }}
              >
                Compose
              </div>
              <div
                className="mt-5 px-4 py-3.5 text-[14px] rounded-2xl bg-white"
                style={{ border: `1px solid ${SEND_BORDER}`, color: INK_3 }}
              >
                Audience · active customers (2,482)
              </div>
              <div
                className="mt-3 p-4 text-[13px] rounded-2xl bg-white font-mono leading-[1.7] min-h-[120px]"
                style={{ border: `1px solid ${SEND_BORDER}`, color: SEND_900 }}
              >
                Hi {`{first_name}`} — your order {`{order_id}`} is on its way. Track at lockwd.co/trk/{`{id}`}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="font-mono text-[11px]" style={{ color: INK_3 }}>
                  74 / 160 chars · 1 segment
                </div>
                <button
                  className="font-semibold text-sm px-5 py-2.5 rounded-xl text-white"
                  style={{ background: SEND_500 }}
                >
                  Send →
                </button>
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            {[
              ["2.4M", "Messages this month", SEND_900],
              ["99.2%", "Delivery rate", SEND_900],
              ["148ms", "p50 API latency", SEND_900],
              ["Live", "4 campaigns sending", SEND_500],
            ].map(([n, l, c]) => (
              <div
                key={l}
                className="rounded-2xl bg-white p-6"
                style={{ border: `1px solid ${SEND_BORDER}` }}
              >
                <div className="text-4xl font-light tracking-[-0.03em]" style={{ color: c }}>
                  {n}
                </div>
                <div
                  className="text-[11px] font-semibold uppercase mt-2.5"
                  style={{ letterSpacing: "0.08em", color: INK_3 }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DEVELOPER-FIRST */}
      <section className="py-20" style={{ background: SEND_900 }}>
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <div
              className="font-mono text-[11px] font-semibold uppercase"
              style={{ color: SEND_300, letterSpacing: "0.18em" }}
            >
              Developer-first
            </div>
            <h2 className="h-section mt-3.5 max-w-[640px] font-light tracking-[-0.025em] text-white">
              One REST call. <span className="text-white/55">Every message you need.</span>
            </h2>
            <p className="text-[17px] leading-[1.6] text-white/75 mt-6 max-w-[520px] font-light">
              Use the same JSON payload across SMS, WhatsApp, and email. Smart channel routing falls back automatically. Webhooks deliver status updates straight to your service.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["REST API", "Webhooks", "Node SDK", "Python SDK", "PHP SDK", "Go SDK", "OpenAPI"].map((x) => (
                <span
                  key={x}
                  className="text-[12px] font-mono py-1.5 px-3 rounded-full bg-white/[0.06] text-white/85 border border-white/10"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div
            className="rounded-3xl border border-white/10 p-6 font-mono text-[12.5px] leading-[1.7] text-white/85 overflow-hidden"
            style={{ background: "rgba(0,0,0,0.35)", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
          >
            <div className="text-white/45 text-[10px] uppercase tracking-[0.12em] mb-3">
              POST /v1/messages
            </div>
            <pre className="whitespace-pre-wrap">
{`{
  "channel": "auto",     // sms | whatsapp | email | auto
  "to": "+255712345678",
  "from": "Malipopay",
  "template": "otp.v2",
  "variables": {
    "code": "428715",
    "minutes": 5
  },
  "fallback": ["whatsapp", "sms"]
}`}
            </pre>
            <div className="mt-4 text-[11px] text-white/55">
              → <span style={{ color: SIGNAL_LIME }}>202 Accepted</span>{" "}
              <span className="text-white/65">{`{ "id": "msg_8f12...", "status": "queued", "latency_ms": 148 }`}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* AUDIENCES */}
      <section className="py-20 bg-white">
        <Container>
          <div
            className="font-mono text-[11px] font-semibold uppercase"
            style={{ color: SEND_600, letterSpacing: "0.18em" }}
          >
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.025em] text-ink-950">
            Built for teams that need{" "}
            <span className="font-bold">messages to actually arrive.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {AUDIENCES.map(([t, b]) => (
              <div
                key={t}
                className="rounded-3xl p-7"
                style={{ background: "#F4FAF8", border: `1px solid ${SEND_BORDER}` }}
              >
                <div className="font-bold text-lg tracking-[-0.015em] text-ink-950">{t}</div>
                <p className="text-[15px] leading-[1.55] mt-2.5" style={{ color: INK_3 }}>
                  {b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-white"
        style={{ background: `linear-gradient(180deg, ${SEND_900} 0%, ${SEND_800} 100%)` }}
      >
        <Container className="text-center">
          <h2 className="h-section font-light tracking-[-0.025em] max-w-[720px] mx-auto">
            Start sending in minutes.{" "}
            <span className="text-white/55">Pay only for what lands.</span>
          </h2>
          <div className="flex gap-3 justify-center mt-10 flex-wrap">
            <a
              href="https://www.send.co.tz"
              className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ color: SEND_700 }}
            >
              Start a campaign →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-white/[0.05] text-white border border-white/25 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to sales
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
