import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import HomeCTA from "@/components/home/HomeCTA";
import Icons from "@/components/ui/Icons";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Twelve proprietary Lockwood platforms built and used across East Africa — payments, messaging, marketplaces, savings, music, and more.",
};

const CATEGORIES = [
  "All",
  "Payments",
  "Communications",
  "Property",
  "Events",
  "Community",
  "Utilities",
];

export default function ProductsListingPage() {
  return (
    <>
      <PageHero
        headline="Practical platforms for everyday needs."
        intro="Lockwood owns and operates a growing ecosystem of digital products for consumers, communities, businesses, and organisations across East Africa."
        ctas={[
          { label: "Explore products ↗", href: "#products", variant: "primary" },
          { label: "Start a project ↗", href: "/contact", variant: "outline" },
        ]}
        heroImage="/hero/o-mark-products.png"
      />

      <section className="py-12 lg:py-16 bg-white">
        <Container>
          <div className="text-center max-w-[780px] mx-auto mb-10">
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] text-ink-950">
              Built here. <span className="font-extrabold">Used across East Africa.</span>
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.6] text-ink-600 mt-5 font-light">
              Find the platform that fits your need.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={
                  i === 0
                    ? "text-xs font-semibold py-1.5 px-3.5 rounded-full bg-primary-500 text-white"
                    : "text-xs font-semibold py-1.5 px-3.5 rounded-full bg-ink-50 text-ink-700 border border-ink-100"
                }
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group flex flex-col rounded-3xl border border-ink-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    <Icons name={p.icon} className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-500 font-semibold">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-extrabold text-[24px] tracking-[-0.02em] leading-none mt-6 text-ink-950">
                  {p.name}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-ink-600 mt-3 line-clamp-3">
                  {p.tagline}
                </p>
                <div className="flex-1" />
                <div className="mt-6 pt-5 border-t border-ink-100 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-500">{p.url}</span>
                  <span className="text-primary-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </>
  );
}
