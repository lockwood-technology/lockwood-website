import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import RegionSection from "@/components/home/RegionSection";
import WhyLockwood from "@/components/home/WhyLockwood";
import ValuesStrip from "@/components/home/ValuesStrip";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lockwood Technology Ltd is a Tanzanian software and digital solutions company delivering impactful technology across East Africa since 2016.",
};

const milestones: [string, string, string][] = [
  ["2016", "Founded", "Lockwood Technology Ltd founded in Dar es Salaam, Tanzania."],
  [
    "2019",
    "First 10 projects",
    "Established core practice areas: platform dev, e-commerce, payments.",
  ],
  [
    "2022",
    "Malipopay launches",
    "Flagship fintech platform goes live, mobile money, cards, EFD-ready invoicing.",
  ],
  [
    "2023",
    "Send launches",
    "Business messaging platform, bulk SMS, WhatsApp, chatbots, and workflows, goes live for SMEs and enterprise.",
  ],
  [
    "2024",
    "Kenya partnership",
    "Strategic partnership with Malsery opens active delivery in the Kenyan market.",
  ],
  [
    "2025",
    "30+ projects milestone",
    "Casandra, MAJIIS middleware, and GVA-Odoo integration all shipped.",
  ],
];

const facts: [string, string][] = [
  ["Legal Name", "Lockwood Technology Ltd"],
  ["Trading Name", "Lockwood"],
  ["Year Founded", "2016"],
  ["Headquarters", "Sinza Lion, Dar es Salaam, Tanzania"],
  ["Markets Served", "Tanzania · Kenya · East Africa"],
  ["Projects Delivered", "30+"],
  ["Proprietary Products", "8 platforms"],
  ["Fintech Product", "malipopay.co.tz"],
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24">
        <Container>
          <div className="eyebrow">About Lockwood</div>
          <h1 className="display-xl mt-5 max-w-[1100px] text-ink-950 font-light">
            Outcomes over services.
            <br />
            <span className="text-primary-500">Partnership over transactions.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-[1.5] text-ink-600 font-light">
            Lockwood Technology Ltd is a Tanzanian software and digital solutions company delivering impactful technology across East Africa. Founded in 2016 and headquartered in Sinza Lion, Dar es Salaam, we build custom systems, mobile applications, e-commerce platforms, payment solutions, and digital products that help organisations operate more efficiently and reach more people.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                eb: "Mission",
                t: "To empower organisations through digital solutions that simplify, connect, and improve lives.",
              },
              {
                eb: "Vision",
                t: "To be East Africa's most trusted digital partner for innovation and transformation.",
              },
            ].map((c) => (
              <div
                key={c.eb}
                className="bg-white border border-ink-200 rounded-lg p-10 shadow-[0_15px_35px_rgba(23,23,23,0.08)]"
              >
                <div className="eyebrow">{c.eb}</div>
                <p className="font-light text-[28px] leading-[1.2] tracking-[-0.02em] mt-4 text-ink-900">
                  {c.t}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ValuesStrip />

      <section className="py-24">
        <Container>
          <div className="eyebrow">Story</div>
          <h2 className="h-section font-light mt-3.5 max-w-[840px] tracking-[-0.02em] text-ink-950">
            From bootstrapped studio to East Africa&apos;s digital delivery partner.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
            {milestones.map((m, i) => (
              <div key={m[0]} className="contents">
                <div className="font-light text-[40px] tracking-[-0.025em] text-primary-500 pt-1">
                  {m[0]}
                </div>
                <div
                  className={`pt-3 ${
                    i < milestones.length - 1
                      ? "pb-8 border-b border-ink-100"
                      : ""
                  }`}
                >
                  <div className="font-medium text-[22px] tracking-[-0.015em] text-ink-900">
                    {m[1]}
                  </div>
                  <p className="text-base leading-[1.6] text-ink-600 mt-2 max-w-[620px] font-light">
                    {m[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <RegionSection />

      <section className="py-24 bg-ink-50">
        <Container>
          <div className="eyebrow">Quick facts</div>
          <h2 className="h-section font-light mt-3.5 tracking-[-0.02em] text-ink-950">
            The short version.
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100 rounded-lg overflow-hidden">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500">
                  {k}
                </div>
                <div className="font-medium text-[17px] tracking-[-0.01em] text-ink-900 mt-2 leading-[1.3]">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyLockwood />
      <HomeCTA />
    </>
  );
}
