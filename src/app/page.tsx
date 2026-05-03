import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import RegionSection from "@/components/home/RegionSection";
import WhyLockwood from "@/components/home/WhyLockwood";
import ValuesStrip from "@/components/home/ValuesStrip";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesPreview />
      <ProductsShowcase />
      <CaseStudiesPreview />
      <RegionSection />
      <WhyLockwood />
      <ValuesStrip />
      <HomeCTA />
    </>
  );
}
