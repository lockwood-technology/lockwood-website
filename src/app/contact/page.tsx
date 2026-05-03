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

export default function ContactPage() {
  return (
    <section className="pt-24 pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <div className="eyebrow">Contact</div>
            <h1 className="display-lg mt-5 font-light tracking-[-0.03em] text-ink-950">
              Let&apos;s build
              <br />
              <span className="text-primary-500">together.</span>
            </h1>
            <p className="text-lg leading-[1.55] text-ink-600 mt-6 max-w-[440px] font-light">
              A rough idea, a fully scoped brief, or just a conversation, we&apos;re happy to start wherever you are.
            </p>

            <div className="mt-12 flex flex-col gap-6">
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
  );
}
