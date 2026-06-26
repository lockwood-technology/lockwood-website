import PageHero from "@/components/ui/PageHero";

export default function Hero() {
  return (
    <PageHero
      headline="Building digital products for how Africa works."
      intro="Lockwood builds and operates digital products for everyday use, while helping individuals and organisations design, build, manage, market, and optimise digital systems."
      ctas={[
        { label: "Explore products ↗", href: "/products", variant: "primary" },
        { label: "Start a project ↗", href: "/contact", variant: "outline" },
      ]}
      heroImage="/hero/o-mark-home.png"
    />
  );
}
