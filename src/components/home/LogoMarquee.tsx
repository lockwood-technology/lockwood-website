import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function LogoMarquee() {
  const mnos = partners.filter((p) => p.type === "mno");
  const banks = partners.filter((p) => p.type === "bank");

  return (
    <section className="py-16 border-y border-ink-200 bg-white">
      <Container>
        <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-10">
          Connected to every major payment network in Tanzania
        </div>

        {/* MNOs row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {mnos.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={p.h}
                className="object-contain h-12 sm:h-14 lg:h-16 w-auto"
                style={{ maxHeight: 64 }}
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Banks row */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-6">
          {banks.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.name}
                width={140}
                height={p.h}
                className="object-contain h-12 sm:h-14 lg:h-16 w-auto"
                style={{ maxHeight: 64 }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
