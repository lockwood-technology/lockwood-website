"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Icons from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { products } from "@/data/products";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setProductsOpen(false);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/85 backdrop-blur border-b border-ink-200" : "bg-white/95 border-b border-transparent"
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
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => {
                if (!item.hasMenu) return;
                cancelClose();
                setProductsOpen(true);
              }}
              onMouseLeave={() => {
                if (!item.hasMenu) return;
                scheduleClose();
              }}
            >
              <Link
                href={item.href}
                onClick={closeMenus}
                className={`inline-flex items-center gap-1 text-sm font-medium px-3.5 py-2 rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-ink-950"
                    : "text-ink-600 hover:text-ink-950"
                }`}
              >
                {item.label}
                {item.hasMenu && <Icons name="chevronDown" className="w-3 h-3" />}
              </Link>

              {item.hasMenu && productsOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-[840px] z-50"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="p-2.5 bg-white rounded-2xl border border-ink-200 shadow-[0_20px_48px_rgba(17,17,17,0.12)] grid grid-cols-3 gap-0.5">
                    {products.map((p) => (
                      <Link
                        key={p.id}
                        href={p.href}
                        onClick={closeMenus}
                        className="flex gap-3 p-3 rounded-xl hover:bg-ink-50 transition-colors"
                      >
                        <div
                          className="w-10 h-10 rounded-xl shrink-0 grid place-items-center text-white"
                          style={{ backgroundColor: p.color }}
                        >
                          <Icons name={p.icon} className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-sm text-ink-950">{p.name}</div>
                          <div className="text-xs text-ink-500 mt-0.5 truncate">
                            {p.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            {mainNav.map((item) =>
              item.hasMenu ? (
                <div key={item.id} className="py-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
                    Products
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {products.map((p) => (
                      <Link
                        key={p.id}
                        href={p.href}
                        onClick={closeMenus}
                        className="flex gap-3 p-2 rounded-lg hover:bg-ink-50"
                      >
                        <div
                          className="w-9 h-9 rounded-lg shrink-0 grid place-items-center text-white"
                          style={{ backgroundColor: p.color }}
                        >
                          <Icons name={p.icon} className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-ink-950">{p.name}</div>
                          <div className="text-xs text-ink-500">{p.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenus}
                  className={`py-2.5 px-2 rounded-lg text-base font-medium ${
                    isActive(item.href) ? "text-primary-500" : "text-ink-700 hover:bg-ink-50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
