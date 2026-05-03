import Container from "@/components/ui/Container";

const values: [string, string][] = [
  ["People and purpose first", "Every solution starts with understanding the people it serves."],
  [
    "Quality without compromise",
    "High standards of design, engineering, and delivery, regardless of project size.",
  ],
  [
    "Innovation with impact",
    "Technology applied not for its own sake, but to generate real improvement.",
  ],
];

export default function ValuesStrip() {
  return (
    <section className="py-20 lg:py-[120px]">
      <Container>
        <div className="eyebrow">Core values</div>
        <h2 className="h-section mt-3.5 max-w-[860px] text-ink-950">
          Simplify, connect, <span className="text-primary-500">and improve lives.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t border-b border-ink-200">
          {values.map(([t, b], i) => (
            <div
              key={t}
              className={`py-9 pr-8 ${i > 0 ? "md:pl-8" : ""} ${
                i < values.length - 1 ? "md:border-r border-ink-200" : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-primary-500 text-lg font-bold">×</span>
                <h3 className="font-bold text-[22px] tracking-[-0.015em] m-0 text-ink-950">{t}</h3>
              </div>
              <p className="text-[15.5px] leading-[1.6] text-ink-600 mt-3.5 pl-[30px] max-w-[360px]">
                {b}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
