import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build together. A rough idea, a fully scoped brief, or just a conversation, we're happy to start wherever you are.",
};

const CONTACTS: [string, string, string][] = [
  ["Email", "info@lockwood.co.tz", "mailto:info@lockwood.co.tz"],
  ["Phone", "+255 655 128 012", "tel:+255655128012"],
  ["Phone", "+255 684 118 011", "tel:+255684118011"],
  ["Careers", "careers@lockwood.co.tz", "mailto:careers@lockwood.co.tz"],
];

const SECTORS = [
  "Fintech",
  "Proptech",
  "Edtech",
  "Nonprofit & Social Impact",
  "IoT & Utilities",
  "Automotive & Media",
  "E-commerce & Marketplaces",
  "Communications",
];

const KICKOFFS: [string, string][] = [
  ["A clear brief", "You know what you need — share the brief, we'll respond with a scope and a number within a week."],
  ["A rough idea", "You have an outcome in mind but not a spec. We'll run a short discovery and shape it together."],
  ["A system that needs fixing", "Existing platform, integration, or payment flow that needs to work better — start here."],
  ["A partnership conversation", "You're a team or an agency looking for a delivery partner in East Africa."],
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="eyebrow">Contact</div>
              <h1 className="display-lg mt-5 font-light tracking-[-0.03em] leading-[1.05] text-ink-950">
                Let&apos;s build
                <br />
                <span className="text-primary-500 font-extrabold">together.</span>
              </h1>
              <p className="text-lg leading-[1.55] text-ink-700 mt-7 max-w-[520px] font-light">
                A rough idea, a fully scoped brief, or just a conversation — we&apos;re happy to start wherever you are. Most projects begin with a 30-minute call.
              </p>

              <div className="mt-10 flex flex-col gap-1">
                {CONTACTS.map(([label, value, href]) => (
                  <a
                    key={value}
                    href={href}
                    className="flex flex-col py-3.5 border-b border-ink-200"
                  >
                    <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-500">
                      {label}
                    </span>
                    <span className="text-xl text-primary-500 mt-1">{value}</span>
                  </a>
                ))}
              </div>

              <div className="mt-10 p-6 bg-ink-50 rounded-lg">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-500">
                  Headquarters
                </div>
                <div className="font-medium text-[17px] tracking-[-0.01em] text-ink-900 mt-2">
                  Sinza Lion, Dar es Salaam
                  <br />
                  Tanzania
                </div>
                <div className="text-[13px] text-ink-600 mt-2.5 font-light">
                  Kenya market served via partnership with Malsery.
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Pick your starting point */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="max-w-[720px] mb-12">
            <div className="eyebrow">Pick your starting point</div>
            <h2 className="font-light text-[32px] lg:text-[44px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-4">
              Tell us where you are — <span className="font-extrabold">we&apos;ll meet you there.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {KICKOFFS.map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-200 bg-white p-7 lg:p-8"
              >
                <h3 className="font-extrabold text-[22px] tracking-[-0.015em] text-ink-950">
                  {title}
                </h3>
                <p className="text-[15.5px] leading-[1.65] text-ink-600 mt-3 m-0">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sectors we work in */}
      <section className="py-20 lg:py-24 bg-ink-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.5fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="eyebrow">Sectors we work in</div>
              <h2 className="font-light text-[32px] lg:text-[44px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-4 max-w-[420px]">
                Currently shipping <span className="font-extrabold">across eight sectors.</span>
              </h2>
              <p className="text-base leading-[1.65] text-ink-600 mt-5 max-w-[420px] font-light">
                Not seeing yours? We probably still want to talk. Most of what we do transfers across domains.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {SECTORS.map((s) => (
                <span
                  key={s}
                  className="text-sm font-semibold py-2 px-4 rounded-full bg-white border border-ink-200 text-ink-900"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
