import Container from "@/components/ui/Container";
import EastAfricaMap from "@/components/visuals/EastAfricaMap";

export default function RegionSection() {
  return (
    <section className="bg-[#0A0A0C] text-white py-20 lg:py-[120px] relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06] pattern-mark" />
      <Container className="relative grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="eyebrow text-primary-500">East Africa · Active</div>
          <h2 className="h-section mt-4 text-white">
            Headquartered in Tanzania.
            <br />
            <span className="text-white/55">Delivering across the region.</span>
          </h2>
          <p className="text-lg leading-[1.6] text-white/70 mt-6 max-w-[520px]">
            Through a strategic partnership with Malsery, we&apos;re active in Kenya, enabling project delivery with deep local context and genuine cross-border capability. A remote-capable delivery model positions us for ongoing expansion across Uganda, Rwanda, and Mozambique.
          </p>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[560px]">
            {[
              ["Tanzania", "Headquarters · Dar es Salaam"],
              ["Kenya", "Active · via Malsery partnership"],
              ["East Africa", "Uganda · Rwanda · Mozambique"],
            ].map(([t, s]) => (
              <div
                key={t}
                className="px-5 py-4.5 bg-white/[0.04] border border-white/10 rounded-[14px]"
              >
                <div className="font-bold text-[17px] tracking-tight">{t}</div>
                <div className="text-xs text-white/55 mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <EastAfricaMap />
        </div>
      </Container>
    </section>
  );
}
