import Link from "next/link";
import Container from "@/components/ui/Container";
import Icons from "@/components/ui/Icons";
import {
  products,
  productById,
  productChips,
  heroProductIds,
  bottomHeroProductIds,
} from "@/data/products";

type Product = NonNullable<ReturnType<typeof productById>>;

function HeroCard({ p }: { p: Product }) {
  return (
    <Link
      href={p.href}
      className="block rounded-[28px] p-7 sm:p-11 relative overflow-hidden min-h-[300px] sm:min-h-[380px] text-white transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: p.color }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pattern-mark mix-blend-screen"
      />
      <div className="relative flex flex-col h-full">
        <div className="flex justify-between items-baseline">
          <div className="font-mono text-xs font-semibold tracking-[0.08em] uppercase text-white/65">
            {p.category}
          </div>
          <div className="font-mono text-[11px] text-white/55">{p.url}</div>
        </div>
        <h3 className="font-extrabold text-[44px] sm:text-[56px] tracking-[-0.03em] leading-none mt-4.5">
          {p.name}
        </h3>
        <div className="text-lg font-medium text-white/90 mt-2.5">{p.tagline}</div>
        <p className="text-[15px] leading-[1.55] mt-4.5 mb-6 text-white/80 max-w-[460px]">
          {p.blurb}
        </p>
        <div className="flex gap-1.5 flex-wrap mb-6">
          {(productChips[p.id] || []).map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold py-1 px-2.5 rounded-full bg-white/15 text-white"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="text-sm font-semibold">Explore {p.name} →</div>
      </div>
    </Link>
  );
}

function CompactCard({ p }: { p: Product }) {
  return (
    <Link
      href={p.href}
      className="block rounded-[20px] p-7 relative overflow-hidden min-h-[220px] text-white transition-transform duration-200 hover:-translate-y-1"
      style={{ backgroundColor: p.color }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pattern-mark mix-blend-screen"
      />
      <div className="relative flex flex-col h-full">
        <div className="flex justify-between items-start">
          <div className="w-9 h-9 rounded-[10px] bg-white/15 grid place-items-center">
            <Icons name={p.icon} className="w-4.5 h-4.5" />
          </div>
          <div className="font-mono text-[10px] text-white/55 uppercase tracking-[0.08em] font-semibold">
            {p.category}
          </div>
        </div>
        <h3 className="font-extrabold text-3xl tracking-[-0.025em] leading-none mt-7">
          {p.name}
        </h3>
        <div className="text-sm text-white/85 mt-2 leading-[1.4]">{p.tagline}</div>
        <div className="flex-1" />
        <div className="mt-5 pt-4 border-t border-white/15 flex justify-between items-center">
          <span className="font-mono text-[11px] text-white/60">{p.url}</span>
          <span className="text-[13px] font-semibold">Explore →</span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsShowcase() {
  const allHeroIds = new Set<string>([...heroProductIds, ...bottomHeroProductIds]);
  const topHeroes = heroProductIds
    .map((id) => productById(id))
    .filter(Boolean) as Product[];
  const bottomHeroes = bottomHeroProductIds
    .map((id) => productById(id))
    .filter(Boolean) as Product[];
  const compact = products.filter((p) => !allHeroIds.has(p.id));

  return (
    <section className="py-16">
      <Container>
        <div className="mb-14 flex justify-between items-end flex-wrap gap-6">
          <div>
            <div className="eyebrow">Our products</div>
            <h2 className="h-section mt-3.5 max-w-[820px] text-ink-950">
              Twelve proprietary platforms,{" "}
              <span className="text-ink-500">running in production every day.</span>
            </h2>
          </div>
          <div className="font-mono text-[11px] tracking-[0.12em] text-ink-500 uppercase">
            12 / by Lockwood
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {topHeroes.map((p) => (
            <HeroCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {compact.map((p) => (
            <CompactCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {bottomHeroes.map((p) => (
            <HeroCard key={p.id} p={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
