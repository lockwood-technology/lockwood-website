import Container from "@/components/ui/Container";

const reasons = [
  {
    n: "01",
    t: "From idea to product",
    b: "Whether you have a rough concept or a fully scoped brief, we guide the full journey from conceptualisation through launch and support.",
  },
  {
    n: "02",
    t: "Empathetic delivery",
    b: "An approach tailored to your market, context, and user base, not a one-size-fits-all methodology.",
  },
  {
    n: "03",
    t: "Outcomes, not outputs",
    b: "We measure success by business impact, not technical completion. Every engagement starts with the result in mind.",
  },
  {
    n: "04",
    t: "Quality and transparency",
    b: "Clear communication, high standards, and genuine accountability from kickoff to handover.",
  },
  {
    n: "05",
    t: "Local market mastery",
    b: "Deep understanding of East African markets, user behaviours, infrastructure realities, and regulatory environments.",
  },
];

export default function WhyLockwood() {
  return (
    <section className="py-20 lg:py-[120px] bg-ink-50">
      <Container className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-20">
        <div className="lg:sticky lg:top-[100px] self-start">
          <div className="eyebrow">Why Lockwood</div>
          <h2 className="h-section mt-3.5 text-ink-950">
            Not an enterprise firm.
            <br />
            Not a freelancer.
            <br />
            <span className="text-primary-500">A bold, solutions-driven brand.</span>
          </h2>
          <p className="text-[17px] leading-[1.6] text-ink-600 mt-6 max-w-[420px]">
            Enterprise firms are expensive and slow. Freelancers lack reliability and process. We sit in between, with the quality of one and the agility of the other.
          </p>
        </div>
        <div className="flex flex-col">
          {reasons.map((r, i) => (
            <div
              key={r.n}
              className={`py-7 grid grid-cols-[60px_1fr] gap-6 ${
                i < reasons.length - 1 ? "border-b border-ink-200" : ""
              }`}
            >
              <div className="font-mono text-[13px] font-semibold text-primary-500 mt-1.5">
                {r.n}
              </div>
              <div>
                <h3 className="font-bold text-2xl tracking-[-0.015em] m-0 text-ink-950">{r.t}</h3>
                <p className="text-base leading-[1.6] text-ink-600 mt-2.5 max-w-[540px]">{r.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
