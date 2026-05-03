import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Product brand system",
  description:
    "One family, twelve products. Each Lockwood product carries its own symbolic mark and color, locked up with a shared 'by Lockwood' endorsement.",
};

interface LogoEntry {
  id: string;
  name: string;
  domain: string;
  category: string;
  description: string;
  primary: string;
}

const PRODUCTS: LogoEntry[] = [
  { id: "malipopay", name: "Malipopay", domain: "malipopay.co.tz", category: "FinTech", primary: "#1F49FF", description: "Mobile money + card + bank payments. Indigo gradient. Card glyph drawn as a stacked payment slip." },
  { id: "wedding", name: "Wedding", domain: "wedding.co.tz", category: "Event tech", primary: "#C2476E", description: "Event and wedding marketplace. Rose gradient. Interlocking rings mark." },
  { id: "send", name: "Send", domain: "send.co.tz", category: "Messaging platform", primary: "#0EA789", description: "SMS, WhatsApp & email API. Signal teal gradient. Stroke-only paper-plane mark." },
  { id: "link", name: "Link", domain: "link.co.tz", category: "Link management", primary: "#0B5FFF", description: "Short links and QR. Cobalt gradient. Chain-link motif." },
  { id: "housing", name: "Housing", domain: "housing.co.tz", category: "Real estate", primary: "#1B4332", description: "Property listings and rentals. Forest gradient. House silhouette with gold roof accent." },
  { id: "localhost", name: "Localhost", domain: "localhost.co.tz", category: "Hosting & cloud", primary: "#4A6CF7", description: "Tanzania-built hosting. Periwinkle gradient. Stacked server racks with mint status indicators." },
  { id: "investors", name: "Investors", domain: "investors.co.tz", category: "WealthTech", primary: "#0D1B2A", description: "Investment & wealth platform. Midnight gradient. Upward chart line in lime green." },
  { id: "kikaba", name: "Kikaba", domain: "kikaba.app", category: "VICOBA / SACCOS", primary: "#F0762E", description: "Group savings, recurring chamas. Orange gradient. Concentric rings glyph." },
  { id: "drivers", name: "Drivers", domain: "drivers.co.tz", category: "Automotive", primary: "#0A1628", description: "Vehicle service tracker. Navy gradient. Speedometer dial with electric-orange needle." },
  { id: "mchango", name: "Mchango", domain: "mchango.co.tz", category: "Community fundraising", primary: "#E63946", description: "Harambee and group fundraising. Coral gradient. Heart with amber pulse." },
  { id: "fungulakumi", name: "FungulaKumi", domain: "fungulakumi.co.tz", category: "Faith tech", primary: "#4A1C6F", description: "Digital sadaka and tithe. Royal purple gradient. Shield with gold cross." },
  { id: "mziki", name: "Mziki", domain: "mziki.co.tz", category: "Music", primary: "#0A0A0A", description: "Tanzania's Piano City. Black gradient. Audio waveform glyph in neon green." },
];

export default function ProductLogosPage() {
  return (
    <main className="bg-ink-50">
      <Container className="py-16 sm:py-20">
        <div className="eyebrow">Product brand system</div>
        <h1 className="h-section mt-3.5 mb-4 tracking-[-0.035em] font-light text-ink-950">
          One family, <span className="text-primary-500">twelve products.</span>
        </h1>
        <p className="text-[17px] leading-[1.6] text-ink-600 max-w-[680px] mb-12">
          Each Lockwood product carries its own symbolic mark and brand color, locked up with a shared <em>&ldquo;by Lockwood&rdquo;</em> endorsement. Consistent in form, distinct in hue, so every surface reads as one family while each product owns its identity.
        </p>

        {/* 12-product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-ink-200 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={`/products/${p.id}.svg`}
                  alt={`${p.name} by Lockwood`}
                  width={64}
                  height={64}
                  className="w-16 h-16 shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-lg tracking-[-0.01em] text-ink-950">{p.name}</div>
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 mt-1"
                    style={{ letterSpacing: "0.16em" }}
                  >
                    BY LOCKWOOD
                  </div>
                  <div className="text-xs text-ink-500 mt-2">
                    {p.category} · {p.domain}
                  </div>
                </div>
              </div>
              <div className="text-[13px] text-ink-500 leading-[1.55]">{p.description}</div>
              <div className="flex items-center gap-2 mt-auto pt-2">
                <span
                  className="w-4 h-4 rounded"
                  style={{ background: p.primary }}
                  aria-hidden
                />
                <span className="font-mono text-[11px] text-ink-500">{p.primary}</span>
              </div>
            </div>
          ))}
        </div>

        {/* System rules */}
        <div
          className="mt-16 p-9 rounded-3xl text-white"
          style={{ background: "#061b31" }}
        >
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/55">
            System rules
          </div>
          <h2 className="font-light text-[28px] tracking-[-0.02em] mt-3 leading-tight">
            One identity system. <span className="text-white/55">Twelve hues. Zero exceptions.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              ["Rounded 16px mark", "64×64 tile, 16px radius, 135° linear gradient from primary to its darker stop."],
              ["White glyph", "3 to 3.5px stroke, rounded joins. Always white on the colored tile, never tinted."],
              ["Shared endorsement", '"BY LOCKWOOD", 11px Manrope, 0.16em tracking, neutral gray. Bottom or right of the mark in lockups.'],
              ["Built for East Africa", "Family tagline across every product surface. Manrope display + body, system mono for technical text."],
            ].map(([t, b]) => (
              <div key={t}>
                <div className="font-bold text-[17px] tracking-[-0.02em]">{t}</div>
                <div className="text-[13px] text-white/70 mt-2 leading-[1.6]">{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Color identity table */}
        <div className="mt-10 bg-white border border-ink-200 rounded-3xl p-7 sm:p-9">
          <div className="eyebrow">Color identity</div>
          <h2 className="font-light text-[28px] tracking-[-0.02em] mt-3 leading-tight text-ink-950">
            Twelve primaries. <span className="text-ink-500">Each tells the product story.</span>
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl overflow-hidden border border-ink-200"
              >
                <div className="h-20" style={{ background: p.primary }} />
                <div className="p-3">
                  <div className="font-bold text-sm text-ink-950">{p.name}</div>
                  <div className="font-mono text-[10px] text-ink-500 mt-0.5">{p.primary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Icons-only strip */}
        <div className="mt-10 bg-white border border-ink-200 rounded-3xl p-9 text-center">
          <div className="eyebrow">Marks only</div>
          <p className="text-sm text-ink-500 mt-3 mb-6 max-w-md mx-auto">
            The full mark family in one row. Use this strip on internal docs, sponsorship walls, and "powered by" footers.
          </p>
          <div className="overflow-x-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/icons-only.svg"
              alt="Twelve Lockwood product marks"
              className="h-20 w-auto mx-auto"
              style={{ minWidth: 1080 }}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
