import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Wedding",
  description:
    "Plan your perfect day. All in one place. East Africa's dedicated wedding planning platform with verified vendors, bookings, budget, guests, and a personalised wedding website.",
};

const ROSE = "#C2476E";
const ROSE_LIGHT = "#FCE4ED";
const INK = "#2B1820";

const COUPLE_FEATURES: { t: string; b: string }[] = [
  {
    t: "Vendor Marketplace",
    b: "Browse and compare hundreds of verified vendors across venues, catering, photography, decor, entertainment, transport, and more.",
  },
  {
    t: "Reviews & Ratings",
    b: "Authentic reviews from real couples, verified by the platform, every decision informed.",
  },
  {
    t: "Budget Planner",
    b: "Set a total budget and track spending across every vendor and category in real time.",
  },
  {
    t: "Checklist & Timeline",
    b: "A customisable planning checklist with milestone reminders, from engagement to honeymoon.",
  },
  {
    t: "Booking & Payments",
    b: "Reserve vendors and pay deposits directly, mobile money, card, or bank transfer, powered by Malipopay.",
  },
  {
    t: "Wedding Website",
    b: "Every couple gets a personalised site to share event details, collect RSVPs, and manage guest communications.",
  },
  {
    t: "Guest Management",
    b: "Track RSVPs, dietary requirements, seating preferences, and plus-ones from a single guest list.",
  },
];

const VENDOR_FEATURES: [string, string][] = [
  [
    "Verified Vendor Profile",
    "A professional, searchable business page with portfolio photos, service packages, pricing, and contact details.",
  ],
  ["Lead Inbox", "All enquiries delivered directly, with tools to respond, quote, and convert."],
  [
    "Booking Calendar",
    "Manage availability, prevent double-bookings, and track upcoming events in one view.",
  ],
  [
    "Analytics Dashboard",
    "See how many couples viewed your profile, where they came from, and what packages they enquired about.",
  ],
  [
    "Payment Collection",
    "Accept deposits and full payments through the platform, fully integrated with Malipopay for instant settlement.",
  ],
];

const AUDIENCES: [string, string][] = [
  [
    "Engaged Couples",
    "Anyone planning a wedding in Tanzania who wants a structured, less stressful journey with access to the best local vendors.",
  ],
  [
    "Wedding Vendors",
    "Venues, caterers, photographers, florists, DJs, makeup artists, decor specialists, and entertainment providers seeking consistent, qualified leads.",
  ],
  [
    "Wedding Planners",
    "Professional coordinators managing multiple clients who need a platform to centralise vendor relationships and client briefs.",
  ],
];

export default function WeddingPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{ background: `linear-gradient(135deg, ${ROSE} 0%, #9A3759 60%, #6A1F3E 100%)` }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.1] pattern-mark mix-blend-screen" />
        <svg
          className="absolute opacity-[0.12]"
          style={{ top: -120, right: -100, width: 540, height: 540 }}
          viewBox="0 0 100 100"
        >
          <circle cx="40" cy="50" r="28" fill="none" stroke="#fff" strokeWidth="0.6" />
          <circle cx="60" cy="50" r="28" fill="none" stroke="#fff" strokeWidth="0.6" />
        </svg>

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow text-white/85">wedding.co.tz · Event Tech & Marketplace</div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em]">
              Plan your perfect day.
              <br />
              <span className="italic font-light" style={{ color: ROSE_LIGHT }}>
                All in one place.
              </span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[520px] font-light">
              East Africa&apos;s dedicated wedding planning platform, verified vendors, bookings, budget, guests, and a personalised wedding website. One place, every stage.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.wedding.co.tz"
                className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ color: ROSE }}
              >
                Visit wedding.co.tz →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Become a vendor
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["500+", "Verified vendors"],
                ["7", "Vendor categories"],
                ["TZ · KE", "Active markets"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[32px] tracking-[-0.02em] leading-none">{n}</div>
                  <div className="text-[11px] text-white/70 mt-1.5 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative min-h-[540px]">
            {/* Back: budget tracker, rotated +3deg */}
            <div
              className="absolute right-0 top-0 w-[82%] bg-white rounded-[20px] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              style={{ color: INK, transform: "rotate(3deg)" }}
            >
              <div className="flex justify-between items-baseline">
                <div className="font-mono text-[10px] uppercase tracking-[0.08em] font-bold" style={{ color: "#7E5663" }}>
                  Budget
                </div>
                <div className="font-mono text-[11px]" style={{ color: "#7E5663" }}>
                  73% allocated
                </div>
              </div>
              <div className="font-extrabold text-[38px] tracking-[-0.025em] mt-1.5">TSh 42.8M</div>
              <div
                className="h-2 rounded-full mt-3.5 overflow-hidden"
                style={{ background: ROSE_LIGHT }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "73%", background: ROSE }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  ["Venue", "TSh 14M"],
                  ["Catering", "TSh 11M"],
                  ["Photography", "TSh 4.2M"],
                  ["Decor", "TSh 3.8M"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span style={{ color: "#7E5663" }}>{k}</span>
                    <span className="font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Front: vendor profile, rotated -3deg */}
            <div
              className="absolute left-0 bottom-0 w-[78%] bg-white rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.4)] overflow-hidden"
              style={{ color: INK, transform: "rotate(-3deg)" }}
            >
              <div
                className="h-[140px] relative"
                style={{
                  background: `linear-gradient(135deg, ${ROSE_LIGHT}, #fff 70%, #E6C6B4)`,
                }}
              >
                <div
                  className="absolute right-3.5 top-3.5 bg-white px-2.5 py-1 rounded-full text-[10px] font-bold"
                  style={{ color: ROSE, border: `1px solid ${ROSE_LIGHT}` }}
                >
                  ✓ Verified
                </div>
                <svg
                  className="absolute opacity-60"
                  style={{ bottom: 20, left: 20, width: 60, height: 60 }}
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M50 80 C10 50, 10 20, 50 30 C90 20, 90 50, 50 80 Z"
                    fill={ROSE}
                  />
                </svg>
              </div>
              <div className="p-[18px]">
                <div className="font-bold text-xl tracking-[-0.01em]">Kilima Gardens Estate</div>
                <div className="text-xs mt-1 flex gap-2" style={{ color: "#7E5663" }}>
                  <span>Venue</span>·<span>Bagamoyo Rd, Dar</span>·<span>★ 4.9</span>
                </div>
                <div
                  className="flex justify-between items-baseline mt-3.5 pt-3.5"
                  style={{ borderTop: `1px solid ${ROSE_LIGHT}` }}
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.08em]" style={{ color: "#7E5663" }}>
                      From
                    </div>
                    <div className="text-[22px] font-extrabold tracking-[-0.02em]">TSh 8.5M</div>
                  </div>
                  <div className="text-[13px] font-bold py-2.5 px-4 rounded-[10px] text-white" style={{ background: ROSE }}>
                    Request quote
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 items-start">
          <div>
            <div className="eyebrow" style={{ color: ROSE }}>
              The problem
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              A massive, cultural industry{" "}
              <span className="text-ink-500">running almost entirely offline.</span>
            </h2>
          </div>
          <div className="text-lg leading-[1.65] text-ink-600 font-light">
            <p className="m-0">
              Planning a wedding in Tanzania is one of the most logistically complex experiences a couple will undertake. Venues, caterers, photographers, florists, DJs, makeup artists, decor suppliers, masters of ceremony, each vendor discovered through word of mouth, WhatsApp referrals, and hours of manual searching.
            </p>
            <p className="mt-5">
              No trusted platform to browse verified vendors, compare packages, read reviews, book, or manage a budget. For vendors, the problem is the mirror image, the best photographers and caterers in Dar are invisible to couples outside their immediate networks, limited to referrals and missing the digital market entirely.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="py-24"
        style={{ background: ROSE_LIGHT, borderTop: "1px solid #F6CDD8", borderBottom: "1px solid #F6CDD8" }}
      >
        <Container>
          <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
            <div>
              <div className="eyebrow" style={{ color: ROSE }}>
                For couples
              </div>
              <h2 className="h-section mt-3.5 max-w-[760px] font-light tracking-[-0.03em] text-ink-950">
                Every stage of the journey.{" "}
                <span style={{ color: "#7E5663" }}>One quiet, organised place.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUPLE_FEATURES.map((f, i) => (
              <div
                key={f.t}
                className={`p-7 rounded-[18px] bg-white flex flex-col gap-2.5 ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
                style={{ border: "1px solid #F6CDD8" }}
              >
                <div
                  className="w-8 h-8 rounded-lg text-white grid place-items-center text-sm font-extrabold font-mono"
                  style={{ background: ROSE }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="font-bold text-xl tracking-[-0.01em]">{f.t}</div>
                <div className="text-sm leading-[1.55] font-light" style={{ color: "#5E3F4A" }}>
                  {f.b}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
          <div className="lg:sticky lg:top-[120px] self-start">
            <div className="eyebrow" style={{ color: ROSE }}>
              For vendors
            </div>
            <h2 className="h-section mt-3.5 font-light tracking-[-0.03em] text-ink-950">
              A professional storefront.{" "}
              <span className="text-ink-500">A leads engine. Zero cold outreach.</span>
            </h2>
            <p className="text-[17px] leading-[1.55] text-ink-600 mt-6 font-light max-w-[400px]">
              Put your services in front of every couple actively planning a wedding in Tanzania. Wedding.co.tz is a digital shopfront and a conversion machine, built for the way vendors here actually operate.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center mt-8 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ background: ROSE }}
            >
              Become a vendor →
            </a>
          </div>
          <div>
            {VENDOR_FEATURES.map(([t, b], i) => (
              <div
                key={t}
                className={`py-8 grid grid-cols-[60px_1fr] gap-8 items-start border-t border-ink-200 ${
                  i === VENDOR_FEATURES.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-mono text-[13px] font-bold pt-1" style={{ color: ROSE }}>
                  0{i + 1}.
                </div>
                <div>
                  <div className="font-bold text-[22px] tracking-[-0.015em]">{t}</div>
                  <div className="text-[15px] text-ink-600 leading-[1.55] mt-2 font-light">{b}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="eyebrow" style={{ color: ROSE }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Three audiences. <span className="text-ink-500">One shared celebration.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {AUDIENCES.map(([t, b]) => (
              <div
                key={t}
                className="p-8 bg-white border border-ink-200 rounded-[18px]"
              >
                <div className="font-bold text-[22px] tracking-[-0.01em]">{t}</div>
                <div className="text-sm text-ink-600 leading-[1.55] mt-2.5 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, ${ROSE} 0%, #9A3759 100%)` }}
      >
        <div aria-hidden className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen" />
        <Container className="relative text-center">
          <div className="eyebrow text-white/75">Start planning</div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto text-white font-light tracking-[-0.03em]">
            Trust, structure, and convenience.{" "}
            <span className="italic" style={{ color: ROSE_LIGHT }}>
              This market has long needed them.
            </span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.wedding.co.tz"
              className="inline-flex items-center bg-white font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ color: ROSE }}
            >
              Visit wedding.co.tz →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Become a vendor
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
