import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";

const MILESTONES: Array<{ year: string; title: string; body: string }> = [
  {
    year: "2016",
    title: "Founded",
    body: "Lockwood Technology Ltd founded in Dar es Salaam, Tanzania — a bootstrapped studio with a focus on practical, well-engineered products.",
  },
  {
    year: "2019",
    title: "First 10 projects",
    body: "Core practice areas take shape — platform development, e-commerce, payments. Repeat-client engagements anchor the year.",
  },
  {
    year: "2022",
    title: "Malipopay launches",
    body: "Flagship fintech platform goes live — mobile money, cards, and EFD-ready invoicing in one merchant-friendly product.",
  },
  {
    year: "2023",
    title: "Send launches",
    body: "Business messaging platform launches for SMEs and enterprise — bulk SMS, WhatsApp, chatbots, and workflows in a single API.",
  },
  {
    year: "2024",
    title: "Kenya partnership",
    body: "Strategic partnership with Malsery opens active delivery in the Kenyan market — extended reach, single point of accountability.",
  },
  {
    year: "2025",
    title: "30+ projects milestone",
    body: "Casandra, Dirent, Grant Link, STEM Hub, Imara, Maiflow, and Mchezo all ship in the same year — alongside the launch of the new marketing site.",
  },
];

export default function StoryTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <AnimateIn>
          <div className="max-w-[760px] mb-16 lg:mb-20">
            <div className="text-xs font-bold tracking-[0.16em] uppercase font-mono text-primary-500">
              Story
            </div>
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-5">
              From bootstrapped studio to East Africa&apos;s{" "}
              <span className="font-extrabold">digital delivery partner.</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="relative max-w-[920px]">
          {/* Continuous vertical rule down the spine */}
          <div
            aria-hidden
            className="absolute left-[14px] md:left-[100px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/40 via-primary-500/15 to-transparent"
          />

          <ul className="list-none p-0 m-0 flex flex-col gap-10 lg:gap-14">
            {MILESTONES.map((m, i) => (
              <li key={m.year} className="relative">
                <AnimateIn delay={i * 0.08}>
                  <div className="grid grid-cols-[40px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start">
                    {/* Year + dot column */}
                    <div className="relative pt-1.5 md:pt-2">
                      <span
                        aria-hidden
                        className="absolute left-[7px] md:left-[93px] top-3.5 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-white shadow-[0_0_0_2px_rgba(31,73,255,0.18)]"
                      />
                      <div className="hidden md:block font-light text-[40px] leading-none tracking-[-0.025em] text-primary-500 transition-transform duration-300 group-hover:scale-105">
                        {m.year}
                      </div>
                    </div>
                    {/* Body card */}
                    <div className="md:pl-2">
                      <div className="md:hidden text-xs font-bold tracking-[0.16em] uppercase font-mono text-primary-500 mb-2">
                        {m.year}
                      </div>
                      <div className="rounded-2xl border border-ink-100 bg-white p-6 lg:p-8 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(17,17,17,0.05)] hover:border-ink-200">
                        <h3 className="font-extrabold text-[22px] lg:text-[24px] tracking-[-0.015em] text-ink-950">
                          {m.title}
                        </h3>
                        <p className="text-[15.5px] lg:text-[16px] leading-[1.65] text-ink-600 mt-3 m-0 font-light">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
