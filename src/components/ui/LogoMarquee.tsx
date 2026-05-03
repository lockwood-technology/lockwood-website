import Image from "next/image";

interface Logo {
  name: string;
  src: string;
}

export default function LogoMarquee({ logos, label }: { logos: Logo[]; label?: string }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden py-8 border-y border-ink-200 bg-white">
      {label && (
        <div className="eyebrow text-center mb-6 text-ink-500">{label}</div>
      )}
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center justify-center shrink-0 h-10 sm:h-12"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={48}
              className="object-contain h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
