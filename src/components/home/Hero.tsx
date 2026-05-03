import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import DataFlowVisual from "@/components/visuals/DataFlowVisual";

export default function Hero() {
  return (
    <section className="pt-6 pb-20 lg:pt-10 lg:pb-24 relative">
      <Container className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="eyebrow">Digital Solutions for Africa</div>
          <h1 className="display-xl mt-5 text-ink-950">
            Transforming data,{" "}
            <span className="text-primary-500">powering decisions.</span>
          </h1>
          <p className="text-xl leading-[1.55] text-ink-600 mt-7 max-w-[540px]">
            A Tanzanian software & digital solutions company delivering custom systems, mobile apps, payment platforms, and branded digital products across East Africa, built for outcomes, not just outputs.
          </p>
          <div className="flex gap-3 mt-9 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Let&apos;s build together →
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              See our work
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-10 max-w-md">
            {[
              ["30+", "Projects delivered"],
              ["2", "Markets, one partnership"],
              ["8", "Practice areas"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-extrabold text-3xl sm:text-4xl tracking-tight leading-none text-ink-950">
                  {n}
                </div>
                <div className="text-[10px] sm:text-[11px] text-ink-500 mt-1.5 uppercase tracking-[0.06em] sm:tracking-[0.08em] font-semibold leading-snug">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block relative min-h-[520px]">
          {/* Back card — analytics */}
          <div className="absolute right-0 top-0 w-[84%] bg-white border border-ink-200 rounded-[22px] p-5 shadow-[0_20px_48px_rgba(17,17,17,0.12)]">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-[11px] text-ink-500 uppercase tracking-[0.08em] font-semibold">
                  Monthly transactions
                </div>
                <div className="font-extrabold text-[28px] tracking-tight mt-0.5">TSh 184.2M</div>
              </div>
              <span className="text-[11px] font-bold py-1 px-2.5 rounded-full bg-[#E8F8F1] text-[#0B6B4A]">
                ▲ 14%
              </span>
            </div>
            <div className="h-[200px]">
              <DataFlowVisual />
            </div>
          </div>

          {/* Front card — message preview */}
          <div className="absolute left-0 bottom-0 w-[66%] bg-white border border-ink-200 rounded-[20px] p-[18px] shadow-[0_20px_48px_rgba(17,17,17,0.12)]">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-[34px] h-[34px] rounded-[10px] bg-primary-500 grid place-items-center">
                <Image
                  src="/logos/lockwood-mark-negative.png"
                  width={22}
                  height={22}
                  alt=""
                  className="w-[22px] h-auto"
                />
              </div>
              <div>
                <div className="font-bold text-[13px]">Spring Campaign</div>
                <div className="text-[11px] text-ink-500">2,482 recipients · Delivered</div>
              </div>
            </div>
            <div className="bg-ink-50 rounded-xl p-3 text-[13px] leading-[1.5] text-ink-800">
              Hi Maya, your seedling kit ships Monday. Track it at lockwd.co/trk/4482.
            </div>
            <div className="mt-3.5 grid grid-cols-3 gap-2">
              {[
                ["Sent", "2,482"],
                ["Delivered", "2,412"],
                ["Clicked", "1,108"],
              ].map(([k, v]) => (
                <div key={k} className="p-2.5 bg-ink-50 rounded-[10px]">
                  <div className="text-[10px] text-ink-500 uppercase tracking-[0.06em] font-semibold">{k}</div>
                  <div className="font-bold text-base tracking-tight mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating live badge */}
          <div className="absolute right-0 bottom-6 bg-ink-900 text-white rounded-full px-4 py-2.5 text-xs font-semibold shadow-[0_20px_48px_rgba(17,17,17,0.12)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#39B54A]" />
            Live · 4 campaigns sending now
          </div>
        </div>
      </Container>
    </section>
  );
}
