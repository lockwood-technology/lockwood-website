import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimateIn from "@/components/ui/AnimateIn";

const PLACES: Array<{
  name: string;
  image: string;
  caption: string;
  body: string;
}> = [
  {
    name: "Tanzania",
    image: "/hero/tanzania.png",
    caption: "Headquarters · Dar es Salaam",
    body: "Lockwood Technology Ltd is incorporated and headquartered in Tanzania. Our product, engineering, design, and core delivery teams are based here. This is where our story started.",
  },
  {
    name: "Kenya",
    image: "/hero/kenya.png",
    caption: "Active · via Malsery partnership",
    body: "Lockwood is active in Kenya through a strategic partnership with Malsery, supporting regional presence, client coordination, and market reach across the East African region.",
  },
];

export default function HeadquartersSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <AnimateIn>
          <div className="max-w-[820px] mx-auto text-center mb-14 lg:mb-20">
            <div className="text-xs font-bold tracking-[0.16em] uppercase font-mono text-primary-500">
              Regional presence
            </div>
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-5">
              Headquartered in <span className="font-extrabold">Tanzania.</span>
              <br />
              Active in <span className="font-extrabold">Kenya.</span>
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.65] text-ink-600 mt-6 font-light">
              Lockwood is incorporated and headquartered in Tanzania. Our product, engineering, design, and core delivery teams are based in Dar es Salaam, while we extend into Kenya through a strategic partnership with Malsery — keeping a single point of accountability across both markets.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-[1080px] mx-auto">
          {PLACES.map((p, i) => (
            <AnimateIn key={p.name} delay={i * 0.12}>
              <div className="rounded-3xl bg-ink-50 p-8 lg:p-10 h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-contain"
                  />
                </div>
                <div className="mt-7">
                  <div className="text-xs font-bold tracking-[0.16em] uppercase font-mono text-primary-500">
                    {p.caption}
                  </div>
                  <div className="font-extrabold text-[28px] tracking-[-0.02em] text-ink-950 mt-3">
                    {p.name}
                  </div>
                  <p className="text-[15.5px] leading-[1.65] text-ink-600 mt-4 m-0 font-light">
                    {p.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
