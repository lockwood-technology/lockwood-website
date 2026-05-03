"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section className="py-20 lg:pt-[120px] lg:pb-16">
      <Container>
        <div className="flex justify-between items-end gap-10 mb-10 lg:mb-14 flex-wrap">
          <div>
            <div className="eyebrow">What we do</div>
            <h2 className="h-section mt-3.5 max-w-[680px] text-ink-950">
              Eight practice areas. <span className="text-ink-500">One delivery standard.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-[15px] px-5 py-3.5 rounded-[14px] transition-all min-h-11"
          >
            All services →
          </Link>
        </div>

        {/* Mobile: simple stacked cards. Desktop (lg+): interactive split. */}
        <div className="lg:hidden grid grid-cols-1 gap-3">
          {services.map((svc) => (
            <Link
              key={svc.key}
              href={`/services#${svc.key}`}
              className="block p-5 rounded-2xl border border-ink-200 bg-white active:bg-ink-50 transition-colors min-h-11"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[13px] font-semibold text-primary-500 shrink-0">
                  {svc.n}
                </span>
                <span className="font-bold text-base tracking-tight text-ink-950 flex-1">
                  {svc.title}
                </span>
                <span className="text-primary-500 text-lg shrink-0">→</span>
              </div>
              <p className="mt-3 text-sm leading-[1.55] text-ink-600">{svc.body}</p>
              <div className="flex gap-1.5 flex-wrap mt-4">
                {svc.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold py-1 px-2.5 rounded-full bg-surface-lilac text-primary-500"
                  >
                    × {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
          <Link
            href="/services"
            className="mt-3 inline-flex items-center justify-center bg-white text-ink-950 border border-ink-200 active:bg-ink-50 font-semibold text-[15px] px-5 py-3.5 rounded-[14px] min-h-11"
          >
            All services →
          </Link>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] border border-ink-200 rounded-3xl overflow-hidden bg-white">
          <div className="border-b lg:border-b-0 lg:border-r border-ink-200">
            {services.map((svc, i) => (
              <button
                key={svc.key}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center gap-5 px-7 py-[22px] border-b border-ink-200 last:border-b-0 text-left transition-colors ${
                  active === i ? "bg-ink-50" : ""
                }`}
              >
                <span
                  className={`font-mono text-[13px] font-semibold ${
                    active === i ? "text-primary-500" : "text-ink-500"
                  }`}
                >
                  {svc.n}
                </span>
                <span
                  className={`font-bold text-lg tracking-tight ${
                    active === i ? "text-ink-950" : "text-ink-700"
                  }`}
                >
                  {svc.title}
                </span>
                <span className="flex-1" />
                {active === i && <span className="text-primary-500 text-lg">→</span>}
              </button>
            ))}
          </div>

          <div className="px-12 py-12 flex flex-col">
            <div className="font-mono text-[13px] font-semibold text-primary-500">
              {s.n} · {s.title.toUpperCase()}
            </div>
            <h3 className="display-md mt-4" style={{ fontSize: "clamp(28px, 3.2vw, 40px)" }}>
              {s.title}
            </h3>
            <p className="text-[17px] leading-[1.6] text-ink-600 mt-5 max-w-[520px]">{s.body}</p>
            <div className="flex gap-2 flex-wrap mt-6">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold py-1.5 px-3 rounded-full bg-surface-lilac text-primary-500"
                >
                  × {t}
                </span>
              ))}
            </div>
            <div className="flex-1" />
            <Link
              href="/services"
              className="mt-10 text-[15px] font-semibold text-primary-500 hover:text-primary-600"
            >
              Explore all 8 practice areas →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
