import Link from "next/link";
import Image from "next/image";

const cols: { title: string; items: [string, string][] }[] = [
  {
    title: "What we do",
    items: [
      ["Platform Development", "/services"],
      ["E-Commerce Solutions", "/services"],
      ["Payment Gateways", "/services"],
      ["UI/UX Design", "/services"],
      ["Branding", "/services"],
      ["Digital Marketing", "/services"],
    ],
  },
  {
    title: "Products",
    items: [
      ["Malipopay", "/products/malipopay"],
      ["Wedding", "/products/wedding"],
      ["Send", "/products/send"],
      ["Link", "/products/link"],
      ["Housing", "/products/housing"],
      ["Localhost", "/products/localhost"],
      ["Investors", "/products/investors"],
      ["Kikaba", "/products/kikaba"],
    ],
  },
  {
    title: "Company",
    items: [
      ["About", "/about"],
      ["Case studies", "/work"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0E] text-white py-16 sm:py-24 px-5 sm:px-8 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.09] pattern-mark" />
      <div className="relative max-w-[1240px] mx-auto">
        {/* Tagline strip */}
        <div className="flex justify-between items-end pb-14 border-b border-white/10 flex-wrap gap-8">
          <div>
            <div className="eyebrow text-white/55">Built for East Africa.</div>
            <h2 className="font-extrabold leading-[1.02] tracking-[-0.03em] mt-4 max-w-[720px] text-[clamp(40px,6vw,72px)]">
              Transforming data,
              <br />
              <span className="text-primary-500">powering decisions.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
          >
            Let&apos;s build together →
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 pt-14 pb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/lockwood-mark-negative.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <div className="font-extrabold text-2xl tracking-[-0.02em]">Lockwood</div>
            </div>
            <p className="text-sm leading-[1.6] text-white/60 mt-5 max-w-[280px]">
              Lockwood Technology Ltd, a Tanzanian software & digital solutions company, delivering across East Africa since 2016.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[13px]">
              <a href="mailto:info@lockwood.co.tz" className="text-white/85 hover:text-white">
                info@lockwood.co.tz
              </a>
              <a href="tel:+255655128012" className="text-white/85 hover:text-white">
                +255 655 128 012
              </a>
              <span className="text-white/55">Sinza Lion, Dar es Salaam</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold tracking-[0.1em] uppercase text-white/55 mb-[18px]">
                {c.title}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {c.items.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block py-1.5 text-white/85 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-white/50 text-xs flex-wrap">
          <span>&copy; {new Date().getFullYear()} Lockwood Technology Ltd. All rights reserved.</span>
          <span>·</span>
          <Link href="/privacy" className="text-inherit hover:text-white">Privacy</Link>
          <Link href="/terms" className="text-inherit hover:text-white">Terms</Link>
          <span>·</span>
          <a
            href="https://lockwood.co.tz"
            className="text-inherit hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Lockwood Technology product
          </a>
          <div className="flex-1" />
          <span>Dar es Salaam · Nairobi (via Malsery)</span>
        </div>
      </div>
    </footer>
  );
}
