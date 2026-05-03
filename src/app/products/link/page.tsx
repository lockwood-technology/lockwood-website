import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Link",
  description:
    "Short links. Smart QR. Powerful pages. Branded short URLs, dynamic QR codes, and mobile-optimised link-in-bio pages with unified analytics.",
};

const BLUE = "#0B5FFF";
const BLUE_DARK = "#0433B3";

const USE_CASES: [string, string][] = [
  ["Restaurant menu", "QR code on every table, scan to view the menu online, no app needed"],
  ["Event promotions", "Short links in SMS and posters, track RSVPs and registration clicks"],
  ["Instagram bio", "One Link Page replacing multiple links, followers reach everything in one tap"],
  ["Product packaging", "Dynamic QR on packaging, update destination without reprinting"],
  ["SMS campaigns", "Short, branded links that don't trigger spam filters and fit within character limits"],
  ["NGO field surveys", "QR codes on printed materials pointing to digital forms"],
  ["Business cards", "QR code linking to full digital profile or contact card"],
  ["Marketing agencies", "Manage all client links, track campaign performance, generate client reports"],
];

function MiniQR({ size = 144, mod = 12 }: { size?: number; mod?: number }) {
  const cells = mod * mod;
  return (
    <div
      className="bg-white border border-ink-100 rounded-xl p-2 grid"
      style={{
        width: size,
        height: size,
        gridTemplateColumns: `repeat(${mod}, 1fr)`,
        gap: 1,
      }}
    >
      {Array.from({ length: cells }).map((_, i) => {
        const r = Math.floor(i / mod);
        const c = i % mod;
        const corner =
          (r < 3 && c < 3) || (r < 3 && c > mod - 4) || (r > mod - 4 && c < 3);
        const on = corner
          ? !(r === 1 && c === 1) && !(r === 1 && c === mod - 2) && !(r === mod - 2 && c === 1)
          : (i * 37) % 3 === 0;
        return (
          <div
            key={i}
            style={{ background: on ? BLUE : "transparent", borderRadius: 1 }}
          />
        );
      })}
    </div>
  );
}

export default function LinkPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{ background: `linear-gradient(135deg, #041639 0%, #081F5C 50%, ${BLUE_DARK} 100%)` }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          aria-hidden
        >
          <defs>
            <pattern id="lk-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lk-grid)" />
        </svg>

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow" style={{ color: "#8DA6FF" }}>
              link.co.tz · Link Management & QR
            </div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Short links. Smart QR.
              <br />
              <span style={{ color: "#8DA6FF" }}>Powerful pages.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/80 mt-7 max-w-[520px] font-light">
              Branded short URLs, dynamic QR codes, and mobile-optimised link-in-bio pages, with unified analytics across every click, scan, and view.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.link.co.tz"
                className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ color: BLUE }}
              >
                Visit link.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Talk to our team
              </a>
            </div>

            <div
              className="mt-12 rounded-[14px] p-5"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="flex items-center gap-3">
                <div className="font-mono text-[13px] text-white/60 flex-1 truncate">
                  https://malipopay.co.tz/pay/invoice-4821-long-session-token-9f8a7b...
                </div>
                <div style={{ color: BLUE }} className="text-xl">→</div>
                <div className="font-mono text-[15px] text-white font-bold">
                  lnk.tz/gva-482
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative min-h-[540px]">
            <div
              className="absolute right-0 top-0 w-[78%] bg-white rounded-[18px] p-5.5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
              style={{ color: "#111" }}
            >
              <div className="flex justify-between items-baseline">
                <div>
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold"
                    style={{ color: "#567" }}
                  >
                    lnk.tz/summer-24
                  </div>
                  <div className="font-extrabold text-[34px] tracking-[-0.025em] mt-1">12,482</div>
                  <div className="text-[11px] mt-0.5" style={{ color: "#567" }}>
                    clicks · last 7 days
                  </div>
                </div>
                <div
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                  style={{ background: "#E7F5EA", color: "#0B6B4A" }}
                >
                  ▲ 41.2%
                </div>
              </div>
              <svg viewBox="0 0 300 80" className="w-full mt-3.5">
                <path
                  d="M0 60 L 40 45 L 80 55 L 120 32 L 160 40 L 200 22 L 240 30 L 300 10"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 60 L 40 45 L 80 55 L 120 32 L 160 40 L 200 22 L 240 30 L 300 10 L 300 80 L 0 80 Z"
                  fill={BLUE}
                  opacity="0.08"
                />
              </svg>
              <div
                className="grid grid-cols-3 gap-2.5 mt-2 pt-3 border-t"
                style={{ borderColor: "#E8ECF3" }}
              >
                {[
                  ["TZ", "68%"],
                  ["KE", "21%"],
                  ["UG", "7%"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[10px] font-semibold" style={{ color: "#567" }}>
                      {k}
                    </div>
                    <div className="text-sm font-bold mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="absolute left-0 bottom-0 w-[220px] bg-white rounded-[18px] p-[18px] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
              style={{ color: "#111" }}
            >
              <MiniQR size={184} mod={12} />
              <div
                className="text-[11px] mt-3 text-center font-mono"
                style={{ color: "#567" }}
              >
                scan · lnk.tz/menu
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <div>
            <div className="eyebrow" style={{ color: BLUE }}>
              The problem
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Long, messy URLs.{" "}
              <span className="text-ink-500">Marketing that&apos;s completely blind.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600 font-light">
            <p className="m-0">
              Every time a business shares a URL, in a flyer, an Instagram bio, a WhatsApp message, or an SMS campaign, that link is either too long to be trustworthy, untrackable, or completely disconnected from the brand. Long URLs kill click-throughs. When destinations change, the link breaks.
            </p>
            <p className="mt-5">
              For businesses running marketing across multiple channels, there&apos;s no easy way to track where clicks come from, which campaigns are performing, or how many people are scanning a QR on a poster versus clicking a link in an SMS. The result: money spent with no visibility on what&apos;s actually working.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 border-y border-ink-200">
        <Container>
          <div className="eyebrow" style={{ color: BLUE }}>
            Four capabilities
          </div>
          <h2 className="h-section mt-3.5 max-w-[860px] font-light tracking-[-0.03em] text-ink-950">
            A complete toolkit{" "}
            <span className="text-ink-500">for every digital connection you share.</span>
          </h2>
          <div className="mt-16 flex flex-col gap-16">
            {/* 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="font-mono text-[13px] font-bold" style={{ color: BLUE }}>01</div>
                <h3 className="font-bold text-[36px] tracking-[-0.025em] leading-[1.08] mt-2.5">
                  URL Shortener
                </h3>
                <p className="text-[17px] text-ink-600 leading-[1.6] mt-4.5 max-w-[500px] font-light">
                  Create clean, short, branded links in seconds, using your own custom domain. Edit destinations anytime without changing the URL. Set expiry, password protection, and redirect rules by device, location, or time of day.
                </p>
              </div>
              <div className="bg-white border border-ink-200 rounded-[20px] p-8 font-mono text-[13px] leading-loose">
                <div style={{ color: "#5B6779" }}>original</div>
                <div className="break-all mb-3.5" style={{ color: "#0E1116" }}>
                  malipopay.co.tz/checkout/session-abc12345-invoice-4821-token
                </div>
                <div className="flex items-center gap-2" style={{ color: BLUE }}>
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: BLUE }}
                  />
                  <span className="font-bold">lnk.tz/gva-482</span>
                </div>
                <div className="flex gap-1.5 mt-4 flex-wrap">
                  {["Custom domain", "Expiry", "Password", "Geo rules"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] py-1 px-2.5 rounded-md font-semibold"
                      style={{ background: "#EEF2FF", color: BLUE }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="bg-white border border-ink-200 rounded-[20px] p-8 lg:order-1 order-2">
                <div className="flex gap-4 items-center">
                  <MiniQR size={120} mod={10} />
                  <div>
                    <div
                      className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold"
                      style={{ color: "#5B6779" }}
                    >
                      Scans · 30d
                    </div>
                    <div className="font-extrabold text-[28px] tracking-[-0.02em] mt-1">3,482</div>
                    <div className="flex gap-1.5 mt-2.5 flex-wrap">
                      {["Dynamic", "Brand colors", "PNG/SVG"].map((t) => (
                        <span
                          key={t}
                          className="text-[11px] py-1 px-2.5 rounded-md font-semibold"
                          style={{ background: "#EEF2FF", color: BLUE }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-2 order-1">
                <div className="font-mono text-[13px] font-bold" style={{ color: BLUE }}>02</div>
                <h3 className="font-bold text-[36px] tracking-[-0.025em] leading-[1.08] mt-2.5">
                  QR Code Generator
                </h3>
                <p className="text-[17px] text-ink-600 leading-[1.6] mt-4.5 max-w-[500px] font-light">
                  Fully branded, customisable codes for URLs, PDFs, menus, payment pages, social profiles. Dynamic, update destinations without reprinting. Download in print-ready PNG, SVG, or EPS.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="font-mono text-[13px] font-bold" style={{ color: BLUE }}>03</div>
                <h3 className="font-bold text-[36px] tracking-[-0.025em] leading-[1.08] mt-2.5">
                  Link Pages
                </h3>
                <p className="text-[17px] text-ink-600 leading-[1.6] mt-4.5 max-w-[500px] font-light">
                  Mobile-optimised landing pages in minutes, no coding. Perfect for Instagram, TikTok, and WhatsApp bios. Brand colours, logo, imagery, a fast, trackable digital presence without a full website.
                </p>
              </div>
              <div className="bg-white border border-ink-200 rounded-[20px] p-8">
                <div
                  className="rounded-[22px] p-2.5 mx-auto"
                  style={{ width: 180, background: "#0B1530" }}
                >
                  <div className="bg-white rounded-[14px] p-3.5 text-ink-900">
                    <div
                      className="w-12 h-12 mx-auto rounded-full"
                      style={{ background: `linear-gradient(135deg, ${BLUE}, #8DA0FF)` }}
                    />
                    <div className="text-center font-extrabold text-sm mt-2">
                      @mkate_bakery
                    </div>
                    <div className="text-center text-[11px] mt-0.5" style={{ color: "#567" }}>
                      Artisan bakery · Dar es Salaam
                    </div>
                    <div className="flex flex-col gap-1.5 mt-3.5">
                      {["View menu", "Order via WhatsApp", "Our locations", "Pay a bill"].map((t) => (
                        <div
                          key={t}
                          className="rounded-[10px] py-2.5 px-3 text-xs font-semibold text-center"
                          style={{ background: "#F3F5FA" }}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div className="bg-white border border-ink-200 rounded-[20px] p-8 lg:order-1 order-2">
                <svg viewBox="0 0 320 100" className="w-full">
                  <path
                    d="M0 80 L 32 65 L 64 70 L 96 42 L 128 50 L 160 28 L 192 36 L 224 18 L 256 24 L 288 8 L 320 14"
                    fill="none"
                    stroke={BLUE}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 80 L 32 65 L 64 70 L 96 42 L 128 50 L 160 28 L 192 36 L 224 18 L 256 24 L 288 8 L 320 14 L 320 100 L 0 100 Z"
                    fill={BLUE}
                    opacity="0.08"
                  />
                </svg>
                <div className="grid grid-cols-4 gap-3 mt-3.5">
                  {[
                    ["Clicks", "42.8k"],
                    ["CTR", "6.2%"],
                    ["Countries", "12"],
                    ["Top", "Instagram"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div
                        className="text-[10px] tracking-[0.08em] uppercase font-bold"
                        style={{ color: "#5B6779" }}
                      >
                        {k}
                      </div>
                      <div className="text-base font-bold mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-2 order-1">
                <div className="font-mono text-[13px] font-bold" style={{ color: BLUE }}>04</div>
                <h3 className="font-bold text-[36px] tracking-[-0.025em] leading-[1.08] mt-2.5">
                  Analytics & Intelligence
                </h3>
                <p className="text-[17px] text-ink-600 leading-[1.6] mt-4.5 max-w-[500px] font-light">
                  Unified dashboard, clicks, scans, page views across every link, code, and page. Breakdowns by country, city, device, browser, and referrer. Real-time for live campaigns. Exportable reports for clients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="eyebrow" style={{ color: BLUE }}>
            Use cases
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Every channel you already run. <span className="text-ink-500">Now measurable.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-14">
            {USE_CASES.map(([t, b], i) => (
              <div
                key={t}
                className={`py-6 grid grid-cols-[0.6fr_1fr] gap-6 items-start border-t border-ink-200 ${
                  i >= USE_CASES.length - 2 ? "border-b" : ""
                }`}
              >
                <div className="font-bold text-[17px] tracking-[-0.01em]">{t}</div>
                <div className="text-sm text-ink-600 leading-[1.5] font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, #041639 0%, ${BLUE_DARK} 100%)` }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen" />
        <Container className="relative text-center">
          <div className="eyebrow" style={{ color: "#8DA6FF" }}>
            Start connecting
          </div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto text-white font-light tracking-[-0.03em]">
            Bitly-class functionality.{" "}
            <span style={{ color: "#8DA6FF" }}>Locally hosted, locally priced, built for East Africa.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.link.co.tz"
              className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ color: BLUE }}
            >
              Visit link.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Talk to our team
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
