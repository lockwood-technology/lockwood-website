import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Localhost",
  description:
    "Tanzania-built. Africa-ready. Always online. Reliable cloud hosting and infrastructure for African businesses, with local data residency, 24/7 support, and TZS billing.",
};

const DEEP = "#0A0F1F";
const NAVY = "#1A2849";
const BLUE = "#4A6CF7";
const MINT = "#7BFFB1";
const ICE = "#EAEEFF";

const FLEET: [string, "online" | "maint", string, string][] = [
  ["srv-tz-01", "online", "14ms", "47%"],
  ["srv-tz-02", "online", "12ms", "63%"],
  ["srv-tz-03", "online", "18ms", "38%"],
  ["srv-ke-01", "online", "38ms", "52%"],
  ["srv-tz-04", "maint", "——", "——"],
];

const FEATURES: [string, string][] = [
  ["Cloud Servers", "Linux VMs from 1 vCPU to 32 vCPU. Provisioned in under 60 seconds, scaled with one click."],
  ["Managed Databases", "PostgreSQL, MySQL, and Redis, backed up nightly, point-in-time recovery, no-touch upgrades."],
  ["Object Storage", "S3-compatible buckets in Dar, store files, media, and backups close to where they're served."],
  ["CDN & Edge", "Africa-first edge nodes for static assets and APIs. Snappy first paint, even on patchy connections."],
  ["Domains & SSL", ".tz, .co.ke, .africa, and gTLD registration. Automated SSL renewal, never an expired certificate."],
  ["Email & DNS", "Reliable transactional email and authoritative DNS. SPF, DKIM, and DMARC configured by default."],
];

const POINTS: [string, string][] = [
  ["Local data residency", "Your data never leaves Tanzania unless you ask it to. Compliance teams sleep better."],
  ["Lower latency for local users", "Sub-15ms intra-Tanzania round-trips. Your dashboard loads like a desktop app."],
  ["Billed in TSh", "Pay in shillings, not USD. No FX surprises when the dollar moves against you."],
  ["Local support", "On-call engineers in Dar, same timezone, same language, same context as you."],
];

export default function LocalhostPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 60%, ${DEEP} 100%)` }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at 70% 30%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 70% 30%, black 30%, transparent 80%)",
          }}
        />

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div
              className="font-mono text-xs tracking-[0.1em] font-semibold"
              style={{ color: MINT }}
            >
              $ localhost.co.tz · Hosting & cloud
            </div>
            <h1
              className="mt-5 font-bold tracking-[-0.035em] leading-[1.02]"
              style={{ fontSize: "clamp(56px, 7vw, 92px)" }}
            >
              Tanzania-built.
              <br />
              <span style={{ color: MINT }}>Africa-ready.</span>
              <br />
              Always online.
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px]">
              Reliable cloud hosting and infrastructure, engineered for African businesses. Lower latency, local data residency, and 24/7 support from people who know your stack and your timezone.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.localhost.co.tz"
                className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: MINT, color: DEEP }}
              >
                Visit localhost.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Talk to engineering
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["99.9%", "Uptime SLA"],
                ["<15ms", "TZ ↔ TZ latency"],
                ["24 / 7", "Local on-call"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-bold text-[36px] tracking-[-0.025em] leading-none" style={{ color: MINT }}>
                    {n}
                  </div>
                  <div
                    className="font-mono text-[11px] text-white/60 mt-2 uppercase tracking-[0.08em] font-semibold"
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl border overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            style={{ background: DEEP, border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div
              className="flex items-center gap-2 py-3 px-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
              <span className="font-mono text-[11px] text-white/50 ml-2.5">
                localhost.tz · status
              </span>
            </div>
            <div className="py-5 px-5.5 font-mono">
              <div className="text-xs" style={{ color: MINT }}>
                $ ssh root@srv-tz-01.localhost.tz
              </div>
              <div className="text-xs text-white/70 mt-1">
                OK · authenticated · uptime 287d 14h
              </div>
              <div className="mt-4.5 text-[11px] text-white/40 uppercase tracking-[0.08em]">
                FLEET · DAR ES SALAAM
              </div>
              {FLEET.map(([s, st, lat, cpu]) => {
                const ok = st === "online";
                return (
                  <div
                    key={s}
                    className="grid grid-cols-[110px_80px_80px_1fr] gap-3 py-2 text-xs items-center"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-white font-semibold">{s}</span>
                    <span style={{ color: ok ? MINT : "#FFC774" }}>● {st}</span>
                    <span className="text-white/60">{lat}</span>
                    <span className="text-white/60">cpu {cpu}</span>
                  </div>
                );
              })}
              <div
                className="mt-4 p-3 rounded-lg text-xs"
                style={{
                  background: "rgba(123,255,177,0.08)",
                  border: "1px solid rgba(123,255,177,0.25)",
                  color: MINT,
                }}
              >
                ✓ All systems operational · last incident 47d ago
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.1em] font-bold uppercase"
              style={{ color: BLUE }}
            >
              # the problem
            </div>
            <h2
              className="mt-3.5 font-bold tracking-[-0.03em] leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", color: DEEP }}
            >
              When your data lives <span className="text-ink-500">10,000 km away.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600">
            <p className="m-0">
              Most African businesses host on US or European cloud, paying in USD, fighting transcontinental latency, and hoping support tickets get answered between 2am and 4am local time. Compliance teams worry about data residency. Engineering teams fight 200ms round-trips on every database call.
            </p>
            <p className="mt-5">
              Localhost is built on the simple idea that East African applications should run on East African infrastructure, billed in shillings, governed by local law, supported by local engineers.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ background: ICE }}>
        <Container>
          <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
            <div>
              <div
                className="font-mono text-[11px] tracking-[0.1em] font-bold uppercase"
                style={{ color: BLUE }}
              >
                # what&apos;s in the rack
              </div>
              <h2
                className="mt-3.5 font-bold tracking-[-0.03em] leading-[1.05] max-w-[760px]"
                style={{ fontSize: "clamp(36px, 4vw, 56px)", color: DEEP }}
              >
                Every primitive a real product needs.{" "}
                <span className="text-ink-500">Nothing it doesn&apos;t.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(([t, b], i) => (
              <div
                key={t}
                className="p-7 rounded-[14px] bg-white flex flex-col gap-2.5"
                style={{ border: "1px solid #DBE3FF" }}
              >
                <div
                  className="font-mono text-xs font-bold tracking-[0.05em]"
                  style={{ color: BLUE }}
                >
                  0{i + 1} /
                </div>
                <div
                  className="font-bold text-xl tracking-[-0.015em]"
                  style={{ color: DEEP }}
                >
                  {t}
                </div>
                <div className="text-sm text-ink-600 leading-[1.55]">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 text-white" style={{ background: DEEP }}>
        <Container>
          <div
            className="font-mono text-[11px] tracking-[0.1em] font-bold uppercase"
            style={{ color: MINT }}
          >
            # why local
          </div>
          <h2
            className="mt-3.5 font-bold tracking-[-0.03em] leading-[1.05] max-w-[920px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            Four reasons your stack <span className="text-white/55">belongs in Dar.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-0">
            {POINTS.map(([t, b], i) => (
              <div
                key={t}
                className="py-8 pr-8"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.16)",
                  borderRight:
                    i % 2 === 0 ? "1px solid rgba(255,255,255,0.10)" : "none",
                  paddingLeft: i % 2 === 0 ? 0 : 32,
                }}
              >
                <div className="font-mono text-xs font-bold" style={{ color: MINT }}>
                  0{i + 1}
                </div>
                <div className="font-bold text-[26px] tracking-[-0.02em] mt-3.5">{t}</div>
                <div className="text-[15px] text-white/70 leading-[1.6] mt-2.5 max-w-[460px]">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${NAVY} 100%)` }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
        <Container className="relative text-center">
          <div
            className="font-mono text-xs tracking-[0.12em] font-semibold"
            style={{ color: MINT }}
          >
            $ ./deploy --region tz
          </div>
          <h2
            className="mt-3.5 mx-auto font-bold tracking-[-0.03em] leading-[1.05] max-w-[980px]"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Bring your stack home. <span style={{ color: MINT }}>We&apos;ll keep it running.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.localhost.co.tz"
              className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ background: MINT, color: DEEP }}
            >
              Visit localhost.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to engineering
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
