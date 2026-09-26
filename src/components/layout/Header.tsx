"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/shop/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Construction Services" },
  { href: "/materials", label: "Building Materials" },
  { href: "/projects", label: "Projects / Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  // Close the mobile menu on navigation. Adjusting state during render (rather
  // than in an effect) avoids an extra render pass after every route change.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none border-b border-black/5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:gap-3 lg:px-4 xl:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Masterpoint Resources Ltd home">
          <Image
            src="/images/logo/masterpoint-logo-nav.png"
            alt="Masterpoint Resources Ltd"
            width={260}
            height={44}
            priority
            style={{ width: "auto" }}
            className="h-9 sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-2 xl:gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[13px] font-semibold tracking-wide transition-colors hover:text-brand-orange xl:text-sm ${
                pathname === link.href ? "text-brand-orange" : "text-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 xl:gap-3 lg:flex">
          <Link
            href="/materials"
            className="animate-[cta-glow_2s_ease-in-out_infinite] whitespace-nowrap rounded-md bg-brand-orange px-3 py-2 text-[13px] font-bold text-white transition-colors hover:bg-brand-orange-dark xl:px-4 xl:text-sm"
          >
            <span className="xl:hidden">Order Online</span>
            <span className="hidden xl:inline">Order Materials Online</span>
          </Link>
          <Link href="/cart" aria-label="View order list" className="relative flex h-10 w-10 shrink-0 items-center justify-center text-brand-dark hover:text-brand-orange">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 3h2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2l1.4-7.3H6" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-green px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
        <Link href="/cart" aria-label="View order list" className="relative flex h-10 w-10 items-center justify-center text-brand-dark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 3h2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.6a1.5 1.5 0 0 0 1.5-1.2l1.4-7.3H6" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-green px-1 text-[10px] font-bold text-white">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-dark max-sm:animate-[menu-glow_2.2s_ease-in-out_infinite] lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-black/5 py-3 text-base font-semibold ${
                  pathname === link.href ? "text-brand-orange" : "text-brand-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/materials"
              className="animate-[cta-glow_2s_ease-in-out_infinite] rounded-md bg-brand-orange px-4 py-3 text-center text-sm font-bold text-white"
            >
              Order Materials Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
