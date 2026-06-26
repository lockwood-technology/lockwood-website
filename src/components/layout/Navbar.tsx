"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 backdrop-blur border-b border-ink-200"
          : "bg-white/95 border-b border-transparent"
      }`}
    >
      <Container className="flex items-center gap-7 py-4">
        <Link href="/" className="flex items-center shrink-0" onClick={closeMenus}>
          <Image
            src="/logos/lockwood-combined.png"
            alt="Lockwood"
            width={140}
            height={26}
            priority
            className="h-[26px] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center gap-1 ml-4">
          {mainNav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={closeMenus}
              className={`inline-flex items-center text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${
                isActive(item.href)
                  ? "text-ink-950"
                  : "text-ink-600 hover:text-ink-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <Link
            href="/careers"
            onClick={closeMenus}
            className="text-sm font-semibold text-ink-950 hover:text-primary-500 transition-colors"
          >
            Careers
          </Link>
          <Button href="/contact" size="sm" variant="primary">
            Let&apos;s build together
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink-950 rounded-lg active:bg-ink-50"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icons name={open ? "x" : "menu"} className="w-6 h-6" />
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-ink-200 bg-white">
          <Container className="py-4 flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={closeMenus}
                className={`py-2.5 px-2 rounded-lg text-base font-medium ${
                  isActive(item.href)
                    ? "text-primary-500"
                    : "text-ink-700 hover:bg-ink-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/careers"
              onClick={closeMenus}
              className="py-2.5 px-2 rounded-lg text-base font-medium text-ink-700 hover:bg-ink-50"
            >
              Careers
            </Link>
            <Button href="/contact" size="md" variant="primary" className="mt-2">
              Let&apos;s build together
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
