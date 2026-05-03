import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the software East Africa runs on. We're a small, senior-heavy team delivering high-stakes systems for organisations across Tanzania and Kenya.",
};

const ROLES = [
  { team: "Engineering", title: "Senior Full-stack Engineer", loc: "Dar es Salaam · Hybrid", type: "Full-time" },
  { team: "Engineering", title: "Mobile Engineer (Flutter / React Native)", loc: "Remote · East Africa", type: "Full-time" },
  { team: "Engineering", title: "Payments Integration Engineer", loc: "Dar es Salaam", type: "Full-time" },
  { team: "Design", title: "Product Designer", loc: "Dar es Salaam · Hybrid", type: "Full-time" },
  { team: "Design", title: "Brand & Visual Designer", loc: "Remote · East Africa", type: "Contract" },
  { team: "Delivery", title: "Project Manager", loc: "Dar es Salaam", type: "Full-time" },
  { team: "Growth", title: "Digital Marketing Lead", loc: "Nairobi (via Malsery)", type: "Full-time" },
];

const PRINCIPLES: [string, string][] = [
  ["People and purpose first", "We start every engagement with the people it serves and the outcomes they need. We hire people who think the same way."],
  ["Outcomes, not outputs", "We don't measure success in tickets shipped. We measure it in business impact for our clients."],
  ["Quality without compromise", "Small project or enterprise engagement, the standard is the same. We ship work we're proud to sign."],
  ["Context over process", "We work with teams across East Africa. The work reflects the market, the user, and the moment, not a one-size-fits-all playbook."],
];

const BENEFITS: [string, string][] = [
  ["Competitive salary", "Benchmarked against regional senior tech. Reviewed annually."],
  ["Hybrid or remote", "Work from Dar, Nairobi, or wherever your brain works best."],
  ["Real ownership", "Small teams mean your work ships and ships fast. No ticket purgatory."],
  ["Learning budget", "Conferences, courses, books, invest in the skills that compound."],
  ["Modern tooling", "The best IDE, the best laptop, the best payment rails to test against."],
  ["Regional impact", "Your work gets used by real people across East Africa. Every day."],
];

export default function CareersPage() {
  const teams = Array.from(new Set(ROLES.map((r) => r.team)));

  return (
    <>
      <section className="pt-24 pb-16">
        <Container>
          <div className="eyebrow">Careers at Lockwood</div>
          <h1 className="display-xl mt-5 max-w-[1100px] font-light tracking-[-0.035em] text-ink-950">
            Build the software
            <br />
            <span className="text-primary-500">East Africa runs on.</span>
          </h1>
          <p className="text-xl leading-[1.5] text-ink-600 mt-8 max-w-[680px] font-light">
            We&apos;re a small, senior-heavy team delivering high-stakes systems for organisations across Tanzania and Kenya. If you&apos;re looking for meaningful problems, clean code, and real ownership, we should talk.
          </p>
          <div className="mt-9 flex gap-3 flex-wrap">
            <a
              href="#openings"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              See open roles →
            </a>
            <a
              href="mailto:careers@lockwood.co.tz"
              className="inline-flex items-center bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              careers@lockwood.co.tz
            </a>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="eyebrow">How we work</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.02em] max-w-[820px] text-ink-950">
            Four ideas we won&apos;t compromise on.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PRINCIPLES.map(([t, b], i) => (
              <div key={t} className="bg-white border border-ink-200 rounded-lg p-8">
                <div className="font-mono text-[13px] text-primary-500 font-semibold">
                  0{i + 1}
                </div>
                <h3 className="font-medium text-2xl tracking-[-0.015em] mt-3 text-ink-900">{t}</h3>
                <p className="text-base leading-[1.6] text-ink-600 mt-3 font-light">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-ink-50">
        <Container>
          <div className="eyebrow">What we offer</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.02em] text-ink-950">
            Perks that actually matter.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map(([t, b]) => (
              <div key={t}>
                <div className="w-9 h-9 rounded-[10px] bg-primary-500 grid place-items-center text-white font-mono text-sm font-bold">
                  ×
                </div>
                <h3 className="font-medium text-[19px] tracking-[-0.01em] mt-4 text-ink-900">{t}</h3>
                <p className="text-[15px] leading-[1.6] text-ink-600 mt-2 font-light">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="openings" className="py-24">
        <Container>
          <div className="eyebrow">Open roles</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.02em] text-ink-950">
            We&apos;re hiring across {ROLES.length} roles.
          </h2>
          <div className="mt-10 space-y-8">
            {teams.map((team) => (
              <div key={team}>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-500 mb-3">
                  {team}
                </div>
                <div className="border border-ink-200 rounded-lg overflow-hidden bg-white">
                  {ROLES.filter((r) => r.team === team).map((r, i, arr) => (
                    <a
                      key={r.title}
                      href="#"
                      className={`grid grid-cols-1 md:grid-cols-[2fr_1.2fr_0.7fr_60px] px-6 py-5 items-center gap-4 hover:bg-ink-50 transition-colors ${
                        i < arr.length - 1 ? "border-b border-ink-200" : ""
                      }`}
                    >
                      <span className="font-medium text-lg tracking-[-0.01em] text-ink-900">
                        {r.title}
                      </span>
                      <span className="text-ink-600 text-sm">{r.loc}</span>
                      <span className="text-xs font-semibold text-primary-500 px-2.5 py-1 bg-surface-lilac rounded justify-self-start">
                        {r.type}
                      </span>
                      <span className="text-right text-primary-500 text-lg">→</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 px-10 py-8 bg-ink-50 rounded-lg flex gap-6 items-center flex-wrap justify-between">
            <div>
              <div className="font-medium text-xl tracking-[-0.01em] text-ink-900">
                Don&apos;t see your role?
              </div>
              <p className="text-[15px] text-ink-600 mt-1.5 font-light">
                We&apos;re always keen to hear from exceptional builders. Send us a note.
              </p>
            </div>
            <a
              href="mailto:careers@lockwood.co.tz"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-[15px] px-5 py-3 rounded-[14px] transition-all"
            >
              Get in touch →
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
