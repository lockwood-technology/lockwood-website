import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Drivers",
  description:
    "Drivers is a smart car service and maintenance tracking platform. Log every service, get smart reminders, and book trusted dealers across Tanzania.",
};

const NAVY = "#0A1628";
const ORANGE = "#FF6B35";
const ORANGE_DARK = "#D24B17";

const FEATURES: { t: string; b: string }[] = [
  {
    t: "Service History",
    b: "Every service done on every vehicle, with date, mileage, parts, dealer, and the receipt photo. Never lose a logbook again.",
  },
  {
    t: "Smart Reminders",
    b: "Mileage and date-based reminders for oil changes, tyre rotation, and service intervals. Never miss a service window.",
  },
  {
    t: "Dealer Marketplace",
    b: "Search and compare verified garages, dealerships, and spare parts shops by location, service, price, and rating.",
  },
  {
    t: "Cost Tracking",
    b: "See total spend per vehicle, per category, per month. Spot the warning signs before a small fix becomes a big one.",
  },
  {
    t: "Invoice Storage",
    b: "Photo of every receipt and invoice attached to the right service entry. Tax-time and resale-time both got easier.",
  },
  {
    t: "Ratings & Reviews",
    b: "Authentic reviews from real owners who have used a dealer. Make decisions on track record, not WhatsApp gossip.",
  },
];

const STEPS: [string, string][] = [
  ["Add your car", "Make, model, year, plate, mileage, insurance expiry. Add multiple cars under one account."],
  ["Log services", "Tap to record every service done. Attach the invoice photo. Done in 30 seconds."],
  ["Get reminders", "We watch your mileage and dates. We tell you when oil, tyres, and service are due."],
  ["Find trusted dealers", "Search the marketplace. Compare quotes. Book. Service done. Receipt logged."],
];

const AUDIENCES: [string, string][] = [
  [
    "Car owners",
    "Anyone who wants a complete service history for their vehicle, smart reminders, and trusted dealers within reach.",
  ],
  [
    "Dealers & service centers",
    "Garages, Toyota and Suzuki dealerships, and authorised service providers wanting visibility and qualified bookings.",
  ],
  [
    "Spare parts shops",
    "Businesses selling OEM parts, lubricants, batteries, and accessories, putting their catalogue in front of every owner.",
  ],
];

export default function DriversPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #11253E 60%, #0A1628 100%)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow" style={{ color: ORANGE }}>
              drivers.co.tz · Automotive
            </div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Gari yako,
              <br />
              <span style={{ color: ORANGE }}>salama.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              The smart way to service and maintain your vehicle. Log every service, get reminders that actually fire, and find the right dealer in two taps.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.drivers.co.tz"
                className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90 text-white"
                style={{ background: ORANGE }}
              >
                Download app →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Register your business
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["30+", "Service categories"],
                ["100+", "Verified dealers"],
                ["4.8★", "Owner rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[36px] tracking-[-0.025em] leading-none" style={{ color: ORANGE }}>
                    {n}
                  </div>
                  <div className="text-[11px] text-white/60 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup card */}
          <div
            className="rounded-[28px] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] hidden lg:block max-w-[300px] mx-auto"
            style={{ background: "#000" }}
          >
            <div className="rounded-[22px] bg-white text-ink-950 p-5">
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold text-ink-500">
                    Service history
                  </div>
                  <div className="font-bold text-lg mt-0.5">Toyota Harrier</div>
                  <div className="text-[11px] text-ink-500 mt-0.5">
                    T 234 ABC · 87,420 km
                  </div>
                </div>
                <div
                  className="text-[11px] font-bold py-0.5 px-2 rounded-full"
                  style={{ background: "#E8F5EE", color: "#1F6B3D" }}
                >
                  Up to date
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  { date: "14 Apr", svc: "Oil change", dealer: "Royal Auto · Mikocheni", cost: "TSh 92,000", color: ORANGE },
                  { date: "02 Mar", svc: "Tyre rotation", dealer: "Tyre King · Sinza", cost: "TSh 35,000", color: NAVY },
                  { date: "18 Feb", svc: "Brake pads", dealer: "Royal Auto · Mikocheni", cost: "TSh 180,000", color: NAVY },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[6px_1fr_auto] gap-3 items-center"
                  >
                    <div
                      className="w-1.5 h-10 rounded-full"
                      style={{ background: r.color }}
                    />
                    <div>
                      <div className="font-semibold text-sm">{r.svc}</div>
                      <div className="text-[10px] text-ink-500 mt-0.5">
                        {r.date} · {r.dealer}
                      </div>
                    </div>
                    <div className="text-[12px] font-bold">{r.cost}</div>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 p-3 rounded-xl text-xs font-semibold flex items-center gap-2"
                style={{ background: "#FFF4ED", color: ORANGE_DARK }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: ORANGE }}
                />
                Service due in 1,580 km · Royal Auto
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <div>
            <div className="eyebrow" style={{ color: ORANGE_DARK }}>
              The problem
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              Most cars in Tanzania{" "}
              <span className="text-ink-500">have no service record at all.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600 font-light">
            <p className="m-0">
              Owners track services in WhatsApp threads, paper logbooks, or memory. Receipts disappear. Reminders are never set. Resale value tanks because no one can prove what was done. And finding a trusted dealer means asking a friend, hoping they know one.
            </p>
            <p className="mt-5">
              Drivers turns every car into a connected, fully documented vehicle, with a marketplace of verified dealers and shops one tap away.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24 bg-ink-50">
        <Container>
          <div className="eyebrow" style={{ color: ORANGE_DARK }}>
            How it works
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Four steps. <span className="text-ink-500">From sign-up to fully tracked.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map(([t, b], i) => (
              <div
                key={t}
                className="p-6 rounded-2xl bg-white border border-ink-200"
              >
                <div
                  className="font-mono text-[11px] tracking-[0.08em] font-bold uppercase"
                  style={{ color: ORANGE }}
                >
                  Step 0{i + 1}
                </div>
                <div className="font-bold text-lg tracking-[-0.015em] mt-3 text-ink-950">{t}</div>
                <div className="text-sm leading-[1.55] mt-2 text-ink-600 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: ORANGE_DARK }}>
            Key features
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Six tools. <span className="text-ink-500">One connected vehicle.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="p-6 rounded-2xl bg-white border border-ink-200 flex flex-col gap-2.5"
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center text-white text-sm font-bold font-mono"
                  style={{ background: NAVY }}
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
      <section className="py-20 sm:py-24 bg-ink-50">
        <Container>
          <div className="eyebrow" style={{ color: ORANGE_DARK }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Three audiences. <span className="text-ink-500">One trusted ecosystem.</span>
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
          background: `linear-gradient(135deg, ${NAVY} 0%, ${ORANGE_DARK} 100%)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen" />
        <Container className="relative text-center">
          <div className="eyebrow text-white/75">Start tracking</div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto text-white font-light tracking-[-0.03em]">
            One car. Every service. <span style={{ color: ORANGE }}>One smart logbook.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.drivers.co.tz"
              className="inline-flex items-center font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90 text-white"
              style={{ background: ORANGE }}
            >
              Download app →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Register your business
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
