"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/whatsapp";
import { useCart } from "@/components/shop/CartContext";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/materials", label: "Materials" },
  { href: "/calculators", label: "Calculators" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Masterpoint Resources Ltd home">
          <Image
            src="/images/logo/masterpoint-logo-nav.png"
            alt="Masterpoint Resources Ltd"
            width={220}
            height={36}
            priority
            style={{ width: "auto" }}
            className="h-8 sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-3.5 2xl:gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-[13px] font-semibold tracking-wide transition-colors hover:text-brand-orange 2xl:text-sm ${
                pathname === link.href ? "text-brand-orange" : "text-brand-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 2xl:gap-3 lg:flex">
          <a
            href={`tel:${company.phones[0].tel}`}
            className="hidden whitespace-nowrap text-sm font-bold text-brand-dark transition-colors hover:text-brand-blue 2xl:block"
          >
            {company.phones[0].display}
          </a>
          <a
            href={whatsappLink("Hello Masterpoint, I would like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-md border-2 border-brand-blue px-2.5 py-2 text-[12px] font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white 2xl:px-4 2xl:text-sm"
          >
            <span className="2xl:hidden">WhatsApp</span>
            <span className="hidden 2xl:inline">Chat on WhatsApp</span>
          </a>
          <Link
            href="/materials"
            className="whitespace-nowrap rounded-md bg-brand-orange px-2.5 py-2 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-brand-orange-dark 2xl:px-4 2xl:text-sm"
          >
            <span className="2xl:hidden">Order Online</span>
            <span className="hidden 2xl:inline">Order Materials Online</span>
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
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-dark lg:hidden"
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
            <a
              href={`tel:${company.phones[0].tel}`}
              className="rounded-md border-2 border-brand-dark px-4 py-3 text-center text-sm font-bold text-brand-dark"
            >
              Call {company.phones[0].display}
            </a>
            <a
              href={whatsappLink("Hello Masterpoint, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-brand-blue px-4 py-3 text-center text-sm font-bold text-brand-blue"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/materials"
              className="rounded-md bg-brand-orange px-4 py-3 text-center text-sm font-bold text-white"
            >
              Order Materials Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
