import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HomeCTA() {
  return (
    <section className="pb-20 lg:pb-[120px]">
      <Container>
        <div className="bg-primary-500 text-white rounded-[32px] py-12 px-7 sm:py-20 sm:px-16 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] pattern-mark mix-blend-screen"
          />
          <div className="relative flex gap-12 items-center flex-wrap justify-between">
            <div className="max-w-[640px]">
              <div className="eyebrow text-white/75">Let&apos;s build together</div>
              <h2 className="font-extrabold leading-[1.02] tracking-[-0.03em] mt-4 text-[clamp(36px,5.4vw,64px)]">
                Got a rough concept? A fully scoped brief?{" "}
                <span className="opacity-75">Either way, we&apos;ll take it from here.</span>
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-primary-500 hover:bg-ink-50 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Start a project →
              </Link>
              <a
                href="mailto:info@lockwood.co.tz"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                info@lockwood.co.tz
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
